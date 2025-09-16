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

    function getMileStoneFunctions(targetElement) {
        const milestones = [25, 50, 75, 100];

        const getScrollPercent = () => {
            if (!targetElement) return 0;

            const rect = targetElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            const elementTop = targetElement.offsetTop;
            const elementHeight = targetElement.offsetHeight;
            const elementBottom = elementTop + elementHeight;

            // When element starts entering viewport (top of element touches bottom of viewport)
            const startScrollPoint = elementTop - windowHeight;

            // When element is fully scrolled (bottom of element reaches top of viewport)
            const endScrollPoint = elementBottom - windowHeight;

            // Current scroll position
            const currentScroll = scrollTop;

            // Calculate percentage
            let percentage = 0;

            if (currentScroll <= startScrollPoint) {
                // Not reached yet
                percentage = 0;
            } else if (currentScroll >= endScrollPoint) {
                // Fully scrolled through the element
                percentage = 100;
            } else {
                // In progress
                const totalScrollRange = endScrollPoint - startScrollPoint;
                const scrolledThrough = currentScroll - startScrollPoint;
                percentage = (scrolledThrough / totalScrollRange) * 100;
            }

            return Math.min(Math.max(percentage, 0), 100);
        };

        const closestMilestone = (percent) => {
            return milestones.reduce((prev, curr) => (percent >= curr ? curr : prev), 25);
        };

        return { getScrollPercent, closestMilestone };
    }

    function updateProgressBar() {
        const sectionToTrack = q(".main-content .dss-content");

        if (!sectionToTrack) return;

        const { getScrollPercent, closestMilestone } = getMileStoneFunctions(sectionToTrack);
        const percent = getScrollPercent();
        const milestone = closestMilestone(percent);

        // Store milestones in a persistent variable
        if (typeof window.scrollMilestones === "undefined") {
            window.scrollMilestones = { 25: false, 50: false, 75: false, 100: false };
        }

        // Ensure milestone never goes below 25
        const finalMilestone = Math.max(milestone, 25);

        // Fire GA4 event when a new milestone is reached
        if (finalMilestone === 25 && !window.scrollMilestones[25]) {
            window.scrollMilestones[25] = true;
            fireGA4Event("BL10_Scrolldepth", "25%");
        } else if (finalMilestone === 50 && !window.scrollMilestones[50]) {
            window.scrollMilestones[50] = true;
            fireGA4Event("BL10_Scrolldepth", "50%");
        } else if (finalMilestone === 75 && !window.scrollMilestones[75]) {
            window.scrollMilestones[75] = true;
            fireGA4Event("BL10_Scrolldepth", "75%");
        } else if (finalMilestone === 100 && !window.scrollMilestones[100]) {
            window.scrollMilestones[100] = true;
            fireGA4Event("BL10_Scrolldepth", "100%");
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
