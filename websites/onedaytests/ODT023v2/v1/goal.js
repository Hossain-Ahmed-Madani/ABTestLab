(async () => {
    const TEST_CONFIG = {
        client: "Converted",
        project: "One Day Tests",
        site_url: "https://onedaytests.com",
        test_name: "ODT023v2 - Image gallery PDP test",
        page_initials: "GLOBAL-ODT023v2",
        test_variation: 1,
        test_version: 0.0005,
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
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function triggerGoal(goalName, goalId) {
        // console.log("triggerGoal: ", goalName, goalId);
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", goalId]);
    }

    let slideTwoViewed = false;
    let slideThreeViewed = false;

    function mutationObserverFunction() {
        const cb = (_, observer) => {
            if (!slideTwoViewed && q('.product-gallery--image.is-selected[data-gallery-index="1"], .product-gallery--image-thumbnail[data-gallery-index="1"][data-gallery-selected="true"]')) {
                triggerGoal("ODT023v2 - slide 2 viewed", "100162605");
                slideTwoViewed = true;
            }

            if (!slideThreeViewed && q('.product-gallery--image.is-selected[data-gallery-index="2"], .product-gallery--image-thumbnail[data-gallery-index="2"][data-gallery-selected="true"]')) {
                triggerGoal("ODT023v2 - slide 3 viewed", "100162606");
                slideThreeViewed = true;
            }

            
            if (slideTwoViewed && slideThreeViewed) {
                observer.disconnect();
            }
        };

        const targetNode = q(".product-gallery");
        return new MutationObserver(cb).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function init() {
        if (window[page_initials] === true) return;
        q("body").classList.add(page_initials, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials})`) && q(".product-gallery"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
