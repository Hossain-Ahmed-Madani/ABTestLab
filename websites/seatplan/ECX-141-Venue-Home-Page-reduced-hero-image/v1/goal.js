(function () {
    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
        if (timer <= 0) {
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
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

    waitForElement(
        () => q(".production__button"),
        () => {
            q(".production__button").addEventListener("click", (e) => {
                console.log("Goal: EXP-696 Click ‘Find Tickets’ | JS : 1004105548");
                window._conv_q = window._conv_q || [];
                _conv_q.push(["triggerConversion", "1004105548"]);
            });
        }
    );
})();
