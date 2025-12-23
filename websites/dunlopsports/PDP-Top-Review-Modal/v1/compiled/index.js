/* 
Ticket: https://trello.com/c/JeFHZwPS/4541-pdp-top-review-modal-dtm
Test container: https://app.optimizely.com/v2/projects/30347390156/experiments/4655644880404480/pages
Figma: https://www.figma.com/design/sDP3TPgMBmNNr4RZvdx4Kb/Dunlop-Sports-America?node-id=101-189&t=q0FXhNstxiR9NZF2-0

*/

(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Dunlopsports",
        host: "https://us.dunlopsports.com",
        test_name: "PDP - Top Review Modal [DTM]",
        page_initials: "AB-PDP-TOP-REVIEW",
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
        return document.querySelector(s);
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && true);
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
