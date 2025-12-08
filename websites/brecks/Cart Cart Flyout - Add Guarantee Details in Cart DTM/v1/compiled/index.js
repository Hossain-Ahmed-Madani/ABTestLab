(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Cart/Cart Flyout - Add Guarantee Details in Cart [DTM]",
        host: "https://www.brecks.com",
        test_name: "Ticket Name",
        page_initials: "AB-CART-FLYOUT",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        guarantee_image: "https://www.brecks.com/cdn/shop/files/LF_gurantee_logo.png?crop=center&height=100&v=1723133651&width=100",
    };

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

    function updateLayout() {
        console.log("Mutation observed - updating layout");
        createSideCartLayout();
        createCartPageLayout();
    }

    function mutationObserverFunction() {
        const targetNode = q("body");
        const debouncedUpdate = debounce(updateLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function createSideCartLayout() {
        if (q(".ab-cart-flyout--side-cart") || !q(".quick-cart__item")) return;

        q(".quick-cart__header")?.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-cart-flyout ab-cart-flyout--side-cart">
                    <div class="ab-cart-flyout__heading">
                        <div class="ab-cart-flyout__logo">
                            <img src="${ASSETS["guarantee_image"]}" alt="Guarantee Logo" />
                        </div>
                        <div class="ab-cart-flyout__title">What if my bulbs don’t grow?</div>
                    </div>
                    <div class="ab-cart-flyout__description">
                        No worries! Every Breck’s bulb, bareroot, and potted plant comes with our <b>no-risk lifetime guarantee</b>. If your purchase doesn’t bring you joy, reach out to
                        our Customer Service team and we’ll gladly replace your plant or provide a merchandise credit.
                    </div>
                </div>
            `
        );
    }

    function createCartPageLayout() {
        if (q(".ab-cart-flyout--cart-page") || !q(".cart__form-item")) return;

        q(".cart.page .cart__footer")?.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-cart-flyout ab-cart-flyout--cart-page">
                    <div class="ab-cart-flyout__heading">
                        <div class="ab-cart-flyout__logo">
                            <img src="${ASSETS["guarantee_image"]}" alt="Guarantee Logo" />
                        </div>
                        <div class="ab-cart-flyout__title">What if my bulbs don’t grow?</div>
                    </div>
                    <div class="ab-cart-flyout__description ab-cart-flyout__description--mobile"> 
                        No worries! Every Breck’s bulb, bareroot, and potted plant comes with our <b>no-risk lifetime guarantee.</b>  If your purchase doesn’t bring you joy,  reach out to our Customer Service team and we’ll gladly replace your plant or provide a merchandise credit. No time limit, no need to return the plant.
                    </div>
                    <div class="ab-cart-flyout__description ab-cart-flyout__description--desktop"> 
                        No worries! Every Breck’s bulb, bareroot, and potted plant comes with our <b>no-risk lifetime guarantee.</b> If your purchase doesn’t bring you joy,  reach out to our Customer Service team and we’ll gladly replace your plant or provide a merchandise credit. No time limit, no need to return the plant.
                    </div>
                </div>
            `);
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createSideCartLayout();
        createCartPageLayout();
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".quick-cart__header"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
