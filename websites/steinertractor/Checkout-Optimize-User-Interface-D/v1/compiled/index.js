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
                        type: "tel",
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
                title: "Billing Address",
                id: "billing-address",
                inputList: [
                    {
                        id: "ab-country",
                        type: "select" /* Dropdown/Select */,
                        optionList: [],
                        label: "Country",
                        className: "col-6",
                        required: true,
                        targetNode: "select[name='CountryId']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-phone-bill",
                        type: "tel",
                        label: "Phone",
                        required: false,
                        className: "col-6 ab-pl-0",
                        targetNode: "",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-street-address",
                        type: "text",
                        label: "Street Address",
                        required: true,
                        className: "col-12",
                        targetNode: "",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-street-address-two",
                        type: "text",
                        label: "Street address 2",
                        required: true,
                        className: "col-12",
                        targetNode: "",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-city",
                        type: "text",
                        label: "City",
                        required: true,
                        className: "col-4",
                        targetNode: "",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-state",
                        type: "select" /* Dropdown/Select */,
                        label: "State",
                        optionList: [],
                        required: true,
                        className: "col-4 ab-pl-0",
                        targetNode: "",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-zip-code",
                        type: "text",
                        label: "Zip code",
                        required: true,
                        className: "col-4 ab-pl-0",
                        targetNode: "",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-carriers",
                        subtitle: "Which carriers offer delivery service to this address?",
                        type: "select" /* Dropdown/Select */,
                        label: "All Carriers",
                        optionList: [],
                        required: true,
                        className: "col-12",
                        targetNode: "select#ShipMethod",
                        value: "",
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
                        checked: true,
                    },
                    {
                        id: "ab-create-account",
                        type: "checkbox",
                        label: "Register as a customer. Customers can view order history and shipping status and track previous orders.",
                        className: "col-12",
                        targetNode: "#createAccount",
                        checked: false,
                    },
                ],
                actionList: [
                    {
                        id: "ab-continue-as-guest",
                        label: "Continue as Guest",
                        className: "col-8",
                        disabled: true,
                        targetNode: "#guestCheckoutWrapper button[type='submit']",
                    },
                    {
                        id: "ab-need-help",
                        className: "col-4 ab-pl-0",
                        label: "Need help?",
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
                ${inputList && inputList.length > 0
                    ? `
                        <div class="ab-form-input-container row">
                        ${inputList
                            .map(({ id, title, subtitle, type: inputType, optionList, label, required, pattern, className, targetNode, value, errorMessage }) => {
                                if (inputType === "select") {
                                    console.log(optionList);
                                }

                                return /* HTML */ `
                                    <div class="ab-col ab-form-col col ${className}">
                                        ${title ? `<span class="ab-form-title">${title}</span>` : ""} ${subtitle ? `<span class="ab-form-subtitle">${subtitle}</span>` : ""}
                                        <label for="${id}" class="ab-form-group">
                                            <span class="ab-label">${label}</span>
                                            ${inputType === "select"
                                                ? ` 
                                                <select
                                                    id="${id}"
                                                    class="ab-input"
                                                    type="${inputType}"
                                                    targetNode="${targetNode}"
                                                    placeholder=""
                                                    ${value ? `value="${value}"` : ""}
                                                    ${required ? `required` : ""}
                                                    ${pattern ? `pattern="${pattern}"` : ""}
                                                >
                                                    <option value>${label}</option>
                                                    ${
                                                        targetNode && q(targetNode)
                                                            ? `
                                                            ${qq(targetNode + "> option:not(:first-child)")
                                                                .map((item) => item.outerHTML)
                                                                .join("")}
                                                            `
                                                            : ""
                                                    }
                                                </select>`
                                                : `
                                                    <input
                                                        id="${id}"
                                                        class="ab-input"
                                                        type="${inputType}"
                                                        placeholder=""
                                                        ${value ? `value="${value}"` : ""}
                                                        ${required ? `required` : ""}
                                                        ${pattern ? `pattern="${pattern}"` : ""}
                                                        targetNode="${targetNode}"
                                                    />
                                                `}
                                        </label>
                                        <span class="ab-error-message">${errorMessage ? errorMessage : `${label} is required`} </span>
                                    </div>
                                `;
                            })
                            .join("")}

                        </div>
                    `
                    : ""}
                ${actionList && actionList.length > 0
                    ? `
                        <div class="ab-form-action-container row">
                            ${actionList
                                .map(
                                    ({ id, label, disabled, className, targetNode }) => /* HTML */ `
                                        <div class="ab-action-col col ${className}">
                                            <button type="button" id="${id}" ${disabled ? "disabled" : ""} targetNode="${targetNode}">${label}</button>
                                        </div>
                                    `
                                )
                                .join("")}
                        </div>`
                    : ""}
            `
        );

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

    async function createAndUpdateLayout() {
        // Update
        qq(".row.content-body  *:not(.ab-content-wrapper) input").forEach((item) => item.setAttribute("placeholder", ""));
        qq("body > form > .container.bg-white, .footer").forEach((item) => item.classList.remove("container"));

        // Create
        const mainWrapperElement = getWrapperElement();
        const loginLayoutElement = getLoginLayoutElement();
        const guestCheckoutLayoutElement = getGuestCheckoutLayout();

        const contentTop = q(mainWrapperElement, ".ab-content-top");
        qq(".guest-checkout-optn > h1, .guest-checkout-optn").forEach((item) => contentTop.insertAdjacentElement("afterbegin", item));

        const formsContainer = q(mainWrapperElement, ".ab-content-forms");
        formsContainer.appendChild(loginLayoutElement);
        formsContainer.appendChild(guestCheckoutLayoutElement);
    }

    function eventHandler() {
        q("#showLogin")?.click();
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        createAndUpdateLayout();
        eventHandler();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) &&
            q(".progress-stepper .checkout-wrap") &&
            q("input#coAddress") &&
            qq("select[name='CountryId'] > option").length > 1 &&
            qq("select#ShipMethod > option").length > 1
        );
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
