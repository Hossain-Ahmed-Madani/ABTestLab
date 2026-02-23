/* 

Figma:https://www.figma.com/design/62c1u91EMDKKGfeEAKvF8A/LME109---LANDING-PAGE---GLP--Add-Nutrition-Label---Benefits?node-id=2001-2
Test container: https://app.convert.com/accounts/10042082/projects/10042535/experiences/1004186158/summary

Target URL: https://lemmelive.com/pages/lemme-glp-1-daily
PDP: https://lemmelive.com/products/lemme-glp-1

Preview url:
Control:
V1:

Preview url (Including All Experiences):
Control:
V1:


*/

(async () => {
    const TEST_ID = "LME109";
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
        project: "Magic Spoon",
        site_url: "https://lemmelive.com",
        test_name: "LME109: [LANDING PAGE - GLP] Add Nutrition Label & Benefits (2) SET UP TEST",
        page_initials: "AB-LME109",
        test_variation: 1,
        test_version: 0.0003,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        sparkle_bullet_svg: /* HTML */ ` <svg role="img" aria-label="Sparkle Bullet" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 10C11.4285 10.789 10.3531 11.4286 6.94888 20C8.77508 11.4282 8.57154 10.789 0 10C8.57154 9.21103 9.64694 8.57137 13.0511 0C11.2249 8.57137 11.4285 9.21103 20 10Z"
                fill="black"
            ></path>
        </svg>`,
        review_star_url: "https://cdn-3.convertexperiments.com/uf/10042082/10042535/group-1_699c9eea23c11.png",
        banner_mobile_url: "https://cdn-3.convertexperiments.com/uf/10042082/10042535/mobile_699ca133b599c.png",
        banner_desktop_url: "https://cdn-3.convertexperiments.com/uf/10042082/10042535/desktop_699ca145aad7f.png",
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

        q("#buybox_section .ratings > img")?.setAttribute("src", ASSETS.review_star_url);
        q("#buybox_section > div > div:first-child > img.mobImg")?.setAttribute("src", ASSETS.banner_mobile_url);
        q("#buybox_section > div > div:first-child > img.desImg")?.setAttribute("src", ASSETS.banner_desktop_url);

        q(".lme-100").insertAdjacentHTML(
            "beforebegin",
            /* HTML */ `
                <div class="portable-snippet" data-snippet-name="product-details-tabs">
                    <div class="mod_product_details_tabs_IFRVdq_tabs" data-product-details-tabs="">
                        <div class="mod_product_details_tabs_IFRVdq_tabs__nav" role="tablist" aria-label="Product Details">
                            <button
                                id="tab-details-template--21252741595350__main"
                                class="mod_product_details_tabs_IFRVdq_tabs__tab text-bold active"
                                type="button"
                                role="tab"
                                aria-selected="true"
                                aria-controls="tabpanel-details-template--21252741595350__main"
                                data-tab="details"
                            >
                                DETAILS
                            </button>

                            <button
                                id="tab-supplement-template--21252741595350__main"
                                class="mod_product_details_tabs_IFRVdq_tabs__tab text-bold"
                                type="button"
                                role="tab"
                                aria-selected="false"
                                aria-controls="tabpanel-supplement-template--21252741595350__main"
                                data-tab="supplement"
                                data-open-modal="supplement-modal"
                            >
                                SUPPLEMENT FACTS
                            </button>
                        </div>

                        <div class="mod_product_details_tabs_IFRVdq_tabs__panels">
                            <div
                                id="tabpanel-details-template--21252741595350__main"
                                class="mod_product_details_tabs_IFRVdq_tabs__panel"
                                role="tabpanel"
                                aria-labelledby="tab-details-template--21252741595350__main"
                            >
                                <div class="mod_product_details_tabs_IFRVdq_tabs__benefits">
                                    <ul class="mod_product_details_tabs_IFRVdq_tabs__benefits-list" data-benefits-list="">
                                        <li>
                                            ${ASSETS.sparkle_bullet_svg}
                                            <span>Support GLP-1 levels*</span>
                                        </li>
                                        <li>
                                            ${ASSETS.sparkle_bullet_svg}
                                            <span>Promote fat reduction*<sup class="dagger">†</sup></span>
                                        </li>
                                        <li>
                                            ${ASSETS.sparkle_bullet_svg}
                                            <span>Reduce hunger and cravings*</span>
                                        </li>
                                        <li>
                                            ${ASSETS.sparkle_bullet_svg}
                                            <span>Support blood sugar levels in the normal range*</span>
                                        </li>
                                        <li>
                                            ${ASSETS.sparkle_bullet_svg}
                                            <span>Promote healthy weight management along with a healthy diet and exercise*</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mod_product_details_tabs_IFRVdq_tabs__description">
                                    <p>We recommend 3-6 months of consistent daily use to see results.</p>
                                </div>
                            </div>
                            <div
                                id="tabpanel-supplement-template--21252741595350__main"
                                class="mod_product_details_tabs_IFRVdq_tabs__panel hide"
                                role="tabpanel"
                                aria-labelledby="tab-supplement-template--21252741595350__main"
                            >
                                <p class="mod_product_details_tabs_IFRVdq_tabs__supplement-note"></p>
                            </div>

                            <div
                                id="tabpanel-faqs-template--21252741595350__main"
                                class="mod_product_details_tabs_IFRVdq_tabs__panel hide"
                                role="tabpanel"
                                aria-labelledby="tab-faqs-template--21252741595350__main"
                            >
                                <div class="mod_product_details_tabs_IFRVdq_tabs__faqs" data-faqs-container="">
                                    <div
                                        class="mod_product_details_tabs_IFRVdq_tabs__faqs-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                                        data-swiper-container=""
                                    >
                                        <div
                                            class="mod_product_details_tabs_IFRVdq_tabs__faqs-wrapper swiper-wrapper"
                                            data-swiper-wrapper=""
                                            style="cursor: grab; transition-duration: 0ms;"
                                        >
                                            <div class="mod_product_details_tabs_IFRVdq_tabs__faq-slide swiper-slide" data-swiper-slide="">
                                                <button
                                                    type="button"
                                                    class="mod_product_details_tabs_IFRVdq_tabs__faq-button text-link text-bold"
                                                    data-faq-button=""
                                                    data-faq-id="faq-1-template--21252741595350__main"
                                                >
                                                    Is Lemme Reset<sup>TM</sup> clinically-studied?
                                                </button>
                                            </div>

                                            <div class="mod_product_details_tabs_IFRVdq_tabs__faq-slide swiper-slide" data-swiper-slide="">
                                                <span class="mod_product_details_tabs_IFRVdq_tabs__faq-separator">
                                                    <svg
                                                        role="img"
                                                        aria-label="Sparkle Bullet"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20 10C11.4285 10.789 10.3531 11.4286 6.94888 20C8.77508 11.4282 8.57154 10.789 0 10C8.57154 9.21103 9.64694 8.57137 13.0511 0C11.2249 8.57137 11.4285 9.21103 20 10Z"
                                                            fill="black"
                                                        ></path>
                                                    </svg>
                                                </span>

                                                <button
                                                    type="button"
                                                    class="mod_product_details_tabs_IFRVdq_tabs__faq-button text-link text-bold"
                                                    data-faq-button=""
                                                    data-faq-id="faq-2-template--21252741595350__main"
                                                >
                                                    Are there any side effects with Lemme Reset<sup>TM</sup>?
                                                </button>
                                            </div>

                                            <div class="mod_product_details_tabs_IFRVdq_tabs__faq-slide swiper-slide" data-swiper-slide="">
                                                <span class="mod_product_details_tabs_IFRVdq_tabs__faq-separator">
                                                    <svg
                                                        role="img"
                                                        aria-label="Sparkle Bullet"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20 10C11.4285 10.789 10.3531 11.4286 6.94888 20C8.77508 11.4282 8.57154 10.789 0 10C8.57154 9.21103 9.64694 8.57137 13.0511 0C11.2249 8.57137 11.4285 9.21103 20 10Z"
                                                            fill="black"
                                                        ></path>
                                                    </svg>
                                                </span>

                                                <button
                                                    type="button"
                                                    class="mod_product_details_tabs_IFRVdq_tabs__faq-button text-link text-bold"
                                                    data-faq-button=""
                                                    data-faq-id="faq-3-template--21252741595350__main"
                                                >
                                                    How long should Lemme Reset<sup>TM</sup> be taken?
                                                </button>
                                            </div>

                                            <div class="mod_product_details_tabs_IFRVdq_tabs__faq-slide swiper-slide" data-swiper-slide="">
                                                <span class="mod_product_details_tabs_IFRVdq_tabs__faq-separator">
                                                    <svg
                                                        role="img"
                                                        aria-label="Sparkle Bullet"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20 10C11.4285 10.789 10.3531 11.4286 6.94888 20C8.77508 11.4282 8.57154 10.789 0 10C8.57154 9.21103 9.64694 8.57137 13.0511 0C11.2249 8.57137 11.4285 9.21103 20 10Z"
                                                            fill="black"
                                                        ></path>
                                                    </svg>
                                                </span>

                                                <button
                                                    type="button"
                                                    class="mod_product_details_tabs_IFRVdq_tabs__faq-button text-link text-bold"
                                                    data-faq-button=""
                                                    data-faq-id="faq-4-template--21252741595350__main"
                                                >
                                                    When will I see results?
                                                </button>
                                            </div>

                                            <div class="mod_product_details_tabs_IFRVdq_tabs__faq-slide swiper-slide" data-swiper-slide="">
                                                <span class="mod_product_details_tabs_IFRVdq_tabs__faq-separator">
                                                    <svg
                                                        role="img"
                                                        aria-label="Sparkle Bullet"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20 10C11.4285 10.789 10.3531 11.4286 6.94888 20C8.77508 11.4282 8.57154 10.789 0 10C8.57154 9.21103 9.64694 8.57137 13.0511 0C11.2249 8.57137 11.4285 9.21103 20 10Z"
                                                            fill="black"
                                                        ></path>
                                                    </svg>
                                                </span>

                                                <button
                                                    type="button"
                                                    class="mod_product_details_tabs_IFRVdq_tabs__faq-button text-link text-bold"
                                                    data-faq-button=""
                                                    data-faq-id="faq-5-template--21252741595350__main"
                                                >
                                                    What lifestyle habits should you consider adjusting to maximize the benefit of Lemme Reset<sup>TM</sup>?
                                                </button>
                                            </div>

                                            <div class="mod_product_details_tabs_IFRVdq_tabs__faq-slide swiper-slide" data-swiper-slide="">
                                                <span class="mod_product_details_tabs_IFRVdq_tabs__faq-separator">
                                                    <svg
                                                        role="img"
                                                        aria-label="Sparkle Bullet"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20 10C11.4285 10.789 10.3531 11.4286 6.94888 20C8.77508 11.4282 8.57154 10.789 0 10C8.57154 9.21103 9.64694 8.57137 13.0511 0C11.2249 8.57137 11.4285 9.21103 20 10Z"
                                                            fill="black"
                                                        ></path>
                                                    </svg>
                                                </span>

                                                <button
                                                    type="button"
                                                    class="mod_product_details_tabs_IFRVdq_tabs__faq-button text-link text-bold"
                                                    data-faq-button=""
                                                    data-faq-id="faq-6-template--21252741595350__main"
                                                >
                                                    Are these capsules vegetarian?
                                                </button>
                                            </div>

                                            <div class="mod_product_details_tabs_IFRVdq_tabs__faq-slide swiper-slide" data-swiper-slide="">
                                                <span class="mod_product_details_tabs_IFRVdq_tabs__faq-separator">
                                                    <svg
                                                        role="img"
                                                        aria-label="Sparkle Bullet"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20 10C11.4285 10.789 10.3531 11.4286 6.94888 20C8.77508 11.4282 8.57154 10.789 0 10C8.57154 9.21103 9.64694 8.57137 13.0511 0C11.2249 8.57137 11.4285 9.21103 20 10Z"
                                                            fill="black"
                                                        ></path>
                                                    </svg>
                                                </span>

                                                <button
                                                    type="button"
                                                    class="mod_product_details_tabs_IFRVdq_tabs__faq-button text-link text-bold"
                                                    data-faq-button=""
                                                    data-faq-id="faq-7-template--21252741595350__main"
                                                >
                                                    Are these capsules gluten-free?
                                                </button>
                                            </div>

                                            <div class="mod_product_details_tabs_IFRVdq_tabs__faq-slide swiper-slide" data-swiper-slide="">
                                                <span class="mod_product_details_tabs_IFRVdq_tabs__faq-separator">
                                                    <svg
                                                        role="img"
                                                        aria-label="Sparkle Bullet"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20 10C11.4285 10.789 10.3531 11.4286 6.94888 20C8.77508 11.4282 8.57154 10.789 0 10C8.57154 9.21103 9.64694 8.57137 13.0511 0C11.2249 8.57137 11.4285 9.21103 20 10Z"
                                                            fill="black"
                                                        ></path>
                                                    </svg>
                                                </span>

                                                <button
                                                    type="button"
                                                    class="mod_product_details_tabs_IFRVdq_tabs__faq-button text-link text-bold"
                                                    data-faq-button=""
                                                    data-faq-id="faq-8-template--21252741595350__main"
                                                >
                                                    Can I take this while pregnant?
                                                </button>
                                            </div>

                                            <div class="mod_product_details_tabs_IFRVdq_tabs__faq-slide swiper-slide" data-swiper-slide="">
                                                <span class="mod_product_details_tabs_IFRVdq_tabs__faq-separator">
                                                    <svg
                                                        role="img"
                                                        aria-label="Sparkle Bullet"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20 10C11.4285 10.789 10.3531 11.4286 6.94888 20C8.77508 11.4282 8.57154 10.789 0 10C8.57154 9.21103 9.64694 8.57137 13.0511 0C11.2249 8.57137 11.4285 9.21103 20 10Z"
                                                            fill="black"
                                                        ></path>
                                                    </svg>
                                                </span>

                                                <button
                                                    type="button"
                                                    class="mod_product_details_tabs_IFRVdq_tabs__faq-button text-link text-bold"
                                                    data-faq-button=""
                                                    data-faq-id="faq-9-template--21252741595350__main"
                                                >
                                                    Can I take Lemme Reset<sup>TM</sup> with other lemme products?
                                                </button>
                                            </div>

                                            <div class="mod_product_details_tabs_IFRVdq_tabs__faq-slide swiper-slide" data-swiper-slide="">
                                                <span class="mod_product_details_tabs_IFRVdq_tabs__faq-separator">
                                                    <svg
                                                        role="img"
                                                        aria-label="Sparkle Bullet"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M20 10C11.4285 10.789 10.3531 11.4286 6.94888 20C8.77508 11.4282 8.57154 10.789 0 10C8.57154 9.21103 9.64694 8.57137 13.0511 0C11.2249 8.57137 11.4285 9.21103 20 10Z"
                                                            fill="black"
                                                        ></path>
                                                    </svg>
                                                </span>

                                                <button
                                                    type="button"
                                                    class="mod_product_details_tabs_IFRVdq_tabs__faq-button text-link text-bold"
                                                    data-faq-button=""
                                                    data-faq-id="faq-10-template--21252741595350__main"
                                                >
                                                    Can I return Lemme Reset<sup>TM</sup>?
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
        );
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.log(TEST_CONFIG);
        createLayout();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".lme-100"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
