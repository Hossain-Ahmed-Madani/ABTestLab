/* 
Test container: https://marketer.monetate.net/control/a-d6198f6f/p/magicmind.com/experience/2085733

Preview:
Control: https://marketer.monetate.net/control/preview/13487/NBSVKLW9FT7ETVWGEPOHI1Q7HH436J1R/17-product-move-ingredients-into-description
V1: https://marketer.monetate.net/control/preview/13487/EQRAK69VTLBK2I2QBNCUKAEAA9AQXL8D/17-product-move-ingredients-into-description
V2: https://marketer.monetate.net/control/preview/13487/YAUBVO1VQH12LXW1O75L7J2UX6XWVBAX/17-product-move-ingredients-into-description

Preview including all experiences:
Control: https://marketer.monetate.net/control/preview/13487/JI7ULSK7PTADWMU5E3PYWJESXUBK3DP0/17-product-move-ingredients-into-description
V1: https://marketer.monetate.net/control/preview/13487/VYBEAFPHA4FL1SIP4QUAICRW83ZBVXUF/17-product-move-ingredients-into-description
V2: https://marketer.monetate.net/control/preview/13487/3XGR36HZQ0D7YVM4TM96NS3G9B99TB15/17-product-move-ingredients-into-description


*/

const TEST_ID = "MMI17";
const VARIANT_ID = "V1"; /* Control, V1, V2*/

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
        test_name: "MMI17: [PRODUCT] Move Ingredients into Description (2) SET UP TEST",
        page_initials: "AB-MMI17",
        test_variation: 1 /* 0, 1, 2 */,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const DATA = {
        orignal: ["Sharper Mind", "50mg Caffeine", "Calm Energy", "Less Stress"],
        maxx: ["Sharper Mind", "165mg Caffeine", "Calm Energy", "Less Stress"],
        free: ["Sharper Mind", "0mg Caffeine", "Calm Energy", "Less Stress"],
        sleep: ["Sharper Mind", "Melatonin-free", "Calm Energy", "Less Stress"],
    };

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

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        let data;
        const currentPath = window.location.pathname;

        if (currentPath.includes("original")) {
            data = DATA["orignal"];
        } else if (currentPath.includes("maxx")) {
            data = DATA["maxx"];
        } else if (currentPath.includes("free")) {
            data = DATA["free"];
        } else if (currentPath.includes("sleep")) {
            data = DATA["sleep"];
        }

        q(".main-product-v2__description p").insertAdjacentHTML(
            "afterend", /* HTML */
            `<div class="ab-nutrition-facts">
                <div class="ab-nutrition-facts-cta">See Nutrition Facts</div>
                <div class="ab-befits-bullets">
                    ${data
                        .map(
                            (txt) => /* HTML */ `
                                <div class="ab-befits-bullet-item">
                                    <div class="ab-befits-bullet-item-icon">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="6" cy="6" r="6" fill="#03A188" />
                                            <path
                                                d="M8.47974 3.17216C8.60416 3.06052 8.76973 2.99879 8.94151 3.00002C9.11329 3.00124 9.27785 3.06532 9.40047 3.17873C9.52308 3.29214 9.59415 3.44601 9.59869 3.60787C9.60323 3.76973 9.54088 3.92693 9.4248 4.04629L5.90069 8.20045C5.8401 8.26197 5.76696 8.31134 5.68565 8.34561C5.60435 8.37988 5.51655 8.39834 5.4275 8.39989C5.33845 8.40145 5.24999 8.38606 5.16739 8.35465C5.0848 8.32324 5.00977 8.27646 4.9468 8.2171L2.60976 6.01431C2.54468 5.95715 2.49248 5.88822 2.45627 5.81163C2.42007 5.73504 2.4006 5.65236 2.39903 5.56853C2.39746 5.48469 2.41382 5.40142 2.44714 5.32367C2.48045 5.24593 2.53004 5.1753 2.59295 5.11601C2.65585 5.05672 2.73078 5.00998 2.81326 4.97858C2.89574 4.94718 2.98409 4.93176 3.07304 4.93323C3.16198 4.93471 3.2497 4.95306 3.33096 4.98719C3.41221 5.02132 3.48535 5.07052 3.54599 5.13186L5.39548 6.87428L8.46296 3.19048L8.47974 3.17216Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <div class="ab-befits-bullet-item-text">${txt}</div>
                                </div>
                            `,
                        )
                        .join("")}
                </div>
            </div>
        `);

        q(".ab-nutrition-facts-cta").addEventListener("click", (e) => {
            fireGA4Event("MMI17_IngredientsClick");
            q(".main-product-v2__open-modal-btn").click();
        });
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".main-product-v2__description p") && q(".main-product-v2__open-modal-btn"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
