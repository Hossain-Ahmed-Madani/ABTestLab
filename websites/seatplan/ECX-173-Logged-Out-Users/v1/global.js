(async () => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        site_url: "https://www.example.com",
        test_name: "[ECX - 173] Logged Out Users | Header | Shaking Error Icon on Avatar",
        page_initials: "AB-ECX-173-GLOBAL",
        test_variation: 0,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    async function waitForElementAsync(predicate, timeout = 10000, frequency = 150) {
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

    function getSessionStorageValue(key) {
        try {
            if (!key || typeof key !== "string") return null;
            const value = sessionStorage.getItem(key);
            return value !== null ? value : null;
        } catch (e) {
            // console.error("Error getting sessionStorage value:", e);
            return null;
        }
    }

    function setSessionStorageValue(key, value) {
        try {
            if (!key || typeof key !== "string") return false;
            sessionStorage.setItem(key, value);
            return true;
        } catch (e) {
            // console.error("Error setting sessionStorage value:", e);
            return false;
        }
    }

    function removeSessionStorageValue(key) {
        try {
            if (!key || typeof key !== "string") return false;
            sessionStorage.removeItem(key);
            return true;
        } catch (e) {
            // console.error("Error removing sessionStorage value:", e);
            return false;
        }
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

    function triggerGoal(goalName, goalId) {
        console.log(`Triggering goal: ${goalName} with ID: ${goalId}`);
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", goalId]);
    }

    async function initLoggedOutClicksAccountIcon() {
        await waitForElementAsync(() => q("#loggedout-control"));

        q("#loggedout-control").addEventListener("click", (e) => {
            triggerGoal("Logged out user clicks on Account icon | JS", "111111");
        });

        return true;
    }

    async function initUserCompletesLogin() {
        await waitForElementAsync(() => q(".status-loggedin"));
        triggerGoal("A user completes log in | JS", "111112");
        setSessionStorageValue("AB_LOGGED_IN", "true");
    }

    async function initLoggedInUserBeginsCheckout() {
        const selector = "#cart-summary .button-secure, .c-basket  .button-secure, .basket-overlay__container .basket-overlay__btn";
        await waitForElementAsync(() => qq(selector).length > 0);

        qq(selector).forEach((button) => {
            button.addEventListener("click", (e) => {
                setTimeout(() => {
                    if (getSessionStorageValue("AB_LOGGED_IN") === "true" && !button.classList.contains("sp-button--disabled")) {
                        triggerGoal("A logged in user begins checkout | JS", "111113");
                    }
                }, 1000);
            });
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        initLoggedOutClicksAccountIcon();
        initUserCompletesLogin();
        initLoggedInUserBeginsCheckout();
    }

    function checkForItems() {
        return !!q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`);
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
