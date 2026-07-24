(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "domyown",
        site_url: "https://www.domyown.com/",
        test_name: "Sitewide - Personalize Email Popup [DTM]",
        page_initials: "AB-SITE-WIDE-PERSONALIZE-EMAIL-POPUP",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        truck_svg: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 398 299.8"> <!-- Generator: Adobe Illustrator 29.4.0, SVG Export Plug-In . SVG Version: 2.1.0 Build 152)  --> <defs> <style> .st0 { fill: #315caa; } </style> </defs> <path class="st0" d="M283.7,50.9c27.8,1.6,61.2-7.3,80.8,17.7,9,11.4,9.9,22.7,12.7,36.3,7.3,35.7,12.4,71.9,20.5,107.5,3,28-16.6,51.2-44.5,53.5-6.4.5-13.1-.8-19.5.5-15,44.6-76.7,44.7-90.6-.5h-81.8c-13.9,45.2-75.5,45.2-90.6.5-19.7.4-39.6-8.1-48.6-26.4s-9.7-33.1,7-34.1,12.3,12.7,15.7,21.4c4,9.9,15.7,14.7,25.8,12.2,14.6-44.5,77.1-44.7,90.6.5h82.3c.9-8.9,7.4-16.1,13.5-22.1l.5-174.5c-2.1-12-10.9-17.4-22.5-18.5H9.3C-2.7,21.1-3.3,4.7,8.7.4l235.4-.4c23.9,4,42,26.5,39.6,50.9ZM353.7,118.9c-2.6-11.8-1.7-29.5-12.1-37.4-1.9-1.5-7.3-4.6-9.4-4.6h-48.5v42h70ZM358.7,145.9h-76v60c22-2.2,43.7,12.6,49.1,33.9,18.4,1.6,39.7,1.2,39.9-22.4l-13-71.5ZM137.6,252.9c0-11.8-9.6-21.4-21.4-21.4s-21.4,9.6-21.4,21.4,9.6,21.4,21.4,21.4,21.4-9.6,21.4-21.4ZM309.7,252.9c0-11.8-9.6-21.4-21.4-21.4s-21.4,9.6-21.4,21.4,9.6,21.4,21.4,21.4,21.4-9.6,21.4-21.4Z"></path> <path class="st0" d="M26.5,69.1l127.7-.2c13.2,4,12.3,23.3-1.9,25H27.3c-12.5-3.2-13.7-21.3-.8-24.8Z"></path> <path class="st0" d="M4,159.6c-8.1-7.3-3.1-20.6,7.3-22.6h88.8c15.6,2.1,15.6,23.7,0,25.8-26.6,3.6-60.6-2.5-87.9.1-2-.2-6.8-2.1-8.2-3.3Z"></path> </svg>`,

        headset_svg: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 399.5 402.9"> <!-- Generator: Adobe Illustrator 29.4.0, SVG Export Plug-In . SVG Version: 2.1.0 Build 152)  --> <defs> <style> .st0 { fill: #315caa; } </style> </defs> <path class="st0" d="M107.2,166c6.2,1.2,11,9.4,11.5,15.5,3.7,42.3-2.9,90.1,0,133-.5,6.7-5.7,12.7-12.5,13.5-12.1,1.5-50.2,1.1-61.5-1.5-20.5-4.8-38.6-23.7-42.7-44.3s-2.8-60.8,1.4-75,21.7-34,41.1-39.4C39,54.3,152.1-27.8,258.7,15.5c61.1,24.9,98.6,86.6,96.2,152.3,24.5,6.7,42.1,28.1,43.9,53.6,1.2,16.4,1.7,53.9-3.6,68.5-6.1,16.9-22.7,32.3-40.4,36.1.6,17.3.3,34.8-12.6,47.9-18.6,19-43.1,11.5-67,13-14.5,16.5-38.3,17.3-58.9,14.9-41.1-4.8-43.2-69.5,4-73.8s52.6.6,60,29.9c11.2-1.7,32,3.9,40.4-4.5.9-.9,4-5.4,4-6v-19.5h-33.5c-3.7,0-11.3-9.1-10.5-13.5l.5-137.5c.5-3.5,8-11,11-11h32.5c2.5-42.1-17.1-83.8-51.1-108.4-86.3-62.4-205.2,3.2-198.9,108.4,9.4,1.3,23.7-1.8,32.5,0ZM88.7,196h-35.5c-8.2,0-19.4,12.6-21.8,20.2s-2.6,41.1-1.7,52.3c1,13.6,11.3,30.5,26.5,30.5h32.5v-103ZM310.7,299h32.5c9.8,0,21.6-11.5,24.6-20.4,3.2-9.7,3.2-52.5.3-62.4-2.3-7.6-13.7-20.2-21.8-20.2h-35.5v103ZM220.4,358.2c-7.9,1.8-7.7,12.5.2,14.4,4.2,1,19,1,23.3.2,9.2-1.6,9.4-12.9,2-14.5-3.4-.8-22.2-.8-25.6,0Z"></path> </svg>`,
    };

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

    async function waitForPromiseOnMutation(predicate, maxCount = 100) {
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

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateSideCartLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && true);
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
