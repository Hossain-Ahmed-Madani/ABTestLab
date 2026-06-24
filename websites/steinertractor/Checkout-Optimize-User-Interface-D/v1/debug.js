const payment_options_credit_or_debit = {
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
            errorMessage: "Credit Card Number is Invalid",
        },
        {
            id: "ab-month",
            type: "select" /* Dropdown/Select */,
            subtitle: "Expiration Date",
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
            subtitle: "",
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
};

function q(s, o) {
    return o ? s.querySelector(o) : document.querySelector(s);
}

function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
}

function validateAllControlNodesExist(inputList) {
    return inputList?.every(({ type, control_node_selector }) => {
        if (type === "select") {
            return qq(`${control_node_selector} > option`).length > 1;
        }
        return !!q(control_node_selector);
    });
}

validateAllControlNodesExist(payment_options_credit_or_debit.inputList)