(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-EXP-299 .ab-hidden {
  display: none !important;
}
.AB-EXP-299 #qty-counter,
.AB-EXP-299 p.text-\[18px\][x-show="getQtyForMoreDiscount()"],
.AB-EXP-299
  .mt-2.bb-4.lg\:ml-auto.xl\:ml-0.py-2[x-data="initSavingOnVolume()"] {
  display: none;
}
.AB-EXP-299 .final-price.inline-block {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  white-space: nowrap;
}
.AB-EXP-299 .final-price.inline-block .price {
  display: inline-block;
}
.AB-EXP-299 .final-price.inline-block span:has(meta),
.AB-EXP-299 .final-price.inline-block *:empty {
  display: none;
}
.AB-EXP-299 #trust_signal {
  padding: 13px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
}
.AB-EXP-299 #trust_signal > .md\:border-r {
  width: 100%;
  height: 0.6px;
  background-color: #b5b5b5;
  margin-left: 0;
  margin-right: 0;
}
.AB-EXP-299
  #trust_signal
  .font-bold.text-xs.md\:text-\[10px\].xl\:text-sm.uppercase {
  font-family: helvetica, "san-serif";
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: #374151;
}
.AB-EXP-299 #trust_signal p.hidden.xl\:block.text-left {
  font-family: helvetica, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0;
  vertical-align: middle;
  color: #374151;
}
.AB-EXP-299
  #trust_signal
  .element.flex.items-center.justify-center.gap-2.min-h-\[25px\].w-auto {
  gap: 10px;
}
.AB-EXP-299 #trust_signal img {
  width: 28px;
  height: 28px;
}
@media screen and (min-width: 1024px) {
  .AB-EXP-299 .mt-2.w-full[x-data="initCutOffTimer()"] {
    display: none;
  }
  .AB-EXP-299
    .flex.flex-col.sm\:flex-row.md\:flex-col.xl\:flex-row.items-end.my-4 {
    align-items: flex-start;
  }
  .AB-EXP-299
    .flex.flex-col.sm\:flex-row.md\:flex-col.xl\:flex-row.items-end.my-4
    > .w-full.sm\:max-w-\[250px\] {
    width: 257px;
    max-width: 257px;
    min-width: 257px;
    margin-left: auto;
  }
  .AB-EXP-299
    .flex.flex-row.gap-2.flex-wrap.items-center.my-6.justify-end.font-bold {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

.AB-EXP-299 .ab-pricing-table-wrapper {
  margin-top: 17px;
  width: 100%;
}
.AB-EXP-299 .ab-pricing-header {
  background-color: #101828;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 16px;
  border-radius: 4px 4px 0 0;
}
.AB-EXP-299 .ab-pricing-header__left {
  font-family: helvetica, san-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  color: #ffffff;
}
.AB-EXP-299 .ab-pricing-header__right {
  font-family: helvetica, san-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #ffffff;
}
.AB-EXP-299 .ab-pricing-table {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
}
.AB-EXP-299 .ab-pricing-table__sub-header {
  padding: 7px 16px;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(117, 117, 117, 0.1490196078);
  font-family: helvetica, san-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: #1d1d1d;
}
.AB-EXP-299 .ab-pricing-table__sub-header-max-discount-unlocked {
  padding: 7px 16px;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(117, 117, 117, 0.1490196078);
  font-family: helvetica, san-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: #1d1d1d;
}
.AB-EXP-299 .ab-pricing-table__pricing {
  background-color: #f9f9fb;
  border-bottom: 1px solid #e5e7eb;
}
.AB-EXP-299 .ab-pricing-table__pricing li:not(:last-child) {
  border-right: 1px solid #e5e7eb;
}
.AB-EXP-299 .ab-pricing-table__pricing__item {
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  background-color: #f9f9fb;
}
.AB-EXP-299 .ab-pricing-table__pricing__item--active {
  background-color: #fff4f4;
}
.AB-EXP-299 .ab-pricing-table__pricing__quantity {
  font-family: helvetica, san-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  text-align: center;
  color: #1d1d1d;
  margin-bottom: 4px;
}
.AB-EXP-299 .ab-pricing-table__pricing__save {
  font-family: helvetica, san-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;
  color: #1d1d1d;
}
.AB-EXP-299 .ab-pricing-table__pricing__save-percentage {
  margin: auto;
  margin-top: 0;
  width: 49px;
  height: 20px;
  background-color: rgba(235, 0, 0, 0.1019607843);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: helvetica, san-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;
  color: #eb0000;
  margin-bottom: 8px;
}
.AB-EXP-299 .ab-pricing-table__pricing__price {
  font-family: helvetica, san-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 16.5px;
  letter-spacing: 0.06px;
  text-align: center;
  color: #1d1d1d;
}
.AB-EXP-299 .ab-pricing-table__pricing__price-per-yard {
  font-family: helvetica, san-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16.5px;
  letter-spacing: 0.06px;
  text-align: center;
  color: #6a7282;
  margin-bottom: 4px;
}
.AB-EXP-299 .ab-pricing-table__pricing--mobile {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
}
.AB-EXP-299 .ab-pricing-table__pricing--desktop {
  display: none;
  grid-template-columns: repeat(1, 1fr);
}
.AB-EXP-299 .ab-pricing-table__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 16px;
  background-color: #ffffff;
}
.AB-EXP-299 .ab-pricing-table__footer__right a {
  font-family: helvetica, san-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: right;
  color: #cc0000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
}
.AB-EXP-299 .ab-pricing-table__footer__right .ab-arrow {
  font-size: 15px;
  margin-top: -3px;
}
@media screen and (min-width: 991px) {
  .AB-EXP-299 .ab-pricing-table-wrapper {
    flex-grow: 1;
    padding-right: 24px;
  }
  .AB-EXP-299 .ab-pricing-header {
    border: 1px solid #e5e7eb;
    border-bottom: none;
    padding: 10px 16px 10px 16px;
  }
  .AB-EXP-299 .ab-pricing-table__sub-header {
    padding: 7px 16px;
    background-color: #ffffff;
  }
  .AB-EXP-299 .ab-pricing-table__sub-header-max-discount-unlocked {
    padding: 7px 16px;
    background-color: #ffffff;
  }
  .AB-EXP-299 .ab-pricing-table__pricing__item {
    padding: 12px 16px;
    justify-content: space-between;
    flex-direction: row;
  }
  .AB-EXP-299 .ab-pricing-table__pricing li:not(:last-child) {
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }
  .AB-EXP-299 .ab-pricing-table__pricing__left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .AB-EXP-299 .ab-pricing-table__pricing__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
  .AB-EXP-299 .ab-pricing-table__pricing__quantity {
    text-align: left;
    margin-bottom: 5px;
  }
  .AB-EXP-299 .ab-pricing-table__pricing__save-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
  }
  .AB-EXP-299 .ab-pricing-table__pricing__save {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
  }
  .AB-EXP-299 .ab-pricing-table__pricing__save-percentage {
    margin-bottom: 0;
  }
  .AB-EXP-299 .ab-pricing-table__pricing__price {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.15px;
    text-align: right;
    margin-bottom: 2px;
  }
  .AB-EXP-299 .ab-pricing-table__pricing__price-per-yard {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: right;
    margin-bottom: 0;
  }
  .AB-EXP-299 .ab-pricing-table__pricing--mobile {
    display: none;
  }
  .AB-EXP-299 .ab-pricing-table__pricing--desktop {
    display: grid;
  }
  .AB-EXP-299 .ab-pricing-table__footer__right a {
    gap: 5px;
  }
  .AB-EXP-299 .ab-pricing-table__footer__right .ab-arrow {
    font-size: 15px;
    margin-top: -4px;
  }
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
/* 

Test container: https://app.varify.io/dashboard?msg=experiment-created&experiment_id=34857&variation_id=52180&search=Hook+%26+Loop+299+-+A%2FB+test+idea+-+Display+pricing+table+on+PDP+instead+of+single+price
Forced Variation: https://www.hookandloop.com/brands/duragrip/sew-on/?varify-force=34857-52180

*/

(async () => {
  const TEST_CONFIG = {
    client: "Hook and Loop",
    project: "Hook and Loop",
    site_url: "https://www.hookandloop.com/",
    test_name:
      "Hook & Loop 299 - A/B test idea - Display pricing table on PDP instead of single price.",
    page_initials: "AB-EXP-299",
    test_variation: 1,
    test_version: 0.0002,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  async function waitForElementAsync(
    predicate,
    timeout = 20000,
    frequency = 150,
  ) {
    const startTime = Date.now();

    return new Promise((resolve, reject) => {
      if (typeof predicate === "function" && predicate()) {
        return resolve(true);
      }

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;

        if (elapsed >= timeout) {
          clearInterval(interval);
          return reject(
            new Error(
              `Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`,
            ),
          );
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
  let link;
  let unit;

  function getPricingTableLayout() {
    pricePerYard =
      +q(" span[x-html='getPerYardPrice()']")?.textContent?.replace("$", "") ??
      0;
    currentSelectedQuantity =
      +q('.product-info-main  input[name="qty"]').value ?? 1;
    soldInSize =
      currentSelectedQuantity; /* Initially soldInSize can be determined by initial quantity of the product */
    startingPrice =
      +q(".price[x-html='getFormattedFinalPrice()']")
        .textContent.replace("$", "")
        .replace(",", "") / soldInSize;
    link = q(".discount-box ul li a.text-black").getAttribute("href");
    unit =
      q(".discount-box ul li .roll-no span[x-text='discount.unit']")
        .textContent || "ROLLS";
    const controlDiscountAmountStr =
      q('span[x-text="getDiscountAmount()"]')?.textContent ?? "";

    const data = qq(".discount-box ul li").reduce((acc, li) => {
      const controlPriceTableQuantity =
        +q(li, '.roll-no span[x-text="discount.qty"]').textContent ?? 0;
      const discount =
        +q(li, '.save_percent span[x-text="discount.discount"]').textContent ??
        0;

      if (currentSelectedQuantity >= controlPriceTableQuantity) {
        closestQuantityToApplyDiscount = controlPriceTableQuantity;
      }

      acc.push({
        unit: q(li, '.roll-no span[x-text="discount.unit"]').textContent ?? "",
        quantity: controlPriceTableQuantity,
        discountedPrice:
          (startingPrice - startingPrice * (discount / 100)) *
          controlPriceTableQuantity,
        discountPerYard: pricePerYard - pricePerYard * (discount / 100),
        saveAmount: (
          controlPriceTableQuantity *
          startingPrice *
          (discount / 100)
        ).toFixed(2),
        saveAmount: (
          controlPriceTableQuantity *
          startingPrice *
          (discount / 100)
        ).toFixed(2),
        discount: discount,
      });

      return acc;
    }, []);

    return /* HTML */ `
      <div class="ab-pricing-table">
        <div class="ab-pricing-table__sub-header">
          ✦ Add
          <span class="ab-quantity-to-unlock"
            >${data[0].quantity - currentSelectedQuantity}</span
          >
          more <span class="ab-unit-to-unlock">${unit.toLowerCase()}</span> to
          unlock
          <span class="ab-save-percentage-to-unlock">${data[0].discount}%</span>
          off
        </div>
        <div
          class="ab-pricing-table__sub-header-max-discount-unlocked ab-hidden"
        >
          ✦ You're saving
          <span class="ab-currently-saving">${controlDiscountAmountStr}</span>!
        </div>
        <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--mobile">
          ${data
            .map(
              ({
                discount,
                quantity,
                unit,
                discountedPrice,
                discountPerYard,
                saveAmount,
              }) => /* HTML */ `
                <li class="ab-pricing-table__pricing__item">
                  <div class="ab-pricing-table__pricing__save-percentage">
                    -${discount}%
                  </div>
                  <a href="${link}" class="ab-pricing-table__pricing__quantity"
                    ><span class="ab-quantity">${quantity}</span>+
                    <span class="ab-unit">${unit}</span></a
                  >
                  <a href="${link}" class="ab-pricing-table__pricing__price"
                    >$${discountedPrice.toFixed(2)}</a
                  >
                  ${discountPerYard > 0
                    ? `<div class="ab-pricing-table__pricing__price-per-yard">($${discountPerYard.toFixed(2)}/yard)</div>`
                    : ""}
                  <div class="ab-pricing-table__pricing__save">
                    You save $${saveAmount}
                  </div>
                </li>
              `,
            )
            .join("")}
        </ul>
        <ul
          class="ab-pricing-table__pricing ab-pricing-table__pricing--desktop"
        >
          ${data
            .map(
              ({
                quantity,
                unit,
                discountedPrice,
                discountPerYard,
                saveAmount,
                discount,
              }) => /* HTML */ `
                <li class="ab-pricing-table__pricing__item">
                  <a href="${link}" class="ab-pricing-table__pricing__left">
                    <div class="ab-pricing-table__pricing__quantity">
                      Buy <span class="ab-quantity">${quantity}</span>+
                      <span class="ab-unit">${unit}</span>
                    </div>
                    <div class="ab-pricing-table__pricing__save-container">
                      <div class="ab-pricing-table__pricing__save">
                        You save $${saveAmount}
                      </div>
                      <div class="ab-pricing-table__pricing__save-percentage">
                        -${discount}%
                      </div>
                    </div>
                  </a>
                  <div class="ab-pricing-table__pricing__right">
                    <div class="ab-pricing-table__pricing__price">
                      $${discountedPrice.toFixed(2)}
                    </div>
                    ${discountPerYard > 0
                      ? `<div class="ab-pricing-table__pricing__price-per-yard">($${discountPerYard.toFixed(2)}/yard)</div>`
                      : ""}
                  </div>
                </li>
              `,
            )
            .join("")}
        </ul>
        <div class="ab-pricing-table__footer">
          <div class="ab-pricing-table__footer__left"></div>
          <div class="ab-pricing-table__footer__right">
            <a
              href="${q(".discountBox-footer a")?.getAttribute("href") ??
              "https://www.hookandloop.com/price-sheet?sku=Fasteners-DG-Sew-On"}"
              target="_blank"
              class=""
              >See Full Price List <span class="ab-arrow">→</span></a
            >
          </div>
        </div>
      </div>
    `;
  }

  function createLayout() {
    const productActionNode = q(
      ".flex.flex-col.sm\\:flex-row.md\\:flex-col.xl\\:flex-row.items-end.my-4 > .w-full.sm\\:max-w-\\[250px\\]",
    );

    productActionNode.insertAdjacentElement(
      "beforeend",
      q(
        ".flex.flex-row.gap-2.flex-wrap.items-center.my-6.justify-end.font-bold",
      ),
    );
    productActionNode.insertAdjacentElement("beforeend", q("#trust_signal"));

    q(
      ".flex.flex-col.sm\\:flex-row.md\\:flex-col.xl\\:flex-row.items-end.my-4 > div[role='group']",
    ).insertAdjacentHTML(
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
    currentSelectedQuantity =
      +q('.product-info-main  input[name="qty"]').value ?? 1;
    closestQuantityToApplyDiscount = null;

    const controlDiscountAmountStr =
      q('span[x-text="getDiscountAmount()"]')?.textContent ?? "";
    if (controlDiscountAmountStr && controlDiscountAmountStr !== "") {
      q(".ab-currently-saving").textContent = controlDiscountAmountStr;
    }

    qq(".ab-quantity").forEach((item) => {
      const priceTableQuantity = +item.textContent;
      if (currentSelectedQuantity >= priceTableQuantity)
        closestQuantityToApplyDiscount = priceTableQuantity;
    });

    qq(".ab-pricing-table__pricing__item--active")?.forEach((item) => {
      item.classList.remove("ab-pricing-table__pricing__item--active");
    });

    qq(".ab-pricing-table__pricing__item")?.forEach((item) => {
      const priceTableQuantity = +q(item, ".ab-quantity").textContent;
      if (
        currentSelectedQuantity >= priceTableQuantity &&
        priceTableQuantity === closestQuantityToApplyDiscount
      )
        item.classList.add("ab-pricing-table__pricing__item--active");
    });

    const nextNearestQuantity =
      +qq(".ab-quantity").find(
        (item) => currentSelectedQuantity < item.textContent,
      )?.textContent || null;
    const nextNearestDiscountNode = qq(".ab-pricing-table__pricing__item").find(
      (item) => {
        const priceTableQuantity = +q(item, ".ab-quantity").textContent;
        return nextNearestQuantity
          ? priceTableQuantity === nextNearestQuantity
          : priceTableQuantity === closestQuantityToApplyDiscount;
      },
    );

    const nextNearestDiscountPercentage = q(
      nextNearestDiscountNode,
      ".ab-pricing-table__pricing__save-percentage",
    ).textContent.replace("-", "");

    q(".ab-quantity-to-unlock").textContent = nextNearestQuantity
      ? nextNearestQuantity - currentSelectedQuantity
      : 0;
    q(".ab-save-percentage-to-unlock").textContent =
      nextNearestDiscountPercentage;

    if (
      nextNearestDiscountPercentage &&
      currentSelectedQuantity >= nextNearestQuantity &&
      controlDiscountAmountStr !== ""
    ) {
      q(".ab-pricing-table__sub-header-max-discount-unlocked").classList.remove(
        "ab-hidden",
      );
      q(".ab-pricing-table__sub-header").classList.add("ab-hidden");
    } else {
      q(".ab-pricing-table__sub-header").classList.remove("ab-hidden");
      q(".ab-pricing-table__sub-header-max-discount-unlocked").classList.add(
        "ab-hidden",
      );
    }
  }, 150);

  const debouncedRecreatePricingTable = debounce((e) => {
    const { bothSelected, discounts, smeasureSoldInSize, sminqty } = e.detail;

    soldInSize =
      +smeasureSoldInSize === 1 && +sminqty > 1
        ? +sminqty
        : +smeasureSoldInSize;
    pricePerYard = startingPrice / soldInSize / (bothSelected === true ? 2 : 1);
    currentSelectedQuantity =
      +q('.product-info-main  input[name="qty"]').value ?? 1;
    unit = discounts[0].unit;
    const controlDiscountAmountStr =
      q('span[x-text="getDiscountAmount()"]')?.textContent ?? "";

    const data = discounts.reduce((acc, { qty, discount, unit }) => {
      acc.push({
        unit: unit,
        quantity: qty,
        discountedPrice:
          (startingPrice - startingPrice * (discount / 100)) * qty,
        discountPerYard: pricePerYard - pricePerYard * (discount / 100),
        saveAmount: (qty * startingPrice * (discount / 100)).toFixed(2),
        discount: discount,
      });

      return acc;
    }, []);

    q(".ab-pricing-table").innerHTML = /* HTML */ `
      <div class="ab-pricing-table__sub-header">
        ✦ Add
        <span class="ab-quantity-to-unlock">
          ${discounts[0].qty - currentSelectedQuantity}</span
        >
        more <span class="ab-unit-to-unlock"> ${unit.toLowerCase()}</span> to
        unlock
        <span class="ab-save-percentage-to-unlock">
          ${discounts[0].discount}%</span
        >
        off
      </div>
      <div class="ab-pricing-table__sub-header-max-discount-unlocked ab-hidden">
        ✦ You're saving
        <span class="ab-currently-saving">${controlDiscountAmountStr}</span>!
      </div>
      <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--mobile">
        ${data
          .map(
            ({
              discount,
              quantity,
              unit,
              discountedPrice,
              discountPerYard,
              saveAmount,
            }) => /* HTML */ `
              <li class="ab-pricing-table__pricing__item">
                <div class="ab-pricing-table__pricing__save-percentage">
                  -${discount}%
                </div>
                <div class="ab-pricing-table__pricing__quantity">
                  <span class="ab-quantity">${quantity}</span>+
                  <span class="ab-unit">${unit}</span>
                </div>
                <div class="ab-pricing-table__pricing__price">
                  $${discountedPrice.toFixed(2)}
                </div>
                ${discountPerYard > 0
                  ? `<div class="ab-pricing-table__pricing__price-per-yard">($${discountPerYard.toFixed(2)}/yard)</div>`
                  : ""}
                <div class="ab-pricing-table__pricing__save">
                  You save $${saveAmount}
                </div>
              </li>
            `,
          )
          .join("")}
      </ul>
      <ul class="ab-pricing-table__pricing ab-pricing-table__pricing--desktop">
        ${data
          .map(
            ({
              quantity,
              unit,
              discountedPrice,
              discountPerYard,
              saveAmount,
              discount,
            }) => /* HTML */ `
              <li class="ab-pricing-table__pricing__item">
                <div class="ab-pricing-table__pricing__left">
                  <div class="ab-pricing-table__pricing__quantity">
                    Buy <span class="ab-quantity">${quantity}</span>+
                    <span class="ab-unit">${unit}</span>
                  </div>
                  <div class="ab-pricing-table__pricing__save-container">
                    <div class="ab-pricing-table__pricing__save">
                      You save $${saveAmount}
                    </div>
                    <div class="ab-pricing-table__pricing__save-percentage">
                      -${discount}%
                    </div>
                  </div>
                </div>
                <div class="ab-pricing-table__pricing__right">
                  <div class="ab-pricing-table__pricing__price">
                    $${discountedPrice.toFixed(2)}
                  </div>
                  ${discountPerYard > 0
                    ? `<div class="ab-pricing-table__pricing__price-per-yard">($${discountPerYard.toFixed(2)}/yard)</div>`
                    : ""}
                </div>
              </li>
            `,
          )
          .join("")}
      </ul>
      <div class="ab-pricing-table__footer">
        <div class="ab-pricing-table__footer__left"></div>
        <div class="ab-pricing-table__footer__right">
          <a
            href="${q(".discountBox-footer a")?.getAttribute("href") ??
            "https://www.hookandloop.com/price-sheet?sku=Fasteners-DG-Sew-On"}"
            target="_blank"
            class=""
            >See Full Price List <span class="ab-arrow">→</span></a
          >
        </div>
      </div>
    `;
  }, 200);

  function eventListener() {
    window.addEventListener(
      "update-product-final-price",
      debouncedFinalPriceAndActiveQuantityUpdate,
    );

    window.addEventListener(
      "configurable-selection-changed",
      debouncedRecreatePricingTable,
    );
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);
    createLayout();
    eventListener();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q("meta[property='og:type'][content='product']") &&
      q(".discount-box ul li") &&
      q(
        ".flex.flex-col.sm\\:flex-row.md\\:flex-col.xl\\:flex-row.items-end.my-4 > .w-full.sm\\:max-w-\\[250px\\]",
      ) &&
      q("#trust_signal") &&
      q(
        ".flex.flex-row.gap-2.flex-wrap.items-center.my-6.justify-end.font-bold",
      ) &&
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
