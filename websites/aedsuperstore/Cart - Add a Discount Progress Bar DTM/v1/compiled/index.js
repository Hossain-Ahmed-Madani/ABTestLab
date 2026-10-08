(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "AED Superstore",
        site_url: "https://www.aedsuperstore.com",
        test_name: "Cart - Add a Discount Progress Bar [DTM]",
        page_initials: "AB-CART-DISCOUNT-PROGRESS",
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

    const checkpoints = [
        {
            checkpoint: 199,
            offer: "Free shipping",
        },
        {
            checkpoint: 1500,
            offer: "$175 off",
        },
        {
            checkpoint: 3000,
            offer: "$450 off",
        },
    ];

    function getProgressData() {
        const txt = q(".summary-totals-colors")?.textContent?.trim() || "";
        const subTotal = parseFloat(txt.replace(/[$,]/g, "")) || 0;

        // Find the next unlocked checkpoint
        const nextOffer = checkpoints.find(({ checkpoint }) => subTotal < checkpoint);

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
    function init() {
        if (window[page_initials] === true) return;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;
        console.table(TEST_CONFIG);

        const { subTotal, progress, nextCheckpoint, nextOffer, needToSpend, maxDiscountReached } = getProgressData();

        console.log("data", subTotal, progress, nextCheckpoint, nextOffer, needToSpend, maxDiscountReached);



        q(".cart-promo-banner").insertAdjacentHTML(
            "beforebegin",
            /* HTML */ `
                <section class="container">
                    <div class="ab-section">
                        <div class="ab-text-container">
                            <p class="ab-progress-text">
                                ${maxDiscountReached
                                    ? /* HTML */ ` <strong>You’ve unlocked $450 off</strong> `
                                    : /* HTML */ `
                                        Spend <strong>$${needToSpend} more</strong> to get
                                        <br />
                                        <strong>$${nextOffer} off</strong>
                                    `}
                            </p>
                        </div>
                        <div class="ab-progress-container" style="--progress:${progress}%;">
                            <div class="shipping-progress">
                                <!-- Top price labels -->
                                <div class="progress-labels">
                                    ${checkpoints
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
                                        ${checkpoints
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
                                    ${checkpoints
                                        .map(
                                            (item, index) => /* HTML */ `
                                                <div class="offer  ${maxDiscountReached || item["checkpoint"] <= subTotal ? "completed" : ""} offer-${index + 1}">
                                                    <span>${item["offer"]}</span>
                                                </div>
                                            `,
                                        )
                                        .join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `,
        );

    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".cart-promo-banner") && q(".summary-totals-colors"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
