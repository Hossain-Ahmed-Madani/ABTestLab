/* 

Ticket : https://trello.com/c/vx7mJ8cY/4768-%E2%9D%A4%EF%B8%8F-pp27us-collection-quick-add-modal-with-images-2-set-up-test
Figma: https://www.figma.com/design/OFbYNoG7ddtMgXfuaunJPh/PP_---COLLECTION--Quick-Add-Modal-with-Images?node-id=4001-29095&t=7hQ02K4unS65XZam-0



https://us.princesspolly.com
https://www.princesspolly.com.au

// https://us.princesspolly.com/products/gigi-skort-beige
check the pdp pages as the code mostly works on it, and you can also find design


*/

(async () => {
    const TEST_ID = "PP27US";
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
        site_url: "https://us.princesspolly.com",
        test_name: "PP27US: [COLLECTION] Quick Add Modal with Images (2) SET UP TEST",
        page_initials: "AB-PP27US",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function fireGA4Event(eventName, eventLabel = "") {
        console.log("fireGA4Event", eventName, eventLabel);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "GA4event",
            "ga4-event-name": "cro_event",
            "ga4-event-p1-name": "event_category",
            "ga4-event-p1-value": eventName,
            "ga4-event-p2-name": "event_label",
            "ga4-event-p2-value": eventLabel,
        });
    }

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

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateSideCartLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
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

    async function updateModalLayout(url) {
        destroySwiper();
        // Clear Size Section Items For Loader
        qq(`
            .ab-product-size-selector-container .product__size-value,
            .ab-product-size-selector-container .product__select-sizes`).forEach((item) => (item.innerHTML = ""));

        const dom = await fetchAndParseURLApi(url);
        if (!dom) return;

        q(".ab-product-title").innerHTML = q(dom, ".product__title").innerHTML;
        q(".ab-product-price-container").innerHTML = q(dom, ".product__sale-price-row").outerHTML;
        q(".ab-color-swatch-container").innerHTML = qq(dom, ".product__active-color, .product__swatches:has(> .swatch)")
            .map((el) => el.outerHTML)
            .join("");
        q(".ab-product-size-selector-container .product__select-sizes").innerHTML = q(dom, ".product__select-sizes").outerHTML;
        q(".ab-add-to-cart-cta").setAttribute("disabled", "");
        q("a.ab-view-full-details").setAttribute("href", url);

        // AfterPay
        q(".ab-afterpay-container").innerHTML = q(dom, "#afterpay-placement-pdp").outerHTML;
        applyAfterPayStyles();

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

    function clickFunction() {
        // Modal Base Events
        q(`.${page_initials}__modal__close-cta`).addEventListener("click", () => {
            handleModalView("hide");
        });

        q(`.${page_initials}__modal-backdrop`).addEventListener("click", (e) => {
            if (e.target.closest(`.${page_initials}__modal`)) return;
            handleModalView("hide");
        });

        // Product Card Quick Add Click
        qq(".product-tiles, .nosto-carousel-tabs__wrap").forEach((item) => {
            item.addEventListener("click", (e) => {
                if (e.target.closest(".product-tile__quick, .quick-shop-carousel-quickadd")) {
                    const quickAddButton = e.target.closest(".product-tile__quick, .quick-shop-carousel-quickadd");
                    const swatchItem = q(quickAddButton.parentNode, ".swatch--active") || q(quickAddButton.parentNode.parentNode, ".swatch--active");
                    const url = getUrlFromColorSwatch(swatchItem);
                    if (!url) return;
                    // Clear Content For Loader
                    qq(
                        ".ab-product-title, .ab-product-price-container, .ab-afterpay-container, .ab-color-swatch-container .product__swatches, .ab-color-swatch-container .product__value.product__active-color-value",
                    ).forEach((item) => (item.innerHTML = ""));
                    // Update & Show
                    updateModalLayout(url);
                    handleModalView("show");
                }
            });
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
                q(`button.product-tile-size__button[data-product-tile-variant-id="${variantId}"]`).click();
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

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createModalLayout();
        clickFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".product-tiles"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
