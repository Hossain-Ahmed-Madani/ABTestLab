/* 

Homepage: ^https:\/.seatplan\.com\/?(?:\?[^\/]*)?$

*/


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

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function triggerExperimentOnClick() {
        window["AB-EXP-1004196271"] = true;
        window._conv_q = window._conv_q || [];
        window._conv_q.push(["executeExperiment", "1004196271"]);
        convert_recheck_experiment();
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    try {
        const IS_BUCKETED = window?.["AB-EXP-1004196271"] === true;
        if (IS_BUCKETED) {
            return true;
        } else {
            waitForElement(
                () => q("#search-input"),
                () => {
                    const eventName = isTouchEnabled() ? "touchend" : "click";
                    q("#search-input").addEventListener(eventName, triggerExperimentOnClick);
                },
            );
        }
    } catch (error) {
        convert_recheck_experiment();
        return false;
    }
});



// Goal: User selects a search auto complete option 
// Selector: .aa-suggestion
