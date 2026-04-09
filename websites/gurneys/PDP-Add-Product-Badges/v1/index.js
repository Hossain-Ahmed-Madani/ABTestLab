/* 

Test container: https://app.convert.com/accounts/100412411/projects/100414848/experiences/1004191154/summary

Forced Variation: https://www.gurneys.com/products/gurney-girls-best-vff-hybrid-tomato?_conv_eforce=1004191154.1004449440&utm_campaign=qa5

*/

(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Gurneys",
        site_url: "https://www.gurneys.com/",
        test_name: "PDP - Add Product Badges [DTM]",
        page_initials: "AB-PRODUCT-BADGES",
        test_variation: 1,
        test_version: 0.0002,
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

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        q("head").insertAdjacentHTML(
            "beforeend",
            /* HTML */ `
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
            `,
        );

        q(".product__block--product-header-inner").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="ab-product-badges-container">
                    <div class="ab-product-badge ab-product-badge--only-from-gurneys">Only From Gurney's</div>
                    <div class="ab-product-badge ab-product-badge--bestseller">Bestseller</div>
                </div>
            `,
        );
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".product__block--product-header-inner"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
