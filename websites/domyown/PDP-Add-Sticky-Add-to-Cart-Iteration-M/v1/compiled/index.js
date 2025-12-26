/* 
Ticket: https://trello.com/c/q8ZdiK0H/4522-pdp-add-sticky-add-to-cart-iteration-m?search_id=8f2d25f5-996e-407f-8b24-04e50f0bf188
Test container: https://app.vwo.com/#/test/ab/275/edit/urls/?accountId=348406
QA URl: https://www.domyown.com/termidor-sc-p-184.html?to_mobile=true

*/

(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "PDP - Add Sticky Add to Cart (Iteration) [M]",
        site_url: "https://www.domyown.com",
        test_name: "PDP - Add Sticky Add to Cart (Iteration) [M]",
        page_initials: "AB-STICKY-ADD-TO-CART",
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

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && true);
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
        return true;
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
