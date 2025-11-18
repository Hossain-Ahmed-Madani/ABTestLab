/* 
Ticket: https://trello.com/c/lQarYbLO/4374-all-city-production-and-venue-pages-city-nav-change?filter=label%3ATeam+Titans

Container: https://app.convert.com/accounts/1004737/projects/1004631/experiences/1004176421/summary
v1: https://seatplan.com/london/?_conv_eforce=1004176421.1004415730&utm_campaign=qa5
v1 preview: https://seatplan.com/london/?convert_action=convert_vpreview&convert_e=1004176421&convert_v=1004415730

*/

(async () => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        host: "https://seatplan.com",
        test_name: "All | City, Production and Venue Pages | City Nav Change",
        page_initials: "AB-ECX-162-CITY-NAV",
        test_variation: 1,
        test_version: 0.0003,
    };

    const { host, page_initials, test_variation, test_version } = TEST_CONFIG;

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

    function isTargetCityUrl() {
        const CITY_URL_REGEX = /^https?:\/\/(?:www\.)?seatplan\.com\/(london|new\-york)(?:\/(?:whats-on(?:\/.*)?)?)?(?:[?#].*)?$/i;
        try {
            return CITY_URL_REGEX.test(window.location.href);
        } catch (e) {
            return false;
        }
    }

    function createLayout() {
        const city = getCityFromDataLayer();

        if (!city) return;

        q(".city-nav__list").insertAdjacentHTML(
            "beforeend",
            /* HTML */ `
                <li class="city-nav__item"><a class="city-nav__link" href="${host}/${city}/venues/" data-js="city-nav-city-link">Theatres</a></li>
                <li class="city-nav__item"><a class="city-nav__link" href="${host}/${city}/news/" data-js="city-nav-city-link">News</a></li>
            `
        );

        if (!isTargetCityUrl()) return;

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
        return true;
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
