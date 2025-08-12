(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-Test015 .amazon-or {
  margin-bottom: 13px;
}
.AB-Test015 .checkout-types li:has(.amazon-checkout-button) {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 35px;
  flex-direction: column-reverse;
}
.AB-Test015 .ab-shop-safely {
  margin-top: 10px;
  width: 230px;
  height: 66px;
  border: 1px solid rgb(194, 207, 218);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.AB-Test015 .amazon-checkout-button:after {
  content: "Direkt zum Amazon Checkout";
  font-family: "Open sans", arial, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 0px;
  letter-spacing: 0px;
  color: rgb(0, 0, 0);
  position: absolute;
  z-index: 1;
  top: -10px;
  background: #fff;
  height: 18px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-Test015 .amazon-checkout-button img {
  height: 40px;
}
.AB-Test015 .ab-shop-safely {
  padding-left: 11px;
  padding-right: 11px;
}
.AB-Test015 .ab-shop-safely:after {
  content: "Sicher einkaufen";
  font-family: "Open sans", arial, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 0px;
  letter-spacing: 0px;
  color: rgb(0, 0, 0);
  position: absolute;
  z-index: 1;
  top: -10px;
  background: #fff;
  height: 18px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-Test015 .ab-shop-safely .ab-shop-safely__img-container {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 9px;
}
.AB-Test015 .ab-shop-safely__img-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-Test015 .ab-shop-safely__img {
  width: 44px;
  height: 27px;
}
.AB-Test015 .btn-continue {
  margin-top: 28px;
}
.AB-Test015 .service-timeline {
  padding-top: 0;
  margin-top: 37px;
}
@media screen and (min-width: 991px) {
  .AB-Test015 .btn-continue {
    margin-top: 0;
  }
  .AB-Test015 .checkout-types li:has(.amazon-checkout-button) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 9px;
    flex-direction: row;
  }
  .AB-Test015 .amazon-or {
    display: none !important;
  }
  .AB-Test015 .checkout-types li:first-child {
    display: flex;
    flex-direction: column-reverse;
  }
  .AB-Test015 .checkout-types .btn-checkout {
    width: 484px;
    float: none;
    margin-right: 0;
    padding: 8px 0;
    margin-bottom: 9px;
  }
  .AB-Test015 .checkout-types .btn-checkout span span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
  }
  .AB-Test015 .btn-checkout span span::after {
    width: 30px;
  }
  .AB-Test015 .checkout-types .cart-ssl-hint {
    margin-right: 0 !important;
    text-align: center;
    font-family: "Open sans", arial, sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 40px;
    letter-spacing: 0px;
    color: rgb(0, 145, 102);
  }
  .AB-Test015 .ab-shop-safely,
  .AB-Test015 .amazon-checkout-button {
    flex: 1 1 50%;
    margin-top: 21px;
    height: 68px;
    border: 1px solid rgb(194, 207, 218);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .AB-Test015 .service-timeline.withoutprint .trenner {
    margin-top: 22px;
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
var id = "1755015105072_2302_v1";
var name = "v1";
var testInfo = {
  id: id,
  name: name,
};

(() => {
  const TEST_CONFIG = {
    test_name: "Test015 [Brandible] - Cart - Add Payment Icons",
    page_initials: "AB-Test015",
    test_variation: 1,
    test_version: 0.0001,
  };

  ASSETS = {
    vorkasse:
      "https://cdn-3.convertexperiments.com/uf/1004828/10045957/vorkasse_689b6bb67940e.png",
    rechnung:
      "https://cdn-3.convertexperiments.com/uf/1004828/10045957/rechnung_689b6bb678ee8.png",
    visa: "https://cdn-3.convertexperiments.com/uf/1004828/10045957/visa_689b6bb676f56.png",
    paypal:
      "https://cdn-3.convertexperiments.com/uf/1004828/10045957/paypal_689b6bb677289.png",
  };

  function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
    try {
      if (timer <= 0) {
        throw new Error(
          `Timeout reached while waiting for condition: ${predicate.toString()}`,
        );
      } else if (predicate && predicate()) {
        callback();
      } else {
        setTimeout(() => {
          waitForElement(predicate, callback, timer - frequency, frequency);
        }, frequency);
      }
    } catch (error) {
      return;
    }
  }

  function init() {
    document.body.classList.add(
      TEST_CONFIG.page_initials,
      `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`,
      `${TEST_CONFIG.page_initials}--version${TEST_CONFIG.test_version}`,
    );

    console.table({ ID: testInfo.id, Variation: testInfo.name });

    console.log(
      `%c${TEST_CONFIG.test_name}`,
      "background: black; border: 2px solid green; color: white; display: block; text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3); text-align: left; font-weight: bold; padding: 10px; margin: 10px; font-family: monospace; white-space: pre;",
    );

    document.querySelector(".amazon-checkout-button").insertAdjacentHTML(
      "beforebegin",
      /* HTML */ `
        <div class="ab-shop-safely">
          <ul class="ab-shop-safely__img-container">
            ${Object.entries(ASSETS)
              .map(
                ([key, url]) => /* HTML */ `
                  <li class="ab-shop-safely__img-item">
                    <img
                      src="${url}"
                      class="ab-shop-safely__img"
                      alt="${key}"
                    />
                  </li>
                `,
              )
              .join("")}
          </ul>
        </div>
      `,
    );
  }

  function hasAllTargetElements() {
    return !!(
      window.location.href.includes("brandible.de/checkout/cart/") &&
      document.querySelector(
        `body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}) .amazon-checkout-button`,
      )
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
