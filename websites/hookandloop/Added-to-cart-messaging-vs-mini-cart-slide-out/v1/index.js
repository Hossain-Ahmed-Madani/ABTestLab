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
        delete_svg: /* HTML */ ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#eb0000" width="24" height="24" role="img">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
            <title>trash</title>
        </svg>`,
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
            // Check immediately first
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
                            q("button#menu-cart-icon")?.click();
                        }
                    }, 100);
                },
            },
            {
                selector: "",
                event: "click",
                callback: (e) => {
                    const currentTarget = e.currentTarget;
                },
            },
            {
                selector: "",
                event: "click",
                callback: (e) => {
                    const currentTarget = e.currentTarget;
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

    async function updateProductQuantityFormData({ productId, sku, measurementUnit, quantity }) {

        const formData = new FormData();
        const formKey = hyva.getFormKey();
        const uenc = hyva.getUenc();

        formData.append("form_key", formKey);
        formData.append(`cart[${productId}][qty]`, (measurementUnit * quantity).toString());
        formData.append("sku", sku);
        formData.append("uenc", uenc);

        const response = await fetch("https://www.hookandloop.com/checkout/cart/updatePost/", {
            headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
                priority: "u=1, i",
                "sec-ch-ua": '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
            },
            referrer: "https://www.hookandloop.com/checkout/cart",
            body: formData,
            method: "POST",
            mode: "cors",
            credentials: "include",
        });

        return response;
    }

    function getProductData(productElement) {
        const productId = productElement.getAttribute("data-item-id");
        const measurementUnit = +productElement.getAttribute("data-measurement-unit");
        const sku = productElement.getAttribute("data-sku");

        return {
            productId,
            sku,
            measurementUnit,
        };
    }

    const STATE = {
        updating_quantity_on_user_interaction: false,
    };

    const debouncedUpdateQuantity = debounce(async ({ productId, sku, measurementUnit, quantity }) => {
        const loaderElement = q(".z-50.fixed.inset-0.grid.place-items-center.bg-white\\/70.text-slate-800");

        loaderElement.setAttribute("style", "display:block;");
        const response = await updateProductQuantityFormData({ productId, sku, measurementUnit, quantity });
        window.dispatchEvent(new CustomEvent("reload-customer-section-data"));
        loaderElement.setAttribute("style", "display:none;");

        return response;
    }, 500);

    async function handleProductSideCartQuantityUpdate(e) {
        const currentTarget = e.currentTarget;
        const productQuantityInput = q(currentTarget, "input.ab-product-quantity");
        const productElement = e.target.closest(".flex.items-start.p-3.space-x-4.transition.duration-150.ease-in-out.rounded-lg.hover\\:bg-gray-100 ");
        const isValid = checkValidValue(productQuantityInput);

        if (!e.target.closest(".ab-product-quantity-update-action") || !isValid) return;

        let quantity = +productQuantityInput.value;

        if (e.target.closest(".ab-product-quantity-update-action__minus") && quantity > 0) {
            quantity--;
        }
        if (e.target.closest(".ab-product-quantity-update-action__plus")) {
            quantity++;
        }

        STATE["updating_quantity_on_user_interaction"] = true;

        productQuantityInput.value = quantity;

        if (quantity === 0) {
            const productRemoveButton = q(productElement, " button[type=button][aria-label='Close minicart'].text-black.transition-colors.hover\\:text-hnleb0 ");
            productRemoveButton?.click();
        } else {
            const { productId, sku, measurementUnit } = getProductData(productElement);
            debouncedUpdateQuantity({ productId, sku, measurementUnit, quantity });
        }

        setTimeout(() => {
            STATE["updating_quantity_on_user_interaction"] = false;
        }, 3000);
    }

    function checkValidValue(input) {
        const min = input.getAttribute("min") || 0;
        const max = input.getAttribute("max") || 1000000000;
        const value = input.value;

        return value && value >= min && +value <= max;
    }

    async function handleProductSideCartQuantityOnChange(e) {
        STATE["updating_quantity_on_user_interaction"] = true;

        const currentTarget = e.currentTarget;
        const productElement = e.target.closest(".flex.items-start.p-3.space-x-4.transition.duration-150.ease-in-out.rounded-lg.hover\\:bg-gray-100");
        const productQuantityElement = q(productElement, "span[x-html='item.qty']");
        const value = currentTarget.value;

        const isValid = checkValidValue(currentTarget);

        if (!isValid) {
            currentTarget.value = productQuantityElement.innerText;
        } else {
            const quantity = Math.ceil(+value);
            const { productId, sku, measurementUnit } = getProductData(productElement);
            debouncedUpdateQuantity({ productId, sku, measurementUnit, quantity });
        }

        setTimeout(() => {
            STATE["updating_quantity_on_user_interaction"] = false;
        }, 3000);
    }

    function getProductNewQuantityElement() {
        const div = document.createElement("div");
        div.className = "ab-product-quantity-container";
        div.innerHTML = /* HTML */ `
            <button type="button" class="ab-product-quantity-update-action ab-product-quantity-update-action__minus">${ASSETS.minus_svg}</button>
            <input
                name="qty"
                form="product_addtocart_form"
                type="number"
                pattern="[0-9]{0,10}"
                inputmode="numeric"
                min="0"
                max="1000000000"
                value="1"
                class="ab-product-quantity text-center   [appearance:textfield] [&amp;::-webkit-outer-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:appearance-none"
            />
            <button type="button" class="ab-product-quantity-update-action ab-product-quantity-update-action__plus">${ASSETS.plus_svg}</button>
        `;

        div.addEventListener("click", handleProductSideCartQuantityUpdate);
        q(div, "input.ab-product-quantity").addEventListener("change", handleProductSideCartQuantityOnChange);

        return div;
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
    }

    function updateProductElements(sideCart) {
        const productList = qq(sideCart, ".flex.items-start.p-3.space-x-4.transition.duration-150.ease-in-out.rounded-lg.hover\\:bg-gray-100");
        productList.forEach((productElement) => {
            const priceElement = q(productElement, '.w-3\\/4.space-y-2 > p > span[x-html*="$"]');
            const productSkuElement = q(productElement, 'p.text-sm span[x-html="item\\.product_sku"]');
            const productQuantityElement = q(productElement, 'span[x-html="item.qty"]');

            // Relocate Price Element
            if (priceElement && productSkuElement) {
                const productSkuParentElement = productSkuElement.parentNode;
                productSkuParentElement.classList.add("ab-product-sku-price-container");

                const priceParentElement = priceElement.parentNode;
                priceParentElement.classList.add("ab-price-container");

                productSkuParentElement.appendChild(priceParentElement);
            }

            // Create product quantity input
            if (!q(productElement, ".ab-product-quantity-container")) {
                const div = getProductNewQuantityElement();
                productQuantityElement.parentNode.insertAdjacentElement("afterend", div);
            }

            const productQuantityInput = q(productElement, ".ab-product-quantity");
            if (STATE["updating_quantity_on_user_interaction"] === false && productQuantityInput && productQuantityInput.value !== +productQuantityElement.innerText) {
                productQuantityInput.value = +productQuantityElement.innerText;
            }
        });
    }

    async function updateSideCartLayout() {
        qq("#cart-drawer").forEach(async (sideCart) => {
            const productLocatorItemSelector = "template[x-for='item in cartItems']";
            const checkoutButtonSelector = " a[href='https://www.hookandloop.com/checkout/']";
            const productContainer = q(sideCart, productLocatorItemSelector)?.parentNode;
            const checkoutButton = q(sideCart, checkoutButtonSelector);

            if (!(checkoutButtonSelector && productContainer && checkoutButton)) return;

            // Put all added products in a container
            if (!q(sideCart, ".ab-product-section-container")) {
                const div = document.createElement("div");
                div.className = "ab-product-section-container";

                productContainer.insertAdjacentElement("afterend", div);
                div.appendChild(productContainer);
            }

            if (q(sideCart, ".ab-product-section-container:empty") && productContainer) {
                q(sideCart, ".ab-product-section-container:empty").appendChild(productContainer);
            }

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
            updateProductElements(sideCart);

            console.log("mutation completed all side cart elements updated...");
        });
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
