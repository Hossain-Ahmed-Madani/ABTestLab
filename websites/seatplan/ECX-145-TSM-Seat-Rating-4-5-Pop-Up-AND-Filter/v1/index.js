(function () {
    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
        if (timer <= 0) {
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => {
                waitForElement(predicate, callback, timer - frequency, frequency);
            }, frequency);
        }
    }

    waitForElement(
        () => typeof window.tsmHighRatedSeatsFilterAbTest === 'function',
        () => {
            console.log('EXP-: All | TSM | Seat Rating Pop Up & Filter | A/B');
            window.tsmHighRatedSeatsFilterAbTest();
        }
    );

})();