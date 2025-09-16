/* 
https://www.figma.com/design/gRstDeTcFaKxrCReVHbMeh/BL-10-Blog-Work?node-id=26-2&p=f&t=g7MMjZOYSByPG8s3-0
https://www.bergerlawsc.com/library/10-ways-sc-buses-must-be-maintained-for-child-safety.cfm
https://www.bergerlawsc.com/library/in-the-news.cfm


control: https://marketer.monetate.net/control/preview/13087/8BFQHTP8MRVUPUZGCXLDWN9MGW8P6JUE/bl10-library-increase-scroll-depth
v1: https://marketer.monetate.net/control/preview/13087/MBIJ7YMOZCKELA62TQTKUF1AFBG8XHO8/bl10-library-increase-scroll-depth
*/

(() => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "bergerlawsc",
        site_url: "https://www.bergerlawsc.com/",
        test_name: "BL10: [LIBRARY] Increase Scroll Depth-(2) SET UP TEST",
        page_initials: "AB-BL10",
        test_variation: 0,
        test_version: 0.0003,
    };

    function fireGA4Event(eventName, eventLabel = "") {
        // console.log("BL10: ", eventName, eventLabel);
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
        return o ? s.querySelector(o) : document.querySelector(s);
    }
    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
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

            if (milestone === 25) {
                fireGA4Event("BL10_Scrolldepth", "25%");
            } else if (milestone === 50) {
                fireGA4Event("BL10_Scrolldepth", "50%");
            } else if (milestone === 75) {
                fireGA4Event("BL10_Scrolldepth", "75%");
            } else if (milestone === 100) {
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
