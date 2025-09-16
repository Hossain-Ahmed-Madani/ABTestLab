/* 
https://www.figma.com/design/gRstDeTcFaKxrCReVHbMeh/BL-10-Blog-Work?node-id=26-2&p=f&t=g7MMjZOYSByPG8s3-0
https://www.bergerlawsc.com/library/10-ways-sc-buses-must-be-maintained-for-child-safety.cfm
https://www.bergerlawsc.com/library/in-the-news.cfm


control: https://marketer.monetate.net/control/preview/13087/ZOIEV7SN3KS01R8A681547H1YINEME5N/bl10-library-increase-scroll-depth
v1: https://marketer.monetate.net/control/preview/13087/D6GZFD5F9BNA03TRGWOR729X74UDT7DC/bl10-library-increase-scroll-depth
*/

(() => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "bergerlawsc",
        site_url: "https://www.bergerlawsc.com/",
        test_name: "BL10: [LIBRARY] Increase Scroll Depth-(2) SET UP TEST",
        page_initials: "AB-BL10",
        test_variation: 0,
        test_version: 0.0002,
    };

    function fireGA4Event(eventName, eventLabel = "") {
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

    function getMileStoneFunctions() {
        const getScrollPercent = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            return (scrollTop / docHeight) * 100;
        };

        const closestMilestone = (percent) => {
            const milestones = [25, 50, 75, 100]; // scroll checkpoints
            return milestones.reduce((prev, curr) => (percent >= curr ? curr : prev), 0);
        };

        return { getScrollPercent, closestMilestone };
    }

    function updateProgressBar() {
        const { getScrollPercent, closestMilestone } = getMileStoneFunctions();
        const milestone_reached = { 25: false, 50: false, 75: false, 100: false };

        const percent = getScrollPercent();
        const milestone = closestMilestone(percent);

        let lastMilestone = null; // track last milestone crossed

        // console.log({ percent, milestone, lastMilestone });

        if (milestone !== lastMilestone && milestone !== 0) {
            lastMilestone = milestone;
        }

        // Fire GA4 event when a new milestone is reached
        if (milestone === 25 && !milestone_reached[25]) {
            milestone_reached[25] = true;
            fireGA4Event("BL10_Scrolldepth", "25%");
        } else if (milestone === 50 && !milestone_reached[50]) {
            fireGA4Event("BL10_Scrolldepth", "50%");
            milestone_reached[50] = true;
        } else if (milestone === 75 && !milestone_reached[75]) {
            fireGA4Event("BL10_Scrolldepth", "75%");
            milestone_reached[75] = true;
        } else if (milestone === 100 && !milestone_reached[100]) {
            fireGA4Event("BL10_Scrolldepth", "100%");
            milestone_reached[100] = true;
        }
    }

    function throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }

    function handleScrollActions() {
        updateProgressBar();
    }

    function handleScrollEvent() {
        const throttledScrollHandler = throttle(handleScrollActions, 50);
        window.addEventListener("scroll", throttledScrollHandler);
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
