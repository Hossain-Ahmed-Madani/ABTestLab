(async () => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        host: "https://seatplan.com",
        test_name: "[ECX - 193] VSP - Mobile - Offer bar on sticky CTA V2 - enhanced offer text",
        page_initials: "AB-EXP-193",
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

    function formatDateToOrdinal(dateString) {
        const date = new Date(dateString);

        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "long" });

        const getOrdinal = (n) => {
            if (n > 3 && n < 21) return "th";
            switch (n % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        };

        return `${day}${getOrdinal(day)} ${month}`;
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function init() {
        if (window[page_initials]) return;

        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        console.table(TEST_CONFIG);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".city-nav__container"));
    }

    await waitForElementAsync(checkForItems);
    init();
})();
