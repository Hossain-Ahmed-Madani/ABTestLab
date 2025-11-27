/* 
https://www.steinertractor.com/guestcheckout?returnurl=/checkout
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
        text_based_input_list: ["text", "tel", "number", "email", "password", "url", "search"],
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
                        dependency_node_selector: "#ab-phone-bill",
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
                        control_node_selector: "select[name='CountryId']",
                        dependency_node_selector: "select#ab-state",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-phone-bill",
                        type: "tel",
                        label: "Phone",
                        required: false,
                        className: "col-6 ab-pl-0",
                        control_node_selector: "#phone",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-street-address",
                        type: "text",
                        label: "Street Address",
                        required: true,
                        className: "col-12",
                        control_node_selector: "#coAddress",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-street-address-two",
                        type: "text",
                        label: "Street address 2",
                        required: true,
                        className: "col-12",
                        control_node_selector: "#coAddress2",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-city",
                        type: "text",
                        label: "City",
                        required: true,
                        className: "col-4",
                        control_node_selector: "#coCity",
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
                        control_node_selector: "select[name='StateId']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-zip-code",
                        type: "text",
                        label: "Zip code",
                        required: true,
                        className: "col-4 ab-pl-0",
                        control_node_selector: "#coZip",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-carriers",
                        subtitle: "Which carriers offer delivery service to this address?",
                        type: "select" /* Dropdown/Select */,
                        label: "All Carriers",
                        optionList: [],
                        required: false,
                        className: "col-12",
                        control_node_selector: "select#ShipMethod",
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
                        control_node_selector: "#sameAsBilling",
                        checked: true,
                    },
                    {
                        id: "ab-create-account",
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
                                                    <option value="${q(control_node_selector + "> option:first-child").value || ''}" selected>${label}</option>
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
                                                        ${inputType === "checkbox" && q(control_node_selector + "[checked]") ? "checked" : ""}
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

        div.insertAdjacentHTML("afterbegin", /* HTML */ `<h1 class="ab-guest-checkout-header">Checkout with New Account</h1>`);
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

    function createAndUpdateLayout() {
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

    function getElementData(currentTarget) {
        const value = currentTarget.value;
        const inputType = currentTarget.getAttribute("type");
        const controlNodeSelector = currentTarget.getAttribute("control_node_selector");
        const controlNodes = qq(controlNodeSelector);

        const dependencySelector = currentTarget.getAttribute("dependency_node_selector");
        const dependencyNodes = qq(dependencySelector);

        return {
            currentTarget,
            value,
            inputType,
            controlNodeSelector,
            controlNodes,
            dependencySelector,
            dependencyNodes,
        };
    }

    function handleFormErrorMessage({ currentTarget, value, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes }) {
        if (controlNodes?.some((controlNode) => controlNode.classList.contains("is-invalid"))) {
            currentTarget.setAttribute("area-invalid", "");
        } else {
            currentTarget?.removeAttribute("area-invalid");
        }
    }

    function updateSelectInputView({ currentTarget, value, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes }) {
        if (inputType !== "select") return;

        if (currentTarget.value) {
            currentTarget.setAttribute("area-selected", "");
        } else {
            currentTarget.removeAttribute("area-selected");
        }
    }

    function handleTextBasedInputs({ currentTarget, value, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes }) {
        const scrollPos = { x: window.scrollX, y: window.scrollY };
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;

        controlNodes.forEach((controlNode) => {
            if (nativeInputValueSetter) {
                nativeInputValueSetter.call(controlNode, value);
            } else {
                controlNode.value = value;
            }
        });

        controlNodes.forEach((controlNode) => {
            controlNode.dispatchEvent(new InputEvent("input", { inputType: "insertText", data: value, bubbles: true, cancelable: true }));
            controlNode.dispatchEvent(new Event("change", { bubbles: true }));
        });

        window.scrollTo(scrollPos.x, scrollPos.y);
    }

    function handleCheckBoxInput({ currentTarget, value, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes }) {
        controlNodes.forEach((controlNode) => {
            controlNode.click();
            controlNode.checked = checked;
            controlNode.dispatchEvent(new Event("change", { bubbles: true }));
        });
    }

    function handleSelectInput({ currentTarget, value, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes }) {

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

        updateSelectInputView({ currentTarget, value, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes });
    }

    function updateDependencyNodes({ currentTarget, value, inputType, controlNodeSelector, controlNodes, dependencySelector, dependencyNodes }) {
        dependencyNodes.forEach((dependencyNode) => {
            const controlNodeSelector = dependencyNode.getAttribute("control_node_selector");
            const controlNode = q(controlNodeSelector);

            if (DATA["text_based_input_list"].some((type) => type === inputType)) {
                dependencyNode.value = controlNode.value;
            } else if (inputType === "checkbox") {
                //
            } else if (inputType === "radio") {
                //
            } else if (inputType === "select") {
                const controlOptions = qq(controlNodeSelector + "> option:not(:first-child)");

                if (controlOptions.length === 0) {
                    console.error("Options node not found:", controlNodeSelector);
                    return;
                }

                dependencyNode.innerHTML = /* HTML */ `${q(dependencyNode, "option:first-child").outerHTML} ${controlOptions.map((option) => option.outerHTML).join("")} `;
                dependencyNode.value = "";
                q(dependencyNode, " option:first-child").selected = true;
            }

            const dataObj = getElementData(dependencyNode);
            handleFormErrorMessage(dataObj);
            updateSelectInputView(dataObj);
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
        // Force Click
        q("#showCheckout")?.click();

        const ACTION_LIST = [
            {
                selector: ".ab-input",
                events: ["input"],
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
                    } else if (dataObj["inputType"] === "radio") {
                        // Add logic here
                    } else if (dataObj["inputType"] === "checkbox") {
                        handleCheckBoxInput(dataObj);
                    } else if (dataObj["inputType"] === "select") {
                        handleSelectInput(dataObj);
                    }

                    // Update dependent fields on interval
                    if (dataObj["dependencyNodes"]?.length > 0) {
                        setTimeout(() => updateDependencyNodes(dataObj), 1000);
                    }
                    
                    // Handle error message 
                    handleFormErrorMessage(dataObj);

                    // Update actions items
                    updateFormActionElements();
                },
            },
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
        ];

        ACTION_LIST.forEach(({ selector, events, callback }) => {
            qq(selector)?.forEach((item) => events.forEach((event) => item.addEventListener(event, callback)));
        });
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
            qq("select#ShipMethod > option").length > 1 &&
            qq("select[name='StateId'] > option").length > 1
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
