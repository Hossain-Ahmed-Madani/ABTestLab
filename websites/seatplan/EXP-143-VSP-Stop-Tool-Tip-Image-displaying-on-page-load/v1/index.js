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
        return context ? context.querySelector(selector) : document.querySelector(selector);
    }

    function qq(selector, context) {
        return context ? [...context.querySelectorAll(selector)] : [...document.querySelectorAll(selector)];
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

    function addStickyCtaOnLoad() {
        if (TEST_CONFIG.test_variation !== 2) return;

        const body = document.body;
        body.classList.add("AB-EXP-143--sticky-cta");

        const handleScroll = (e) => {
            
            setTimeout(() => {
                console.log("User Scrolled, Removing Sticky CTA body class")
                body.classList.remove("AB-EXP-143--sticky-cta");
                window.removeEventListener("scroll", handleScroll);

            }, 250)
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

    }

    function init() {
        console.table(TEST_CONFIG);
        const { page_initials, test_variation, test_version } = TEST_CONFIG;
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${TEST_CONFIG.page_initials}--version${TEST_CONFIG.test_version}`);

        addShowToolTipClassOnMutation();
        addStickyCtaOnLoad();
    }

    function hasAllTargetElements() {
        return !!q(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`);
    }

    waitForElement(hasAllTargetElements, init);
})();
