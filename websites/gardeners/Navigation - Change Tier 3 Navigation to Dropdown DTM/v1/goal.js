(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Gardeners",
        site_url: "https://www.gardeners.com",
        test_name: "Navigation - Change Tier 3 Navigation to Dropdown [DTM]",
        page_initials: "AB-NAV-GLOBAL",
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

    function triggerGoal() {
        console.log("Navigation Clicks | JS: 1004119766");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "1004119766"]);
    }

    function init() {
        if (window[page_initials] === true) return;

        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        triggerGoal();
        q('button.header__menu-icon.header__icon-touch.header__icon-menu[aria-label="Open menu"]').addEventListener('click', triggerGoal)
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q('button.header__menu-icon.header__icon-touch.header__icon-menu[aria-label="Open menu"]'));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
