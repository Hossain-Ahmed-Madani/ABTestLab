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

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function init() {
        if (window[page_initials] === true) return;

        window[page_initials] = true;
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
                                                <img  src="${src}" alt="${alt}" />
                                            </div>
                                        </div>
                                    `,
                                )
                                .join("")}
                        </div>
                    </div>
                </div>
                <div class="ab-image-thumb">
                    <div class="ab-thumb-arrows">
                        <!-- Add Arrows -->
                        <div class="ab-swiper-nav swiper-button-prev"></div>
                        <div class="ab-swiper-nav swiper-button-next"></div>
                    </div>
                    <div class="ab-thumb-slide">
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
                        </div>
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
