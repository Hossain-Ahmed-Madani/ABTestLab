/* 
Ticket: https://trello.com/c/pVg0rKnQ/4093-test019-electropapa-a-b-c-followup016-pds-side-cart-textlink-popup-and-volume-discount-nudge-cart#
Test doc: https://docs.google.com/document/d/13OFhHZ9n1KU_rWYOWWDacs2jVkpWrrBV2Yt5f6zHNlA/edit?tab=t.0

Test container: https://app.convert.com/accounts/1004828/projects/10047105/experiences/1004170195/summary

ControL: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?convert_action=convert_vpreview&convert_e=1004170195&convert_v=1004401762&utm_campaign=qa5 
V1: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004170195.1004401763&utm_campaign=qa5 
v2: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004170195.1004401764&utm_campaign=qa5 

*/

(() => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "Project Name",
        site_url: "https://electropapa.com/de",
        test_name: "Test019 [Electropapa] A/B/C - Followup016 - PDS & Side Cart - Textlink Popup and Volume discount nudge cart",
        page_initials: "AB-TEST-019",
        test_variation: 1 /* 1, 2 */,
        test_version: 0.0004,
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

    async function getProductOriginalPricePerQuantity(url) {
        return fetch(url)
            .then((res) => res.text())
            .then((resTxt) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(resTxt, "text/html");
                const priceNode = doc.querySelector(".product-detail-price");
                if (priceNode) {
                    return parseAmount(priceNode);
                } else {
                    throw new Error("Price element not found");
                }
            });
    }

    // Note: Not in use | As we are fetching original price from PDS page to calculate total price more accurately
    function calculateOriginalPrice(offerPrice, quantity) {
        const percentage_by_quantity = [0, 0, 5, 5, 6, 6, 8, 8, 8, 8, 10];
        const discount_percentage = quantity <= 10 ? percentage_by_quantity[quantity] : percentage_by_quantity[10];

        const originalPrice = offerPrice / (1 - discount_percentage / 100);
        return originalPrice;
    }

    async function getPriceData(targetNode) {
        const productUrl = q(targetNode, "a.line-item-label")?.getAttribute("href") || "";

        const offerPriceContainer = q(targetNode, ".line-item-total-price-value");
        const offerPrice = parseAmount(offerPriceContainer); // This is DISCOUNTED price
        const quantity = +q(targetNode, "input.quantity-selector-group-input")?.value || 0;

        // const totalPrice = calculateOriginalPrice(offerPrice, quantity);
        const totalPricePerQuantity = await getProductOriginalPricePerQuantity(productUrl);
        const totalPrice = totalPricePerQuantity * quantity;
        const discount = totalPrice - offerPrice;

        return {
            totalPrice, // Original main price
            offerPrice, // Discounted price
            discount, // Actual amount saved
            quantity,
        };
    }

    function getCelebrationTxt({ targetNode, totalPrice, quantity, discount, offerPrice }) {
        const single_item_txt = "<b>Clever sein und sparen:</b>&nbspAb 2 Stück mindestens 5% Rabatt";
        const multi_item_txt = `Glückwunsch! Du sparst ${formatPriceToGerman(discount, true)} durch unseren Mengenrabatt.`;

        if (test_variation === 1) {
            return quantity <= 1 ? "" : multi_item_txt;
        } else if (test_variation == 2) {
            return quantity <= 1 ? single_item_txt : multi_item_txt;
        } else {
            return "";
        }
    }

    function createReducedPriceLayout({ targetNode, totalPrice, quantity, discount, offerPrice }) {
        const parentNode = q(targetNode, ".line-item-total-price:not(.ab-added-reduced-total)");

        if (quantity > 1 && parentNode) {
            parentNode.classList.add("ab-added-reduced-total");
            parentNode.insertAdjacentHTML("afterbegin", /* HTML */ `<div class="ab-total-price ">${formatPriceToGerman(totalPrice)}</div>`);
        }
    }

    function createCelebrationMessageLayout({ targetNode, totalPrice, quantity, discount, offerPrice }) {
        if (!q(targetNode, ".ab-celebration-message-container")) {
            targetNode.insertAdjacentHTML(
                "beforeend",
                /* HTML */
                `<div class="ab-celebration-message-container ${quantity <= 1 ? "ab-celebration-message-container--viewing-for-single" : ""}">
                    ${getCelebrationTxt({ targetNode, totalPrice, quantity, discount, offerPrice })}
                </div>`
            );

            if (quantity > 1) {
                fireConvertGoal("Shows Celebration Message | JS", 1004106272);
            }
        }
    }

    function createCelebrationMessageComponent() {
        const targetNodes = qq(".offcanvas-cart-items .line-item");
        targetNodes.forEach(async (targetNode) => {
            const { totalPrice, quantity, discount, offerPrice } = await getPriceData(targetNode);
            createReducedPriceLayout({ targetNode, totalPrice, quantity, discount, offerPrice });
            createCelebrationMessageLayout({ targetNode, totalPrice, quantity, discount, offerPrice });
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

    function showHideVolumeDiscountModal(action /* show, hide */) {
        const body = document.body;
        const className = BODY_CLASSLIST[0] + "--show-volume-discount-modal";
        if (action === "show") {
            body.classList.add(className);
        } else if (action === "hide") {
            body.classList.remove(className);
            //
        }
    }

    function toggleHideVolumeDiscountTable(action /* show, hide, toggle */) {
        const body = document.body;
        const className = BODY_CLASSLIST[0] + "--show-volume-discount-table";
        if (action === "toggle") {
            body.classList.toggle(className);
        } else if (action === "show") {
            body.classList.add(className);
        } else if (action === "hide") {
            body.classList.remove(className);
        }
    }

    function clickEvents() {
        document.body.addEventListener("click", (e) => {
            // ==== Variation 1 ====
            if (e.target.closest(".ab-free-delivery-txt-cta")) {
                q(".product-detail-tax-link").click();
            }

            if (e.target.closest(".ab-volume-discount-modal-cta")) {
                toggleHideVolumeDiscountTable("toggle");
            }

            // if (e.target.closest(".ab-volume-discount-modal-cta")) {
            //     showHideVolumeDiscountModal("show");
            // }

            // if (e.target.closest(".ab-quantity-modal__close-cta") || (e.target.closest(".ab-quantity-modal-backdrop") && !e.target.closest(".ab-quantity-modal"))) {
            //     showHideVolumeDiscountModal("hide");
            // }

            // if (e.target.closest(".ab-quantity-dropdown-option")) {
            //     const curr = e.target.closest(".ab-quantity-dropdown-option");
            //     const selectedValue = curr.getAttribute("value");
            //     const targetInput = q(".product-detail-quantity-group.quantity-selector-group input.product-detail-quantity-input");
            //     targetInput.value = selectedValue;
            //     showHideVolumeDiscountModal("hide");
            // }
        });
    }

    // ==== Variation 1 ====
    function createV1PriceModal() {
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

        const selector = ".product-detail-tax-link, .product-delivery-available";

        waitForElement(
            () => qq(selector).length === 2,
            () => {
                // ======  Modal Cta Link ======
                q(".product-detail-tax-link").insertAdjacentHTML("afterend", `<span class="ab-volume-discount-modal-cta">Sparpreis bei höherer Stückzahl verfügbar</span>`);

                // ====== Delivery Layout ======
                q(".product-delivery-available").insertAdjacentHTML(
                    "afterend",
                    /* HTML */ `
                        <div class="ab-free-delivery-txt-cta-container">
                            <div class="product-delivery-available">
                                <div>
                                    <span class="delivery-status-indicator bg-success"></span>
                                </div>
                                <div class="high-availability">
                                    <span class="text-success fw-bold">Auf Lager</span>
                                </div>
                            </div>
                            <div class="product-delivery-available ab-free-delivery-txt-cta">
                                <div>
                                    <span class="delivery-status-indicator bg-success"></span>
                                </div>
                                <div class="high-availability">
                                    <span class="text-success fw-bold">Kostenfreie Lieferung in DE</span>
                                </div>
                            </div>
                        </div>
                    `
                );

                // ====== Modal Layout ======
                q("body").insertAdjacentHTML(
                    "afterbegin",
                    /* HTML */ `
                        <!-- MODAL  -->
                        <div class="ab-quantity-modal-layout">
                            <div class="ab-quantity-modal-backdrop"></div>
                            <div class="ab-quantity-modal">
                                <div class="ab-quantity-modal__container">
                                    <div class="ab-quantity-modal__close-cta btn-close close"></div>
                                    <div class="ab-quantity-modal__heading">Jetzt zum Sparpreis immer Ersatz parat haben</div>
                                    <div class="ab-quantity-modal__sub-heading">Clever sein und sparen!</div>
                                    <div class="ab-quantity-dropdown-layout">
                                        <ul class="ab-quantity-dropdown-options">
                                            ${SELECT_OPTIONS.map(
                                                ({ value, label, discount_percentage }) => /* HTML */ `
                                                    <li class="ab-quantity-dropdown-option" value="${value}">
                                                        <span class="ab-quantity-dropdown-option__value">${label} Stk.</span>
                                                        ${value <= 10
                                                            ? `<span class="ab-quantity-dropdown-option__green-badge">Spare ${discount_percentage}%</span>`
                                                            : `<span class="ab-quantity-dropdown-option__ten-plus-badge"><i>Bitte Mail an uns</i></span>`}
                                                    </li>
                                                `
                                            ).join("")}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                );
            }
        );
    }

    function init() {
        document.body.classList.add(...BODY_CLASSLIST);
        console.table(TEST_CONFIG);

        // Observing body -> when side cart appears in dom -> Observing Side Cart
        bodyObserver();

        // Handle when test buckets on side cart open
        cartObserver();

        // Other functionalities
        createV1PriceModal();
        clickEvents();
    }

    function hasAllTargetElements() {
        return !!document.querySelector(`body:not(.${BODY_CLASSLIST[0]}):not(.${BODY_CLASSLIST[1]})`);
    }

    waitForElement(hasAllTargetElements, init);
})();
