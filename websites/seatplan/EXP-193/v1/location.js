(function () {
    function waitForElem(predicate, callback, timer = 15000, frequency = 100) {
        if (timer <= 0) return;
        if (typeof predicate === "function" && predicate()) {
            callback();
        } else {
            setTimeout(() => waitForElem(predicate, callback, timer - frequency), frequency);
        }
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
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

    function triggerExperiment() {
        window._conv_q = window._conv_q || [];
        window._conv_q.push(["executeExperiment", "1004201840"]);
        convert_recheck_experiment();
        return true;
    }

    const selector = ".production-right-panel__container .production-right-panel__offer-text";

    if (q(selector)) return true;

    waitForElem(
        () => q(`body`),
        () => {

            const debouncedCheck = debounce((_, observer) => {
                if (q(selector)) {
                    observer.disconnect();
                    triggerExperiment();
                }
            }, 50);

            const observer = new MutationObserver(debouncedCheck);

            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        },
    );

    return false;
})();

// Test

const selector = ".production-right-panel__container .production-right-panel__offer-text";

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

function q(s, o) {
    return o ? s.querySelector(o) : document.querySelector(s);
}


const debouncedCheck = debounce((_, observer) => {
    if (q(selector)) {
        observer.disconnect();
        console.log("Test");
    }
}, 50);

const observer = new MutationObserver(debouncedCheck);

observer.observe(document.body, {
    childList: true,
    subtree: true,
});