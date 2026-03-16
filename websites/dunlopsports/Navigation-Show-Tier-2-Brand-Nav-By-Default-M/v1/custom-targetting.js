// How to implement in Optimizely:
// 1. Go to your experiment's Targeting tab.
// 2. Under Page Targeting, ensure your experiment is targeted to the relevant pages (e.g., using a URL match).
// 3. In the Activation section, select Custom Code.
// 4. Paste the code snippet below into the JavaScript editor.
// 5. Important: You will still need to add your "Mobile Users" audience to the experiment's Audience Targeting section. This activation condition will then only run for users who are already part of the "Mobile Users" audience.

(function () {
    const EXPERIMENT_ID = "YOUR_EXPERIMENT_ID"; // Replace with experiment's ID

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
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

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function triggerExperiment(_, observer) {
        if (q('nav .main-menu.in[aria-hidden="false"]')) {
            window[EXPERIMENT_ID] = true;
            window["optimizely"].push({
                type: "activate",
                experimentId: EXPERIMENT_ID, // Replace with experiment's ID
            });
            observer.disconnect();
            return true;
        }

        return false;
    }

    const IS_BUCKETED = window[EXPERIMENT_ID] === true;

    if (IS_BUCKETED) {
        return true;
    }

    waitForElement(
        () => q("nav .main-menu"),
        () => {
            const targetNode = q("nav .main-menu");
            const debouncedUpdate = debounce(triggerExperiment, 250);
            return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: false, subtree: false, attributes: true });
        },
    );
})();
