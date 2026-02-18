(function () {

    const TEST_KEY = "ECX-173-1004187832";

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
    function triggerExperiment() {
        window[TEST_KEY] = true;
        window._conv_q = window._conv_q || [];
        window._conv_q.push(["executeExperiment", "1004187832"]);
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    try {
        const IS_BUCKETED = window?.[TEST_KEY] === true;

        if (IS_BUCKETED) {
            return true;
        } else {
            waitForElement(
                () => q("#loggedout-control"),
                () => triggerExperiment(),
            );
            return false;
        }
    } catch (error) {
        return false;
    }
})()
