(async () => {
  const TEST_CONFIG = {
    client: "ROI Revolutions",
    project: "Dunlop Sports",
    site_url: "https://us.dunlopsports.com/https://us.dunlopsports.com",
    test_name: "PDP - Combine Image Gallery [DTM]",
    page_initials: "AB-PDP-COMBINE-IMAGE-GALLERY",
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

  function createLayout() {
    imageList = qq(
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
          <!-- Arrow -->
          <div class="ab-swiper-nav swiper-button-prev"></div>
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
          <div class="ab-swiper-nav swiper-button-next"></div>
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
    window._conv_q = window._conv_q || [];
    _conv_q.push(["triggerConversion", "100157005"]);
  }

  function initSwiperSlider() {
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
          // slidesPerView: 'auto',
        },
      },
    });

    galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 0,
      slideToClickedSlide: true,
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    // Manual reverse sync: when thumbs settle after a scroll/drag, update the top slider
    galleryThumbs.on("slideChangeTransitionEnd", () => {
      galleryTop.slideTo(galleryThumbs.activeIndex);
      triggerConvertGoal();
    });

    q(".ab-image-thumb").addEventListener("click", triggerConvertGoal);

    window.galleryThumbs = galleryThumbs;
    window.galleryTop = galleryTop;
  }

  function updateSwiperLayout() {
    qq(".ab-image-gallery, .ab-image-thumb").forEach((item) => item.remove());

    if (typeof galleryTop === "object" && typeof galleryThumbs === "object") {
      galleryThumbs.destroy();
      galleryTop.destroy();
    }
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
    console.table(TEST_CONFIG);

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
