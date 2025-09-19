(() => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "Project Name",
        site_url: "https://electropapa.com/de",
        test_name: "Test018 A/B/C - Followup016 - PDS & Side Cart - Volume discount",
        page_initials: "AB-TEST-018",
        test_variation: 2 /* 0, 1, 2 */,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;
    const BODY_CLASSLIST = [page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`];

    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
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

    function mutationObserverFunction(selector, callback, config) {
        const targetNode = q(selector);
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
        return observer;
    }

    function getCelebrationTxt(totalPrice, unitPrice, quantity) {
        const percentage_by_quantity = [0, 0, 5, 5, 6, 6, 8, 8, 8, 8, 10];
        const discount_percentage = quantity < 10 ? percentage_by_quantity[quantity] : percentage_by_quantity[10];
        // const discount_amount = totalPrice * (discount_percentage / 100);
        const discount_amount = totalPrice - unitPrice * quantity;

        const single_item_txt = "<b>Clever sein und sparen:</b>&nbspAb 2 Stück mindestens 5% Rabatt";
        const multi_item_txt = `Glückwunsch! Du sparst ${discount_amount}€ durch unseren Mengenrabatt.`;

        if (test_variation === 1) {
            return quantity <= 1 ? "" : multi_item_txt;
        } else if (test_variation == 2) {
            return quantity <= 1 ? single_item_txt : multi_item_txt;
        } else {
            return "";
        }
    }

    function parseAmount(elem) {
        if (!elem) return 0;
        return parseFloat(elem.innerText?.replace(",", ".")?.replace(".", "")?.replace("€", ""));
    }

    function createCelebrationMessageComponent() {
        const targetNodes = qq(".offcanvas-cart-items .line-item");

        targetNodes.forEach((targetNode) => {
            const quantity = +q(targetNode, "input.quantity-selector-group-input")?.value || 0;
            const totalPrice = parseAmount(q(targetNode, ".line-item-total-price-value"));
            const unitPrice = parseAmount(q(targetNode, ".line-item-unit-price-value"));

            if (!q(targetNode, ".ab-celebration-message-container")) {
                targetNode.insertAdjacentHTML(
                    "beforeend",
                    /* HTML */ `
                    <div class="ab-celebration-message-container ${quantity <= 1 ? "ab-celebration-message-container--viewing-for-single" : ""}">
                        ${getCelebrationTxt(totalPrice, unitPrice, quantity)}
                    </div>`
                );
            }
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
                    console.log("--- Side cart element added:");
                    cartObserver();
                }
            }
        });
    }

    function bodyObserver() {
        return mutationObserverFunction("body", bodyObserverCallback, { childList: true });
    }

    function init() {
        document.body.classList.add(...BODY_CLASSLIST);
        console.table(TEST_CONFIG);
        bodyObserver();
    }

    function hasAllTargetElements() {
        return !!(document.body && BODY_CLASSLIST.every((className) => !document.body.classList.contains(className)));
    }

    waitForElement(hasAllTargetElements, init);
})();
