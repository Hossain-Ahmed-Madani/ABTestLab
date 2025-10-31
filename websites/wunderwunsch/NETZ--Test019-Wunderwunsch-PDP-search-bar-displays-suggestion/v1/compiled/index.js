/* 

Test doc: https://docs.google.com/document/d/1a9J4mlbqAJYVm8BmW5ZClUD2AZWb9qYZ6BImH8bAZbw/edit?tab=t.0
Figma: https://www.figma.com/design/Jfp1I18s7V6o1lBFAXq1c3/Test019---Suchleiste---Produkt---Kategorie----Markenvorschl%C3%A4ge?node-id=0-1&t=QeiM6oOucLj9hzqn-1

Test container: https://app.convert.com/accounts/1004828/projects/10041371/experiences/1004174128/summary
Preview: https://www.wunderwunsch.de/?convert_action=convert_vpreview&convert_e=1004174128&convert_v=1004410687
Forced Variation: https://www.wunderwunsch.de/?_conv_eforce=1004174128.1004410687&utm_campaign=qa05

*/

(async () => {
    const TEST_CONFIG = {
        client: "Netzprduzenten",
        project: "wunderwunsch",
        site_url: "https://www.wunderwunsch.de/",
        test_name: "Test019 [Wunderwunsch] - PDP - search bar displays suggestions when activated (mobile only)",
        page_initials: "TEST019-SEARCH-BAR",
        test_variation: 1,
        test_version: 0.0007,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        search_icon_svg: /* HTML */ `
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.3196 13.6543C16.927 13.3175 16.4921 13.023 16.1476 12.642C15.8224 12.2205 15.2758 12.0185 14.9198 11.6278C14.3944 11.4065 14.0268 11.0274 13.4803 10.8272C13.3148 10.6194 12.9933 10.5674 12.8394 10.3461C12.7008 10.3365 12.6085 10.1998 12.5199 10.1325C12.4103 10.0497 12.2582 10.0016 12.2005 9.86497C12.9857 8.97777 13.4745 7.79806 13.588 6.23731C13.3648 5.18074 13.0627 4.20117 12.5738 3.41021C12.4911 3.20813 12.4199 2.99644 12.3602 2.76935C11.9618 2.41139 11.5404 1.9091 11.0804 1.70318C11.0631 1.69548 11.0477 1.60888 11.0265 1.59733C11.0035 1.58001 10.9476 1.60888 10.9188 1.59733C10.9015 1.58963 10.886 1.50303 10.8649 1.49149C10.8399 1.47417 10.786 1.50303 10.759 1.49149C10.7398 1.48378 10.7263 1.39718 10.7051 1.38563C10.657 1.35485 10.5858 1.35485 10.5454 1.33175C10.3337 1.21628 10.0469 1.04885 9.90648 0.9584C9.79294 0.885269 9.63128 0.841006 9.53311 0.798663C9.23483 0.671651 8.94231 0.540783 8.62665 0.425313C8.1186 0.242486 7.60477 0.0673571 7.0274 0H6.44043C6.22877 0.0731309 5.9478 0.07698 5.69374 0.105847C5.50515 0.254033 5.15489 0.242486 5.00093 0.425313C4.7392 0.500369 4.4409 0.540783 4.25423 0.692817C3.67303 0.78712 3.31507 1.10466 2.76081 1.2259C2.70693 1.36639 2.51448 1.37024 2.44135 1.49341C2.27007 1.51843 2.25275 1.69741 2.068 1.70703C1.91981 1.96876 1.61189 2.06883 1.37518 2.24011C1.15579 2.65965 0.863266 3.00798 0.682363 3.46602C0.549569 3.65269 0.522626 3.94714 0.362896 4.10687C0.397536 4.30125 0.247426 4.31087 0.255124 4.48022C0.143503 4.54566 0.220483 4.80161 0.095391 4.85358C-0.104757 5.98131 0.0780704 7.16874 0.0415047 8.42737C0.141578 9.0028 0.335953 9.48389 0.522626 9.97463C0.70738 10.0921 0.751643 10.3499 0.94794 10.4558C1.05764 10.6482 1.26548 10.7425 1.37518 10.935C1.88325 11.2621 2.33935 11.6413 2.92247 11.8953C3.43631 12.2167 4.0406 12.4477 4.68339 12.642C4.88353 12.6901 5.13564 12.6882 5.32424 12.7478C5.54556 12.7017 5.83037 12.7209 6.01705 12.642C6.04014 12.7613 6.28071 12.6632 6.39043 12.6959C6.41351 12.8152 6.65408 12.7171 6.76374 12.7498C7.09094 12.7094 7.2622 12.8191 7.56437 12.8037C7.8646 12.7478 8.20711 12.7344 8.52465 12.6959C8.64785 12.6227 8.7614 12.5419 8.95191 12.5362C9.13282 12.4149 9.29254 12.2725 9.53888 12.2167C9.689 12.0646 9.87757 11.9511 10.1259 11.8972C10.2163 12.1089 10.378 12.2494 10.4453 12.4842C10.582 12.667 10.7359 12.8345 10.8187 13.0711C11.1285 13.3829 11.2844 13.8506 11.6193 14.1373C11.806 14.5723 12.1273 14.8744 12.366 15.2574C12.6585 15.5865 12.9241 15.9425 13.1665 16.3235C13.5419 16.6584 13.894 17.0183 14.2866 17.3378C14.3886 17.4841 14.5041 17.6168 14.6061 17.765C14.762 17.8766 14.762 18.1422 15.0333 18.1383C15.3701 18.173 15.4913 17.9921 15.6723 17.8709C15.7896 17.6688 16.1091 17.6688 16.3131 17.5514C16.8231 16.9759 17.4678 16.5372 17.9124 15.8982C18.0279 15.5865 18.1029 15.2343 18.2857 14.9918C17.9335 14.58 17.6083 14.1412 17.3254 13.6581L17.3196 13.6543ZM11.1324 7.52091C11.0535 7.56709 11.0554 7.69223 11.0246 7.78846C10.9457 7.83463 10.9091 7.92314 10.9168 8.05594C10.7667 8.156 10.7109 8.34846 10.6512 8.53709C10.4338 8.80069 10.2895 9.1356 10.0643 9.3896C9.64471 9.94771 9.09243 10.373 8.62477 10.883C8.42842 10.8657 8.32837 10.9427 8.19751 10.9889C8.10128 11.0697 7.89923 11.0447 7.82414 11.1486C7.22757 11.139 6.64831 11.1486 6.11711 11.2025C4.74882 10.9003 3.70189 10.2768 2.86281 9.44154C2.81855 9.27223 2.70693 9.17023 2.59723 9.06823C2.57799 8.89309 2.47214 8.80068 2.38361 8.69486C2.39131 8.56206 2.35667 8.47354 2.27777 8.42931C2.22003 8.04246 2.1546 7.66331 2.11804 7.25537C2.1392 6.52983 2.19116 5.83509 2.33165 5.22885C2.4298 5.13263 2.40093 4.90746 2.49139 4.80162C2.57221 4.70346 2.5472 4.50332 2.65112 4.42826C2.70693 4.12804 2.88976 3.95676 2.97059 3.68156C3.96555 2.93293 4.99131 2.21702 6.6502 2.13426C6.7118 2.14389 6.74643 2.12272 6.75608 2.08038C7.43351 2.1131 7.94157 2.31709 8.62282 2.34789C8.92111 2.45758 9.1386 2.6481 9.4234 2.77512C9.59854 2.99066 9.95842 3.02146 10.1701 3.20236C10.6917 3.83744 11.0342 4.64958 11.2902 5.54832C11.2709 6.24114 11.2421 6.9224 11.1304 7.52091H11.1324ZM11.9311 12.4823C11.9445 12.4245 12.0369 12.4457 12.0388 12.3764C12.1832 12.4245 11.9945 12.6131 11.9311 12.4823ZM16.7846 15.5769C16.6364 15.7308 16.4921 15.8886 16.3574 16.0561C16.1168 16.1003 16.0572 16.3255 15.9301 16.4833C15.7512 16.5353 15.6376 16.6526 15.449 16.6969C15.2565 16.7277 15.1911 16.6353 15.0757 16.5891C14.8775 16.5314 14.9236 16.7219 14.7562 16.6969C14.4906 16.0926 14.1961 15.5153 13.7959 15.0438C13.6053 14.7897 13.4495 14.5011 13.2089 14.2971C13.1647 14.1277 13.053 14.0257 12.9433 13.9237C12.8644 13.7909 12.8105 13.6293 12.6758 13.5503C12.8432 13.4503 13.0549 13.3964 13.2089 13.2848C13.3379 13.1655 13.4822 13.0596 13.6361 12.9653C13.6554 12.8961 13.7304 12.8806 13.7439 12.8056C14.2693 12.8672 14.4309 13.2906 14.864 13.4445C15.2335 13.6274 15.5317 13.8775 15.9301 14.0315C16.2015 14.3837 16.5652 14.6397 16.8366 14.9918C16.8751 15.2439 16.7769 15.3594 16.7827 15.5788L16.7846 15.5769Z"
                    fill="#18010C"
                />
            </svg>
        `,
    };

    const DATA = [
        {
            sectionTitle: "Lieblingsprodukte unserer Kund:innen",
            className: "favorite-products",
            suggestions: [
                {
                    title: "TRIXIE Kinder Trinkflasche personalisiert",
                    link: "https://www.wunderwunsch.de/products/trixie-trinkflasche-tier-mit-name?_pos=1&_sid=c579e4d0b&_ss=r",
                    imgUrl: "https://www.wunderwunsch.de/cdn/shop/files/trixie-kinder-trinkflasche-personalisiert-tiere-wunderwunsch-788317.jpg?v=1744408486&width=400",
                },
                {
                    title: "STAPELWELT Abenteuerbrücke für Stapelstein",
                    link: "https://www.wunderwunsch.de/products/abenteuerbrucke-fur-stapelstein%C2%AE?_pos=1&_sid=180e5e512&_ss=r&variant=50327566680328",
                    imgUrl: "https://www.wunderwunsch.de/cdn/shop/files/stapelwelt-abenteuerbrucke-fur-stapelstein-wunderwunsch-897355.jpg?v=1744406824&width=500",
                },
                {
                    title: "TRIXIE Kindergartenrucksack personalisiert",
                    link: "https://www.wunderwunsch.de/products/trixie-kindergartenrucksack-personalisiert?_pos=1&_sid=5337d88b8&_ss=r",
                    imgUrl: "https://www.wunderwunsch.de/cdn/shop/files/trixie-grosser-kindergartenrucksack-personalisiert-tiere-wunderwunsch-261264.jpg?v=1744408445&width=700",
                },
                {
                    title: "JOLLEIN Schmusetuch personalisiert",
                    link: "https://www.wunderwunsch.de/products/schmusetuch-bar-giraffe-oder-fuchs?_pos=2&_sid=a5dde11b3&_ss=r",
                    imgUrl: "https://www.wunderwunsch.de/cdn/shop/files/trixie-grosser-kindergartenrucksack-personalisiert-tiere-wunderwunsch-261264.jpg?v=1744408445&width=500",
                },
                {
                    title: "Erinnerungs-box Holz mit Wunschdaten",
                    link: "https://www.wunderwunsch.de/products/erinnerungskiste-tiere-farbig?_pos=1&_sid=d39e2a2f4&_ss=r",
                    imgUrl: "https://www.wunderwunsch.de/cdn/shop/products/erinnerungsbox-holz-mit-wunschdaten-tier-aquarell-wunderwunsch-945447.png?v=1758005472&width=500",
                },
            ],
        },
        {
            sectionTitle: "Top Auswahl unserer Kategorien",
            className: "top-selection-of-categories",
            suggestions: [
                {
                    title: "Erinnerungsboxen",
                    link: "https://www.wunderwunsch.de/collections/erinnerungsbox-baby",
                    imgUrl: "https://www.wunderwunsch.de/cdn/shop/products/erinnerungsbox-holz-mit-wunschdaten-tier-aquarell-wunderwunsch-945447.png?v=1758005472&width=500",
                },
                {
                    title: "Nachtlichter",
                    link: "https://www.wunderwunsch.de/collections/nachtlichter",
                    imgUrl: "https://www.wunderwunsch.de/cdn/shop/files/led-nachtlicht-kinder-personalisiert-tiere-blumenkreis-rosa-aquarell-wunderwunsch-422474.jpg?v=1744407817&width=500",
                },
                {
                    title: "Geburt und Taufe",
                    link: "https://www.wunderwunsch.de/collections/geburt-taufe",
                    imgUrl: "https://www.wunderwunsch.de/cdn/shop/products/babyrassel-personalisiert-giraffe-fuchs-lowe-nilpferd-wunderwunsch-391848.webp?v=1744793585&width=500",
                },
                {
                    title: "Stapelwelt",
                    link: "https://www.wunderwunsch.de/collections/stapelwelt",
                    imgUrl: "https://www.wunderwunsch.de/cdn/shop/files/stapelwelt-abenteuer-racer-wunderwunsch-221434.jpg?v=1744406033&width=500",
                },
                {
                    title: "Bundles",
                    link: "https://www.wunderwunsch.de/collections/geschenksets-spar-bundles",
                    imgUrl: "https://www.wunderwunsch.de/cdn/shop/files/starter-geschenkset-lowe-personalisiert-rucksack-lunchbox-flasche-stift-wunderwunsch-1068025.jpg?v=1755638202&width=500",
                },
            ],
        },
        {
            sectionTitle: "Die beliebtesten Marken",
            className: "popular-brands",
            suggestions: [
                {
                    title: "Stapelwelt",
                    link: "https://www.wunderwunsch.de/collections/stapelwelt",
                    imgUrl: "https://cdn-3.convertexperiments.com/uf/1004828/10041371/edbf298b692393f68659729a4a6f183c3984e396_69008aa5ee877.png",
                },
                {
                    title: "Jollein",
                    link: "https://www.wunderwunsch.de/collections/jollein",
                    imgUrl: "https://cdn-3.convertexperiments.com/uf/1004828/10041371/e116212c2bc82cab7b18ca2dc229ed1906e07a7e_69008aa66d1d4.png",
                },
                {
                    title: "Trixie",
                    link: "https://www.wunderwunsch.de/collections/trixie",
                    imgUrl: "https://cdn-3.convertexperiments.com/uf/1004828/10041371/a04b41b9830f66329334347f5035fc39bdd58ca9_69008aa6663f4.png",
                },
                {
                    title: "Small Foot",
                    link: "https://www.wunderwunsch.de/collections/small-foot",
                    imgUrl: "https://cdn-3.convertexperiments.com/uf/1004828/10041371/9c3470a5bbd2e767d79792068affbe1ba11efaf0_69008aa660d42.png",
                },
                {
                    title: "Lässig",
                    link: "https://www.wunderwunsch.de/collections/lassig",
                    imgUrl: "https://cdn-3.convertexperiments.com/uf/1004828/10041371/ef01e3f8f04196d85f7f9bb43fbbab5422933714_69008aa693284.png",
                },
            ],
        },
    ];

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

    function preventScroll(e) {
        if (e.target === document.body || !e.target.closest(".ab-searched-content")) {
            e.preventDefault();
        }
    }

    function handleInputChange(e) {
        const value = e.target.value;

        const elem = q("#predictive-search-form .predictive-search__input");
        elem.value = value;

        elem.dispatchEvent(new Event("input", { bubbles: true }));
        elem.dispatchEvent(new Event("change", { bubbles: true }));
    }

    function handleSearchResultsView(action /* show */) {
        const targetNode = q(".ab-search-bar-section");

        if (action === "show") {
            targetNode.classList.add("ab-search-bar-section__show-search-results");
        } else if (action === "hide") {
            targetNode.classList.remove("ab-search-bar-section__show-search-results");
        }
    }

    function handleSuggestionsView(action /* show, hide */) {
        const body = q("body");

        const selector = page_initials + "--show-suggestions-dropdown";

        if (action === "show") {
            body.classList.add(selector);
            document.addEventListener("touchmove", preventScroll, { passive: false });
        } else if (action === "hide") {
            body.classList.remove(selector);
            document.removeEventListener("touchmove", preventScroll, { passive: false });
        }
    }

    async function mutationObserverFunction() {
        const selector = ".ab-search-bar-section .predictive-search__results";

        await waitForElementAsync(() => q(selector));

        const targetNode = q(selector);

        return new MutationObserver((_) => {
            const action = !targetNode.hasAttribute("hidden") ? "show" : "hide";
            handleSearchResultsView(action);
        }).observe(targetNode, { attributes: true });
    }

    async function createComponent() {
        // Create Layout
        const searchButton = document.createElement("div");
        searchButton.classList.add("ab-toggle-search");
        searchButton.innerHTML = ASSETS.search_icon_svg;

        const backdrop = document.createElement("div");
        backdrop.className = "ab-search-bar-backdrop";

        const searchBarSection = document.createElement("div");
        searchBarSection.className = "ab-search-bar-section";
        searchBarSection.innerHTML = /* HTML */ `
            <div class="ab-search-bar-container">
                <div class="ab-search-bar">
                    <input class="ab-search-bar__input" placeholder="Finde jetzt dein Lieblingsprodukt" />
                    <button type="button" class="ab-search-bar__icon">${ASSETS.search_icon_svg}</button>
                </div>
            </div>
            <div class="ab-suggestions-container">
                ${DATA.map(
                    ({ sectionTitle, className, suggestions }) => /* HTML */ `
                        <div class="ab-suggestions-content ${className}">
                            <div class="ab-suggestions-content__heading">${sectionTitle}</div>
                            <div class="ab-suggestions-content__items">
                                ${suggestions
                                    .map(
                                        ({ title, link, imgUrl }) => /* HTML */ `
                                            <a href="${link}" class="ab-suggestions-content__item">
                                                <div class="ab-suggestions-content__item__img">
                                                    <img src="${imgUrl}" />
                                                </div>
                                                <div class="ab-suggestions-content__item__title">${title}</div>
                                            </a>
                                        `
                                    )
                                    .join("")}
                            </div>
                        </div>
                    `
                ).join("")}
            </div>
            <div class="ab-searched-content"></div>
        `;

        // Insert Elements
        q(".header__icon-list").appendChild(searchButton);
        q(".header").appendChild(backdrop);
        q(".header").appendChild(searchBarSection);
        q(searchBarSection, ".ab-searched-content").appendChild(q("predictive-search-drawer .drawer__content"));
        q(searchBarSection, ".ab-searched-content").appendChild(q("predictive-search-drawer .drawer__footer"));

        // Handle Events & Mutation
        searchButton.addEventListener("click", () => handleSuggestionsView("show"));
        backdrop.addEventListener("click", () => handleSuggestionsView("hide"));

        const inputSelector = "input.ab-search-bar__input";
        await waitForElementAsync(() => q(searchBarSection, inputSelector));
        ["input", "change"].forEach((event) => q(searchBarSection, inputSelector).addEventListener(event, handleInputChange));
        q(searchBarSection, "input.ab-search-bar__input").addEventListener("change", handleInputChange);

        mutationObserverFunction();
    }

    function init() {
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createComponent();
    }

    function hasAllTargetElements() {
        return !!(
            q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) &&
            q(".header") &&
            q("predictive-search-drawer .drawer__content") &&
            q("predictive-search-drawer .drawer__footer") &&
            q("#predictive-search-form .predictive-search__input") &&
            q(".header__icon-list") &&
            q("a.header__icon-wrapper[href='/search']") &&
            document.readyState === "complete"
        );
    }

    try {
        await waitForElementAsync(hasAllTargetElements);
        init();
    } catch (error) {
        console.error(error);
        return false;
    }
})();
