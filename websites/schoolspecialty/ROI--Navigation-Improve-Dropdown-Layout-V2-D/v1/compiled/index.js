(() => {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "select.schoolspecialty",
        site_url: "https://select.schoolspecialty.com/",
        test_name: "Navigation - Improve Dropdown Layout V2 [D]",
        page_initials: "AB-NAV-V2-D",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
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
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
    }

    function hasAllTargetElements() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && true);
    }

    waitForElement(hasAllTargetElements, init);
})();
