(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Project Name",
        site_url: "https://springhillnursery.com/",
        test_name: "PLP - Add Low in Stock Urgency Message [DTM]",
        page_initials: "AB-TEST",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;
    const URGENCY_MESSAGE_CLASS = `${page_initials}__urgency-message`;

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

    function isCollectionsPage() {
        try {
            return window.location?.pathname?.includes("/collections/");
        } catch (e) {
            return false;
        }
    }

    function getUrgencyTextByVariation(variation) {
        if (variation === 1) return "Hurry! Selling Fast";
        if (variation === 2) return "Low in Stock";
        return null;
    }

    function randomIntInclusive(min, max) {
        const mn = Math.ceil(min);
        const mx = Math.floor(max);
        return Math.floor(Math.random() * (mx - mn + 1)) + mn;
    }

    function shuffleInPlace(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function getProductCards() {
        return qq(".product-item");
    }

    function clearInjectedMessages(cards) {
        cards.forEach((card) => {
            qq(card, `.${URGENCY_MESSAGE_CLASS}`).forEach((node) => node.remove());
        });
    }

    function injectMessageIntoCard(card, text) {
        const textGroup = q(card, ".product-item__text_group_primary");
        if (!textGroup) return;

        // Prefer explicit price element; otherwise fall back to first paragraph in text group.
        const priceEl = q(textGroup, ".product-item__price") || q(textGroup, "p");
        if (!priceEl) return;

        const messageEl = document.createElement("p");
        messageEl.className = URGENCY_MESSAGE_CLASS;
        messageEl.textContent = text;

        priceEl.insertAdjacentElement("afterend", messageEl);
    }

    function applyUrgencyMessages() {
        const text = getUrgencyTextByVariation(test_variation);
        const cards = getProductCards();
        if (!cards.length) return;

        // Always clean up first to keep this idempotent (MutationObserver re-runs).
        clearInjectedMessages(cards);

        // Control: no injection.
        if (!text) return;

        const desiredCount = randomIntInclusive(6, 10);
        const count = Math.min(desiredCount, cards.length);
        const selected = shuffleInPlace([...cards]).slice(0, count);
        selected.forEach((card) => injectMessageIntoCard(card, text));
    }

    function getProductsObserverTarget() {
        const firstCard = q(".product-item");
        if (!firstCard) return null;

        // Observe the closest `main` if present; otherwise observe the nearest ancestor.
        return firstCard.closest("main") || firstCard.parentElement || document.body;
    }

    function mutationObserverFunction() {
        const targetNode = q("#root")
        if (!targetNode) return null;

        const debouncedApply = debounce(applyUrgencyMessages, 250);

        const observer = new MutationObserver((mutationList) => {
            // Avoid unnecessary work: only re-run when nodes are added/removed.
            const hasMeaningfulChange = mutationList.some((m) => m.type === "childList" && (m.addedNodes?.length || m.removedNodes?.length));
            if (hasMeaningfulChange) debouncedApply();
        });

        observer.observe(targetNode, { childList: true, subtree: false });
        return observer;
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        applyUrgencyMessages();
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q("#root") && q('.collection__products-container'));
    }

    try {
        await waitForElementAsync(checkForItems);

        init();

    } catch (error) {
        console.warn(error);
        return false;
    }
})();
