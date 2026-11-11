(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Brecks.com",
        site_url: "https://www.brecks.com",
        test_name: "PDP - Single Fertilizer Add-On [DTM]",
        page_initials: "AB-SINGLE-FERTILIZER",
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

        q(".product__price-block.product__block.product__block--medium").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
            <div class="ab-single-fertilizer">
                <div class="ab-single-fertilizer__top">
                    <label for="ab_fertilizer" class="ab-single-fertilizer__label">
                        <input type="checkbox" id="ab_fertilizer" class="ab-single-fertilizer__input"/>
                        <span class="ab-single-fertilizer__label-text">Add plant food for bigger, brighter blooms</span>
                    </label>
                </div>
                <div class="ab-single-fertilizer__bottom">
                    <div class="ab-single-fertilizer___img">
                        <img src="https://www.brecks.com/cdn/shop/files/84749.webp?v=1776107453&width=1200" alt=""/>
                    </div>
                    <div class="ab-single-fertilizer___text-content">
                        <h3 class="ab-single-fertilizer__title">Breck's® Food for Bulbs and Perennials · $8.99</h3>
                        <ul class="ab-single-fertilizer__benefit-lists">
                            <li class="ab-single-fertilizer__benefit-item">
                                Recommended for dahlias
                            </li>
                            <li class="ab-single-fertilizer__benefit-item">
                                Stronger roots and bigger, brighter bloom
                            </li>
                            <li class="ab-single-fertilizer__benefit-item">
                                One 13 oz bag covers 40 sq ft
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            `,
        );
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".product__price-block.product__block.product__block--medium"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
