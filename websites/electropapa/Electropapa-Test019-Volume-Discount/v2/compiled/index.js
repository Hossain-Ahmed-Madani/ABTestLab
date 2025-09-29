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
        test_variation: 2 /* 1, 2 */,
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
        return [...document.querySelectorAll(s)];
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

    function formatPriceToGerman(price, trimInnerSpace = false) {
        const formattedPriceTxt = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(price);

        return trimInnerSpace ? formattedPriceTxt.replaceAll("\u00A0", "") : formattedPriceTxt;
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
            quantity,
        };
    }

    function getCelebrationTxt(targetNode) {
        const { discount, quantity } = getPriceData(targetNode);

        const single_item_txt = "<b>Clever sein und sparen:</b>&nbspAb 2 Stück mindestens 5% Rabatt";
        const multi_item_txt = `Glückwunsch! Du sparst ${formatPriceToGerman(discount, true)} durch unseren Mengenrabatt.`;

        {
            return quantity <= 1 ? single_item_txt : multi_item_txt;
        }
    }

    function createReducedPriceLayout(targetNode) {
        const { totalPrice, quantity, offerPrice } = getPriceData(targetNode);
        const parentNode = q(targetNode, ".line-item-total-price:not(.ab-added-reduced-total)");

        if (quantity > 1 && parentNode) {
            parentNode.classList.add("ab-added-reduced-total");
            q(parentNode, ".line-item-total-price-value").innerText = formatPriceToGerman(offerPrice);
            parentNode.insertAdjacentHTML("beforeend", /* HTML */ `<div class="ab-reduced-total-price">${formatPriceToGerman(totalPrice)}</div>`);
        }
    }

    function createCelebrationMessageLayout(targetNode) {
        const { quantity} = getPriceData(targetNode);

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

    // ==== Variation 2 ====

    function init() {
        document.body.classList.add(...BODY_CLASSLIST);
        console.table(TEST_CONFIG);
        bodyObserver(); /* Observing body -> when side cart appears in dom -> Observing Side Cart */
        // clickEvents();
    }

    function hasAllTargetElements() {
        return !!document.querySelector(`body:not(.${BODY_CLASSLIST[0]}):not(.${BODY_CLASSLIST[1]})`);
    }

    waitForElement(hasAllTargetElements, init);
})();
