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

    async function createComponent() {
        const gear_drop_data = await getGearDropData();

        // Search Open Cta
        q(".row-start-1.lg\\:col-span-item.lg\\:col-end-\\[-1\\] > .flex.flex-wrap.justify-end.items-top.gap-5").insertAdjacentHTML(
            "afterbegin",
            `<button class="${page_initials}__modal__show-cta uppercase js-enabled block lg:hidden" type="button">Search</button>`
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
                                    <input id="ab-search" type="text" class="${page_initials}__modal__search-input" placeholder="Search" />
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

        // Event Listeners
        q(`.${page_initials}__modal__show-cta`).addEventListener("click", () => handleModalView("show"));
        q(`.${page_initials}__modal__close-cta`).addEventListener("click", () => handleModalView("hide"));
        q(`.${page_initials}__modal__search-cta`).addEventListener("click", () => q('#DrawerMenu form[action="/search"] button[aria-label="Search"]').click());
        q(`.${page_initials}__modal__search-input`).addEventListener("input", (e) => {
            const targetInput = q('#DrawerMenu form[action="/search"] input[type="search"][name="q"]');
            targetInput.value =  e.target.value;        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createComponent();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) &&
            q("  .row-start-1.lg\\:col-span-item.lg\\:col-end-\\[-1\\]") &&
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
