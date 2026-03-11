(async () => {
    const TEST_ID = "PP27AU";
    const VARIANT_ID = "V1"; /* V1, V2 */

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            message,
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        client: "Acadia",
        project: "Princess Polly",
        site_url: "https://www.princesspolly.com.au",
        test_name: "PP27AU: [COLLECTION] Quick Add Modal with Images (2) SET UP TEST",
        page_initials: "AB-PP27US",
        test_variation: 1,
        test_version: 0.0007,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    async function fetchAndParseURLApi(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const html = await response.text();
            const dom = new DOMParser().parseFromString(html, "text/html");
            return dom;
        } catch (error) {
            // console.error("Fetch and parse failed:", error);
            return null;
        }
    }

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

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    const initialInnerLayout = /* HTML */ `
        <div class="ab-carousel-container">
            <div class="ab-swiper swiper"></div>
            <div class="ab-carousel-skeleton-loader">
                <div class="ab-carousel-skeleton-loader__item"></div>
                <div class="ab-carousel-skeleton-loader__item"></div>
                <div class="ab-carousel-skeleton-loader__item"></div>
            </div>
        </div>
        <div class="ab-product-title"></div>
        <div class="ab-product-price-container"></div>
        <div class="ab-afterpay-container"></div>
        <div class="ab-color-swatch-container">
            <h2 class="product__active-color">
                <span class="product__label product__active-color-label">Color:</span>
                <span class="product__value product__active-color-value"></span>
            </h2>
            <div class="product__swatches" data-colors=""></div>
        </div>
        <div class="ab-product-size-selector-container">
            <!-- on initialize add -> ab-product-size-selector-container--initialized -->
            <h2 class="product__label product__label--size">
                <span class="product__active-size-label">Size:</span>
                <span class="product__size-value" data-product-size-value=""></span>
                <span class="product__low-stock" data-product-low-stock="" style="display: none;"></span>
            </h2>
            <div class="product__select-sizes" data-product-sizes=""></div>
            <div class="ab-product-sizes-skeleton-loader">
                <div class="ab-product-sizes-skeleton-loader__item"></div>
                <div class="ab-product-sizes-skeleton-loader__item"></div>
                <div class="ab-product-sizes-skeleton-loader__item"></div>
                <div class="ab-product-sizes-skeleton-loader__item"></div>
                <div class="ab-product-sizes-skeleton-loader__item"></div>
                <div class="ab-product-sizes-skeleton-loader__item"></div>
                <div class="ab-product-sizes-skeleton-loader__item"></div>
            </div>
        </div>
        <button class="ab-add-to-cart-cta" disabled>
            <span class="ab-add-to-cart-cta__text ab-add-to-cart-cta__text--select-size">SELECT A SIZE</span>
            <span class="ab-add-to-cart-cta__text ab-add-to-cart-cta__text--add-to-bag">ADD TO BAG</span>
        </button>
        <a href="#" class="ab-view-full-details">View Full Details</a>
    `;

    function createModalLayout() {
        const layout = /* HTML */ `
            <div class="${page_initials}__modal-layout">
                <div class="${page_initials}__modal-backdrop"></div>
                <div class="${page_initials}__modal">
                    <div class="${page_initials}__modal__head">
                        <div class="${page_initials}__modal__close-cta"></div>
                    </div>
                    <div class="${page_initials}__modal__body">
                        <div class="${page_initials}__modal__body__content">${initialInnerLayout}</div>
                    </div>
                </div>
            </div>
        `;

        q("body").insertAdjacentHTML("afterbegin", layout);
    }

    let swiperInstance = null;

    async function initSwiper() {
        await waitForElementAsync(() => typeof window.Swiper === "function" && window.Swiper && q(".ab-swiper"));
        const el = q(".ab-swiper");
        swiperInstance = new window.Swiper(el, {
            slidesPerView: "auto", // use slide width from CSS (163px)
            spaceBetween: 5, // 5px gap between slides
            loop: false, // or true if you want looping
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            watchSlidesProgress: true,
        });
    }

    function destroySwiper() {
        if (swiperInstance) {
            swiperInstance.destroy();
            swiperInstance = null;
        }
    }

    function applyAfterPayStyles() {
        const afterpay = q("#afterpay-placement-pdp");
        if (afterpay !== null) {
            const root = afterpay.shadowRoot;
            if (root !== null) {
                const logo = root.querySelector("svg");
                if (logo) {
                    logo.setAttribute("width", 80);
                    logo.setAttribute("height", 14);
                }
                const mainCopy = q(root, ".afterpay-paragraph");
                const promo = q("[data-promo-id]");
                const promoActive = q(root, ".afterpay-promo");
                if (mainCopy) {
                    /* Remove markup from this running before */
                    const previousCopy = mainCopy.querySelector(".payment-terms__price");
                    if (previousCopy) {
                        mainCopy.removeChild(previousCopy);
                    }

                    const totalPriceText = q(".ab-product-price-container .product__sale-price-row span[data-product-price]").textContent.trim();

                    // Extract currency sign (first non-digit, non-dot, non-comma character)
                    const currencyMatch = totalPriceText.match(/[^0-9.,\s]+/);
                    const currency = currencyMatch ? currencyMatch[0] : "";

                    // Extract numeric price, parse, and format to two decimals
                    const priceMatch = totalPriceText.match(/[\d,.]+/);
                    const totalPrice = priceMatch ? Number(priceMatch[0].replace(/,/g, "")).toFixed(2) : "";
                    const payments = 4;
                    const payment = (totalPrice / payments).toFixed(2);
                    const money = `${currency}${payment}`;

                    const paymentCopy = document.createElement("span");
                    paymentCopy.classList.add("payment-terms__price");
                    if (promo && promoActive) {
                        paymentCopy.innerText = `${payments} X ${money} and`;
                    } else {
                        paymentCopy.innerText = `${payments} X ${money} with`;
                    }
                    mainCopy.insertBefore(paymentCopy, mainCopy.childNodes[0]);
                }

                let styles = `
                
                    // FOR TEST
                    .product-tile-size {
                        opacity: 1 !important;
                        visibility: visible !important;
                    }

                    .product-tile__quick,
                    .product-tile__quick-add {
                        display: block !important;
                    }

                    //
                    :host {
                        margin-block-end: 0 !important;
                        margin-block-start: 0 !important;
                    }
                    #logo-link {
                        margin-left: 3px;
                    }
                    .afterpay-link {
                        font-size: 0 !important;
                        -webkit-box-ordinal-group: 4;
                        -ms-flex-order: 3;
                        order: 3;
                        outline: 0 none transparent !important;
                    }
                    .afterpay-logo {
                        display: -webkit-box !important;
                        display: -ms-flexbox !important;
                        display: flex !important;
                        margin: 0 !important;
                        -webkit-box-ordinal-group: 3;
                        -ms-flex-order: 2;
                        order: 2;
                    }
                    .afterpay-logo-link {
                        -webkit-box-align: center !important;
                        -ms-flex-align: center !important;
                        align-items: center !important;
                        display: -webkit-inline-box !important;
                        display: -ms-inline-flexbox !important;
                        display: inline-flex !important;
                        -webkit-box-orient: horizontal !important;
                        -webkit-box-direction: normal !important;
                        -ms-flex-flow: row wrap !important;
                        flex-flow: row wrap !important;
                        -webkit-box-pack: center !important;
                        -ms-flex-pack: center !important;
                        justify-content: flex-start !important;
                    }

                    .afterpay-logo-link .afterpay-logo.brand-afterpay.logo-cashappafterpay,
                    .afterpay-logo-link .afterpay-logo  svg {
                        max-width: 61px !important;
                        width: 61px !important;
                        max-height: 15px !important;
                        height: 15px !important;
                    }

                    .afterpay-logo-link #logo-link svg {
                        display: none !important;
                    }

                    .afterpay-paragraph {
                        -webkit-box-align: center !important;
                        -ms-flex-align: center !important;
                        align-items: center !important;
                        display: -webkit-box !important;
                        display: -ms-flexbox !important;
                        display: flex !important;
                        -webkit-box-orient: horizontal !important;
                        -webkit-box-direction: normal !important;
                        -ms-flex-flow: row wrap !important;
                        flex-flow: row wrap !important;
                        font-family: var(--font-medium);
                        font-size: 15px !important;
                        margin: 0 !important;
                        text-transform: uppercase !important;
                        letter-spacing: var(--custom-letter-spacing);
                    }
                    .afterpay-paragraph > span {
                        padding: 0 5px 0 0 !important;
                    }
                    .afterpay-paragraph > span.afterpay-logo-link,
                    .afterpay-paragraph > span.payment-amount {
                        padding-left: 0 !important;
                        padding-right: 0 !important;
                    }
                    .afterpay-paragraph > span.afterpay-text2 {
                        max-width: 173px;
                        padding-right: 0 !important;
                    }
                    @media (min-width: 375px) {
                        .afterpay-paragraph {
                            font-size: 14px !important;
                        }
                        .afterpay-paragraph > span.afterpay-text2 {
                            max-width: 192px;
                        }
                    }
                    @media (min-width: 414px) {
                        .afterpay-paragraph {
                            font-size: 12px !important;
                        }
                        .afterpay-paragraph > span.afterpay-text2 {
                            max-width: 208px;
                        }
                    }
                    .afterpay-logo.brand-afterpay.lockup-black,
                    .afterpay-logo.brand-afterpay.lockup-black svg {
                        height: 14px !important;
                        width: unset !important;
                        min-width: unset !important;
                        min-height: unset !important;
                    }
                    .payment-terms__price {
                        text-transform: none;
                        font-family: "forma_djr_bannermedium", monospace, Helvetica, Arial, sans-serif;
                        font-weight: 500;
                        font-size: 13px;
                        line-height: 16px;
                        letter-spacing: 0.8px;
                        vertical-align: middle;
                        color: rgba(0, 0, 0, 1);


                    }
                    .afterpay-main-text,
                    .payment-amount,
                    .afterpay-suffix-text,
                    .afterpay-text2 {
                        display: none;
                    }

                
                `;

                if (window.location.href.includes("princesspolly.com.au")) {
                    styles += `
                        .afterpay-logo.brand-afterpay.lockup-black svg {
                            margin-top: 1.5px;
                        }
                    `;
                }

                if (promo && promoActive) {
                    styles += `
                        .afterpay-paragraph {
                            padding-right: 5px;
                        }
                        @media only screen and (max-width: 1023px) {
                            .afterpay-paragraph {
                                max-width: 280px;
                            }
                        }
                        .afterpay-promo {
                            -webkit-box-align: center;
                            -ms-flex-align: center;
                            align-items: center;
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-orient: horizontal;
                            -webkit-box-direction: normal;
                            -ms-flex-flow: row wrap;
                            flex-flow: row wrap;
                            font-size: 0;
                            -webkit-box-ordinal-group: 2;
                            -ms-flex-order: 1;
                            order: 1;
                        }
                        @media only screen and (max-width: 1023px) {
                            .afterpay-logo-link:before {
                                content: 'Your first';
                                font-family: 'forma_djr_bannerregular';
                                font-size: 12px;
                                -webkit-box-ordinal-group: 3;
                                -ms-flex-order: 2;
                                order: 2;
                                padding-right: 3px;
                                padding-top: 3px;
                                padding-bottom: 3px;
                            }
                        }
                        @media only screen and (min-width: 1024px) {
                            .afterpay-promo:before {
                                content: 'Your first';
                                font-family: 'forma_djr_bannerregular';
                                font-size: 12px;
                                -webkit-box-ordinal-group: 3;
                                -ms-flex-order: 2;
                                order: 2;
                                padding-left: 3px;
                            }
                        }
                        .afterpay-promo .promo-badge {
                            border-radius: 10px;
                            font-size: 12px;
                            line-height: 1;
                            -webkit-box-ordinal-group: 2;
                            -ms-flex-order: 1;
                            order: 1;
                            padding: 2px 7px;
                        }
                        .afterpay-promo-terms-link {
                            font-size: 0;
                        }
                        .afterpay-promo-terms-link:after {
                            content: 'T&Cs Apply';
                            font-size: 12px;
                        }
                        .afterpay-logo-link {
                            -webkit-box-ordinal-group: 3;
                            -ms-flex-order: 2;
                            order: 2;
                        }
                        .afterpay-logo-link:after {
                            content: ' ORDER';
                            font-size: 12px;
                            -webkit-box-ordinal-group: 4;
                            -ms-flex-order: 3;
                            order: 3;
                            padding-left: 5px;
                        }
                        .afterpay-min-spend {
                            font-size: 12px;
                            -webkit-box-ordinal-group: 4;
                            -ms-flex-order: 3;
                            order: 3;
                            flex-basis: 100%;
                        }
                        .payment-terms__price {
                            /*	
                            opacity: 0;
                            position: absolute;
                            overflow: hidden;
                            clip: rect(0 0 0 0);
                            height: 1px;
                            width: 1px;
                            margin: -1px;
                            padding: 0;
                            border: 0;
                            
                            */
                        }
                        .afterpay-promo .promo-lockup > strong {
                            font-size: 12px;
                            padding: 0 5px;
                            background-color: #b2fce4;
                            border-radius: 10px;
                            display: inline-block;
                        }

                    `;
                }
                const style = document.createElement("style");
                style.textContent = styles;
                root.append(style);
            }
        }
    }

    function clearProductSizeContent() {
        // Clear Size Section Items For Loader
        q(".ab-product-size-selector-container").classList.remove("ab-product-size-selector-container--initialized");
        qq(`
            .ab-product-size-selector-container .product__size-value,
            .ab-product-size-selector-container > .product__select-sizes`).forEach((item) => (item.innerHTML = ""));
    }

    async function updateModalLayout(url) {
        destroySwiper();
        clearProductSizeContent();

        const dom = await fetchAndParseURLApi(url);
        if (!dom) return;

        q(".ab-product-title").innerHTML = q(dom, ".product__title").innerHTML;
        q(".ab-product-price-container").innerHTML = q(dom, ".product__sale-price-row").outerHTML;
        q(".ab-color-swatch-container").innerHTML = qq(dom, ".product__active-color, .product__swatches:has(> .swatch)")
            .map((el) => el.outerHTML)
            .join("");

        // Size Section
        q(".ab-product-size-selector-container").classList.add("ab-product-size-selector-container--initialized");
        q(".ab-product-size-selector-container > .product__select-sizes").innerHTML = q(dom, ".product__select-sizes").outerHTML;

        // CTA Section
        q(".ab-add-to-cart-cta").setAttribute("disabled", "");
        q("a.ab-view-full-details").setAttribute("href", url);

        // AfterPay
        const afterPayElement = q(dom, "#afterpay-placement-pdp");
        if (afterPayElement) {
            q(".ab-afterpay-container").innerHTML = afterPayElement.outerHTML;
            applyAfterPayStyles();
        } else {
            q(".ab-afterpay-container").innerHTML = /* HTML */ `<div class="ab-afterpay-null"></div>`;
        }

        // Carousel
        q(".ab-swiper.swiper").innerHTML = /* HTML */ `
            <div class="ab-swiper-wrapper swiper-wrapper">
                ${qq(dom, " .product__image.product__thumb-overlay img")
                    .map((el) => `<div class="ab-swiper-slide swiper-slide">${el.outerHTML}</div> `)
                    .join("")}
            </div>
            <div class="swiper-pagination"></div>
        `;
        initSwiper();
    }

    function animate(targetElement, className, interval) {
        if (!targetElement) return;
        if (className.includes(".")) className.replace(".", "");
        targetElement.classList.add(className);
        setTimeout(() => targetElement.classList.remove(className), interval);
    }

    function preventScroll(e) {
        e.preventDefault();
    }

    function handleModalView(action = "show") {
        const modalShowClass = `${page_initials}--modal-show`;
        const body = document.body;

        const modal = q(`.${page_initials}__modal`);

        if (!modal) return;

        if (action === "show" && !body.classList.contains(modalShowClass)) {
            animate(modal, "slide-in", 200);
            modal.classList.add("slide-in");
            body.classList.add(modalShowClass);
            document.addEventListener("touchmove", preventScroll, { passive: false });
        }

        if (action === "hide") {
            animate(modal, "slide-out", 200);
            setTimeout(() => body.classList.remove(modalShowClass), 200);
            document.removeEventListener("touchmove", preventScroll);
        }
    }

    function getUrlFromColorSwatch(item) {
        if (!item) return;
        return item.getAttribute("href") ?? "";
    }

    async function handleQuickAddClick(containerSelector, quickAddSelector) {
        await waitForElementAsync(() => q(containerSelector));

        qq(containerSelector).forEach((item) => {
            item.addEventListener("click", (e) => {
                if (e.target.closest(quickAddSelector)) {
                    e.preventDefault();
                    const quickAddButton = e.target.closest(quickAddSelector);
                    const swatchItem = q(quickAddButton.parentNode, ".swatch--active") || q(quickAddButton.parentNode.parentNode, ".swatch--active");
                    const url = getUrlFromColorSwatch(swatchItem);
                    if (!url) return;

                    // Clear Content For Loader
                    qq(`
                        .ab-product-title, 
                        .ab-product-price-container, 
                        .ab-afterpay-container, 
                        .ab-color-swatch-container .product__swatches, 
                        .ab-color-swatch-container .product__value.product__active-color-value`).forEach((item) => (item.innerHTML = ""));

                    // Update & Show
                    updateModalLayout(url);
                    handleModalView("show");
                }
            });
        });
    }

    function clickFunction() {
        // Home Quick Add
        if (window.location.pathname === "/") {
            handleQuickAddClick(".nosto-carousel-tabs__wrap", ".quick-shop-carousel-quickadd");
            handleQuickAddClick(".shopify-section--homepage-nosto-tabs", ".quick-shop-quickadd");
        }

        // Collection Quick Add
        if (window.location.pathname.includes("/collection")) {
            handleQuickAddClick(".product-tiles", ".product-tile__quick");
            handleQuickAddClick(".nosto-carousel-tabs__wrap", ".quick-shop-carousel-quickadd");
        }

        // Modal Base Events
        q(`.${page_initials}__modal__close-cta`).addEventListener("click", () => {
            handleModalView("hide");
        });

        q(`.${page_initials}__modal-backdrop`).addEventListener("click", (e) => {
            if (e.target.closest(`.${page_initials}__modal`)) return;
            handleModalView("hide");
        });

        // Modal Content Click
        q(`.${page_initials}__modal__body__content`).addEventListener("click", (e) => {
            // Swatch Items CLick
            const swatchItem = e.target.closest(".ab-color-swatch-container .swatch");
            if (swatchItem) {
                e.preventDefault();
                if (swatchItem.classList.contains("swatch--active")) return;

                const swatchAriaLabel = swatchItem.getAttribute("aria-label");
                const url = getUrlFromColorSwatch(swatchItem);

                qq(".ab-color-swatch-container .swatch").forEach((item) => item.classList.remove("swatch--active"));
                swatchItem.classList.add("swatch--active");

                // Static Update
                q(".ab-product-size-selector-container .product__size-value").innerHTML = "";
                qq(".ab-product-size-selector-container .product__select-sizes-item").forEach((item) => item.classList.remove("active"));
                q(".ab-add-to-cart-cta").setAttribute("disabled", "");
                q(".ab-product-title").innerText = swatchAriaLabel;
                q(".ab-color-swatch-container .product__value.product__active-color-value").innerText = swatchAriaLabel.split(" ").pop();

                // Click Control Swathes & Api Update
                qq(`.product-tile__swatches .swatch[href*='${url}']`).forEach((item) => item.click());
                updateModalLayout(url);
            }

            // Product Size Click
            const productSizeItem = e.target.closest(".ab-product-size-selector-container .product__select-sizes-item:not(.active)");
            if (productSizeItem) {
                q(".ab-product-size-selector-container .product__size-value").innerText = productSizeItem.textContent.trim();
                qq(".ab-product-size-selector-container .product__select-sizes-item").forEach((item) => item.classList.remove("active"));
                productSizeItem.classList.add("active");
                q(".ab-add-to-cart-cta").removeAttribute("disabled");
            }

            const addToCartCta = e.target.closest("button.ab-add-to-cart-cta:not(:disabled)");
            if (addToCartCta) {
                const selectedSize = q(".ab-product-size-selector-container .product__select-sizes-item.active button");
                const variantId = selectedSize.getAttribute("data-size-variant-id");

                const targetButton =
                    q(`button.product-tile-size__button[data-product-tile-variant-id="${variantId}"]`) ||
                    q(`button.quick-shop-carousel-size__button[data-quick-shop-id="${variantId}"]`) ||
                    q(`button.quick-shop-size__button[data-quick-shop-id="${variantId}"]`);

                targetButton.click();
                handleModalView("hide");
            }
        });

        // CLOSE POPUP -> ON ESC CLICK
        document.addEventListener("keydown", function (evt) {
            evt = evt || window.event; // Fallback for older browsers (optional)
            if (evt.key === "Escape" || evt.key === "Esc") {
                handleModalView("hide");
            }
        });
    }

    async function handleMobileSwipe() {
        await waitForElementAsync(() => q(`.${page_initials}__modal-layout`) && isTouchEnabled());

        const container = q(`.${page_initials}__modal-layout`);
        container.addEventListener("touchstart", startTouch, false);
        container.addEventListener("touchmove", moveTouch, false);

        // Swipe Up / Down / Left / Right
        let initialX = null;
        let initialY = null;

        function startTouch(e) {
            initialX = e.touches[0].clientX;
            initialY = e.touches[0].clientY;
        }

        function moveTouch(e) {
            if (initialX === null) {
                return;
            }

            if (initialY === null) {
                return;
            }

            let currentX = e.touches[0].clientX;
            let currentY = e.touches[0].clientY;

            let diffX = initialX - currentX;
            let diffY = initialY - currentY;

            if (Math.abs(diffX) > Math.abs(diffY)) {
                // sliding horizontally
                if (diffX > 0) {
                    // swiped left
                    // console.log("swiped left");
                } else {
                    // swiped right
                    // console.log("swiped right");
                }
            } else {
                // sliding vertically
                if (diffY > 0) {
                    // swiped up
                    // console.log("swiped up");
                } else {
                    // swiped down
                    // console.log("swiped down");
                }
            }

            // Swipe Down Threshold
            if (diffY <= -5) {
                handleModalView("hide");
            }

            initialX = null;
            initialY = null;

            e.preventDefault();
        }
    }

    function injectStyles() {
        const cssText = /* HTML */ `.AB-PP27US .quick-shop-carousel-size, .AB-PP27US .quick-shop-size, .AB-PP27US .product-tile-size, .AB-PP27US
        .ab-afterpay-container:has(.ab-afterpay-null) { display: none; } .AB-PP27US .ab-product-title:empty, .AB-PP27US .ab-product-price-container:empty, .AB-PP27US
        .ab-afterpay-container:empty, .AB-PP27US .ab-color-swatch-container:has(.product__swatches:empty)::after, .AB-PP27US
        .ab-color-swatch-container:has(.product__swatches:empty)::before, .AB-PP27US .ab-product-sizes-skeleton-loader__item { background-color: rgb(229, 229, 229); animation: pulse
        0.5s infinite linear; border-radius: 2px; } .AB-PP27US .ab-product-title:empty { height: 20px; width: 60%; } .AB-PP27US .ab-product-price-container:empty { height: 21px; width:
        30%; } .AB-PP27US .ab-afterpay-container:empty { height: 20px; width: 50%; } .AB-PP27US .ab-color-swatch-container:has(.product__swatches:empty) { display: flex; flex-wrap:
        wrap; } .AB-PP27US .ab-color-swatch-container:has(.product__swatches:empty) .product__active-color { order: -1; width: 100%; } .AB-PP27US
        .ab-color-swatch-container:has(.product__swatches:empty)::before { margin-right: 15px; } .AB-PP27US .ab-color-swatch-container:has(.product__swatches:empty)::after, .AB-PP27US
        .ab-color-swatch-container:has(.product__swatches:empty)::before { content: ""; display: block; height: 28px; width: 28px; border-radius: 50%; } .AB-PP27US
        .ab-product-size-selector-container:not(.ab-product-size-selector-container--initialized) .ab-product-sizes-skeleton-loader { display: grid; grid-template-columns: repeat(4,
        1fr); gap: 5px; } .AB-PP27US .ab-product-size-selector-container:not(.ab-product-size-selector-container--initialized) .ab-product-sizes-skeleton-loader__item { display: block;
        height: 30px; } .AB-PP27US .ab-carousel-container { margin-bottom: 14px; margin-left: -13px; margin-right: -13px; } .AB-PP27US .ab-carousel-container
        .ab-swiper.swiper-initialized ~ .ab-carousel-skeleton-loader { display: none; } .AB-PP27US .ab-carousel-container .ab-carousel-skeleton-loader { display: flex; justify-content:
        flex-start; align-items: center; gap: 5px; margin-bottom: 14px; overflow: hidden; } .AB-PP27US .ab-carousel-container .ab-carousel-skeleton-loader__item { width: 163px;
        min-width: 163px; height: 222px; background-color: rgb(229, 229, 229); animation: pulse 0.5s infinite linear; } .AB-PP27US .ab-carousel-container
        .ab-swiper:not(.swiper-initialized) { display: none; } .AB-PP27US .ab-carousel-container .ab-swiper .ab-swiper-slide { width: 163px !important; } .AB-PP27US
        .ab-carousel-container .ab-swiper-slide img { width: 163px; height: 222px; object-fit: cover; /* or contain, depending on your need */ } .AB-PP27US .ab-carousel-container
        .ab-swiper .swiper-pagination { display: flex; justify-content: center; align-items: center; gap: 8px; } .AB-PP27US .ab-carousel-container .ab-swiper .swiper-pagination-bullet {
        width: 6px !important; height: 6px !important; border: 1px solid rgb(255, 255, 255) !important; background-color: transparent !important; margin: 0 !important; } .AB-PP27US
        .ab-carousel-container .ab-swiper .swiper-pagination-bullet.swiper-pagination-bullet-active { border: 1px solid rgb(255, 255, 255) !important; background-color: rgb(255, 255,
        255) !important; } .AB-PP27US .ab-product-title { font-family: "forma_djr_bannermedium", monospace, Helvetica, Arial, sans-serif; font-weight: 500; font-size: 16px; line-height:
        20px; letter-spacing: 0.8px; vertical-align: middle; color: rgb(0, 0, 0); margin-bottom: 10px; } .AB-PP27US .ab-product-price-container { font-family: "forma_djr_bannermedium",
        monospace, Helvetica, Arial, sans-serif; font-weight: 500; font-size: 16px; line-height: 21px; letter-spacing: 0.8px; vertical-align: middle; color: rgb(0, 0, 0); margin-bottom:
        14px; } .AB-PP27US .ab-product-price-container:has(span.product__price-savings-percent:not(:empty)) span[data-shop-currency], .AB-PP27US
        .ab-product-price-container:has(span.product__price-savings-percent:not(:empty)) span[data-product-price] { color: #e80404; } .AB-PP27US .ab-product-price-container
        span:has(s:not(:empty)) { margin: 0 5px; } .AB-PP27US .ab-product-price-container .product__price-savings-percent { font-size: 13px; line-height: 1; } .AB-PP27US
        .ab-afterpay-container { display: flex; margin-bottom: 14px; } .AB-PP27US .ab-afterpay-container #afterpay-placement-pdp { margin: 0; } .AB-PP27US .ab-color-swatch-container {
        margin-bottom: 14px; } .AB-PP27US .ab-color-swatch-container h2.product__active-color { font-family: "forma_djr_bannermedium", monospace, Helvetica, Arial, sans-serif;
        font-weight: 500; font-size: 14px; line-height: 19px; letter-spacing: 0.8px; vertical-align: middle; color: rgb(0, 0, 0); margin-bottom: 11px; } .AB-PP27US
        .ab-color-swatch-container .product__swatches { display: flex; justify-content: flex-start; align-items: center; flex-wrap: wrap; gap: 15px; } .AB-PP27US
        .ab-color-swatch-container .swatch { width: 22px; height: 22px; margin: 0; } .AB-PP27US .ab-color-swatch-container .swatch:before { top: -3px; bottom: -3px; left: -3px; right:
        -3px; } .AB-PP27US .ab-product-size-selector-container { margin-bottom: 15px; } .AB-PP27US .ab-product-size-selector-container .ab-product-sizes-skeleton-loader { display: none;
        } .AB-PP27US .ab-product-size-selector-container .ab-product-sizes-skeleton-loader__item { display: none; } .AB-PP27US .ab-product-size-selector-container
        .product__label.product__label--size { font-family: "forma_djr_bannermedium", monospace, Helvetica, Arial, sans-serif; font-weight: 500; font-size: 14px; line-height: 19px;
        letter-spacing: 0.8px; vertical-align: middle; color: rgb(0, 0, 0); margin-bottom: 13px; } .AB-PP27US .ab-product-size-selector-container .product__select-sizes-list {
        flex-grow: 1; width: 100%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; } .AB-PP27US .ab-product-size-selector-container
        .product__select-sizes-item:has(.product__select-sizes-button.disabled) { display: none; } .AB-PP27US .ab-product-size-selector-container .product__select-sizes-item.active
        .product__select-sizes-button { background-color: rgb(0, 0, 0); color: rgb(255, 255, 255); } .AB-PP27US .ab-product-size-selector-container .product__select-sizes-button {
        width: 100%; height: 30px; background-color: rgb(255, 255, 255); border: 1px solid rgb(0, 0, 0); display: flex; align-items: center; justify-content: center; font-family:
        "forma_djr_bannermedium", monospace, Helvetica, Arial, sans-serif; font-weight: 500; font-size: 10px; line-height: 100%; letter-spacing: 0.8px; text-align: center;
        vertical-align: middle; color: rgb(0, 0, 0); cursor: pointer; } .AB-PP27US .ab-add-to-cart-cta { width: 100%; height: 44px; background-color: rgb(0, 0, 0); margin-bottom: 12px;
        cursor: pointer; display: flex; justify-content: center; align-items: center; } .AB-PP27US .ab-add-to-cart-cta:disabled { pointer-events: none; opacity: 0.5; } .AB-PP27US
        .ab-add-to-cart-cta:disabled .ab-add-to-cart-cta__text--select-size { display: block; } .AB-PP27US .ab-add-to-cart-cta:disabled .ab-add-to-cart-cta__text--add-to-bag { display:
        none; } .AB-PP27US .ab-add-to-cart-cta__text { font-family: "forma_djr_bannerbold", monospace, Helvetica, Arial, sans-serif; font-weight: 700; font-size: 16px; line-height:
        100%; letter-spacing: 0.8px; text-align: center; vertical-align: middle; color: rgb(255, 255, 255); text-transform: uppercase; } .AB-PP27US
        .ab-add-to-cart-cta__text--select-size { display: none; } .AB-PP27US .ab-add-to-cart-cta__text--add-to-bag { display: block; } .AB-PP27US a.ab-view-full-details { display:
        block; font-family: "forma_djr_bannermedium", monospace, Helvetica, Arial, sans-serif; font-weight: 500; font-size: 14px; line-height: 19px; letter-spacing: 0.8px; text-align:
        center; text-decoration: underline; text-decoration-style: solid; text-decoration-skip-ink: auto; width: max-content; margin: auto; } .AB-PP27US--v1 .ab-carousel-container {
        display: none; } .AB-PP27US--v1 .AB-PP27US__modal { min-height: 430px; } .AB-PP27US--v1 .AB-PP27US__modal__head { margin-bottom: 29px; } .AB-PP27US--v2 .AB-PP27US__modal {
        min-height: 658px; } .AB-PP27US--v2 .AB-PP27US__modal__head { margin-bottom: 32px; } /** * ---------------------------------------- * MODAL *
        ---------------------------------------- */ body.AB-PP27US--modal-show { overflow: hidden; } body.AB-PP27US--modal-show .AB-PP27US__modal-layout { display: block; }
        body.AB-PP27US--modal-show .AB-PP27US__modal-backdrop { display: block; } .AB-PP27US__modal-layout { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
        height: 100dvh; background: transparent; z-index: 10000; overflow: hidden; display: none; justify-content: center; align-items: flex-end; } .AB-PP27US__modal-backdrop { display:
        none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); } .AB-PP27US__modal { opacity: 1; width: 100%; min-height: 422px;
        background: rgb(255, 255, 255); position: absolute; bottom: 0; z-index: 1; padding: 16px 13px 20px; border-radius: 13px 13px 0 0; } .AB-PP27US__modal__head { display: flex;
        justify-content: center; align-items: center; } .AB-PP27US__modal__close-cta { display: block; width: 56px; height: 6px; border-radius: 3px; background: rgb(229, 229, 229); }
        .slide-in { -webkit-animation: slide-in 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; animation: slide-in 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; } .slide-out {
        -webkit-animation: slide-out 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; animation: slide-out 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; } /** *
        ---------------------------------------- * animation slide-in * ---------------------------------------- */ @-webkit-keyframes slide-in { 0% { opacity: 0; -webkit-transform:
        translateY(600px); transform: translateY(600px); } 100% { opacity: 1; -webkit-transform: translateY(0); transform: translateY(0); } } @keyframes slide-in { 0% { opacity: 0;
        -webkit-transform: translateY(600px); transform: translateY(600px); } 100% { opacity: 1; -webkit-transform: translateY(0); transform: translateY(0); } } /** *
        ---------------------------------------- * animation slide-out * ---------------------------------------- */ @-webkit-keyframes slide-out { 0% { opacity: 1; -webkit-transform:
        translateY(0); transform: translateY(0); } 100% { opacity: 0; -webkit-transform: translateY(600px); transform: translateY(600px); } } @keyframes slide-out { 0% { opacity: 1;
        -webkit-transform: translateY(0); transform: translateY(0); } 100% { opacity: 0; -webkit-transform: translateY(600px); transform: translateY(600px); } } /** *
        ---------------------------------------- * animation pulse * ---------------------------------------- */ @-webkit-keyframes pulse { 0% { background-color: rgb(229, 229, 229); }
        50% { background-color: rgb(240, 240, 240); } 100% { background-color: rgb(229, 229, 229); } } @keyframes pulse { 0% { background-color: rgb(229, 229, 229); } 50% {
        background-color: rgb(240, 240, 240); } 100% { background-color: rgb(229, 229, 229); } } `;
        const style = document.createElement("style");
        style.id = `${page_initials}-styles`;
        style.textContent = cssText;
        document.head.append(style);
    }

    function init() {
        if (window[page_initials] === true) return;

        window[page_initials] = true;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        if (window.location.href.includes("princesspolly.com.au")) {
            q("body").classList.add(`${page_initials}--AU`);
        }

        injectStyles();
        createModalLayout();
        clickFunction();
        handleMobileSwipe();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && (q(".product-tiles") || q(".nosto-carousel-tabs__wrap")));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
