/* 
Ticket link: https://trello.com/c/oQ2yiWSy/4560-%F0%9F%92%9B%F0%9F%8D%BF-vc115-collection-filter-quantities-2-set-up-test
URL: https://www.vicicollection.com/?pb=1
Figma: https://www.figma.com/design/OqFHShfnjCQzW7JHGAf9vT/VC_---COLLECTION--Filter-Quantities?node-id=2002-9&t=zIfUG0iOTtzAFOjq-0
Test container: https://marketer.monetate.net/control/a-41b13725/p/vicicollection.com/experience/2073784#

*/

(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "vicicollection",
        host: "https://www.vicicollection.com/",
        test_name: "VC115: [COLLECTION] Filter Quantities - (2) SET UP TEST",
        page_initials: "AB-VC115",
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
