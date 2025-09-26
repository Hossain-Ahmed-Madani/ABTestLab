/* 
Ticket: https://trello.com/c/pVg0rKnQ/4093-test019-electropapa-a-b-c-followup016-pds-side-cart-textlink-popup-and-volume-discount-nudge-cart#
Test doc: https://docs.google.com/document/d/13OFhHZ9n1KU_rWYOWWDacs2jVkpWrrBV2Yt5f6zHNlA/edit?tab=t.0

Test container: 

ControL: 
V1: 
v2: 
*/

(() => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "Project Name",
        site_url: "https://electropapa.com/de",
        test_name: "Test019 [Electropapa] A/B/C - Followup016 - PDS & Side Cart - Textlink Popup and Volume discount nudge cart",
        page_initials: "AB-TEST-019",
        test_variation: 1 /* 0, 1, 2 */,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;
    const BODY_CLASSLIST = [page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version-${test_version}`];

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
        if (timer <= 0) {
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => waitForElement(predicate, callback, timer - frequency, frequency), frequency);
        }
    }

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function fireConvertGoal(goalName, goalId) {
        console.log("Triggered convert goal: ", goalName, goalId);
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", goalId]);
    }

    function mutationObserverFunction(selector, callback, config) {
        const targetNode = q(selector);
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
        return observer;
    }

    function parseAmount(targetNode) {
        if (!targetNode) return 0;
        return parseFloat(targetNode.innerText?.replace(".", "")?.replace(",", ".")?.replace("€", ""));
    }

    function formatPriceToGerman(price) {
        const formattedPriceTxt = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(price);

        return formattedPriceTxt;
    }

    function calculateDiscount(offerPrice, quantity) {
        const percentage_by_quantity = [0, 0, 5, 5, 6, 6, 8, 8, 8, 8, 10];
        const discount_percentage = quantity <= 10 ? percentage_by_quantity[quantity] : percentage_by_quantity[10];

        // Calculate discount amount
        const discount = offerPrice * (discount_percentage / 100);

        return {
            discountAmount: discount,
            discountPercentage: discount_percentage,
            finalTotal: offerPrice - discount,
        };
    }

    function getPriceData(targetNode) {
        const offerPriceContainer = q(targetNode, ".line-item-total-price-value");
        const offerPrice = parseAmount(offerPriceContainer);
        const quantity = +q(targetNode, "input.quantity-selector-group-input")?.value || 0;

        // Get discount calculation results
        const discountResult = calculateDiscount(offerPrice, quantity);

        // Calculate unit prices
        const finalUnitPrice = quantity > 0 ? discountResult.finalTotal / quantity : 0;
        const originalUnitPrice = parseAmount(q(targetNode, ".line-item-unit-price-value"));

        return {
            offerPrice, // Original total before discount
            discount: discountResult.discountAmount, // Amount saved
            totalPrice: discountResult.finalTotal, // Final price after discount
            originalUnitPrice: originalUnitPrice, // Unit price before discount
            finalUnitPrice: finalUnitPrice, // Unit price after discount
            quantity
        };
    }

    function getCelebrationTxt(targetNode) {
        const { discount, quantity } = getPriceData(targetNode);

        const single_item_txt = "<b>Clever sein und sparen:</b>&nbspAb 2 Stück mindestens 5% Rabatt";
        const multi_item_txt = `Glückwunsch! Du sparst ${formatPriceToGerman(discount)} durch unseren Mengenrabatt.`;

        if (test_variation === 1) {
            return quantity <= 1 ? "" : multi_item_txt;
        } else if (test_variation == 2) {
            return quantity <= 1 ? single_item_txt : multi_item_txt;
        } else {
            return "";
        }
    }

    function createReducedPriceLayout(targetNode) {
        const { totalPrice, quantity, discount, offerPrice } = getPriceData(targetNode);
        const parentNode = q(targetNode, ".line-item-total-price:not(.ab-added-reduced-total)");


        if (quantity > 1 && parentNode) {
            parentNode.classList.add("ab-added-reduced-total");
            q(parentNode, ".line-item-total-price-value").innerText = formatPriceToGerman(offerPrice);
            parentNode.insertAdjacentHTML("beforeend", /* HTML */ `<div class="ab-reduced-total-price">${formatPriceToGerman(totalPrice)}</div>`);
        }
    }

    function createCelebrationMessageLayout(targetNode) {
        const { totalPrice, quantity, discount, offerPrice } = getPriceData(targetNode);

        if (!q(targetNode, ".ab-celebration-message-container")) {
            targetNode.insertAdjacentHTML(
                "beforeend",
                /* HTML */
                `<div class="ab-celebration-message-container ${quantity <= 1 ? "ab-celebration-message-container--viewing-for-single" : ""}">${getCelebrationTxt(targetNode)}</div>`
            );

            if (quantity > 1) {
                fireConvertGoal("Shows Celebration Message | JS", 1004106272);
            }
        }
    }

    function createCelebrationMessageComponent() {
        const targetNodes = qq(".offcanvas-cart-items .line-item");
        targetNodes.forEach((targetNode) => {
            createReducedPriceLayout(targetNode);
            createCelebrationMessageLayout(targetNode);
        });
    }

    function cartObserverCallBack(recordsList, observer) {
        recordsList.forEach((record) => {
            if (record.addedNodes.length > 0) {
                const offcanvasBody = Array.from(record.addedNodes).find((node) => node.nodeType === 1 && node.classList?.contains("offcanvas-body"));
                if (offcanvasBody && offcanvasBody.querySelector(".offcanvas-cart-items .line-item")) {
                    createCelebrationMessageComponent();
                }
            }
        });
    }

    function cartObserver() {
        return mutationObserverFunction(".offcanvas", cartObserverCallBack, { childList: true, subtree: true });
    }

    function bodyObserverCallback(recordsList, observer) {
        recordsList.forEach((record) => {
            if (record.addedNodes.length > 0) {
                const offcanvasNode = Array.from(record.addedNodes).find((node) => node.nodeType === 1 && node.classList?.contains("offcanvas"));

                if (offcanvasNode) {
                    cartObserver();
                }
            }
        });
    }

    function bodyObserver() {
        return mutationObserverFunction("body", bodyObserverCallback, { childList: true });
    }

    function updateClassName() {
        qq("#productDetailPageBuyProductForm .col-4.col-sm-3.d-flex.justify-content-end").forEach((item) => {
            item.classList.remove("col-sm-3");
            item.classList.add("col-sm-4");
        });

        qq("#productDetailPageBuyProductForm .col-6.col-sm-7.col-md-8.col-lg-7.col-xl-8").forEach((item) => {
            item.classList.remove("col-md-8", "col-xl-8");
        });

        qq("#productDetailPageBuyProductForm .col-sm-9, #productDetailPageBuyProductForm .col-md-9").forEach((item) => {
            item.classList.remove("col-sm-9", "col-md-9");
            item.classList.add("col-sm-8");
        });
    }

    function createDropdownComponent() {
        const SELECT_OPTIONS = [
            {
                value: 1,
                label: 1,
                discount_percentage: 0,
            },
            {
                value: 2,
                label: 2,
                discount_percentage: 5,
            },
            {
                value: 3,
                label: 3,
                discount_percentage: 5,
            },
            {
                value: 4,
                label: 4,
                discount_percentage: 6,
            },
            {
                value: 5,
                label: 5,
                discount_percentage: 6,
            },
            {
                value: 6,
                label: 6,
                discount_percentage: 8,
            },
            {
                value: 7,
                label: 7,
                discount_percentage: 8,
            },
            {
                value: 8,
                label: 8,
                discount_percentage: 8,
            },
            {
                value: 9,
                label: 9,
                discount_percentage: 8,
            },
            {
                value: 10,
                label: 10,
                discount_percentage: 10,
            },
            {
                value: 11,
                label: "11+",
                discount_percentage: 10,
            },
        ];

        const layout = /* HTML */ `
            <div class="ab-quantity-dropdown-layout" expanded="false">
                <div class="ab-quantity-dropdown-select">${SELECT_OPTIONS[0].label}</div>
                <ul class="ab-quantity-dropdown-options">
                    ${SELECT_OPTIONS.map(
                        ({ value, label, discount_percentage }) => /* HTML */ `
                            <li class="ab-quantity-dropdown-option" value="${value}">
                                <span class="ab-quantity-dropdown-option__value">${label}</span>
                                ${value <= 10
                                    ? `<span class="ab-quantity-dropdown-option__green-badge">Spare ${discount_percentage}%</span>`
                                    : `<span class="ab-quantity-dropdown-option__ten-plus-badge"><i>Bitte Mail an uns</i></span>`}
                            </li>
                        `
                    ).join("")}
                </ul>
            </div>
        `;

        q(".product-detail-quantity-group.quantity-selector-group").insertAdjacentHTML("afterend", layout);
    }

    function toggleDropdown(action /* show, hide, toggle */) {
        const container = q(".ab-quantity-dropdown-layout");
        const isExpanded = container.getAttribute("expanded")?.toLowerCase() === "true";

        if (action === "toggle") {
            container.setAttribute("expanded", !isExpanded);
        } else if (action === "show") {
            container.setAttribute("expanded", true);
        } else if (action === "hide") {
            container.setAttribute("expanded", false);
        }
    }

    function clickEvents() {
        document.body.addEventListener("click", (e) => {
            if (e.target.closest(".ab-quantity-dropdown-select")) {
                // fireConvertGoal("Dropdown Open Click | JS", 1004106271);
                toggleDropdown("toggle");
            }

            if (q(".ab-quantity-dropdown-select") && !e.target.closest(".ab-quantity-dropdown-layout")) {
                toggleDropdown("hide");
            }

            if (e.target.closest(".ab-quantity-dropdown-option")) {
                const curr = e.target.closest(".ab-quantity-dropdown-option");
                const selectedValue = curr.getAttribute("value");
                const targetInput = q(".product-detail-quantity-group.quantity-selector-group input.product-detail-quantity-input");
                targetInput.value = selectedValue;
                q(".ab-quantity-dropdown-select").innerText = selectedValue;
                toggleDropdown("hide");
            }

        });
    }

    function createV1PriceDropdown() {
        if (test_variation !== 1) return;

        const selector = "body.is-ctl-product.is-act-index #productDetailPageBuyProductForm";
        waitForElement(
            () => q(selector),
            () => {
                updateClassName();
                createDropdownComponent();
            }
        );
    }

    function init() {
        document.body.classList.add(...BODY_CLASSLIST);
        console.table(TEST_CONFIG);
        bodyObserver(); /* Observing body -> when side cart appears in dom -> Observing Side Cart */
        createV1PriceDropdown();
        clickEvents();
    }

    function hasAllTargetElements() {
        return !!document.querySelector(`body:not(.${BODY_CLASSLIST[0]}):not(.${BODY_CLASSLIST[1]})`);
    }

    waitForElement(hasAllTargetElements, init);
})();
