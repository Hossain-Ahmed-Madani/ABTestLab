(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "Gurneys",
        site_url: "https://www.gurneys.com",
        test_name: "PLP - Collapse PLP Filters [D]",
        page_initials: "AB-COLLAPSE-FILTERS",
        test_variation: 1 /* 1, 2 */,
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
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    const FILTER_SELECTOR = [".filter-form__group", '.filter-form__group:not(:has( button[data-filter-group-toggle="zone"]))'];

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        qq(FILTER_SELECTOR[test_variation - 1]).forEach((item) => {
            q(item, ".filter-form__group-toggle").setAttribute("aria-expanded", "false");
            q(item, ".filter-form__group-filter-wrapper").setAttribute("aria-hidden", "true");
        });

        if (test_variation === 2) {
            q('#filter-drawer button[data-filter-group-toggle="zone"]').click();
        }
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".filter-form__group") && document.readyState !== "loading");
    }

    await waitForElementAsync(checkForItems);
    init();
})();
