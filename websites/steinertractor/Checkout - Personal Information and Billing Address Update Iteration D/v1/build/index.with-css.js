(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-Checkout-Step-1-2.AB-Shipping-Checkout app-progress-stepper + h4 {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: left !important;
  margin-top: 20px;
  margin-bottom: 0 !important;
  padding-top: 30px;
  padding-bottom: 16px;
  padding-left: 12px;
  border-top: 1px solid #ddd;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout eve-shipping-address {
  overflow: hidden;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-shipping-address
  > .btn.btn-primary {
  margin-top: 16px;
  margin-left: 12px;
  margin-bottom: 82px;
  width: 186px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: 0px;
  color: rgb(255, 255, 255);
  background-color: #8cc152;
  text-transform: capitalize;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-shipping-address
  > .btn.btn-primary:hover {
  background: #9cca5a;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout eve-shipping-address > .row {
  margin-left: 0;
  margin-right: 0;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-shipping-address
  > .row
  > .col-lg-6 {
  padding-left: 12px;
  padding-right: 12px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .address-text {
  display: flex;
  flex-direction: column;
  height: auto;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .address-text > p,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .address-text > p > strong {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0px;
  color: rgb(51, 51, 51);
  margin-bottom: 10px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-shipping-address-wrapper {
  flex-grow: 1;
  padding: 16px;
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
  overflow: hidden;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-shipping-address-wrapper > br {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-shipping-address-wrapper > p {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0px;
  color: rgb(51, 51, 51);
  margin-bottom: 15px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-shipping-address-wrapper > div {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #555555;
  margin-bottom: 12px;
  position: relative;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-shipping-address-wrapper
  > div
  strong {
  font-weight: 400;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-shipping-address-wrapper
  > div
  *:not(.btn) {
  display: inline-block;
  width: auto;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-shipping-address-wrapper .btn {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto !important;
  width: 72px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #fff;
  background-color: #8cc152;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-shipping-address-wrapper
  .btn:hover {
  background: #9cca5a;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-shipping-address-wrapper
  select.form-control {
  outline: none;
  box-shadow: none;
  height: 44px;
  min-width: 100%;
  border: 1px solid rgb(222, 222, 222);
  padding-left: 12px;
  border-radius: 0;
  margin-top: auto !important;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: 0px;
  color: #555555;
  text-align: left;
  appearance: none; /* Disable the default arrow */
  -webkit-appearance: none; /* For WebKit-based browsers */
  -moz-appearance: none; /* For Firefox */
  background-color: #fff;
  background-image: url('data:image/svg+xml,<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.330173 0.344159C0.541647 0.123794 0.828428 0 1.12745 0C1.42648 0 1.71326 0.123794 1.92473 0.344159L7.50681 6.16269L13.0889 0.344159C13.3016 0.130039 13.5864 0.0115592 13.8821 0.0142373C14.1778 0.0169155 14.4606 0.140538 14.6697 0.358478C14.8788 0.576418 14.9974 0.871238 15 1.17944C15.0025 1.48764 14.8889 1.78457 14.6834 2.00626L8.30409 8.65584C8.09261 8.87621 7.80583 9 7.50681 9C7.20778 9 6.921 8.87621 6.70953 8.65584L0.330173 2.00626C0.118763 1.78583 0 1.4869 0 1.17521C0 0.863519 0.118763 0.564591 0.330173 0.344159Z" fill="black"/></svg>') !important;
  background-repeat: no-repeat;
  background-position: right 17px center;
  background-size: 12px;
  cursor: pointer;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-shipping-address-wrapper
  select.form-control:open {
  background-image: url('data:image/svg+xml,<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6698 8.65584C14.4584 8.87621 14.1716 9 13.8725 9C13.5735 9 13.2867 8.87621 13.0753 8.65584L7.49319 2.83731L1.91111 8.65584C1.69843 8.86996 1.41357 8.98844 1.11789 8.98576C0.822215 8.98308 0.539376 8.85946 0.330292 8.64152C0.121209 8.42358 0.00261186 8.12876 4.24806e-05 7.82056C-0.0025269 7.51236 0.111138 7.21544 0.316556 6.99374L6.69591 0.344159C6.90739 0.123794 7.19417 -9.68142e-08 7.49319 -1.22956e-07C7.79221 -1.49097e-07 8.079 0.123794 8.29047 0.344159L14.6698 6.99374C14.8812 7.21417 15 7.5131 15 7.82479C15 8.13648 14.8812 8.43541 14.6698 8.65584Z" fill="%23333333"/></svg>') !important;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-shipping-address-wrapper
  select.form-control:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
(async function () {
  const TEST_CONFIG = {
    page_initials: "AB-Checkout-Step-1-2",
    test_variation: 1,
    test_version: 0.0002,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  async function waitForElementAsync(
    predicate,
    timeout = 10000,
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
    return o ? s.querySelector(o) : document.querySelector(s);
  }

  function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  function oneTimeModalMutationObserver() {
    const body = q("body");
    const observer = new MutationObserver(() => {
      const modalSubtitleElement = q(
        "ngb-modal-window > .modal-dialog  address > .modal-body > p",
      );
      if (
        modalSubtitleElement &&
        modalSubtitleElement.textContent.trim() ===
          "This address will be automatically applied to the Delivery Address."
      ) {
        modalSubtitleElement.innerText =
          "This address will be automatically applied to the Shipping Address.";
      }
    });
    observer.observe(body, { childList: true });
  }

  async function updateShippingTopBox() {
    // Add heading items

    q("head").insertAdjacentHTML(
      "beforeend",
      /* HTML */ `
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      `,
    );

    q("app-progress-stepper + h4").innerText = "Personal Information";

    qq("eve-shipping-address .address-text").forEach((item) => {
      if (q(item, "strong").innerText.includes("Delivery Address")) {
        q(item, "strong").innerText = "Shipping Address";
      }

      q(item, "div:not(.btn)").appendChild(q(item, ".btn"));

      const div = document.createElement("div");
      div.className = "ab-shipping-address-wrapper";

      qq(item, ":scope > *:not(p:first-of-type)").forEach((child) => {
        if (child.tagName.toLowerCase() === "select") {
          const option = q(child, 'option[value="null"]');
          if (
            option.textContent.trim().toLowerCase() ===
            "change delivery address"
          ) {
            option.innerText = "Change shipping address";
          }
        }

        div.appendChild(child);
      });

      item.appendChild(div);
    });
  }

  // ===========  MAIN JS ===========

  async function init() {
    if (window[page_initials]) return;
    window[page_initials] = true;
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
      "AB-Shipping-Checkout",
    );
    updateShippingTopBox();
    oneTimeModalMutationObserver();
  }

  const PATHS = {
    shipping_checkout: "/checkout#/main",
  };

  function checkForItems() {
    const currentPath = (
      window.location.pathname + window.location.hash
    ).toLowerCase();

    if (!Object.keys(PATHS).some((key) => currentPath === PATHS[key])) {
      return false;
    }

    return !!(
      document.readyState !== "loading" &&
      q(`body:not(.${page_initials})`) &&
      q(`body:not(.${page_initials}--v${test_variation})`) &&
      q(`body:not(.AB-Shipping-Checkout)`) &&
      q("select#shipping") &&
      q("eve-payment-options") &&
      qq("body > form > .container.bg-white, .footer").length >= 3 &&
      q("#newsletter") &&
      q(".progress-stepper .checkout-wrap") &&
      q(".row.content-body")
    );
  }

  await waitForElementAsync(checkForItems);
  init();
})();
