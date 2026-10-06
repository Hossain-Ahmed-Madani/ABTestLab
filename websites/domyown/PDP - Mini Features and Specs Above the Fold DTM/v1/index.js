(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "Do My Own",
        site_url: "https://www.domyown.com",
        test_name: "PDP - Mini Features and Specs Above the Fold [DTM]",
        page_initials: "AB-PDP-MINI-FEATURES",
        test_variation: 1 /* 1, 2 */,
        test_version: 0.0005,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const SPEC_LIST_ROW_ORDER = [
        "target pests",
        "active ingredient",
        "manufacturer",
        "sprayer type",
        "tank size",
        "tank size (gal.)",
        "for use in",
        "coverage area",
        "special features",
        "parts included",
        "yield",
    ];

    async function waitForElementAsync(predicate, timeout = 20000, frequency = 150) {
        const startTime = Date.now();

        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve(true);
            }

            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime;

                if (elapsed >= timeout) {
                    clearInterval(interval);
                    return reject(new Error(`Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`));
                }

                if (typeof predicate === "function" && predicate()) {
                    clearInterval(interval);
                    return resolve(true);
                }
            }, frequency);
        });
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateSideCartLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    // 4. Expand / collapse
    // function handleExpandCollapse(item) {
    //     const text = q(item, ".pf-text");
    //     const btn = q(item, ".pf-toggle");

    //     // Show the button only if the clamped text is actually cut off
    //     const checkOverflow = () => {
    //         const wasOpen = item.classList.contains("open");
    //         item.classList.remove("open");
    //         btn.hidden = text.scrollHeight <= text.clientHeight + 1;
    //         item.classList.toggle("open", wasOpen && !btn.hidden);
    //         btn.textContent = item.classList.contains("open") ? "Collapse" : "Expand";
    //     };

    //     btn.addEventListener("click", () => {
    //         const open = item.classList.toggle("open");
    //         btn.textContent = open ? "Collapse" : "Expand";
    //     });

    //     checkOverflow();
    //     window.addEventListener("resize", checkOverflow);
    // }

    function handleExpandCollapse(item) {
        const text = q(item, ".pf-text");
        const content = q(item, ".pf-text-content");
        const btn = q(item, ".pf-toggle");

        // Keep original markup for the expanded state; collapsed state gets <br> flattened to spaces
        const fullHTML = content.innerHTML;
        const flatHTML = fullHTML.replace(/(\s*<br\s*\/?>\s*)+/gi, " ").trim();

        const render = (open) => {
            // content.innerHTML = open ? fullHTML : flatHTML;
            content.innerHTML = flatHTML;
        };

        // Show the button only if the clamped text is actually cut off
        const checkOverflow = () => {
            const wasOpen = item.classList.contains("open");

            item.classList.remove("open");
            render(false);

            btn.hidden = text.scrollHeight <= text.clientHeight + 1;

            const stillOpen = wasOpen && !btn.hidden;
            item.classList.toggle("open", stillOpen);
            render(stillOpen);
            btn.textContent = stillOpen ? "Collapse" : "Expand";
        };

        btn.addEventListener("click", () => {
            const open = item.classList.toggle("open");
            render(open);
            btn.textContent = open ? "Collapse" : "Expand";
        });

        checkOverflow();
        window.addEventListener("resize", checkOverflow);
    }

    function getSpecsData() {
        const obj = {};

        qq("#product-page-specs tr").forEach((tr) => {
            const key = q(tr, "th").textContent?.trim() || "";
            const htmlContent = q(tr, "td").innerHTML.trim() || "";

            if (key && htmlContent) {
                const normalizedKey = key.toLowerCase();

                if (!obj[normalizedKey]) {
                    obj[normalizedKey] = {
                        label: key,
                        htmlContent,
                    };
                }
            }
        });

        const foundList = [];

        SPEC_LIST_ROW_ORDER.forEach((rowName) => {
            const key = rowName.trim().toLowerCase();

            if (obj[key]) {
                foundList.push({
                    label: obj[key].label,
                    htmlContent: obj[key].htmlContent,
                });

                delete obj[key];
            }
        });

        Object.keys(obj).forEach((key) => {
            foundList.push({
                label: obj[key].label,
                htmlContent: obj[key].htmlContent,
            });
        });

        return foundList;
    }
    function createLayoutAndAddToggleFunctionality(data) {
        const targetNode = q("#mobile #product-page-nav, #desktop .leading-none:has(.price-breaks)");
        targetNode.insertAdjacentHTML(
            "beforebegin",
            /* HTML */ `
                <div class="ab-product-features-container px-2 border-grey-light border-b-6 pb-2">
                    <div class="ab-product-features text-sm text-grey-darker mb-4" id="product-features">
                        <h4 class="text-blue text-sm">${q("#mobile") ? "Product Highlights" : "Product Features"}</h4>
                        <ul class="-ml-6">
                            ${data
                                .slice(0, 3)
                                .map(
                                    (item) => /* HTML */ `
                                        <li class="text-xs text-blue pf-item">
                                            <span class="text-sm text-grey-darker pf-text">
                                                <strong>${item.label}:</strong>
                                                <span class="pf-text-content">${item.htmlContent}</span>
                                                <button type="button" class="pf-toggle" hidden>Expand</button>
                                            </span>
                                        </li>
                                    `,
                                )
                                .join("")}
                        </ul>
                        <p class="ab-see-application-instructions"><i>See application instructions and more detail in the Features and Specs section.</i></p>
                    </div>
                </div>
            `,
        );

        document.fonts.ready.then(() => {
            qq(".pf-item").forEach(handleExpandCollapse);
        });
    }

    function init() {
        if (window[TEST_CONFIG] === true) return;

        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[TEST_CONFIG] = true;

        const isMobile = !!q("#mobile");
        const productFeaturesControl = q("#product-features");
        productFeaturesControl?.classList.add("ab-control-feature-item");

        const data = getSpecsData();
        if (data.length >= 2) {
            createLayoutAndAddToggleFunctionality(data);
        }

        if (test_variation === 1 && productFeaturesControl) {
            q(".ab-product-features-container")?.classList.add("hidden");
        } else if (test_variation === 2 && data.length >= 2) {
            productFeaturesControl?.classList.add("hidden");
            if (isMobile) productFeaturesControl?.parentNode?.classList.add("hidden");
        }
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q("#mobile #product-page-nav, #desktop .leading-none:has(.price-breaks)") &&
            q("#product-page-specs tr") &&
            document.readyState !== "loading"
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
