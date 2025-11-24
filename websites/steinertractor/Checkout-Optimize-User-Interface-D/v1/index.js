/* 

https://www.steinertractor.com/checkout#/address
*/

(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "steinertractor",
        host: "https://www.steinertractor.com/",
        test_name: "Checkout - Optimize User Interface [D]",
        page_initials: "AB-Checkout-Step-1",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    async function fetchAndParseURLApi(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const html = await response.text();
            const dom = new DOMParser().parseFromString(html, "text/html");
            return dom;
        } catch (error) {
            // console.error("Fetch and parse failed:", error);
            return null;
        }
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

    function updateLayoutOnMutation() {
        //
    }

    function mutationObserverFunction() {
        const targetNode = q(".my-new-selector");
        if (!targetNode) return;
        const debouncedUpdate = debounce(updateLayoutOnMutation, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    async function createAndUpdateContentLayout() {
        /* ab-show-login, ab-show-registration */
        const html = /* HTML */ `
            <div class="ab-content-wrapper">
                <div class="ab-content-top"></div>
                <div class="ab-content-bottom container">
                    <div class="row">
                        <div class="ab-content-forms col-6"></div>
                        <div class="ab-content-added-product col-6" style="display:flex;justify-content:center;align-items:center;">Added Product</div>
                    </div>
                </div>
            </div>
        `;

        q(".row.content-body").insertAdjacentHTML("afterbegin", html);
        const contentTop = q(".ab-content-top");
        contentTop.appendChild(q(".guest-checkout-optn > h1"));
        contentTop.appendChild(q(".guest-checkout-optn"));

        const formsContainer = q(".ab-content-forms");
        qq(".row.content-body > *:not(.ab-content-wrapper)").forEach((item) => {

            if (q(item, ".Head")?.innerText.includes("Account Login")) {
                item.classList.add("ab-login-form-container");
            } else if (q(item, "#guestCheckoutWrapper")) {
                item.classList.add("ab-guest-checkout-form-container");
            }
            qq(item, "input").forEach((item) => item.setAttribute("placeholder", ""));
            
            formsContainer.appendChild(item);
        });
        qq("body > form > .container.bg-white, .footer").forEach((item) => item.classList.remove("container"));

        q("#showLogin").click();
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createAndUpdateContentLayout();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".progress-stepper .checkout-wrap"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
        return true;
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
