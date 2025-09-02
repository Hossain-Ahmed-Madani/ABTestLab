// https://marketer.monetate.net/control/a-899aac64/p/water.com/experience/2035976#c2556648:what
// https://www.figma.com/design/J6bgxIkQ0Xu2A4s1xA19VL/Learn-More?node-id=0-1&p=f&t=t49Fr6Y6VkrGrMfT-0

(() => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "Water",
        site_url: "https://www.water.com/",
        test_name: "PMO23: [Start-water-delivery] Optimize “Learn More” Copy & Modal Design-(2) SET UP TEST",
        page_initials: "AB-PMO23",
        test_variation: 1,
        test_version: 0.0001,
    };

    function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
        try {
            if (timer <= 0) {
                throw new Error(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            } else if (predicate && predicate()) {
                callback();
            } else {
                setTimeout(() => {
                    waitForElement(predicate, callback, timer - frequency, frequency);
                }, frequency);
            }
        } catch (error) {
            return;
        }
    }

    function fireGA4Event(eventName, eventLabel = "") {
        console.log(`Firing GA4 Event: ${eventName} - ${eventLabel}`);
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

    function init() {
        document.body.classList.add(
            TEST_CONFIG.page_initials,
            `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`,
            `${TEST_CONFIG.page_initials}--version-${TEST_CONFIG.test_version}`
        );

        console.log(TEST_CONFIG);
    }

    function hasAllTargetElements() {
        return !!(
            window.location.href.includes("start-water-delivery") &&
            document.querySelector(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) &&
            true
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
