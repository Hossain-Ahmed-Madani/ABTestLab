(function () {
    function isElementVisibleInViewport(el) {
        let top = el.getBoundingClientRect().top;
        let right = el.getBoundingClientRect().right;
        let bottom = el.getBoundingClientRect().bottom;
        let left = el.getBoundingClientRect().left;
        let innerWidth = window.innerWidth;
        let innerHeight = window.innerHeight;

        return ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth));
    }

    try {
        if (
            document.querySelectorAll(".product-name").length > 0 &&
            document.querySelector(".nav-tabs .nav-link") &&
            document.querySelector(".nav-tabs .nav-link").textContent.trim().toLowerCase().includes("stock") &&
            document.querySelector(".nav.nav-tabs.toggle-tabs") &&
            isElementVisibleInViewport(document.querySelector(".nav.nav-tabs.toggle-tabs"))
        ) {
            return true;
        }
    } catch (error) {
        convert_recheck_experiment();
        return false;
    }
})();
// =================

(function () {
    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
        if (timer <= 0) {
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => {
                waitForElement(predicate, callback, timer - frequency, frequency);
            }, frequency);
        }
    }

    function isElementVisibleInViewport(el) {
        let top = el.getBoundingClientRect().top;
        let right = el.getBoundingClientRect().right;
        let bottom = el.getBoundingClientRect().bottom;
        let left = el.getBoundingClientRect().left;
        let innerWidth = window.innerWidth;
        let innerHeight = window.innerHeight;

        return ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth));
    }

    function triggerExperiment() {
        window["TEST-100142844"] = true;
        window._conv_q = window._conv_q || [];
        window._conv_q.push(["executeExperiment", "100142844"]);
    }

    function handleExperimentTrigger(e) {
        if (document.querySelector(".nav.nav-tabs.toggle-tabs") && isElementVisibleInViewport(document.querySelector(".nav.nav-tabs.toggle-tabs"))) {
            window.removeEventListener("scroll", handleExperimentTrigger);
            triggerExperiment();
            convert_recheck_experiment();
        }
    }

    function checkForItems() {
        return !!(
            document.querySelectorAll(".product-name").length > 0 &&
            document.querySelector(".nav-tabs .nav-link") &&
            document.querySelector(".nav-tabs .nav-link").textContent.trim().toLowerCase().includes("stock")
        );
    }
    try {
        const IS_BUCKETED = window?.["TEST-100142844"] === true;
        if (IS_BUCKETED) {
            return true;
        } else {
            waitForElement(
                () => checkForItems(),
                () => {
                    handleExperimentTrigger();
                    window.addEventListener("scroll", handleExperimentTrigger);
                },
            );
            return false;
        }
    } catch (error) {
        convert_recheck_experiment();
        return false;
    }
})();
