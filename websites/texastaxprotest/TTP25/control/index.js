/* 

Figma: https://www.figma.com/design/EegmeIrFHMK3rVEhYTOlxT/TTP25---HOME--Add-Video?node-id=2001-2192&p=f&t=G8nZFwZy9SAvbBgU-0
Test container: https://marketer.monetate.net/control/a-7b7b9c2b/p/texastaxprotest.com/experience/2088292#c2622624:what

*/

(async () => {
    const TEST_ID = "TTP25";
    const VARIANT_ID = "Control"; /* Control, V1, V2 */

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
        project: "Texas Tax Protest",
        site_url: "https://www.texastaxprotest.com",
        test_name: "TTP25: [HOME] Add Video - (2) SET UP TEST",
        page_initials: "AB-TTP25",
        test_variation: 0,
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

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q(".wistia-video") &&
            document.readyState === "complete" &&
            window.Wistia &&
            typeof window.Wistia === "object"
        );
    }

    function handleLocationChanges() {
        const pathName = window.location.pathname;

        if (pathName === "/") {
            init_TTP25();
        } else {
            document.body.classList.remove(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
            window[page_initials] = false;
        }
    }

    function urlObserver() {
        const debouncedChanges = debounce(handleLocationChanges, 150);

        const originalPushState = history.pushState;
        history.pushState = function () {
            originalPushState.apply(history, arguments);
            window.dispatchEvent(new Event("pushstate"));
        };

        window.addEventListener("popstate", function () {
            debouncedChanges();
        });

        window.addEventListener("pushstate", function () {
            debouncedChanges();
        });
    }

    async function init_TTP25() {
        if (window[page_initials] === true) return;
        try {
            await waitForElementAsync(checkForItems);

            q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

            fireGA4Event("TTP25_ViewHomepage")
            q(".wistia-video").addEventListener("click", (e) => {
                fireGA4Event("TTP25_BTFVideoPlayClick");
            });

        } catch (error) {
            return false;
        }
    }


    init_TTP25();
    urlObserver();
})();
