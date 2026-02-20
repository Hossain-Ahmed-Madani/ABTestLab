/* 

Related test container: https://app.convert.com/accounts/1004737/projects/1004631/experiences/1004184049/summary
Forced Variation of related test :
https://seatplan.com/london/lion-king-tickets/?_conv_eforce=1004184049.1004432804



Ticket: https://trello.com/c/CBB5IemQ/4759-ecx-176-vsp-append-bookseatid-to-tsm-url-for-blurry-users?filter=label%3ATeam+Titans

Test container: https://app.convert.com/accounts/1004737/projects/1004631/experiences/1004188045/summary
v1: https://seatplan.com/london/abba-arena-venue/seating-plan/?_conv_eforce=1004188045.1004442313&utm_campaign=qa5


*/

(async () => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        site_url: "https://seatplan.com",
        test_name: "[ECX - 176] VSP - Append ?bookSeatId= to TSM URL for Blurry Users",
        page_initials: "AB-ECX-176",
        test_variation: 1,
        test_version: 0.0002,
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

    async function updateRealSeatViewModal() {
        try {
            await waitForElementAsync(() => q(".sp-overlay[data-cy='sp-modal-overlay']"));
            q(".sp-overlay[data-cy='sp-modal-overlay'] .sp-modal-navigation__close").click();
        } catch (error) {
            return false;
        }
    }

    async function updateErrorModal() {
        try {
            await waitForElementAsync(() => q(".c-modal-base__content-wrapper"));
            const targetNode = q(".c-modal-base__content-wrapper");
            if (q(targetNode, ".c-error-modal-template__error-message-text")?.textContent?.trim().includes("Sorry, your selected seat")) {
                q(targetNode, "a.c-generic-button").click();
            } else {
                q("body").classList.add(`${page_initials}--show-error-modal`);
            }
        } catch (error) {
            return false;
        }
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        const currentURL = window.location.href;

        if (currentURL.includes("#s")) {
            appendParamsWithoutReload({
                bookSeatId: window.location.hash?.replace("#s", ""),
            });
        }

        updateErrorModal();
        updateRealSeatViewModal();
    }

    function checkForItems() {
        return !!(
            q(`body.body-booking-path--ticketing:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            window.location.href.includes("/tickets/") &&
            (window.location.href.includes("am") || window.location.href.includes("pm"))
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
