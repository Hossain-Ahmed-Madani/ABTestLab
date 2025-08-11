// https://www.figma.com/design/KEOrBCs5paKcSE5HHdxoKv/LME73---HOME--Add-Net-New-Subscription-Content-Feature?node-id=2001-3&t=PGaRkrmuDIwMhb7q-0
// LME73: [HOME] Add Net New Subscription Content Feature-> https://marketer.monetate.net/control/a-2087c1e5/p/lemmelive.com/experience/2033048
// LME73: [HOME] Add Net New Subscription Content Feature [QA] -> https://marketer.monetate.net/control/a-2087c1e5/p/lemmelive.com/experience/2034980#
// url: ^https:\/\/lemmelive\.com\/?(?:\?.*)?$
// preview v1: https://marketer.monetate.net/control/preview/12706/4F6BCPW3N5GXVO0PKI77YWO6GSJJXLGU/lme73-home-add-net-new-subscription-content-feature
// preview v2: https://marketer.monetate.net/control/preview/12706/ZYS6ZHQK6UZ80H0V1K8XSZS7PIHB2BSO/lme73-home-add-net-new-subscription-content-feature

(() => {
    const TEST_CONFIG = {
        page_initials: "AB-LME73",
        test_variation: 1 /* 0 -> control, 1, 2 */,
        test_version: 0.0001,
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
        const insertPosition = "beforebegin" ;

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
                                        { img: ASSETS.vip_access, text: "VIP access to exclusive drops" },
                                        { img: ASSETS.paused_update, text: "Pause, update frequency or cancel anytime" },
                                        { img: ASSETS.earn_loyalty_points, text: "Earn loyalty points for free products & discounts" },
                                        { img: ASSETS.guaranteed_delivery, text: "Guaranteed delivery during sell-outs" },
                                    ]
                                        .map(
                                            (item) => /* HTML */ `
                                                <li>
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
                                        <span class="btn__text"><span class="btn__text-inner">SUBSCRIBE NOW</span> </span> <span class="btn__filler"></span>
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
        let top = el.getBoundingClientRect().top;
        let right = el.getBoundingClientRect().right;
        let bottom = el.getBoundingClientRect().bottom;
        let left = el.getBoundingClientRect().left;
        let innerWidth = window.innerWidth;
        let innerHeight = window.innerHeight;

        return ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth));
    }

    function scrollHandler(e) {
        const targetNode = document.querySelector("#shopify-section-template--19531691229398__16575845243735cab9");
        const isElementVisible = isElementVisibleInViewport(targetNode);
        if (isElementVisible) {
            fireGA4Event("LME73_ViewEvent", "User reaches hits the 'Lemme Get Real Results' section");
            window.removeEventListener("scroll", scrollHandler);
        }
    }

    function addGA4ScrollEventLister() {
        waitForElement(
            () => document.querySelector("#shopify-section-template--19531691229398__16575845243735cab9"),
            () => {
                const targetNode = document.querySelector("#shopify-section-template--19531691229398__16575845243735cab9");
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
