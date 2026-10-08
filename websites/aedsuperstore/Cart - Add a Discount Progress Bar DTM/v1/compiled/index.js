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

    function init() {
        if (window[page_initials] === true) return;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;
        console.table(TEST_CONFIG);

        q(".cart-promo-banner").insertAdjacentHTML(
            "beforebegin",
            /* HTML */ `
                <section class="container">
                    <div class="ab-section">
                        <div class="ab-text-container">
                            <p class="ab-progress-text">
                                Spend <strong>$914 more</strong> to get
                                <br />
                                <strong>$450 off</strong>
                            </p>
                        </div>
                        <div class="ab-progress-container">
                            <div class="shipping-progress">
                                <!-- Top price labels -->
                                <div class="progress-labels">
                                    <span class="min-price">$0</span>
                                    <span class="checkpoint-label checkpoint-1"> $199 </span>
                                    <span class="checkpoint-label checkpoint-2"> $1,500 </span>
                                    <span class="max-price">$4,000</span>
                                </div>

                                <!-- Progress bar -->
                                <div class="progress-track-container">
                                    <div class="progress-track">
                                        <!-- Filled progress -->
                                        <div class="progress-fill"></div>

                                        <!-- Checkpoints -->
                                        <div class="checkpoint checkpoint-1"></div>
                                        <div class="checkpoint checkpoint-2"></div>
                                        <div class="checkpoint checkpoint-3"></div>
                                    </div>
                                </div>

                                <!-- Offer labels -->
                                <div class="offer-labels">
                                    <div class="offer offer-1">
                                        <span>Free shipping</span>
                                    </div>
                                    <div class="offer offer-2">
                                        <span>$175 off</span>
                                    </div>
                                    <div class="offer offer-3">
                                        <span>$450 off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `,
        );
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".cart-promo-banner"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
