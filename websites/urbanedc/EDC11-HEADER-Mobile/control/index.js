/* 
Ticket: https://trello.com/c/j2PxXsIC/4531-%F0%9F%92%9B-edc11-header-mobile-add-search-into-header-with-panel-2-set-up-test
Figma: https://www.figma.com/design/ReKRtumDvt1KvlTHNTaS9b/EDC11--Mobile-Search?node-id=2-39&t=ZbKb6ocUX4U7OqN1-0
Test container: https://marketer.monetate.net/control/a-34c408c5/p/urbanedc.com/experience/2077901#c2609543:what

Preview urls:

Excluding All Experiences:
Control: https://marketer.monetate.net/control/preview/13265/8EHM7DIZQHE33VI1E6GPGD6RYRKESO0K/edc11-header-mobile-add-search-into-header-with-panel
V1: https://marketer.monetate.net/control/preview/13265/6ZVJGMFSWYCIQI9MPOHIE5W0JZEDEUNA/edc11-header-mobile-add-search-into-header-with-panel
V2: https://marketer.monetate.net/control/preview/13265/4MLAFQD7KVLEGNIUI4PBT2N2D417JR59/edc11-header-mobile-add-search-into-header-with-panel


Including All Experiences:
Control: https://marketer.monetate.net/control/preview/13265/XIJ57Z5LEZBCTM9JKBWO3IRGSM5QN4I0/edc11-header-mobile-add-search-into-header-with-panel
V1: https://marketer.monetate.net/control/preview/13265/IJFNW5LMXJHM0DNZOGTQGX5OLQDFV8ZJ/edc11-header-mobile-add-search-into-header-with-panel
V2: https://marketer.monetate.net/control/preview/13265/F8D4CZQTTKBTDHVVL9F4EJRJDTZB3J74/edc11-header-mobile-add-search-into-header-with-panel


*/

const TEST_ID = "EDC11";
const VARIANT_ID = "Control"; /* V1, V2 */

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
        project: "urbanedc",
        host: "https://urbanedc.com",
        test_name: "EDC11: [HEADER - Mobile] Add Search Into Header with Panel - (2) SET UP TEST",
        page_initials: "AB-EDC11",
        test_variation: 0 /* 1, 2 */,
        test_version: 0.0003,
    };

    const { host, page_initials, test_variation, test_version } = TEST_CONFIG;

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

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        const eventName = isTouchEnabled() ? "touchend" : "click";
        qq('form[action="/search"]:not(.predictive-search-form) input[type="search"], button[type="button"].uppercase.js-enabled.block.lg\\:hidden ~ div.hidden.lg\\:block').forEach((item) => {
            item.addEventListener(eventName, () => fireGA4Event("EDC11_ClickedSearch"));
        });
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q('#DrawerMenu form[action="/search"] button[aria-label="Search"]') && q(`button[type="button"].uppercase.js-enabled.block.lg\\:hidden ~ div.hidden.lg\\:block`));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
