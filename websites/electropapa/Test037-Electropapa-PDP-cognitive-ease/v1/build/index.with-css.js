(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-TEST037
  .gallery-slider-thumbnails.is-underneath
  .gallery-slider-thumbnails-item {
  min-height: 80px;
}
.AB-TEST037 .trust-widget-list,
.AB-TEST037 div[data-swag-pay-pal-express-button-options],
.AB-TEST037 #swag-amazon-pay-product-detail-wrapper > div,
.AB-TEST037 .usp-payment-methods,
.AB-TEST037 .usp-item-container {
  width: 100%;
}
.AB-TEST037 .trust-widget-list {
  padding: 12px 20px;
  margin-bottom: 16px;
}
.AB-TEST037 .trust-widget-list ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.AB-TEST037 .trust-widget-list ul li {
  margin-bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.AB-TEST037 .product-detail-tax {
  margin-bottom: 21px;
}
.AB-TEST037 .product-delivery-available {
  margin-bottom: 12px;
}
.AB-TEST037 .product-detail-delivery-information {
  margin-bottom: 21px;
}
.AB-TEST037 .product-shipping-information > div {
  gap: 12px;
}
.AB-TEST037 .product-shipping-information {
  flex-direction: column;
  gap: 15px;
}
.AB-TEST037 .product-shipping-information .shipping-information {
  margin-bottom: 0;
}
.AB-TEST037 .usp-payment-methods-title {
  text-align: left;
}
.AB-TEST037 .usp-payment-methods-item-container {
  justify-content: space-between;
}
.AB-TEST037 .product-detail-quantity-group,
.AB-TEST037 .btn.btn-primary.btn-buy {
  height: 46px;
}
.AB-TEST037 .usp-payment-methods {
  margin-top: 16px;
  gap: 16px;
}
.AB-TEST037 div:has(> .usp-item-container) {
  margin-top: 24px !important;
}
.AB-TEST037 .usp-item-container {
  gap: 70px;
}
.AB-TEST037 .usp-item-label {
  text-align: left;
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
    page_initials: "AB-TEST037",
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

  function init() {
    if (window[page_initials] === true) return;
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;

    q(".product-detail-media").className = "col-lg-7 product-detail-media";
    q(".product-detail-buy").className = "col-lg-5 product-detail-buy";
    q(".col-6.col-sm-7.col-md-8.col-lg-7.col-xl-8")?.classList.remove(
      "col-xl-8",
    );
    q(".col-2.col-sm-2.col-md-1.col-lg-2.col-xl-1")?.classList.remove(
      "col-xl-1",
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".product-detail-media") &&
      q(".product-detail-buy")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
