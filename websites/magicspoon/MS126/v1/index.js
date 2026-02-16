/* 

Figma: https://www.figma.com/design/sErLd4tN9GUMtVpz3lg5ts/MS126---NAV-Mobile--Move-Main-Nav-Element-into-CTAs?node-id=2004-2

Test container: https://app.convert.com/accounts/10042082/projects/10042535/experiences/1004186158/summary


Preview url:

Control: https://magicspoon.com/?_conv_eforce=1004186158.1004437599&utm_campaign=qa5 
V1: https://magicspoon.com/?_conv_eforce=1004186158.1004437600&utm_campaign=qa5 
V2: https://magicspoon.com/?_conv_eforce=1004186158.1004437601&utm_campaign=qa5 


*/

(async () => {
    const TEST_ID = "MS126";
    const VARIANT_ID = "V1"; /* Control, V1, V2 */

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            message,
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        client: "Acadia",
        project: "Magic Spoon",
        site_url: "https://www.example.com",
        test_name: "MS126: [NAV-Mobile] Move Main Nav Element into CTAs (2) SET UP TEST",
        page_initials: "AB-MS126",
        test_variation: 2,
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


    function createLayoutV1() {
        console.log("createLayoutV1");

        const buildYourOwnBundleNode = q(' header .button-sec a[href="/products/custom-mixed-bundle-6-box"] ');
        buildYourOwnBundleNode.insertAdjacentHTML("afterend", /* HTML */ `<a href="/collections/shop-all" class="btn-toggle ab-toggle-outlined">Shop All PRODUCTS →</a>`);
    }

    function createLayoutV2() {
        const shopAllNode = q('header .bundle-sec > ul > li:has(a[href="/collections/shop-all"])');
        shopAllNode.insertAdjacentHTML(
            "afterend" /* HTML */,
            `
                <li>
                    <a href="/products/custom-mixed-bundle-6-box">
                        <img src="//magicspoon.com/cdn/shop/files/MS_VARIETY_DISCOVERY_HERO2_1_bdc88c05-172a-4e18-9e2d-00ce08702d0e.png?v=1754946270" alt=""/>
                        <h2>Build your own bundle</h2>
                    </a>
                </li>
                `,
        );

        const buildYourOwnBundleNode = q(' header .button-sec a[href="/products/custom-mixed-bundle-6-box"] ');
        buildYourOwnBundleNode.insertAdjacentHTML("afterend", /* HTML */ `<a href="/collections/shop-all" class="btn-toggle">Shop All →</a>`);
    }

    function clickFunction() {
        document.querySelector(".mobile-menu > button")?.addEventListener("click", () => {
            if (!document.querySelector("html").classList.contains("mobile_slide")) return;
            fireGA4Event("MS126_NavView", "Nav View");
        });

        document.querySelector("#mobile-slides-content .bundle-sec").addEventListener("click", (e) => {
            fireGA4Event("MS126_NavEngagement", e.target.textContent.trim());
        });
    }

    function createLayout() {
        if (test_variation === 1) {
            createLayoutV1();
        } else if (test_variation === 2) {
            createLayoutV2();
        }
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
        clickFunction();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q('header .bundle-sec > ul > li:has(a[href="/collections/shop-all"])') &&
            q(".mobile-menu > button") &&
            q("#mobile-slides-content .bundle-sec")
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
