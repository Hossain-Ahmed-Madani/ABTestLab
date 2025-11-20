const TEST_ID = "BW115";
const VARIANT_ID = "Control";

function logInfo(message) {
    console.log(
        `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
        "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
        "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
        message
    );
}

logInfo("fired");

(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "bruntworkwear",
        host: "https://bruntworkwear.com",
        test_name: "BW115: [PRODUCTS] Sold Out Product Redirect (2) SET UP TEST",
        page_initials: "AB-BW115",
        test_variation: 0 /* 0 -> Control */,
        test_version: 0.0007,
    };

    const { host, page_initials, test_variation, test_version } = TEST_CONFIG;

    function fireGA4Event(eventName, eventLabel = "") {
        console.log("fireGA4Event:", eventName, eventLabel);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "GA4event",
            "ga4-event-name": "cro_event",
            "ga4-event-p1-name": "event_category",
            "ga4-event-p1-value": eventName,
            "ga4-event-p2-name": "event_label",
            "ga4-event-p2-value": eventLabel,
        });
    }

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

    function isTouchEnabled() {
        return "ontouchstart" in window;
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

    function mutationObserverFunction() {
        const targetNode = q(".product__additionalStyleParent");
        const debouncedUpdate = debounce(clickFunction, 150);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: false, attributes: true });
    }

    function clickFunction() {
        const ACTION_LIST = [
            {
                selector: ".product__optionButton",
                callback: (e, callback) => {
                    const currentTarget = e.currentTarget;

                    setTimeout(() => {
                        if (currentTarget.classList.contains("isUnavailable")) {
                            // qq(".product__optionButton").forEach((item) => item.removeEventListener("click", callback));
                            fireGA4Event("BW115_OutofStock", "Clicked Out Of Stock");
                        }
                    }, 100);
                },
            },
        ];

        const EVENT_TYPE = "ontouchstart" in window ? "touchstart" : "click";
        ACTION_LIST.forEach(async ({ selector, callback }) => {
            try {
                await waitForElementAsync(() => q(selector + ":not(.click-attached)"), 5000);
                qq(selector).forEach((item) => {
                    item.classList.add("click-attached");
                    item.addEventListener(EVENT_TYPE, (e) => callback(e, callback));
                });
            } catch (err) {
                return false;
            }
        });
    }

    async function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        clickFunction();
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".product__additionalStyleParent .product__optionWrapper"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
        return false;
    } catch (error) {
        return false;
    }
})();
