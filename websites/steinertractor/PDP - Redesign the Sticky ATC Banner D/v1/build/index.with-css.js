(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `body#Body.AB-STICKY-ATC-BANNER:has(.product-detail-header-section)
  #sticky-search-bar {
  box-shadow: none !important;
  border-bottom: 1px solid #ced4da;
}
body#Body.AB-STICKY-ATC-BANNER .product-detail-header-section {
  border-top: none;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1019607843);
  height: 120px;
  overflow: hidden;
}
body#Body.AB-STICKY-ATC-BANNER .product-detail-header-section .header-section-1,
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .header-section-3 {
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  gap: 38px;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .header-section-1 {
  padding-left: 15px;
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .header-section-4 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .header-section-1
  img {
  width: 100px;
  height: 100px;
  border: 1.13px solid #ced4da;
  border-radius: 4.53px;
  object-fit: contain;
}
body#Body.AB-STICKY-ATC-BANNER .product-detail-header-section .header-section-2,
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .header-section-3 {
  display: none;
}
body#Body.AB-STICKY-ATC-BANNER .product-detail-header-section h4 {
  margin-bottom: 0;
}
body#Body.AB-STICKY-ATC-BANNER .product-detail-header-section h4.title {
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333333;
  text-align: left;
  margin-bottom: 0;
}
body#Body.AB-STICKY-ATC-BANNER .product-detail-header-section h4 span.price {
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #111827;
  margin-bottom: 0 !important;
  margin-right: 0 !important;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  button.btn.eve-cart-submit[name="addtocart"] {
  border: none;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  background-color: #3d8b40;
  border-radius: 10px;
  width: 247px;
  min-width: 247px;
  max-width: 247px;
  height: 56px;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: none;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  button.btn.eve-cart-submit[name="addtocart"]:hover {
  color: #212529;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  button.btn.add_to_wishlist[name="wishList"] {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  background-color: #f3f5f6;
  border: 1px solid #ced4da;
  color: #595959;
  box-shadow: none;
  border-radius: 10px;
  width: 192px;
  min-width: 192px;
  max-width: 192px;
  height: 56px;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  button.btn.add_to_wishlist[name="wishList"]
  i {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  button.btn.add_to_wishlist[name="wishList"]:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .header-section-4 {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  height: 100%;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .header-section-4
  fieldset.cart {
  margin-bottom: 0;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .header-section-4
  fieldset.cart {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 36px;
  justify-content: flex-end;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .header-section-4
  fieldset.cart
  .row {
  flex-wrap: nowrap;
  margin-left: 0;
  margin-right: 0;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .header-section-4
  fieldset.cart
  .row.w-100 {
  flex-wrap: nowrap;
  gap: 36px;
  margin-left: 0;
  margin-right: 0;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .quantity.form-inline {
  flex-wrap: nowrap;
  margin-top: 0;
  border: 1px solid #ced4da;
  border-radius: 4px;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .quantity
  .qty-control {
  width: 48px;
  height: 52px;
  margin: 0;
  padding: 0;
  background-color: #f3f5f6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  border: none;
  outline: none;
  box-shadow: none;
}
body#Body.AB-STICKY-ATC-BANNER
  .product-detail-header-section
  .quantity
  .qty-text {
  width: 56px;
  height: 52px;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333333;
  border: none;
}
body#Body.AB-STICKY-ATC-BANNER .product-detail-header-section eve-add-to-cart {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
body#Body.AB-STICKY-ATC-BANNER .product-detail-header-section .clearfix::after {
  display: none;
}
@media screen and (max-width: 1334px) {
  body#Body.AB-STICKY-ATC-BANNER .product-detail-header-section h4.title,
  body#Body.AB-STICKY-ATC-BANNER .product-detail-header-section h4 span.price {
    font-size: 15px;
  }
}
@media screen and (min-width: 1002px) {
  body#Body.AB-STICKY-ATC-BANNER
    .product-detail-header-section
    > div.container {
    width: 100%;
    height: 120px;
    padding-top: 0;
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 36px;
  }
}
@media screen and (min-width: 1200px) {
  body#Body.AB-STICKY-ATC-BANNER
    .product-detail-header-section
    > div.container {
    min-width: 1140px;
    max-width: 1600px;
    height: auto;
  }
}
@media screen and (min-width: 1002px) {
  body#Body.AB-STICKY-ATC-BANNER .product-detail-header-section {
    top: 90px;
    z-index: 1000;
  }
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
(async () => {
  const TEST_CONFIG = {
    page_initials: "AB-STICKY-ATC-BANNER",
    test_variation: 1,
    test_version: 0.0003,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  async function waitForElementAsync(
    predicate,
    timeout = 20000,
    frequency = 150,
  ) {
    const startTime = Date.now();

    return new Promise((resolve, reject) => {
      if (typeof predicate === "function" && predicate()) {
        return resolve(true);
      }

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;

        if (elapsed >= timeout) {
          clearInterval(interval);
          return reject(
            new Error(
              `Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`,
            ),
          );
        }

        if (typeof predicate === "function" && predicate()) {
          clearInterval(interval);
          return resolve(true);
        }
      }, frequency);
    });
  }

  function q(s, o) {
    return document.querySelector(s);
  }

  function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  function updateLayout() {
    console.log("==== update layout ====");
    const productDetailHeader = q(
      ".product-detail-header-section:not(:has(.container))",
    );
    if (!productDetailHeader) return;

    const container = document.createElement("div");
    container.classList.add("container");
    qq(productDetailHeader, ":scope > div").forEach((item) =>
      container.appendChild(item),
    );
    productDetailHeader.appendChild(container);

    q(".container#shop").insertAdjacentElement(
      "beforebegin",
      productDetailHeader,
    );
    q(".header-section-1").insertAdjacentElement(
      "beforeend",
      q(".header-section-2 h4.title"),
    );
    q(".header-section-4 .cart.clearfix").insertAdjacentElement(
      "afterbegin",
      q(".header-section-3 h4"),
    );
  }

  function mutationObserverFunction() {
    const targetNode = q(".container#shop");
    return new MutationObserver(updateLayout).observe(targetNode, {
      childList: true,
      subtree: false,
      attributes: false,
    });
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    updateLayout();
    mutationObserverFunction();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".product-detail-header-section") &&
      q(".container#shop")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
