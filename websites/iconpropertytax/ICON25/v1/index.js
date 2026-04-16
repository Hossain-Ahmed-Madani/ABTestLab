/* 

Ticket: https://trello.com/c/GaLBAkwG/5089-%F0%9F%92%9B-icon25-sitewide-countdown-to-deadline-promo-bar-2-set-up-test
Figma Design: https://www.figma.com/design/4QmluoK4icCDESChcVvgR5/ICON25---SITEWIDE--Countdown-to-Deadline-Promo-Bar?node-id=12-2&p=f&t=UtTy2T3CdFvDB9dn-0
Test container: https://marketer.monetate.net/control/a-0e709fac/p/iconpropertytax.com/experience/2103890#c2642366:what

*/

(async () => {
    const TEST_ID = "ICON25";
    const VARIANT_ID = "V1";

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
        project: "iconpropertytax",
        site_url: "https://www.iconpropertytax.com",
        test_name: "ICON25: [SITEWIDE] Countdown to Deadline Promo Bar - (2) SET UP TEST",
        page_initials: "AB-ICON25",
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


    function createLayout() {
        q("head").insertAdjacentHTML(
            "beforeend",
            /* HTML */ `
                <!-- Montserrat -->
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

                <!-- Bitter -->
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            `,
        );

        q("header").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="ab-deadline-promo-bar">
                    <div class="ab-deadline-promo-bar__location-with-end-date">
                        <span class="ab-deadline-promo-bar__country">Wake County</span>
                        Appeals <br />
                        Open — Deadline:
                        <span class="ab-deadline-promo-bar__end-date"> April 22</span>
                    </div>
                    <ul class="ab-deadline-promo-bar__countdown">
                        <li class="ab-deadline-promo-bar__countdown-item">
                            <span class="ab-deadline-promo-bar__countdown-item-value">5</span>
                            <span class="ab-deadline-promo-bar__countdown-item-label">DAYS</span>
                        </li>
                        <li class="ab-deadline-promo-bar__countdown-item-separator">:</li>
                        <li class="ab-deadline-promo-bar__countdown-item">
                            <span class="ab-deadline-promo-bar__countdown-item-value">16</span>
                            <span class="ab-deadline-promo-bar__countdown-item-label">HRS</span>
                        </li>
                        <li class="ab-deadline-promo-bar__countdown-item-separator">:</li>
                        <li class="ab-deadline-promo-bar__countdown-item">
                            <span class="ab-deadline-promo-bar__countdown-item-value">11</span>
                            <span class="ab-deadline-promo-bar__countdown-item-label">MINS</span>
                        </li>
                        <li class="ab-deadline-promo-bar__countdown-item-separator">:</li>
                        <li class="ab-deadline-promo-bar__countdown-item">
                            <span class="ab-deadline-promo-bar__countdown-item-value">49</span>
                            <span class="ab-deadline-promo-bar__countdown-item-label">SECS</span>
                        </li>
                    </ul>
                </div>
            `,
        );
    }

    function handleLocationChanges() {
        if (q(".ab-cta-container")) return;

        document.body.classList.remove(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = false;

        init_ICON25();
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

    async function init_ICON25() {
        if (window[page_initials] === true) return;

        try {
            await waitForElementAsync(checkForItems);

            window[page_initials] = true;
            q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

            console.log("ICON25 initialized");

            createLayout();
        } catch (error) {
            return false;
        }
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && document.readyState === "complete");
    }

    init_ICON25();
    urlObserver();
})();
