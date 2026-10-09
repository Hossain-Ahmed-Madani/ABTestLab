(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-CART-DISCOUNT-PROGRESS .cart-promo-banner,
.AB-CART-DISCOUNT-PROGRESS .coupons-area.cart-detail-item .module-expand,
.AB-CART-DISCOUNT-PROGRESS
  .coupons-area.cart-detail-item:not(:has(.displayPromotions)) {
  display: none;
}
.AB-CART-DISCOUNT-PROGRESS .coupons-area.cart-detail-item {
  padding: 15px 0 55px;
}
.AB-CART-DISCOUNT-PROGRESS .displayPromotions {
  padding: 0;
}
.AB-CART-DISCOUNT-PROGRESS .promotion-head {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 0;
}
.AB-CART-DISCOUNT-PROGRESS .promotion_name {
  font-family: rubik, sans-serif;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #282828;
}
.AB-CART-DISCOUNT-PROGRESS .remove-promo {
  position: static;
  font-size: 0;
  padding-left: 0;
  margin-left: 0;
}
.AB-CART-DISCOUNT-PROGRESS .remove-promo i,
.AB-CART-DISCOUNT-PROGRESS .remove-promo:after {
  font-family: rubik, sans-serif;
  font-weight: 500;
  font-size: 11px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #cc0000;
}
.AB-CART-DISCOUNT-PROGRESS .remove-promo i:before {
  margin-left: 0;
}
.AB-CART-DISCOUNT-PROGRESS .remove-promo:after {
  content: "Remove Coupon";
}
.AB-CART-DISCOUNT-PROGRESS .remove-promo:hover,
.AB-CART-DISCOUNT-PROGRESS .remove-promo:focus {
  text-decoration: underline #cc0000;
}
.AB-CART-DISCOUNT-PROGRESS .ab-loader-container {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999999;
  position: fixed;
  overflow: hidden;
  display: none;
  justify-content: center;
  align-items: center;
}
.AB-CART-DISCOUNT-PROGRESS .ab-loader {
  --color-1: #fff;
  --color-2: #0d21a1;
  --size: 1px;
  width: calc(48 * var(--size));
  height: calc(48 * var(--size));
  border: calc(5 * var(--size)) solid var(--color-1);
  border-bottom-color: var(--color-2);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.AB-CART-DISCOUNT-PROGRESS--show-loader .ab-loader-container {
  display: flex;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.AB-CART-DISCOUNT-PROGRESS .ab-section {
  border: 1px solid #e7e5e5;
  padding: 14px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 8px;
}
.AB-CART-DISCOUNT-PROGRESS .ab-text-container {
  width: max-content;
  text-align: center;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-text {
  font-family: rubik, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: #282828;
  margin-bottom: 0;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-text br {
  display: none;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container {
  width: 100%;
  flex-grow: 1;
  --progress: 0%;
  /* --------------------------------
      Top labels
  -------------------------------- */
  /* $0 */
  /* Checkpoint positions */
  /* $3000 */
  /* --------------------------------
      Progress track
  -------------------------------- */
  /* Green progress */
  /* --------------------------------
      Checkpoints
  -------------------------------- */
  /* $199 */
  /* $1500 */
  /* $4000 */
  /* --------------------------------
      Offer labels
  -------------------------------- */
  /* Completed checkpoint */
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .shipping-progress {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: rubik, sans-serif;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .progress-labels {
  position: relative;
  height: 11px;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .progress-labels span {
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  white-space: nowrap;
  font-weight: 500;
  font-size: 11px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: #282828;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .min-price {
  display: none;
  left: 0;
  transform: none !important;
}
.AB-CART-DISCOUNT-PROGRESS
  .ab-progress-container
  .progress-labels
  .checkpoint-1 {
  left: 6.633%;
}
.AB-CART-DISCOUNT-PROGRESS
  .ab-progress-container
  .progress-labels
  .checkpoint-2 {
  left: 50%;
}
.AB-CART-DISCOUNT-PROGRESS
  .ab-progress-container
  .progress-labels
  .checkpoint-3 {
  right: 0;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .progress-track-container {
  height: 24px;
  align-content: center;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .progress-track {
  position: relative;
  height: 8px;
  background: #e7e5e5;
  border-radius: 4px;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--progress);
  height: 100%;
  background: #4a8f00;
  border-radius: 999px;
  transition: width 0.3s ease;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .checkpoint {
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px solid #9fa09f;
  background: #fff;
  box-sizing: border-box;
  z-index: 2;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .checkpoint-1 {
  left: 6.633%;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .checkpoint-2 {
  left: 50%;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .checkpoint-3 {
  right: 0;
  transform: translate(-150%, -50%);
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .offer-labels {
  position: relative;
  height: 11px;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .offer-label br {
  display: none;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .offer {
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  white-space: nowrap;
  color: #9fa09f;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .offer-cta {
  border: none;
  outline: none;
  background: none;
  text-decoration: underline;
  color: #0d21a1;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .offer.offer-1 {
  left: 6.633%;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .offer.offer-2 {
  left: 50%;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .offer.offer-3 {
  right: 0;
  transform: translate(-30%, 0%);
}
.AB-CART-DISCOUNT-PROGRESS
  .ab-progress-container
  .offer.offer-3:has(button.offer-cta) {
  transform: translate(0%, 0%);
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .checkpoint-label.completed,
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .offer.completed {
  color: #4a8f00;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .checkpoint.completed {
  background: #4a8f00;
  border-color: #4a8f00;
  border: 2px solid #ffffff;
}
.AB-CART-DISCOUNT-PROGRESS .ab-progress-container .checkpoint.completed::after {
  content: "";
  background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.66678 2L3.00048 5.6664L1.33398 3.99985' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  position: absolute;
  width: 8px;
  height: 8px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
@media screen and (max-width: 768px) {
  .AB-CART-DISCOUNT-PROGRESS .offer.offer-1 .offer-label br {
    display: inline;
  }
}
@media screen and (min-width: 991px) {
  .AB-CART-DISCOUNT-PROGRESS .ab-section {
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1019607843);
    padding: 14px 16px;
    border-radius: 6px;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 28px;
  }
  .AB-CART-DISCOUNT-PROGRESS .ab-progress-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
  }
  .AB-CART-DISCOUNT-PROGRESS .ab-progress-container .shipping-progress {
    gap: 4px;
  }
  .AB-CART-DISCOUNT-PROGRESS .ab-progress-container .progress-labels {
    height: 14px;
  }
  .AB-CART-DISCOUNT-PROGRESS
    .ab-progress-container
    .progress-track
    .checkpoint-3 {
    transform: translate(0%, -50%);
  }
  .AB-CART-DISCOUNT-PROGRESS .ab-progress-container .progress-labels span {
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
  }
  .AB-CART-DISCOUNT-PROGRESS
    .ab-progress-container
    .progress-labels
    .checkpoint-3 {
    right: 0;
    transform: translateX(0%);
  }
  .AB-CART-DISCOUNT-PROGRESS .ab-progress-container .offer-labels {
    height: 14px;
  }
  .AB-CART-DISCOUNT-PROGRESS .ab-progress-container .offer {
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: right;
  }
  .AB-CART-DISCOUNT-PROGRESS .ab-progress-container .offer.offer-3 {
    transform: translate(0%, 0%);
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
(async () => {
  const TEST_CONFIG = {
    page_initials: "AB-CART-DISCOUNT-PROGRESS",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const DATA = {
    applied_discount: null,
    progress_checkpoints: [
      {
        checkpoint: 199,
        offer: "Free shipping",
        couponCode: null,
        discount: null,
      },
      {
        checkpoint: 1500,
        offer: "$175 off",
        couponCode: "SAVE175",
        discount: 175,
      },
      {
        checkpoint: 3000,
        offer: "$450 off",
        couponCode: "SAVE450",
        discount: 450,
      },
    ],
  };

  const API = {
    base_url: "https://www.aedsuperstore.com/recalculate.asp",
    request_method: "POST",
  };

  async function fetchAndParseHTML(url, method, payload = {}) {
    const r = await fetch(url, {
      method,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      credentials: "include",
      body: new URLSearchParams(payload),
    });
    if (!r.ok) throw new Error(r.status);
    const htmlString = await r.text();
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc;
  }

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
    return [...document.querySelectorAll(s)];
  }

  function getProgressData() {
    const txt = q(".summary-totals-colors")?.textContent?.trim() || "";
    const subTotal = parseFloat(txt.replace(/[$,]/g, "")) || 0;

    const discountTxt =
      q(".discount-details .carttotal-price")?.textContent?.trim() || "";
    if (discountTxt) {
      DATA["applied_discount"] =
        parseFloat(discountTxt.replace(/[$,]/g, "")) || 0;
    }

    // Find the next unlocked checkpoint
    const nextOffer = DATA["progress_checkpoints"].find(
      ({ checkpoint }) => subTotal < checkpoint,
    );
    const maxDiscountReached = nextOffer === undefined;
    const progress = Math.min(Math.round((subTotal / 3000) * 100), 100);
    const needToSpend = maxDiscountReached
      ? 0
      : Math.max(nextOffer.checkpoint - subTotal, 0);

    return {
      subTotal,
      progress,
      nextCheckpoint: nextOffer?.checkpoint ?? null,
      nextOffer: nextOffer?.offer ?? null,
      needToSpend,
      maxDiscountReached,
    };
  }

  function getLayout() {
    const { subTotal, progress, nextOffer, needToSpend, maxDiscountReached } =
      getProgressData();

    return /* HTML */ `
      <section class="container">
        <div class="ab-section">
          <div class="ab-text-container">
            <p class="ab-progress-text">
              ${subTotal >= 1500 &&
              (!DATA["applied_discount"] || maxDiscountReached)
                ? `<strong>You’ve unlocked ${[...DATA["progress_checkpoints"]].reverse().find(({ checkpoint }) => checkpoint <= subTotal).offer}</strong>`
                : `Spend <strong>$${needToSpend.toLocaleString("en-US")} more</strong> to get <br /> <strong>${nextOffer} off</strong>`}
            </p>
          </div>
          <div class="ab-progress-container" style="--progress:${progress}%;">
            <div class="shipping-progress">
              <!-- Top price labels -->
              <div class="progress-labels">
                ${DATA["progress_checkpoints"]
                  .map(
                    (item, index) => /* HTML */ `
                      <span
                        class="checkpoint-label ${maxDiscountReached ||
                        item["checkpoint"] <= subTotal
                          ? "completed"
                          : ""} checkpoint-${index + 1}"
                      >
                        $${item["checkpoint"].toLocaleString("en-US")}
                      </span>
                    `,
                  )
                  .join("")}
              </div>

              <!-- Progress bar -->
              <div class="progress-track-container">
                <div class="progress-track">
                  <!-- Filled progress -->
                  <div class="progress-fill"></div>

                  <!-- Checkpoints -->
                  ${DATA["progress_checkpoints"]
                    .map(
                      (item, index) => /* HTML */ `
                        <div
                          class="checkpoint  ${maxDiscountReached ||
                          item["checkpoint"] <= subTotal
                            ? "completed"
                            : ""} checkpoint-${index + 1}"
                        ></div>
                      `,
                    )
                    .join("")}
                </div>
              </div>

              <!-- Offer labels -->
              <div class="offer-labels">
                ${DATA["progress_checkpoints"]
                  .map(
                    (item, index) => /* HTML */ `
                      <div
                        class="offer ${maxDiscountReached ||
                        item["checkpoint"] <= subTotal
                          ? "completed"
                          : ""} offer-${index + 1}"
                      >
                        ${item["discount"] &&
                        subTotal >= item["checkpoint"] &&
                        DATA["applied_discount"] !== item["discount"] &&
                        DATA["applied_discount"] < item["discount"]
                          ? `<button type="button" class="offer-cta" data-code="${item["couponCode"]}">
                                                    ${!DATA["applied_discount"] ? "Apply" : "Switch to"} $${item["discount"]} off
                                                    
                                                    </button>`
                          : `<span class="offer-label">${item["offer"]} ${DATA["applied_discount"] === item["discount"] ? "<br/> applied" : ""}</span>`}
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function handleBodyLoaderView(action /* show, hide */) {
    const body = q("body");
    const loaderClassName = page_initials + "--show-loader";

    if (action === "show") {
      body.classList.add(loaderClassName);
    }

    if (action === "hide") {
      body.classList.remove(loaderClassName);
    }
  }

  function initLegacyPromoRemovalHandler() {
    window.jQuery(".remove-promo").click(function (e) {
      e.preventDefault();
      const promoId = jQuery(this).data("promoid");
      const form = jQuery("<form />").attr({
        action: "recalculate.asp?apply_coupon=2",
        method: "post",
        class: "hidden",
      });
      const input = jQuery("<input />").attr({
        type: "hidden",
        value: promoId,
        name: "coupon",
      });
      jQuery(form).append(input);
      jQuery("body").append(form);
      jQuery(form).submit();
    });
  }

  function updateCartElementsAndListeners(resDoc) {
    q(".subtotal-details .carttotal-price").innerText = q(
      resDoc,
      ".subtotal-details .carttotal-price",
    ).textContent;
    q(".total-details .carttotal-price").innerText = q(
      resDoc,
      ".total-details .carttotal-price",
    ).textContent;

    q(".discount-details")?.remove();
    const newDiscountDetailsElement = q(resDoc, ".discount-details");
    if (newDiscountDetailsElement)
      q(".subtotal-details")?.insertAdjacentElement(
        "afterend",
        newDiscountDetailsElement,
      );

    q(".displayPromotions")?.remove();
    const newPromotionElement = q(resDoc, ".displayPromotions");
    if (q("#apply-coupon") && newPromotionElement)
      q("#apply-coupon").insertAdjacentElement("afterend", newPromotionElement);

    if (q(".remove-promo")) initLegacyPromoRemovalHandler();

    q(".ab-section")?.remove();
    q(".cart-promo-banner").insertAdjacentHTML("beforebegin", getLayout());
    qq("button.offer-cta")?.forEach((item) =>
      item.addEventListener("click", handleDiscountCtaClick),
    );
  }

  async function handleDiscountCtaClick(e) {
    handleBodyLoaderView("show");
    const couponCode = e.currentTarget.getAttribute("data-code");
    try {
      const address =
        q(".shipquote-result-location")?.textContent?.trim() || "";
      const zipCode = address.match(/\b\d{5}(?:-\d{4})?\b/)?.[0] || "";

      const payload = { coupon_code: couponCode, shipping_zip: zipCode };
      qq(
        '.cart-item .quant-input input[aria-label="Quantity"], .cart-item .quant-input input[type="hidden"]',
      )?.forEach((input) => {
        payload[input.name] = input.value;
      });

      // Remove the existing coupon
      if (DATA["applied_discount"]) {
        const resOne = await fetchAndParseHTML(
          `${API["base_url"]}?apply_coupon=2`,
          API["request_method"],
          { coupon: 1339 },
        );
        if (resOne.error) throw new Error(resOne.error);
      }

      // Apply the new discount
      const resTwo = await fetchAndParseHTML(
        API["base_url"],
        API["request_method"],
        payload,
      );
      if (resTwo.error || q(resTwo, "body.error-page"))
        throw new Error(resTwo.error);

      // Update Layout
      updateCartElementsAndListeners(resTwo);
    } catch (error) {
      // console.error("Error applying discount:", error);
      window.location.href = `https://www.aedsuperstore.com/error.asp?error=48&coupon=${couponCode.toLowerCase()}`;
    } finally {
      handleBodyLoaderView("hide");
    }
  }

  function init() {
    if (window[page_initials] === true) return;
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;
    // console.table(TEST_CONFIG);

    q("body").insertAdjacentHTML(
      "afterbegin",
      `<div class="ab-loader-container"><div class="ab-loader"></div></div>`,
    );
    q(".cart-promo-banner").insertAdjacentHTML("beforebegin", getLayout());
    qq("button.offer-cta")?.forEach((item) =>
      item.addEventListener("click", handleDiscountCtaClick),
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".cart-promo-banner") &&
      q(".summary-totals-colors")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    // console.warn(error);
    return false;
  }
})();
