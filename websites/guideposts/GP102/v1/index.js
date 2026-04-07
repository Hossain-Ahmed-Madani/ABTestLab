(async () => {
    const TEST_ID = "GP102";
    const VARIANT_ID = "V1"; /* Control, V1, V2 */

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color:white;background:rgb(0,0,57);font-weight:700;padding:2px 4px;border-radius:2px;",
            "margin-left:8px;color:white;background:rgb(0,57,57);font-weight:700;padding:2px 4px;border-radius:2px;",
            message,
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        client: "Acadia",
        project: "Guide Posts",
        site_url: "https://guideposts.org",
        test_name: "GP102: [PRODUCT] Magazine Gifting - (2) SET UP TEST",
        page_initials: "AB-GP102",
        test_variation: 1 /* 0, 1, 2 */,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        box_svg: /* HTML */ `
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.295 3.11952L6.795 0.108272C6.66641 0.0372516 6.5219 0 6.375 0C6.2281 0 6.08359 0.0372516 5.955 0.108272L0.455 3.11952C0.317378 3.19482 0.202532 3.30574 0.122484 3.44065C0.0424362 3.57557 0.000131792 3.72952 0 3.8864V9.8639C0.000131792 10.0208 0.0424362 10.1747 0.122484 10.3096C0.202532 10.4446 0.317378 10.5555 0.455 10.6308L5.955 13.642C6.08363 13.7129 6.22812 13.7501 6.375 13.7501C6.52188 13.7501 6.66637 13.7129 6.795 13.642L12.295 10.6308C12.4326 10.5555 12.5475 10.4446 12.6275 10.3096C12.7076 10.1747 12.7499 10.0208 12.75 9.8639V3.8864C12.7499 3.72952 12.7076 3.57557 12.6275 3.44065C12.5475 3.30574 12.4326 3.19482 12.295 3.11952ZM6.3125 0.765772C6.3309 0.755706 6.35153 0.750431 6.3725 0.750431C6.39347 0.750431 6.4141 0.755706 6.4325 0.765772L11.6569 3.62515L9.53563 4.78577L4.25313 1.89452L6.3125 0.765772ZM6 12.8126L0.8125 9.97327C0.793332 9.96221 0.777446 9.94625 0.766465 9.92703C0.755484 9.90782 0.749802 9.88603 0.75 9.8639V4.2914L6 7.1664V12.8126ZM1.09313 3.62515L3.4725 2.32202L8.75438 5.21327L6.375 6.51515L1.09313 3.62515ZM12 9.8639C12.0002 9.88603 11.9945 9.90782 11.9835 9.92703C11.9726 9.94625 11.9567 9.96221 11.9375 9.97327L6.75 12.8126V7.16515L9 5.93327V8.37515C9 8.4746 9.03951 8.56999 9.10983 8.64031C9.18016 8.71064 9.27554 8.75015 9.375 8.75015C9.47446 8.75015 9.56984 8.71064 9.64017 8.64031C9.71049 8.56999 9.75 8.4746 9.75 8.37515V5.52327L12 4.2914V9.8639Z"
                    fill="black"
                />
            </svg>
        `,

    };

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

    function updateLayout() {
        if (!q("#CartDrawer-Checkout .money.mw-price")) return;

        q(".ab-usp-item__reward-points").textContent = getRewardPoints();
    }

    function mutationObserverFunction() {
        const targetNode = q("#CartDrawer-Checkout");
        const debouncedUpdate = debounce(updateLayout, 100);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

      //
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            true
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
