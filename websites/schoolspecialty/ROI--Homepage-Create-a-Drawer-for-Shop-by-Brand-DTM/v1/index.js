/* 
Test info:
    Previous test name: Homepage - Turn the Category Grid into a Drawer
    Previous test container: https://app.convert.com/accounts/100414252/projects/100415740/experiences/1004157358/summary
    Previous test preview: https://select.schoolspecialty.com/?convert_action=convert_vpreview&convert_e=1004157358&convert_v=1004371721

    Ticket link: https://trello.com/c/grIWH9Gt/4126-homepage-create-a-drawer-for-shop-by-brand-dtm
    Figma link: https://www.figma.com/proto/ottpiyYbyizBuMhspjMFsx/A-B-Testing-Ideas?node-id=431-4368&t=QFmBu4224DlgTQbt-0&scaling=scale-down&content-scaling=fixed&page-id=431%3A1969&starting-point-node-id=431%3A1971
    Test container: https://app.convert.com/accounts/100414252/projects/100415740/experiences/1004170091/summary
    Forced Variation: https://select.schoolspecialty.com/?_conv_eforce=1004170091.1004401541&utm_campaign=qa5
    
    Location: ^https:\/\/select\.schoolspecialty\.com\/?(\?.*)?$
*/

(() => {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "select.schoolspecialty",
        site_url: "https://select.schoolspecialty.com/",
        test_name: "Homepage - Create a Drawer for Shop by Brand [DTM]",
        page_initials: "AB-HOME-BRAND-DRAWER",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const DATA = {
        brands: [
            {
                brandName: "Classroom Select",
                label: "Shop Classroom Select",
                url: "/classroom-select",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/classroom-select-logo.png", // You would need to add the actual image URL
            },
            {
                brandName: "School Smart",
                label: "Shop School Smart",
                url: "/school-smart",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/schoolsmart-logo.png",
            },
            {
                brandName: "Sax",
                label: "Shop Sax",
                url: "/sax",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/sax-logo.png",
            },
            {
                brandName: "Snoezelen",
                label: "Shop Snoezelen",
                url: "/snoezelen-resources",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/snoezelen-logo.png",
            },
            {
                brandName: "Childcraft",
                label: "Shop Childcraft",
                url: "/childcraft",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/childcraft-logo.png",
            },
            {
                brandName: "Abilitations",
                label: "Shop Abilitations",
                url: "/abilitations",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/abilitations-logo.png",
            },
            {
                brandName: "Achieve It!",
                label: "Shop Achieve It!",
                url: "/achieve-it",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/achieve-it-logo.png",
            },
            {
                brandName: "Califone",
                label: "Shop Califone",
                url: "/califone",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/califone-logo.png",
            },
            {
                brandName: "Catch",
                label: "Shop Catch",
                url: "/catch-resources",
                imgUrl: "https://cdn.schoolspecialty.com/6e543e0c-c123-45b1-9a08-b1e7014a0326/catch-logo_Original%20file.png",
            },
            {
                brandName: "Delta Education",
                label: "Shop Delta Education",
                url: "/delta-education",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/delta-logo.png",
            },
            {
                brandName: "Frey Scientific",
                label: "Shop Frey Scientific",
                url: "/frey-scientific",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/frey-logo.png",
            },
            {
                brandName: "Flaghouse",
                label: "Shop Flaghouse",
                url: "/shop-flaghouse",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/flaghouse-logo.png",
            },
            {
                brandName: "FOSS",
                label: "Shop FOSS",
                url: "https://www.foss-science.com/",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/foss-logo.png",
            },
            {
                brandName: "Kits for Kidz",
                label: "Shop Kits for Kidz",
                url: "/kitsforkidz",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/brand-pages/Kits-4-kidz/kits4kidzlogo.png",
            },
            {
                brandName: "School Kidz",
                label: "Shop School Kidz",
                url: "/schoolkidz",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/brand-pages/School-Kidz/schoolkidzlogo.png",
            },
            {
                brandName: "Sportime",
                label: "Shop Sportime",
                url: "/sportime",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/corporate/brands/sportime-logo.png",
            },
            {
                brandName: "Projects by Design",
                label: "Shop Projects by Design",
                url: "/projects-by-design",
                imgUrl: "/wcsstore/SSIB2BStorefrontAssetStore/images/logos/pbd-logo-large-rev.png",
            },
        ],
    };

    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
        if (timer <= 0) {
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => waitForElement(predicate, callback, timer - frequency, frequency), frequency);
        }
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function createLayout() {
        q('div[id^="catalogEntryRecommendationWidget"] ~ div[id^="contentRecommendationWidget"]').insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-brands-section background-true border-true">
                    <!-- BEGIN Content_UI.jspf -->
                    <div class="left_espot">
                        <div class="p-20 ssi-text__center">
                            <h2 class="txt-34 txt-navy-blue ssi-font__bold mb-20">Quality and Value from Our Trusted Brands</h2>
                            <p class="txt-18 ssi-text__center">Discover our curated family of brands offering reliable solutions for all your needs.</p>
                            <a href="/brands" class="txt-16 ssi-font__bold ssi-color-text__pri-dk-blue link" style="display: inline-block">Learn More About Our Family Brands</a>
                        </div>

                        <div class="fx-row fx-start fx-middle brands">
                            ${DATA.brands
                                .map(
                                    ({ brandName, label, url, imgUrl }, index) => /* HTML */ `
                                        <!-- ITEM ${index + 1}-->
                                        <div class="brands-card fx-col-6 fx-col-sm-3 fx-col-md-3 fx-col-lg-2">
                                            <a href="${url}" aria-label="${label}">
                                                <div class="cat-circle p-20">
                                                    <img loading="lazy" src="${imgUrl}" class="ssi-responsive-image" alt="${brandName} Logo" />
                                                </div>
                                                <p class="txt-16 ssi-font__bold ssi-text__center ssi-color-text__pri-dk-blue ssi-text__underline">${label}</p>
                                            </a>
                                        </div>
                                    `
                                )
                                .join("")}
                        </div>
                        <div class="more-brands collapsed">
                            <div class="brands-icon"></div>
                            <div class="brands-text">View More Brands</div>
                        </div>
                    </div>
                </div>
            `
        );
    }

    function clickFunction() {
        waitForElement(
            () => q(".more-brands"),
            () => {
                const moreBrands = q(".more-brands");
                moreBrands.addEventListener("click", function () {
                    const brandsContainer = document.querySelector(".ab-brands-section .brands");
                    const brandsText = document.querySelector(".brands-text");
                    const brandsIcon = document.querySelector(".brands-icon");
                    const featuredBrands = document.querySelector(".ab-brands-section");

                    if (this.classList.contains("collapsed")) {
                        // Clear any previous height constraints and set current height
                        brandsContainer.style.minHeight = "none";
                        brandsContainer.style.maxHeight = brandsContainer.offsetHeight + "px";

                        // After a short delay, start expanding the brands
                        setTimeout(function () {
                            brandsContainer.classList.add("brands-expanded");
                            brandsContainer.style.maxHeight = "1200px";
                        }, 50);

                        // After the height animation completes, remove max-height to allow natural sizing
                        setTimeout(function () {
                            brandsContainer.style.maxHeight = "none";
                        }, 800);

                        setTimeout(function () {
                            brandsText.textContent = "View Less Brands";
                            brandsIcon.classList.add("icon-inverted");
                        }, 300);
                    } else {
                        // Clear any previous height constraints and set current height
                        brandsContainer.style.maxHeight = "none";
                        brandsContainer.style.minHeight = brandsContainer.offsetHeight + "px";

                        // After a short delay, start collapsing the brands
                        setTimeout(function () {
                            brandsContainer.classList.remove("brands-expanded");
                            brandsContainer.style.minHeight = "0";
                            featuredBrands.scrollIntoView({ behavior: "smooth" });
                        }, 100);

                        // After the height animation completes, remove min-height to allow natural sizing
                        setTimeout(function () {
                            brandsContainer.style.minHeight = "none";
                        }, 800);

                        setTimeout(function () {
                            brandsText.textContent = "View More Brands";
                            brandsIcon.classList.remove("icon-inverted");
                        }, 300);
                    }

                    this.classList.toggle("collapsed");
                });
            }
        );
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
        clickFunction();
    }

    function hasAllTargetElements() {
        return !!(
            q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q('div[id^="catalogEntryRecommendationWidget"] ~ div[id^="contentRecommendationWidget"]')
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
