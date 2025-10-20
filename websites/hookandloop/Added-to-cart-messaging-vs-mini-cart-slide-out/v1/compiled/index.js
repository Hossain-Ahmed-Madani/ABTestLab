(async () => {
    const TEST_CONFIG = {
        client: "Hook & Loop",
        project: "Hook & Loop",
        site_url: "https://www.hookandloop.com",
        test_name: "H & L - A/B test idea - Added to cart messaging vs. mini cart slide-out.",
        page_initials: "AB-MINI-CART",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    async function waitForPromise(predicate, timeout = 10000, frequency = 150) {
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
        return document.querySelector(s);
    }

    function requiredItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && false);
    }

    function init() {
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
    }

    try {
        const hasFoundRequiredItems = await waitForPromise(requiredItems);
        if (hasFoundRequiredItems) init();
    } catch (error) {
        console.warn(error);
    }
})();
