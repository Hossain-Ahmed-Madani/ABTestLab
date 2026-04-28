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
        test_version: 0.0001,
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
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function moveToTopIfNeeded(targetNode) {
        if(!targetNode) return;

        console.log("moveToTopIfNeeded", targetNode);
        
        const rect = targetNode.getBoundingClientRect();
        const tolerance = 2;
        if (Math.abs(rect.top - 100) <= tolerance) {
            return; 
        }
        const scrollOffset = rect.top - 100;
        window.scrollBy({
            top: scrollOffset,
            behavior: "smooth",
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        const eventName = isTouchEnabled() ? "touchend" : "click";

        const targetNode = q("#search-input");
        moveToTopIfNeeded(targetNode);
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
