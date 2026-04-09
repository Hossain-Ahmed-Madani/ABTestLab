/* 
Test container: https://marketer.monetate.net/control/a-880bc965/p/shopguideposts.org/experience/2102196#

Preview excluding all:
v1: https://marketer.monetate.net/control/preview/12053/N3NPRQWUEMY6RVF1UA7LZ1RGGDUGQ3NB/102-product-magazine-gifting
v2: https://marketer.monetate.net/control/preview/12053/LEQTX4SV57Y3YK8WMH0V8S3602V848O5/102-product-magazine-gifting

Preview including all:
v1: https://marketer.monetate.net/control/preview/12053/LXPDSGEB1HN94DB5X3C5IDHQN6BJK46E/102-product-magazine-gifting
v2: https://marketer.monetate.net/control/preview/12053/UYOLGGWT5KX59R61A5LFVBSW60N9O4CX/102-product-magazine-gifting

*/

(async () => {
    const TEST_ID = "GP102";
    const VARIANT_ID = "V1"; /* Control, V1, V2 */

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color:white;background:rgb(0,0,57);font-weight:700;padding:2px 4px;border-radius:2px;",
            "margin-left:8px;color:white;background:rgb(0,57,57);font-weight:700;padding:2px 4px;border-radius:2px;",
            message,
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        page_initials: "AB-GP102",
        test_variation: 1 /* 0, 1, 2 */,
        test_version: 0.0003,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        gift_icon_svg: /* HTML */ `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.6667 6.66669H3.33333C2.8731 6.66669 2.5 7.03978 2.5 7.50002V9.16669C2.5 9.62692 2.8731 10 3.33333 10H16.6667C17.1269 10 17.5 9.62692 17.5 9.16669V7.50002C17.5 7.03978 17.1269 6.66669 16.6667 6.66669Z"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path d="M10 6.66669V17.5" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M15.8334 10V15.8333C15.8334 16.2754 15.6578 16.6993 15.3453 17.0118C15.0327 17.3244 14.6088 17.5 14.1667 17.5H5.83341C5.39139 17.5 4.96746 17.3244 4.6549 17.0118C4.34234 16.6993 4.16675 16.2754 4.16675 15.8333V10"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M6.25008 6.66666C5.69755 6.66666 5.16764 6.44717 4.77694 6.05647C4.38624 5.66577 4.16675 5.13587 4.16675 4.58333C4.16675 4.0308 4.38624 3.50089 4.77694 3.11019C5.16764 2.71949 5.69755 2.5 6.25008 2.5C7.05399 2.48599 7.84177 2.87605 8.51069 3.6193C9.17962 4.36255 9.69864 5.4245 10.0001 6.66666C10.3015 5.4245 10.8205 4.36255 11.4895 3.6193C12.1584 2.87605 12.9462 2.48599 13.7501 2.5C14.3026 2.5 14.8325 2.71949 15.2232 3.11019C15.6139 3.50089 15.8334 4.0308 15.8334 4.58333C15.8334 5.13587 15.6139 5.66577 15.2232 6.05647C14.8325 6.44717 14.3026 6.66666 13.7501 6.66666"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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

    const TXT = ["Makes a <br/> Great Gift", "Popular <br/> Gift"];

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);

        q(".woocommerce-product-gallery .wpgs-image").insertAdjacentHTML(
            "afterend",
            /* HTML */ `
                <div class="ab-magazine-tag">
                    <div class="ab-magazine-tag__icon">${ASSETS.gift_icon_svg}</div>
                    <div class="ab-magazine-tag__text">${TXT[test_variation - 1]}</div>
                </div>
            `,
        );
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q(".woocommerce-product-gallery .wpgs-image") &&
            q(".woocommerce-product-gallery__image.slick-active")
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
