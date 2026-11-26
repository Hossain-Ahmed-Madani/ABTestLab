(async () => {
    const TEST_CONFIG = {
        client: "Converted",
        project: "One Day Test",
        site_url: "https://onedaytests.com",
        test_name: "ODT038 - PDP: Clinic visit upsell: recommended upgrade and preselection (Ultimate Performance)",
        page_initials: "AB-ODT038",
        test_variation: 1 /* 1, 2 */,
        test_version: 0.0003,
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
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function selectRadioWithoutScroll(labelNode) {
        const input = q(labelNode, 'input[type="radio"]');

        if (!input || input.checked) return;

        input.checked = true;

        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));
    }

    async function init() {
        if (window[page_initials] === true) return;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        const sampleCollectionsNode = q(".odt-radio-button-group.choose-collection-option");
        sampleCollectionsNode.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-sample-collection-short-info">
                    This is a large test that needs the most blood of any home kit. If you don’t bleed easily, a clinic visit is the most reliable option.
                </div>
            `,
        );

        const clinicVisitNode = q('label.odt-radio-button:has(input[value="Walk-in clinic"])');
        q(clinicVisitNode, ".odt-radio-button__label").insertAdjacentHTML(
            "beforeend",
            /* HTML */ `
                <div class="ab-label-content">
                    <div class="ab-label-title">Clinic visit</div>
                    <div class="ab-label-subtitle">Taken by a professional phlebotomist.</div>
                </div>
            `,
        );
        q(clinicVisitNode, ".odt-radio-button__label").insertAdjacentHTML("afterend", /* HTML */ ` <div class="ab-badge">Recommended for this test</div> `);

        const homeKitNode = q('label.odt-radio-button:has(input[value="Home kit"])');

        await waitForElementAsync(() => document.readyState === "complete");

        try {
            if (test_variation === 1) {
                const input = q(homeKitNode, 'input[type="radio"]')
                selectRadioWithoutScroll(input)
            }
            if (test_variation === 2) {
                const input = q(clinicVisitNode, 'input[type="radio"]')
                selectRadioWithoutScroll(clinicVisitNode)
            }
        } catch (error) {
            //
        }
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q(".odt-radio-button-group.choose-collection-option") &&
            q('label.odt-radio-button:has(input[value="Walk-in clinic"])')
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
