/* 
Figma: https://www.figma.com/design/FI7fhWxhI6cpT8f4WGQWKJ/LME95---COLLECTION--Add-New-In-Line-Ads----1--DESIGN?node-id=14-35&t=yaQsaMaYyzS18aLV-0
Test container: https://marketer.monetate.net/control/a-2087c1e5/p/lemmelive.com/experience/2068717#c2597696:what
URL Targetting: https://lemmelive.com/collections/all
Targetting: /collections/

*/

const TEST_ID = "LME95";
const VARIANT_ID = "V1";

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
        // img_url_mobile: "https://sb.monetate.net/img/1/1597/5939747.png",
        // img_url_desktop: "https://sb.monetate.net/img/1/1597/5939509.png",
        img_url_mobile: "https://sb.monetate.net/img/1/1597/5939840.png",
        img_url_desktop: "https://sb.monetate.net/img/1/1597/5939840.png",
    };

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
        return document.querySelector(s);
    }

    function createLayout() {
        //  style="grid-column: span 2; border:1px solid red;"
        const selector = ".collection__items > .collection-item:nth-child(3)";
        const layout = /* HTML */ `
            <div class="ab-inline-ad">
                <div class="ab-inline-ad__container">
                    <div class="ab-inline-ad__image">
                        <img class="ab-inline-ad__img--mobile" src="${ASSETS['img_url_mobile']}" alt="${page_initials}--image"/>
                        <img class="ab-inline-ad__img--desktop" src="${ASSETS['img_url_desktop']}" alt="${page_initials}--image"/>
                    </div>
                    <div class="ab-inline-ad__content">
                        <div class="ab-inline-ad__heading">New Muscle </br> Toning Gummies</div>
                        <div class="ab-inline-ad__cta">Shop Now</div>
                    </div>
                </div>
            </div>
        `;
        q(selector).insertAdjacentHTML("afterend", layout);
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".collection__items > .collection-item:nth-child(3)"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
