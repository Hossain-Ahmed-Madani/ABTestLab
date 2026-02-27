/* 
Test doc: https://docs.google.com/document/d/1aRY66TBUeXHBDx5imd0b7Z3HhILM3nqkuWvxBML48HY/edit?tab=t.0
Figma: https://www.figma.com/design/RWs9kC2tKwUdp3OEJcadw9/Test013---Landingpages-Kurse---Optimierung-auf-Anmeldungen-upper-funnel?node-id=50-1031&t=reOCha0nPcNYTOyf-1

Target Pages:
https://www.sgd.de/lp/abitur.html
https://www.sgd.de/lp/gepr-fachwirtin-im-gesundheits-und-sozialwesen-ihk.html
https://www.sgd.de/lp/gepr-wirtschaftsfachwirtin-ihk.html
https://www.sgd.de/lp/realschulabschluss.html
https://www.sgd.de/lp/ernaehrungsberaterin.html
https://www.sgd.de/lp/tierpsychologie-tierhaltung-tierbetreuung-tierverhaltenstherapie.html
https://www.sgd.de/lp/psychotherapie-hp.html
https://www.sgd.de/lp/gepr-fitnesscoach-sgd.html
https://www.sgd.de/lp/gepr-buchhalterin-sgd.html
https://www.sgd.de/lp/staatlich-gepr-maschinenbautechnikerin.html


*/

(async () => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "SGD",
        site_url: "https://www.sgd.de/",
        test_name: "Test013 [SGD] - landing pages - new structure",
        page_initials: "AB-Test013",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

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

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && true);
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
