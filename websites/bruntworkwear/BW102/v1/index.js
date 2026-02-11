/* 
Test container: https://marketer.monetate.net/control/a-a3b0f153/p/bruntworkwear.com/experience/2089387#c2624065:what

Preview excluding all experiences:
control: https://marketer.monetate.net/control/preview/12090/FM0QZV6T5O02FWOGF28RF790H0GXNRI3/bw102-collections-update-badge-copy
v1: https://marketer.monetate.net/control/preview/12090/4BELR4GY76TZJXBJ06JBA4ISG3G31OPG/bw102-collections-update-badge-copy
v2:  https://marketer.monetate.net/control/preview/12090/CR662HUEOLG4X63W353JD5Y8MM9ILAW2/bw102-collections-update-badge-copy
v3: https://marketer.monetate.net/control/preview/12090/Y8HUY2ADN65J7MW1Z47D6D72ZMJD9ZIQ/bw102-collections-update-badge-copy
v4: https://marketer.monetate.net/control/preview/12090/JJIEH88J6XXUADQOGET62I11GHVVSBIG/bw102-collections-update-badge-copy
v5: https://marketer.monetate.net/control/preview/12090/OUMA68LXE78Q83AFCHWN1ZRFH1MMU6RM/bw102-collections-update-badge-copy

Preview including all experiences:
control: https://marketer.monetate.net/control/preview/12090/M5Y0R670ITXN57GHP4F76UF8SYKMJ55L/bw102-collections-update-badge-copy
v1: https://marketer.monetate.net/control/preview/12090/298YBI91ULGWYZG57E0O45F3CWLP0RF2/bw102-collections-update-badge-copy
v2: https://marketer.monetate.net/control/preview/12090/SQNGR2ISGXJ758EYN3IFGHNWUYHGAQPE/bw102-collections-update-badge-copy
v3: https://marketer.monetate.net/control/preview/12090/0ZA1CE8GMG9QX4BWLEFW9508LN3YGWUH/bw102-collections-update-badge-copy
v4: https://marketer.monetate.net/control/preview/12090/B8KEZEQBW9CVZ558M6CBAUMEWCYKU6JH/bw102-collections-update-badge-copy
v5: https://marketer.monetate.net/control/preview/12090/38BMYKTBP45QJIYX46P9E3HWGVO98XNQ/bw102-collections-update-badge-copy


https://bruntworkwear.com/collections/all
https://bruntworkwear.com/collections/womens-work-boots?sort=MANUAL&reverse=false



*/

(async () => {

    const TEST_ID = "BW102";
    const VARIANT_ID = "V1"; /* Control, V1, V2, V3, V4, V5 */

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            message
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        client: "Acadia",
        project: "bruntworkwear",
        host: "https://bruntworkwear.com",
        test_name: "BW102: [COLLECTIONS] Update Badge Copy (2) SET UP TEST",
        page_initials: "AB-BW102",
        test_variation: 1 /* 0, 1, 2, 3, 4, 5 */,
        test_version: 0.0003,
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

        // OLD TEXT
        // 1: "POPULAR RIGHT NOW",
        // 2: "CUSTOMER FAVORITE",

        // NEW TEXT
        1: "MOVING FAST",
        2: "HIGH DEMAND",
        3: "POPULAR PICK",
        4: "TOP PICK",
        5: "HEAVY HITTER",
    };

    function mutationObserverFunction() {
        const targetNode = q("#ResultsList");
        if (!targetNode) return;

        const debouncedUpdate = debounce(updateLayout, 150);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function updateLayout() {
        const txt = BADGE_TEXT[test_variation];
        const flagClassName = "ab-selling-fast-product";
        if (!txt) return;

        qq(`.productCard:not(.${flagClassName})`).forEach((item) => {

            const badges = qq(item, ".media__badge-text").filter(item => item.textContent.trim().includes('SELLING FAST'));

            if (badges.length === 0) return;

            if (test_variation !== 0) {
                badges.forEach(badge => (badge.innerText = txt))
            }

            item.classList.add(flagClassName);

        });
    }

    function clickFunction() {
        if (qq("#ResultsList, .tabbed-collections__panel, .product-grouping").length === 0) return;

        qq("#ResultsList, .tabbed-collections__panel, .product-grouping").forEach(item => {
            item.addEventListener("click", (e) => {
                const linkItem = e.target.closest(".ab-selling-fast-product a.productCard__link");
                if (linkItem) {
                    e.preventDefault();
                    const productItem = e.target.closest(".productCard");
                    const href = linkItem.getAttribute("href");
                    const title = q(productItem, ".productCard__title").textContent.trim();
                    fireGA4Event("BW102_ClickBadge", title);

            
                    setTimeout(() => {
                        if (e.ctrlKey || e.metaKey) {
                            window.open(href, "_blank");
                        }
                        else {
                            (window.location.href = href)
                        }
                    }, 150);

                }
            })
        })
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        updateLayout();
        mutationObserverFunction();
        clickFunction();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q('#ResultsList .productCard') ||
            (q('.tabbed-collections__panel .productCard') && q('.product-grouping .productCard'))
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
