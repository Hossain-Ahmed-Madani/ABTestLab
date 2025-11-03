/* 
Ticket: https://trello.com/c/ElCqUynL/4316-cart-skip-cart-page-dtm?filter=label%3ATeam+Titans
Figma: https://www.figma.com/design/9JhvESiGmUH7UEXd0rEUDe/Gardens-Alive-?node-id=1904-193&t=q8YvJUuBScgFyZhE-0
Test container: https://app.convert.com/accounts/100412411/projects/100416781/experiences/1004174735/summary
Preview:
v1: 
v2:

*/

(async () => {
    const TEST_CONFIG = {
        page_initials: "AB-SKIP-CART-PAGE",
        test_variation: 1 /* 1, 2 */,
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

    async function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        q(".quick-cart a.quick-cart__submit[href='/cart']").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <a href="/checkout" class="ab-side-cart-checkout-btn  btn btn--full btn--primary" aria-label="Go To Checkout">Go To Checkout </a>
                <a href="${"/cart" }" class="ab-cta-btn" aria-label="${"View Cart" }">
                    ${"View Cart" }
                </a>
            `
        );

        return;
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".quick-cart a.quick-cart__submit[href='/cart']") );
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
