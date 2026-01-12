(async () => {
    const TEST_CONFIG = {
        client: "EchoLogyx",
        project: "Spring Hill Nursery",
        site_url: "https://springhillnursery.com",
        test_name: "PLP - Add Low in Stock Urgency Message [DTM]",
        page_initials: "SH-PLP-URGENCY",
        // 1 => Hurry! Selling Fast (manually toggled), 2 =>  Low in Stock
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

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function randomIntInclusive(min, max) {
        const mn = Math.ceil(min);
        const mx = Math.floor(max);
        return Math.floor(Math.random() * (mx - mn + 1)) + mn;
    }

    function shuffleInPlace(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    const TXT = {
        1: "Hurry! Selling Fast",
        2: "Low in Stock",
    }

    function updateLayout() {
        console.log("updateLayout...");

        const cards = qq( ".product-item[data-id]:not(.ab-urgency-msg-injected):not(:has( .soldoutstrip))");
        if (!cards.length) return;

        // Pick some random cards to inject
        const pickCount = Math.min(cards.length, randomIntInclusive(6, 10));
        const picked = shuffleInPlace([...cards]).slice(0, pickCount);
        picked.forEach(card => {
            card.classList.add("ab-urgency-msg-injected");
            q(card, ".product-item__text_group_primary").insertAdjacentHTML("beforeend",  /* HTML */ `<div class="ab-urgency-msg">${ TXT[test_variation]}</div>`);
        });
    }

    function mutationObserverFunction() {
        const targetNode = q("#root");
        const debouncedUpdate = debounce(updateLayout, 250);
        const observer = new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: false, attributes: false });
        return observer;
    }
    
    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        updateLayout();
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q("#root") &&
            q(".collection__products-container")
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
