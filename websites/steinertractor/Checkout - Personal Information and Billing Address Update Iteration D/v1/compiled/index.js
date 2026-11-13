(async function () {
    const TEST_CONFIG = {
        page_initials: "AB-Checkout-Step-1-2",
        test_variation: 1,
        test_version: 0.00031,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    async function waitForElementAsync(predicate, timeout = 10000, frequency = 150) {
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

    async function updateShippingTopBox() {
        // Add heading items

        q("head").insertAdjacentHTML(
            "beforeend",
            /* HTML */ `
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            `
        );

        q("app-progress-stepper + h4").innerText = "Personal Information";

        qq("eve-shipping-address .address-text").forEach((item) => {
            if (q(item, "strong").innerText.includes("Delivery Address")) {
                q(item, "strong").innerText = "Shipping Address";
            }

            q(item, "div:not(.btn)").appendChild(q(item, ".btn"));

            const div = document.createElement("div");
            div.className = "ab-shipping-address-wrapper";
            qq(item, ":scope > *:not(p:first-of-type)").forEach((child) => div.appendChild(child));
            item.appendChild(div);
        });
    }

    // ===========  MAIN JS ===========

    const PATHS = {
        shipping_checkout: "/checkout#/main",
    };

    async function init() {
        if (window[page_initials]) return;
        window[page_initials] = true;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`, "AB-Shipping-Checkout");
        updateShippingTopBox();
    }

    function checkForItems() {
        const currentPath = (window.location.pathname + window.location.hash).toLowerCase();

        if (!Object.keys(PATHS).some((key) => currentPath === PATHS[key])) {
            return false;
        }

        return !!(
            document.readyState !== "loading" &&
            q(`body:not(.${page_initials})`) &&
            q(`body:not(.${page_initials}--v${test_variation})`) &&
            q(`body:not(.AB-Shipping-Checkout)`) &&
            q("select#shipping") &&
            q("eve-payment-options") &&
            qq("body > form > .container.bg-white, .footer").length >= 3 &&
            q("#newsletter") &&
            q(".progress-stepper .checkout-wrap") &&
            q(".row.content-body")
        );
    }

    await waitForElementAsync(checkForItems);
    init();
})();
