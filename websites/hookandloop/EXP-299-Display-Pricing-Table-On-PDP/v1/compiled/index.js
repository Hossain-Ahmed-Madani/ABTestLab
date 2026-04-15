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

        productActionNode.insertAdjacentElement("beforeend", q(".flex.flex-row.gap-2.flex-wrap.items-center.my-6.justify-end.font-bold"));
        productActionNode.insertAdjacentElement("beforeend", q("#trust_signal"));

        q(".flex.flex-col.sm\\:flex-row.md\\:flex-col.xl\\:flex-row.items-end.my-4 > div[role='group']").insertAdjacentHTML(
            "beforeend",
            /* HTML */ `
                <div class="ab-pricing-table-wrapper">
                    <div class="ab-pricing-header">
                        <div class="ab-pricing-header__left">Volume Discount</div>
                        <div class="ab-pricing-header__right">Auto-applied at checkout</div>
                    </div>
                    <div class="ab-pricing-table">
                        <div class="ab-pricing-table__sub-header">✦ Add 11 more roll to unlock 10% off</div>
                        <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--mobile">
                            ${Array.from({ length: 3 })
                                .map(
                                    (_, index) => `
                                    <li class="ab-pricing-table__pricing__item">
                                
                                    <div class="ab-pricing-table__pricing__save-percentage">-10%</div>
                                            <div class="ab-pricing-table__pricing__roll-count">6 ROLLS+</div>
                                            <div class="ab-pricing-table__pricing__price">$11.25</div>
                                            <div class="ab-pricing-table__pricing__price-per-yard">($0.45/yard)</div>
                                            <div class="ab-pricing-table__pricing__save">You save $25.00</div>
                                    </li>
                                    `,
                                )
                                .join("")}
                        </ul>
                        <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--desktop" style="border:1px solid red;">
                            ${Array.from({ length: 3 })
                                .map(
                                    (_, index) => `
                                    <li class="ab-pricing-table__pricing__item">
                                        <div class="ab-pricing-table__pricing__left">
                                            <div class="ab-pricing-table__pricing__roll-count">6 ROLLS+</div>
                                            <div class="ab-pricing-table__pricing__save">You save $25.00</div>
                                            <div class="ab-pricing-table__pricing__save-percentage">-10%</div>
                                        </div>
                                        <div class="ab-pricing-table__pricing__item__right">
                                            <div class="ab-pricing-table__pricing__price">$11.25</div>
                                            <div class="ab-pricing-table__pricing__price-per-yard">($0.45/yard)</div>
                                        </div>
                                    </li>
                                    `,
                                )
                                .join("")}
                        </ul>
                        <div class="ab-pricing-table__footer">
                            <div class="ab-pricing-table__footer__left"></div>
                            <div class="ab-pricing-table__footer__right">
                                <a href="https://www.hookandloop.com/price-sheet?sku=Fasteners-DG-Sew-On" target="_blank" class="">See Full Price List →</a>
                            </div>
                        </div>
                    </div>
                </div>
            `,
        );
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q(".flex.flex-col.sm\\:flex-row.md\\:flex-col.xl\\:flex-row.items-end.my-4 > .w-full.sm\\:max-w-\\[250px\\]") &&
            q("#trust_signal") &&
            q(".flex.flex-row.gap-2.flex-wrap.items-center.my-6.justify-end.font-bold")
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
