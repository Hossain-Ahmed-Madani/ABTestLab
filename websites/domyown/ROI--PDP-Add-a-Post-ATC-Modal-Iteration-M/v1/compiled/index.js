/*  
    Test info:
        Test name: PDP - Add a Post ATC Modal (Iteration) [M]
        Ticket: https://trello.com/c/7rHQ37aa/4201-pdp-add-a-post-atc-modal-iteration-m
        Test container: https://app.vwo.com/#/test/ab/271/edit/variations/?accountId=348406
        Preview: 
        Forced variation: https://www.domyown.com/termidor-sc-p-184.html?_vis_preview_data=eyJhIjoiMTc3MWUwM2QyNzcxMmQ4ZmU0YjRmOThlYzEzMjhhOWQiLCJlIjp7IjI3MSI6eyJ2IjoiMiIsImQiOjAsInMiOjAsInRnIjowLCJ0IjowLCJ0ZCI6MCwibCI6MCwiYWxoIjowLCJpcGxlIjowLCJpaG8iOjAsInBhaGkiOm51bGwsInNhYmVyIjpudWxsLCJuZXdRdWVyeUJveCI6bnVsbCwiZGF0YVJlZ2lvbiI6bnVsbCwibWF0Y2hUeXBlIjpudWxsLCJjbiI6InVuZGVmaW5lZCIsInVybCI6Imh0dHBzJTI1M0ElMjUyRiUyNTJGd3d3LmRvbXlvd24uY29tJTI1MkZ0ZXJtaWRvci1zYy1wLTE4NC5odG1sIiwiYXBwIjoiYXBwIiwidHMiOjE3NjA0MzM0MjI3NTB9fX0=
*/

(() => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Do My Own",
        site_url: "https://www.domyown.com/termidor-sc-p-184.html",
        test_name: "PDP - Add a Post ATC Modal (Iteration) [M]",
        page_initials: "AB-PDP-ATC-MODAL",
        test_variation: 1,
        test_version: 0.0002,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
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
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    async function insertHTMLContentNoScript(htmlContent) {
        // Create a temporary container
        const tempContainer = document.createElement("div");
        tempContainer.innerHTML = htmlContent;

        // Insert the HTML without scripts first
        q("body").insertAdjacentHTML("afterbegin", htmlContent);
        q("#modal-window-added-product").style.display = "block";
    }

    async function addToCart(token, productId, productQuantity, referrer) {
        const body = new URLSearchParams();
        body.append("_token", token);
        body.append("products_id", productId);
        body.append(`cart_quantity[${productId}]`, productQuantity);
        body.append("cart_quantity_entered", productQuantity);

        try {
            const response = await fetch("https://www.domyown.com/cart", {
                headers: {
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    priority: "u=1, i",
                    "sec-ch-ua": '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
                    "sec-ch-ua-mobile": "?1",
                    "sec-ch-ua-platform": '"Android"',
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-csrf-token": token,
                    "x-newrelic-id": "VwEGVF9SGwEHUVNXBgY=",
                    "x-requested-with": "XMLHttpRequest",
                },
                referrer: referrer,
                body: body.toString(),
                method: "POST",
                mode: "cors",
                credentials: "include",
            });

            const data = await response.json();

            return {
                status: data.response,
                htmlContent: data.content,
                cartItems: data.cart,
                dataLayer: data.dataLayer,
                rfkData: data.rfk,
            };
        } catch (error) {
            console.error("Add to Cart Error:", error);
            throw error;
        }
    }

    function handleAddToCartClick() {
        const submitBtn = q("input.add-to-cart");
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            submitBtn.setAttribute("disabled", "true");

            // Execute the cart addition and insert HTML
            const token = q('form#cart-quantity input[name="_token"]').getAttribute("value");
            const referrer = window.location.origin + window.location.pathname;
            const productId = q("#products-grid").getAttribute("data-selected-products-id");
            const productQuantity = q("#product_qty_display").innerText || 0;

            addToCart(token, productId, productQuantity, referrer)
                .then(async (result) => {
                    // Insert HTML and execute all scripts in order
                    await insertHTMLContentNoScript(result.htmlContent);

                    console.log("Modal HTML inserted");
                })
                .catch((error) => {
                    console.error("Failed to add to cart:", error);
                })
                .finally(() => {
                    submitBtn.removeAttribute("disabled");
                });
        });
    }

    function updateModalLayout() {
        const modal = q("#modal-window-added-product:not(.ab-modal-updated)");

        const checkoutContainer = q(modal, "section.modal-content-body > .flex.flex-wrap > .w-full.border-l.px-4");
        if (checkoutContainer) {
            checkoutContainer.classList.remove("border-1");
            checkoutContainer.classList.add("border-t", "pt-2");
            q(modal, ".quick-view-addons")?.insertAdjacentElement("afterend", checkoutContainer);
        }

        if (q(modal, ".modal-content-header") && !q(modal, ".ab-close-modal")) {
            q(modal, ".modal-content-header").insertAdjacentHTML("afterbegin", /* HTML */ `<div class="ab-close-modal" rel="added-product">×</div>`);
        }

        if (q(modal, ".quick-view-addons div[data-rfkid='rfkid_32']:empty") && !q(modal, ".ab-cloned-node")) {
            q(modal, ".quick-view-addons div[data-rfkid='rfkid_32']:empty")?.parentNode.classList.add("hidden");
            const clonedNode = q("#page-content .mt-2.md\\:mt-4.pt-3.md\\:border-t.md\\:pb-4 > div").cloneNode(true);
            clonedNode.classList.add("ab-cloned-node");
            q(modal, ".quick-view-addons")?.insertAdjacentElement("beforeend", clonedNode);
        }

        q(modal, ".w-full.md\\:w-2\\/5.border-l.px-4.border-t.pt-2")?.classList.add("pt-4");

        handleModalClose();

        modal.classList.add("ab-modal-updated");
    }

    function openModal() {
        const modal = q("#modal-window-added-product");
        const modalBg = q(modal, ".modal-background");
        const modalContent = q(modal, ".modal-content");

        modal.classList.add("is-active");
        // Trigger reflow to ensure animations work
        void modal.offsetWidth;

        modalBg.classList.add("is-active");
        modalContent.classList.add("is-active");
    }

    function closeModal() {
        const modal = q("#modal-window-added-product");
        const modalBg = q(modal, ".modal-background");
        const modalContent = q(modal, ".modal-content");

        modalBg.classList.remove("is-active");
        modalContent.classList.remove("is-active");

        // Wait for animations to complete before hiding modal
        setTimeout(() => {
            modal.classList.remove("is-active");
            q(modal, ".close-modal:not(.not-margin)").click();
        }, 300);
    }

    function handleModalClose() {
        qq(".modal-background, .ab-close-modal, .close-modal.no-margin").forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                closeModal();
            });
        });
    }

    function mutationObserverFunction() {
        return new MutationObserver((mutationsList, observer) => {
            if (q("#modal-window-added-product:not(.ab-modal-updated)")) {
                console.log("Modal added to body");
                updateModalLayout();
                openModal();
            }
        }).observe(q("body"), { attributes: false, childList: true, subtree: false });
    }

    function init() {
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        handleAddToCartClick();
        mutationObserverFunction();
    }

    function hasAllTargetElements() {
        return !!(
            window?.location?.pathname?.includes("-p-") &&
            q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) &&
            q("form#cart-quantity") &&
            q("input.add-to-cart")
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
