/* 
Ticket: https://trello.com/c/pVg0rKnQ/4093-test019-electropapa-a-b-c-followup016-pds-side-cart-textlink-popup-and-volume-discount-nudge-cart#
Test doc: https://docs.google.com/document/d/13OFhHZ9n1KU_rWYOWWDacs2jVkpWrrBV2Yt5f6zHNlA/edit?tab=t.0

Test container: https://app.convert.com/accounts/1004828/projects/10047105/experiences/1004170195/summary

V1: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004170195.1004401763&utm_campaign=qa5
v2: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?_conv_eforce=1004170195.1004401764&utm_campaign=qa5

without forced: https://electropapa.com/de/e-bike-akku-als-ersatz-fuer-samsung-gd-ssdi-e24b-sdi-2510b-7inr19-65-4-10inr19-65-4-8-8-ah-24v-li-ion-800108614?utm_campaign=qa5
// https://electropapa.com/de/4x-staubsauger-schlauch-passend-fuer-kaercher-3-5m-35-mm-889006354 - no discount
*/

(() => {
    const TEST_CONFIG = {
        page_initials: "AB-TEST-019",
        test_variation: 1 /* 1, 2 */,
        test_version: 0.0008,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;
    const BODY_CLASSLIST = [page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version-${test_version}`];

    ASSETS = {
        information_svg: /* HTML */ `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect y="0.00012207" width="10" height="10" fill="url(#pattern0_3911_2703)" />
            <defs>
                <pattern id="pattern0_3911_2703" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_3911_2703" transform="scale(0.015625)" />
                </pattern>
                <image
                    id="image0_3911_2703"
                    width="64"
                    height="64"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg> `,
        arrow_svg: /* HTML */ `
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="32" height="32" fill="url(#pattern0_421_2)" />
                <defs>
                    <pattern id="pattern0_421_2" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_421_2" transform="scale(0.03125)" />
                    </pattern>
                    <image
                        id="image0_421_2"
                        width="32"
                        height="32"
                        preserveAspectRatio="none"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA51JREFUWIXFl99Pm1UYxz/PKV2hFIoySkc0ERNYlqlDjQvJZhgkmtEOSUxGvNqS/QMmXohXxLEZ4cZsCVfe+yOYmai02zLdiInZIjDnNHqxDDRMnW0WgbaALX0fL2hrYaM9EHTfq5NznvN8P2/e5/wSLNUdvVer6oTVoQvDPpQngLrc8BzCLyg3FC5XZol83tuQsMkr5QJCkXhrVqUf9DXAa8m7qPCRqg5f6gnc2hLA0dHZqgVv5SngdaDC0ni9MqqcSfuSA+OdzcvWAC99EWsxwqcgT23ReI1U9Zq45dWLhxv+KAvQHY096zhyEWjYDvMi3ZGsE77Q23hzQ4DVL5dv/gPzAoRL9IVoOHA332HyjUNXZiqNyCe25h6X0Fbvpq3ejcdVtpbzeiyrMnZ0dLbqPgBPynca2Geb6fhuL0Ptfoba/Rzfbbs4AHh+wVv51hqAUCTeymq1W6vGLQ9sW+qNUCQWLACsrvMtL7WtyJdVGQAw3dF7tblN5v/WsVc+i9cYVSeM/Q63napeNhoy6tD1EMwBMCJdBmNf+dstR/UZg9L8sAAEedIAteUCg14XLX77RdLiryDoddkQ+E25mFZ/BSMH6zh7oI6OJk/ZnB1NHs4eqGPkYB2tFtAGWCgVcGJPNT63YAT622pKQnQ0eehvq8EI+NzCiT3Vpd2V+QqEGZSdG8Wcu73E3kcqcJt/IcqZA2Qc5dztpTL+Om1QbpQKmoinOTmZIO0oQAFiV9E/bqxy8WaR+YoD71xPMBFPlwRA5HujcLl0FEzG0wyug9j7qLsw/nS9G1eR+enrC1z7s4w5YNCvTHpRx4DUZiGKj598ezPmQGp5kfNmvC+QVPjYZsZkPM2pqQSZHESxMo5ycsraHODD8b5A0gCo6jCQsZk1EUszOJWgGEGBwakEEzFr83QWZwhyx/GlnsAtVc7Yzp6IpRn5MVWAeP+n1GbMEdX3vjzSOA1Fd4C0LzmwI1n9ooi02ySJ/LrEz39lAGV6IWttDnpVXPNvF2CKh0KRWDCLfIvy+CYybka/u1X2j/Xs/C3fsWYrjoYDd2XFOQLc2XZrYdYl2cPF5vcBAFzobbxpzMpzwNfb565XXej+aDj4w/qRBx5G50O74sbMvQwMYrFHlFBaRd81Zr6z+C1QLIvHaSyYu0AeA8qcLgWlBD5YwRnOV/tGsr5PHxqN+XZUEUakU6ANpRnJPc+VOYQZhO9Ar/ydIjreF0ja5P0HWRJXChYouuEAAAAASUVORK5CYII="
                    />
                </defs>
            </svg>
        `,
    };

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
        if (timer <= 0) {
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

    function formatPriceToGerman(price, trimInnerSpace = false) {
        const formattedPriceTxt = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(price);

        return trimInnerSpace ? formattedPriceTxt.replaceAll("\u00A0", "") : formattedPriceTxt;
    }

    function getCelebrationTxt({ targetNode, totalPrice, quantity, discount, offerPrice }) {
        const multi_item_txt = `Glückwunsch! Du sparst ${formatPriceToGerman(discount, true)} durch unseren Mengenrabatt.`;

        {
            return quantity <= 1 ? "" : multi_item_txt;
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
            if (discount === 0 || totalPrice === offerPrice) return;
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

    function toggleHideVolumeDiscountTable(action /* show, hide, toggle */) {
        const body = document.body;
        const className = BODY_CLASSLIST[0] + "--show-volume-discount-table";
        {
            body.classList.toggle(className);
        }
    }

    // ==== Variation 1 ====
    function createV1Layout() {
        const selector = "table.product-block-prices-grid, .product-detail-tax, .product-detail-tax-link, .product-delivery-available";

        waitForElement(
            () => qq(selector).length === 4,
            () => {
                q("body").classList.add(page_initials + "--has-volume-discount-table");

                // ======  Modal Cta Link ======
                q(".product-detail-tax-link").innerText = "Kostenfreie Lieferung in DE";
                q(".product-detail-tax").insertAdjacentHTML(
                    "afterend",
                    `<span class="ab-volume-discount-modal-cta">
                        <span class="ab-volume-discount-modal-cta__icon">${ASSETS.information_svg}</span>
                        <span class="ab-volume-discount-modal-cta__txt">
                            <span>Sparpreis bei höherer Stückzahl verfügbar</span>
                            <span class="ab-volume-discount-modal-cta__down-arrow-icon">${ASSETS.arrow_svg}</span>
                        </span>
                    </span>`
                );

                // ===== Click Event =====
                q(".ab-volume-discount-modal-cta").addEventListener("click", (e) => toggleHideVolumeDiscountTable());
            }
        );
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

    function init() {
        document.body.classList.add(...BODY_CLASSLIST);

        // V1 PDP Layout
        createV1Layout();

        // Observing body -> when side cart appears in dom -> Observing Side Cart
        bodyObserver();

        // Handle when test buckets on side cart open
        cartObserver();

        // Cart page layout
        createCartPageLayout();
    }

    function hasAllTargetElements() {
        return !!document.querySelector(`body:not(.${BODY_CLASSLIST[0]}):not(.${BODY_CLASSLIST[1]})`);
    }

    waitForElement(hasAllTargetElements, init);
})();
