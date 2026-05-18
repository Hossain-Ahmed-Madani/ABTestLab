(async () => {
    const TEST_ID = "PMO52";
    const VARIANT_ID = "V1"; /* V1, V2 */

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
        project: "Water",
        site_url: "https://www.water.com",
        test_name: "PMO52: [CART] Add Social Proof-(2) SET UP TEST",
        page_initials: "AB-PMO52",
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

    function handleLocationChange() {
        if (window.location.pathname === "/cart/") {
            INIT_PMO32();
        } else {
            q("body").classList.remove(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
            window[page_initials] = false;
        }
    }

    function urlObserver() {
        const debouncedLocationChanges = debounce(handleLocationChange, 150);

        // Optional: Track pushState/replaceState changes too
        const originalPushState = history.pushState;
        history.pushState = function () {
            originalPushState.apply(history, arguments);
            window.dispatchEvent(new Event("pushstate"));
        };

        // Listen for back/forward button clicks
        window.addEventListener("popstate", function (event) {
            console.log("==== < Navigation occurred (back/forward button) ====");
            debouncedLocationChanges();
        });

        window.addEventListener("pushstate", function () {
            console.log("=== > History state was changed programmatically ===");
            debouncedLocationChanges();
        });
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && document.readyState === "complete");
    }

    async function INIT_PMO32() {
        if (window[page_initials] === true) return;

        try {
            await waitForElementAsync(checkForItems);
            q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
            console.table(TEST_CONFIG);
        } catch (error) {
            console.warn(error);
            return false;
        }
    }

    urlObserver();
    INIT_PMO32();
})();
