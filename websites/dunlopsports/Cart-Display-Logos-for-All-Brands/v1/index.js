/* 
    Ticket: https://trello.com/c/vAbXT6E6/4473-cart-display-logos-for-all-brands-dtm
    Test container: https://app.optimizely.com/v2/projects/30347390156/experiments/4653129170419712/variations
    Figma: https://www.figma.com/design/sDP3TPgMBmNNr4RZvdx4Kb/Dunlop-Sports-America?node-id=54-3&t=IPFQ1NtXJ3dwcTvX-1
    Preview: https://us.dunlopsports.com/cart?qa5=true
*/

(function () {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "dunlopsports",
        site_url: "https://us.dunlopsports.com/",
        test_name: "Cart - Display Logos for All Brands [DTM]",
        page_initials: "AB-DISPLAY-LOGOS",
        test_variation: 1,
        test_version: 0.0002,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const DATA = {
        brands: [
            {
                label: "dunlop",
                imgUrl: "https://cdn.optimizely.com/img/30347390156/bdaf2fbedb4545e3971e15d242b346c0.png",
                link: "https://us.dunlopsports.com/",
            },
            {
                label: "srixon",
                imgUrl: "https://cdn.optimizely.com/img/30347390156/7c8dd842b0ba48aaaa58b5c687fbed58.png",
                link: "https://us.dunlopsports.com/srixon",
            },
            {
                label: "cleveland",
                imgUrl: "https://cdn.optimizely.com/img/30347390156/6cf448201947461f874fb83eb5235b93.png",
                link: "https://us.dunlopsports.com/cleveland-golf",
            },
            {
                label: "xxio",
                imgUrl: "https://cdn.optimizely.com/img/30347390156/ebbbae6400e84d399124fa23027eecc6.png",
                link: "https://us.dunlopsports.com/xxio",
            },
            {
                label: "never-compromise",
                imgUrl: "https://cdn.optimizely.com/img/30347390156/8289e7d3114149f59d5d3f1ee11ca461.png",
                link: "https://us.dunlopsports.com/never-compromise",
            },
            {
                label: "asics",
                imgUrl: "https://cdn.optimizely.com/img/30347390156/1464cca5ca02401dbe034982aa37a391.png",
                link: "https://us.dunlopsports.com/asics",
            },
        ],
    };

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
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

    function getBrandsLayout() {
        return /* HTML */ `
            <div class="ab-brand-logos-layout">
                <div class="ab-dunlop-logo-container">
                    <a href="${DATA.brands[0].link}" class="ab-dunlop-logo">
                        <img src="${DATA.brands[0].imgUrl}" alt="${DATA.brands[0].label}" class="ab-dunlop-logo-img" />
                    </a>
                </div>
                <div class="ab-brand-logos-separator-line"></div>
                <div class="ab-brands-container">
                    ${DATA.brands
                        .slice(1)
                        .map(
                            (brand) => /* HTML */ `
                                <a href="${brand.link}" class="ab-brand-item">
                                    <img src="${brand.imgUrl}" alt="${brand.label}" class="ab-brand-logo-img" />
                                </a>
                            `
                        )
                        .join("")}
                </div>
            </div>
        `;
    }

    function createCartBrandLayout() {
        const layout = getBrandsLayout();

        waitForElement(
            () => qq(".sticky-nav, .header .navbar-header.d-md-none").length === 2,
            () => {
                q(".sticky-nav").insertAdjacentHTML("afterend", layout);
                q(".header .navbar-header.d-md-none").insertAdjacentHTML("beforebegin", layout);
            }
        );
    }

    function createCheckoutBrandLayout() {
        const layout = getBrandsLayout();
        waitForElement(
            () => q(".header__checkout .navbar-header"),
            () => {
                q(".header__checkout .navbar-header").insertAdjacentHTML("afterend", layout);
            }
        );
    }

    function clickFunction() {
        waitForElement(
            () => q(".ab-brand-item"),
            () => {
                qq(".ab-brand-item").forEach((item) => {
                    item.addEventListener("click", (e) => {
                        if (window.innerWidth < 767.5) {
                            e.preventDefault();
                            if (e.ctrlKey || e.metaKey) {
                                window.open("/", "_blank");
                            } else {
                                window.location.href = "/";
                            }
                        }
                    });
                });
            }
        );
    }

    const LAYOUT_CONFIG = {
        "/cart": {
            body_class: page_initials + "--CART",
            layoutFunction: createCartBrandLayout,
        },
        "/on/demandware.store/Sites-DunlopSportsUS-Site/en_US/Checkout-Begin": {
            body_class: page_initials + "--CHECKOUT",
            layoutFunction: createCheckoutBrandLayout,
        },
    };

    function getLayoutConfig() {
        const path = window.location.pathname;

        if (LAYOUT_CONFIG[path]) {
            return LAYOUT_CONFIG[path];
        }

        return null;
    }

    function init() {
        const { body_class, layoutFunction } = getLayoutConfig();
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`, body_class);
        layoutFunction();
        clickFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && getLayoutConfig());
    }

    waitForElement(checkForItems, init);
})();
