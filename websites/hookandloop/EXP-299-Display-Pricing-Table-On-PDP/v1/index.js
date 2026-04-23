/* 

Test container: https://app.varify.io/dashboard?msg=experiment-created&experiment_id=34857&variation_id=52180&search=Hook+%26+Loop+299+-+A%2FB+test+idea+-+Display+pricing+table+on+PDP+instead+of+single+price
Forced Variation: https://www.hookandloop.com/brands/duragrip/sew-on/?varify-force=34857-52180

*/

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

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    let startingPrice;
    let pricePerYard;
    let currentSelectedQuantity;
    let soldInSize;
    let closestQuantityToApplyDiscount;
    let link

    function getPricingTableLayout() {
        pricePerYard = +q(" span[x-html='getPerYardPrice()']").textContent.replace("$", "");
        currentSelectedQuantity = +q('.product-info-main  input[name="qty"]').value ?? 1;
        soldInSize = currentSelectedQuantity; /* Initially soldInSize can be determined by initial quantity of the product */
        startingPrice = +q(".price[x-html='getFormattedFinalPrice()']").textContent.replace("$", "").replace(",", "") / soldInSize;
        link = q(".discount-box ul li a.text-black").getAttribute("href");

        const data = qq(".discount-box ul li").reduce((acc, li) => {
            const controlPriceTableQuantity = +q(li, '.roll-no span[x-text="discount.qty"]').textContent ?? 0;
            const discount = +q(li, '.save_percent span[x-text="discount.discount"]').textContent ?? 0;

            if (currentSelectedQuantity >= controlPriceTableQuantity) {
                closestQuantityToApplyDiscount = controlPriceTableQuantity;
            }

            acc.push({
                unit: q(li, '.roll-no span[x-text="discount.unit"]').textContent ?? "",
                quantity: controlPriceTableQuantity,
                discountedPrice: (startingPrice - (startingPrice * (discount / 100))) * controlPriceTableQuantity,
                discountPerYard: pricePerYard - pricePerYard * (discount / 100),
                saveAmount: (controlPriceTableQuantity * startingPrice * (discount / 100)).toFixed(2),
                saveAmount: (controlPriceTableQuantity * startingPrice * (discount / 100)).toFixed(2),
                discount: discount,
            });

            return acc;
        }, []);

        return /* HTML */ `
            <div class="ab-pricing-table">
                <div class="ab-pricing-table__sub-header">
                    ✦ Add <span class="ab-quantity-to-unlock">${data[0].quantity - currentSelectedQuantity}</span> more roll to unlock
                    <span class="ab-save-percentage-to-unlock">${data[0].discount}%</span> off
                </div>
                <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--mobile">
                    ${data
                        .map(
                            ({ discount, quantity, unit, discountedPrice, discountPerYard, saveAmount }) => /* HTML */ `
                                <li class="ab-pricing-table__pricing__item">
                                    <div class="ab-pricing-table__pricing__save-percentage">-${discount}%</div>
                                    <a href="${link}" class="ab-pricing-table__pricing__quantity"><span class="ab-quantity">${quantity}</span>+ <span class="ab-unit">${unit}</span></a>
                                    <a href="${link}" class="ab-pricing-table__pricing__price">$${discountedPrice.toFixed(2)}</a>
                                    ${discountPerYard > 0 ? `<div class="ab-pricing-table__pricing__price-per-yard">($${discountPerYard.toFixed(2)}/yard)</div>` : ""}
                                    <div class="ab-pricing-table__pricing__save">You save $${saveAmount}</div>
                                </li>
                            `,
                        )
                        .join("")}
                </ul>
                <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--desktop">
                    ${data
                        .map(
                            ({ quantity, unit, discountedPrice, discountPerYard, saveAmount, discount }) => /* HTML */ `
                                <li class="ab-pricing-table__pricing__item">
                                    <a href="${link}" class="ab-pricing-table__pricing__left">
                                        <div class="ab-pricing-table__pricing__quantity">Buy <span class="ab-quantity">${quantity}</span>+ <span class="ab-unit">${unit}</span></div>
                                        <div class="ab-pricing-table__pricing__save-container">
                                            <div class="ab-pricing-table__pricing__save">You save $${saveAmount}</div>
                                            <div class="ab-pricing-table__pricing__save-percentage">-${discount}%</div>
                                        </div>
                                    </a>
                                    <div class="ab-pricing-table__pricing__right">
                                        <div class="ab-pricing-table__pricing__price">$${discountedPrice.toFixed(2)}</div>
                                        ${discountPerYard > 0 ? `<div class="ab-pricing-table__pricing__price-per-yard">($${discountPerYard.toFixed(2)}/yard)</div>` : ""}
                                    </div>
                                </li>
                            `,
                        )
                        .join("")}
                </ul>
                <div class="ab-pricing-table__footer">
                    <div class="ab-pricing-table__footer__left"></div>
                    <div class="ab-pricing-table__footer__right">
                        <a href="https://www.hookandloop.com/price-sheet?sku=Fasteners-DG-Sew-On" target="_blank" class="">See Full Price List <span class="ab-arrow">→</span></a>
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

    const debouncedFinalPriceAndActiveQuantityUpdate = debounce((e) => {
        startingPrice = +e.detail;
        currentSelectedQuantity = +q('.product-info-main  input[name="qty"]').value ?? 1;
        closestQuantityToApplyDiscount = null;

        qq(".ab-quantity").forEach((item) => {
            const priceTableQuantity = +item.textContent;
            if (currentSelectedQuantity >= priceTableQuantity) closestQuantityToApplyDiscount = priceTableQuantity;
        });

        qq(".ab-pricing-table__pricing__item--active")?.forEach((item) => {
            item.classList.remove("ab-pricing-table__pricing__item--active");
        });

        qq(".ab-pricing-table__pricing__item")?.forEach((item) => {
            const priceTableQuantity = +q(item, ".ab-quantity").textContent;
            if (currentSelectedQuantity >= priceTableQuantity && priceTableQuantity === closestQuantityToApplyDiscount) item.classList.add("ab-pricing-table__pricing__item--active");
        });

        const nextNearestQuantity = +qq(".ab-quantity").find((item) => currentSelectedQuantity < item.textContent)?.textContent || null;
        const nextNearestDiscountNode = qq(".ab-pricing-table__pricing__item").find((item) => {
            const priceTableQuantity = +q(item, ".ab-quantity").textContent;
            return nextNearestQuantity ? priceTableQuantity === nextNearestQuantity : priceTableQuantity === closestQuantityToApplyDiscount;
        });

        const nextNearestDiscountPercentage = q(nextNearestDiscountNode, ".ab-pricing-table__pricing__save-percentage").textContent.replace("-", "");

        q(".ab-quantity-to-unlock").textContent = nextNearestQuantity ? nextNearestQuantity - currentSelectedQuantity : 0;
        q(".ab-save-percentage-to-unlock").textContent = nextNearestDiscountPercentage;
    }, 150);

    const debouncedRecreatePricingTable = debounce((e) => {
        const { bothSelected, discounts, smeasureSoldInSize } = e.detail;

        soldInSize = smeasureSoldInSize;
        pricePerYard =  (startingPrice / soldInSize ) / (bothSelected  === true ? 2 : 1)
        currentSelectedQuantity = +q('.product-info-main  input[name="qty"]').value ?? 1;

        const data = discounts.reduce((acc, { qty, discount, unit }) => {
            acc.push({
                unit: unit,
                quantity: qty,
                discountedPrice: (startingPrice - (startingPrice * (discount / 100))) * qty,
                discountPerYard: pricePerYard - pricePerYard * (discount / 100),
                saveAmount: (qty * startingPrice * (discount / 100)).toFixed(2),
                discount: discount,
            });

            return acc;
        }, []);

        q(".ab-pricing-table").innerHTML = /* HTML */ `
            <div class="ab-pricing-table__sub-header">
                ✦ Add <span class="ab-quantity-to-unlock">${discounts[0].qty - currentSelectedQuantity}</span> more roll to unlock
                <span class="ab-save-percentage-to-unlock">${discounts[0].discount}%</span> off
            </div>
            <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--mobile">
                ${data
                    .map(
                        ({ discount, quantity, unit, discountedPrice, discountPerYard, saveAmount }) => /* HTML */ `
                            <li class="ab-pricing-table__pricing__item">
                                <div class="ab-pricing-table__pricing__save-percentage">-${discount}%</div>
                                <div class="ab-pricing-table__pricing__quantity"><span class="ab-quantity">${quantity}</span>+ <span class="ab-unit">${unit}</span></div>
                                <div class="ab-pricing-table__pricing__price">$${discountedPrice.toFixed(2)}</div>
                                ${discountPerYard > 0 ? `<div class="ab-pricing-table__pricing__price-per-yard">($${discountPerYard.toFixed(2)}/yard)</div>` : ""}
                                <div class="ab-pricing-table__pricing__save">You save $${saveAmount}</div>
                            </li>
                        `,
                    )
                    .join("")}
            </ul>
            <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--desktop">
                ${data
                    .map(
                        ({ quantity, unit, discountedPrice, discountPerYard, saveAmount, discount }) => /* HTML */ `
                            <li class="ab-pricing-table__pricing__item">
                                <div class="ab-pricing-table__pricing__left">
                                    <div class="ab-pricing-table__pricing__quantity">Buy <span class="ab-quantity">${quantity}</span>+ <span class="ab-unit">${unit}</span></div>
                                    <div class="ab-pricing-table__pricing__save-container">
                                        <div class="ab-pricing-table__pricing__save">You save $${saveAmount}</div>
                                        <div class="ab-pricing-table__pricing__save-percentage">-${discount}%</div>
                                    </div>
                                </div>
                                <div class="ab-pricing-table__pricing__right">
                                    <div class="ab-pricing-table__pricing__price">$${discountedPrice.toFixed(2)}</div>
                                    ${discountPerYard > 0 ? `<div class="ab-pricing-table__pricing__price-per-yard">($${discountPerYard.toFixed(2)}/yard)</div>` : ""}
                                </div>
                            </li>
                        `,
                    )
                    .join("")}
            </ul>
            <div class="ab-pricing-table__footer">
                <div class="ab-pricing-table__footer__left"></div>
                <div class="ab-pricing-table__footer__right">
                    <a href="https://www.hookandloop.com/price-sheet?sku=Fasteners-DG-Sew-On" target="_blank" class="">See Full Price List <span class="ab-arrow">→</span></a>
                </div>
            </div>
        `;
    }, 200);

    function eventListener() {
        window.addEventListener("update-product-final-price", debouncedFinalPriceAndActiveQuantityUpdate);

        window.addEventListener("configurable-selection-changed", debouncedRecreatePricingTable);
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
        eventListener();
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

    waitForElementAsync(checkForItems).then(init);


    // AFTER QA COMPLETED
    // try {
    //     await waitForElementAsync(checkForItems);
    //     init();
    // } catch (error) {
    //     return false
    // }
})();
