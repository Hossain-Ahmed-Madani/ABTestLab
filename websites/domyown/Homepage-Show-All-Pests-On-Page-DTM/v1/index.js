(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Do My Own",
        site_url: "https://www.domyown.com",
        test_name: "Homepage Show All Pests On Page DTM",
        page_initials: "AB-HOME-SHOW-ALL-PESTS",
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
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        const layout = /* HTML */ `
            <div class="ab-content ab-pests-grid mt-4">
                ${qq("div[id*='category-carousel'] .w-1\\/4 > .flex.flex-col.mx-auto.h-full")
                    .map((item) => /* HTML */ `<div class="ab-pest-item flex flex-col leading-tight ">${item.innerHTML}</div>`)
                    .join("")}
                ${qq("div[id*='category-carousel'] .w-1\\/6 > .text-center.h-full.border.border-grey.p-1")
                    .map((item) =>
                        /* HTML */ ` 
                        <div class="ab-pest-item flex flex-col leading-tight">
                            <div class="text-center h-full border border-grey p-1">${item.innerHTML}</div>
                        </div>`
                    ).join("")}
            </div>
        `;

        q("div[id*='category-carousel']").insertAdjacentHTML("beforeend", layout);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q("div[id*='category-carousel']"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
