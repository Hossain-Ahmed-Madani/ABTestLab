(async () => {
  const TEST_CONFIG = {
    page_initials: "AB-ADHESIVE-BACKED-PRODUCT-NAME",
    test_variation: 1,
    test_version: 0.0004,
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
      img_url: "https://hookandloop.com/media/wysiwyg/Logos/3M_Logo-small.png",
      link: "https://www.hookandloop.com/brands/3M",
    },
  };

  function fireGa4Event(brandName) {
    window.dataLayer.push({
      event: "brand_tag_clicks",
      url: window.location.href,
      "ga4-event-label": "Brand Tag Clicks",
      "ga4-event-p1-name": "brand_name",
      "ga4-event-p1-value": brandName,
    });
  }

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

    // 5. Remove "-"
    txt = txt.replace("-", " ").trim();

    // 6. Collapse/remove extra whitespace
    txt = txt.replace(/\s+/g, " ").trim();

    return txt.trim();
  }

  function getBrandLayout({ brand_title, img_url, link }) {
    return /* HTML */ `
      <div href="${link}" class="ab-brand">
        <div class="ab-brand__label">Brand:</div>
        <div class="ab-brand__img">
          <img src="${img_url}" alt="${brand_title}" />
        </div>
      </div>
    `;
  }

  function updateProductTitle(targetNode) {
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
        ${getBrandLayout(matchedBrandData)}
      `,
    );
  }

  function updateProductTitlePDPHeader(targetNode) {
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

    qq(targetNode.parentNode, ".ab-brand, span.ab-product-title").forEach(
      (item) => item.remove(),
    );
    qq(
      ".flex.justify-between.items-center.w-full.border-b.border-gray-300.flex-wrap.mb-3.py-2.gap-x-2.gap-y-1 .ab-brand",
    ).forEach((item) => item.remove());

    targetNode.parentNode.classList.add("ab-title-and-brand-container");
    targetNode.insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        ${targetNode.classList.contains("base") &&
        targetNode.hasAttribute("data-ui-id")
          ? `<span class="base  ab-product-title">${updatedTitle}</span>`
          : ""}
        ${getBrandLayout(matchedBrandData)}
      `,
    );
    q(
      ".flex.justify-between.items-center.w-full.border-b.border-gray-300.flex-wrap.mb-3.py-2.gap-x-2.gap-y-1",
    ).insertAdjacentHTML(
      "afterbegin",
      /* HTML */ ` ${getBrandLayout(matchedBrandData)} `,
    );
  }

  function updateProductTitlePDPBreadCrumb(targetNode) {
    let txt = targetNode.textContent.trim();

    // Replace "Peel & Stick" with "Adhesive Backed"
    txt = txt.replace(/Peel\s*&\s*Stick/gi, "Adhesive Backed");

    // Wrap "Rubber" or "Acrylic" in parentheses (skip if already wrapped)
    txt = txt.replace(/(?<!\()\bRubber\b(?!\))/gi, "(Rubber)");
    txt = txt.replace(/(?<!\()\bAcrylic\b(?!\))/gi, "(Acrylic)");

    //  Remove "-"
    txt = txt.replace(/-/g, " ").trim();

    // Collapse extra whitespace
    txt = txt.replace(/\s+/g, " ").trim();

    targetNode.innerText = txt;
  }

  function updateProductTitleCartPage(targetNode) {
    const productTitleElement = q(targetNode, "a:not(.font-bold)");
    const productTitle = productTitleElement.textContent.trim();
    const updatedTitle = getUpdatedTitle(productTitle);

    productTitleElement.innerText = updatedTitle;

    const productBrandTitle = q(targetNode, "a.font-bold").textContent.trim();
    const matchedBrandData = getMatchingBrandData(productBrandTitle);
    if (!matchedBrandData) return;

    qq(targetNode, ".ab-brand")?.forEach((item) => item.remove());
    productTitleElement.parentNode.classList.add(
      "ab-title-and-brand-container",
    );
    productTitleElement.insertAdjacentHTML(
      "afterend",
      getBrandLayout(matchedBrandData),
    );
  }

  function updateProductTitleSideCart(targetNode) {
    const productTitleElement = q(targetNode, "p.text-sm span[x-text]");
    const productTitle = productTitleElement.textContent.trim();
    const updatedTitle = getUpdatedTitle(productTitle);

    productTitleElement.innerText = updatedTitle;

    const productBrandTitle = q(targetNode, "p.text-base").textContent.trim();
    const matchedBrandData = getMatchingBrandData(productBrandTitle);
    if (!matchedBrandData) return;

    qq(targetNode, ".ab-brand")?.forEach((item) => item.remove());
    productTitleElement.parentNode.classList.add(
      "ab-title-and-brand-container",
    );

    productTitleElement.insertAdjacentHTML(
      "afterend",
      getBrandLayout(matchedBrandData),
    );
  }

  function mutationObserverFunctionSideCart() {
    const targetNode = q("#cart-drawer #cartDrawerContent");
    if (!targetNode) return;
    const debouncedUpdate = debounce((mutationList, observer) => {
      if (
        mutationList.some(
          (mutation) =>
            mutation.target &&
            mutation.target.hasAttribute("x-html") &&
            mutation.target.getAttribute("x-html") === "cart.subtotal",
        )
      ) {
        qq(
          "#cart-drawer .flex.items-start.justify-between.gap-1 .flex.flex-col.gap-1",
        )?.forEach(updateProductTitleSideCart);
        setTimeout(
          () => qq("#cart-drawer .product-title")?.forEach(updateProductTitle),
          1000,
        );
      }
    }, 250);
    return new MutationObserver(debouncedUpdate).observe(targetNode, {
      childList: true,
      subtree: true,
      attributes: false,
    });
  }

  function mutationObserverFunctionCartPage() {
    const targetNode = q("body.checkout-cart-index > div.page-wrapper");
    if (!targetNode) return;
    const debouncedUpdate = debounce((mutationList, observer) => {
      qq("body.checkout-cart-index .product-item-name")?.forEach(
        updateProductTitleCartPage,
      );
      qq(
        "body.checkout-cart-index .pdp-slider-container .pdp-slider .product-title",
      )?.forEach(updateProductTitle);
    }, 250);
    return new MutationObserver(debouncedUpdate).observe(targetNode, {
      childList: true,
      subtree: false,
      attributes: false,
    });
  }

  function clickFunction() {
    document.body.addEventListener("click", (e) => {
      const linkItem = e.target.closest(".ab-brand");
      if (linkItem) {
        e.preventDefault();

        const href = linkItem.getAttribute("href");
        const label = q(linkItem, ".ab-brand__img img").getAttribute("alt");

        fireGa4Event(label);

        if (e.ctrlKey) window.open(href, "_blank");
        else setTimeout(() => (window.location.href = href), 100);
      }
    });
  }

  async function init() {
    if (window[page_initials] === true) return;

    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;

    // PLP Page
    if (q("body.page-products")) {
      qq(
        "body.page-products .product-item-link .text-primary.font-bold.text-lg",
      )?.forEach(updateProductTitle);
    }

    // PDP Page
    if (q("body.catalog-product-view")) {
      updateProductTitlePDPBreadCrumb(
        q(
          "body.catalog-product-view .breadcrumbs ul.items > li.item:last-child > span",
        ),
      );
      const pdpProductTitle = q("body.catalog-product-view h1.page-title span");
      updateProductTitlePDPHeader(pdpProductTitle);
      window.addEventListener("configurable-selection-changed", (e) => {
        setTimeout(() => updateProductTitlePDPHeader(pdpProductTitle), 100);
      });

      await waitForElementAsync(() => document.readyState === "complete");
      qq(
        "body.catalog-product-view .pdp-slider-container .pdp-slider .product-title",
      )?.forEach(updateProductTitle);
    }

    // Side Cart Section
    if (q("#cart-drawer #cartDrawerContent")) {
      qq(
        "#cart-drawer .flex.items-start.justify-between.gap-1 .flex.flex-col.gap-1",
      )?.forEach(updateProductTitleSideCart);
      qq("#cart-drawer .product-title")?.forEach(updateProductTitle);
      mutationObserverFunctionSideCart();
    }

    // Cart Page
    if (q("body.checkout-cart-index")) {
      qq("body.checkout-cart-index .product-item-name")?.forEach(
        updateProductTitleCartPage,
      );
      qq(
        "body.checkout-cart-index .pdp-slider-container .pdp-slider .product-title",
      )?.forEach(updateProductTitle);
      mutationObserverFunctionCartPage();
    }

    clickFunction();
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
        q("body.checkout-cart-index .product-item-name"))
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
