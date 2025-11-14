/* 
Ticket: https://trello.com/c/ElCqUynL/4316-cart-skip-cart-page-dtm?filter=label%3ATeam+Titans
Figma: https://www.figma.com/design/9JhvESiGmUH7UEXd0rEUDe/Gardens-Alive-?node-id=1904-193&t=q8YvJUuBScgFyZhE-0
Test container: https://app.convert.com/accounts/100412411/projects/100416781/experiences/1004174735/summary
Preview:
v1: https://springhillnursery.com/products/centennial-tulip?_conv_eforce=1004174735.1004411974&utm_campaign=qa5
v2: https://springhillnursery.com/products/centennial-tulip?_conv_eforce=1004174735.1004411975&utm_campaign=qa5

*/

(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "springhillnursery",
        host: "https://springhillnursery.com",
        test_name: "Cart - Skip Cart Page [DTM]",
        page_initials: "AB-SKIP-CART-PAGE",
        test_variation: 1 /* 1, 2 */,
        test_version: 0.0003,
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

    function createLayout() {
        if ((q(".ab-side-cart-checkout-btn") && q(".ab-cta-btn")) || !q(".quick-cart a.quick-cart__submit[href='/cart']")) return;

        const ctaBtn = document.createElement("a");
        ctaBtn.href = test_variation === 1 ? "/cart" : "javascript:void(0)";
        ctaBtn.className = "ab-cta-btn";
        ctaBtn.setAttribute("aria-label", test_variation === 1 ? "View Cart" : "Continue Shopping");
        ctaBtn.textContent = test_variation === 1 ? "View Cart" : "Continue Shopping";

        const checkoutBtn = document.createElement("a");
        checkoutBtn.href = "/checkout";
        checkoutBtn.className = "ab-side-cart-checkout-btn  btn btn--full btn--primary";
        checkoutBtn.setAttribute("aria-label", "Go To Checkout");
        checkoutBtn.textContent = "Go To Checkout";

        const targetNode = q(".quick-cart a.quick-cart__submit[href='/cart']");
        targetNode.insertAdjacentElement("afterend", ctaBtn);
        targetNode.insertAdjacentElement("afterend", checkoutBtn);

        if (test_variation !== 2) return;

        ctaBtn.addEventListener("click", (e) => q(".quick-cart button.quick-cart__close-icon").click());
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        createLayout();
        mutationObserverFunction();
    }

    function mutationObserverFunction() {
        const targetNode = q(".quick-cart");
        const debouncedUpdate = debounce(createLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".quick-cart a.quick-cart__submit[href='/cart']"));
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
