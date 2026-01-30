(async () => {
    const TEST_CONFIG = {
        client: "Hook & Loop",
        project: "Hook & Loop",
        site_url: "https://www.hookandloop.com/",
        test_name: "Hook & Loop 286 - A/B test - Free Shipping tracker bar on website pages as well as mini-cart.",
        page_initials: "AB-FREE-SHIPPING-TRACKER-BAR",
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

    function createLayout() {
        // ab-show-free-shipping, hidden
        const layout = /* HTML */ `
            <div class="ab-subtotal-progress-wrapper container">
                <div class="ab-subtotal-progress-container">
                    <!-- Unlock Shipping Message -->
                    <div class="ab-subtotal-progress-heading ab-unlock-shipping">
                        <div class="ab-subtotal-progress-heading__icon">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.166 14.9997V4.99967C12.166 4.55765 11.9904 4.13372 11.6779 3.82116C11.3653 3.5086 10.9414 3.33301 10.4993 3.33301H3.83268C3.39065 3.33301 2.96673 3.5086 2.65417 3.82116C2.34161 4.13372 2.16602 4.55765 2.16602 4.99967V14.1663C2.16602 14.3874 2.25381 14.5993 2.41009 14.7556C2.56637 14.9119 2.77834 14.9997 2.99935 14.9997H4.66602"
                                    stroke="#1D1D1D"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path d="M13 15H8" stroke="#1D1D1D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                    d="M16.3327 15.0003H17.9993C18.2204 15.0003 18.4323 14.9125 18.5886 14.7562C18.7449 14.6 18.8327 14.388 18.8327 14.167V11.1253C18.8323 10.9362 18.7677 10.7528 18.6493 10.6053L15.7493 6.98033C15.6714 6.88273 15.5725 6.80389 15.46 6.74966C15.3475 6.69542 15.2242 6.66717 15.0993 6.66699H12.166"
                                    stroke="#1D1D1D"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M14.6667 16.6668C15.5871 16.6668 16.3333 15.9206 16.3333 15.0002C16.3333 14.0797 15.5871 13.3335 14.6667 13.3335C13.7462 13.3335 13 14.0797 13 15.0002C13 15.9206 13.7462 16.6668 14.6667 16.6668Z"
                                    stroke="#1D1D1D"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M6.33268 16.6663C7.25316 16.6663 7.99935 15.9201 7.99935 14.9997C7.99935 14.0792 7.25316 13.333 6.33268 13.333C5.41221 13.333 4.66602 14.0792 4.66602 14.9997C4.66602 15.9201 5.41221 16.6663 6.33268 16.6663Z"
                                    stroke="#1D1D1D"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </div>
                        <div class="ab-subtotal-progress-heading__text">Almost there! Unlock Free Shipping at $200!</div>
                    </div>

                    <!-- Free Shipping Achieved Message -->
                    <div class="ab-subtotal-progress-heading ab-free-shipping">
                        <div class="ab-subtotal-progress-heading__icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.41667 7.75L6.97222 9.30556L10.0833 6.19444M14.75 7.75C14.75 11.616 11.616 14.75 7.75 14.75C3.88401 14.75 0.75 11.616 0.75 7.75C0.75 3.88401 3.88401 0.75 7.75 0.75C11.616 0.75 14.75 3.88401 14.75 7.75Z"
                                    stroke="#158A03"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </div>
                        <div class="ab-subtotal-progress-heading__text">You've Earned Free Shipping!</div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="ab-subtotal-progress-bar">
                        <div class="ab-subtotal-progress-bar__progress" style="width: 6.25%"></div>
                    </div>

                    <!-- Price Display -->
                    <div class="ab-subtotal-progress-prices">
                        <span class="ab-added-subtotal"><span class="ab-price">$0</span></span>
                        <span>&nbsp;of&nbsp;</span>
                        <span>$200</span>
                    </div>
                </div>
            </div>
        `;

        const targetNode = q(".breadcrumbs");
        targetNode.insertAdjacentHTML("beforebegin", layout);
    }

    function updateLayout() {
        console.log("update layout....");

        const subtotalProgressContainer = q("#cart-drawer .subtotal-progress-container");
        const targetNode = q(".ab-subtotal-progress-wrapper");

        if (!subtotalProgressContainer || (subtotalProgressContainer && subtotalProgressContainer.parentNode.classList.contains("hidden"))) {
            targetNode.classList.add("hidden");
            return;
        }

        targetNode.classList.remove("hidden");

        const subTotal = q("#cart-drawer .added-subtotal .price")?.textContent ?? 0;
        const percentage = (+subTotal.replace(/[^\d.]/g, "") * 100) / 200;

        if (percentage >= 100) {
            targetNode.classList.add("ab-show-free-shipping");
        } else {
            targetNode.classList.remove("ab-show-free-shipping");
        }

        q(targetNode, ".ab-added-subtotal .ab-price").innerText = subTotal;
        q(targetNode, ".ab-subtotal-progress-bar__progress").style.width = `${percentage <= 100 ? percentage : 100}%`;

        console.log("subtotal", subTotal, "percentage", (+subTotal.replace(/[^\d.]/g, "") * 100) / 200);
    }

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".breadcrumbs") && q("#cart-drawer"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
