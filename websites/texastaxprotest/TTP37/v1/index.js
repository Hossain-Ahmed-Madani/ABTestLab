/* 


Preview control only: https://marketer.monetate.net/control/preview/12476/XTV6WQ6TZZPBD5R5KK7FMF8Q6WLC2AZW/ttp37-landing-page-counting-up-engagement-section

Locations: 
https://www.texastaxprotest.com/lower-your-property-taxes/

https://www.texastaxprotest.com/facebook-landing-page/

https://www.texastaxprotest.com/blog-contact-us/


*/

(async () => {
    const TEST_ID = "TTP37";
    const VARIANT_ID = "V1"; /* Control, V1, V2 */

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
        site_url: "https://www.texastaxprotest.com/",
        test_name: "TTP37: [Landing Page] Counting Up Engagement Section-(2) SET UP TEST",
        page_initials: "AB-TTP37",
        test_variation: 2,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const DATA = {
        1: ["$84,900,995", "$84,900,996", "$84,900,997", "$84,900,998", "$84,900,999", "$85,000,000+"],
        2: ["4,996", "4,997", "4,998", "4,999", "5,000+"],
    };

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

    let counterValue = window.sessionStorage.getItem(page_initials) === "true" ? DATA[test_variation][DATA[test_variation].length - 1] : DATA[test_variation][0];

    function createLayoutV1() {
        q("body > .mantine-Container-root").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="ab-engagement-section">
                    <div class="ab-engagement-counter-wrapper">
                        <div class="ab-engagement-counter">${counterValue}</div>
                    </div>
                    <div class="ab-engagement-subtitle">
                        Saved for Texas homeowners through successful <br />
                        property tax protests.
                    </div>
                </div>
            `,
        );
    }

    function createLayoutV2() {
        q("body > .mantine-Container-root").insertAdjacentHTML("afterbegin", /* HTML */ ` <div>My New Content V2</div> `);
    }

    function updateCounterValue() {
        if (window.sessionStorage.getItem(page_initials) === "true") return;

        window.sessionStorage.setItem(page_initials, true);

        const valueList = DATA[test_variation];
        const duration = 1500;
        const loopCount = Math.ceil(duration / valueList.length);
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex++;

            if (currentIndex >= valueList.length) {
                clearInterval(interval);
                return;
            }

            counterValue = valueList[currentIndex];
            q(".ab-engagement-counter").textContent = counterValue;
        }, loopCount);
    }

    function handleLocationChanges() {
        const pathname = window.location.pathname;
        const targetLocations = ["/lower-your-property-taxes/", "/facebook-landing-page/", "/blog-contact-us/"];

        if (targetLocations.some((currentPathName) => currentPathName === pathname)) {
            init_TTP37();
        } else {
            window[page_initials] = false;
            document.body.classList.remove(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        }
    }

    function urlObserver() {
        const debouncedChanges = debounce(handleLocationChanges, 150);

        const originalPushState = history.pushState;
        history.pushState = function () {
            originalPushState.apply(history, arguments);
            window.dispatchEvent(new Event("pushstate"));
        };

        // Listen for back/forward button clicks
        window.addEventListener("popstate", function (event) {
            debouncedChanges();
        });

        window.addEventListener("pushstate", function () {
            debouncedChanges();
        });
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q("body > .mantine-Container-root") && document.readyState === "complete");
    }

    async function init_TTP37() {
        try {
            if (window[page_initials] === true) return;

            window[page_initials] = true;
            await waitForElementAsync(checkForItems);
            q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

            console.table(TEST_CONFIG);

            switch (test_variation) {
                case 1:
                    createLayoutV1();
                    break;
                case 2:
                    createLayoutV2();
                    break;
            }

            updateCounterValue();

        } catch (error) {
            console.warn(error);
            return false;
        }
    }

    init_TTP37();
    urlObserver();
})();
