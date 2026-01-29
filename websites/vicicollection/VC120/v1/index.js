const TEST_ID = "VC120";
const VARIANT_ID = "V1";

function logInfo(message) {
    console.log(
        `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
        "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
        "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
        message,
    );
}

logInfo("fired");

(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "Project Name",
        site_url: "https://www.vicicollection.com",
        test_name: "VC120: [COLLECTION] Reorder Filters Based on Engagement (2) SET UP TEST",
        page_initials: "AB-VC120",
        test_variation: 2,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

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

    function getCookie(key) {
        try {
            if (!key || typeof key !== "string") {
                // console.error("Invalid key provided to getCookie");
                return null;
            }

            // Encode the key to handle special characters
            const encodedKey = encodeURIComponent(key);
            const cookies = `; ${document.cookie}`;

            // Find the cookie value
            const parts = cookies.split(`; ${encodedKey}=`);

            if (parts.length === 2) {
                const value = parts.pop().split(";").shift();
                return value ? decodeURIComponent(value) : null;
            }

            return null;
        } catch (error) {
            // console.error(`Error reading cookie "${key}":`, error);
            return null;
        }
    }

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    const DATA = {
        1: ["Size", "Style", "Color", "By Price", "Category"],
        2: ["Style", "Color", "Size", "Category", "By Price"],
    };

    function updateLayout() {
        console.log("Update Layout...");

        const orderArr = DATA[test_variation];
        const flagClassName = "ab-filter-flag";

        qq(`ul.vue-accordion:not(.${flagClassName})`).forEach((item) => {
            const titleElement = q(item, ".collection-filters__accordion-title");
            const textContent = titleElement.textContent
                .replace(/[^a-zA-Z\s]/g, "")
                .replace(/\s+/g, " ")
                .trim();

            const hasMatch = orderArr.some((txt) => {
                if (!titleElement || !textContent) return;
                return txt === textContent;
            });

            if (!hasMatch) return;

            item.classList.add(flagClassName, textContent.split(" ").join("_"));

            if (textContent !== 'Size') return;
            
            console.log("Txt", textContent);
            console.log("check", item, qq(item, 'input[type="checkbox"][aria-selected="true"]').length === 0, q(item, ".vue-accordion__item.is-open"));

            if (q(item, ".vue-accordion__item") && qq(item, 'input[type="checkbox"][aria-selected="true"]').length === 0) {
                console.log("If condition....");
                q(item, ".vue-accordion__item").classList.remove("is-open");
                q(item, ".vue-accordion__content").style.display = "none";
            }
        });
    }

    function mutationObserverFunction() {
        const targetNode = q(".collection-filters-modal__inner-content-wrapper");
        const debouncedUpdate = debounce(updateLayout, 1000);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        updateLayout();
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".collection-filters-modal__inner-content-wrapper"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
