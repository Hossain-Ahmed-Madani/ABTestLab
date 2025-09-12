(() => {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "select.schoolspecialty",
        site_url: "https://select.schoolspecialty.com/",
        test_name: "Level 2 PLP - Remove the Category Thumbnails [Iteration][DTM]",
        page_initials: "AB-LEVEL-2-PLP",
        test_variation: 1,
        test_version: 0.0001,
    };

    function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
        if (timer <= 0) {
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => {
                waitForElement(predicate, callback, timer - frequency, frequency);
            }, frequency);
        }
    }

    function init() {
        const { page_initials, test_variation, test_version } = TEST_CONFIG;
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version${test_version}`);

        console.table(TEST_CONFIG);
    }

    function hasAllTargetElements() {
        return !!(document.querySelector(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) && true);
    }

    waitForElement(hasAllTargetElements, init);
})();
