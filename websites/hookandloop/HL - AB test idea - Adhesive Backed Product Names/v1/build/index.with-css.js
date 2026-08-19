(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-ADHESIVE-BACKED-PRODUCT-NAME.page-products .product-info-name-and-price {
  height: auto !important;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME.catalog-product-view
  h1.page-title
  > span.base:not(.ab-product-title) {
  display: none;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME.checkout-cart-index
  .product-item-name
  a.font-bold {
  display: none;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME
  #cart-drawer
  .flex.items-start.justify-between.gap-1
  .flex.flex-col.gap-1
  p.text-base {
  display: none;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME #cart-drawer .product-card {
  height: 100%;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME #cart-drawer .product-title {
  margin-bottom: 0;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME
  .pdp-slider-container
  .pdp-slider
  .ab-title-and-brand-container
  .product-title {
  height: auto;
  margin-bottom: 0;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME
  .pdp-slider-container
  .pdp-slider
  .swiper-slide {
  height: auto;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME
  .pdp-slider-container
  .pdp-slider
  .swiper-slide
  .product-card {
  height: 100%;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME .ab-title-and-brand-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 4px;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME .ab-brand {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME .ab-brand__label {
  font-family: Helvetica;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #374151;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME .ab-brand__img {
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 0 4px;
  width: 64px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME .ab-brand__img img {
  width: 54px;
  height: auto;
}
.AB-ADHESIVE-BACKED-PRODUCT-NAME .ab-brand__img img[alt="3M"] {
  width: auto;
  height: 15px;
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
    page_initials: "AB-ADHESIVE-BACKED-PRODUCT-NAME",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const DATA = {
    duragrip: {
      brand_title: "Duragrip",
      img_url:
        "https://www.hookandloop.com/media/catalog/product/cache/67ee89799642c567a71fc92f3699d937/d/u/duragrip.jpg",
      link: "https://www.hookandloop.com/brands/duragrip",
    },
    velcro: {
      brand_title: "Velcro",
      img_url:
        "https://www.hookandloop.com/media/catalog/product/cache/67ee89799642c567a71fc92f3699d937/v/e/velcro_logo_1.jpg",
      link: "https://www.hookandloop.com/brands/velcro",
    },
    "3m": {
      brand_title: "3M",
      img_url: "https://hookandloop.com/media/wysiwyg/Logos/3M.png",
      link: "https://www.hookandloop.com/brands/3M",
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
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function getMatchingBrandData(productTitle) {
    const txt = productTitle.toLowerCase();
    const brands = ["duragrip", "velcro", "3m"];
    const brand = brands.find((brand) => txt.includes(brand));
    return brand ? DATA[brand] : null;
  }

  function getUpdatedTitle(productTitle) {
    let txt = productTitle.trim();

    // 1. Remove brand/material markers (order matters: longer/more specific first)
    const brandMarkers = [
      "DuraGrip®",
      "DuraGrip",
      "VELCRO®",
      "VELCRO",
      "3M™",
      "3M",
    ];
    for (const marker of brandMarkers) {
      txt = txt.split(marker).join("");
    }

    // 2. Remove "Brand -" and "Brand" (handle the dash variant first so it
    //    doesn't leave a dangling "-")
    txt = txt.replace(/Brand\s*-\s*/gi, " ");
    txt = txt.replace(/Brand\b/gi, " ");

    // 3. Replace "Peel & Stick" with "Adhesive Backed"
    txt = txt.replace(/Peel\s*&\s*Stick/gi, "Adhesive Backed");

    // 4. Wrap "Rubber" or "Acrylic" in parentheses (skip if already wrapped)
    txt = txt.replace(/(?<!\()\bRubber\b(?!\))/g, "(Rubber)");
    txt = txt.replace(/(?<!\()\bAcrylic\b(?!\))/g, "(Acrylic)");

    // 5. Collapse/remove extra whitespace
    txt = txt.replace(/\s+/g, " ").trim();

    return txt.trim();
  }

  function updateLayout(targetNode) {
    const productTitle = targetNode.textContent.trim();
    const updatedTitle = getUpdatedTitle(productTitle);

    if (
      !(
        targetNode.classList.contains("base") &&
        targetNode.hasAttribute("data-ui-id")
      )
    ) {
      targetNode.innerText = updatedTitle;
    }

    const matchedBrandData = getMatchingBrandData(productTitle);
    if (!matchedBrandData) return;
    const { brand_title, img_url, link } = matchedBrandData;

    qq(targetNode.parentNode, ".ab-brand, span.ab-product-title").forEach(
      (item) => item.remove(),
    );

    targetNode.parentNode.classList.add("ab-title-and-brand-container");

    targetNode.insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        ${targetNode.classList.contains("base") &&
        targetNode.hasAttribute("data-ui-id")
          ? `<span class="base  ab-product-title">${updatedTitle}</span>`
          : ""}
        <a href="${link}" class="ab-brand">
          <div class="ab-brand__label">Brand:</div>
          <div class="ab-brand__img">
            <img src="${img_url}" alt="${brand_title}" />
          </div>
        </a>
      `,
    );
  }

  function updateCartPageAddedProduct(targetNode) {
    const productTitleElement = q(targetNode, "a:not(.font-bold)");
    const productTitle = productTitleElement.textContent.trim();
    const updatedTitle = getUpdatedTitle(productTitle);

    productTitleElement.innerText = updatedTitle;

    const productBrandTitle = q(targetNode, "a.font-bold").textContent.trim();
    const matchedBrandData = getMatchingBrandData(productBrandTitle);
    if (!matchedBrandData) return;
    const { brand_title, img_url, link } = matchedBrandData;

    productTitleElement.parentNode.classList.add(
      "ab-title-and-brand-container",
    );

    productTitleElement.insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <a href="${link}" class="ab-brand">
          <div class="ab-brand__label">Brand:</div>
          <div class="ab-brand__img">
            <img src="${img_url}" alt="${brand_title}" />
          </div>
        </a>
      `,
    );
  }

  function updateSideCartAddedProduct(targetNode) {
    const productTitleElement = q(targetNode, "p.text-sm span[x-text]");
    const productTitle = productTitleElement.textContent.trim();
    const updatedTitle = getUpdatedTitle(productTitle);

    productTitleElement.innerText = updatedTitle;

    const productBrandTitle = q(targetNode, "p.text-base").textContent.trim();
    const matchedBrandData = getMatchingBrandData(productBrandTitle);
    if (!matchedBrandData) return;
    const { brand_title, img_url, link } = matchedBrandData;

    qq(targetNode, "a.ab-brand")?.forEach((item) => item.remove());
    productTitleElement.parentNode.classList.add(
      "ab-title-and-brand-container",
    );

    productTitleElement.insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <a href="${link}" class="ab-brand">
          <div class="ab-brand__label">Brand:</div>
          <div class="ab-brand__img">
            <img src="${img_url}" alt="${brand_title}" />
          </div>
        </a>
      `,
    );
  }

  function updateSideCartProductTitles(mutationList, observer) {
    mutationList.forEach((mutation) => {
      console.log("Mutation...");
      if (
        mutation.target.hasAttribute("x-html") &&
        mutation.target.getAttribute("x-html") === "cart.subtotal"
      ) {
        qq(
          "#cart-drawer .flex.items-start.justify-between.gap-1 .flex.flex-col.gap-1",
        )?.forEach(updateSideCartAddedProduct);
        setTimeout(() => {
          qq("#cart-drawer .product-title")?.forEach(updateLayout);
        }, 1000);
      }
    });
  }

  function mutationObserverFunction() {
    const targetNode = q("#cart-drawer #cartDrawerContent");
    if (!targetNode) return;
    const debouncedUpdate = debounce(updateSideCartProductTitles, 250);
    return new MutationObserver(debouncedUpdate).observe(targetNode, {
      childList: true,
      subtree: true,
      attributes: false,
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

    // PLP Page
    qq(
      "body.page-products .product-item-link .text-primary.font-bold.text-lg",
    )?.forEach(updateLayout);

    // PDP Page
    qq(
      "body.catalog-product-view h1.page-title span, body.catalog-product-view .pdp-slider-container .pdp-slider .product-title",
    )?.forEach(updateLayout);
    window.addEventListener("configurable-selection-changed", (e) => {
      setTimeout(
        () => updateLayout(q("body.catalog-product-view h1.page-title span")),
        100,
      );
    });

    // Side Cart Section
    if (q("#cart-drawer #cartDrawerContent")) {
      qq(
        "#cart-drawer .flex.items-start.justify-between.gap-1 .flex.flex-col.gap-1",
      )?.forEach(updateSideCartAddedProduct);
      qq("#cart-drawer .product-title")?.forEach(updateLayout);
      mutationObserverFunction();
    }

    // Cart Page
    qq("body.checkout-cart-index .product-item-name")?.forEach(
      updateCartPageAddedProduct,
    );
    qq(
      "body.checkout-cart-index .pdp-slider-container .pdp-slider .product-title",
    )?.forEach(updateLayout);
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      (q(
        "body.page-products .product-item-link .text-primary.font-bold.text-lg",
      ) ||
        q("body.catalog-product-view h1.page-title span") ||
        q("body.checkout-cart-index .product-item-name")) &&
      document.readyState === "complete"
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
