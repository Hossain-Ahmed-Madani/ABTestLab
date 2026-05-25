/* 
https://www.brecks.com/collections/summer_flower_bulbs?sort_by=manual

*/

(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Brecks.com",
        site_url: "https://www.brecks.com/",
        test_name: "PLP - Add Filter Chips [DTM]",
        page_initials: "AB-FILTER-CHIPS",
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

    function qq(s, o) {
        return [...document.querySelectorAll(s)];
    }

    function getCookie(key) {
        try {
            if (!key || typeof key !== "string") ;

            // Encode the key to handle special characters
            const encodedKey = encodeURIComponent(key);
            const cookies = `; ${document.cookie}`;

            // Find the cookie value
            const parts = cookies.split(`; ${encodedKey}=`);

            if (parts.length === 2) {
                const value = parts.pop().split(";").shift();
                return value ? decodeURIComponent(value) : null;
            }

            return null;
        } catch (error) {
            // console.error(`Error reading cookie "${key}":`, error);
            return null;
        }
    }

    function getFilterData() {
        const data = [];
        const PlantingZone = getCookie("PlantingZone");
        const matchingFilterNodeValue = qq('ul#filter-form__list-zone--sidebar input[type="checkbox"]').find((item) => PlantingZone && PlantingZone.includes(item.value))?.value ?? null;

        if (PlantingZone && matchingFilterNodeValue) {
            data.push({
                label: "Shop Your Zone: " + PlantingZone.toUpperCase(),
                targetNodeSelectorJSON: JSON.stringify(`ul#filter-form__list-zone--sidebar input[type="checkbox"][value="${matchingFilterNodeValue}"]`),
            });
        }

        if (q(`ul#filter-form__list-new-products--sidebar input[type="checkbox"][value="Yes"]`)) {
            data.push({
                label: "New Arrivals",
                targetNodeSelectorJSON: JSON.stringify(`ul#filter-form__list-new-products--sidebar input[type="checkbox"][value="Yes"]`),
            });
        }

        if (q(`ul#filter-form__list-shipping-season--sidebar input[type="checkbox"][value="Fall"]`)) {
            data.push({
                label: "Ships Now",
                targetNodeSelectorJSON: JSON.stringify(`ul#filter-form__list-shipping-season--sidebar input[type="checkbox"][value="Fall"]`),
            });
        }

        qq(`ul#filter-form__list-usage--sidebar input[type="checkbox"]`)?.forEach((item) =>
            data.push({
                label: item.getAttribute("value"),
                targetNodeSelectorJSON: JSON.stringify(`ul#filter-form__list-usage--sidebar input[type="checkbox"][value="${item.getAttribute("value")}"]`),
            }),
        );

        console.log("DATA", data);

        return data;
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        const filterData = getFilterData();
        if (!filterData.length) return;

        q(".collection__inner").parentNode.insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="ab--filter-chips-wrap">
                    <div class="ab--filter-chips">
                        ${filterData
                            .map(
                                ({ label, targetNodeSelectorJSON }) => /* HTML */ `
                                    <button
                                        type="button"
                                        class="ab--filter-chip ${q(JSON.parse(targetNodeSelectorJSON))?.checked ? "ab--chip-active" : ""}"
                                        targetNodeSelectorJSON=${targetNodeSelectorJSON}
                                    >
                                        <span class="ab--chip-label">${label}</span>
                                    </button>
                                `,
                            )
                            .join("")}
                    </div>
                </div>
            `,
        );

        q(".ab--filter-chips").addEventListener("click", (e) => {
            const button = e.target.closest(".ab--filter-chip");

            if (button) {
                button.classList.toggle("ab--chip-active");
                const targetNodeSelector = button.getAttribute('targetNodeSelectorJSON');
                console.log('targetNodeSelector', targetNodeSelector);
            }
        });
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q(".collection__inner") &&
            q(".filter-form__content .filter-form__group") &&
            document.readyState === "complete"
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
