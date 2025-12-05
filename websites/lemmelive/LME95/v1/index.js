/* 
Figma: https://www.figma.com/design/FI7fhWxhI6cpT8f4WGQWKJ/LME95---COLLECTION--Add-New-In-Line-Ads----1--DESIGN?node-id=14-35&t=yaQsaMaYyzS18aLV-0
Test container: https://marketer.monetate.net/control/a-2087c1e5/p/lemmelive.com/experience/2068717#c2597696:what
URL Targetting: https://lemmelive.com/collections/all
Targetting: /collections/

*/

const TEST_ID = "LME95";
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
        project: "lemmelive",
        host: "https://lemmelive.com/",
        test_name: "LME95: [COLLECTION] Add New In-Line Ads - (2) SET UP TEST",
        page_initials: "AB-LME95",
        test_variation: 1 /* 0, 1, 2 */,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        img_url_mobile: "https://cdn.shopify.com/s/files/1/0654/8042/5686/files/muscle_toning_gummies_mobile.png?v=1764866569",
        img_url_desktop: "https://cdn.shopify.com/s/files/1/0654/8042/5686/files/muscle_toning_gummies_desktop.png?v=1764866569",
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

    const DATA = {
        sibling_selector: {
            1: {
                "(max-width: 1199px)": ".collection__items > *:nth-child(2)",
                "(min-width: 1200px)": ".collection__items > *:nth-child(3)",
            },
            2: {
                "(max-width: 749px)": ".collection__items > *:nth-child(4)",
                "(min-width: 750px) and (max-width: 1199px)": ".collection__items > *:nth-child(5)",
                "(min-width: 1200px)": ".collection__items > *:nth-child(7)",
            },
        },
    };

    function fireGA4Event(eventName, eventLabel = "") {
        console.log(`Firing GA4 Event: ${eventName} - ${eventLabel}`);
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

    function getTargetSelector() {
        const mediaQuery = Object.keys(DATA['sibling_selector'][test_variation]).find((mq) => window.matchMedia(mq).matches);
        return DATA['sibling_selector'][test_variation]?.[mediaQuery] || null;
    }

    function createLayout() {
        const selector = getTargetSelector();

        if (!selector) return;

        q(selector).insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <a class="ab-inline-ad" href="#" rel="noopener noreferrer">
                    <div class="ab-inline-ad__container">
                        <img class="ab-inline-ad__img--mobile" src="${ASSETS["img_url_mobile"]}" alt="${page_initials}--image" />
                        <img class="ab-inline-ad__img--desktop" src="${ASSETS["img_url_desktop"]}" alt="${page_initials}--image" />
                    </div>
                </a>
            `
        );

        q(".ab-inline-ad").addEventListener("click", (e) => {
            e.preventDefault();
            fireGA4Event(`LME95_InLineAdClick`, `Variation ${test_variation},  user clicks on the in-line ad card`);
            setTimeout(() => {
                const redirectUrl = "https://lemmelive.com/products/lemme-greens-gummies";
                window.location.href = redirectUrl;
            }, 100);
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && getTargetSelector() && q(getTargetSelector()));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
