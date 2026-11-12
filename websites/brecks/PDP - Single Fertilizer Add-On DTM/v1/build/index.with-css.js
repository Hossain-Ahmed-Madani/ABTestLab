(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `@charset "UTF-8";
.AB-SINGLE-FERTILIZER .product__block.product__block--medium:has(.rte) {
  margin-bottom: 12px;
}
.AB-SINGLE-FERTILIZER
  .product__block.product__block--medium:has(.product__sku) {
  margin-bottom: 12px;
}
.AB-SINGLE-FERTILIZER
  .product__block.product__block--medium:has(.product__chip) {
  margin-bottom: 12px;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer {
  border: 1px solid #dbdbdb;
  background-color: #f3f3f3;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  margin-bottom: 8px;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer__label {
  cursor: pointer;
  width: max-content;
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer__input {
  margin-top: 2px;
  border: none;
  outline: none;
  width: 20px;
  min-width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: transparent;
  border: 2px solid #007d6e;
  -webkit-appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer__input::after {
  position: static;
  display: block;
  content: "";
  background-image: url('data:image/svg+xml,<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99969 3L4.50024 8.4996L2.00049 5.99978" stroke-width="2" stroke-linecap="round" stroke="white"/></svg>');
  background-position: center 0.5px;
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
  opacity: 0;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer__input::before {
  display: none;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer__input:checked {
  background-color: #007d6e;
  border: none;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer__input:checked::after {
  opacity: 1;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer__label-text {
  font-family: "EB Garamond", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #393939;
  white-space: wrap;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer__bottom {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer___img {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #fff;
  width: 103px;
  min-width: 103px;
  height: 102px;
  min-height: 102px;
  overflow: hidden;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer___img img {
  width: 100%;
  object-fit: contain;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer__title {
  font-family: "EB Garamond", sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 130%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #393939;
  margin-bottom: 5px;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer__benefit-lists {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer__benefit-item {
  list-style: none;
  font-family: "DM Sans";
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #393939;
  text-align: left;
}
.AB-SINGLE-FERTILIZER .ab-single-fertilizer__benefit-item::before {
  content: "✓";
  margin-right: 3px;
  font-weight: 600;
}
.AB-SINGLE-FERTILIZER .product-form__item.product-form__item--submit {
  position: relative;
}
.AB-SINGLE-FERTILIZER .ab-short-info {
  margin-top: -6px;
  font-family: "DM Sans";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #393939;
  width: 100%;
  top: 110%;
  right: 0;
  left: 0;
  white-space: wrap;
  margin-left: 122px;
}
.AB-SINGLE-FERTILIZER .loyaltycopy {
  margin-top: 15px;
}
@media screen and (min-width: 991px) {
  .AB-SINGLE-FERTILIZER .product__block.product__block--medium:has(.rte) {
    margin-bottom: 12px;
  }
  .AB-SINGLE-FERTILIZER
    .product__block.product__block--medium:has(.product__sku) {
    margin-bottom: 12px;
  }
  .AB-SINGLE-FERTILIZER
    .product__block.product__block--medium:has(.product__chip) {
    margin-bottom: 20px;
  }
  .AB-SINGLE-FERTILIZER .ab-single-fertilizer__label {
    align-items: center;
  }
  .AB-SINGLE-FERTILIZER .ab-single-fertilizer__input {
    margin-top: 0;
  }
  .AB-SINGLE-FERTILIZER .ab-single-fertilizer__label-text {
    font-size: 18px;
    line-height: 28px;
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
    page_initials: "AB-SINGLE-FERTILIZER",
    test_variation: 1,
    test_version: 0.0002,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  // data-lion-price-for-product-id

  const DATA = {
    iris: {
      productCategory: "Iris",
      plantFood: "Iris Food",
      sku: "77723",
      variantId: "49216239173947",
      "properties[_singleitemdetails]": "Ships Year-round",
      "properties[_restricted_states]": "AE AK GU HI ND PA PR VI",
      productId: "9687381999931" /* data-lion-price-for-product-id */,
      productPrice: "9.99",
      bulletPoint1: "Recommended for iris",
      bulletPoint2: "Stronger roots and bigger, brighter blooms",
      bulletPoint3: "One 1lb bag covers 20 sq ft",
      productUrl:
        "https://www.brecks.com/products/brecks-iris-lovers-all-natural-food?variant=49216239173947",
      imageUrl:
        "https://www.brecks.com/cdn/shop/files/77723.webp?v=1776109594&width=1200",
    },

    daylily: {
      productCategory: "Daylily",
      plantFood: "Daylilies Food",
      sku: "77724",
      variantId: "49216238879035",
      "properties[_singleitemdetails]": "Ships Year-round",
      "properties[_restricted_states]": "AE AK GU HI ND PA PR VI",
      productId: "9687381705019" /* data-lion-price-for-product-id */,
      productPrice: "16.99",
      bulletPoint1: "Recommended for daylily",
      bulletPoint2: "Stronger roots and bigger, brighter blooms",
      bulletPoint3: "One 3lb bag covers 60 sq ft",
      productUrl:
        "https://www.brecks.com/products/breck-food-for-daylilies?variant=49216238879035",
      imageUrl:
        "https://www.brecks.com/cdn/shop/files/77724_3b237972-a82f-4068-b922-fc69e6c3066b.webp?v=1779978938&width=800",
    },

    all: {
      productCategory: "all",
      appliesTo: "All other products (plants)",
      plantFood: "Breck's® Food for Bulbs and Perennials",
      sku: "84749",
      variantId: "49216239698235",
      "properties[_singleitemdetails]": "Ships Year-round",
      "properties[_restricted_states]": "AE AK GU HI ND PA PR VI",
      productId: "9687382262075" /* data-lion-price-for-product-id */,
      productPrice: "8.99",
      bulletPoint1: "Recommended for",
      bulletPoint2: "Stronger roots and bigger, brighter blooms",
      bulletPoint3: "One 13oz bag covers 40 sq ft",
      productUrl:
        "https://www.brecks.com/products/brecks_food_for_bulbs_and_perennials?variant=49216239698235",
      imageUrl:
        "https://www.brecks.com/cdn/shop/files/84749.webp?v=1776107453&width=1200",
    },
  };

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
    return o ? s.querySelector(o) : document.querySelector(s);
  }

  function qq(s, o) {
    return [...document.querySelectorAll(s)];
  }

  function setSessionStorageValue(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  function getSessionStorageValue(key, defaultValue = null) {
    const value = sessionStorage.getItem(key);

    if (value === null) return defaultValue;

    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }

  function getFertilizerInfo() {
    const pathname = window.location.pathname;
    if (pathname.includes("iris")) {
      return DATA["iris"];
    } else if (pathname.includes("daylily")) {
      return DATA["daylily"];
    } else {
      return DATA["all"] /* default */;
    }
  }

  async function addToCart(
    variantId,
    productId,
    quantity = 1,
    formType = "product",
  ) {
    const body = new URLSearchParams({
      form_type: formType,
      utf8: "✓",
      id: variantId,
      "updates[]": quantity,
      quantity: quantity,
      "properties[_restricted_states]": "AE AK GU HI ND PA PR VI",
      "properties[_singleitemdetails]": " Ships Year-round",
      "product-id": productId,
      "section-id": "template--23455413895483__main",
      "attributes[__shopify_r]": "",
      "attributes[__shopify_b]": "",
    });

    const response = await fetch("/cart/add.js", {
      method: "POST",
      headers: {
        accept: "*/*",
        "content-type": "application/x-www-form-urlencoded",
        "x-requested-with": "XMLHttpRequest",
      },
      body: body.toString(),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Add to cart failed: ${response.status}`);
    }

    return await response.json();
  }

  let IS_CHECKED = false;
  let IS_BUSY = false;

  function createLayout() {
    const {
      productCategory,
      plantFood,
      productPrice,
      bulletPoint2,
      bulletPoint3,
      productUrl,
      imageUrl,
    } = getFertilizerInfo();
    const exactCategory =
      productCategory !== "all"
        ? productCategory
        : q(
            ".breadcrumbs__list > .breadcrumbs__item:nth-child(3) .breadcrumbs__link",
          ).textContent.toLowerCase();

    const STORAGE_IS_CHECKED = Boolean(getSessionStorageValue("AB_IS_CHECKED"));
    const STORAGE_IS_ADDED = Boolean(getSessionStorageValue("AB_IS_ADDED"));

    q(
      ".product__price-block.product__block.product__block--medium, .product__controls-group.product__variants-wrapper.product__block.product__block--medium",
    ).insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="ab-single-fertilizer">
          <div class="ab-single-fertilizer__top">
            <label for="ab_fertilizer" class="ab-single-fertilizer__label">
              <input
                type="checkbox"
                id="ab_fertilizer"
                value="${productCategory}"
                class="ab-single-fertilizer__input"
              />
              <span class="ab-single-fertilizer__label-text"
                >Add plant food for bigger, brighter blooms</span
              >
            </label>
          </div>
          <div class="ab-single-fertilizer__bottom">
            <a href="${productUrl}" class="ab-single-fertilizer___img">
              <img src="${imageUrl}" alt="${exactCategory}" />
            </a>
            <div class="ab-single-fertilizer___text-content">
              <h3 class="ab-single-fertilizer__title">
                ${plantFood} · $${productPrice}
              </h3>
              <ul class="ab-single-fertilizer__benefit-lists">
                <li class="ab-single-fertilizer__benefit-item">
                  Recommended for ${exactCategory.toLowerCase()}
                </li>
                <li class="ab-single-fertilizer__benefit-item">
                  ${bulletPoint2}
                </li>
                <li class="ab-single-fertilizer__benefit-item">
                  ${bulletPoint3}
                </li>
              </ul>
            </div>
          </div>
        </div>
      `,
    );

    q("#ab_fertilizer").checked = STORAGE_IS_CHECKED && !STORAGE_IS_ADDED;
    IS_CHECKED = STORAGE_IS_CHECKED && !STORAGE_IS_ADDED;
  }

  function updateAddToCartButtonLayout() {
    const targetNode = q("#AddToCart");
    const mainProductPriceText = q(
      "button.selected [data-lion-price-for-product-id],  .product__price-block.product__block.product__block--medium .product__price [data-lion-price-for-product-id]",
    ).textContent;
    const sellingPrice =
      mainProductPriceText.split(" ")[1] || mainProductPriceText;
    const formattedMainPrice = parseFloat(sellingPrice.replace("$", ""));

    const { productPrice, productCategory } = getFertilizerInfo();
    const total = (
      +formattedMainPrice * +q(".product-form .quantity-input__input").value +
      +productPrice
    ).toFixed(2);
    const exactCategory =
      productCategory !== "all"
        ? productCategory
        : q(
            ".breadcrumbs__list > .breadcrumbs__item:nth-child(3) .breadcrumbs__link",
          ).textContent;

    q(".ab-short-info")?.remove();

    if (!IS_CHECKED) {
      q(targetNode, "#addcarttext").innerText = "Add to Cart";
    } else {
      q(targetNode, "#addcarttext").innerText = `Add to Cart | $${total}`;
      q(
        ".product-form[data-has-quantity-selector] .product-form__controls-group",
      ).insertAdjacentHTML(
        "afterend",
        /* HTML */ `
          <span class="ab-short-info"
            >Adds both items to your cart. Uncheck the box above to add only
            your ${exactCategory.toLowerCase()}.</span
          >
        `,
      );
    }
  }

  function handleFertilizerCheck() {
    q("#ab_fertilizer").addEventListener("change", (e) => {
      IS_CHECKED = e.target.checked;
      setSessionStorageValue("AB_IS_CHECKED", IS_CHECKED);
      updateAddToCartButtonLayout();
    });
  }

  function handleProductQuantity() {
    q(".product-form .quantity-input__input").addEventListener(
      "change",
      (e) => {
        updateAddToCartButtonLayout();
      },
    );
  }

  function handleProductVariantSwitch() {
    q(".dynamic-variant-input-wrap")?.addEventListener("click", (e) => {
      updateAddToCartButtonLayout();
    });
  }

  function handleAddToCartWithFertilizer() {
    const buttonList = qq(
      "#AddToCart, .sticky-atc-bar__button button[name='add']",
    );
    buttonList.forEach((btn) => {
      btn.addEventListener(
        "click",
        async (e) => {
          if (!IS_CHECKED || IS_BUSY) return; // second pass: let the theme handle it
          btn.classList.add("loading");
          e.preventDefault();
          e.stopImmediatePropagation();
          IS_BUSY = true;

          try {
            const { variantId, productId } = getFertilizerInfo();
            await addToCart(variantId, productId, 1, "product"); // your working function (A/B product)
          } catch (err) {
            // console.warn(err);
          }

          q("#ab_fertilizer").checked = false;
          q("#ab_fertilizer").dispatchEvent(
            new Event("change", { bubbles: true, cancelable: true }),
          );
          IS_CHECKED = false;
          IS_BUSY = false;
          setSessionStorageValue("AB_IS_ADDED", true);
          // GOAL ->  Fertilizer Add-ons | Adds fertilizer product | js
          window._conv_q = window._conv_q || [];
          _conv_q.push(["triggerConversion", "1004129715"]);

          btn.click(); // theme adds the main product and refreshes the side cart
        },
        true,
      );
    });
  }

  function init() {
    if (window[page_initials] === true) return;
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;

    const sku = q(".product__sku-block.product__block.product__block--medium");
    if (sku)
      q(
        "  .product__price-block.product__block.product__block--medium,   .product__controls-group.product__variants-wrapper.product__block.product__block--medium",
      ).insertAdjacentElement("beforebegin", sku);
    createLayout();
    updateAddToCartButtonLayout();
    handleFertilizerCheck();
    handleProductQuantity();
    handleProductVariantSwitch();
    handleAddToCartWithFertilizer();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q('meta[property="og:price:amount"]') &&
      q(
        " .product__price-block.product__block.product__block--medium,   .product__controls-group.product__variants-wrapper.product__block.product__block--medium",
      ) &&
      q("#AddToCart")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    // console.warn(error);
    return false;
  }
})();
