/*

Figma: https://www.figma.com/design/swfYfWcam6dy9Pt4myxAOM/LME87--BYOB-Steps?node-id=18-261&t=kDUIweIcAErm0xzr-1
Test container: https://marketer.monetate.net/control/a-2087c1e5/p/lemmelive.com/experience/2060558#c2587808:what


URL's

https://lemmelive.com/products/byob-3-pack
https://lemmelive.com/products/byob-4-pack
https://lemmelive.com/products/byob-5-pack

*/

(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "lemmelive",
        host: "https://www.example.com",
        test_name: "LME87: [BYOB] Add Steps to Bundle Builder - (2) SET UP TEST",
        page_initials: "AB-LME87",
        test_variation: 1 /* 1, 2, 3 */,
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

    function getStepHeading(stepNo, label) {
        return /* HTML */ `
            <div class="ab-step-heading ab-step-heading--${stepNo}">
                <span class="ab-step-heading__step-no">${stepNo}</span>
                <span class="ab-step-heading__label">${label}</span>
            </div>
        `;
    }

    function getProgressBarLayout() {
        return /* HTML */ `
            <div class="ab-progress">
                <div class="ab-progress-step ab-progress-step--start">0</div>
                <div class="ab-progress__bar">
                <div class="ab-progress__progress"></div>
                </div>
                <div class="ab-progress-step ab-progress-step--end">4</div>
            </div>
        `;
    }

    const CONTENTS = [
        {
            htmlContent: getStepHeading(1, "Build Your Bundle"),
            targetNodeSelector: ".bundle-builder__form > h3.heading-4.text-center",
            insertPosition: "afterend",
        },

        {
            htmlContent: `<div class="ab-border"></div> ${getStepHeading(2, "Choose Your Products")} ${getProgressBarLayout()}`,
            targetNodeSelector: ".bundle-builder__form > .bundle-builder__pack-size-options",
            insertPosition: "afterend",
        },
        {
            htmlContent: `<div class="ab-border"></div> ${getStepHeading(3, "Choose Your Frequency")}`,
            targetNodeSelector: ".bundle-builder__form > .bundle-builder__items",
            insertPosition: "afterend",
        },
    ];

    function createLayout() {
        CONTENTS.forEach(({ htmlContent, targetNodeSelector, insertPosition }) => q(targetNodeSelector).insertAdjacentHTML(insertPosition, htmlContent));
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".bundle-builder__form"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
