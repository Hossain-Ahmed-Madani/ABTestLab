(async () => {
    const TEST_ID = "VC120";
    const VARIANT_ID = "Control";

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            message
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        client: "Acadia",
        project: "Project Name",
        site_url: "https://www.vicicollection.com",
        test_name: "VC120: [COLLECTION] Reorder Filters Based on Engagement (2) SET UP TEST",
        page_initials: "AB-VC120",
        test_variation: 0,
        test_version: 0.0002,
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

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }


    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        qq(".collection-filter-sort__filter-button, .btn-link.collection-filter-sort__more-filters-cta").forEach((item) =>
            item.addEventListener("click", () => fireGA4Event("VC120_FilterView", ""))
        );

        const debouncedGa4Event = debounce((parentCategory, filterText) => fireGA4Event("VC120_FilterClick", `${parentCategory} - ${filterText}`), 250);

        q(".collection-filters-modal__inner-content-wrapper").addEventListener("click", (e) => {
            if (e.target.closest(".filter-options__list-item")) {
                const targetNode = e.target.closest(".filter-options__list-item");
                const parentCategory = q(e.target.closest(".vue-accordion__item"), ".vue-accordion__trigger.btn").textContent.trim();
                const filterText = q(targetNode, "label.filter-options__list-item-text").textContent.trim();
                debouncedGa4Event(parentCategory, filterText);
            }
        });
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q(".collection-filters-modal__inner-content-wrapper") &&
            qq(".collection-filter-sort__filter-button, .btn-link.collection-filter-sort__more-filters-cta").length === 2
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
