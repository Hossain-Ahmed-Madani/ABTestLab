(() => {

    const TEST_KEY = "CONVERT-TEST-1004186211";

    if (window[TEST_KEY] === true) return true;

    async function waitForElementAsync(predicate, timeout = 20000, frequency = 150) {
        const startTime = Date.now();

        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve(true);
            }

            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime;

                if (elapsed >= timeout) {
                    clearInterval(interval);
                    return reject(new Error(`Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`));
                }

                if (typeof predicate === "function" && predicate()) {
                    clearInterval(interval);
                    return resolve(true);
                }
            }, frequency);
        });
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

    let observer = null;

    function triggerExperiment() {
        if (q(".quick-cart__wrapper.active")) {
            window[TEST_KEY] = true;

            window._conv_q = window._conv_q || [];
            window._conv_q.push(["executeExperiment", "1004186211"]);

            observer?.disconnect();
            observer = null;
        }
    }

    function init() {
        triggerExperiment();
        mutationObserverFunction();
    }

    function mutationObserverFunction() {
        const targetNode = q(".quick-cart");
        const debouncedUpdate = debounce(triggerExperiment, 150);
        observer = new MutationObserver(debouncedUpdate);
        observer.observe(targetNode, { childList: true, subtree: true, attributes: true });
        return observer;
    }

    function checkForItems() {
        return !!q(".quick-cart");
    }

    waitForElementAsync(checkForItems)
        .then(init)
        .catch((error) => {
            return false;
        });
})()