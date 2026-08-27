(async () => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "SGD",
        site_url: "https://www.sgd.de",
        test_name: "Test021 [SGD] - checkout - more clarity for users in step 1",
        page_initials: "AB-TEST021-CHECKOUT",
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

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateSideCartLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        q("main.page-content > .container-md > h1").innerText = "Sichere jetzt deinen Platz im Lehrgang";

        waitForElementAsync(() => q(".registration-left"))
            .then(() => {
                q(".registration-left").className = "col-12 col-lg-12 registration-left";
            })
            .catch(() => {});
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q("main.page-content > .container-md > h1"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
