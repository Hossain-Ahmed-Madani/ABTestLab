(function () {
    const TEST_KEY = "AB_TEST_1004197580";

    if (window[TEST_KEY] === true) return true;

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
    function triggerExperiment() {
        window[TEST_KEY] = true;
        window._conv_q = window._conv_q || [];
        window._conv_q.push(["executeExperiment", '1004197580']);
        convert_recheck_experiment();
        return true;
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    const hamBurgerSelector = 'button.header__menu-icon.header__icon-touch.header__icon-menu[aria-label="Open menu"]';

    const checkConditionCallback = () => q(hamBurgerSelector);
    const actionCallback = () => q(hamBurgerSelector).addEventListener("click", triggerExperiment);

    // Init Check
    waitForElementAsync(checkConditionCallback).then(actionCallback).catch(convert_recheck_experiment);
})()
