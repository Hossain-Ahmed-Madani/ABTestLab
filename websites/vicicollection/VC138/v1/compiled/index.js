/* 
Test container: https://marketer.monetate.net/control/a-41b13725/p/vicicollection.com/experience/2097793#

Preview excluding all: https://marketer.monetate.net/control/preview/12997/1QQDDYBO07OASN5V1GQSW9X6HI3S83UY/vc127-navigation-hide-search-in-mobile-nav-menu

Preview including all: https://marketer.monetate.net/control/preview/12997/VTZ4M2GUPVAU0RJWL6N9GFYEMNGZX9E2/vc127-navigation-hide-search-in-mobile-nav-menu

*/

(async () => {
    const TEST_ID = "VC138";
    const VARIANT_ID = "V1"; /* Control, V1, V2 */

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color:white;background:rgb(0,0,57);font-weight:700;padding:2px 4px;border-radius:2px;",
            "margin-left:8px;color:white;background:rgb(0,57,57);font-weight:700;padding:2px 4px;border-radius:2px;",
            message,
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        client: "Acadia",
        project: "vicicollection",
        site_url: "https://www.vicicollection.com/",
        test_name: " VC138: [NAVIGATION] Occasions Copy - Set Up Test",
        page_initials: "AB-VC138",
        test_variation: 1 /* 0, 1, 2 */,
        test_version: 0.0002,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function fireGA4Event(eventName, eventLabel = "") {
        console.log("fireGA4Event", eventName, eventLabel);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "GA4event",
            "ga4-event-name": "cro_event",
            "ga4-event-p1-name": "event_category_title",
            "ga4-event-p1-value": eventName,
            "ga4-event-p2-name": "event_label",
            "ga4-event-p2-value": eventLabel,
        });
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
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

    const TXT = {
        1: {
            mobile: {
                category_title: "SHOP BY EVENT",
                subCategory_title: "SHOP BY EVENT",
                link_title: "SHOP ALL EVENTS",
            },
            desktop: {
                category_title: "SHOP BY EVENT",
                translate_value: 270.27,
                subCategory_title: "SHOP BY EVENT",
                link_title: "Shop All Events",
            },
        },
        2: {
            mobile: {
                category_title: "CURATED LOOKS",
                subCategory_title: "CURATED LOOKS",
                link_title: "SHOP ALL CURATED LOOKS",
            },
            desktop: {
                category_title: "CURATED LOOKS",
                translate_value: 252.27,
                subCategory_title: "CURATED LOOKS",
                link_title: "Shop All Curated Looks",
            },
        },
    };

    // function injectStyles() {
    //     const styleElement = document.createElement("style");
    //     styleElement.type = "text/css";
    //     styleElement.textContent = `
    //         .AB-VC138--v1 a.nav__btn.nav__link[href="/pages/vici-shops"] {
    //             font-size: 0;
    //         }
    //         .AB-VC138--v1 a.nav__btn.nav__link[href="/pages/vici-shops"]::after {
    //             content: "${TXT[1].desktop.category_title}";
    //             font-size: 0.85rem;
    //         }

    //         .AB-VC138--v2 a.nav__btn.nav__link[href="/pages/vici-shops"] {
    //             font-size: 0;
    //         }
    //         .AB-VC138--v2 a.nav__btn.nav__link[href="/pages/vici-shops"]::after {
    //             content: "${TXT[2].desktop.category_title}";
    //             font-size: 0.85rem;
    //         }

    //     `;
    //     document.head.appendChild(styleElement);
    // }

    function applyClickEvents() {
        const mobileCategoryBtn = q('button.mega-menu-mobile__submenu[aria-controls="mobileMenuAcc-occasions"]');
        if (mobileCategoryBtn) {
            mobileCategoryBtn.addEventListener("click", (e) => {
                const currentTarget = e.currentTarget;
                const linkText = currentTarget.textContent.replace("Expand submenu", "").trim();

                setTimeout(() => {
                    if (currentTarget.classList.contains("is-active")) {
                        fireGA4Event("VC138_CategoryClick", linkText);
                    }
                }, 50);
            });
        }

        const desktopCategoryBtn = q('a.nav__btn.nav__link[href="/pages/vici-shops"]');
        if (desktopCategoryBtn) {
            desktopCategoryBtn.addEventListener("mouseenter", (e) => {
                const currentTarget = e.currentTarget;
                currentTarget.getAttribute("href");
                const linkText = currentTarget.textContent;
                e.preventDefault();
                fireGA4Event("VC138_CategoryClick", linkText);
            });
        }

        const mobileLinkBtn = q('a.mega-menu-mobile__submenu-menu-list-item-button[href="/pages/vici-shops"]');
        if (mobileLinkBtn) {
            mobileLinkBtn.addEventListener("click", (e) => {
                const currentTarget = e.currentTarget;
                const link = currentTarget.getAttribute("href");
                const linkText = currentTarget.textContent;
                e.preventDefault();
                fireGA4Event("VC138_CategoryClick", linkText);

                if (e.ctrlKey || e.metaKey) {
                    window.open(link, "_blank");
                } else {
                    setTimeout(() => {
                        window.location.href = link;
                    }, 50);
                }
            });
        }

        const desktopLink = q('li.mega-menu-desktop__column-list-item a[href="/collections/special-occasion"]');
        if (desktopLink) {
            desktopLink.addEventListener("click", (e) => {
                const currentTarget = e.currentTarget;
                const link = currentTarget.getAttribute("href");
                const linkText = currentTarget.textContent;
                e.preventDefault();
                fireGA4Event("VC138_CategoryClick", linkText);

                if (e.ctrlKey || e.metaKey) {
                    window.open(link, "_blank");
                } else {
                    setTimeout(() => {
                        window.location.href = link;
                    }, 50);
                }
            });
        }
    }
    function applyChanges() {
        const { mobile, desktop } = TXT[test_variation];

        const mobileCategoryBtn = q('button.mega-menu-mobile__submenu[aria-controls="mobileMenuAcc-occasions"]');
        if (mobileCategoryBtn)
            mobileCategoryBtn.innerHTML = /* HTML */ `
                ${mobile.category_title}
                <i class="icon icon--chevron-down-2"></i>
                <span class="screenreader">Expand submenu</span>
            `;

        const mobileSubCategoryLink = q("#mobileMenuAcc-occasions ul.mega-menu-mobile__submenu-menu-list li:last-child .mega-menu-mobile__submenu-menu-list-item-link");
        if (mobileSubCategoryLink) mobileSubCategoryLink.textContent = mobile.subCategory_title;

        const mobileLinkBtn = q('a.mega-menu-mobile__submenu-menu-list-item-button[href="/pages/vici-shops"]');
        if (mobileLinkBtn) mobileLinkBtn.textContent = mobile.link_title;

        // const desktopCategoryBtnContainer = q('div.nav__item[mega-menu-id="occasions-menu"]');
        // if (desktopCategoryBtnContainer) {
        //     q('a.nav__btn.nav__link[href="/pages/vici-shops"]').textContent = desktop.category_title;
        //     desktopCategoryBtnContainer.setAttribute("style", `left:0; transform: translateX(${desktop.translate_value}%);`);
        //     window.dispatchEvent(new Event("resize"));
        // }

        const desktopCategoryBtn = q('a.nav__btn.nav__link[href="/pages/vici-shops"]');
        if (desktopCategoryBtn) {
            desktopCategoryBtn.textContent = desktop.category_title;
            window.dispatchEvent(new Event("resize"));
        }

        const desktopSubCategoryTitle = q(
            ".mega-menu-desktop#occasions-menu ul.mega-menu-desktop__columns li.mega-menu-desktop__column:first-child .mega-menu-desktop__column-title p.h2",
        );
        if (desktopSubCategoryTitle) desktopSubCategoryTitle.textContent = desktop.subCategory_title;

        const desktopLink = q('li.mega-menu-desktop__column-list-item a[href="/collections/special-occasion"]');
        if (desktopLink) desktopLink.textContent = desktop.link_title;
    }

    function init() {
        if (window[page_initials]) return;

        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        console.clear();
        console.log(TEST_CONFIG);

        applyChanges();
        applyClickEvents();
    }

    function checkForItems() {
        const windowWidth = window.innerWidth;

        const hasMobileItems = !!(
            q('button.mega-menu-mobile__submenu[aria-controls="mobileMenuAcc-occasions"]') &&
            q("#mobileMenuAcc-occasions ul.mega-menu-mobile__submenu-menu-list li:last-child .mega-menu-mobile__submenu-menu-list-item-link") &&
            q('a.mega-menu-mobile__submenu-menu-list-item-button[href="/pages/vici-shops"]')
        );
        const hasDesktopItems = !!(
            q('a.nav__btn.nav__link[href="/pages/vici-shops"]') &&
            q(".mega-menu-desktop#occasions-menu ul.mega-menu-desktop__columns li.mega-menu-desktop__column:first-child .mega-menu-desktop__column-title p.h2") &&
            q('li.mega-menu-desktop__column-list-item a[href="/collections/special-occasion"]')
        );

        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && (windowWidth && windowWidth < 1025 ? hasMobileItems : hasDesktopItems));
    }

    await waitForElementAsync(checkForItems);
    init();
})();
