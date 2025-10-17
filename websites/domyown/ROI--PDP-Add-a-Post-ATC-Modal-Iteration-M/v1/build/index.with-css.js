(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-PDP-ATC-MODAL--overflow-hidden {
  overflow: hidden;
}
.AB-PDP-ATC-MODAL input.add-to-cart {
  display: none;
}
.AB-PDP-ATC-MODAL button.ab-add-to-cart[disabled] {
  pointer-events: none;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  position: relative;
}
.AB-PDP-ATC-MODAL button.ab-add-to-cart[disabled]:after {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 5px solid;
  border-color: rgba(17, 7, 7, 0.15) rgba(255, 255, 255, 0.25)
    rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: calc(50% + 60px);
  z-index: 10;
  opacity: 0.7;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.AB-PDP-ATC-MODAL #modal-window-added-product .ab-cloned-node .rfk_header {
  display: none;
}
.AB-PDP-ATC-MODAL #modal-window-added-product .rfk-rw ul li .rfk_name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
  margin-bottom: 4px;
}
.AB-PDP-ATC-MODAL #modal-window-added-product .modal-content {
  position: absolute;
  right: -100%;
  top: 0;
  min-height: 100%;
  overflow: hidden;
}
.AB-PDP-ATC-MODAL #modal-window-added-product .modal-content-body {
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 0px;
}
.AB-PDP-ATC-MODAL #modal-window-added-product .rfk_pimage,
.AB-PDP-ATC-MODAL #modal-window-added-product .rfk_pimage img {
  height: 103px;
  max-height: 103px;
}
.AB-PDP-ATC-MODAL
  #modal-window-added-product
  .modal-content
  #braintree-loading-container,
.AB-PDP-ATC-MODAL
  #modal-window-added-product
  .modal-content
  .text-center.text-sm.text-grey-darker {
  display: none;
}
.AB-PDP-ATC-MODAL
  #modal-window-added-product
  .modal-content
  .text-sm.mt-2
  .mt-8 {
  margin-top: 15px;
}
.AB-PDP-ATC-MODAL
  #modal-window-added-product
  .modal-content
  .modal-content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.AB-PDP-ATC-MODAL
  #modal-window-added-product
  .modal-content
  .modal-content-header
  h3
  span {
  display: none;
}
.AB-PDP-ATC-MODAL
  #modal-window-added-product
  .modal-content
  .modal-content-header
  h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
}
.AB-PDP-ATC-MODAL
  #modal-window-added-product
  .modal-content
  .modal-content-header
  h3:before {
  content: "";
  width: 18px;
  height: 11px;
  border-bottom: 4px solid #0a7806;
  border-left: 4px solid #0a7806;
  display: inline-block;
  transform: rotate(-45deg);
  margin-top: -3px;
}
.AB-PDP-ATC-MODAL #modal-window-added-product .modal-content .close-x {
  position: static;
  order: 1;
}
.AB-PDP-ATC-MODAL #modal-window-added-product #braintree-asset-container,
.AB-PDP-ATC-MODAL #modal-window-added-product #braintree-loading-container {
  display: none;
}
.AB-PDP-ATC-MODAL
  #modal-window-added-product
  h3.heading.font-bold.text-xl.md\:text-2xl.mt-4 {
  margin-top: 6px;
}
.AB-PDP-ATC-MODAL #modal-window-added-product .quick-view-addons {
  margin-top: 10px;
  margin-bottom: 0;
  padding-top: 5px;
}
.AB-PDP-ATC-MODAL #modal-window-added-product .list-reset {
  margin-bottom: 0;
}
.AB-PDP-ATC-MODAL #modal-window-added-product a.button-primary[href="https://www.domyown.com/checkout/payment"]
{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
}
.AB-PDP-ATC-MODAL a.close-modal:not(.no-margin) {
  display: none;
}
.AB-PDP-ATC-MODAL .ab-close-modal {
  order: 1;
  color: #333;
  font-size: 2.25rem;
}
.AB-PDP-ATC-MODAL .modal-content {
  padding-left: 0;
  padding-right: 0;
}
.AB-PDP-ATC-MODAL .modal-content-header,
.AB-PDP-ATC-MODAL .modal-content-body > div {
  padding-left: 15px;
  padding-right: 15px;
}
.AB-PDP-ATC-MODAL
  .modal-content-body
  > div.flex.flex-wrap.md\:flex-no-wrap
  > .w-full.md\:w-2\/3 {
  margin-top: 15px;
}
.AB-PDP-ATC-MODAL
  .modal-content-body
  > div.flex.flex-wrap.md\:flex-no-wrap
  > .w-full.md\:w-2\/3
  .text-lg {
  line-height: 100%;
}
.AB-PDP-ATC-MODAL
  .modal-content-body
  > div.flex.flex-wrap.md\:flex-no-wrap
  > .w-full.md\:w-2\/3
  .text-lg
  + p {
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  margin: 8px 0 10px;
}
.AB-PDP-ATC-MODAL
  .modal-content-body
  > div.flex.flex-wrap.md\:flex-no-wrap
  > .w-full.md\:w-2\/3
  .text-lg
  + p
  span {
  color: #315caa;
}
.AB-PDP-ATC-MODAL .ab-price-content {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.AB-PDP-ATC-MODAL .ab-price-content span {
  margin-bottom: 0;
}
.AB-PDP-ATC-MODAL .ab-price-content span.text-red {
  font-size: 15px;
  line-height: 100%;
  font-weight: 600;
}
.AB-PDP-ATC-MODAL .ab-price-content span.line-through {
  font-size: 13px;
  line-height: 100%;
}
.AB-PDP-ATC-MODAL
  .modal-content-body
  > div.flex.flex-wrap.md\:flex-no-wrap
  .w-1\/3 {
  margin-right: 20px;
}
.AB-PDP-ATC-MODAL
  .modal-content-body
  > div.flex.flex-wrap.md\:flex-no-wrap
  .w-1\/3
  img {
  border: 1px solid #ebebeb;
}
.AB-PDP-ATC-MODAL #modal-window-added-product {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 9999;
}
.AB-PDP-ATC-MODAL #modal-window-added-product.is-active {
  display: block;
}
.AB-PDP-ATC-MODAL #modal-window-added-product .modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.AB-PDP-ATC-MODAL #modal-window-added-product .modal-background.is-active {
  opacity: 1;
}
.AB-PDP-ATC-MODAL #modal-window-added-product .modal-content {
  position: absolute;
  top: 0;
  right: -110%;
  height: 100%;
  background: #fff;
  transition: right 0.3s ease-in-out;
}
.AB-PDP-ATC-MODAL #modal-window-added-product .modal-content.is-active {
  right: 0;
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
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
    test_version: 0.0003,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  function waitForElement(predicate, callback, timer = 30000, frequency = 150) {
    if (timer <= 0) {
      return;
    } else if (predicate && predicate()) {
      callback();
    } else {
      setTimeout(
        () => waitForElement(predicate, callback, timer - frequency, frequency),
        frequency,
      );
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
          "sec-ch-ua":
            '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
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

  async function miniCart() {
    try {
      const response = await fetch("https://www.domyown.com/cart/mini", {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          "sec-ch-ua-mobile": "?1",
          "sec-ch-ua-platform": '"Android"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-csrf-token": "RBePmwuHWyWx43OZ7yx8UbDCZsEKhMXPkFwuKm02",
          "x-newrelic-id": "VwEGVF9SGwEHUVNXBgY=",
          "x-requested-with": "XMLHttpRequest",
        },
        referrer: "https://www.domyown.com/cart",
        method: "GET",
        mode: "cors",
        credentials: "include",
      });

      const data = await response.json();

      return {
        status: data.response,
        htmlContent: data.content,
        cartAmount: data.cartAmount,
      };
    } catch (error) {
      console.error("Mini Cart Error:", error);
      throw error;
    }
  }

  function handleCartUpdateAndView(result) {
    waitForElement(
      () =>
        !!(
          q("button.ab-add-to-cart") &&
          qq(
            "#page-content .mt-2.md\\:mt-4.pt-3.md\\:border-t.md\\:pb-4 > div:not(.ab-cloned-node) .rfk_product",
          ).length > 0
        ),
      async () => {
        const htmlContent = result.htmlContent;
        await insertHTMLContentNoScript(htmlContent);

        await updateLayout();

        openModal();
        handleModalClose();

        const submitBtn = q("button.ab-add-to-cart");
        submitBtn.removeAttribute("disabled");
      },
    );
  }

  function getFormData() {
    // Execute the cart addition and insert HTML
    const token = q('form#cart-quantity input[name="_token"]').getAttribute(
      "value",
    );
    const referrer = window.location.origin + window.location.pathname;
    const productId = q("#products-grid").getAttribute(
      "data-selected-products-id",
    );
    const productQuantity = q("#product_qty_display").innerText || 0;

    return {
      token,
      referrer,
      productId,
      productQuantity,
    };
  }

  function handleAddToCartClick() {
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "button");
    submitBtn.className =
      "button-primary ab-add-to-cart text-lg w-full md:w-4/5 text-center";
    submitBtn.innerText = "Add to Cart";

    submitBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();

      submitBtn.setAttribute("disabled", "true");

      const { token, referrer, productId, productQuantity } = getFormData();

      const res = await addToCart(token, productId, productQuantity, referrer);
      handleCartUpdateAndView(res);
    });

    q("input.add-to-cart").insertAdjacentElement("afterend", submitBtn);
  }

  function updateMiniCartLayout(cartAmount) {
    const miniCart = q("#mini-cart");

    let cartAmountEl = q(miniCart, ".cart-amount");

    if (!cartAmountEl) {
      cartAmountEl = document.createElement("div");
      cartAmountEl.setAttribute("id", "cart-amount");
      cartAmountEl.className =
        "absolute text-xs text-white bg-red-light rounded-full border-2 border-white h-6 w-6 text-center -pin-r-2 -pin-t-2";
      miniCart.insertAdjacentElement("beforeend", cartAmountEl);
    }

    cartAmountEl.innerText = cartAmount;
  }

  function getPriceContent(htmlContent) {
    const tmpDiv = document.createElement("div");
    tmpDiv.innerHTML = htmlContent;
    const productId = q("#products-grid").getAttribute(
      "data-selected-products-id",
    );
    const priceContent = q(
      tmpDiv,
      `tr.product-item-${productId} .text-right.border-t.border-grey-light.align-top.font-bold.py-1`,
    )?.innerHTML;
    return priceContent;
  }

  function updateModalLayout(htmlContent) {
    const modal = q("#modal-window-added-product:not(.ab-modal-updated)");

    const checkoutContainer = q(
      modal,
      "section.modal-content-body > .flex.flex-wrap > .w-full.border-l.px-4",
    );
    if (checkoutContainer) {
      checkoutContainer.classList.remove("border-1");
      checkoutContainer.classList.add("border-t", "pt-2");
      q(modal, ".quick-view-addons")?.insertAdjacentElement(
        "afterend",
        checkoutContainer,
      );
    }

    if (q(modal, ".modal-content-header") && !q(modal, ".ab-close-modal")) {
      q(modal, ".modal-content-header").insertAdjacentHTML(
        "afterbegin",
        /* HTML */ `<div class="ab-close-modal" rel="added-product">×</div>`,
      );
    }

    const prevSliderContent = q(
      modal,
      ".quick-view-addons .mt-2.md\\:mt-4.pt-3.md\\:border-t.md\\:pb-4 div[data-rfkid='rfkid_32']",
    );

    if (prevSliderContent && !q(modal, ".ab-cloned-node")) {
      prevSliderContent.innerHTML = "";
      prevSliderContent?.parentNode.classList.add("hidden");
      const clonedNode = q(
        "#page-content .mt-2.md\\:mt-4.pt-3.md\\:border-t.md\\:pb-4 > div",
      ).cloneNode(true);
      clonedNode.classList.add("ab-cloned-node");
      q(modal, ".quick-view-addons")?.insertAdjacentElement(
        "beforeend",
        clonedNode,
      );
    }

    const quantityElem = q(
      modal,
      ".modal-content-body > div.flex.flex-wrap.md\\:flex-no-wrap > .w-full.md\\:w-2\\/3 p:last-of-type",
    );

    if (quantityElem && !q(modal, ".ab-price-content")) {
      const priceContentHTML = getPriceContent(htmlContent);

      quantityElem.insertAdjacentHTML(
        "afterend",
        `<div class="ab-price-content">${priceContentHTML}</div>`,
      );
      quantityElem.classList.add("hidden");
    }

    modal.classList.add("ab-modal-updated");
  }

  async function updateLayout() {
    const { htmlContent, cartAmount } = await miniCart();

    updateModalLayout(htmlContent);
    updateMiniCartLayout(cartAmount);

    return true;
  }

  function openModal() {
    const body = q("body");
    const modal = q("#modal-window-added-product");
    const modalBg = q(modal, ".modal-background");
    const modalContent = q(modal, ".modal-content");

    modal.classList.add("is-active");
    // Trigger reflow to ensure animations work
    void modal.offsetWidth;

    body.classList.add(TEST_CONFIG.page_initials + "--overflow-hidden");
    modalBg.classList.add("is-active");
    modalContent.classList.add("is-active");
  }

  function closeModal() {
    const body = q("body");
    const modal = q("#modal-window-added-product");
    const modalBg = q(modal, ".modal-background");
    const modalContent = q(modal, ".modal-content");

    body.classList.remove(TEST_CONFIG.page_initials + "--overflow-hidden");
    modalBg.classList.remove("is-active");
    modalContent.classList.remove("is-active");

    // Wait for animations to complete before hiding modal
    setTimeout(() => {
      modal.classList.remove("is-active");
      q(modal, ".close-modal:not(.not-margin)").click();
    }, 300);
  }

  function handleModalClose() {
    qq(".modal-background, .ab-close-modal, .close-modal.no-margin").forEach(
      (item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          closeModal();
        });
      },
    );
  }

  function init() {
    document.body.classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);
    handleAddToCartClick();
  }

  function hasAllTargetElements() {
    return !!(
      window?.location?.pathname?.includes("-p-") &&
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) &&
      q("form#cart-quantity") &&
      q("input.add-to-cart")
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
