const TEST_ID = "EDC11";
const VARIANT_ID = "V1"; /* V1, V2 */

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
        project: "urbanedc",
        host: "https://urbanedc.com/",
        test_name: "EDC11: [HEADER - Mobile] Add Search Into Header with Panel - (2) SET UP TEST",
        page_initials: "AB-EDC11",
        test_variation: 1 /* 1, 2 */,
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

    function createCtaLayout() {
        const btn = document.createElement("button");
        btn.className = " uppercase js-enabled block lg:hidden";
        btn.type = "button";
        btn.innerText = "Search";
        q(".row-start-1.lg\\:col-span-item.lg\\:col-end-\\[-1\\] > .flex.flex-wrap.justify-end.items-top.gap-5").insertAdjacentElement("afterbegin", btn);

        btn.addEventListener("click", () => handleModalView("show"));
    }

    function createModalLayout() {
        const layout = /* HTML */ `
            <div class="${page_initials}__modal-layout">
                <div class="${page_initials}__modal-backdrop"></div>
                <div class="${page_initials}__modal">
                    <div class="${page_initials}__modal__container">
                        <div class="${page_initials}__modal__head">
                            Modal
                            <!-- Modal Close Cta -->
                        </div>
                        <div class="${page_initials}__modal__body">Modal Body Content</div>
                    </div>
                </div>
            </div>
        `;

        q("body").insertAdjacentHTML("afterbegin", layout);

        const btn = document.createElement("button");
        btn.className = `${page_initials}__modal__head__close-cta`;
        btn.type = "button";
        btn.innerHTML = /* HTML */ `
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path d="M25.4999 1.5001L1.5 25.5M1.4999 1.5L25.4998 25.4999" stroke="#547351" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        `;

        btn.addEventListener("click", () => handleModalView("hide"));
        q(`.${page_initials}__modal__head`).insertAdjacentElement("beforeend", btn);
    }

    function animate(targetElement, className, interval) {
        if (!targetElement) return;
        if (className.includes(".")) className.replace(".", "");
        targetElement.classList.add(className);
        setTimeout(() => targetElement.classList.remove(className), interval);
    }

    function preventScroll(e) {
        e.preventDefault();
    }

    function handleModalView(action = "show") {
        const modalShowClass = `${page_initials}--modal-show`;
        const body = document.body;

        const modal = q(`.${page_initials}__modal`);
        if (action === "show" && !body.classList.contains(modalShowClass)) {
            animate(modal, "slide-bottom", 200);
            modal.classList.add("slide-bottom");
            body.classList.add(modalShowClass);
            document.addEventListener("touchmove", preventScroll, { passive: false });
        }

        if (action === "hide") {
            animate(modal, "slide-top", 200);
            setTimeout(() => body.classList.remove(modalShowClass), 200);
            document.removeEventListener("touchmove", preventScroll);
        }
    }

    function createLayout() {
        createCtaLayout();
        createModalLayout();
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q("  .row-start-1.lg\\:col-span-item.lg\\:col-end-\\[-1\\]"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
