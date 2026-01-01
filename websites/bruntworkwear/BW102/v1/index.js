/* 
Test container: https://marketer.monetate.net/control/a-a3b0f153/p/bruntworkwear.com/experience/2078585

Preview excluding all experiences:
control: https://marketer.monetate.net/control/preview/12090/IV3WQDFT8TG69GGDZNGEJIV1KR4SPWYT/bw102-collections-update-badge-copy
v1: https://marketer.monetate.net/control/preview/12090/2XNXPIC3UDWHIQUXKK6ZHAPA15AQHF6Q/bw102-collections-update-badge-copy
v2: https://marketer.monetate.net/control/preview/12090/NEFJYTCDX4F3TZ2QXZQPXQA9S019CIYK/bw102-collections-update-badge-copy

Preview including all experiences:
control: https://marketer.monetate.net/control/preview/12090/6UTII247S9IBAIFDT2KE68IZFJQEMLEI/bw102-collections-update-badge-copy
v1: https://marketer.monetate.net/control/preview/12090/WFESTJ6UTASVLO2R3NXWYBNK3FV6N5ZM/bw102-collections-update-badge-copy
v2: https://marketer.monetate.net/control/preview/12090/Z41RKUTWBS1KYF6N4XIJ2VY721UQTIRQ/bw102-collections-update-badge-copy


https://bruntworkwear.com/collections/womens-work-boots?sort=MANUAL&reverse=false



*/

const TEST_ID = "BW102";
const VARIANT_ID = "V1"; /* Control, V1, V2 */

function logInfo(message) {
    console.log(
        `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
        "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
        "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
        message
    );
}

logInfo("fired");

(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "bruntworkwear",
        host: "https://bruntworkwear.com",
        test_name: "BW102: [COLLECTIONS] Update Badge Copy (2) SET UP TEST",
        page_initials: "AB-BW102",
        test_variation: 1 /* 0, 1, 2 */,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

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

    const BADGE_TEXT = {
        0: "SELLING FAST" /* Control Text */,
        1: "POPULAR RIGHT NOW",
        2: "CUSTOMER FAVORITE",
    };

    function mutationObserverFunction() {
        const targetNode = q(".collection__content");
        const debouncedUpdate = debounce(updateLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function updateLayout() {
        const txt = BADGE_TEXT[test_variation];
        const flagClassName = "ab-selling-fast-product";
        if (!txt) return;

        qq(`.productCard:not(.${flagClassName})`).forEach((item) => {
            const badge = q(item, ".productCard__badgeText");

            if (badge && badge.innerText.includes("SELLING FAST")) {
                if (test_variation !== 0) {
                    badge.innerText = txt;
                }
                item.classList.add(flagClassName);
            }
        });
    }

    function clickFunction() {
        q(".collection__content").addEventListener("click", (e) => {
            const linkItem = e.target.closest(".ab-selling-fast-product a.productCard__link");
            if (linkItem) {
                e.preventDefault();
                const productItem = e.target.closest(".productCard");
                const href = linkItem.getAttribute("href");
                const title = q(productItem, ".productCard__title p").innerText;
                fireGA4Event("BW102_ClickBadge", title);
                setTimeout(() => (window.location.href = href), 150);
            }
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        updateLayout();
        mutationObserverFunction();
        clickFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".collection__content .productCard"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
