(async () => {
    const TEST_CONFIG = {
        client: "Converted",
        project: "One Day Test",
        site_url: "https://onedaytests.com",
        test_name: "ODT042 - Above the fold quiz placement (TRT)",
        page_initials: "GLOBAL-ODT042",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

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
        return document.querySelector(s);
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

    let quizInitiation = false;
    let quizCompleted = false;

    function triggerGoals(_, observer) {

        if (
            !quizInitiation &&
            q(".shopify-section.html--section:has(#adam-anchor) #adam-counter") &&
            q(".shopify-section.html--section:has(#adam-anchor) #adam-counter")?.textContent.includes("2 / 10")
        ) {
            // ODT042: Quiz initiation
            quizInitiation = true;
            window._conv_q = window._conv_q || [];
            _conv_q.push(["triggerConversion", "100160300"]);
        }
        if (
            !quizCompleted &&
            q(".shopify-section.html--section:has(#adam-anchor) #adam-counter") &&
            q(".shopify-section.html--section:has(#adam-anchor) #adam-counter")?.textContent.includes("10 / 10")
        ) {
            // ODT042: Quiz finished
            quizCompleted = true;
            window._conv_q = window._conv_q || [];
            _conv_q.push(["triggerConversion", "100160303"]);
        }

        if (quizInitiation && quizCompleted) {
            observer.disconnect();
        }
    }

    function mutationObserverFunction() {
        const targetNode = q(".shopify-section.html--section:has(#adam-anchor)");
        const debouncedUpdate = debounce(triggerGoals, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: false });
    }

    function init() {
        if (window[page_initials] === true) return;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;
        console.log(TEST_CONFIG);
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".shopify-section.html--section:has(#adam-anchor)"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
