/* 

Ticket: https://trello.com/c/xtNT8IjG/5011-ecx-185-london-pages-excluding-tsms-change-city-nav?filter=label%3ATeam+Titans
Test container:  https://app.convert.com/accounts/1004737/projects/1004631/experiences/1004192908/summary

Forced Variation URLs:

control:    https://seatplan.com/london/?_conv_eforce=1004192908.1004453586&utm_campaign=qa5
variation:  https://seatplan.com/london/?_conv_eforce=1004192908.1004453587&utm_campaign=qa5

*/

(async () => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        host: "https://seatplan.com",
        test_name: "[ECX - 185] London pages excluding TSMs - Change City Nav",
        page_initials: "AB-ECX-185",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { host, page_initials, test_variation, test_version } = TEST_CONFIG;

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

    function injectStyles() {
        const style = document.createElement('style');
        style.id = `${page_initials}-styles`;
        style.textContent = `
            .AB-ECX-185 .ab-hidden {
                display: none;
            }  
        `;
        document.head.appendChild(style);
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        const currentURL = window.location.href;
        let currentCity;

        if (currentURL.includes("london")) {
            currentCity = "london";
        } else if (currentURL.includes("new-york")) {
            currentCity = "new-york";
        }

        if (!currentCity) return;

        qq(".city-nav__list > li.city-nav__item:not(:first-child)").forEach((item) => {
            if (q(item, ":scope > a.city-nav__link")) {
                item.classList.add("ab-hidden");
            }
        });

        const targetNode = q(".city-nav__list > li.city-nav__item:has(button[data-target='nav-more-links']");

        q(targetNode, ":scope > button").innerText = "More Shows...";

        targetNode.insertAdjacentHTML(
            "beforebegin",
            [
                { title: "Musicals", link: `${host}/${currentCity}/whats-on/discounts/` },
                { title: "Plays", link: `${host}/${currentCity}/news/` },
                { title: "Deals", link: `${host}/${currentCity}/whats-on/discounts/` },
                { title: "Last Minute", link: `${host}/${currentCity}/whats-on/last-minute/` },
            ]
                .map(
                    ({ title, link }) =>
                        /* HTML */ ` 
                        <li class="city-nav__item ">
                            <a class="city-nav__link" href="${link}">${title}</a>
                        </li>`
                ).join("")
        );

        targetNode.insertAdjacentHTML(
            "afterend",
            /* HTML */ `
            <li class="city-nav__item">
                <a class="city-nav__link" href="${host}/${currentCity}/news/">News</a>
            </li>
        `);

        const targetNodeTwo = q("#nav-more-links");
        qq(targetNodeTwo, ":scope > li.city-nav__city").forEach((item) => item.classList.add("ab-hidden"));
        targetNodeTwo.insertAdjacentHTML(
            "beforeend",
            [
                { title: "All Shows", link: `${host}/${currentCity}/` },
                { title: "Kids", link: `${host}/${currentCity}/whats-on/kids/` },
                { title: "Christmas", link: `${host}/${currentCity}/whats-on/christmas/` },
                { title: "Opera", link: `${host}/${currentCity}/whats-on/opera/` },
                { title: "Theatres", link: `${host}/${currentCity}/venues/` },
                { title: `Best Play In ${currentCity === "london" ? "London" : "New York"}`, link: `${host}/${currentCity}/discover/best-plays/` },
                { title: 'Best Musicals', link: `${host}/${currentCity}/discover/best-musicals/` },
            ].map(
                ({ title, link }) => /* HTML */ `
                    <li class="city-nav__city">
                        <a class="city-nav__city-link" href="${link}">${title}</a>
                    </li>
                `
            ).join("")
        );
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".city-nav__list"));
    }

    try {
        await waitForElementAsync(checkForItems);
        injectStyles();
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
