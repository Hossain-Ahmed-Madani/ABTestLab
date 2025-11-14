/* 

Ticket: https://trello.com/c/D5qcEwSA/4372-test024-wunderwunsch-category-page-place-filters-prominently-with-wunderwunsch-fox-to-appeal-to-emotions-mobile-only
Description: https://docs.google.com/document/u/1/d/1dR0MCsXf3qTMZp7JNHDcUpYLQ8zk5k7cgodC71CJTZ0/edit?usp=sharing
Figma: https://www.figma.com/design/orfdp8oj34kNQKPPDoDw7k/Test024---Kategorieseite---Filter-prominenter-platzieren?node-id=0-1&t=1QjTm1HMH7DUWwYa-1

Test Container:  https://app.convert.com/accounts/1004828/projects/10041371/experiences/1004176673/summary
V1: https://www.wunderwunsch.de/collections/weihnachten?utm_campaign=qa05

*/

(async () => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "wunderwunsch",
        host: "https://www.wunderwunsch.de/",
        test_name: "Test024 [Wunderwunsch] - category page - Place filters prominently with Wunderwunsch-fox to appeal to emotions (mobile only)",
        page_initials: "AB-0124",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        fox_image: "https://cdn.shopify.com/s/files/1/0535/5654/3672/files/Motiv-Fuchs-Aquarell.png?v=1744870034",
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

    async function createLayout() {
        const layout = /* HTML */ `
            <div class="ab-price-filter">
                <div class=" container">
                    <div class="ab-price-filter__container">
                        <div class="ab-price-filter__img-container">
                            <img src="${ASSETS.fox_image}" alt="Wunderwunsch Fox" class="ab-price-filter__img" />
                        </div>
                        <div class="ab-price-filter__content">
                            <div class="ab-price-filter__description">
                                Hi, ich bin Felix und helfe dir deinen Lieblingsartikel zu finden. Passe deine Auswahl mit unseren Filtern an:
                            </div>
                            <div class="ab-price-filter__cta">Alle Filter anzeigen</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        q(".shopify-section.shopify-section--main-collection").insertAdjacentHTML("beforebegin", layout);

        const cta = ".ab-price-filter__cta";
        await waitForElementAsync(() => q(cta));
        q(cta).addEventListener("click", () => q(".mobile-toolbar__item.mobile-toolbar__item--filters").click());
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) &&
            q(".shopify-section.shopify-section--main-collection") &&
            q(".mobile-toolbar__item.mobile-toolbar__item--filters")
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
        return true;
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
