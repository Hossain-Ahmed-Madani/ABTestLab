/* 

Figma: https://www.figma.com/design/sErLd4tN9GUMtVpz3lg5ts/MS126---NAV-Mobile--Move-Main-Nav-Element-into-CTAs?node-id=2004-2

Test container: https://app.convert.com/accounts/10042082/projects/10042535/experiences/1004186158/summary


Preview url:

Control: https://magicspoon.com/?_conv_eforce=1004186158.1004437599&utm_campaign=qa5 
V1: https://magicspoon.com/?_conv_eforce=1004186158.1004437600&utm_campaign=qa5 
V2: https://magicspoon.com/?_conv_eforce=1004186158.1004437601&utm_campaign=qa5 


*/

(async () => {
    const TEST_ID = "LME109";
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
        site_url: "https://lemmelive.com",
        test_name: "LME109: [LANDING PAGE - GLP] Add Nutrition Label & Benefits (2) SET UP TEST",
        page_initials: "AB-LME109",
        test_variation: 1,
        test_version: 0.0003,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function fireGA4Event(eventName, eventLabel = "") {
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



    function clickFunction() {
        //
    }

    function createLayout() {
        console.log("createLayout");
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.log(TEST_CONFIG)
        createLayout();
        clickFunction();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            true
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
