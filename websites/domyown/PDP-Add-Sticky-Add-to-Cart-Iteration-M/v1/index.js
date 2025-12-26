/* 
Ticket: https://trello.com/c/q8ZdiK0H/4522-pdp-add-sticky-add-to-cart-iteration-m?search_id=8f2d25f5-996e-407f-8b24-04e50f0bf188
Test container: https://app.vwo.com/#/test/ab/275/edit/urls/?accountId=348406
QA URl: https://www.domyown.com/termidor-sc-p-184.html?to_mobile=true

*/

(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "PDP - Add Sticky Add to Cart (Iteration) [M]",
        site_url: "https://www.domyown.com",
        test_name: "PDP - Add Sticky Add to Cart (Iteration) [M]",
        page_initials: "AB-STICKY-ADD-TO-CART",
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

    function updateLayout() {
        //
    }

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function intersectionObserverFunction() {
        const targetElement = q("#add-to-cart-area input.add-to-cart");

        return new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Element is visible in viewport
                        handleStickyCartShowHide("hide");
                    } else if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                        // Element is out of viewport and has scrolled past (top)
                        handleStickyCartShowHide("show");
                    } else {
                        // Element hasn't been reached yet or other cases
                        handleStickyCartShowHide("hide");
                    }
                });
            },
            {
                root: null, // viewport
                rootMargin: "0px",
                threshold: 0,
            }
        ).observe(targetElement);
    }

    function handleStickyCartShowHide(action /* show, hide */) {
        const body = q("body");
        modifierClassName = `${page_initials}--show-sticky`;

        if (action === "show") {
            body.classList.add(modifierClassName);
        } else if (action === "hide") {
            body.classList.remove(modifierClassName);
        }
    }

    function createLayout() {
        q("body").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="ab-sticky-cart-container">
                    <button type="button" class="button-primary add-to-cart text-lg w-full md:w-4/5 text-center">Add to Cart</button>
                </div>
            `
        );
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
        intersectionObserverFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q("#add-to-cart-area input.add-to-cart"));
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
