(async () => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        site_url: "https://seatplan.com",
        test_name: "[ECX - 176] VSP - Append ?bookSeatId= to TSM URL for Blurry Users",
        page_initials: "AB-ECX-176",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

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

    function appendParamsWithoutReload(param, value) {
        const url = window.location.href;
        const [base, hash] = url.split("#");
        const [path, existingQuery = ""] = base.split("?");
        const params = new URLSearchParams(existingQuery);
        if (typeof param === "string") params.set(param, value != null ? String(value) : "");
        else if (param && typeof param === "object") Object.entries(param).forEach(([name, val]) => params.set(name, val != null ? String(val) : ""));
        const queryString = params.toString();
        const newUrl = queryString ? `${path}?${queryString}${hash ? "#" + hash : ""}` : path + (hash ? "#" + hash : "");
        window.history.replaceState({}, "", newUrl);
    }

    // appendParamsWithoutReload({
    //     bookSeatId: window.location.hash?.replace("s", "") ?? "",
    // });

    // currentURL.includes("/tickets/") && (currentURL.includes("am") || currentURL.includes("pm"))

    async function closeRealSeatViewModal() {
        await waitForElementAsync(() => q(".sp-overlay[data-cy='sp-modal-overlay']"));
        q(".sp-overlay[data-cy='sp-modal-overlay'] .sp-modal-navigation__close").click();
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        const currentURL = window.location.href;

        if (!(currentURL.includes("/tickets/") && (currentURL.includes("am") || currentURL.includes("pm")))) return;

        if (currentURL.includes("#s")) {
            appendParamsWithoutReload({
                bookSeatId: window.location.hash?.replace("s", "") ?? "",
            });
        }

        closeRealSeatViewModal();

    }

    function checkForItems() {
        return !!q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`);
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
