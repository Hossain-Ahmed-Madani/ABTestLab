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
                        targetNode: "#company",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-first-name",
                        type: "text",
                        label: "First name",
                        required: true,
                        className: "col-6",
                        targetNode: "input[name='FirstName']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-last-name",
                        type: "text",
                        label: "Last name",
                        required: true,
                        className: "col-6 ab-pl-0",
                        targetNode: "#lastName",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-phone",
                        type: "tel",
                        label: "Phone",
                        required: true,
                        className: "col-6",
                        targetNode: "#phonereg",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-ext",
                        type: "tel",
                        label: "Ext",
                        required: true,
                        className: "col-6 ab-pl-0",
                        targetNode: "#ext",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-email",
                        type: "email",
                        label: "Email",
                        required: true,
                        className: "col-12",
                        targetNode: "#ResetEmail",
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
                        dependencyNode: "select#ab-state",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-phone-bill",
                        type: "tel",
                        label: "Phone",
                        required: false,
                        className: "col-6 ab-pl-0",
                        targetNode: "#phone",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-street-address",
                        type: "text",
                        label: "Street Address",
                        required: true,
                        className: "col-12",
                        targetNode: "#coAddress",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-street-address-two",
                        type: "text",
                        label: "Street address 2",
                        required: true,
                        className: "col-12",
                        targetNode: "#coAddress2",
                        value: "",
                        errorMessage: "Enter a valid address",
                    },
                    {
                        id: "ab-city",
                        type: "text",
                        label: "City",
                        required: true,
                        className: "col-4",
                        targetNode: "#coCity",
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
                        targetNode: "select[name='StateId']",
                        value: "",
                        errorMessage: "",
                    },
                    {
                        id: "ab-zip-code",
                        type: "text",
                        label: "Zip code",
                        required: true,
                        className: "col-4 ab-pl-0",
                        targetNode: "#coZip",
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
                        targetNode: "#help-button",
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
                                    targetNode,
                                    dependencyNode,
                                    value,
                                    checked,
                                    errorMessage,
                                }) => {
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
                                                    ${dependencyNode ? `dependencyNode="${dependencyNode}"` : ""}
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
                                                        targetNode="${targetNode}"
                                                        ${dependencyNode ? `dependencyNode="${dependencyNode}"` : ""}
                                                        ${value ? `value="${value}"` : ""}
                                                        ${required ? `required` : ""}
                                                        ${pattern ? `pattern="${pattern}"` : ""}
                                                        ${inputType === "checkbox" && q(targetNode + "[checked]") ? "checked" : ""}
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
                                    ({ id, label, disabled, className, targetNode }) => /* HTML */ `
                                        <div class="ab-action-col col ${className}">
                                            <button class="ab-action-button" type="button" id="${id}" ${disabled ? "disabled" : ""} targetNode="${targetNode}">${label}</button>
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

    function handleError(currentTarget) {
        const selector = currentTarget.getAttribute("targetNode");

        if (q(selector)?.classList.contains("is-invalid")) {
            currentTarget.setAttribute("area-invalid", "");
        } else {
            currentTarget.removeAttribute("area-invalid");
        }
    }

    function handleTextBasedInputs(currentTarget) {
        const value = currentTarget.value;
        const inputType = currentTarget.getAttribute("type");
        const selector = currentTarget.getAttribute("targetNode");
        const targetNode = q(selector);

        if (!targetNode) {
            console.error("Target node not found:", selector);
            return;
        }

        const scrollPos = { x: window.scrollX, y: window.scrollY };
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;

        if (nativeInputValueSetter) {
            nativeInputValueSetter.call(targetNode, value);
        } else {
            targetNode.value = value;
        }

        targetNode.dispatchEvent(new InputEvent("input", { inputType: "insertText", data: value, bubbles: true, cancelable: true }));
        targetNode.dispatchEvent(new Event("change", { bubbles: true }));

        window.scrollTo(scrollPos.x, scrollPos.y);
        // console.log("targetNode:", inputType, selector, currentTarget, "value: ", currentTarget.value);
    }

    function handleCheckBoxInputs(currentTarget) {
        const checked = currentTarget?.checked;
        const selector = currentTarget.getAttribute("targetNode");
        const targetNode = document.querySelector(selector);

        targetNode.click();
        targetNode.checked = checked;
    }

    function updateDependencyNode(currentTarget) {
        const selector = currentTarget.getAttribute("dependencyNode");
        const dependencyNode = q(selector);
        
        if (!dependencyNode) {
            console.error("dependencyNode node not found:", selector);
            return;
        }

        const options = qq(`${selector} > option:not(:first-child)`);

        if (options.length === 0) {
            console.error("Options node not found:", selector);
            return;
        }

        dependencyNode.innerHTML = /* HTML */ ` ${q(dependencyNode, "option:first-child").outerHTML} ${options.map((option) => option.outerHTML).join("")} `;
    }

    function handleSelectInput(currentTarget) {
        const value = currentTarget.value;
        const selector = currentTarget.getAttribute("targetNode");
        const targetNode = q(selector);

        if (!targetNode) {
            console.error("Target node not found:", selector);
            return;
        }

        targetNode.value = value;

        console.log(value, selector)

        q(`${selector} > option[value="${value}"]`).click();

        targetNode.dispatchEvent(new InputEvent("input", { inputType: "insertText", data: value, bubbles: true, cancelable: true }));
        targetNode.dispatchEvent(new Event("change", { bubbles: true }));

        // Handle Dependencies with delay
        setTimeout(() => {
            updateDependencyNode(currentTarget);
        }, 2000);
    }

    function updateFormActions() {
        qq(".ab-action-button").forEach((item) => {
            const selector = item.getAttribute("targetNode");
            const targetNode = q(selector);

            if (!targetNode) {
                console.error("Target node not found:", selector);
                return;
            }

            const isDisabled = targetNode.disabled;
            if (isDisabled) {
                item.setAttribute("disabled", "");
            } else {
                item.removeAttribute("disabled", "");
            }
        });
    }

    function eventHandler() {
        // Force Click
        q("#showLogin")?.click();

        const ACTION_LIST = [
            {
                selector: "input.ab-input:is([type='text'], [type='number'], [type='tel'],  [type='checkbox']), select.ab-input",
                event: "input",
                callback: (e) => {
                    const currentTarget = e.target;
                    const inputType = currentTarget.getAttribute("type");

                    if (["text", "tel", "number", "email", "password", "url", "search"].some((type) => type === inputType)) {
                        handleTextBasedInputs(currentTarget);
                    } else if (inputType === "radio") {
                        //
                    } else if (inputType === "checkbox") {
                        handleCheckBoxInputs(currentTarget);
                    } else if (inputType === "select") {
                        handleSelectInput(currentTarget);
                    }

                    handleError(currentTarget);
                    updateFormActions();
                },
            },
        ];

        ACTION_LIST.forEach(({ selector, event, callback }) => {
            const debouncedCallback = debounce(callback, 150);
            qq(selector)?.forEach((item) => item.addEventListener(event, debouncedCallback));
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
