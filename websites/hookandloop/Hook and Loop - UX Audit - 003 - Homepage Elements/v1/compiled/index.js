var id = "1754075815885_4714_v1";
var name = "v1";
var testInfo = {
	id: id,
	name: name};

// https://www.figma.com/design/JZ7TKElYDSJ9DA3HafAkl2/Hook-and-Loop---UX-Audit---003---Homepage-Elements?node-id=0-1&t=So85TLSfgwSOKm5K-1

/* 

Development breakdown:
Hero section: 2 hours 
Customization services: 1 hours
Brands with scroll animation: 3 hours
Testimonials: 3 hours
Start shopping Section: 3 hours
Subscription section: 3 hours
Initial Development: 15 hours

*/

(() => {
    const TEST_CONFIG = {
        client: "Hook & Loop",
        project: "Hook & Loop",
        site_url: "https://www.hookandloop.com/",
        test_name: `Hook and Loop - UX Audit - 003 - Homepage Elements`,
        page_initials: "AB-HOMEPAGE-REDESIGN",
        test_variation: 1,
        test_version: 0.0001,
    };

    const ASSETS = {
        duragrip: "https://www.hookandloop.com/media/catalog/product/cache/67ee89799642c567a71fc92f3699d937/d/u/duragrip.jpg",
        velcro: "https://www.hookandloop.com/media/catalog/product/cache/67ee89799642c567a71fc92f3699d937/v/e/velcro_logo_1.jpg",
    };

    const TAILWIND_STYLES = {
        heading_lg: "text-[22px] lg:text-[26px] leading-1 font-semibold",
        flex_center: "flex items-center justify-center",
    };

    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
        try {
            if (timer <= 0) {
                throw new Error(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            } else if (predicate && predicate()) {
                callback();
            } else {
                setTimeout(() => {
                    waitForElement(predicate, callback, timer - frequency, frequency);
                }, frequency);
            }
        } catch (error) {
            console.warn(error);
            return;
        }
    }

    function createHeroSectionLayout() {
        const targetNode = document.querySelector(".custom-converting-panel");
        targetNode.insertAdjacentHTML(
            "beforebegin",
            /* HTML */ `
                <section class="ab-hero-section relative w-full">
                    <div class="ab-hero-section__container mx-auto flex flex-col items-center text-center">
                        <h2 class="text-white ${TAILWIND_STYLES.heading_lg}">
                            From full rolls to finished <br class="md:hidden" />
                            products, we’re Everything <br class="md:hidden" />
                            in Hook & Loop!<sup class="text-sm ab-sup">TM</sup>
                        </h2>
                        <div class="ab-hero-section__brands flex justify-between items-center">
                            <a href="https://www.hookandloop.com/brands/duragrip" class="ab-hero-section__brands-item ${TAILWIND_STYLES.flex_center}">
                                <img src="${ASSETS.duragrip}" alt="Duragrip" class="" />
                            </a>
                            <a href="https://www.hookandloop.com/brands/velcro" class="ab-hero-section__brands-item ${TAILWIND_STYLES.flex_center}">
                                <img src="${ASSETS.velcro}" alt="Velcro" class="" />
                            </a>
                        </div>
                        <div class="ab-hero-section__all-products flex flex-col items-center justify-center">
                            <div class="ab-hero-section__all-products-row flex justify-between items-center">
                                <a href="#" class="ab-hero-section__all-products-item ${TAILWIND_STYLES.flex_center}">Whole Rolls</a>
                                <a href="#" class="ab-hero-section__all-products-item ${TAILWIND_STYLES.flex_center}">Cut Pieces</a>
                            </div>
                            <div class="ab-hero-section__all-products-row flex justify-between items-center">
                                <a href="#" class="ab-hero-section__all-products-item ${TAILWIND_STYLES.flex_center}">Straps</a>
                                <a href="#" class="ab-hero-section__all-products-item ${TAILWIND_STYLES.flex_center}">Specialty Options</a>
                            </div>
                            <div class="ab-hero-section__all-products-row flex justify-between items-center">
                                <a href="#" class="ab-hero-section__all-products-item mx-auto ${TAILWIND_STYLES.flex_center}">See all Products</a>
                            </div>
                        </div>
                    </div>
                </section>
            `
        );
    }

    function init() {
        document.body.classList.add(TEST_CONFIG.page_initials, `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`, `${TEST_CONFIG.page_initials}--version${TEST_CONFIG.test_version}`);

        console.table({ ID: testInfo.id, Variation: testInfo.name });

        console.log(
            `%cTest info`,
            "background: black; border: 2px solid green; color: white; display: block; text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3); text-align: left; font-weight: bold; padding: 10px; margin: 10px; font-family: monospace; white-space: pre;"
        );

        console.table(TEST_CONFIG);

        createHeroSectionLayout();
    }

    function hasAllTargetElements() {
        return !!document.querySelector(`body.cms-home:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`);
    }

    waitForElement(hasAllTargetElements, init);
})();
