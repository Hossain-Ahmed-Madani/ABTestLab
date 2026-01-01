(function () {
    const TEST_KEY = "CHECKOUT_OPT_USER_INTERFACE_D";
    const IS_BUCKETED = window?.[TEST_KEY] === true;

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
        window._conv_q.push(["executeExperiment", "1004178648"]);
    }

    try {
        if (IS_BUCKETED) {
            return true;
        } else {
            waitForElement(
                () => ["/guestcheckout", "/checkout#/address", "/checkout#/main"].some(path => path === (window.location.pathname + window.location.hash).toLowerCase()),
                () => triggerExperiment()
            );
            return false;
        }
    } catch (error) {
        return false;
    }
})();
