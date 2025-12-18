/* 
https://www.steinertractor.com/guestcheckout?returnurl=/checkout
https://www.steinertractor.com/checkout#/address
https://www.steinertractor.com/checkout#/main

Figma: https://www.figma.com/design/8qOYEM40DrLkcFtP6ZFY3N/Steiner-Tractor?node-id=3492-2&p=f&t=ZD282H7VVVlTJ2FM-0

Test container: https://app.convert.com/accounts/100412165/projects/10043124/experiences/1004178648/summary
Forced variation v1:  https://www.steinertractor.com/guestcheckout?_conv_eforce=1004178648.1004420738&utm_campaign=qa5&returnurl=%2Fcheckout

*/

(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "steinertractor",
        host: "https://www.steinertractor.com",
        path: window.location.pathname,
        hash: window.location.hash,
        test_name: "Checkout - Optimize User Interface [D]",
        page_initials: "AB-Checkout-Step-1-2",
        test_variation: 1,
        test_version: 0.0002,
    };

    const { host, path, hash, page_initials, test_variation, test_version } = TEST_CONFIG;

    const DATA = {
        text_based_input_list: ["text", "tel", "number", "email", "password", "url", "search"],
        forms: {
            // Guest Checkout
            guest_personal_information: {
                title: "Personal Information",
                id: "personal-information",
                inputList: [
                    {
                        id: "ab-company",
                        type: "text",
                        label: "Company",
                        required: false,
                        className: "col-12",
                        control_node_selector: "#company",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-first-name",
                        type: "text",
                        label: "First name",
                        required: true,
                        className: "col-6",
                        control_node_selector: "input[name='FirstName']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-last-name",
                        type: "text",
                        label: "Last name",
                        required: true,
                        className: "col-6 ab-pl-0",
                        control_node_selector: "#lastName",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-phone",
                        type: "tel",
                        label: "Phone",
                        required: true,
                        className: "col-6",
                        control_node_selector: "#phonereg, #phone",
                        dependency_node_selector: "#ab-billing-phone-bill",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-ext",
                        type: "tel",
                        label: "Ext",
                        required: true,
                        className: "col-6 ab-pl-0",
                        control_node_selector: "#ext",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-email",
                        type: "email",
                        label: "Email",
                        required: true,
                        className: "col-12",
                        control_node_selector: "#ResetEmail",
                        value: "",
                        errorMessage: "Please enter a valid email address",
                    },
                ],
            },
            guest_billing_address: {
                title: "Billing Address",
                id: "billing-address",
                inputList: [
                    {
                        id: "ab-billing-country",
                        type: "select" /* Dropdown/Select */,
                        optionList: [],
                        label: "Country",
                        className: "col-6",
                        required: true,
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(6) select[name='CountryId']",
                        dependency_node_selector: "select#ab-billing-state",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-billing-phone-bill",
                        type: "tel",
                        label: "Phone",
                        required: false,
                        className: "col-6 ab-pl-0",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(6) #phone",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-billing-street-address",
                        type: "text",
                        label: "Street Address",
                        required: true,
                        className: "col-12",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(6) #coAddress",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-billing-street-address-two",
                        type: "text",
                        label: "Street address 2",
                        required: true,
                        className: "col-12",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(6) #coAddress2",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-billing-city",
                        type: "text",
                        label: "City",
                        required: true,
                        className: "col-4",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(6) #coCity",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-billing-state",
                        type: "select" /* Dropdown/Select */,
                        label: "State",
                        optionList: [],
                        required: true,
                        className: "col-4 ab-pl-0",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(6) select[name='StateId']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-billing-zip-code",
                        type: "text",
                        label: "Zip code",
                        required: true,
                        className: "col-4 ab-pl-0",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(6) #coZip",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-billing-carriers",
                        subtitle: "Which carriers offer delivery service to this address?",
                        type: "select" /* Dropdown/Select */,
                        label: "All Carriers",
                        optionList: [],
                        required: false,
                        className: "col-12",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(6) select#ShipMethod",
                        value: "",
                        errorMessage: "",
                    },
                ],
            },
            guest_delivery_address: {
                title: "Delivery Address",
                id: "delivery-address",
                inputList: [
                    {
                        id: "ab-delivery-country",
                        type: "select" /* Dropdown/Select */,
                        optionList: [],
                        label: "Country",
                        className: "col-6",
                        required: true,
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(9) select[name='CountryId']",
                        dependency_node_selector: "select#ab-delivery-state",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-delivery-phone-bill",
                        type: "tel",
                        label: "Phone",
                        required: false,
                        className: "col-6 ab-pl-0",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(9) #phone",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-delivery-street-address",
                        type: "text",
                        label: "Street Address",
                        required: true,
                        className: "col-12",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(9) #coAddress",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-delivery-street-address-two",
                        type: "text",
                        label: "Street address 2",
                        required: true,
                        className: "col-12",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(9) #coAddress2",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-delivery-city",
                        type: "text",
                        label: "City",
                        required: true,
                        className: "col-4",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(9) #coCity",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-delivery-state",
                        type: "select" /* Dropdown/Select */,
                        label: "State",
                        optionList: [],
                        required: true,
                        className: "col-4 ab-pl-0",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(9) select[name='StateId']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-delivery-zip-code",
                        type: "text",
                        label: "Zip code",
                        required: true,
                        className: "col-4 ab-pl-0",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(9) #coZip",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-delivery-carriers",
                        subtitle: "Which carriers offer delivery service to this address?",
                        type: "select" /* Dropdown/Select */,
                        label: "All Carriers",
                        optionList: [],
                        required: false,
                        className: "col-12",
                        control_node_selector: "#guestCheckoutWrapper >  form > div:nth-child(9) select#ShipMethod",
                        value: "",
                        errorMessage: "",
                    },
                ],
            },
            guest_create_account: {
                title: "Create Account",
                id: "guest-create-account",
                inputList: [
                    {
                        id: "ab-guest-password",
                        type: "password",
                        label: "Password",
                        className: "col-6",
                        control_node_selector: "#Password",
                        errorMessage: "Password must be at least 7 characters long",
                    },
                    {
                        id: "ab-guest-retype-password",
                        type: "password",
                        label: "Confirm Password",
                        className: "col-6 ab-pl-0",
                        control_node_selector: "#confirmPassword",
                        errorMessage: "Passwords do not match",
                    },
                ],
            },
            guest_shipping_address: {
                title: "Shipping Address",
                id: "shipping-address",
                inputList: [
                    {
                        id: "ab-guest-same-as-billing",
                        type: "checkbox",
                        label: "Use the same address for delivery.",
                        className: "col-12",
                        control_node_selector: "#sameAsBilling",
                        checked: true,
                    },
                    {
                        id: "ab-guest-create-account",
                        type: "checkbox",
                        label: "Register as a customer. Customers can view order history and shipping status and track previous orders.",
                        className: "col-12",
                        control_node_selector: "#createAccount",
                        checked: false,
                    },
                ],
                actionList: [
                    {
                        id: "ab-continue-as-guest",
                        label: "Continue as Guest",
                        className: "col-8",
                        disabled: true,
                        control_node_selector: "#guestCheckoutWrapper button[type='submit']",
                    },
                    {
                        id: "ab-need-help",
                        className: "col-4 ab-pl-0",
                        label: "Need help?",
                        control_node_selector: "#help-button",
                    },
                ],
            },
            guest_action_container: {
                title: "",
                id: "guest-submit-actions",
                inputList: [],
                actionList: [
                    {
                        id: "ab-continue-as-guest",
                        label: "Continue as Guest",
                        className: "col-8",
                        disabled: true,
                        control_node_selector: "#guestCheckoutWrapper button[type='submit']",
                    },
                    {
                        id: "ab-need-help",
                        className: "col-4 ab-pl-0",
                        label: "Need help?",
                        control_node_selector: "#help-button",
                    },
                ],
            },
            // Checkout
            checkout_billing_address: {
                title: "Billing Address",
                id: "billing-address",
                inputList: [
                    {
                        id: "ab-billing-full-name",
                        type: "text",
                        label: "Full name",
                        required: true,
                        className: "col-12",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form input[name='DisplayName']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-billing-country",
                        type: "select" /* Dropdown/Select */,
                        optionList: [],
                        label: "Country",
                        className: "col-6",
                        required: true,
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:first-of-type  > eve-address-form select[name='CountryId']",
                        dependency_node_selector: "select#ab-billing-state",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-billing-phone-bill",
                        type: "tel",
                        label: "Phone",
                        required: false,
                        className: "col-6 ab-pl-0",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form #coPhone",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-billing-street-address",
                        type: "text",
                        label: "Street Address",
                        required: true,
                        className: "col-12",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form #coAddress",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-billing-street-address-two",
                        type: "text",
                        label: "Street address 2",
                        required: true,
                        className: "col-12",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form #coAddress2",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-billing-city",
                        type: "text",
                        label: "City",
                        required: true,
                        className: "col-4",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form #coCity",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-billing-state",
                        type: "select" /* Dropdown/Select */,
                        label: "State",
                        optionList: [],
                        required: true,
                        className: "col-4 ab-pl-0",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form select[name='StateId']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-billing-zip-code",
                        type: "text",
                        label: "Zip code",
                        required: true,
                        className: "col-4 ab-pl-0",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form #coZip",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-billing-carriers",
                        subtitle: "Which carriers offer delivery service to this address?",
                        type: "select" /* Dropdown/Select */,
                        label: "All Carriers",
                        optionList: [],
                        required: false,
                        className: "col-12",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form select#carrier",
                        value: "",
                        errorMessage: "",
                    },
                ],
            },
            checkout_shipping_address: {
                title: "Shipping Address",
                id: "shipping-address",
                inputList: [
                    {
                        id: "ab-shipping-full-name",
                        type: "text",
                        label: "Full name",
                        required: true,
                        className: "col-12",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:last-of-type   > eve-address-form input[name='DisplayName']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-shipping-country",
                        type: "select" /* Dropdown/Select */,
                        optionList: [],
                        label: "Country",
                        className: "col-6",
                        required: true,
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:last-of-type   > eve-address-form select[name='CountryId']",
                        dependency_node_selector: "select#ab-shipping-state",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-shipping-phone-bill",
                        type: "tel",
                        label: "Phone",
                        required: false,
                        className: "col-6 ab-pl-0",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form #coPhone",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-shipping-street-address",
                        type: "text",
                        label: "Street Address",
                        required: true,
                        className: "col-12",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form #coAddress",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-shipping-street-address-two",
                        type: "text",
                        label: "Street address 2",
                        required: true,
                        className: "col-12",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form #coAddress2",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-shipping-city",
                        type: "text",
                        label: "City",
                        required: true,
                        className: "col-4",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form #coCity",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-shipping-state",
                        type: "select" /* Dropdown/Select */,
                        label: "State",
                        optionList: [],
                        required: true,
                        className: "col-4 ab-pl-0",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form select[name='StateId']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-shipping-zip-code",
                        type: "text",
                        label: "Zip code",
                        required: true,
                        className: "col-4 ab-pl-0",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form #coZip",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-shipping-carriers",
                        subtitle: "Which carriers offer delivery service to this address?",
                        type: "select" /* Dropdown/Select */,
                        label: "All Carriers",
                        optionList: [],
                        required: false,
                        className: "col-12",
                        control_node_selector: "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form select#carrier",
                        value: "",
                        errorMessage: "",
                    },
                ],
            },
            checkout_same_billing: {
                title: "",
                id: "same-billing",
                inputList: [
                    {
                        id: "ab-checkout-same-as-billing",
                        type: "checkbox",
                        label: "Use the same address for delivery.",
                        className: "col-8 col-lg-7",
                        control_node_selector: "#sameShip",
                        checked: true,
                    },
                ],
                actionList: [
                    {
                        id: "ab-continue-checkout",
                        label: "Continue Checkout",
                        className: "col-8",
                        disabled: true,
                        control_node_selector: "app-address-management > button.btn.btn-primary.mt-5.text-right",
                    },
                ],
            },
            // Shipping & Review
            payment_options_credit_or_debit: {
                title: "",
                id: "payment-options-credit-or-debit",
                inputList: [
                    {
                        id: "ab-name-on-card",
                        type: "text",
                        label: "Name on Card",
                        required: true,
                        className: "col-12",
                        control_node_selector: "#cardName",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-credit-debit",
                        type: "text",
                        label: "Credit/Debit Card Number",
                        required: true,
                        className: "col-12",
                        control_node_selector: "#creditCardNumber",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-month",
                        type: "select" /* Dropdown/Select */,
                        optionList: [],
                        label: "MM",
                        className: "col-6",
                        required: true,
                        control_node_selector: "#month",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-year",
                        type: "select" /* Dropdown/Select */,
                        optionList: [],
                        label: "YY",
                        className: "col-6 ab-pl-0",
                        required: true,
                        control_node_selector: "#year",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-cvv",
                        type: "tel",
                        label: "CVV / CSC",
                        required: true,
                        className: "col-6",
                        control_node_selector: "input[name='ccv']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-po-number",
                        type: "tel",
                        label: "PO Number",
                        className: "col-6 ab-pl-0",
                        control_node_selector: "input[formcontrolname='ExternalPurchaseOrderNumber']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-check-same-as-billing",
                        type: "checkbox",
                        label: "Check if billing address is same as above",
                        className: "col-12",
                        control_node_selector: "input[type='checkbox'].form-check.ng-valid",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-address-line-1",
                        type: "text",
                        label: "Address Line 1",
                        required: true,
                        className: "col-12",
                        control_node_selector: "input[formcontrolname='addressOne']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-address-line-2",
                        type: "text",
                        label: "Address Line 2",
                        className: "col-12",
                        control_node_selector: "input[formcontrolname='addressTwo']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-country",
                        type: "select" /* Dropdown/Select */,
                        optionList: [],
                        label: "Country",
                        className: "col-12",
                        required: true,
                        control_node_selector: "select[formcontrolname='country']",
                        dependency_node_selector: "select#ab-state",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-city",
                        type: "text",
                        label: "City",
                        className: "col-4",
                        required: true,
                        control_node_selector: "input[formcontrolname='city']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-state",
                        type: "select" /* Dropdown/Select */,
                        optionList: [],
                        label: "State",
                        className: "col-4 ab-pl-0",
                        required: true,
                        control_node_selector: "select[formcontrolname='state']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-zip-code",
                        type: "text",
                        label: "ZIP code",
                        className: "col-4 ab-pl-0",
                        required: true,
                        control_node_selector: "input[formcontrolname='zip']",
                        value: "",
                        errorMessage: "",
                    },
                ],
                actionList: [
                    {
                        id: "ab-place-order",
                        label: "Place Order",
                        className: "col-12",
                        disabled: true,
                        control_node_selector: "eve-authorizenet .btn.btn-primary",
                    },
                ],
            },
        },
    };

    async function fetchCartData() {
        const response = await fetch("https://www.steinertractor.com/api/carts/carts_read", {
            method: "GET",
            headers: {
                accept: "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                // authorization: "Bearer your-token-here", // If needed
                "x-requested-with": "XMLHttpRequest",
            },
            credentials: "include",
        });

        return await response.json();
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

    //  ========= FORM BUILDER =========
    function getFormLayout(formObj) {
        const { title, id: formId, inputList, actionList } = formObj;

        const layout = /* HTML */ `
            <div id="${formId}" class="ab-form">
                ${title ? `<h2 class="ab-form-heading">${title}</h2>` : ""}
                ${inputList && inputList.length > 0
                    ? `
                        <div class="ab-form-input-container row">
                        ${inputList
                            .map(
                                ({
                                    id,
                                    title,
                                    subtitle,
                                    type: inputType,
                                    optionList,
                                    label,
                                    required,
                                    pattern,
                                    className,
                                    control_node_selector,
                                    dependency_node_selector,
                                    value,
                                    checked,
                                    errorMessage,
                                }) => {
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
                                                    control_node_selector="${control_node_selector}"
                                                    placeholder=""
                                                    ${dependency_node_selector ? `dependency_node_selector="${dependency_node_selector}"` : ""}
                                                    ${value ? `value="${value}"` : ""}
                                                    ${required ? `required` : ""}
                                                    ${pattern ? `pattern="${pattern}"` : ""}
                                                    ${qq(control_node_selector).some((item) => item.classList.contains("is-invalid")) || required ? "area-invalid" : ""}
                                                >
                                                    <option value="${q(control_node_selector + "> option:first-child").value || ""}" selected>${label}</option>
                                                    ${
                                                        control_node_selector && q(control_node_selector)
                                                            ? `
                                                            ${qq(control_node_selector + "> option:not(:first-child)")
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
                                                        control_node_selector="${control_node_selector}"
                                                        ${dependency_node_selector ? `dependency_node_selector="${dependency_node_selector}"` : ""}
                                                        ${value ? `value="${value}"` : ""}
                                                        ${required ? `required` : ""}
                                                        ${pattern ? `pattern="${pattern}"` : ""}
                                                        ${inputType === "checkbox" && q(control_node_selector + ":checked") ? "checked" : ""}
                                                        ${qq(control_node_selector).some((item) => item.classList.contains("is-invalid")) || required ? "area-invalid" : ""}
                                                    />
                                                `}
                                            </label>
                                            <span class="ab-error-message">${errorMessage ? errorMessage : `${label} is required`} </span>
                                        </div>
                                    `;
                                }
                            )
                            .join("")}

                        </div>
                    `
                    : ""}
                ${actionList && actionList.length > 0
                    ? `
                        <div class="ab-form-action-container row">
                            ${actionList
                                .map(
                                    ({ id, label, disabled, className, control_node_selector }) => /* HTML */ `
                                        <div class="ab-action-col col ${className}">
                                            <button class="ab-action-button" type="button" id="${id}" ${disabled ? "disabled" : ""} control_node_selector="${control_node_selector}">
                                                ${label}
                                            </button>
                                        </div>
                                    `
                                )
                                .join("")}
                        </div>`
                    : ""}
            </div>
        `;

        return layout;
    }

    //  ========= PRODUCT SUMMARY =========
    async function getProductSummaryLayout() {
        const { CartLine, UnitTotals, SubTotal, PromotionTotal, TaxTotal, Total } = await fetchCartData();

        const layout = /* HTML */ `
            <div class="ab-product-summary">
                <h3 class="ab-product-summary__heading">Your Order</h3>
                <div class="ab-product-summary__added-products">
                    ${CartLine.map(
                        ({ Image, Code, SEOUrl, Name, ProductStatus, UnitOfMeasure }) => /* HTML */ `
                            <div class="ab-product-summary__product">
                                <a class="ab-product-summary__product-img" href="${host}/${SEOUrl}">
                                    <img src="${Image[0].CdnUrl}" alt="${Name}" onerror="this.src='/images/no-image-available.png'" alt="/images/no-image-available.png" />
                                    <p class="ab-product-summary__product-sku">${Code}</p>
                                </a>
                                <div class="ab-product-summary__product-info">
                                    <p class="ab-product-summary__product-title">${Name}</p>
                                    ${ProductStatus === "Active"
                                        ? '<p class="ab-product-summary__product-availability ab-product-summary__product-availability--available">Available</p>'
                                        : '<p class="ab-product-summary__product-availability ab-product-summary__product-availability--stock-out">Stock Out</p>'}

                                    <p class="ab-product-summary__product-quantity">Quantity: ${UnitOfMeasure[0].Quantity}</p>
                                    <p class="ab-product-summary__product-price">$${UnitOfMeasure[0].Price}</p>
                                </div>
                            </div>
                        `
                    ).join("")}
                </div>
                <div class="ab-product-summary__border"></div>
                <div class="ab-product-summary__addons-and-coupon">
                    <div class="ab-product-summary__addons">
                        <div class="ab-product-summary__addons-heading">Optional Add-ons:</div>
                        <label for="ab-addons" class="ab-product-summary__addons-form-group">
                            <input id="ab-addons" class="ab-product-summary__addons-checkbox" type="checkbox" />
                            <span class="ab-product-summary__addons-label">FREE Catalog</span>
                        </label>
                    </div>
                    <div class="ab-product-summary__coupons">
                        <div class="ab-product-summary__coupons-heading">Coupons</div>
                        <label for="ab-coupons" class="ab-product-summary__coupons-form-group">
                            <input
                                id="ab-coupons"
                                placeholder="Please enter coupon code"
                                class="ab-product-summary__coupons-input"
                                type="text"
                                control_node_selector="cart-coupon input[name='coupon']"
                                ${"area-invalid" }
                            />
                            <button type="button" class="ab-product-summary__coupons-button">Apply</button>
                        </label>
                    </div>
                </div>
                <div class="ab-product-summary__calculation-table">
                    <div class="ab-product-summary__row row">
                        <div class="ab-product-summary__col col-6">Items in Cart</div>
                        <div class="ab-product-summary__col col-6">${UnitTotals[0].Quantity}</div>
                    </div>
                    <div class="ab-product-summary__row row">
                        <div class="ab-product-summary__col col-6">Delivery</div>
                        <div class="ab-product-summary__col col-6">$0.00</div>
                    </div>
                    <div class="ab-product-summary__row row">
                        <div class="ab-product-summary__col col-6">Sub Total</div>
                        <div class="ab-product-summary__col col-6">$${SubTotal}</div>
                    </div>
                    <div class="ab-product-summary__row row">
                        <div class="ab-product-summary__col col-6">Promotion Discount</div>
                        <div class="ab-product-summary__col col-6">$${PromotionTotal}</div>
                    </div>
                    <div class="ab-product-summary__row row">
                        <div class="ab-product-summary__col col-6">Estimated Tax</div>
                        <div class="ab-product-summary__col col-6">$${TaxTotal}</div>
                    </div>
                    <div class="ab-product-summary__row ab-product-summary__row--total row">
                        <div class="ab-product-summary__col col-6">Total</div>
                        <div class="ab-product-summary__col col-6">$${Total}</div>
                    </div>
                </div>
            </div>
        `;

        return layout;
    }

    async function updateProductSummaryLayout() {
        const { CartLine, UnitTotals, SubTotal, PromotionTotal, TaxTotal, Total } = await fetchCartData();

        q(".ab-product-summary__added-products").innerHTML = /* HTML */ `
            ${CartLine.map(
                ({ Image, Code, SEOUrl, Name, ProductStatus, UnitOfMeasure }) => /* HTML */ `
                    <div class="ab-product-summary__product">
                        <a class="ab-product-summary__product-img" href="${host}/${SEOUrl}">
                            <img src="${Image[0].CdnUrl}" alt="${Name}" onerror="this.src='/images/no-image-available.png'" alt="/images/no-image-available.png" />
                            <p class="ab-product-summary__product-sku">${Code}</p>
                        </a>
                        <div class="ab-product-summary__product-info">
                            <p class="ab-product-summary__product-title">${Name}</p>
                            ${ProductStatus === "Active"
                                ? '<p class="ab-product-summary__product-availability ab-product-summary__product-availability--available">Available</p>'
                                : '<p class="ab-product-summary__product-availability ab-product-summary__product-availability--stock-out">Stock Out</p>'}

                            <p class="ab-product-summary__product-quantity">Quantity: ${UnitOfMeasure[0].Quantity}</p>
                            <p class="ab-product-summary__product-price">$${UnitOfMeasure[0].Price}</p>
                        </div>
                    </div>
                `
            ).join("")}
        `;

        q(".ab-product-summary__calculation-table").innerHTML = /* HTML */ `
            <div class="ab-product-summary__row row">
                <div class="ab-product-summary__col col-6">Items in Cart</div>
                <div class="ab-product-summary__col col-6">${UnitTotals[0].Quantity}</div>
            </div>
            <div class="ab-product-summary__row row">
                <div class="ab-product-summary__col col-6">Delivery</div>
                <div class="ab-product-summary__col col-6">$0.00</div>
            </div>
            <div class="ab-product-summary__row row">
                <div class="ab-product-summary__col col-6">Sub Total</div>
                <div class="ab-product-summary__col col-6">$${SubTotal}</div>
            </div>
            <div class="ab-product-summary__row row">
                <div class="ab-product-summary__col col-6">Promotion Discount</div>
                <div class="ab-product-summary__col col-6">$${PromotionTotal}</div>
            </div>
            <div class="ab-product-summary__row row">
                <div class="ab-product-summary__col col-6">Estimated Tax</div>
                <div class="ab-product-summary__col col-6">$${TaxTotal}</div>
            </div>
            <div class="ab-product-summary__row ab-product-summary__row--total row">
                <div class="ab-product-summary__col col-6">Total</div>
                <div class="ab-product-summary__col col-6">$${Total}</div>
            </div>
        `;
    }

    async function createAndUpdateGuestCheckoutLayout() {
        const { guest_personal_information, guest_billing_address, guest_shipping_address } = DATA["forms"];

        // Update
        q("body").classList.add("AB-Guest-Checkout");
        qq(".row.content-body  *:not(.ab-content-wrapper) input").forEach((item) => item.setAttribute("placeholder", ""));
        qq("body > form > .container.bg-white, .footer").forEach((item) => item.classList.remove("container"));

        // Create
        /* ab-content-wrapper--show-login, ab-content-wrapper--show-guest-checkout */
        q(".row.content-body").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="ab-content-wrapper ab-content-wrapper--show-guest-checkout">
                    <div class="ab-content-top"></div>
                    <div class="ab-content-bottom container">
                        <div class="row">
                            <div class="ab-content-forms-wrapper col-6">
                                <div class="ab-guest-checkout-section">
                                    <div class="ab-guest-checkout-form">
                                        <h1 class="ab-guest-checkout-header">Checkout with New Account</h1>
                                        ${getFormLayout(guest_personal_information)} ${getFormLayout(guest_billing_address)} ${getFormLayout(guest_shipping_address)}
                                    </div>
                                </div>
                            </div>
                            <div class="ab-content-product-summary-wrapper col-6"></div>
                        </div>
                    </div>
                </div>
            `
        );

        const mainWrapperElement = q(".ab-content-wrapper");

        // Insert Heading Items
        qq(".guest-checkout-optn > h1, .guest-checkout-optn").forEach((item) => q(mainWrapperElement, ".ab-content-top").insertAdjacentElement("afterbegin", item));

        // Insert Login Form
        const controlLoginElement = qq(".row.content-body > *:not(.ab-content-wrapper)").find((item) => !!q(item, ".Head")?.innerText.includes("Account Login"));
        if (controlLoginElement) {
            controlLoginElement.classList.add("ab-login-section");
            q(mainWrapperElement, ".ab-content-forms-wrapper").insertAdjacentElement("afterbegin", controlLoginElement);
        }

        // Insert Control Guest Checkout Form
        const controlGuestCheckoutElement = qq(".row.content-body > *:not(.ab-content-wrapper)").find((item) => !!q(item, "#guest-checkout-form"));
        if (controlGuestCheckoutElement) {
            controlGuestCheckoutElement.classList.add("ab-control-guest-checkout-form");
            q(mainWrapperElement, ".ab-guest-checkout-section").insertAdjacentElement("afterbegin", controlGuestCheckoutElement);
        }

        // Add product summary element
        const productSummaryLayout = await getProductSummaryLayout();
        if (productSummaryLayout) {
            q(mainWrapperElement, ".ab-content-product-summary-wrapper").insertAdjacentHTML("afterbegin", productSummaryLayout);
        }
    }

    async function createAndUpdateAddressLayout() {
        const { checkout_billing_address, checkout_same_billing } = DATA["forms"];

        // Update
        q("body").classList.add("AB-Address-Checkout");
        qq("body > form > .container.bg-white, .footer").forEach((item) => item.classList.remove("container"));

        // Create
        q(".row.content-body").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="ab-content-wrapper">
                    <div class="ab-content-top"></div>
                    <div class="ab-content-bottom container">
                        <div class="row">
                            <div class="ab-content-forms-wrapper col-6">
                                <div class="ab-address-checkout-section">
                                    <div class="ab-address-checkout-form">${getFormLayout(checkout_billing_address)} ${getFormLayout(checkout_same_billing)}</div>
                                </div>
                            </div>
                            <div class="ab-content-product-summary-wrapper col-6"></div>
                        </div>
                    </div>
                </div>
            `
        );

        const mainWrapperElement = q(".ab-content-wrapper");

        // Add heading items
        qq(".guest-checkout-optn > h1, .guest-checkout-optn").forEach((item) => q(mainWrapperElement, ".ab-content-top").insertAdjacentElement("afterbegin", item));

        // Add product summary element
        const productSummaryLayout = await getProductSummaryLayout();
        if (productSummaryLayout) {
            q(mainWrapperElement, ".ab-content-product-summary-wrapper").insertAdjacentHTML("afterbegin", productSummaryLayout);
        }
    }

    async function createAndUpdateShippingLayout() {
        console.log("Shipping & Review...");

        // const { checkout_billing_address, checkout_shipping_address, checkout_same_billing } = DATA["forms"];

        await waitForElementAsync(() => q("eve-shipping-address"));

        // Update
        q("body").classList.add("AB-Shipping-Checkout");
        qq("body > form > .container.bg-white, .footer").forEach((item) => item.classList.remove("container"));

        // Create
        q(".row.content-body").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ `
                <div class="ab-content-wrapper">
                    <div class="ab-content-top">
                        <div class="container"></div>
                    </div>
                    <div class="ab-content-bottom container">
                        <div class="row">
                            <div class="ab-content-forms-wrapper col-6">
                                <div class="ab-control-forms-section">
                                    <h1 class="ab-shipping-header">Delivery</h1>
                                </div>
                                <div class="ab-credit-or-debit-forms-section">
                                    <div _ngcontent-c9="" class="card-icons">
                                        <img _ngcontent-c9="" alt="" src="/portals/0/visa.png" />
                                        <img _ngcontent-c9="" alt="" src="/portals/0/mastercard.png" />
                                        <img _ngcontent-c9="" alt="" src="/portals/0/discover.png" />
                                        <img _ngcontent-c9="" alt="" src="/portals/0/amex.png" />
                                    </div>
                                </div>
                            </div>
                            <div class="ab-content-product-summary-wrapper col-6"></div>
                        </div>
                    </div>
                </div>
            `
        );

        const mainWrapperElement = q(".ab-content-wrapper");

        // Add heading items
        qq("eve-shipping-address .address-text").forEach((item) => {
            q(item, "div:not(.btn)").appendChild(q(item, ".btn"));

            const div = document.createElement("div");
            div.className = "ab-shipping-address-wrapper";
            qq(item, ":scope > *").forEach((child) => div.appendChild(child));
            item.appendChild(div);
        });

        qq("eve-shipping-address").forEach((item) => q(mainWrapperElement, ".ab-content-top > .container").insertAdjacentElement("afterbegin", item));

        // Add form elements
        qq("eve-checkout-page > hr ~ div").forEach((item) => {
            q(mainWrapperElement, ".ab-control-forms-section").appendChild(item);
        });

        // Add product summary element
        const productSummaryLayout = await getProductSummaryLayout();
        if (productSummaryLayout) {
            q(mainWrapperElement, ".ab-content-product-summary-wrapper").insertAdjacentHTML("afterbegin", productSummaryLayout);
            q(mainWrapperElement, "#ab-addons.ab-product-summary__addons-checkbox").checked = q("#newsletter").checked;
            q("label[for='newsletter']").innerText = "FREE Catalog";
            q(mainWrapperElement, ".ab-product-summary__addons").appendChild(q("div:has(> input#newsletter)"));
            q(mainWrapperElement, ".ab-product-summary__coupons").appendChild(q("cart-coupon"));
        }

        // return true;
    }

    async function handleAddressDeliveryFormShowHide(e) {
        q(".ab-form#delivery-address")?.remove();

        const { guest_delivery_address } = DATA.forms;
        const contentWrapper = q(".ab-content-wrapper");
        const billingAddressForm = q(".ab-form#billing-address");

        if (!e.target.checked) {
            await waitForElementAsync(
                () => !!(q("#guestCheckoutWrapper >  form > div:nth-child(9) select[name='CountryId']") && validateAllControlNodesExist(guest_delivery_address.inputList))
            );
            contentWrapper.classList.add("ab-content-wrapper--show-delivery-address");
            billingAddressForm.insertAdjacentHTML("afterend", getFormLayout(guest_delivery_address));
            eventHandler();
        } else {
            contentWrapper.classList.remove("ab-content-wrapper--show-delivery-address");
            setTimeout(() => billingAddressForm.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
        }
    }

    async function handleAddressCreateAccountFormShowHide(e) {
        q(".ab-form#guest-create-account")?.remove();

        const { guest_create_account } = DATA.forms;
        const contentWrapper = q(".ab-content-wrapper");
        const shippingAddressForm = q(".ab-form#shipping-address");

        if (e.target.checked) {
            await waitForElementAsync(() => !!validateAllControlNodesExist(guest_create_account.inputList));
            contentWrapper.classList.add("ab-content-wrapper--show-guest-create-account");
            shippingAddressForm.insertAdjacentHTML("beforebegin", getFormLayout(guest_create_account));
            eventHandler();
        } else {
            contentWrapper.classList.remove("ab-content-wrapper--show-guest-create-account");
            setTimeout(() => shippingAddressForm.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
        }
    }

    async function handleCreditDebitFormShowHide(e) {
        await waitForElementAsync(() => !q("ngx-loading .backdrop"));

        const selectInput = q(".AB-Shipping-Checkout .payment-row >  .col-lg-6  > select.form-control");
        optionTxt = q(selectInput, `option[value="${selectInput.value}"]`).innerText?.trim() ?? null;

        q(".ab-form#payment-options-credit-or-debit")?.remove();

        const { payment_options_credit_or_debit } = DATA.forms;
        const contentWrapper = q(".ab-content-wrapper");
        const targetFormSection = q(".ab-credit-or-debit-forms-section");

        if (optionTxt === "Credit/Debit Card") {
            await waitForElementAsync(() => !!validateAllControlNodesExist(payment_options_credit_or_debit.inputList));
            contentWrapper.classList.add("ab-content-wrapper--show-credit-debit");
            targetFormSection.insertAdjacentHTML("beforeend", getFormLayout(payment_options_credit_or_debit));
            eventHandler();
        } else {
            contentWrapper.classList.remove("ab-content-wrapper--show-credit-debit");
            setTimeout(() => q(".ab-control-forms-section").scrollIntoView({ behavior: "smooth", block: "center" }), 100);
        }
    }

    async function handleSameAsBillingCheckboxClick(e) {
        const isChecked = e.target.checked;
        const controlCheckSelector = e.target.getAttribute("control_node_selector");

        await waitForElementAsync(() => q(controlCheckSelector) && q(controlCheckSelector).checked === isChecked);

        qq("input#ab-address-line-1, input#ab-address-line-2, select#ab-country, input#ab-city, select#ab-state, input#ab-zip-code").forEach((currentTarget) => {
            const dataObj = getElementData(currentTarget);

            if (dataObj["inputType"] === "select") {
                setTimeout(() => {
                    const controlOptions = qq(dataObj["controlNodeSelector"] + " > option:not(:first-child)");
                    currentTarget.innerHTML = `${q(currentTarget, "option:first-child").outerHTML} ${controlOptions.map((option) => option.outerHTML).join("")} `;
                    const selectedOption = controlOptions.find((option) => option.selected);
                    currentTarget.value = selectedOption.value;

                    handleFormErrorMessage(dataObj);
                    updateSelectInputView(dataObj);
                }, 1500);
            } else {
                currentTarget.value = q(dataObj["controlNodeSelector"]).value;
                handleFormErrorMessage(dataObj);
            }
        });
    }

    function getElementData(currentTarget) {
        const value = currentTarget.value;
        const checked = currentTarget?.checked;
        const inputType = currentTarget.getAttribute("type");
        const controlNodeSelector = currentTarget.getAttribute("control_node_selector");
        const controlNodes = qq(controlNodeSelector);

        const dependencySelector = currentTarget.getAttribute("dependency_node_selector");
        const dependencyNodes = qq(dependencySelector);

        return {
            currentTarget,
            value,
            checked,
            inputType,
            controlNodeSelector,
            controlNodes,
            dependencySelector,
            dependencyNodes,
        };
    }

    function handleFormErrorMessage({ currentTarget, value, checked, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes }) {
        if (controlNodes?.some((controlNode) => controlNode.classList.contains("is-invalid"))) {
            currentTarget.setAttribute("area-invalid", "");
        } else {
            currentTarget?.removeAttribute("area-invalid");
        }

        // Exception | Guest Password input
        if (currentTarget.getAttribute("id") === "ab-guest-password" && currentTarget.value.length >= 7) {
            currentTarget?.removeAttribute("area-invalid");
        }
    }

    function updateSelectInputView({ currentTarget, value, checked, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes }) {
        if (inputType !== "select") return;

        if (currentTarget.value) {
            currentTarget.setAttribute("area-selected", "");
        } else {
            currentTarget.removeAttribute("area-selected");
        }
    }

    function handleTextBasedInputs({ currentTarget, value, checked, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes }) {
        const scrollPos = { x: window.scrollX, y: window.scrollY };
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;

        controlNodes.forEach((controlNode) => {
            if (nativeInputValueSetter) {
                nativeInputValueSetter.call(controlNode, value);
            } else {
                controlNode.value = value;
            }
            controlNode.dispatchEvent(new InputEvent("input", { inputType: "insertText", data: value, bubbles: true, cancelable: true }));
            controlNode.dispatchEvent(new Event("change", { bubbles: true }));
        });

        window.scrollTo(scrollPos.x, scrollPos.y);
    }

    function handleCheckBoxInput({ currentTarget, value, checked, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes }) {
        controlNodes.forEach((controlNode) => {
            controlNode.click();
            controlNode.checked = checked;
            controlNode.dispatchEvent(new Event("change", { bubbles: true }));
        });
    }

    function handleSelectInput({ currentTarget, value, checked, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes }) {
        qq(`${controlNodeSelector} > option`).forEach((option) => {
            if (option.value === value) {
                option.selected = true;
                option.click();
                option.dispatchEvent(new Event("change", { bubbles: true }));
                option.dispatchEvent(new Event("click", { bubbles: true }));
                return;
            }

            option.selected = false;
        });

        controlNodes.forEach((controlNode) => {
            controlNode.value = value;
            controlNode.dispatchEvent(new Event("change", { bubbles: true }));
        });

        // Show Hide Borders
        updateSelectInputView({ currentTarget, value, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes });
    }

    function updateDependencyNodes({ currentTarget, value, checked, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes }) {
        if (dependencyNodes?.length === 0) return;

        dependencyNodes.forEach(async (dependencyNode) => {
            try {
                const controlNodeSelector = dependencyNode.getAttribute("control_node_selector");
                const controlNode = q(controlNodeSelector);
                const dependencyNodeInputType = dependencyNode.getAttribute("type");
                const dependencyDataObj = getElementData(dependencyNode);

                await waitForElementAsync(
                    () =>
                        !!(DATA["text_based_input_list"].some((type) => type === dependencyNodeInputType) && controlNode?.value !== dependencyNode?.value) ||
                        (dependencyNodeInputType === "select" &&
                            controlNode?.options.length > 1 &&
                            controlNode?.options?.[1]?.innerText.trim().toLowerCase() !== dependencyNode?.options?.[1]?.innerText.trim().toLowerCase()),
                    5000
                );

                if (DATA["text_based_input_list"].some((type) => type === inputType)) {
                    dependencyNode.value = inputType === "tel" ? controlNode.value.replace(/\D/g, "") : controlNode.value;
                } else if (inputType === "checkbox") {
                    //
                } else if (inputType === "radio") {
                    //
                } else if (inputType === "select") {
                    const controlOptions = qq(controlNodeSelector + "> option:not(:first-child)");

                    dependencyNode.innerHTML = /* HTML */ `${q(dependencyNode, "option:first-child").outerHTML} ${controlOptions.map((option) => option.outerHTML).join("")} `;
                    dependencyNode.value = "";
                    q(dependencyNode, " option:first-child").selected = true;
                    updateSelectInputView(dependencyDataObj);
                }

                handleFormErrorMessage(dependencyDataObj);
            } catch (error) {
                console.error(error);
                return false;
            }
        });
    }

    function updateFormActionElements() {
        qq(".ab-action-button").forEach((item) => {
            const selector = item.getAttribute("control_node_selector");
            const controlNode = q(selector);
            const isDisabled = controlNode.disabled;

            if (isDisabled) {
                item.setAttribute("disabled", "");
            } else {
                item.removeAttribute("disabled", "");
            }
        });
    }

    function eventHandler() {
        // =========== FROM AND OTHER ACTIONS ============
        const ACTION_LIST = [
            // Form Input
            {
                selector: ".ab-input",
                events: ["input", "change"],
                callback: (e) => {
                    const currentTarget = e.target;
                    const dataObj = getElementData(currentTarget);

                    // Check For Control inputs
                    if (dataObj["controlNodes"] && dataObj["controlNodes"]?.length === 0) {
                        console.error("Target node not found:", dataObj["controlNodeSelector"]);
                        return;
                    }

                    // Handle control input updates
                    if (DATA["text_based_input_list"].some((type) => type === dataObj["inputType"])) {
                        handleTextBasedInputs(dataObj);
                    } else if (dataObj["inputType"] === "radio") ; else if (dataObj["inputType"] === "checkbox") {
                        handleCheckBoxInput(dataObj);
                    } else if (dataObj["inputType"] === "select") {
                        handleSelectInput(dataObj);
                    }

                    // Update dependent fields
                    updateDependencyNodes(dataObj);

                    // Handle error message
                    handleFormErrorMessage(dataObj);

                    // Update actions items
                    updateFormActionElements();
                },
            },
            // Form Actions
            {
                selector: ".ab-action-button",
                events: ["click"],
                callback: (e) => {
                    const currentTarget = e.target;
                    const selector = currentTarget.getAttribute("control_node_selector");
                    const controlNodes = qq(selector);
                    controlNodes.forEach((controlNode) => controlNode.click());
                },
            },
            // Others
            {
                selector: "#showLogin",
                events: ["click"],
                callback: (e) => (q(".ab-content-wrapper").className = "ab-content-wrapper ab-content-wrapper--show-login"),
            },
            {
                selector: "#showCheckout",
                events: ["click"],
                callback: (e) => (q(".ab-content-wrapper").className = "ab-content-wrapper ab-content-wrapper--show-guest-checkout"),
            },
            {
                selector: ".AB-Guest-Checkout #ab-guest-same-as-billing",
                events: ["click"],
                callback: handleAddressDeliveryFormShowHide,
            },
            {
                selector: ".AB-Guest-Checkout #createAccount",
                events: ["click"],
                callback: handleAddressCreateAccountFormShowHide,
            },
            {
                selector: ".AB-Shipping-Checkout  select#shipping, .AB-Shipping-Checkout .payment-row >  .col-lg-6  > select.form-control",
                events: ["change"],
                callback: handleCreditDebitFormShowHide,
            },
            // Add Ons | Control
            {
                selector: ".AB-Shipping-Checkout input[type='checkbox']#newsletter",
                events: ["click"],
                callback: updateProductSummaryLayout,
            },
            {
                selector: "label[for='ab-check-same-as-billing']",
                events: ["click"],
                callback: handleSameAsBillingCheckboxClick,
            },
            // Add Ons | New Form
            // {
            //     selector: ".AB-Shipping-Checkout .ab-product-summary__addons-checkbox",
            //     events: ["click"],
            //     callback: (e) => {
            //         const targetNode = q("#newsletter");
            //         targetNode.click();
            //         updateProductSummaryLayout();
            //     },
            // },
            // Coupons  | New Form
            // {
            //     selector: ".AB-Shipping-Checkout .ab-product-summary__coupons-input",
            //     events: ["input", "change"],
            //     callback: async (e) => {
            //         const currentTarget = e.target;
            //         const dataObj = getElementData(currentTarget);

            //         // Check For Control inputs
            //         if (dataObj["controlNodes"] && dataObj["controlNodes"]?.length === 0) {
            //             console.error("Target node not found:", dataObj["controlNodeSelector"]);
            //             return;
            //         }

            //         handleTextBasedInputs(dataObj);
            //     },
            // },
            // {
            //     selector: ".AB-Shipping-Checkout .ab-product-summary__coupons-button",
            //     events: ["click"],
            //     callback: async (e) => {
            //         q("cart-coupon input[name='coupon']").focus();
            //         q("cart-coupon div.btn").click();
            //     },
            // },
        ];

        ACTION_LIST.forEach(({ selector, events, callback }) => {
            qq(selector)?.forEach((item) => {
                const debouncedCallback = debounce(callback, 150);
                events.forEach((event) => {
                    const className = `ab-${event}-event-attached`;
                    if (!item.classList.contains(className)) {
                        item.classList.add(className);
                        item.addEventListener(event, debouncedCallback);
                    }
                });
            });
        });
    }

    // ===========  MAIN JS ===========
    const FORM_CONFIG = {
        "/guestcheckout": {
            inputList: [...DATA.forms.guest_personal_information.inputList, ...DATA.forms.guest_billing_address.inputList, ...DATA.forms.guest_shipping_address.inputList],
            layoutFunction: createAndUpdateGuestCheckoutLayout,
        },
        "/checkout#/address": {
            inputList: [...DATA.forms.checkout_billing_address.inputList, ...DATA.forms.checkout_same_billing.inputList],
            layoutFunction: createAndUpdateAddressLayout,
        },
        "/checkout#/main": {
            inputList: [],
            layoutFunction: createAndUpdateShippingLayout,
        },
    };

    const config = FORM_CONFIG[path + hash] || { inputList: [], layoutFunction: () => console.log("No matching path") };
    const { inputList, mainLayoutFunction } = { inputList: config.inputList, mainLayoutFunction: config.layoutFunction };

    function validateAllControlNodesExist(inputList) {
        // Temporary Solution
        if (inputList.length === 0) return true;

        return inputList?.every(({ type, control_node_selector }) => {
            if (type === "select") {
                return qq(`${control_node_selector} > option`).length > 1;
            }
            return !!q(control_node_selector);
        });
    }

    async function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        await mainLayoutFunction();
        eventHandler();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) &&
            q(".progress-stepper .checkout-wrap") &&
            q(".row.content-body") &&
            validateAllControlNodesExist(inputList)
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
