(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-PDP-COMBINE-IMAGE-GALLERY .row.hidden-lg-down:has(.secondary-images),
.AB-PDP-COMBINE-IMAGE-GALLERY .add-to-cart-promotion-text:empty,
.AB-PDP-COMBINE-IMAGE-GALLERY .js-product-secondary-image-carousel,
.AB-PDP-COMBINE-IMAGE-GALLERY .product-detail .row .js-personalize-invisible {
  display: none;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-gallery {
  width: 100%;
  overflow: hidden;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-gallery .swiper-slide,
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-thumb .swiper-slide {
  width: max-content;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-gallery .swiper-slide-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-gallery .swiper-slide-container img {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-thumb {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 44px;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-thumb-slide {
  display: block;
  width: calc(100% - 66px);
  margin: auto;
  overflow: hidden;
}
.AB-PDP-COMBINE-IMAGE-GALLERY
  .ab-image-thumb:has(.swiper-button-lock)
  .ab-thumb-slide {
  width: 100%;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-thumb-slide .swiper-slide-container {
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-thumb-slide .swiper-slide-container img {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
}
.AB-PDP-COMBINE-IMAGE-GALLERY
  .ab-thumb-slide
  .swiper-slide.swiper-slide-thumb-active {
  outline: 1px solid #000000;
  outline-offset: -1px;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-thumb-arrows {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-swiper-nav .swiper-navigation-icon {
  display: none;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-swiper-nav {
  position: static;
  margin: 0;
  width: 25px;
  min-width: 25px;
  height: 25px;
  min-height: 25px;
  border: 1px solid #000000;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-swiper-nav:after {
  content: "";
}
.AB-PDP-COMBINE-IMAGE-GALLERY div.swiper-button-prev:after {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><rect x="24.5" y="24.5" width="24" height="24" transform="rotate(180 24.5 24.5)" stroke="black" /><path d="M14.7539 5.87097L8.12478 12.5001L14.7539 19.1292" stroke="black" stroke-linecap="round" /></svg>');
  background-position: center;
  background-repeat: no-repeat;
  width: 9.38px;
  height: 9.38px;
  margin-right: -3px;
}
.AB-PDP-COMBINE-IMAGE-GALLERY div.swiper-button-next:after {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><rect x="0.5" y="0.499758" width="24" height="24" stroke="black" /><path d="M10.2461 19.1288L16.8752 12.4997L10.2461 5.87053" stroke="black" stroke-linecap="round" /></svg>');
  background-position: center;
  background-repeat: no-repeat;
  width: 9.38px;
  height: 9.38px;
  margin-left: -3px;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .product-name {
  margin-top: 0;
  margin-bottom: 8px;
}
@media screen and (min-width: 991px) {
  .AB-PDP-COMBINE-IMAGE-GALLERY .product-tabs__container {
    margin-top: 50px !important;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-gallery .swiper-slide-container img {
    max-height: 870px;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-thumb {
    margin-bottom: 0;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY .ab-thumb-slide {
    width: calc(100% - 112px);
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY .ab-thumb-slide .swiper-slide-container {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY .ab-swiper-nav {
    width: 40px;
    min-width: 40px;
    height: 40px;
    min-height: 40px;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY div.swiper-button-prev:after,
  .AB-PDP-COMBINE-IMAGE-GALLERY div.swiper-button-next:after {
    width: 15px;
    height: 15px;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY div.swiper-button-prev:after {
    margin-right: 0px;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY div.swiper-button-next:after {
    margin-left: 0px;
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
    client: "ROI Revolutions",
    project: "Dunlop Sports",
    site_url: "https://us.dunlopsports.com/https://us.dunlopsports.com",
    test_name: "PDP - Combine Image Gallery [DTM]",
    page_initials: "AB-PDP-COMBINE-IMAGE-GALLERY",
    test_variation: 1,
    test_version: 0.0001,
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

  function createLayout() {
    const imageList = qq(
      ".primary-images img, .row.secondary-image-carousel-desktop-hidden .slick-slide:not(.slick-cloned) img",
    ).map((item) => ({
      src: item.getAttribute("src"),
      alt: item.getAttribute("alt"),
    }));

    console.log(imageList);

    q(".product-detail .row .js-personalize-invisible").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <!-- Swiper -->
        <div class="ab-image-gallery">
          <div class="swiper-container gallery-top">
            <div class="swiper-wrapper">
              ${imageList
                .map(
                  ({ src, alt }) => /* HTML */ `
                    <div class="swiper-slide">
                      <div class="swiper-slide-container">
                        <img src="${src}" alt="${alt}" />
                      </div>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="ab-image-thumb">
          <div class="ab-thumb-arrows">
            <!-- Add Arrows -->
            <div class="ab-swiper-nav swiper-button-prev"></div>
            <div class="ab-swiper-nav swiper-button-next"></div>
          </div>
          <div class="ab-thumb-slide">
            <div class="swiper-container gallery-thumbs">
              <div class="swiper-wrapper">
                ${imageList
                  .map(
                    ({ src, alt }) => /* HTML */ `
                      <div class="swiper-slide">
                        <div class="swiper-slide-container">
                          <img src="${src}" alt="${alt}" />
                        </div>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      `,
    );
  }

  function loadSwiper() {
    return new Promise((resolve, reject) => {
      const cssUrl = `https://cdn.jsdelivr.net/npm/swiper@14.0.1/swiper-bundle.min.css`;
      const jsUrl = `https://cdn.jsdelivr.net/npm/swiper@14.0.1/swiper-bundle.min.js`;

      // Remove any existing Swiper <link>/<script> tags, if present
      qq('link[href*="swiper"], script[src*="swiper"]').forEach((el) =>
        el.remove(),
      );

      // Inject the correct version fresh
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssUrl;
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = jsUrl;

      script.onload = () => resolve(true);
      script.onerror = () =>
        reject(new Error(`Failed to load Swiper ${version} from ${jsUrl}`));

      document.head.appendChild(script);
    });
  }

  function initSwiperSlider() {
    const galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 0,
      slidesPerView: "auto",
      freeMode: true,
      watchSlidesProgress: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    new Swiper(".gallery-top", {
      spaceBetween: 0,
      slideToClickedSlide: true,
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }

  async function init() {
    if (window[page_initials] === true) return;

    window[page_initials] = true;
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);

    createLayout();
    await loadSwiper();
    initSwiperSlider();

    console.log("=== Swiper Initialized ====");
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".product-detail .row .js-personalize-invisible") &&
      q(".primary-images img") &&
      q(
        ".row.secondary-image-carousel-desktop-hidden .slick-slide:not(.slick-cloned) img",
      )
    );
  }

  await waitForElementAsync(checkForItems);
  init();
})();
