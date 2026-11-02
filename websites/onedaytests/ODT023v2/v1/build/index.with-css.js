(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-ODT023v2 .pswp__container .media_wrapper_el,
.AB-ODT023v2 .pswp__img.custom_preview_el {
  left: 50%;
  transform: translate(-50%, -50%) !important;
  top: 50%;
}
@media (max-width: 768px) {
  .AB-ODT023v2 .pswp__container .pswp__item .pswp__img.custom_preview_el {
    width: 100% !important;
    height: auto !important;
  }
}
@media (min-width: 768.5px) and (max-width: 1200px) {
  .AB-ODT023v2 .pswp__container .pswp__item .pswp__img.custom_preview_el {
    width: 100% !important;
    height: auto !important;
  }
}
@media (min-width: 1200.5px) {
  .AB-ODT023v2 .pswp__container .pswp__item .pswp__img.custom_preview_el {
    width: auto !important;
    height: 100dvh !important;
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
    page_initials: "AB-ODT023v2",
    test_variation: 1,
    test_version: 0.0003,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  // const IMAGES = [
  //     "https://cdn-3.convertexperiments.com/uf/10018141/10018430/image-a-1_6adb4650bd35f.png",
  //     "https://cdn-3.convertexperiments.com/uf/10018141/10018430/image-b-1_6adb4664b12cf.png",
  // ];

  const IMAGES = [
    "https://cdn-3.convertexperiments.com/uf/10018141/10018430/card-a-choose-how-you-test-1_6ae87e7b39afd.png",
    "https://cdn-3.convertexperiments.com/uf/10018141/10018430/card-b-track-your-results-over-time-1_6ae87e925ce56.png",
    "https://onedaytests.com/cdn/shop/files/One_Day_Test-Clinic_male_customer_1000x667.jpg?v=1786443187",
  ];

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
    return [...document.querySelectorAll(s)];
  }

  function replaceImages() {
    const thumbItems = [
      {
        selector: `.gallery-navigation--scroller .product-gallery--media-thumbnail[data-gallery-index="1"] img, .product-gallery--viewer .product-gallery--media[data-gallery-index="1"] img, .pswp__img[src='//onedaytests.com/cdn/shop/files/One_Day_Test-Clinic_male_customer_1000x667.jpg?v=1786443187']`,
        image_url: IMAGES[0],
      },
      {
        selector: `.gallery-navigation--scroller .product-gallery--media-thumbnail[data-gallery-index="2"] img, .product-gallery--viewer .product-gallery--media[data-gallery-index="2"] img, .pswp__img[src='//onedaytests.com/cdn/shop/products/box_sleeve_2000px_b1c5e5ff-fc28-42dc-9e53-04914947d948_2000x1594.jpg?v=1768211106']`,
        image_url: IMAGES[1],
      },
      {
        selector: `.gallery-navigation--scroller .product-gallery--media-thumbnail[data-gallery-index="5"] img, .product-gallery--viewer .product-gallery--media[data-gallery-index="5"] img, .pswp__img[src='//onedaytests.com/cdn/shop/products/sussexpathology-01-04-web3_1b6a4c80-0bc8-42e2-ada1-3faf3b7098ee_2000x1333.jpg?v=1768211106']`,
        image_url: IMAGES[2],
      },
    ];

    thumbItems.forEach(({ selector, image_url }) => {
      const targetNodes = qq(selector);
      targetNodes?.forEach((node) => {
        node.classList.add("custom_preview_el");
        node.parentElement.classList.add("media_wrapper_el");
        node.src = image_url;
        node.srcset = image_url;
      });
    });
  }

  function mutationObserverFunction() {
    const targetNode = q(".pswp__container");
    return new MutationObserver(replaceImages).observe(targetNode, {
      childList: true,
      subtree: true,
      attributes: true,
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
    replaceImages();
    mutationObserverFunction();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".product-gallery") &&
      q(".flickity-enabled") &&
      q(".pswp__container")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
