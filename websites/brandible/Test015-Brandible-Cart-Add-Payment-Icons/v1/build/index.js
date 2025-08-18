(() => {
    const TEST_CONFIG = {
        test_name: "Test015 [Brandible] - Cart - Add Payment Icons",
        page_initials: "AB-Test015",
        test_variation: 1,
        test_version: 0.0003,
    };

    ASSETS = {
        vorkasse: "https://cdn-3.convertexperiments.com/uf/1004828/10045957/vorkasse_689b6bb67940e.png",
        rechnung: "https://cdn-3.convertexperiments.com/uf/1004828/10045957/rechnung_689b6bb678ee8.png",
        paypal: "https://www.brandible.de/media/wysiwyg/payment_icons/paymentmethod-paypal.svg",
        grouped_payment: "https://cdn-3.convertexperiments.com/uf/1004828/10045957/image-1_689f66d5ea403.png",
    };

    function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
        try {
            if (timer <= 0) {
                throw new Error(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            } else if (predicate && predicate()) {
                callback();
            } else {
                setTimeout(() => {
                    waitForElement(predicate, callback, timer - frequency, frequency);
                }, frequency);
            }
        } catch (error) {
            return;
        }
    }

    function init() {
        document.body.classList.add(TEST_CONFIG.page_initials, `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`, `${TEST_CONFIG.page_initials}--version${TEST_CONFIG.test_version}`);

        document.querySelector(".amazon-checkout-button").insertAdjacentHTML(
            "beforebegin",
            /* HTML */ `
                <div class="ab-shop-safely">
                    <ul class="ab-shop-safely__img-container">
                        ${Object.entries(ASSETS)
                            .map(
                                ([key, url]) => /* HTML */ `
                                    <li class="ab-shop-safely__img-item">
                                        <img src="${url}" class="ab-shop-safely__img" alt="${key}" />
                                    </li>
                                `
                            )
                            .join("")}
                    </ul>
                </div>
            `
        );

        document.querySelector(".amazon-checkout-button img.amazonpay-button-inner-image").setAttribute("src", "https://cdn-3.convertexperiments.com/uf/1004828/10045957/amazon-pay_689f61d69e315.png");
    }

    function hasAllTargetElements() {
        return !!(
            window.location.href.includes("brandible.de/checkout/cart/") &&
            document.querySelector(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) &&
            document.querySelector(".amazon-checkout-button img.amazonpay-button-inner-image")
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
