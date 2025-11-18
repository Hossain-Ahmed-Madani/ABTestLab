/* 
Ticket: 
Figma: 

Container:
v1:
    excluding all experiences:
    including all experiences:

*/

(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "bruntworkwear",
        host: "https://bruntworkwear.com",
        test_name: "BW115: [PRODUCTS] Sold Out Product Redirect (2) SET UP TEST",
        page_initials: "AB-BW115",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { host, page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        magnifying_glass_svg: /* HTML */ `
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21.7703 19.8501L27.5867 25.6651L25.6651 27.5867L19.8501 21.7703C17.6864 23.5048 14.9952 24.4482 12.2221 24.4443C5.47551 24.4443 0 18.9687 0 12.2221C0 5.47551 5.47551 0 12.2221 0C18.9687 0 24.4443 5.47551 24.4443 12.2221C24.4482 14.9952 23.5048 17.6864 21.7703 19.8501ZM19.0461 18.8424C20.7693 17.0698 21.7317 14.6942 21.7282 12.2221C21.7282 6.97069 17.4736 2.71603 12.2221 2.71603C6.97069 2.71603 2.71603 6.97069 2.71603 12.2221C2.71603 17.4736 6.97069 21.7282 12.2221 21.7282C14.6942 21.7317 17.0698 20.7693 18.8424 19.0461L19.0461 18.8424ZM13.8219 7.02908C13.4214 7.20997 13.0709 7.48531 12.8002 7.83147C12.5296 8.17764 12.347 8.5843 12.2681 9.01655C12.1892 9.44881 12.2163 9.89375 12.3472 10.3132C12.4781 10.7327 12.7087 11.1141 13.0194 11.4248C13.3301 11.7355 13.7116 11.9662 14.131 12.0971C14.5505 12.2279 14.9955 12.2551 15.4277 12.1762C15.86 12.0973 16.2666 11.9147 16.6128 11.644C16.959 11.3734 17.2343 11.0228 17.4152 10.6224C17.7721 11.7816 17.7307 13.0269 17.2977 14.1599C16.8647 15.2929 16.0649 16.2484 15.0258 16.8741C13.9868 17.4998 12.7682 17.7598 11.5642 17.6126C10.3602 17.4653 9.2402 16.9194 8.38253 16.0617C7.52486 15.2041 6.97892 14.084 6.83169 12.8801C6.68445 11.6761 6.94441 10.4575 7.57012 9.41843C8.19584 8.37936 9.15131 7.5796 10.2843 7.14658C11.4173 6.71356 12.6626 6.6722 13.8219 7.02908Z"
                    fill="#D15420"
                />
            </svg>
        `,
    };

    async function fetchAndParseToJSONApi(url) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error(`Failed to fetch JSON from ${url}:`, error.message);
            return null;
        }
    }

    async function getProductType() {
        url = host + window.location.pathname + ".json";
        const res = await fetchAndParseToJSONApi(url);
        const productType = res?.["product"]?.["product_type"] ?? null;
        return productType;
    }

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

    async function waitForPromiseOnMutation(predicate, maxCount = 50) {
        let count = 0;

        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve(true);
            }

            new MutationObserver((mutationList, observer) => {
                count++;

                if (typeof predicate === "function" && predicate()) {
                    observer.disconnect();
                    return resolve(true);
                } else if (count > maxCount) {
                    observer.disconnect();
                    return reject(new Error(`Max polling count ${count} reached while waiting for predicate:\n${predicate.toString()}`));
                }
            }).observe(document.body, { childList: true, subtree: true });
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

    function updateSoldOutLayout() {
        const targetNode = q(".product__additionalStyleParent");
        const className = "ab-show-sold-out-message";

        if (!!q(targetNode, ".isUnavailable")) {
            targetNode.classList.add(className);
        } else {
            targetNode.classList.remove(className);
        }
    }

    function mutationObserverFunction() {
        const targetNode = q(".product__additionalStyleParent");
        const debouncedUpdate = debounce(updateSoldOutLayout, 150);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function createLayout() {
        const targetNodes = qq(".product__additionalStyleParent .product__optionWrapper");
        const targetNode = targetNodes[targetNodes.length - 1];

        targetNode.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-sold-out-message">
                    <div class="ab-sold-out-message__icon">${ASSETS.magnifying_glass_svg}</div>
                    <div class="ab-sold-out-message__message">
                        <span>Size Sold Out?</span>
                        <a href="#">Shop Similar Items</a>
                    </div>
                </div>
            `
        );
    }

    // product__optionButton isOOS size isSelected isUnavailable
    // product__optionButton isOOS size

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        getProductType();

        createLayout();
        updateSoldOutLayout();
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".product__additionalStyleParent .product__optionWrapper:last-child"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
        return false;
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
