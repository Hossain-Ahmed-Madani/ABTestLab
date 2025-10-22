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

    class ProductCarousel {
        constructor(container) {
            this.container = container;
            if (!this.container) {
                console.error("Carousel container not found");
                return;
            }

            this.cardContainer = q(this.container, ".ab-related-products__card-container");
            this.cards = qq(this.container, ".ab-related-product__card");
            this.prevBtn = q(this.container, ".ab-carousel-btn--prev");
            this.nextBtn = q(this.container, ".ab-carousel-btn--next");
            this.gap = 12; // 12px gap between items

            if (!this.cardContainer || !this.prevBtn || !this.nextBtn) {
                console.error("Required carousel elements not found");
                return;
            }

            this.init();
        }

        init() {
            this.addCarouselStyles();
            this.attachEventListeners();
            this.updateNavigation();

            // Handle window resize
            this.resizeHandler = debounce(() => {
                this.updateNavigation();
            }, 250);
            window.addEventListener("resize", this.resizeHandler);
        }

        addCarouselStyles() {
            // Add necessary classes to elements
            this.cardContainer.classList.add("ab-carousel-scroll");
            this.container.classList.add("ab-carousel-wrapper");
        }

        attachEventListeners() {
            this.prevBtn.addEventListener("click", () => this.slidePrev());
            this.nextBtn.addEventListener("click", () => this.slideNext());

            // Touch and mouse support for dragging
            let startX = 0;
            let scrollLeft = 0;
            let isDragging = false;

            // Touch Events
            this.cardContainer.addEventListener("touchstart", (e) => {
                startX = e.touches[0].pageX;
                scrollLeft = this.cardContainer.scrollLeft;
                isDragging = true;
            });

            this.cardContainer.addEventListener("touchmove", (e) => {
                if (!isDragging) return;
                const x = e.touches[0].pageX;
                const walk = startX - x;
                this.cardContainer.scrollLeft = scrollLeft + walk;
            });

            this.cardContainer.addEventListener("touchend", () => {
                isDragging = false;
                this.updateNavigation();
            });

            // Mouse Events
            this.cardContainer.addEventListener("mousedown", (e) => {
                e.preventDefault(); // Prevent unwanted selections
                startX = e.pageX;
                scrollLeft = this.cardContainer.scrollLeft;
                isDragging = true;
                this.cardContainer.classList.add("dragging");
            });

            this.cardContainer.addEventListener("mousemove", (e) => {
                if (!isDragging) return;
                const x = e.pageX;
                const walk = startX - x;
                this.cardContainer.scrollLeft = scrollLeft + walk;
            });

            this.cardContainer.addEventListener("mouseup", () => {
                isDragging = false;
                this.cardContainer.classList.remove("dragging");
                this.updateNavigation();
            });

            this.cardContainer.addEventListener("mouseleave", () => {
                if (isDragging) {
                    isDragging = false;
                    this.cardContainer.classList.remove("dragging");
                    this.updateNavigation();
                }
            });

            // Update navigation on scroll (debounced)
            this.updateNavigationDebounced = debounce(() => {
                this.updateNavigation();
            }, 100);

            this.cardContainer.addEventListener("scroll", this.updateNavigationDebounced);
        }

        getVisibleItems() {
            // Mobile: 2.25 items, Desktop: 2.5 items (breakpoint at 768px)
            const isMobile = window.innerWidth < 768;
            return isMobile ? 2.25 : 2.5;
        }

        getCardWidth() {
            if (this.cards.length === 0) return 0;
            const visibleItems = this.getVisibleItems();
            const containerWidth = this.cardContainer.offsetWidth;
            const totalGap = this.gap * (visibleItems - 1);
            return (containerWidth - totalGap) / visibleItems;
        }

        updateCardWidths() {
            const cardWidth = this.getCardWidth();
            this.cards.forEach((card) => {
                card.style.width = `${cardWidth}px`;
            });
        }

        slidePrev() {
            const cardWidth = this.getCardWidth();
            const scrollAmount = cardWidth + this.gap;
            this.cardContainer.scrollBy({
                left: -scrollAmount,
                behavior: "smooth",
            });
        }

        slideNext() {
            const cardWidth = this.getCardWidth();
            const scrollAmount = cardWidth + this.gap;
            this.cardContainer.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }

        updateNavigation() {
            this.updateCardWidths();

            const scrollLeft = this.cardContainer.scrollLeft;
            const maxScroll = this.cardContainer.scrollWidth - this.cardContainer.clientWidth;

            // Show/hide prev button
            if (scrollLeft <= 1) {
                this.prevBtn.classList.add("disabled");
            } else {
                this.prevBtn.classList.remove("disabled");
            }

            // Show/hide next button
            if (scrollLeft >= maxScroll - 1) {
                this.nextBtn.classList.add("disabled");
            } else {
                this.nextBtn.classList.remove("disabled");
            }
        }

        destroy() {
            // Remove event listeners
            window.removeEventListener("resize", this.resizeHandler);
            this.cardContainer.removeEventListener("scroll", this.updateNavigationDebounced);

            // Remove classes
            this.cardContainer.classList.remove("ab-carousel-scroll");
            this.container.classList.remove("ab-carousel-wrapper");

            // Reset card widths
            this.cards.forEach((card) => {
                card.style.width = "";
            });

            console.log("Carousel destroyed");
        }
    }
    
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

    function updateProgressSection(sideCart) {
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

    const carousel_data = [
        {
            imgUrl: "https://www.hookandloop.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/d/g/dg38whls_1.png",
            link: "#",
            title: 'DuraGrip® Brand - 3/4" Beige Loop: Peel & Stick - Rubber',
            price: "$21.50",
        },
        {
            imgUrl: "https://www.hookandloop.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/d/g/dg38whls_1.png",
            link: "#",
            title: 'DuraGrip® Brand - 3/4" Beige Loop: Peel & Stick - Rubber',
            price: "$21.50",
        },
        {
            imgUrl: "https://www.hookandloop.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/d/g/dg38whls_1.png",
            link: "#",
            title: 'DuraGrip® Brand - 3/4" Beige Loop: Peel & Stick - Rubber',
            price: "$21.50",
        },
        {
            imgUrl: "https://www.hookandloop.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/d/g/dg38whls_1.png",
            link: "#",
            title: 'DuraGrip® Brand - 3/4" Beige Loop: Peel & Stick - Rubber',
            price: "$21.50",
        },
        {
            imgUrl: "https://www.hookandloop.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/d/g/dg38whls_1.png",
            link: "#",
            title: 'DuraGrip® Brand - 3/4" Beige Loop: Peel & Stick - Rubber',
            price: "$21.50",
        },
    ];

    function getRelatedProductsElement() {
        const div = document.createElement("div");
        div.className = "ab-related-products-container";
        div.innerHTML = /* HTML */ `
            <p class="ab-related-products-heading text-lg font-medium leading-7 text-gray-900">
                <strong>Pairs Well With</strong>
            </p>
            <div class="ab-related-products ab-related-products--carousel">
                <div class="ab-related-products__card-container">
                    ${carousel_data
                        .map(
                            ({ imgUrl, link, title, price }) => /* HTML */ `
                                <div class="ab-related-product ab-related-product__card">
                                    <a href="${link}" class="ab-related-product__img">
                                        <img src="${imgUrl}" alt="${title}/>
                                    </a>
                                    <a href="${link}" class="ab-related-product__title">${title}</a>
                                    <div class="ab-related-product__price">${price}</div>
                                </div>
                            `
                        )
                        .join("")}
                </div>

                <button class="ab-carousel-btn ab-carousel-btn--prev disabled" aria-label="Previous products">&lt;</button>
                <button class="ab-carousel-btn ab-carousel-btn--next disabled" aria-label="Next products">&gt;</button>
            </div>
        `;

        return div;
    }

    function insertElementsInStickySection(sideCart) {
        const checkoutButtonSelector = " a[href='https://www.hookandloop.com/checkout/']";
        const checkoutButton = q(sideCart, checkoutButtonSelector);

        if (!checkoutButton) return;

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
            const htmlLayout = getProgressLayout();
            checkoutButton.parentNode.insertAdjacentHTML("beforebegin", htmlLayout);
        }
    }

    function updateProductContainer(sideCart) {
        const productLocatorItemSelector = "template[x-for='item in cartItems']";
        const productContainer = q(sideCart, productLocatorItemSelector)?.parentNode;

        console.log(productContainer);

        if (!productContainer) return;

        let sectionContainer = q(sideCart, ".ab-product-section-container") || null;

        // Create Wrapper Section
        if (!sectionContainer) {
            sectionContainer = document.createElement("div");
            sectionContainer.className = "ab-product-section-container";
            productContainer.insertAdjacentElement("afterend", sectionContainer);
        }

        // Insert Product Items
        if (!q(sectionContainer, ".relative.grid.gap-6.sm\\:gap-8.px-1.py-3.sm\\:px-3.bg-white.border-b.border-container.overflow-y-auto.overscroll-y-contain")) {
            sectionContainer.insertAdjacentElement("afterbegin", productContainer);
        }

        // Create, Insert & initialize Related Products Slider and initialize
        if (!q(sectionContainer, ".ab-related-products-container")) {
            const relatedProductContainerElement = getRelatedProductsElement();
            sectionContainer.insertAdjacentElement("beforeend", relatedProductContainerElement);
            const sliderContainer = q(relatedProductContainerElement, ".ab-related-products--carousel");
            new ProductCarousel(sliderContainer);
        }
    }

    function removeItemsOnCartEmpty(sideCart) {
        const productLocatorItemSelector = "template[x-for='item in cartItems']";
        const productContainer = q(sideCart, productLocatorItemSelector)?.parentNode;

        if (productContainer) return;

        qq(".ab-product-section-container, ab-subtotal-progress-container, .ab-continue-shopping-btn").forEach((elem) => elem.remove());
    }

    async function updateSideCartLayout() {
        qq("#cart-drawer").forEach(async (sideCart) => {
            // Remove Items when side cart is empty
            removeItemsOnCartEmpty(sideCart);

            // Put all added products in a container & add slider
            updateProductContainer(sideCart);

            // Insert Layouts in sticky section
            insertElementsInStickySection(sideCart);

            // Update Progress Bar
            updateProgressSection(sideCart);

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
