/* 

URL: https://www.covesmart.com/quiz-results/
Figma: https://www.figma.com/design/6kGIV8C7MvldVxOx8N3EHb/CS104---QUIZ-RESULTS--Card-Clean-Up?node-id=2001-3683&p=f&t=bHhinD1kOtBsyoSs-0
Test container: https://app.convert.com/accounts/10049195/projects/100410617/experiences/1004177293/summary

*/

(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "Convesmart",
        host: "https://www.covesmart.com/",
        test_name: "CS104: [QUIZ RESULTS] Card Clean Up - (2) SET UP TEST",
        page_initials: "AB-CS104",
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
