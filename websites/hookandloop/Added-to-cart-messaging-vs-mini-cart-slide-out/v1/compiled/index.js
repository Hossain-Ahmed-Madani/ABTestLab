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

    const ASSETS = {
        truck_svg: /* HTML */ `
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.166 14.9997V4.99967C12.166 4.55765 11.9904 4.13372 11.6779 3.82116C11.3653 3.5086 10.9414 3.33301 10.4993 3.33301H3.83268C3.39065 3.33301 2.96673 3.5086 2.65417 3.82116C2.34161 4.13372 2.16602 4.55765 2.16602 4.99967V14.1663C2.16602 14.3874 2.25381 14.5993 2.41009 14.7556C2.56637 14.9119 2.77834 14.9997 2.99935 14.9997H4.66602"
                    stroke="#1D1D1D"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path d="M13 15H8" stroke="#1D1D1D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M16.3327 15.0003H17.9993C18.2204 15.0003 18.4323 14.9125 18.5886 14.7562C18.7449 14.6 18.8327 14.388 18.8327 14.167V11.1253C18.8323 10.9362 18.7677 10.7528 18.6493 10.6053L15.7493 6.98033C15.6714 6.88273 15.5725 6.80389 15.46 6.74966C15.3475 6.69542 15.2242 6.66717 15.0993 6.66699H12.166"
                    stroke="#1D1D1D"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M14.6667 16.6668C15.5871 16.6668 16.3333 15.9206 16.3333 15.0002C16.3333 14.0797 15.5871 13.3335 14.6667 13.3335C13.7462 13.3335 13 14.0797 13 15.0002C13 15.9206 13.7462 16.6668 14.6667 16.6668Z"
                    stroke="#1D1D1D"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M6.33268 16.6663C7.25316 16.6663 7.99935 15.9201 7.99935 14.9997C7.99935 14.0792 7.25316 13.333 6.33268 13.333C5.41221 13.333 4.66602 14.0792 4.66602 14.9997C4.66602 15.9201 5.41221 16.6663 6.33268 16.6663Z"
                    stroke="#1D1D1D"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        `,
        check_circle_svg: /* HTML */ `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.41667 7.75L6.97222 9.30556L10.0833 6.19444M14.75 7.75C14.75 11.616 11.616 14.75 7.75 14.75C3.88401 14.75 0.75 11.616 0.75 7.75C0.75 3.88401 3.88401 0.75 7.75 0.75C11.616 0.75 14.75 3.88401 14.75 7.75Z"
                    stroke="#158A03"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        `,
        minus_svg: /* HTML */ `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 10H6" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        `,
        plus_svg: /* HTML */ `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6V10M10 10V14M10 10H14M10 10L6 10" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        `,
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

    function getProgressLayout() {
        return /* HTML */ `
            <div class="ab-subtotal-progress-container">
                <div class="ab-subtotal-progress-heading ab-subtotal-progress-heading__unlock-shipping">
                    <div class="ab-subtotal-progress-heading__icon">${ASSETS.truck_svg}</div>
                    <div class="ab-subtotal-progress-heading__text">Almost there! Unlock Free Shipping at $200!</div>
                </div>
                <div class="ab-subtotal-progress-heading ab-subtotal-progress-heading__free-shipping">
                    <div class="ab-subtotal-progress-heading__icon">${ASSETS.check_circle_svg}</div>
                    <div class="ab-subtotal-progress-heading__text">You’ve Earned Free Shipping!</div>
                </div>
                <div class="ab-subtotal-progress-bar">
                    <div class="ab-subtotal-progress-bar__progress"></div>
                </div>
                <div class="ab-subtotal-progress-prices">
                    <span class="ab-added-subtotal"></span>
                    <span>&nbsp;of&nbsp;</span>
                    <span>$200</span>
                </div>
            </div>
        `;
    }

    function getProductQuantityLayout() {
        return /* HTML */ `
            <div class="ab-product-quantity-container">
                <div class="ab-product-quantity-update-action ab-product-quantity-update-action__minus">${ASSETS.minus_svg}</div>
                <div class="ab-product-quantity">0</div>
                <div class="ab-product-quantity-update-action ab-product-quantity-update-action__plus">${ASSETS.plus_svg}</div>
            </div>
        `;
    }

    function updateProgressContainer(sideCart) {
        const subTotalSelector = "span[x-html='cart\\.subtotal'] .price";

        if (!q(sideCart, subTotalSelector)) return;

        const subTotalTxt = q(sideCart, subTotalSelector)?.innerText;
        const subTotal = +subTotalTxt.replace("$", "").replace(",", "");

        const subTotalProgressContainer = q(sideCart, ".ab-subtotal-progress-container");
        const abAddedSubtotal = q(sideCart, ".ab-added-subtotal");
        const abProgressBar = q(sideCart, ".ab-subtotal-progress-bar__progress");

        if (abAddedSubtotal.innerText === subTotalTxt) return;

        if (subTotal >= 200) {
            subTotalProgressContainer.classList.add("ab-subtotal-progress-container__free-shipping");
        } else {
            subTotalProgressContainer.classList.remove("ab-subtotal-progress-container__free-shipping");
        }

        abAddedSubtotal.innerText = subTotalTxt;
        const calculatedPercentage = (subTotal / 200) * 100;

        abProgressBar.style.width = `${calculatedPercentage >= 100 ? 100 : calculatedPercentage}%`;

        console.log("updated progress container...");
    }

    function updateProductItems(sideCart) {
        const productList = qq(sideCart, ".flex.items-start.p-3.space-x-4.transition.duration-150.ease-in-out.rounded-lg.hover\\:bg-gray-100");
        productList.forEach((productItem) => {
            const priceElement = q(productItem, '.w-3\\/4.space-y-2 > p > span[x-html*="$"]');
            const productSkuElement = q(productItem, 'p.text-sm span[x-html="item\\.product_sku"]');

            // Relocate Price Element
            if (priceElement && productSkuElement) {
                const productSkuParentElement = productSkuElement.parentNode;
                productSkuParentElement.classList.add("ab-product-sku-price-container");

                const priceParentElement = priceElement.parentNode;
                priceParentElement.classList.add("ab-price-container");

                productSkuParentElement.appendChild(priceParentElement);
            }

            // Create product quantity input
            const productQuantityElement = q(productItem, 'span[x-html="item.qty"]');

            if (!q(productItem, ".ab-product-quantity-container")) {
                const layout = getProductQuantityLayout();
                productQuantityElement.parentNode.insertAdjacentHTML("afterend", layout);
            }

            const productQuantityInput = q(productItem, ".ab-product-quantity");
            if (productQuantityInput && productQuantityInput.innerText !== productQuantityElement.innerText) {
                productQuantityInput.innerText = productQuantityElement.innerText;
            }

            console.log("updated product items...");
        });
    }

    async function updateSideCartLayout() {
        qq("#cart-drawer").forEach(async (sideCart) => {
            const productLocatorItemSelector = "template[x-for='item in cartItems']";
            const checkoutButtonSelector = " a[href='https://www.hookandloop.com/checkout/']";

            const hasRequiredItems = await waitForElementAsync(() => !!(q(sideCart, productLocatorItemSelector) && q(sideCart, checkoutButtonSelector)));

            if (!hasRequiredItems) return;

            // Put all added products in a container
            if (!q(sideCart, ".ab-product-section-container")) {
                const div = document.createElement("div");
                div.className = "ab-product-section-container";

                const productContainer = q(sideCart, productLocatorItemSelector).parentNode;
                productContainer.insertAdjacentElement("afterend", div);
                div.appendChild(productContainer);
            }

            const checkoutButton = q(sideCart, checkoutButtonSelector);

            // Add Continue Shopping
            if (!q(sideCart, ".ab-continue-shopping-btn")) {
                const button = document.createElement("button");
                button.className = "ab-continue-shopping-btn";
                button.innerText = "Continue Shopping";

                const sideCartCloseBtn = q(sideCart, "button.absolute.top-0.right-2.p-4.mt-2.text-black.transition-colors[aria-label='Close minicart']");
                button.addEventListener("click", (e) => sideCartCloseBtn.click());

                checkoutButton.insertAdjacentElement("beforebegin", button);
            }

            // Add Progress Bar
            if (!q(sideCart, ".ab-subtotal-progress-container")) {
                const layout = getProgressLayout();
                checkoutButton.parentNode.insertAdjacentHTML("beforebegin", layout);
            }

            // Update Progress Bar
            updateProgressContainer(sideCart);

            // Update Product Items
            updateProductItems(sideCart);

            console.log("mutation end side cart updated...");
        });
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

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateSideCartLayout, 250);

        const observer = new MutationObserver((mutationList, observer) => {
            debouncedUpdate();
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
