(async () => {
    const TEST_CONFIG = {
        client: "Hook & Loop",
        project: "Hook & Loop",
        site_url: "https://www.hookandloop.com",
        test_name: "H & L - A/B test idea - Adhesive Backed Product Names",
        page_initials: "AB-ADHESIVE-BACKED-PRODUCT-NAME",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

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

    async function waitForPromiseOnMutation(predicate, maxCount = 50) {
        let count = 0;

        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve(true);
            }

            new MutationObserver((mutationList, observer) => {
                count++;

                if (typeof predicate === "function" && predicate()) {
                    observer.disconnect();
                    return resolve(true);
                } else if (count > maxCount) {
                    observer.disconnect();
                    return reject(new Error(`Max polling count ${count} reached while waiting for predicate:\n${predicate.toString()}`));
                }
            }).observe(document.body, { childList: true, subtree: true });
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

    const DATA = {
        duragrip: {
            title: "Duragrip",
            img_url: "https://www.hookandloop.com/media/catalog/product/cache/67ee89799642c567a71fc92f3699d937/d/u/duragrip.jpg",
            link: "https://www.hookandloop.com/brands/duragrip",
        },
        velcro: {
            title: "Velcro",
            img_url: "https://www.hookandloop.com/media/catalog/product/cache/67ee89799642c567a71fc92f3699d937/v/e/velcro_logo_1.jpg",
            link: "https://www.hookandloop.com/brands/velcro",
        },
        "3m": {
            title: "3M",
            img_url: "https://hookandloop.com/media/wysiwyg/Logos/3M.png",
            link: "https://www.hookandloop.com/brands/3M",
        },
    };

    function getMatchingBrandData(targetNode) {
        const txt = targetNode.textContent.trim().toLowerCase();
        console.log("Txt", txt);

        if (txt.includes("duragrip")) {
            return DATA["duragrip"];
        } else if (txt.includes("velcro")) {
            return DATA["velcro"];
        } else if (txt.includes("3m")) {
            return DATA["3m"];
        }

        return null;
    }

    function updateLayout(targetNode) {
        // console.log("targetNode", targetNode);

        const matchedData = getMatchingBrandData(targetNode);
        if (!matchedData) return;
        const { title, img_url, link } = matchedData;

        targetNode.parentNode.classList.add("ab-title-and-brand-container");

        targetNode.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <a href="${link}" class="ab-brand">
                    <div class="ab-brand__label">Brand:</div>
                    <div class="ab-brand__img">
                        <img src="${img_url}" alt="${title}" />
                    </div>
                </a>
            `,
        );
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        // PLP Page
        // https://www.hookandloop.com/products
        qq("body.page-products .product-item-link .text-primary.font-bold.text-lg")?.forEach(updateLayout);

        // PDP Page

        // Side Cart Section

        // Cart Page
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q("body.page-products .product-item-link .text-primary.font-bold.text-lg") &&
            document.readyState !== "loading"
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
