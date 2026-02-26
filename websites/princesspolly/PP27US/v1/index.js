/* 

Ticket : https://trello.com/c/vx7mJ8cY/4768-%E2%9D%A4%EF%B8%8F-pp27us-collection-quick-add-modal-with-images-2-set-up-test
Figma: https://www.figma.com/design/OFbYNoG7ddtMgXfuaunJPh/PP_---COLLECTION--Quick-Add-Modal-with-Images?node-id=4001-29095&t=7hQ02K4unS65XZam-0



https://us.princesspolly.com
https://www.princesspolly.com.au

// https://us.princesspolly.com/products/gigi-skort-beige
check the pdp pages as the code mostly works on it, and you can also find design


*/

(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "Princess Polly",
        site_url: "https://us.princesspolly.com",
        test_name: "PP27US: [COLLECTION] Quick Add Modal with Images (2) SET UP TEST",
        page_initials: "AB-PP27US",
        test_variation: 2,
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

    const thumbnails = [
        "https://us.princesspolly.com/cdn/shop/files/0-modelinfo-alexa-us2_5fe10b12-4ca3-4ed0-bb04-2e4e5bdba303.jpg?v=1720144796&width=244",
        "https://us.princesspolly.com/cdn/shop/files/1-modelinfo-alexa-us2_3d87cd7c-82c7-479c-8cc7-77d576b6379d.jpg?v=1720144796&width=244",
        "https://us.princesspolly.com/cdn/shop/files/2-modelinfo-alexa-us2_e6c3cebd-5a05-42fc-81c0-789ff8ce2069.jpg?v=1720144796&width=244",
        "https://us.princesspolly.com/cdn/shop/files/3-modelinfo-alexa-us2_6819f923-b09c-4d2f-9ba3-834d2e191ce2.jpg?v=1720144796&width=244",
        "https://us.princesspolly.com/cdn/shop/files/4-modelinfo-alexa-us2_eb13542a-3c33-4563-bdfe-4c79397e14c0.jpg?v=1720144796&width=244",
        "https://us.princesspolly.com/cdn/shop/files/5-modelinfo-alexa-us2_4ea80cae-fdb2-4d42-87f4-e167b748dce0.jpg?v=1720144796&width=244",
        "https://us.princesspolly.com/cdn/shop/files/6-modelinfo-alexa-us2_014dd5dd-18c6-4769-885d-56c00fc0e689.jpg?v=1720144796&width=244",
        "https://us.princesspolly.com/cdn/shop/files/7-modelinfo-alexa-us2_8966a00a-a328-4b7d-afc5-78f804b994b1.jpg?v=1720144792&width=244",
        "https://us.princesspolly.com/cdn/shop/files/0-modelinfo-alexa-us2_5fe10b12-4ca3-4ed0-bb04-2e4e5bdba303.jpg?v=1720144796&width=244",
        // "https://us.princesspolly.com/cdn/shop/files/1-modelinfo-alexa-us2_3d87cd7c-82c7-479c-8cc7-77d576b6379d.jpg?v=1720144796&width=244",
        // "https://us.princesspolly.com/cdn/shop/files/2-modelinfo-alexa-us2_e6c3cebd-5a05-42fc-81c0-789ff8ce2069.jpg?v=1720144796&width=244",
        // "https://us.princesspolly.com/cdn/shop/files/3-modelinfo-alexa-us2_6819f923-b09c-4d2f-9ba3-834d2e191ce2.jpg?v=1720144796&width=244",
        // "https://us.princesspolly.com/cdn/shop/files/4-modelinfo-alexa-us2_eb13542a-3c33-4563-bdfe-4c79397e14c0.jpg?v=1720144796&width=244",
        // "https://us.princesspolly.com/cdn/shop/files/5-modelinfo-alexa-us2_4ea80cae-fdb2-4d42-87f4-e167b748dce0.jpg?v=1720144796&width=244",
        // "https://us.princesspolly.com/cdn/shop/files/6-modelinfo-alexa-us2_014dd5dd-18c6-4769-885d-56c00fc0e689.jpg?v=1720144796&width=244",
        // "https://us.princesspolly.com/cdn/shop/files/7-modelinfo-alexa-us2_8966a00a-a328-4b7d-afc5-78f804b994b1.jpg?v=1720144792&width=244",
    ];

    const modalContent = /* HTML */ `
        <div class="ab-carousel-container">
            <div class="ab-swiper swiper">
                <div class="ab-swiper-wrapper swiper-wrapper">
                    ${thumbnails
                        .map(
                            (thumbnail) => /* HTML */ `
                                <div class="ab-swiper-slide swiper-slide">
                                    <img src="${thumbnail}" alt="" />
                                </div>
                            `,
                        )
                        .join("")}
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="ab-carousel-skeleton-loader">
                <div class="ab-carousel-skeleton-loader__item"></div>
                <div class="ab-carousel-skeleton-loader__item"></div>
                <div class="ab-carousel-skeleton-loader__item"></div>
            </div>
        </div>
        <div class="ab-product-title">Yumiko Romper Black</div>
        <div class="ab-product-price-container">
            <div class="product__sale-price-row">
                <span data-shop-currency="">USD</span>
                <span data-product-price="" data-currency-conversion="3500">$35.00</span>
                <span><s data-compare-price="">$65.00</s> </span>
                <span class="product__price-savings-percent">46% off</span>
            </div>
        </div>
        <div class="ab-afterpay-container">
            <afterpay-placement
                id="afterpay-placement-pdp"
                data-locale="en_US"
                data-currency="USD"
                data-amount="65"
                data-currency-conversion="65.00"
                data-amount-attribute="amount"
                data-currency-attribute="currency"
                data-logo-type="lockup"
                data-size="sm"
                data-show-interest-free="false"
            ></afterpay-placement>
        </div>
        <div class="ab-color-swatch-container">
            <h2 class="product__active-color">
                <span class="product__label product__active-color-label">Color:</span>
                <span class="product__value product__active-color-value">Slate Grey</span>
            </h2>
            <div class="product__swatches" data-colors="">
                <a
                    href="/products/yumiko-romper-black"
                    class="swatch swatch--active"
                    data-product-variant-id=""
                    data-product-variant-color="#5b5b5b"
                    style="background-color: #000000;"
                    aria-label="Yumiko Romper Black"
                >
                </a>
                <a
                    href="/products/yumiko-romper-cream-1"
                    class="swatch"
                    data-product-variant-id=""
                    data-product-variant-color="#5b5b5b"
                    style="background-color: #ffffff;"
                    aria-label="Yumiko Romper Brown Stripe"
                >
                </a>
            </div>
        </div>
        <div class="ab-product-size-selector-container">
            <h2 class="product__label product__label--size">
                <span class="product__active-size-label">Size:</span>
                <span class="product__size-value" data-product-size-value="">US 0</span><span class="product__low-stock" data-product-low-stock="" style="display: none;"></span>
            </h2>
            <div class="product__select-sizes" data-product-sizes="">
                <ul class="product__select-sizes-list">
                    <li class="product__select-sizes-item active">
                        <button
                            type="button"
                            class="product__select-sizes-button"
                            data-size-label="US 0"
                            data-size-variant-id="40812272975956"
                            data-size-value="US 0"
                            data-product-handle="yumiko-romper-slate-grey"
                            data-inventory-label=""
                        >
                            US 0
                        </button>
                    </li>
                    <li class="product__select-sizes-item">
                        <button
                            type="button"
                            class="product__select-sizes-button"
                            data-size-label="US 2"
                            data-size-variant-id="40812273008724"
                            data-size-value="US 2"
                            data-product-handle="yumiko-romper-slate-grey"
                            data-inventory-label=""
                        >
                            US 2
                        </button>
                    </li>
                </ul>
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
                        <div class="${page_initials}__modal__body__text-content">${modalContent}</div>
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
        const afterpay = document.querySelector("#afterpay-placement-pdp");
        if (afterpay !== null) {
            const root = afterpay.shadowRoot;
            if (root !== null) {
                const logo = root.querySelector("svg");
                if (logo) {
                    logo.setAttribute("width", 80);
                    logo.setAttribute("height", 14);
                }
                const mainCopy = root.querySelector(".afterpay-paragraph");
                const promo = document.querySelector("[data-promo-id]");
                const promoActive = root.querySelector(".afterpay-promo");
                if (mainCopy) {
                    /* Remove markup from this running before */
                    const previousCopy = mainCopy.querySelector(".payment-terms__price");
                    if (previousCopy) {
                        mainCopy.removeChild(previousCopy);
                    }
                    const payments = 4;
                    const payment = Math.ceil(64 / payments);
                    const money = `$${payment}`;

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
        const dom = await fetchAndParseURLApi(url);
        if (!dom) return;
        console.log("RESPONSE:", q(dom, "form[action='/cart/add']"));

        q(".ab-product-title").innerHTML = q(dom, ".product__title").innerHTML;
        q(".ab-product-price-container").innerHTML = q(dom, ".product__sale-price-row").outerHTML;
        q(".ab-color-swatch-container").innerHTML = qq(dom, ".product__active-color, .product__swatches .product__swatches")
            .map((el) => el.outerHTML)
            .join("");
        q(".ab-product-size-selector-container").innerHTML = qq(dom, "h2.product__label.product__label--size, .product__select-sizes")
            .map((el) => el.outerHTML)
            .join("");
        q("a.ab-view-full-details").setAttribute("href", url);

        // AfterPay
        console.log("Test", q(dom, "#afterpay-placement-pdp"));
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

    function clickFunction() {
        q(`.${page_initials}__modal__close-cta`).addEventListener("click", () => {
            handleModalView("hide");
        });

        q(`.${page_initials}__modal-backdrop`).addEventListener("click", (e) => {
            if (e.target.closest(`.${page_initials}__modal`)) return;
            handleModalView("hide");
        });

        q(".product-tiles").addEventListener("click", (e) => {
            if (e.target.closest(".product-tile__quick")) {
                const quickAddButton = e.target.closest(".product-tile__quick");
                const url = q(quickAddButton.parentNode, ".swatch--active").getAttribute("href") ?? "";
                if (!url) return;
                updateModalLayout(url);
                handleModalView("show");
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
        initSwiper();

        handleModalView("show");
        applyAfterPayStyles();
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
