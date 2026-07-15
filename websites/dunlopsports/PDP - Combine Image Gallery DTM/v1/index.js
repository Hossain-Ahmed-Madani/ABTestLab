(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Dunlop Sports",
        site_url: "https://us.dunlopsports.com/https://us.dunlopsports.com",
        test_name: "PDP - Combine Image Gallery [DTM]",
        page_initials: "AB-PDP-COMBINE-IMAGE-GALLERY",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        left_arrow: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <rect x="24.5" y="24.5" width="24" height="24" transform="rotate(180 24.5 24.5)" stroke="black" />
            <path d="M14.7539 5.87097L8.12478 12.5001L14.7539 19.1292" stroke="black" stroke-linecap="round" />
        </svg> `,
        right_arrow: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <rect x="0.5" y="0.499758" width="24" height="24" stroke="black" />
            <path d="M10.2461 19.1288L16.8752 12.4997L10.2461 5.87053" stroke="black" stroke-linecap="round" />
        </svg> `,
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

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        const imageList = qq(".primary-images img, .row.secondary-image-carousel-desktop-hidden .slick-slide:not(.slick-cloned) img").map((item) => ({
            src: item.getAttribute("src"),
            alt: item.getAttribute("alt"),
        }));

        console.log(imageList);

        q(".product-detail .row .js-personalize-invisible").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <!-- Swiper -->
                <div class="ab-image-gallery">
                    <div class="swiper-container gallery-top">
                        <div class="swiper-wrapper">
                            ${imageList
                                .map(
                                    ({ src, alt }) => /* HTML */ `
                                        <div class="swiper-slide">
                                            <div class="swiper-slide-container">
                                                <img src="${src}" alt="${alt}" />
                                            </div>
                                        </div>
                                    `,
                                )
                                .join("")}
                        </div>
                    </div>
                    <div class="swiper-container gallery-thumbs">
                        <div class="swiper-wrapper">
                            ${imageList
                                .map(
                                    ({ src, alt }) => /* HTML */ `
                                        <div class="swiper-slide">
                                            <div class="swiper-slide-container"><img src="${src}" alt="${alt}" /></div>
                                        </div>
                                    `,
                                )
                                .join("")}
                        </div>
                        <!-- Add Arrows -->
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            `,
        );

        const galleryTop = new Swiper(".gallery-top", {
            spaceBetween: 10,
            loop: true,
            loopedSlides: 4,
        });
        const galleryThumbs = new Swiper(".gallery-thumbs", {
            // spaceBetween: 10,
            // centeredSlides: true,
            slidesPerView: "auto",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            loop: true,
            loopedSlides: 4,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q(".product-detail .row .js-personalize-invisible") &&
            q(".primary-images img") &&
            q(".row.secondary-image-carousel-desktop-hidden .slick-slide:not(.slick-cloned) img") &&
            typeof window.Swiper === "function"
        );
    }

    await waitForElementAsync(checkForItems);
    init();
})();
