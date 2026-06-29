(async () => {
    const TEST_CONFIG = {
        client: "Converted",
        project: "One Day Tests",
        site_url: "https://onedaytests.com",
        test_name: "ODT113 - Subscription on Cholesterol Test",
        page_initials: "AB-ODT113",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        subscription_header_arrow: /* HTML */ `
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.6443 7.86464L1.77876 13.5097C0.821894 14.0565 -0.301551 13.1125 0.0743705 12.0766L1.96885 6.8352L0.0743705 1.59379C-0.301551 0.555709 0.821894 -0.386174 1.77876 0.160592L11.6443 5.80565C12.443 6.2606 12.441 7.40969 11.6443 7.86464Z"
                    fill="black"
                />
            </svg>
        `,
    };

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
        q(".paywhirl-info-popup").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-subscription-dropdown ab-subscription-dropdown--collapsed">
                    <div class="ab-subscription-dropdown__header">
                        <span class="ab-subscription-dropdown__header__icon">${ASSETS["subscription_header_arrow"]}</span>
                        <span class="ab-subscription-dropdown__header__text">About subscriptions</span>
                    </div>
                    <div class="ab-subscription-dropdown__body">
                        <p class="ab-subscription-dropdown__body__text">
                            When you purchase a subscription we will deliver your home test kits or allow you to book appointments in line with your chosen frequency. You will be able
                            to track your biomarkers over time in our powerful Health Dashboard. There is a minimum of 3 tests with a subscription, after that you can cancel any time.
                            You will be charged at the frequency of the plan.
                        </p>
                    </div>
                </div>
            `,
        );

        q('.paywhirl-plan-selector-description.paywhirl-plan-selector-content').insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-description">
                    <div class="ab-description__title">The best way to look after your health is to do so continuously.</div>
                    <div class="ab-description__sub-title">Your easy, hassle-free way to continually monitor your health with our subscription plans.</div>
                    <ul class="ab-description__list">
                        <li class="ab-description__list-item">Choose your frequency and we will do the rest.</li>
                        <li class="ab-description__list-item">All of your results will be automatically updated in your Health Dashboard.</li>
                        <li class="ab-description__list-item">Pause and restart any time.</li>
                        <li class="ab-description__list-item">Available for home test or in-clinic test (clinic appointment not included).</li>
                    </ul>
                </div>
            `,
        );

    }

    function clickFunction() {
        q(".ab-subscription-dropdown__header").addEventListener("click", (e) => {
            q(".ab-subscription-dropdown").classList.toggle("ab-subscription-dropdown--collapsed");
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        createLayout();
        clickFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".paywhirl-info-popup") && q('.paywhirl-plan-selector-description.paywhirl-plan-selector-content'));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
