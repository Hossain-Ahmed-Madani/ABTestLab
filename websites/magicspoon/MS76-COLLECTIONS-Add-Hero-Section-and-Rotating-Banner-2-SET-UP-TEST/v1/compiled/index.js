var id = "1755286095194_8731_v1";
var name = "v1";
var testInfo = {
	id: id,
	name: name};

(() => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "Magicspoon",
        site_url: "https://magicspoon.com",
        test_name: "MS76: [COLLECTIONS] Add Hero Section and Rotating Banner - (2) SET UP TEST",
        page_initials: "AB-MS76",
        target_url: "https://magicspoon.com/collections/shop-all",
        test_container: "https://app.convert.com/accounts/10042082/projects/10042535/experiences/1004162427/summary",
        figma_link: "https://www.figma.com/design/MNFePWvyeTkb8V26U5hbMN/MS76---COLLECTIONS--Add-Hero-Section-and-Rotating-Banner?node-id=66-2&p=f&t=JHouo4eCXZ2bkZgV-0",
        test_variation: 1,
        test_version: 0.0001,
    };

    ASSETS = {
        hero_mobile: "https://cdn-3.convertexperiments.com/uf/10042082/10042535/magicspoon-t-h1-newflavors-homepagecropshomepagedesign-1-large-2-1_689f9a7b87cfa.png",
        hero_desktop: "https://cdn-3.convertexperiments.com/uf/10042082/10042535/group-33-1_689f9af17ff29.png",
    };

    function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
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
            console.error(error);
            return;
        }
    }

    function createLayout() {
        const targetNode = document.querySelector("#shopify-section-shop-all-header");
        const layout = /* HTML */ `
            <section class="ab-section">
                <div class="ab-hero-banner-wrapper">
                    <div class="ab-hero-banner-content">
                        <h2 class="ab-hero-banner-header">
                            EXPLORE OUR <br />
                            PRODUCTS
                        </h2>
                        <p class="ab-hero-banner-subtitle">Indulge in our delicious, better-<br />for-you breakfast options.</p>
                    </div>
                </div>
                <div class="ab-rotating-banner-wrapper">Rotating Scroller</div>
            </section>
        `;
        targetNode.insertAdjacentHTML("afterend", layout);
    }

    function init() {
        document.body.classList.add(TEST_CONFIG.page_initials, `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`, `${TEST_CONFIG.page_initials}--version${TEST_CONFIG.test_version}`);

        console.table({ ID: testInfo.id, Variation: testInfo.name });

        console.table(TEST_CONFIG);

        createLayout();
    }

    function hasAllTargetElements() {
        return !!(
            document.querySelector(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) &&
            document.querySelector(`#shopify-section-shop-all-header`) &&
            true
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
