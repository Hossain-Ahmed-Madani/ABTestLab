(async () => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "Trigema",
        site_url: "https://www.trigema.de",
        test_name: "Test001 [Trigema] - PDP - Visual Complexity of the PDP",
        page_initials: "AB-TEST001",
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

    function init() {
        if (window[page_initials] === true) return;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        console.table(TEST_CONFIG);

        q("head").insertAdjacentHTML(
            "beforeend",
            /*  HTML */ `
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
            
            `,
        );

        const watchListButton = q(".product-detail-buy-box .product-name__group form.heart");
        const reviewSection = q(".product-name__group.product-name__group--items-center");

        if (watchListButton) {
            reviewSection.insertAdjacentElement("beforeend", watchListButton);
        }

        if (reviewSection) {
            qq(reviewSection, "p.p--small--medium").forEach((item) => {
                const txt = item.textContent.trim();

                if (+txt >= 0 && +txt <= 5) {
                    item.classList.add("ab-review-value");
                    const newTxt = txt.replace(/\./g, ",");
                    item.innerText = newTxt + "/5";

                }
                
                if (txt.includes("Bewertungen")) {
                    item.classList.add("ab-review-total");
                    item.innerText = "(" + txt + ")";
                }
            });
        }

        q('.product-variant__info.product-variant__info--color .product-variant__label').innerText = "Farbe wählen:"
        q('.product-variant__info.product-variant__info--size .product-variant__label').innerText = "Größe wählen:"
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".product-detail-buy-box .product-name"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
