(() => {
    const TEST_CONFIG = {
        page_initials: "AB-BL10",
        test_variation: 0,
        test_version: 0.0007,
    };

    function fireGA4Event(eventName, eventLabel = "") {
        console.log("BL10: ", eventName, eventLabel);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "GA4event",
            "ga4-event-name": "cro_event",
            "ga4-event-p1-name": "event_category",
            "ga4-event-p1-value": eventName,
            "ga4-event-p2-name": "event_label",
            "ga4-event-p2-value": eventLabel,
        });
    }

    SCROLL_GOALS_FIRED = {
        25: false,
        50: false,
        75: false,
        100: false,
    };

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
        if (timer <= 0) {
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

    // Window Scroll
    function ga4ScrollGoalFunctions() {
        const milestones = [25, 50, 75, 100]; // scroll checkpoints
        let lastMilestone = null; // track last milestone crossed

        const getScrollPercent = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            return (scrollTop / docHeight) * 100;
        };

        const closestMilestone = (percent) => {
            // find the closest milestone user has passed
            return milestones.reduce((prev, curr) => (percent >= curr ? curr : prev), 0);
        };

        const handleScrollGa4Goal = () => {
            const percent = getScrollPercent();
            const milestone = closestMilestone(percent);

            if (milestone !== lastMilestone && milestone !== 0) {
                if (lastMilestone !== null) {
                    console.log(`User moved from ${lastMilestone}% → ${milestone}%`);
                }
                lastMilestone = milestone;
            }

            if (milestone === 25 && !SCROLL_GOALS_FIRED[25]) {
                SCROLL_GOALS_FIRED[25] = true;
                fireGA4Event("BL10_Scrolldepth", "25%");
            } else if (milestone === 50 && !SCROLL_GOALS_FIRED[50]) {
                SCROLL_GOALS_FIRED[50] = true;
                fireGA4Event("BL10_Scrolldepth", "50%");
            } else if (milestone === 75 && !SCROLL_GOALS_FIRED[75]) {
                SCROLL_GOALS_FIRED[75] = true;
                fireGA4Event("BL10_Scrolldepth", "75%");
            } else if (milestone === 100 && !SCROLL_GOALS_FIRED[100]) {
                SCROLL_GOALS_FIRED[100] = true;
                fireGA4Event("BL10_Scrolldepth", "100%");
            }
        };

        return { handleScrollGa4Goal };
    }
    function handleScrollEvent() {
        const { handleScrollGa4Goal } = ga4ScrollGoalFunctions();
        window.addEventListener("scroll", handleScrollGa4Goal);
    }

    function init() {
        const { page_initials, test_variation, test_version } = TEST_CONFIG;
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        handleScrollEvent();
    }

    function hasAllTargetElements() {
        return !!q(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`);
    }

    waitForElement(hasAllTargetElements, init);
})();
