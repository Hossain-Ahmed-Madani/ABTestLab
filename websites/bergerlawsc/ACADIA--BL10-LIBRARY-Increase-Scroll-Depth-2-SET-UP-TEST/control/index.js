(() => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "bergerlawsc",
        site_url: "https://www.bergerlawsc.com/",
        test_name: "BL10: [LIBRARY] Increase Scroll Depth-(2) SET UP TEST",
        page_initials: "AB-BL10",
        test_variation: 0,
        test_version: 0.0001,
    };

    function fireGA4Event(eventName, eventLabel = "") {
        console.log(`BL10: Firing GA4 Event: ${eventName} - ${eventLabel}`);

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
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => waitForElement(predicate, callback, timer - frequency, frequency), frequency);
        }
    }

    function handleScroll() {
        const milestones = [25, 50, 75, 100]; // scroll checkpoints

        function getScrollPercent() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            return (scrollTop / docHeight) * 100;
        }

        function closestMilestone(percent) {
            return milestones.reduce((prev, curr) => (percent >= curr ? curr : prev), 0);
        }

        let milestone_reached = {
            25: false,
            50: false,
            75: false,
            100: false,
        };

        window.addEventListener("scroll", () => {
            const percent = getScrollPercent();
            const milestone = closestMilestone(percent);

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
        });
    }

    function handleSelectionTableInteraction() {
        waitForElement(
            () => !!(document.querySelector(".ab-scroll-and-table-contents") && document.querySelector(".ab-table-content-selection")),
            () => {
                // PREVENT LOADING THE LINK
                document.querySelector(".ab-scroll-and-table-contents").addEventListener("click", (e) => e.preventDefault());

                // HANDLE MOUSE ENTER AND LEAVE EVENTS
                const selectionContainer = document.querySelector(".ab-table-content-selection");

                selectionContainer.addEventListener("mouseenter", (e) => {
                    selectionContainer.setAttribute("data-state", "opened");
                });
                selectionContainer.addEventListener("mouseleave", (e) => {
                    selectionContainer.setAttribute("data-state", "closed");
                });

                // HANDLE CLICK ON ITEMS
                document.querySelector(".ab-table-content-selection").addEventListener("click", (e) => {
                    if (e.target.closest(".ab-table-content-selected-item")) {
                        selectionContainer.setAttribute("data-state", "opened");
                        return;
                    }

                    if (e.target.closest(".ab-table-content-item[selected]")) {
                        setTimeout(() => {
                            selectionContainer.setAttribute("data-state", "closed");
                        }, 50);
                    }

                    if (e.target.closest(".ab-table-content-item:not([selected])")) {
                        document.querySelectorAll(".ab-table-content-item").forEach((el) => el.removeAttribute("selected"));

                        const item = e.target.closest(".ab-table-content-item");
                        item.setAttribute("selected", "true");
                        document.querySelector(".ab-table-content-selected-item").innerHTML = item.innerHTML;

                        setTimeout(() => {
                            // if (window.innerWidth < 991) {
                            selectionContainer.setAttribute("data-state", "closed");
                            // }
                        }, 50);

                        // SCROLL TO THE TARGET H3
                        const targetH3 = item.getAttribute("targetH3");
                        const targetElement = document.querySelector(targetH3);

                        const headerOffsetObj = {
                            "(max-width: 575px)": 200,
                            "(min-width: 576px) and (max-width: 991px)": 230,
                            "(min-width: 992px)": 150,
                        };

                        const matchingQuery = Object.keys(headerOffsetObj).find((mediaQuery) => window.matchMedia(mediaQuery).matches);
                        const headerOffset = matchingQuery ? headerOffsetObj[matchingQuery] : 150;

                        window.scrollTo({
                            top: targetElement.offsetTop - headerOffset,
                            behavior: "smooth",
                        });

                        fireGA4Event("BL10_Tableofcontent", targetElement.textContent);
                    }
                });
            }
        );
    }

    function init() {
        console.table(TEST_CONFIG);

        const { page_initials, test_variation, test_version } = TEST_CONFIG;
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        handleScroll();
    }

    function hasAllTargetElements() {
        return !!(
            window.location.href.includes("/library/") &&
            document.querySelector(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) &&
            document.querySelector("#nav") &&
            document.querySelector(".dss-content h3")
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
