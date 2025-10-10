(function () {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "select.schoolspecialty",
        site_url: "https://select.schoolspecialty.com/",
        test_name: "Navigation - Improve Dropdown Layout V2 [D]",
        page_initials: "AB-NAV-V2-D",
        test_variation: 0 /* Control */,
        test_version: 0.0003,
    };

    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
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

    function triggerConvertGoal(goalId) {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", goalId]);
    }

    function clickEvent(e) {
        if (e.target.closest("a") || e.target.closest("li")) {
            triggerConvertGoal(1004107490);
            e.currentTarget.removeEventListener("click", clickEvent);
        }
    }

    waitForElement(
        () => q("#departmentsMenu"),
        () => {
            document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
            q("#departmentsMenu").addEventListener("click", clickEvent);
        }
    );
})();
