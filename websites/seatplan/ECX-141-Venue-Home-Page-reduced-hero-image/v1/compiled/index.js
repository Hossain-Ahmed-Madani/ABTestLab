/* 

url-regex: https:\/\/seatplan\.com\/(london|new-york)\/.*(theat(re|er)|venue)\/(\?.*)?$
url: https://seatplan.com/london/lyceum-theatre/


container: https://app.convert.com/accounts/1004737/projects/1004631/experiences/1004168246/summary
control:   https://seatplan.com/london/lyceum-theatre/?_conv_eforce=1004168246.1004397290&utm_campaign=qa5
v1:        https://seatplan.com/london/lyceum-theatre/?_conv_eforce=1004168246.1004397291&utm_campaign=qa5

*/

(() => {
    const TEST_CONFIG = {
        page_initials: "AB-EXP-141",
        test_variation: 1,
        test_version: 0.0001,
    };

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
        const { page_initials, test_variation, test_version } = TEST_CONFIG;
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
    }

    function hasAllTargetElements() {
        return !!(q(`body.venue-homepage-wrapper :not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) && true);
    }

    waitForElement(hasAllTargetElements, init);
})();
