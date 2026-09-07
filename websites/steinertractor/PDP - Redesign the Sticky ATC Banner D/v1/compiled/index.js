(async () => {
    const TEST_CONFIG = {
        page_initials: "AB-STICKY-ATC-BANNER",
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
        return document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function updateLayout() {
        const productDetailHeader = q(".product-detail-header-section:not(:has(.container))");
        if (!productDetailHeader) return;

        const container = document.createElement('div');
        container.classList.add('container');
        qq(productDetailHeader, ":scope > div").forEach(item => container.appendChild(item));
        productDetailHeader.appendChild(container);

        q(".container#shop").insertAdjacentElement("beforebegin", productDetailHeader);
        q(".header-section-1").insertAdjacentElement("beforeend", q(".header-section-2 h4.title"));
        q('.header-section-4 .cart.clearfix').insertAdjacentElement("afterbegin", q('.header-section-3 h4'));
    }

    function mutationObserverFunction() {
        const targetNode = q(".container#shop");
        return new MutationObserver(updateLayout).observe(targetNode, { childList: true, subtree: false, attributes: false });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        updateLayout();
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".product-detail-header-section") && q(".container#shop"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
