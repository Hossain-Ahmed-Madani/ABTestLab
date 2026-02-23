(async () => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        site_url: "https://www.example.com",
        test_name: "[ECX - 176] VSP - Append ?bookSeatId= to TSM URL for Blurry Users",
        page_initials: "AB-ECX-176",
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

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function triggerGoal(goalName, goalId) {
        console.log(`Triggering goal: ${goalName} with ID: ${goalId}`);
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", goalId]);
    }

    async function triggerAddToBasketModalGoals() {
        try {
            await waitForElementAsync(() => q(".c-modal-base__content-wrapper"));
            const targetNode = q(".c-modal-base__content-wrapper");
            if (q(targetNode, ".c-error-modal-template__error-message-text")?.textContent?.trim().includes("Sorry, your selected seat")) {
                triggerGoal("ECX-176 Viewed ‘Not Add to Basket’ Modal | JS", "1004114526");
            } else {
                triggerGoal("ECX-176 Viewed ‘Add to Basket’ Modal | JS", "1004114525");
            }
        } catch (error) {
            return false;
        }
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        triggerAddToBasketModalGoals();
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
