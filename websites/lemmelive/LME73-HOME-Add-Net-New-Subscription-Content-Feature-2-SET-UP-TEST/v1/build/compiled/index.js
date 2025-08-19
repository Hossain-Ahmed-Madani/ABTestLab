(() => {
    const TEST_CONFIG = {
        page_initials: "AB-LME73",
        test_variation: 2 /* 0 -> control, 1, 2 */,
        test_version: 0.0005,
    };

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
        try {
            if (timer <= 0) {
                throw new Error(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            } else if (predicate && predicate()) {
                callback();
            } else {
                setTimeout(() => {
                    waitForElement(predicate, callback, timer - frequency, frequency);
                }, frequency);
            }
        } catch (error) {
            console.warn(error);
            return;
        }
    }

    function fireGA4Event(eventName, eventLabel = "") {
        console.log("LME73: fireGA4Event", eventName, eventLabel);

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

    const ASSETS = {
        products: "https://sb.monetate.net/img/1/1597/5797275.png",
        guaranteed_delivery: "https://sb.monetate.net/img/1/1597/5797020.png",
        earn_loyalty_points: "https://sb.monetate.net/img/1/1597/5797021.png",
        vip_access: "https://sb.monetate.net/img/1/1597/5797022.png",
        paused_update: "https://sb.monetate.net/img/1/1597/5797023.png",
    };

    function createLayout() {
        const targetNode = document.querySelector(".shopify-section .no-list.no-list--large").parentNode;
        targetNode.classList.add("ab-leave-out-section");

        const insertPosition = "afterend";

        const layout = /* HTML */ `
            <section class="ab-subscription-section">
                <div class="ab-subscription-section__container container">
                    <div class="ab-subscription-section__row row align-items-center">
                        <div class="ab-subscription-section__image-col col col-md-6 col-lg-7">
                            <img alt="" class="" src="${ASSETS.products}" />
                        </div>
                        <div class="ab-subscription-section__text-col col col-md-6 col-lg-5">
                            <h1 class="ab-subscription-section__heading">
                                <span class="marquee-squiggle">
                                    <span class="marquee-squiggle__copy">save up to 20% </span>
                                    <div bis_skin_checked="1" class="marquee-squiggle__wrapper">
                                        ${Array.from(
                                            { length: 18 },
                                            () => /* HTML */ `
                                                <span>
                                                    <svg aria-label="Squiggle Icon" fill="none" height="22" role="img" viewBox="0 0 56 22" width="56" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            clip-rule="evenodd"
                                                            d="M24.9453 8.93358C23.6645 9.45112 21.8582 10.5871 19.9683 13.2913C14.9793 20.4298 8.40987 21.5999 4 21.5999C1.79086 21.5999 0 19.809 0 17.5999C0 15.3908 1.79086 13.5999 4 13.5999C6.84594 13.5999 10.4327 12.97 13.411 8.7085C16.1338 4.8127 19.1455 2.64869 21.9481 1.51623C24.7109 0.399836 27.0082 0.399883 27.9878 0.399903H28C30.2091 0.399903 32 2.19076 32 4.3999C32 6.60904 30.2091 8.3999 28 8.3999C27.2982 8.3999 26.2543 8.40463 24.9453 8.93358Z"
                                                            fill="#C5FF89"
                                                            fill-rule="evenodd"
                                                        ></path>
                                                        <path
                                                            clip-rule="evenodd"
                                                            d="M31.0547 8.93358C32.3355 9.45112 34.1418 10.5871 36.0317 13.2913C41.0207 20.4298 47.5901 21.5999 52 21.5999C54.2091 21.5999 56 19.809 56 17.5999C56 15.3908 54.2091 13.5999 52 13.5999C49.1541 13.5999 45.5673 12.97 42.589 8.7085C39.8662 4.8127 36.8545 2.64869 34.0519 1.51623C31.2891 0.399836 28.9918 0.399883 28.0122 0.399903H28C25.7909 0.399903 24 2.19076 24 4.3999C24 6.60904 25.7909 8.3999 28 8.3999C28.7018 8.3999 29.7457 8.40463 31.0547 8.93358Z"
                                                            fill="#C5FF89"
                                                            fill-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            `
                                        ).join("")}
                                    </div>
                                </span>

                                <span class="marquee-squiggle__copy">on your favorites</span>
                            </h1>

                            <h2 class="ab-subscription-section__sub-heading">With our subscription program, delivered straight to your door.</h2>

                            <div class="ab-subscription-section__usp_area usp_area">
                                <ul>
                                    ${[
                                        {
                                            img: ASSETS.vip_access,
                                            text: "VIP access to <br class='ab-xl-block'/> exclusive drops",
                                            className: "ab-usp--vip-access",
                                        },
                                        {
                                            img: ASSETS.earn_loyalty_points,
                                            text: "Earn loyalty points for <br class='ab-xl-block'/> free products & discounts",
                                            className: "ab-usp--earn-loyalty",
                                        },
                                        {
                                            img: ASSETS.paused_update,
                                            text: "Pause, update frequency <br class='ab-xl-block'/> or cancel anytime",
                                            className: "ab-usp--pause-update",
                                        },
                                        {
                                            img: ASSETS.guaranteed_delivery,
                                            text: "Guaranteed delivery <br class='ab-xl-block'/> during sell-outs",
                                            className: "ab-usp--guaranteed-delivery",
                                        },
                                    ]
                                        .map(
                                            (item) => /* HTML */ `
                                                <li class="${item.className}">
                                                    <div class="icon_area"><img src="${item.img}" /></div>
                                                    <span>${item.text}</span>
                                                </li>
                                            `
                                        )
                                        .join("")}
                                </ul>
                            </div>

                            <div bis_skin_checked="1" class="ab-subscription-section__cta">
                                <div bis_skin_checked="1" class="btn__wrapper">
                                    <a class="btn" href="/products/byob-3" title="SUBSCRIBE NOW">
                                        <span class="btn__text"><span class="btn__text-inner">SUBSCRIBE NOW</span> </span>
                                        <span class="btn__filler"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        targetNode.insertAdjacentHTML(insertPosition, layout);
    }

    function isElementVisibleInViewport(el) {
        if (!el) return false;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;

        // Check if any part of the element is visible in the viewport
        const vertInView = rect.top <= windowHeight && rect.bottom >= 0;
        const horInView = rect.left <= windowWidth && rect.right >= 0;

        // Additional check for minimum visible area (at least 1px)
        const vertVisible = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0) > 0;
        const horVisible = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0) > 0;

        return vertInView && horInView && vertVisible && horVisible;
    }

    function scrollHandler(e) {
        const targetNode = document.querySelector(".shopify-section > .trust-bar").parentNode;
        const isElementVisible = isElementVisibleInViewport(targetNode);
        if (isElementVisible) {
            fireGA4Event("LME73_ViewEvent", "User reaches hits the 'Lemme Get Real Results' section");
            window.removeEventListener("scroll", scrollHandler);
        }
    }

    function addGA4ScrollEventLister() {
        waitForElement(
            () => document.querySelector(".shopify-section > .trust-bar "),
            () => {
                const targetNode = document.querySelector(".shopify-section > .trust-bar ").parentNode;
                const isElementVisible = isElementVisibleInViewport(targetNode);

                if (isElementVisible) {
                    fireGA4Event("LME73_ViewEvent", "User reaches hits the 'Lemme Get Real Results' section");
                } else {
                    window.addEventListener("scroll", scrollHandler);
                }
            }
        );
    }

    function addGA4ClickEventListener() {
        waitForElement(
            () => document.querySelector(".ab-subscription-section__cta .btn"),
            () => {
                const ctaButton = document.querySelector(".ab-subscription-section__cta .btn");
                if (ctaButton) {
                    ctaButton.addEventListener("click", () => {
                        fireGA4Event("LME73_CTAClick", "LME73 Subscription CTA");
                    });
                }
            }
        );
    }

    function init() {
        document.body.classList.add(TEST_CONFIG.page_initials, `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`, `${TEST_CONFIG.page_initials}--version-${TEST_CONFIG.test_version}`);

        {
            createLayout();
            addGA4ClickEventListener();
        }

        addGA4ScrollEventLister();
    }

    function hasAllTargetElements() {
        return !!(
            document.querySelector(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) &&
            document.querySelector(".shopify-section .no-list.no-list--large")
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
