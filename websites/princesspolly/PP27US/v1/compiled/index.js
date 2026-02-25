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
                <div class="swiper-wrapper">
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
        <div class="ab-product-price">USD $39.00</div>
        <div class="ab-afterpay-container">4 x $16.25 with Afterpay</div>
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
                <a
                    href="/products/yumiko-romper-black-sparkle"
                    class="swatch"
                    data-product-variant-id=""
                    data-product-variant-color="#5b5b5b"
                    style="background-color: #000000;"
                    aria-label="Yumiko Romper Black Sparkle"
                >
                </a>
                <a
                    href="/products/yumiko-romper-brown-pinstripe"
                    class="swatch"
                    data-product-variant-id=""
                    data-product-variant-color="#5b5b5b"
                    style="background-color: #2c1e09;"
                    aria-label="Yumiko Romper Brown Pinstripe"
                >
                </a>
                <a
                    href="/products/endless-nights-playsuit-pink-check"
                    class="swatch"
                    data-product-variant-id=""
                    data-product-variant-color="#5b5b5b"
                    style="background-color: #ea9999;"
                    aria-label="Yumiko Romper Pink Check"
                >
                </a>
                <a
                    href="/products/yumiko-romper-yellow"
                    class="swatch"
                    data-product-variant-id=""
                    data-product-variant-color="#5b5b5b"
                    style="background-color: #fffdea;"
                    aria-label="Yumiko Romper Yellow"
                >
                </a>
                <a
                    href="/products/yumiko-romper-white"
                    class="swatch"
                    data-product-variant-id=""
                    data-product-variant-color="#5b5b5b"
                    style="background-color: #ffffff;"
                    aria-label="Yumiko Romper White"
                >
                </a>
                <a
                    href="/products/yumiko-romper-green-stripe"
                    class="swatch"
                    data-product-variant-id=""
                    data-product-variant-color="#5b5b5b"
                    style="background-color: #bab39c;"
                    aria-label="Yumiko Romper Green Stripe"
                >
                </a>
                <a
                    href="/products/yumiko-romper-brown-polka"
                    class="swatch"
                    data-product-variant-id=""
                    data-product-variant-color="#5b5b5b"
                    style="background-color: #613d05;"
                    aria-label="Yumiko Romper Brown Polka Dot"
                >
                </a>
                <a
                    href="/products/yumiko-romper-blue"
                    class="swatch"
                    data-product-variant-id=""
                    data-product-variant-color="#5b5b5b"
                    style="background-color: #b4e3f6;"
                    aria-label="Yumiko Romper Blue"
                >
                </a>
                <a
                    href="/products/yumiko-romper-blue-sparkle"
                    class="swatch"
                    data-product-variant-id=""
                    data-product-variant-color="#5b5b5b"
                    style="background-color: #cafbf3;"
                    aria-label="Yumiko Romper Blue Sparkle"
                >
                </a>
                <a
                    href="/products/yumiko-romper-cherry-sparkle"
                    class="swatch"
                    data-product-variant-id=""
                    data-product-variant-color="#5b5b5b"
                    style="background-color: #740a0a;"
                    aria-label="Yumiko Romper Cherry Sparkle"
                ></a>
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
                    <li class="product__select-sizes-item">
                        <button
                            type="button"
                            class="product__select-sizes-button"
                            data-size-label="US 8"
                            data-size-variant-id="40812273107028"
                            data-size-value="US 8"
                            data-product-handle="yumiko-romper-slate-grey"
                            data-inventory-label=""
                        >
                            US 8
                        </button>
                    </li>
                    <li class="product__select-sizes-item">
                        <button
                            type="button"
                            class="product__select-sizes-button"
                            data-size-label="US 10"
                            data-size-variant-id="40812273139796"
                            data-size-value="US 10"
                            data-product-handle="yumiko-romper-slate-grey"
                            data-inventory-label=""
                        >
                            US 10
                        </button>
                    </li>
                    <li class="product__select-sizes-item">
                        <button
                            type="button"
                            class="product__select-sizes-button"
                            data-size-label="US 12"
                            data-size-variant-id="40812273172564"
                            data-size-value="US 12"
                            data-product-handle="yumiko-romper-slate-grey"
                            data-inventory-label=""
                        >
                            US 12
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

    async function initSwiper() {
        await waitForElementAsync(() => typeof window.Swiper === "function" && window.Swiper && q(".ab-swiper"));
        const el = q(".ab-swiper");
        new window.Swiper(el, {
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
        document.body.addEventListener("click", (e) => {
            // ====== MODAL ======

            // OPEN MODAL
            if (e.target.closest(".product-tile__quick")) {
                handleModalView("show");
            }

            // CLOSE MODAL
            if (e.target.closest(`.${page_initials}__modal__close-cta`) || (e.target.closest(`.${page_initials}__modal-backdrop`) && !e.target.closest(`.${page_initials}__modal`))) {
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
        initSwiper();

        handleModalView("show");
    }

    function checkForItems() {
        return !!q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && window.location.href.includes('/collections/');
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
