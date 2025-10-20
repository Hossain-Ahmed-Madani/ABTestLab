(async () => {
    const TEST_CONFIG = {
        client: "Hook & Loop",
        project: "Hook & Loop",
        site_url: "https://www.hookandloop.com",
        test_name: "H & L - A/B test idea - Added to cart messaging vs. mini cart slide-out.",
        page_initials: "AB-MINI-CART",
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

    function eventListeners() {
        [
            {
                selector: "button[type='submit'][form='product_addtocart_form']",
                event: "click",
                callback: (e) => {
                    setTimeout(async () => {
                        let invalidCount = 0;
                        qq(`span.font-bold[x-text^="pdpAttrValidationerrors"]:not(:empty)`).forEach((_) => {
                            invalidCount += 1;
                        });

                        if (invalidCount > 0) return;

                        const loadingCompleted = await waitForElementAsync(() => !q("body .loader"));

                        if (loadingCompleted) {
                            console.log("loading completed, clicking on side cart open button");
                            q("button#menu-cart-icon")?.click();
                        }
                    }, 100);
                },
            },
            {
                selector: "",
                event: "click",
                callback: (e) => {
                    e.currentTarget;
                },
            },
            {
                selector: "",
                event: "click",
                callback: (e) => {
                    e.currentTarget;
                },
            },
        ].forEach(async ({ selector, event, callback }) => {
            if (!selector) return;
            const hasFoundRequiredItems = await waitForElementAsync(() => qq(selector)?.length > 0);
            if (hasFoundRequiredItems) qq(selector).forEach((elem) => elem.addEventListener(event, callback));
        });
    }

    async function updateSideCartLayout() {
        qq("#cart-drawer").forEach(async (sideCart) => {
            const productLocatorItemSelector = "template[x-for='item in cartItems']";
            const checkoutButtonSelector = " a[href='https://www.hookandloop.com/checkout/']";

            const hasRequiredItems = await waitForElementAsync(() => !!(q(sideCart, productLocatorItemSelector) && q(sideCart, checkoutButtonSelector)));

            if (!hasRequiredItems) return;

            const productContainer = q(sideCart, productLocatorItemSelector).parentNode;

            if (!q(sideCart, ".ab-product-section-container")) {
                const div = document.createElement("div");
                div.className = "ab-product-section-container";
                productContainer.insertAdjacentElement("afterend", div);
                div.appendChild(productContainer);
            }

            const checkoutButton = q(sideCart, checkoutButtonSelector);

            if (!q(sideCart, ".ab-continue-shopping-btn")) {
                const button = document.createElement("button");
                button.className = "ab-continue-shopping-btn";
                button.innerText = "Continue Shopping";

                const sideCartCloseBtn = q(sideCart, "button.absolute.top-0.right-2.p-4.mt-2.text-black.transition-colors[aria-label='Close minicart']");
                button.addEventListener("click", (e) => sideCartCloseBtn.click());

                checkoutButton.insertAdjacentElement("beforebegin", button);
            }
        });
    }

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");

        const observer = new MutationObserver((mutationList, observer) => {
            updateSideCartLayout();
        }).observe(targetNode, { childList: true, subtree: true, attributes: true });

        return observer;
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        mutationObserverFunction();
        eventListeners();
    }

    function requiredItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q("button#menu-cart-icon") && q("#cart-drawer"));
    }

    try {
        const hasFoundRequiredItems = await waitForElementAsync(requiredItems);
        if (hasFoundRequiredItems) init();
    } catch (error) {
        console.warn(error);
    }
})();
