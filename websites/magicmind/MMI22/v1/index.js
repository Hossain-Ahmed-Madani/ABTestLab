/* 
Ticket: https://trello.com/c/dttpgBmS/4664-%F0%9F%92%9A%F0%9F%92%99-mmi22-home-add-micro-commitment-in-hero-2-set-up-test?search_id=4dae847e-f4e7-492b-b499-5bb3a4ade8a4
Figma: https://www.figma.com/design/wxDp7xjfq5OMEwIZ4PVDMk/MMI22---HOME--Add-Micro-Commitment-in-Hero?node-id=7-2&p=f&t=ZiZ5JhgqDaW0oehq-0

Test container: https://marketer.monetate.net/control/a-d6198f6f/p/magicmind.com/experience/2085745

Preview :
control: 
V1: 
V2:
V3:



Preview including all experiences:
control: 
V1: 
V2:
V3:
*/

const TEST_ID = "MMI22";
const VARIANT_ID = "V1"; /* Control, V1, V2, V3 */

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
        project: "magicmind",
        site_url: "https://magicmind.com",
        test_name: "MMI22: [HOME] Add Micro-Commitment in Hero (2) SET UP TEST",
        page_initials: "AB-MMI22",
        test_variation: 1 /* 0, 1, 2, 3 */,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function fireGA4Event(eventName, eventLabel = "") {
        console.log("fireGA4Event", eventName, eventLabel);
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

    function mutationObserverFunction() {
        const targetNode = q("#cart-drawer");
        const debouncedUpdate = debounce(updateSideCartLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    const DATA = {
        1: [
            {
                title: "No Caffeine",
                prefix: "",
                link: "https://magicmind.com/products/mental-performance-shot-free",
            },
            {
                title: "1-2 Cups of Coffee",
                prefix: "",
                link: "https://magicmind.com/products/mental-performance-shot-original",
            },
            {
                title: "3+ Cups of Coffee",
                prefix: "",
                link: "https://magicmind.com/products/mental-performance-shot-maxx",
            },
        ],
        2: [
            {
                title: "No Caffeine",
                prefix: "",
                link: "https://magicmind.com/products/mental-performance-shot-free",
            },
            {
                title: "Low Caffeine",
                prefix: "",
                link: "https://magicmind.com/products/mental-performance-shot-original",
            },
            {
                title: "High Caffeine",
                prefix: "",
                link: "https://magicmind.com/products/mental-performance-shot-maxx",
            },
        ],
        3: [
            {
                title: "No Caffeine",
                prefix: "(0 mg)",
                link: "https://magicmind.com/products/mental-performance-shot-free",
            },
            {
                title: "Low Caffeine",
                prefix: "(55 mg)",
                link: "https://magicmind.com/products/mental-performance-shot-original",
            },
            {
                title: "High Caffeine",
                prefix: "(165 mg)",
                link: "https://magicmind.com/products/mental-performance-shot-maxx",
            },
        ],
    };

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        const data = DATA[test_variation];

        q(".hm-v3-banner__btn").insertAdjacentHTML(
            "afterend" /* HTML */,
            `<div class="ab-hero-micro-commitment">
                <div class="ab-hero-micro-commitment__title">Choose your caffeine level:</div>
                <div class="ab-hero-micro-commitment__cta-container">
                    ${data
                        .map(
                            (item) => /* HTML */ `
                                <a href="${item.link}" class="ab-hero-micro-commitment__cta">
                                    <span class="ab-hero-micro-commitment__cta-title">${item.title}</span>
                                    <span class="ab-hero-micro-commitment__cta-prefix">${item.prefix}</span>
                                </a>
                            `,
                        )
                        .join("")}
                </div>
            </div>
        `,
        );

        qq(".ab-hero-micro-commitment__cta").forEach((item) =>
            item.addEventListener("click", (e) => {
                e.preventDefault();

                const currentItem = e.currentTarget;
                const title = q(currentItem, ".ab-hero-micro-commitment__cta-title").textContent;
                const link = currentItem.href;
                fireGA4Event("MMI22_CTAClick", title);

                setTimeout(() => {
                    if (e.ctrlKey) {
                        window.open(link, "_blank");
                    } else {
                        window.location.href = link;
                    }
                }, 150);
            }),
        );
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".hm-v3-banner__btn"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
