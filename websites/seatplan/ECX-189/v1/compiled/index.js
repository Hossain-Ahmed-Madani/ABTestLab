/* 

Ticket: https://trello.com/c/N6k9DeiA/5156-ecx-189-mobile-homepage-smooth-scroll-hero-search-field-to-top-of-page-when-selected
Test container: https://app.convert.com/accounts/1004737/projects/1004631/experiences/1004196271/summary
Forced Variation: https://seatplan.com/?_conv_eforce=1004196271.1004461480&utm_campaign=qa5


*/

(async () => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        site_url: "https://seatplan.com",
        test_name: "[ECX-189] Mobile - Homepage - Smooth scroll hero search field to top of page when selected",
        page_initials: "AB-EXP-189",
        test_variation: 1,
        test_version: 0.0003,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    async function waitForElementAsync(predicate, timeout = 20000, frequency = 150) {
        const startTime = Date.now();

        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve(true);
            }

            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime;

                if (elapsed >= timeout) {
                    clearInterval(interval);
                    return reject(new Error(`Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`));
                }

                if (typeof predicate === "function" && predicate()) {
                    clearInterval(interval);
                    return resolve(true);
                }
            }, frequency);
        });
    }

    function q(s, o) {
        return document.querySelector(s);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function moveToTopIfNeeded(targetNode) {
        if (!targetNode) return;

        const rect = targetNode.getBoundingClientRect();
        const tolerance = 2;
        if (Math.abs(rect.top - 10) <= tolerance) {
            return;
        }
        const scrollOffset = rect.top - 10;
        window.scrollBy({
            top: scrollOffset,
            behavior: "smooth",
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        
        const targetNode = q("#search-input");

        setTimeout(() => {
            console.log("targetNode", targetNode);
            moveToTopIfNeeded(targetNode);
        }, 150);

        const eventName = isTouchEnabled() ? "touchend" : "click";
        targetNode.addEventListener(eventName, () => moveToTopIfNeeded(targetNode));
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q("#search-input"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
