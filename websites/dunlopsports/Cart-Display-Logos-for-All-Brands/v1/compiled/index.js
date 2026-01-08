/* 
    Ticket: https://trello.com/c/vAbXT6E6/4473-cart-display-logos-for-all-brands-dtm
    Test container: https://app.optimizely.com/v2/projects/30347390156/experiments/4653129170419712/variations
    Figma: https://www.figma.com/design/sDP3TPgMBmNNr4RZvdx4Kb/Dunlop-Sports-America?node-id=54-3&t=IPFQ1NtXJ3dwcTvX-1

*/

(function () {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "dunlopsports",
        site_url: "https://us.dunlopsports.com/",
        test_name: "Cart - Display Logos for All Brands [DTM]",
        page_initials: "AB-DISPLAY-LOGOS",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
        if (timer <= 0) {
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => waitForElement(predicate, callback, timer - frequency, frequency), frequency);
        }
    }

    function q(s, o) {
        return document.querySelector(s);
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && true);
    }

    waitForElement(checkForItems, init);
})();
