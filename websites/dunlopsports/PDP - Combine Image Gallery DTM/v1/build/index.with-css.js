(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-PDP-COMBINE-IMAGE-GALLERY .ab-hidden,
.AB-PDP-COMBINE-IMAGE-GALLERY .row.hidden-lg-down:has(.secondary-images),
.AB-PDP-COMBINE-IMAGE-GALLERY .add-to-cart-promotion-text:empty,
.AB-PDP-COMBINE-IMAGE-GALLERY .js-product-secondary-image-carousel,
.AB-PDP-COMBINE-IMAGE-GALLERY .product-detail .row .js-personalize-invisible {
  display: none !important;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-gallery {
  width: 100%;
  overflow: hidden;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-gallery .swiper-slide {
  width: max-content;
  overflow: hidden;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-thumb .swiper-slide {
  overflow: hidden;
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
  padding: 0 6.5px;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 44px;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-thumb-slide {
  display: block;
  margin: auto;
  overflow: hidden;
  flex-grow: 1;
}
.AB-PDP-COMBINE-IMAGE-GALLERY
  .ab-image-thumb:has(.swiper-button-lock)
  .ab-thumb-slide {
  width: 100%;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-thumb-slide .swiper-slide-container {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: auto;
}
.AB-PDP-COMBINE-IMAGE-GALLERY .ab-thumb-slide .swiper-slide-container img {
  width: 75px;
  height: 75px;
  object-fit: cover;
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
.AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-nav .swiper-navigation-icon {
  display: none;
}
.AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-nav {
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  min-width: 25px;
  height: 25px;
  min-height: 25px;
  border: 1px solid #000000;
  cursor: pointer;
  background: none;
}
.AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-nav:disabled {
  opacity: 0.3;
  pointer-events: none;
}
.AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-nav:after {
  content: "";
}
.AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-button-prev {
  margin-right: 8px;
}
.AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-button-next {
  margin-left: 8px;
}
.AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-button-prev:after {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><rect x="24.5" y="24.5" width="24" height="24" transform="rotate(180 24.5 24.5)" stroke="black" /><path d="M14.7539 5.87097L8.12478 12.5001L14.7539 19.1292" stroke="black" stroke-linecap="round" /></svg>');
  background-position: center;
  background-repeat: no-repeat;
  width: 9.38px;
  height: 9.38px;
  margin-right: -3px;
}
.AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-button-next:after {
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
@media screen and (min-width: 1200px) {
  .AB-PDP-COMBINE-IMAGE-GALLERY .product-tabs__container {
    margin-top: 50px !important;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-gallery .swiper-slide-container img {
    max-height: 870px;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY .ab-image-thumb {
    padding: 0 30px;
    margin-bottom: 0;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY .ab-thumb-slide .swiper-slide-container {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY .ab-thumb-slide .swiper-slide-container img {
    width: 150px;
    height: 150px;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-nav {
    width: 40px;
    min-width: 40px;
    height: 40px;
    min-height: 40px;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-button-prev {
    margin-right: 16px;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-button-next {
    margin-left: 16px;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-button-prev:after,
  .AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-button-next:after {
    width: 15px;
    height: 15px;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-button-prev:after {
    margin-right: 0px;
  }
  .AB-PDP-COMBINE-IMAGE-GALLERY button.ab-swiper-button-next:after {
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
    page_initials: "AB-PDP-COMBINE-IMAGE-GALLERY",
    test_variation: 1,
    test_version: 0.0005,
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

  let imageList = null;
  let galleryTop = null;
  let galleryThumbs = null;
  let prevBtn = null;
  let nextBtn = null;

  function createLayout() {
    imageList = qq(
      ".primary-images img, .row.secondary-image-carousel-desktop-hidden .slick-slide:not(.slick-cloned) img",
    ).map((item) => ({
      src: item.getAttribute("src"),
      alt: item.getAttribute("alt"),
    }));

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
          <!-- Arrow -->
          <button class="ab-swiper-nav ab-swiper-button-prev"></button>
          <!-- Swiper -->
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
          <!-- Arrow -->
          <button class="ab-swiper-nav ab-swiper-button-next"></button>
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

  function triggerConvertGoal() {
    // Goal | Image Gallery Clicks
    console.log("Goal: Image Gallery Clicks");
    window._conv_q = window._conv_q || [];
    _conv_q.push(["triggerConversion", "100157005"]);
  }

  function updateNavButtons() {
    prevBtn.disabled = galleryTop.isBeginning;
    nextBtn.disabled = galleryTop.isEnd;

    prevBtn.classList.toggle("disabled", galleryTop.isBeginning);
    nextBtn.classList.toggle("disabled", galleryTop.isEnd);
  }

  function updateThumbNavVisibility() {
    const hide = galleryThumbs.isLocked;

    if (hide) {
      prevBtn.classList.add("ab-hidden");
      nextBtn.classList.add("ab-hidden");
    } else {
      prevBtn.classList.remove("ab-hidden");
      nextBtn.classList.remove("ab-hidden");
    }
  }

  function initSwiperSlider() {
    imageList.length;
    // LTS
    galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 0.5,
      slidesPerView: 4,
      watchSlidesProgress: true,
      // centeredSlides: true,
      freeMode: {
        enabled: true,
        sticky: true, // snaps to nearest slide after a scroll/drag — needed for reliable activeIndex
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        991: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 3,
        },
        1536: {
          slidesPerView: 4,
        },
        1920: {
          slidesPerView: 5,
        },
      },
    });

    galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,
      slideToClickedSlide: true,
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    window.galleryThumbs = galleryThumbs;
    window.galleryTop = galleryTop;

    // Events
    prevBtn = q(".ab-swiper-button-prev");
    nextBtn = q(".ab-swiper-button-next");

    prevBtn.addEventListener("click", () => {
      galleryTop.slidePrev();
      updateNavButtons();
    });

    nextBtn.addEventListener("click", () => {
      galleryTop.slideNext();
      updateNavButtons();
    });

    galleryTop.on("init", () => {
      updateThumbNavVisibility();
      updateNavButtons();
    });

    galleryTop.on("activeIndexChange", updateNavButtons);
    galleryThumbs.on("resize", updateThumbNavVisibility);
    galleryTop.slideTo(galleryThumbs.activeIndex);

    // Goal
    galleryThumbs.on("slideChangeTransitionEnd", triggerConvertGoal);
    galleryThumbs.on("touchStart", triggerConvertGoal);
    q(".ab-image-thumb").addEventListener("click", triggerConvertGoal);
  }

  function updateSwiperLayout() {
    if (typeof galleryTop === "object" && typeof galleryThumbs === "object") {
      galleryThumbs.destroy();
      galleryTop.destroy();
    }

    qq(".ab-image-gallery, .ab-image-thumb").forEach((item) => item.remove());

    createLayout();
    initSwiperSlider();
  }

  function mutationObserverFunction() {
    const targetNode = q(".primary-images img");
    const debouncedUpdate = debounce(updateSwiperLayout, 250);
    return new MutationObserver(debouncedUpdate).observe(targetNode, {
      childList: true,
      subtree: false,
      attributes: true,
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

    createLayout();
    await loadSwiper();
    initSwiperSlider();
    mutationObserverFunction();
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
