/* 

https://www.steinertractor.com/checkout#/address
*/

(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "steinertractor",
        host: "https://www.steinertractor.com/",
        test_name: "Checkout - Optimize User Interface [D]",
        page_initials: "AB-Checkout-Step-1",
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

    async function createAndUpdateContentLayout() {
        /* ab-show-login, ab-show-registration */
        const html = /* HTML */ `
            <div class="ab-content-wrapper">
                <div class="ab-content-top"></div>
                <div class="ab-content-bottom container">
                    <div class="row">
                        <div class="ab-content-forms col-6"></div>
                        <div class="ab-content-added-product col-6" style="display:flex;justify-content:center;align-items:center;">Added Product</div>
                    </div>
                </div>
            </div>
        `;

        q(".row.content-body").insertAdjacentHTML("afterbegin", html);
        const contentTop = q(".ab-content-top");
        contentTop.appendChild(q(".guest-checkout-optn > h1"));
        contentTop.appendChild(q(".guest-checkout-optn"));

        const formsContainer = q(".ab-content-forms");
        qq(".row.content-body > *:not(.ab-content-wrapper)").forEach((item) => {

            if (q(item, ".Head")?.innerText.includes("Account Login")) {
                item.classList.add("ab-login-form-container");
            } else if (q(item, "#guestCheckoutWrapper")) {
                item.classList.add("ab-guest-checkout-form-container");
            }
            qq(item, "input").forEach((item) => item.setAttribute("placeholder", ""));
            
            formsContainer.appendChild(item);
        });
        qq("body > form > .container.bg-white, .footer").forEach((item) => item.classList.remove("container"));

        q("#showLogin").click();
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createAndUpdateContentLayout();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".progress-stepper .checkout-wrap"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
        return true;
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
