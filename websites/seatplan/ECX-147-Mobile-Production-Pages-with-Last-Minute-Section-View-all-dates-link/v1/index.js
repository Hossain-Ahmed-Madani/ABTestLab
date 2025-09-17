// https://seatplan.com/london/les-miserables-tickets/?_conv_eforce=1004168458.1004397814&utm_campaign=qa5

(() => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        site_url: "https://seatplan.com/",
        test_name: "ECX-147: Mobile | Production Pages with Last Minute Section | View all dates link",
        page_initials: "AB-EXP-147",
        test_variation: 1,
        test_version: 0.0001,
    };

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
        if (timer <= 0) {
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => waitForElement(predicate, callback, timer - frequency, frequency), frequency);
        }
    }

    function createLayout() {
        const a = document.createElement("a");
        a.href = "javascript:void(0)";
        a.className = "ab-view-all-dates-link";
        a.innerHTML = `<span>View all dates</span>` + '<span class="sp-icon sp-icon-east"></span>';
        a.addEventListener("click", (e) => {
            qq("#offers-accordion-link, #production-calendar-mobile-link")[0].click();
            console.log("Goal: User selects Last Minute section view all dates link | JS, 1004105933");
            window._conv_q = window._conv_q || [];
            _conv_q.push(["triggerConversion", "1004105933"]);
        });

        q(".production-page-last-minute-tickets").insertAdjacentElement("afterend", a);
    }

    function init() {
        const { page_initials, test_variation, test_version } = TEST_CONFIG;
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version${test_version}`);

        // console.table(TEST_CONFIG);

        createLayout();
    }

    function hasAllTargetElements() {
        return !!(
            q(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) &&
            q(".production-page-last-minute-tickets") &&
            qq("#offers-accordion-link, #production-calendar-mobile-link").length > 0
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
