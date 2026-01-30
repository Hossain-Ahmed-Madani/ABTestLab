/* 
Test container: https://marketer.monetate.net/control/a-41b13725/p/vicicollection.com/experience/2084127#
Figma: https://www.figma.com/design/aUm9w1sOpt1gSMweHHZjme/VC120---COLLECTION--Reorder-Filters-Based-on-Engagement?node-id=10-2&p=f&t=P5HlH3gsxQGZlNzN-0

Preview:
control: https://marketer.monetate.net/control/preview/12997/GFPZ1LAOXTYDDNND9H4G8SD7AVP3NWQD/vc120-collection-reorder-filters-based-on-engagement
v1: https://marketer.monetate.net/control/preview/12997/7H07M9NGO5BCM82H05K1IACIETZBFIU6/vc120-collection-reorder-filters-based-on-engagement
V2: https://marketer.monetate.net/control/preview/12997/T68F7QU9U1BYHRCRW0IXGJMZ03OK9DJT/vc120-collection-reorder-filters-based-on-engagement


Preview Including all experiences:
control: https://marketer.monetate.net/control/preview/12997/3W6SZ7D2G7HW4S8YG0KXVDV35KXIBZT8/vc120-collection-reorder-filters-based-on-engagement
v1: https://marketer.monetate.net/control/preview/12997/U9C8Q1XBA5CSDQF7FBD1KS0VM5LHEK6N/vc120-collection-reorder-filters-based-on-engagement
V2: https://marketer.monetate.net/control/preview/12997/WPZ4B8B08GCYHEVNMNU23POKI9PRGGW2/vc120-collection-reorder-filters-based-on-engagement

*/

(async () => {
    const TEST_ID = "VC120";
    const VARIANT_ID = "V1"; /* V1, V2 */

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
        project: "Project Name",
        site_url: "https://www.vicicollection.com",
        test_name: "VC120: [COLLECTION] Reorder Filters Based on Engagement (2) SET UP TEST",
        page_initials: "AB-VC120",
        test_variation: 1, /* 1, 2 */
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function fireGA4Event(eventName, eventLabel = "") {
        console.log("fireGA4Event:", eventName, eventLabel);
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

    const DATA = {
        1: ["Size", "Style", "Color", "By Price", "Category"],
        2: ["Style", "Color", "Size", "Category", "By Price"],
    };

    const orderArr = DATA[test_variation];

    function updateLayout() {
        console.log("Update Layout...");

        qq(`ul.vue-accordion`).forEach((item) => {
            const titleElement = q(item, ".collection-filters__accordion-title");
            const textContent = titleElement.textContent
                .replace(/[^a-zA-Z\s]/g, "")
                .replace(/\s+/g, " ")
                .trim();

            const hasMatch = orderArr.some((txt) => {
                if (!titleElement || !textContent) return;
                return txt === textContent;
            });

            if (!hasMatch) {
                item.removeAttribute("ab-filter-type");
                return;
            }

            if (item.hasAttribute("ab-filter-type") && item.getAttribute("ab-filter-type") === textContent) {
                return;
            }

            item.setAttribute("ab-filter-type", textContent);

            if (textContent !== "Size") return;

            if (q(item, ".vue-accordion__content:not([style])") && qq(item, 'input[type="checkbox"][aria-selected="true"]').length === 0) {
                q(item, ".vue-accordion__trigger.btn").click();
            }
        });
    }

    function mutationObserverFunction() {
        const targetNode = q(".collection-filters-modal__inner-content-wrapper");
        // const debouncedUpdate = debounce(updateLayout, 1000);
        return new MutationObserver(updateLayout).observe(targetNode, { childList: true, subtree: true, attributes: true, characterData: true });
    }

    function clickFunction() {
        q(".collection-filters-modal__inner-content-wrapper").addEventListener("click", (e) => {
            if (e.target.closest(".filter-options__list-item")) {
                const targetNode = e.target.closest(".filter-options__list-item");
                const parentCategory = q(e.target.closest(".vue-accordion__item"), ".vue-accordion__trigger.btn").textContent.trim();
                const filterText = q(targetNode, "label.filter-options__list-item-text").textContent.trim()
                fireGA4Event("VC120_FilterClick", `${parentCategory} - ${filterText}`);
            }
            if (e.target.closest(".vue-accordion__trigger.btn")) {
                const targetNode = e.target.closest(".vue-accordion__trigger.btn");
                const parentNode = targetNode.parentNode;
                setTimeout(() => {
                    if (parentNode.classList.contains("is-open")) {
                        fireGA4Event("VC120_FilterView", "");
                    }
                }, 150);
            }
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        updateLayout();
        mutationObserverFunction();
        clickFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".collection-filters-modal__inner-content-wrapper"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
