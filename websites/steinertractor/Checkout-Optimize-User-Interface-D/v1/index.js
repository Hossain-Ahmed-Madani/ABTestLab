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

    async function fetchAndParseURLApi(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const html = await response.text();
            const dom = new DOMParser().parseFromString(html, "text/html");
            return dom;
        } catch (error) {
            // console.error("Fetch and parse failed:", error);
            return null;
        }
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

    async function waitForPromiseOnMutation(predicate, maxCount = 50) {
        let count = 0;

        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve(true);
            }

            new MutationObserver((mutationList, observer) => {
                count++;

                if (typeof predicate === "function" && predicate()) {
                    observer.disconnect();
                    return resolve(true);
                } else if (count > maxCount) {
                    observer.disconnect();
                    return reject(new Error(`Max polling count ${count} reached while waiting for predicate:\n${predicate.toString()}`));
                }
            }).observe(document.body, { childList: true, subtree: true });
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

    function getCookie(key) {
        try {
            if (!key || typeof key !== "string") {
                // console.error("Invalid key provided to getCookie");
                return null;
            }

            // Encode the key to handle special characters
            const encodedKey = encodeURIComponent(key);
            const cookies = `; ${document.cookie}`;

            // Find the cookie value
            const parts = cookies.split(`; ${encodedKey}=`);

            if (parts.length === 2) {
                const value = parts.pop().split(";").shift();
                return value ? decodeURIComponent(value) : null;
            }

            return null;
        } catch (error) {
            // console.error(`Error reading cookie "${key}":`, error);
            return null;
        }
    }

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    function updateLayoutOnMutation() {
        //
    }

    function mutationObserverFunction() {
        const targetNode = q(".my-new-selector");
        if (!targetNode) return;
        const debouncedUpdate = debounce(updateLayoutOnMutation, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    const DATA = {
        forms: {
            personal_information: {
                title: "Personal Information",
                id: "personal-information",
                inputList: [
                    {
                        id: "ab-company",
                        type: "text",
                        label: "Company",
                        required: false,
                        className: "col-12",
                        targetNode: "",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-first-name",
                        type: "text",
                        label: "First name",
                        required: true,
                        className: "col-6",
                        targetNode: "",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-last-name",
                        type: "text",
                        label: "Last name",
                        required: true,
                        className: "col-6 ab-pl-0",
                        targetNode: "",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-phone",
                        type: "text",
                        label: "Phone",
                        required: true,
                        className: "col-6",
                        targetNode: "",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-ext",
                        type: "tel",
                        label: "Ext",
                        required: true,
                        className: "col-6 ab-pl-0",
                        targetNode: "",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-email",
                        type: "email",
                        label: "Email",
                        required: true,
                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}",
                        className: "col-12",
                        targetNode: "",
                        value: "",
                        errorMessage: "Please enter a valid email address",
                    },
                ],
            },
            billing_address: {
                title: "Test Name",
                id: "billing-address",
                inputList: [
                    {
                        id: "auto",
                        name: "Company",
                        type: "text",
                        label: "Company",
                        required: false,
                        className: "",
                        targetNode: "",
                        errorMessage: "",
                    },
                ],
            },
            shipping_address: {
                title: "Shipping Address",
                id: "shipping-address",
                inputList: [
                    {
                        id: "ab-same-as-billing",
                        type: "checkbox",
                        label: "Use the same address for delivery.",
                        className: "col-12",
                        targetNode: "#sameAsBilling",
                        checked: true
                    },
                    {
                        id: "ab-create-account",
                        type: "checkbox",
                        label: "Register as a customer. Customers can view order history and shipping status and track previous orders.",
                        className: "col-12",
                        targetNode: "#createAccount",
                        checked: false
                    },
                ],
                actionList: [
                    {
                        id: "ab-continue-as-guest",
                        label: "Continue as Guest",
                        className: "col-8",
                        disabled: true,
                        callback: () => {},
                        targetNode: "#guestCheckoutWrapper button[type='submit']",
                    },
                    {
                        id: "ab-need-help",
                        className: "col-4 ab-pl-0",
                        label: "Need help?",
                        callback: () => {},
                        targetNode: "#validation-errors",
                    },
                ],
            },
        },
    };

    function getFormComponent(formObj) {
        const { title, id: formId, inputList, actionList } = formObj;
        const form = document.createElement("form");
        form.setAttribute("id", formId);
        form.className = "ab-form";

        form.insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <h2 class="ab-form-heading">${title}</h2>
                <div class="ab-form-input-container row">
                    ${inputList
                        .map(({ id, type, label, required, pattern, className, targetNode, value, errorMessage }) => {
                            return /* HTML */ `
                                <div class="ab-col ab-form-col col ${className}">
                                    <label for="${id}" class="ab-form-group" targetNode="${targetNode}">
                                        <span class="ab-label">${label}</span>
                                        <input
                                            id="${id}"
                                            class="ab-input"
                                            type="${type}"
                                            placeholder=""
                                            ${value ? `value="${value}"` : ""}
                                            ${required ? `required` : ""}
                                            ${pattern ? `pattern="${pattern}"` : ""}
                                        />
                                    </label>
                                    <span class="ab-error-message">${errorMessage ? errorMessage : `${label} is required`} </span>
                                </div>
                            `;
                        })
                        .join("")}
                </div>
            `
        );

        if (actionList && actionList.length > 0) {
            const actionContainer = document.createElement("div");

            actionContainer.className = "ab-form-action-container row";

            actionList.forEach(({ id, label, callback, disabled, className }) => {
                const div = document.createElement("div");
                div.className = `ab-action-col col ${className}`;

                const button = document.createElement("button");
                button.setAttribute("id", id);
                button.setAttribute("type", "button");
                if (disabled) button.setAttribute("disabled", "true");
                button.innerText = label;
                button.addEventListener("click", callback);

                div.appendChild(button);
                actionContainer.appendChild(div);
            });

            form.appendChild(actionContainer);
        }

        return form;
    }

    function getGuestCheckoutFormLayout() {
        const { personal_information, billing_address, shipping_address } = DATA["forms"];

        const div = document.createElement("div");
        div.classList.add("ab-guest-checkout-form");

        const personalInformationForm = getFormComponent(personal_information);
        const billingAddressForm = getFormComponent(billing_address);
        const shippingAddressForm = getFormComponent(shipping_address);

        div.insertAdjacentHTML("afterbegin", /* HTML */ ` <h1 class="ab-guest-checkout-header">Checkout with New Account</h1> `);
        div.appendChild(personalInformationForm);
        div.appendChild(billingAddressForm);
        div.appendChild(shippingAddressForm);

        return div;
    }

    function getGuestCheckoutLayout() {
        const div = document.createElement("div");
        div.className = "ab-guest-checkout-wrapper";

        const controlGuestCheckoutForm = qq(".row.content-body > *:not(.ab-content-wrapper)").find((item) => !!q(item, "#guest-checkout-form"));
        const abGuestCheckoutForm = getGuestCheckoutFormLayout();

        div.appendChild(abGuestCheckoutForm);
        div.appendChild(controlGuestCheckoutForm);

        return div;
    }

    function getLoginLayoutElement() {
        const targetNode = qq(".row.content-body > *:not(.ab-content-wrapper)").find((item) => !!q(item, ".Head")?.innerText.includes("Account Login"));
        targetNode.classList.add("ab-login-form-container");
        return targetNode;
    }

    function getWrapperElement() {
        /* ab-show-login, ab-show-registration */
        const div = document.createElement("div");
        div.className = "ab-content-wrapper";
        div.innerHTML = /* HTML */ `
            <div class="ab-content-top"></div>
            <div class="ab-content-bottom container">
                <div class="row">
                    <div class="ab-content-forms col-6"></div>
                    <div class="ab-content-added-product col-6" style="display:flex;justify-content:center;align-items:center;">Added Product</div>
                </div>
            </div>
        `;

        q(".row.content-body").insertAdjacentElement("afterbegin", div);

        return div;
    }

    async function createLayout() {
        const mainWrapperElement = getWrapperElement();
        const loginLayoutElement = getLoginLayoutElement();
        const guestCheckoutLayoutElement = getGuestCheckoutLayout();

        const contentTop = q(mainWrapperElement, ".ab-content-top");
        qq(".guest-checkout-optn > h1, .guest-checkout-optn").forEach((item) => contentTop.insertAdjacentElement("afterbegin", item));

        const formsContainer = q(mainWrapperElement, ".ab-content-forms");
        formsContainer.appendChild(loginLayoutElement);
        formsContainer.appendChild(guestCheckoutLayoutElement);

        q("#showLogin")?.click();
    }

    function updateLayout() {
        qq(".row.content-body  *:not(.ab-content-wrapper) input").forEach((item) => item.setAttribute("placeholder", ""));
        qq("body > form > .container.bg-white, .footer").forEach((item) => item.classList.remove("container"));
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        updateLayout();
        createLayout();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && q(".progress-stepper .checkout-wrap") && q("input#coAddress"));
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
