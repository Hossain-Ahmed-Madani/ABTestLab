/*  
    Test info:
        Test name: PDP - Add a Post ATC Modal (Iteration) [M]
        Ticket: https://trello.com/c/7rHQ37aa/4201-pdp-add-a-post-atc-modal-iteration-m
        Test container: 
        Preview: 
        Forced variation: 


*/

(() => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Do My Own",
        site_url: "https://www.domyown.com/termidor-sc-p-184.html",
        test_name: "PDP - Add a Post ATC Modal (Iteration) [M]",
        page_initials: "AB-PDP-ATC-MODAL",
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
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
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
