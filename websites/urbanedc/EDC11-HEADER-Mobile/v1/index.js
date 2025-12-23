/* 
Ticket: https://trello.com/c/j2PxXsIC/4531-%F0%9F%92%9B-edc11-header-mobile-add-search-into-header-with-panel-2-set-up-test
Figma: https://www.figma.com/design/ReKRtumDvt1KvlTHNTaS9b/EDC11--Mobile-Search?node-id=2-39&t=ZbKb6ocUX4U7OqN1-0
Test container: https://marketer.monetate.net/control/a-34c408c5/p/urbanedc.com/experience/2077901#c2609543:what

Preview urls:

Excluding All Experiences:
Control: https://marketer.monetate.net/control/preview/13265/8EHM7DIZQHE33VI1E6GPGD6RYRKESO0K/edc11-header-mobile-add-search-into-header-with-panel
V1: https://marketer.monetate.net/control/preview/13265/6ZVJGMFSWYCIQI9MPOHIE5W0JZEDEUNA/edc11-header-mobile-add-search-into-header-with-panel
V2: https://marketer.monetate.net/control/preview/13265/4MLAFQD7KVLEGNIUI4PBT2N2D417JR59/edc11-header-mobile-add-search-into-header-with-panel


Including All Experiences:
Control: https://marketer.monetate.net/control/preview/13265/XIJ57Z5LEZBCTM9JKBWO3IRGSM5QN4I0/edc11-header-mobile-add-search-into-header-with-panel
V1: https://marketer.monetate.net/control/preview/13265/IJFNW5LMXJHM0DNZOGTQGX5OLQDFV8ZJ/edc11-header-mobile-add-search-into-header-with-panel
V2: https://marketer.monetate.net/control/preview/13265/F8D4CZQTTKBTDHVVL9F4EJRJDTZB3J74/edc11-header-mobile-add-search-into-header-with-panel


*/

const TEST_ID = "EDC11";
const VARIANT_ID = "V1"; /* V1, V2 */

function logInfo(message) {
    console.log(
        `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
        "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
        "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
        message
    );
}

logInfo("fired");

(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "urbanedc",
        host: "https://urbanedc.com",
        test_name: "EDC11: [HEADER - Mobile] Add Search Into Header with Panel - (2) SET UP TEST",
        page_initials: "AB-EDC11",
        test_variation: 1 /* 1, 2 */,
        test_version: 0.0001,
    };

    const { host, page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        cross_svg: /* HTML */ `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.649 11.5647L0 10.9157L5.13333 5.78233L0 0.649L0.649 0L5.78233 5.13333L10.9157 0L11.5647 0.649L6.43133 5.78233L11.5647 10.9157L10.9157 11.5647L5.78233 6.43133L0.649 11.5647Z"
                fill="black"
            />
        </svg> `,
        search_svg: /* HTML */ `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.5001 12.5001L9.6048 9.6048M9.6048 9.6048C10.1001 9.10955 10.4929 8.52159 10.761 7.8745C11.029 7.22742 11.1669 6.53387 11.1669 5.83347C11.1669 5.13307 11.029 4.43953 10.761 3.79244C10.4929 3.14535 10.1001 2.5574 9.6048 2.06214C9.10955 1.56688 8.52159 1.17402 7.8745 0.905986C7.22742 0.637954 6.53387 0.5 5.83347 0.5C5.13307 0.5 4.43953 0.637954 3.79244 0.905986C3.14535 1.17402 2.5574 1.56688 2.06214 2.06214C1.06192 3.06236 0.5 4.41895 0.5 5.83347C0.5 7.248 1.06192 8.60458 2.06214 9.6048C3.06236 10.605 4.41895 11.1669 5.83347 11.1669C7.248 11.1669 8.60458 10.605 9.6048 9.6048Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg> `,
    };

    const DATA = {
        featured_collections: [
            {
                title: "Knife",
                link: "https://urbanedc.com/collections/in-stock-knives",
            },
            {
                title: "Patch",
                link: "https://urbanedc.com/collections/urban-edc-ranger-eye-patches",
            },
            {
                title: "Fidget",
                link: "https://urbanedc.com/collections/in-stock-games",
            },
            {
                title: "Mutitool",
                link: "https://urbanedc.com/collections/in-stock-keychains-multitools",
            },
            {
                title: "Flashlight",
                link: "https://urbanedc.com/collections/in-stock-flashlights",
            },
            {
                title: "Lanyard",
                link: "https://urbanedc.com/collections/in-stock-lanyard-beads",
            },
        ],
    };

    function fireGA4Event(eventName, eventLabel = "") {
        console.log("GA4 Event Fired:", eventName, eventLabel);
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

    async function fetchAndParseURLApi(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const html = await response.text();

            const dom = new DOMParser().parseFromString(html, "text/html");

            return dom;
        } catch (error) {
            // console.error("Fetch and parse failed:", error);
            return null;
        }
    }

    async function getGearDropData() {
        const doc = await fetchAndParseURLApi(host);
        const targetSection = qq(doc, "section").find((section) =>
            qq(section, "h2.font-heading.text-heading-standard.break-words").some((h2) => h2.innerText.includes("This Week's Gear Drop:"))
        );

        return qq(targetSection, "ul.carousel-track.flex.overflow-x-scroll.scroll-smooth.gap-media-grid.items-start.snap-x.snap-mandatory.snap-always.relative li").map((item) => ({
            title: q(item, ".break-words")?.innerText?.trim(),
            link: q(item, "a").getAttribute("href"),
            imgUrl: q(item, "img.tile-media").getAttribute("src"),
        }));
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

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function animate(targetElement, className, interval) {
        if (!targetElement) return;
        if (className.includes(".")) className.replace(".", "");
        targetElement.classList.add(className);
        setTimeout(() => targetElement.classList.remove(className), interval);
    }

    function preventScroll(e) {
        if ((e.target === document.body || document.body.contains(e.target)) && !e.target.closest(".AB-EDC11__modal__gear-drop-items")) {
            e.preventDefault();
        }
    }

    function handleModalView(action = "show") {
        const modalShowClass = `${page_initials}--modal-show`;
        const body = document.body;

        const modal = q(`.${page_initials}__modal`);
        if (action === "show" && !body.classList.contains(modalShowClass)) {
            animate(modal, "slide-bottom", 200);
            modal.classList.add("slide-bottom");
            body.classList.add(modalShowClass);
            document.addEventListener("touchmove", preventScroll, { passive: false });
        }

        if (action === "hide") {
            animate(modal, "slide-top", 200);
            setTimeout(() => body.classList.remove(modalShowClass), 200);
            document.removeEventListener("touchmove", preventScroll);
        }
    }

    async function createLayout() {
        const gear_drop_data = await getGearDropData();

        // Search Open Cta
        q(".row-start-1.lg\\:col-span-item.lg\\:col-end-\\[-1\\] > .flex.flex-wrap.justify-end.items-top.gap-5").insertAdjacentHTML(
            "afterbegin",
            `<div class="${page_initials}__modal__show-cta uppercase js-enabled block lg:hidden" type="button">Search</div>`
        );

        // Modal
        q("body").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="${page_initials}__modal-layout">
                    <div class="${page_initials}__modal-backdrop"></div>
                    <div class="${page_initials}__modal">
                        <div class="${page_initials}__modal__container">
                            <div class="${page_initials}__modal__top">
                                <div class="${page_initials}__modal__search">
                                    <button class="${page_initials}__modal__search-cta" type="button">${ASSETS.search_svg}</button>
                                    <input id="ab-search" type="search" class="${page_initials}__modal__search-input" placeholder="Search" autocomplete="off" />
                                </div>
                                <button class="${page_initials}__modal__close-cta" type="button">${ASSETS.cross_svg}</button>
                            </div>
                            <div class="${page_initials}__modal__gear-drop-container">
                                <div class="${page_initials}__modal__gear-drop-title">This Week's Gear Drop</div>
                                <div class="${page_initials}__modal__gear-drop-items">
                                    ${gear_drop_data
                                        .map(
                                            ({ title, link, imgUrl }) => /* HTML */ `
                                                <a href="${host + link}" class="${page_initials}__modal__gear-drop-item">
                                                    <span class="${page_initials}__modal__gear-drop-item-img"><img src="${imgUrl}" alt="${title}" /></span>
                                                    <span class="${page_initials}__modal__gear-drop-item-title">${title}</span>
                                                </a>
                                            `
                                        )
                                        .join("")}
                                </div>
                            </div>
                            <div class="${page_initials}__modal__featured-collections-container">
                                <div class="${page_initials}__modal__featured-collections-title">Featured Collections</div>
                                <div class="${page_initials}__modal__featured-collections">
                                    ${DATA.featured_collections.map(({ title, link }) => `<a href="${link}" class="${page_initials}__modal__featured-item"> ${title} </a>`).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        );
    }

    const clickEventName = isTouchEnabled() ? "touchend" : "click";


    function handleSearch(e) {
        const currentTarget = e.currentTarget;
        
        e.preventDefault();
        fireGA4Event("EDC11_ClickedSearch");
        
        const parentNode = currentTarget.parentNode;
        const searchInput = q(parentNode, "input[type='search']");
        const value = searchInput.value.replace(" ", "+");

        setTimeout(() => (window.location.href = `/search?q=${value}`), 150);
    }

    const INITIAL_ACTION_LIST = [
        {
            selector: `.${page_initials}__modal__show-cta`,
            event: clickEventName,
            callback: (e) => {
                e.preventDefault();
                e.stopPropagation();
                handleModalView("show");
            },
        },
        {
            selector: `.${page_initials}__modal__close-cta`,
            event: clickEventName,
            callback: (e) => handleModalView("hide"),
        },
        {
            selector: `.${page_initials}__modal-backdrop`,
            event: clickEventName,
            callback: (e) => {
                if (!e.target.closest(`.${page_initials}__modal`)) {
                    handleModalView("hide");
                }
            },
        },
        {
            selector: `.${page_initials}__modal__search-cta`,
            event: clickEventName,
            callback: handleSearch,
        },
        {
            selector: `form[action="/search"] button[aria-label="Search"]`,
            event: clickEventName,
            callback: handleSearch,
        },
        {
            selector: `.${page_initials}__modal__featured-item`,
            event: clickEventName,
            callback: (e) => {
                e.preventDefault();
                fireGA4Event("EDC11_ClickedCategory", e.target.innerText);
                setTimeout(() => (window.location.href = e.target.getAttribute("href")), 150);
            },
        },
    ];

    function eventHandler(action_list) {
        action_list.forEach(async ({ selector, event, callback }) => {
            const flagClassName = `ab-${event})-attached`;
            await waitForElementAsync(() => qq(selector).length > 0, 5000, 200);
            qq(selector).forEach((item) => {
                if (item.classList.contains(flagClassName)) return;
                item.classList.add(flagClassName);
                item.addEventListener(event, callback);
            });
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
        eventHandler(INITIAL_ACTION_LIST);
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) &&
            q(".row-start-1.lg\\:col-span-item.lg\\:col-end-\\[-1\\]") &&
            q('#DrawerMenu form[action="/search"] button[aria-label="Search"]')
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
