// https://seatplan.com/london/abba-arena-venue/seating-plan/

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

    function addShowToolTipClassOnMutation() {
        // Showing tool tip class after first tooltip get's removed from #seatmap-base-add

        const selector = "#seatmap-base-app";

        waitForElement(
            () => q(selector),
            () => {
                const targetNode = q(selector);
                targetNode.click();

                new MutationObserver((mutationList, observer) => {
                    [...mutationList[0].removedNodes].forEach((item) => {
                        if (item.classList.contains("seatplan-tooltip-info-outer")) {
                            console.log("First Tool tip removed from dom, adding class AB-EXP-143--show-tooltip");
                            document.body.classList.add("AB-EXP-143--show-tooltip");
                            observer.disconnect();
                        }
                    });
                }).observe(targetNode, { childList: true });
            }
        );
    }

    function init() {
        console.table(TEST_CONFIG);
        const { page_initials, test_variation} = TEST_CONFIG;
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${TEST_CONFIG.page_initials}--version${TEST_CONFIG.test_version}`);

        addShowToolTipClassOnMutation();
    }

    function hasAllTargetElements() {
        return !!q(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`);
    }

    waitForElement(hasAllTargetElements, init);
})();
