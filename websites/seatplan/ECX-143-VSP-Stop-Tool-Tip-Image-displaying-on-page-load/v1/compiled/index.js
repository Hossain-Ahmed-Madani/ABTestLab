/* 

Test container: https://app.convert.com/accounts/1004737/projects/1004631/experiences/1004168043/summary

control: https://seatplan.com/london/abba-arena-venue/seating-plan/?_conv_eforce=1004168043.1004396837&utm_campaign=sp5 
v1: https://seatplan.com/london/abba-arena-venue/seating-plan/?_conv_eforce=1004168043.1004396838&utm_campaign=sp5 
v2: https://seatplan.com/london/abba-arena-venue/seating-plan/?_conv_eforce=1004168043.1004396843&utm_campaign=sp5 

 */

(() => {
    const TEST_CONFIG = {
        page_initials: "AB-EXP-143",
        test_variation: 1 /* 1, 2 */,
        test_version: 0.0003,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
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

    function q(selector, context) {
        return document.querySelector(selector);
    }

    function addToolTipClass() {
        // Hiding the first tooltip
        const selector = ".seatplan-tooltip-info-outer";

        waitForElement(
            () => q(selector),
            () => {
                console.log("Added hidden class in tooltip, seatplan-tooltip-info-outer--ab-on-load");
                const targetNode = q(selector);
                targetNode.classList.add("seatplan-tooltip-info-outer--ab-on-load");
            }
        );
    }

    function addStickyCtaOnLoad() {

        const className = "AB-EXP-143--hide-cta" ;
        const body = document.body;
        body.classList.add(className);

        const handleScroll = (e) => {
            setTimeout(() => {
                console.log("User Scrolled, Removing Sticky CTA body class:", className);
                body.classList.remove(className);
                window.removeEventListener("scroll", handleScroll);
            }, 250);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
    }

    function init() {
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version${test_version}`);
        addToolTipClass();
        addStickyCtaOnLoad();
    }

    function hasAllTargetElements() {
        return !!q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`);
    }

    waitForElement(hasAllTargetElements, init);
})();
