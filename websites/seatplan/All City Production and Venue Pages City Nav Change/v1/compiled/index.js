(async () => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        site_url: "https://seatplan.com/",
        test_name: "All | City, Production and Venue Pages | City Nav Change",
        page_initials: "AB-ECX-162-CITY-NAV",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const DATA = [
        {
            title: "Musicals",
            link: "whats-on/musicals/",
        },
        {
            title: "Plays",
            link: "whats-on/plays/",
        },
        {
            title: "Christmas",
            link: "whats-on/christmas/",
        },
        {
            title: "Kids",
            link: "whats-on/kids/",
        },
        {
            title: "Opera",
            link: "whats-on/opera/",
        },
    ];

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

    function getCityFromDataLayer() {
        const pageViewEvent = window?.dataLayer.find((item) => item?.eventName === "page_view" && item?.eventPayload?.content_city);
        return pageViewEvent?.eventPayload?.content_city.toLowerCase().replace(" ", "-") || null;
    }

    function createLayout() {
        const city = getCityFromDataLayer();
        const host = "https://seatplan.com";

        if (!city) return;

        q(".city-nav__list").insertAdjacentHTML(
            "beforeend",
            /* HTML */ `
                <li class="city-nav__item"><a class="city-nav__link" href="${host}/${city}/venues/" data-js="city-nav-city-link">Theatres</a></li>
                <li class="city-nav__item"><a class="city-nav__link" href="${host}/${city}/news/" data-js="city-nav-city-link">News</a></li>
            `
        );

        console.log("City detected:", city);

        q(".city-nav").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-sub-nav">
                    <div class="ab-sub-nav__container container">
                        <ul class="ab-sub-nav__list ${city !== "london" ? "ab-sub-nav__list--align-center" : ""}">
                            ${DATA.map(({ title, link }) => {
                                if (city !== "london" && (link.includes("christmas") || link.includes("opera"))) {
                                    return "";
                                }

                                return /* HTML */ `
                                    <li class="ab-sub-nav__item">
                                        <a class="ab-sub-nav__link" href="${host}/${city}/${link}">${title}</a>
                                    </li>
                                `;
                            }).join("")}
                        </ul>
                    </div>
                </div>
            `
        );
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
    }

    function checkForItems() {
        return !!(
            window?.dataLayer.some((item) => item?.eventName === "page_view" && item?.eventPayload?.content_city) &&
            q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) &&
            q(".city-nav")
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
