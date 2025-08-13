(function MS53_1_TEST() {
    // ========= TEST START =========

    const TEST_CONFIG = {
        client: "Acadia",
        project: "Magicspoon",
        site_url: "https://magicspoon.com/",
        test_name: `MS53.1: [PRODUCT] Optimize Comparison Chart Design - (2) SET UP TEST`,
        page_initials: "MS53_1",
        test_variation: 0 /* 0, 1, 2 */,
        test_version: 0.00001,
    };

    function fireGA4Event(eventName, eventLabel = "") {
        console.log(`MS53_1: Firing GA4 Event: ${eventName} - ${eventLabel}`);

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

    function isElementVisibleInViewport(el) {
        if (!el) return false;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;

        // Check if any part of the element is visible in the viewport
        const vertInView = rect.top <= windowHeight && rect.bottom >= 0;
        const horInView = rect.left <= windowWidth && rect.right >= 0;

        // Additional check for minimum visible area (at least 1px)
        const vertVisible = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0) > 0;
        const horVisible = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0) > 0;

        return vertInView && horInView && vertVisible && horVisible;
    }

    function scrollHandler(e) {
        const targetNode = document.querySelector("#product-us-vs-them").parentNode;
        const isElementVisible = isElementVisibleInViewport(targetNode);
        if (isElementVisible) {
            fireGA4Event("MS53_1_View", "Ingredients section (area above us vs them)");
            window.removeEventListener("scroll", scrollHandler);
        }
    }

    function handleIngredientsSectionViewGoal() {
        const targetNode = document.querySelector("#product-us-vs-them").parentNode;
        const isElementVisible = isElementVisibleInViewport(targetNode);

        if (isElementVisible) {
            fireGA4Event("MS53_1_View", "Ingredients section (area above us vs them)");
        } else {
            window.addEventListener("scroll", scrollHandler);
        }
    }

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
            console.warn(error);
            return;
        }
    }

    function init() {
        console.table(TEST_CONFIG);

        document.body.classList.add(TEST_CONFIG.page_initials, `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`);
        handleIngredientsSectionViewGoal();
    }

    function hasAllTargetElements() {
        return !!(document.querySelector(`html#product-single body:not(.${TEST_CONFIG.page_initials})`) && document.querySelector(`#product-us-vs-them .width.w-l`));
    }

    waitForElement(hasAllTargetElements, init);
})();
