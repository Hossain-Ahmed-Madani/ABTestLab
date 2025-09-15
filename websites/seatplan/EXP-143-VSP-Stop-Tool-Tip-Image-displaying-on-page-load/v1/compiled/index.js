(() => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        site_url: "https://seatplan.com/",
        test_name: "ECX-143: VSP - Stop Tool Tip Image displaying on page load ",
        page_initials: "AB-EXP-143",
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

    function init() {
        console.table(TEST_CONFIG);
        const { page_initials, test_variation} = TEST_CONFIG;
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${TEST_CONFIG.page_initials}--version${TEST_CONFIG.test_version}`);

        addToolTipClass();
    }

    function hasAllTargetElements() {
        return !!q(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`);
    }

    waitForElement(hasAllTargetElements, init);
})();
