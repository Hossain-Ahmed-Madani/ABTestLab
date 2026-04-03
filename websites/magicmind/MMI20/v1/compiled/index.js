(async () => {
    const TEST_ID = "MMI20";
    const VARIANT_ID = "V1"; /* Control, V1, V2 */

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
        project: "Magic Mind",
        site_url: "https://magicmind.com",
        test_name: "MMI20: [PRODUCT] Move Up Ingredients BTF (2) SET UP TEST",
        page_initials: "AB-MMI20",
        test_variation: 2 /* 0, 1, 2 */,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function fireGA4Event(eventName, eventLabel = "") {
        logInfo(`fireGA4Event: ${eventName}, ${eventLabel}`);
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

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }


    function createV2Layout() {
        console.log("createV2Layout");

        const data = qq(".ingredients-v2__columns .ingredients-v2__col").map((col, idx) => ({
            col_idx: idx,
            accordion_items: qq(col, ".accordion__item").map((item) => ({
                heading: q(item, ".ingredients-v2__block-btn").textContent.trim(),
                imgUrl: q(item, "img.ingredients-v2__item-image").getAttribute("src"),
                is_exclusive: !!q(item, ".ingredients-v2__open-modal-btn"),
                info_title: q(item, ".ingredients-v2__block-title").textContent.trim(),
                info_sub_title: q(item, ".ingredients-v2__block-subtitle").textContent.trim(),
                info_content: q(item, ".ingredients-v2__block-text.accordion__content").innerHTML.trim(),
            })),
        }));

        console.log("DATA:", data);

        q("ingredients-slider-v2  component-accordions").insertAdjacentHTML(
            "afterend",
            /* HTML */ ` <div class="ab-accordion-grid-container">
                ${data
                    .map(
                        ({ col_idx, accordion_items }) => /* HTML */ `
                            <div class="ab-accordion-grid-item ab-accordion-grid-item--idx-${col_idx}">
                                ${accordion_items
                                    .map(
                                        ({ heading, imgUrl, is_exclusive, info_title, info_sub_title, info_content }, idx) => /* HTML */ `
                                            <div class="ab-accordion ${col_idx === 0 && idx === 0 && (window.innerWidth < 991 || isTouchEnabled()) ? "ab-accordion--expanded" : ""}">
                                                <div class="ab-accordion__left">
                                                    <img src="${imgUrl}" alt="${heading}" width="60" height="60" />
                                                </div>
                                                <div class="ab-accordion__middle">
                                                    <div class="ab-accordion__head">
                                                        <div class="ab-accordion__heading">${heading}</div>
                                                    </div>
                                                    <div class="ab-accordion__info">
                                                        <div class="ab-accordion__info-title">${info_title}</div>
                                                        ${is_exclusive ? `<div class="ab-accordion__info-exclusive">Exclusive ingredient</div>` : ""}
                                                        <div class="ab-accordion__info-sub-title">${info_sub_title}</div>
                                                        <div class="ab-accordion__info-content">${info_content}</div>
                                                    </div>
                                                </div>
                                                <div class="ab-accordion__right">
                                                    <div class="ab-accordion__chevron"></div>
                                                </div>
                                            </div>
                                        `,
                                    )
                                    .join("")}
                            </div>
                        `,
                    )
                    .join("")}
            </div>`,
        );

    }
    
    function clickFunction () {
        // Control Accordion
        q(".shopify-section.ingredients-slider-v2 component-accordions")?.addEventListener("click", (e) => {
            const accordion = e.target.closest(".accordion__item");
            if (accordion) {
                fireGA4Event('MM120_IngredientClick', q(accordion, ".ingredients-v2__block-btn").textContent.trim());
            }
        });

        // V2 Accordion
        q(".ab-accordion-grid-container")?.addEventListener("click", (e) => {
            const accordion = e.target.closest(".ab-accordion");
            if (accordion && !e.target.closest("a, .ab-accordion__info-exclusive")) {
                accordion.classList.toggle("ab-accordion--expanded");
                fireGA4Event('MM120_IngredientClick', q(accordion, ".ab-accordion__heading").textContent.trim());
            }
    
            if(e.target.closest(".ab-accordion__info-exclusive")) { 
                q('component-accordions .ingredients-v2__open-modal-btn').click();
            }
        });

    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        q(".shopify-section.ingredients-slider-v2").insertAdjacentElement("afterend", q(".shopify-section.product-benefits"));
        q(".shopify-section.ingredients-slider-v2").insertAdjacentElement("afterend", q(".shopify-section.logos"));

        
        clickFunction();

        createV2Layout();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q(".shopify-section.product-benefits") &&
            q(".shopify-section.logos") &&
            q(".shopify-section.ingredients-slider-v2")
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
