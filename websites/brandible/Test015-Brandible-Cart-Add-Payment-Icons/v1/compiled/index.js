var id = "1755015105072_2302_v1";
var name = "v1";
var testInfo = {
	id: id,
	name: name};

(() => {
    const TEST_CONFIG = {
        test_name: "Test015 [Brandible] - Cart - Add Payment Icons",
        page_initials: "AB-Test015",
        test_variation: 1,
        test_version: 0.0001,
    };

    ASSETS = {
        vorkasse: "https://cdn-3.convertexperiments.com/uf/1004828/10045957/vorkasse_689b6bb67940e.png",
        rechnung: "https://cdn-3.convertexperiments.com/uf/1004828/10045957/rechnung_689b6bb678ee8.png",
        paypal: "https://www.brandible.de/media/wysiwyg/payment_icons/paymentmethod-paypal.svg",
        grouped_payment: "https://www.brandible.de/media/wysiwyg/payment_icons/paymentmethod-creditcard.svg",
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

        console.table({ ID: testInfo.id, Variation: testInfo.name });

        console.log(
            `%c${TEST_CONFIG.test_name}`,
            "background: black; border: 2px solid green; color: white; display: block; text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3); text-align: left; font-weight: bold; padding: 10px; margin: 10px; font-family: monospace; white-space: pre;"
        );

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
    }

    function hasAllTargetElements() {
        return !!(
            window.location.href.includes("brandible.de/checkout/cart/") &&
            document.querySelector(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}) .amazon-checkout-button`)
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
