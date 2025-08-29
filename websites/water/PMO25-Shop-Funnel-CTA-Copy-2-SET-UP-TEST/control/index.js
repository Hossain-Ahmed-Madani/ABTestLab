(() => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "Water",
        site_url: "https://www.water.com/",
        test_name: "PMO25: [Shop Funnel] CTA Copy-(2) SET UP TEST : remove the special characters and spaces and replace them with _",
        page_initials: "AB-PMO25",
        test_variation: 0, /* control */
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

        document.querySelectorAll(".wrapper-step:nth-of-type(1) .wrapper-step__actions, .wrapper-step:nth-of-type(2) .wrapper-step__actions").forEach((item) => {
            item.addEventListener("click", (e) => {
                if (e.target.closest(".btn")) {
                    fireGA4Event("PM025_CTAclick", e.target.closest(".btn").innerText);
                }
            });
        });
    }

    function hasAllTargetElements() {
        return !!(
            window.location.href.includes("/start-water-delivery/") &&
            document.querySelector(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) &&
            document.querySelector(".wrapper-step:nth-of-type(1) .wrapper-step__actions .btn:not(.ab-btn)") &&
            document.querySelector(".wrapper-step:nth-of-type(2) .wrapper-step__actions .btn:not(.ab-btn)")
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
