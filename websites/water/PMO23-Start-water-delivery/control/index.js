(() => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "Water",
        site_url: "https://www.water.com/",
        test_name: "PMO23: [Start-water-delivery] Optimize “Learn More” Copy & Modal Design-(2) SET UP TEST",
        page_initials: "AB-PMO23",
        test_variation: 0 /* 0 -> control */,
        test_version: 0.0001,
    };

    function waitForElement(predicate, callback, timer = 20000, frequency = 100) {
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
            console.error(error);
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

    function clickEvents() {
        const actionList = [
            {
                selector: "a.text-primo-river[data-modal-v2-trigger]",
                callback: (e) => fireGA4Event("PMO23_Learn_More", e.target.innerText),
            },
        ];

        actionList.forEach((actionItem) =>
            waitForElement(
                () => document.querySelectorAll(actionItem.selector).length >= 1,
                () => {
                    const targetNodes = document.querySelectorAll(actionItem.selector);
                    targetNodes.forEach((item) => item.addEventListener("click", actionItem.callback));
                }
            )
        );
    }

    function modalViewGoal() {
        new MutationObserver((mutationsList, observer) => {
            if (document.querySelector("#water-types").getAttribute("aria-hidden") === "false") {
                fireGA4Event("PMO23_Modal View", "Water Guide Modal View");
                observer.disconnect();
            }
        }).observe(document.querySelector("#water-types"), { attributes: true });
    }

    function init() {
        console.log(TEST_CONFIG);

        document.body.classList.add(
            TEST_CONFIG.page_initials,
            `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`,
            `${TEST_CONFIG.page_initials}--version-${TEST_CONFIG.test_version}`
        );

        clickEvents();
        modalViewGoal();
    }

    function hasAllTargetElements() {
        return !!(
            window.location.href.includes("start-water-delivery") &&
            document.querySelector(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) &&
            document.querySelector("a.text-primo-river[data-modal-v2-trigger]") &&
            document.querySelector(".storyblok-text-blocks") &&
            document.querySelector("#water-types")
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
