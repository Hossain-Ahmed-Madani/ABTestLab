/* 
Ticket: https://trello.com/c/pVg0rKnQ/4093-test019-electropapa-a-b-c-followup016-pds-side-cart-textlink-popup-and-volume-discount-nudge-cart#
Test doc: https://docs.google.com/document/d/13OFhHZ9n1KU_rWYOWWDacs2jVkpWrrBV2Yt5f6zHNlA/edit?tab=t.0

Test container: https://app.convert.com/accounts/1004828/projects/10047105/experiences/1004170195/summary

V1: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004170195.1004401763&utm_campaign=qa5
v2: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004170195.1004401764&utm_campaign=qa5

without forced: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?utm_campaign=qa5

*/

(() => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "Project Name",
        site_url: "https://electropapa.com/de",
        test_name: "Test019 [Electropapa] A/B/C - Followup016 - PDS & Side Cart - Textlink Popup and Volume discount nudge cart",
        page_initials: "AB-TEST-019",
        test_variation: 2 /* 1, 2 */,
        test_version: 0.0007,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;
    const BODY_CLASSLIST = [page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version-${test_version}`];

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
        waitForElement(
            () => q(selector),
            () => {
                const targetNode = q(selector);
                const observer = new MutationObserver(callback);
                observer.observe(targetNode, config);
                return observer;
            }
        );
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

    async function getPriceData(targetNode) {
        const productUrl = q(targetNode, "a.line-item-label")?.getAttribute("href") || "";
        const dom = await fetchAndParseURLApi(productUrl);

        const offerPriceContainer = q(targetNode, ".line-item-total-price-value");
        const offerPrice = parseAmount(offerPriceContainer); // This is DISCOUNTED price
        const quantity = +q(targetNode, "input.quantity-selector-group-input")?.value || 0;

        // const totalPrice = calculateOriginalPrice(offerPrice, quantity);
        const hasVolumeDiscountTable = !!q(dom, ".table.product-block-prices-grid");
        const totalPricePerQuantity = parseAmount(q(dom, ".product-detail-price"));
        const totalPrice = totalPricePerQuantity * quantity;
        const discount = totalPrice - offerPrice;

        return {
            hasVolumeDiscountTable,
            totalPrice, // Original main price
            offerPrice, // Discounted price
            discount, // Actual amount saved
            quantity,
        };
    }

    function getCelebrationTxt({ targetNode, totalPrice, quantity, discount, offerPrice }) {
        const single_item_txt = "<b>Clever sein und sparen:</b>&nbspAb 2 Stück mindestens 5% Rabatt";
        const multi_item_txt = `Glückwunsch! Du sparst ${formatPriceToGerman(discount, true)} durch unseren Mengenrabatt.`;

        {
            return quantity <= 1 ? single_item_txt : multi_item_txt;
        }
    }

    function createReducedPriceLayout({ targetNode, totalPrice, quantity, discount, offerPrice }) {
        const parentNode = q(targetNode, ".line-item-total-price:not(.ab-added-reduced-total)");

        if (quantity > 1 && parentNode) {
            parentNode.classList.add("ab-added-reduced-total");
            // q(parentNode, ".line-item-total-price-value").innerText = formatPriceToGerman(totalPrice);
            parentNode.insertAdjacentHTML("afterbegin", /* HTML */ `<div class="ab-total-price ">${formatPriceToGerman(totalPrice)}</div>`);
        }
    }

    function createSingleItemProgressBtnLayout() {
        const layout = /* HTML */ `
            <div class="ab-single-item-progress-btn-container">
                <div class="ab-single-item-progress-btn-container__heading">Jetzt zum Sparpreis immer Ersatz parat haben</div>
                <div class="ab-single-item-progress-btn-container__progress-bar" step="1">
                    <div class="ab-single-item-progress-btn-container__progress-bar__pointer ab-single-item-progress-btn-container__progress-bar__pointer--2"></div>
                    <div class="ab-single-item-progress-btn-container__progress-bar__pointer ab-single-item-progress-btn-container__progress-bar__pointer--3"></div>
                </div>
                <div class="ab-single-item-progress-btn-container__btn-container">
                    <div class="ab-single-item-progress-btn-container__btn ab-single-item-progress-btn-container__btn--selected" quantity="1">
                        <span class="ab-single-item-progress-btn-container__btn__label">1 Stück</span>
                        <span class="ab-single-item-progress-btn-container__btn__badge"></span>
                    </div>
                    <div class="ab-single-item-progress-btn-container__btn" quantity="2">
                        <span class="ab-single-item-progress-btn-container__btn__label">2 Stück</span>
                        <span class="ab-single-item-progress-btn-container__btn__badge">Spare 5%</span>
                    </div>
                    <div class="ab-single-item-progress-btn-container__btn" quantity="4">
                        <span class="ab-single-item-progress-btn-container__btn__label">4 Stück</span>
                        <span class="ab-single-item-progress-btn-container__btn__badge">Spare 6%</span>
                    </div>
                </div>
            </div>
        `;

        return layout;
    }

    function createCelebrationMessageLayoutV2({ targetNode, totalPrice, quantity, discount, offerPrice }) {
        if (!q(targetNode, ".ab-single-item-progress-btn-container") && quantity < 2) {
            q(targetNode, ".line-item-quantity").classList.add("ab-hidden");
            q(targetNode, ".line-item-remove").insertAdjacentElement("beforeend", q(targetNode, ".line-item-total-price.line-item-price"));
            targetNode.insertAdjacentHTML("beforeend", createSingleItemProgressBtnLayout());
        }

        if (!q(targetNode, ".ab-celebration-message-container") && quantity > 1 && discount !== 0) {
            targetNode.insertAdjacentHTML(
                "beforeend",
                /* HTML */
                `<div class="ab-celebration-message-container">${getCelebrationTxt({ targetNode, totalPrice, quantity, discount, offerPrice })}</div>`
            );

            fireConvertGoal("Shows Celebration Message | JS", 1004106272);
        }
    }

    function createCelebrationMessageComponent() {
        const targetNodes = qq(".offcanvas-cart-items .line-item");
        targetNodes.forEach(async (targetNode) => {
            const { hasVolumeDiscountTable, totalPrice, quantity, discount, offerPrice } = await getPriceData(targetNode);

            if (!hasVolumeDiscountTable) return;

            createReducedPriceLayout({ targetNode, totalPrice, quantity, discount, offerPrice });
            createCelebrationMessageLayoutV2({ targetNode, totalPrice, quantity, discount, offerPrice });
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

    function clickEvents() {
        document.body.addEventListener("click", (e) => {
            // ==== Variation 2 ====

            if (e.target.closest(".ab-single-item-progress-btn-container__btn:not(.ab-single-item-progress-btn-container__btn--selected)")) {
                const clickedItem = e.target.closest(".ab-single-item-progress-btn-container__btn:not(.ab-single-item-progress-btn-container__btn--selected)");
                const quantity = clickedItem.getAttribute("quantity");
                const container = e.target.closest(".ab-single-item-progress-btn-container");

                qq(container, ".ab-single-item-progress-btn-container__btn").forEach((item) => {
                    const className = "ab-single-item-progress-btn-container__btn--selected";
                    if (item === clickedItem) {
                        item.classList.add(className);
                    } else {
                        item.classList.remove(className);
                    }
                });

                const progressBar = q(container, ".ab-single-item-progress-btn-container__progress-bar");

                if (quantity === "1") {
                    progressBar.setAttribute("step", 1);
                } else if (quantity === "2") {
                    progressBar.setAttribute("step", 2);
                } else if (quantity === "4") {
                    progressBar.setAttribute("step", 3);
                }

                const inputElement = q(e.target.closest(".line-item"), ".js-offcanvas-cart-change-quantity-number");
                inputElement.value = quantity;
                const changeEvent = new Event("change", { bubbles: true });
                inputElement.dispatchEvent(changeEvent);
            }

            if (e.target.closest(".ab-quantity-dropdown-option")) {
                const curr = e.target.closest(".ab-quantity-dropdown-option");
                const selectedValue = curr.getAttribute("value");
                const targetInput = q(".product-detail-quantity-group.quantity-selector-group input.product-detail-quantity-input");
                targetInput.value = selectedValue;
            }
        });
    }

    function createCheckoutCrossedTotalPriceLayout(finalTotal) {
        q(".checkout-aside-summary-list").insertAdjacentHTML("afterbegin", `<div class="col-12"><div class="ab-total-price">${formatPriceToGerman(finalTotal)}</div></div>`);
    }

    function createCheckoutCelebrationMessage(finalDiscount) {
        const layout = /* HTML */ `
            <div class="col-12">
                <div class="ab-celebration-message-container ">Glückwunsch! Du sparst ${formatPriceToGerman(finalDiscount, true)} durch unseren Mengenrabatt.</div>
            </div>
        `;

        q(".checkout-aside-summary-list .checkout-aside-summary-value:first-of-type").insertAdjacentHTML("afterend", layout);
    }

    function createCartPageLayout() {
        if (!window.location.href.includes("/checkout/cart")) return;

        waitForElement(
            () =>
                !!(
                    qq(".checkout-product-table .line-item").length > 0 &&
                    q(".checkout-aside-summary-list .checkout-aside-summary-value:first-of-type") &&
                    qq(".checkout-aside-summary-list .ab-total-price, .checkout-aside-summary-list .ab-celebration-message-container").length === 0
                ),
            async () => {
                const targetNodes = qq(".checkout-product-table .line-item");

                const priceDataList = await Promise.all(targetNodes.map((targetNode) => getPriceData(targetNode)));

                const finalTotal = priceDataList.reduce((sum, { totalPrice }) => sum + totalPrice, 0);
                const finalOfferTotal = priceDataList.reduce((sum, { offerPrice }) => sum + offerPrice, 0);
                const finalDiscount = finalTotal - finalOfferTotal;

                if (finalDiscount === 0) return; // No discount applied

                createCheckoutCrossedTotalPriceLayout(finalTotal);
                createCheckoutCelebrationMessage(finalDiscount);
                fireConvertGoal("Shows Celebration Message | JS", 1004106272);
            }
        );
    }

    // ==== Variation 2 ====
    function init() {
        document.body.classList.add(...BODY_CLASSLIST);
        console.table(TEST_CONFIG);
        // Observing body -> when side cart appears in dom -> Observing Side Cart
        bodyObserver();

        // Handle when test buckets on side cart open
        cartObserver();

        // Other functionalities
        clickEvents();

        // Cart page layout
        createCartPageLayout();
    }

    function hasAllTargetElements() {
        return !!document.querySelector(`body:not(.${BODY_CLASSLIST[0]}):not(.${BODY_CLASSLIST[1]})`);
    }

    waitForElement(hasAllTargetElements, init);
})();
