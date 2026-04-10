/* 


Preview control only: https://marketer.monetate.net/control/preview/12476/XTV6WQ6TZZPBD5R5KK7FMF8Q6WLC2AZW/ttp37-landing-page-counting-up-engagement-section

Locations: 
https://www.texastaxprotest.com/lower-your-property-taxes/

https://www.texastaxprotest.com/facebook-landing-page/

https://www.texastaxprotest.com/blog-contact-us/


Test container: https://marketer.monetate.net/control/a-7b7b9c2b/p/texastaxprotest.com/experience/2103664

Preview including all:
V1: https://marketer.monetate.net/control/preview/12476/3RK4Y5UH3MPV0DDHSZTR5ZJH8BIF4TGR/ttp37-landing-page-counting-up-engagement-section
V2: https://marketer.monetate.net/control/preview/12476/A8V66KGI07342OTP2LH88METNRKWK8E6/ttp37-landing-page-counting-up-engagement-section

Preview excluding all:
V1: https://marketer.monetate.net/control/preview/12476/1S0SB22GRQBQSMJQKNJ0LV06D37WPVVF/ttp37-landing-page-counting-up-engagement-section
V2: https://marketer.monetate.net/control/preview/12476/NEP0ML9L42RI7IJANGN1QY0P41263P76/ttp37-landing-page-counting-up-engagement-section

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
        page_initials: "AB-TTP37",
        test_variation: 1,
        test_version: 0.0002,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const DATA = {
        1: ["$84,900,995", "$84,900,996", "$84,900,997", "$84,900,998", "$84,900,999", "$85,000,000+"],
        2: ["4,996", "4,997", "4,998", "4,999", "5,000+"],
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
        q("body > .mantine-Container-root").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="ab-engagement-section">
                    <div class="ab-engagement-counter-wrapper">
                        <div class="ab-engagement-counter">${counterValue}</div>
                    </div>
                    <div class="ab-engagement-divider"></div>
                    <div class="ab-engagement-subtitle">
                        Appeals won for Texas <br />
                        homeowners last year.
                    </div>
                </div>
            `,
        );
    }

    function updateCounterValue() {
        if (window.sessionStorage.getItem(page_initials) === "true") return;

        window.sessionStorage.setItem(page_initials, true);

        const valueList = DATA[test_variation];
        const duration = 750;
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
            return false;
        }
    }

    init_TTP37();
    urlObserver();
})();
