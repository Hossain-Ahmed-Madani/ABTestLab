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
        const r = await fetch(url, { method, headers: { "Content-Type": "application/x-www-form-urlencoded" }, credentials: "include", body: new URLSearchParams(payload) });
        if (!r.ok) throw new Error(r.status);
        const htmlString = await r.text();
        const doc = new DOMParser().parseFromString(htmlString, "text/html");
        return doc;
    }

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
        return [...document.querySelectorAll(s)];
    }

    function getProgressData() {
        const txt = q(".summary-totals-colors")?.textContent?.trim() || "";
        const subTotal = parseFloat(txt.replace(/[$,]/g, "")) || 0;

        const discountTxt = q(".discount-details .carttotal-price")?.textContent?.trim() || "";
        if (discountTxt) {
            DATA["applied_discount"] = parseFloat(discountTxt.replace(/[$,]/g, "")) || 0;
        }

        // Find the next unlocked checkpoint
        const nextOffer = DATA["progress_checkpoints"].find(({ checkpoint }) => subTotal < checkpoint);
        const maxDiscountReached = nextOffer === undefined;
        const progress = Math.min(Math.round((subTotal / 3000) * 100), 100);
        const needToSpend = maxDiscountReached ? 0 : Math.max(nextOffer.checkpoint - subTotal, 0);

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
        const { subTotal, progress, nextOffer, needToSpend, maxDiscountReached } = getProgressData();

        return /* HTML */ `
            <section class="container">
                <div class="ab-section">
                    <div class="ab-text-container">
                        <p class="ab-progress-text">
                            ${subTotal >= 1500 && (!DATA["applied_discount"] || maxDiscountReached)
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
                                            <span class="checkpoint-label ${maxDiscountReached || item["checkpoint"] <= subTotal ? "completed" : ""} checkpoint-${index + 1}">
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
                                                <div class="checkpoint  ${maxDiscountReached || item["checkpoint"] <= subTotal ? "completed" : ""} checkpoint-${index + 1}"></div>
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
                                            <div class="offer ${maxDiscountReached || item["checkpoint"] <= subTotal ? "completed" : ""} offer-${index + 1}">
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
            const form = jQuery("<form />").attr({ action: "recalculate.asp?apply_coupon=2", method: "post", class: "hidden" });
            const input = jQuery("<input />").attr({ type: "hidden", value: promoId, name: "coupon" });
            jQuery(form).append(input);
            jQuery("body").append(form);
            jQuery(form).submit();
        });
    }

    function updateCartElementsAndListeners(resDoc) {
        q(".subtotal-details .carttotal-price").innerText = q(resDoc, ".subtotal-details .carttotal-price").textContent;
        q(".total-details .carttotal-price").innerText = q(resDoc, ".total-details .carttotal-price").textContent;

        q(".discount-details")?.remove();
        const newDiscountDetailsElement = q(resDoc, ".discount-details");
        if (newDiscountDetailsElement) q(".subtotal-details")?.insertAdjacentElement("afterend", newDiscountDetailsElement);

        q(".displayPromotions")?.remove();
        const newPromotionElement = q(resDoc, ".displayPromotions");
        if (q("#apply-coupon") && newPromotionElement) q("#apply-coupon").insertAdjacentElement("afterend", newPromotionElement);

        if (q(".remove-promo")) initLegacyPromoRemovalHandler();

        q(".ab-section")?.remove();
        q(".cart-promo-banner").insertAdjacentHTML("beforebegin", getLayout());
        qq("button.offer-cta")?.forEach((item) => item.addEventListener("click", handleDiscountCtaClick));
    }

    async function handleDiscountCtaClick(e) {
        handleBodyLoaderView("show");
        const couponCode = e.currentTarget.getAttribute("data-code");
        try {
            const address = q(".shipquote-result-location")?.textContent?.trim() || "";
            const zipCode = address.match(/\b\d{5}(?:-\d{4})?\b/)?.[0] || "";

            const payload = { coupon_code: couponCode, shipping_zip: zipCode };
            qq('.cart-item .quant-input input[aria-label="Quantity"], .cart-item .quant-input input[type="hidden"]')?.forEach((input) => {
                payload[input.name] = input.value;
            });

            // Remove the existing coupon
            if (DATA["applied_discount"]) {
                const resOne = await fetchAndParseHTML(`${API["base_url"]}?apply_coupon=2`, API["request_method"], { coupon: 1339 });
                if (resOne.error) throw new Error(resOne.error);
            }

            // Apply the new discount
            const resTwo = await fetchAndParseHTML(API["base_url"], API["request_method"], payload);
            if (resTwo.error || q(resTwo, "body.error-page")) throw new Error(resTwo.error);

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
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;
        // console.table(TEST_CONFIG);

        q("body").insertAdjacentHTML("afterbegin", `<div class="ab-loader-container"><div class="ab-loader"></div></div>`);
        q(".cart-promo-banner").insertAdjacentHTML("beforebegin", getLayout());
        qq("button.offer-cta")?.forEach((item) => item.addEventListener("click", handleDiscountCtaClick));
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".cart-promo-banner") && q(".summary-totals-colors"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        // console.warn(error);
        return false;
    }
})();
