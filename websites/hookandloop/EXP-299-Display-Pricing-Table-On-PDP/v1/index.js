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
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    let basePricePerQuantity = 0;
    let currentSelectedQuantity = 0;

    function getPricingTableLayout() {
        basePricePerQuantity = +q(".price[x-html='getFormattedFinalPrice()']").textContent.replace("$", "").replace(",", "");
        currentSelectedQuantity = +q('.product-info-main  input[name="qty"]').value ?? 1;
        let activeQuantity;

        const data = qq(".discount-box ul li").reduce((acc, li) => {
            const quantity = +q(li, '.roll-no span[x-text="discount.qty"]').textContent ?? 0;
            const savePercentage = +q(li, '.save_percent span[x-text="discount.discount"]').textContent ?? 0;

            if (!activeQuantity && currentSelectedQuantity <= quantity) {
                activeQuantity = quantity;
            }

            acc.push({
                unit: q(li, '.roll-no span[x-text="discount.unit"]').textContent ?? "",
                quantity: quantity,
                discountedPrice: quantity * basePricePerQuantity * (1 - savePercentage / 100),
                "price-per-yard": "",
                saveAmount: (quantity * basePricePerQuantity * (savePercentage / 100)).toFixed(2),
                savePercentage: savePercentage,
            });

            return acc;
        }, []);

        return /* HTML */ `
            <div class="ab-pricing-table">
                <div class="ab-pricing-table__sub-header">✦ Add ${currentSelectedQuantity - data[0].quantity} more roll to unlock ${data[0].savePercentage}% off</div>
                <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--mobile">
                    ${data
                        .map(
                            ({ savePercentage, quantity, unit, discountedPrice, pricePerYard, saveAmount }, index) => /* HTML */ `
                                <li class="ab-pricing-table__pricing__item ${activeQuantity === quantity ? "ab-pricing-table__pricing__item--active" : ""}">
                                    <div class="ab-pricing-table__pricing__save-percentage">-${savePercentage}%</div>
                                    <div class="ab-pricing-table__pricing__quantity">${quantity}+ ${unit}</div>
                                    <div class="ab-pricing-table__pricing__price">$${discountedPrice.toFixed(2)}</div>
                                    ${pricePerYard ? `<div class="ab-pricing-table__pricing__price-per-yard">(${pricePerYard.toFixed(2)}/yard)</div>` : ""}
                                    <div class="ab-pricing-table__pricing__save">You save $${saveAmount}</div>
                                </li>
                            `,
                        )
                        .join("")}
                </ul>
                <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--desktop">
                    ${data
                        .map(
                            ({ quantity, unit, discountedPrice, pricePerYard, saveAmount, savePercentage }, index) => /* HTML */ `
                                <li class="ab-pricing-table__pricing__item ${activeQuantity === quantity ? "ab-pricing-table__pricing__item--active" : ""}">
                                    <div class="ab-pricing-table__pricing__left">
                                        <div class="ab-pricing-table__pricing__quantity">Buy ${quantity}+ ${unit}</div>
                                        <div class="ab-pricing-table__pricing__save-container">
                                            <div class="ab-pricing-table__pricing__save">You save $${saveAmount}</div>
                                            <div class="ab-pricing-table__pricing__save-percentage">-${savePercentage}%</div>
                                        </div>
                                    </div>
                                    <div class="ab-pricing-table__pricing__right">
                                        <div class="ab-pricing-table__pricing__price">$${discountedPrice.toFixed(2)}</div>
                                        ${pricePerYard ? `<div class="ab-pricing-table__pricing__price-per-yard">(${pricePerYard.toFixed(2)}/yard)</div>` : ""}
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
        `;
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
                    ${getPricingTableLayout()}
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
            q(".flex.flex-row.gap-2.flex-wrap.items-center.my-6.justify-end.font-bold") &&
            q(".price[x-html='getFormattedFinalPrice()']") &&
            q(".discount-box") &&
            document.readyState === "complete"
        );
    }

    waitForElementAsync(checkForItems).then(() => {
        init();
    });
})();

// NEED TO LOOK INTO THIS DURING FUNCTIONALITY IMPLEMENTATION
{
    /* <p class="text-[18px]" x-show="getQtyForMoreDiscount()">
    Order <span x-text="getQtyForMoreDiscount()">11</span>
    more and{" "}
    <span class="text-hnleb0 font-bold">
        Save <span x-text="getMoreDiscountAmount()">$12.60</span>!
    </span>
</p>; */
}
