(async () => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        host: "https://seatplan.com",
        test_name: "[ECX - 185] London pages excluding TSMs - Change City Nav",
        page_initials: "GLOBAL-ECX-185",
        test_variation: 1,
        test_version: 0.0003,
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

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        q(".city-nav__container").addEventListener("click", (e) => {
            if (e.target.closest("a, button span")) {
                console.log("Goal: Select city nav item | JS");
                window._conv_q = window._conv_q || [];
                _conv_q.push(["triggerConversion", "1004109462"]);
            }
        });

        qq(".city-nav__item > button").forEach((item) => {
            console.log("item", item);
            item.addEventListener("click", (e) => {
                console.log("Goal: Select city nav item | JS");
                window._conv_q = window._conv_q || [];
                _conv_q.push(["triggerConversion", "1004109462"]);
            });
        });
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".city-nav__container"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
