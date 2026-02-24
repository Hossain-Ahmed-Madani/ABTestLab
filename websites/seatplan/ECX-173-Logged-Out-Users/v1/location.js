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

    function getSessionStorageValue(key) {
        try {
            if (!key || typeof key !== "string") return null;
            const value = sessionStorage.getItem(key);
            return value !== null ? value : null;
        } catch (e) {
            return null;
        }
    }

    function setSessionStorageValue(key, value) {
        try {
            if (!key || typeof key !== "string") return false;
            sessionStorage.setItem(key, value);
            return true;
        } catch (e) {
            return false;
        }
    }

    function removeSessionStorageValue(key) {
        try {
            if (!key || typeof key !== "string") return false;
            sessionStorage.removeItem(key);
            return true;
        } catch (e) {
            return false;
        }
    }

    function triggerExperiment() {
        setSessionStorageValue(TEST_KEY, true);
        window._conv_q = window._conv_q || [];
        window._conv_q.push(["executeExperiment", "1004187832"]);
        return true;
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    try {
        const IS_BUCKETED = getSessionStorageValue(TEST_KEY) === "true";

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
        convert_recheck_experiment();
        return false;
    }
})()
