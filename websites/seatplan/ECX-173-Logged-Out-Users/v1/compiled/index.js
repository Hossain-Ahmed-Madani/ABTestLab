/* 
Test container: https://app.convert.com/accounts/1004737/projects/1004631/experiences/1004187832/summary
control:  https://seatplan.com/?_conv_eforce=1004187832.1004441781&utm_campaign=qa5
v1: https://seatplan.com/?_conv_eforce=1004187832.1004441782&utm_campaign=qa5


*/

(async () => {
    const TEST_CONFIG = {
        client: "SeatPlan",
        project: "SeatPlan",
        site_url: "https://www.example.com",
        test_name: "[ECX - 173] Logged Out Users | Header | Shaking Error Icon on Avatar",
        page_initials: "AB-ECX-173",
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
        return document.querySelector(s);
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        q("#loggedout-control").insertAdjacentHTML("beforeend", `
            <span class="icon-user-warning sp-icon sp-icon-counter-1 sp-icon--filled avatar-error-icon ab-error-icon-animation"></span>
        `);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q("#loggedout-control"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
