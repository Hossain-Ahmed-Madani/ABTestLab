(function () {
    // ========= TEST START =========

    const TEST_CONFIG = {
        client: "Acadia",
        project: "Magicspoon",
        site_url: "https://magicspoon.com/",
        test_name: `MS94: [SITEWIDE] Default to Subscription - (2) SET UP TEST`,
        page_initials: "MS94",
        test_variation: 1,
    };

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
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

    waitForElement(
        () =>
            !!(
                document.querySelector(`body:not(.${TEST_CONFIG.page_initials})`) &&
                document.querySelectorAll('.ms24b-row.ms24b-subscribe, .lsg-bundle-interval-el.lsg-bundle-interval-sub-el, label[for="purchaseTypeSubscription-1"]').length >= 1
            ),
        () => {
            console.log(TEST_CONFIG);
            document.body.classList.add(TEST_CONFIG.page_initials);
            document.querySelectorAll('.ms24b-row.ms24b-subscribe, .lsg-bundle-interval-el.lsg-bundle-interval-sub-el, label[for="purchaseTypeSubscription-1"]').forEach((item) => item.click());
        }
    );
})();
