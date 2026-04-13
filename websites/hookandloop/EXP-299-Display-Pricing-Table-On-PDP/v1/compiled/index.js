(async () => {
    const TEST_CONFIG = {
        client: "Hook and Loop",
        project: "Hook and Loop",
        site_url: "https://www.hookandloop.com/",
        test_name: "Hook & Loop 299 - A/B test idea - Display pricing table on PDP instead of single price.",
        page_initials: "AB-EXP-299",
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

    function createLayout() {

        const productActionNode = q(".flex.flex-col.sm\\:flex-row.md\\:flex-col.xl\\:flex-row.items-end.my-4 > .w-full.sm\\:max-w-\\[250px\\]");

       productActionNode.insertAdjacentElement('beforeend', q('.flex.flex-row.gap-2.flex-wrap.items-center.my-6.justify-end.font-bold'));
       productActionNode.insertAdjacentElement('beforeend', q("#trust_signal"));
    }


    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q(".flex.flex-col.sm\\:flex-row.md\\:flex-col.xl\\:flex-row.items-end.my-4 > .w-full.sm\\:max-w-\\[250px\\]") && q("#trust_signal") && q('.flex.flex-row.gap-2.flex-wrap.items-center.my-6.justify-end.font-bold')
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
