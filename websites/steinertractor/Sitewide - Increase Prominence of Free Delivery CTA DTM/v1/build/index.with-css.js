(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-FREE-DELIVERY-CTA .ab-hidden,
.AB-FREE-DELIVERY-CTA .free-delivery-btn-header {
  display: none;
}
.AB-FREE-DELIVERY-CTA .container:has(> .review-template-navbar) {
  width: 100%;
  max-width: 100%;
}
.AB-FREE-DELIVERY-CTA .desktop-header {
  margin-top: 0;
}
.AB-FREE-DELIVERY-CTA .ab-promotion-banner-container {
  height: 44px;
  overflow: hidden;
  position: relative;
  background: #38761d;
}
.AB-FREE-DELIVERY-CTA .ab-promotion-banner-container .stars {
  margin-top: -3px;
}
.AB-FREE-DELIVERY-CTA .ab-delivery-cta {
  text-decoration: underline;
  cursor: pointer;
}
.AB-FREE-DELIVERY-CTA .ab-free-delivery {
  display: flex;
  gap: 10px;
}
.AB-FREE-DELIVERY-CTA .ab-free-delivery .ab-icon img {
  width: 29px;
  height: auto;
}
.AB-FREE-DELIVERY-CTA
  .ab-promotion-banner-container.ab-promotion-banner-container--review-template {
  display: none;
}
.AB-FREE-DELIVERY-CTA .ab-promotion-banner-container .owl-nav {
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.AB-FREE-DELIVERY-CTA .ab-promotion-banner-container .owl-nav .owl-prev {
  top: 40%;
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.AB-FREE-DELIVERY-CTA
  .ab-promotion-banner-container
  .owl-nav
  .owl-prev::before {
  content: "";
  background-image: url('data:image/svg+xml,<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  width: 6px;
  height: 12px;
  max-height: 12px;
}
.AB-FREE-DELIVERY-CTA .ab-promotion-banner-container .owl-nav .owl-next {
  top: 40%;
  margin-right: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.AB-FREE-DELIVERY-CTA
  .ab-promotion-banner-container
  .owl-nav
  .owl-next::before {
  content: "";
  background-image: url('data:image/svg+xml,<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  width: 6px;
  height: 12px;
  max-height: 12px;
}
.AB-FREE-DELIVERY-CTA
  .ab-promotion-banner-container
  .owl-nav
  button[type="button"] {
  border: none;
  background: none;
  outline: none;
}
.AB-FREE-DELIVERY-CTA
  .ab-promotion-banner-container
  .owl-nav
  button[type="button"]
  span {
  display: none;
}
.AB-FREE-DELIVERY-CTA--safari
  #deliveryModalWrapper
  #deliveryModal.modal-content {
  overflow: hidden;
}
@media screen and (min-width: 375px) {
  .AB-FREE-DELIVERY-CTA .ab-promotion-banner-container .owl-nav .owl-prev {
    top: 40%;
    margin-left: 28px;
  }
  .AB-FREE-DELIVERY-CTA .ab-promotion-banner-container .owl-nav .owl-next {
    top: 40%;
    margin-right: 28px;
  }
}
@media screen and (max-width: 768px) {
  .AB-FREE-DELIVERY-CTA #deliveryModalWrapper #deliveryModal.modal-content {
    overflow: hidden;
  }
  .AB-FREE-DELIVERY-CTA #deliveryModalWrapper #deliveryModal {
    margin-top: 30px;
  }
}
@media screen and (min-width: 768px) {
  .AB-FREE-DELIVERY-CTA .ab-promotion-banner-container {
    height: 35px;
  }
  .AB-FREE-DELIVERY-CTA
    .ab-promotion-banner-container.ab-promotion-banner-container--review-template-navbar {
    display: none;
  }
  .AB-FREE-DELIVERY-CTA
    .ab-promotion-banner-container.ab-promotion-banner-container--review-template {
    display: block;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .AB-FREE-DELIVERY-CTA .ab-promotion-banner-container .owl-nav .owl-prev {
    top: 30%;
    margin-left: 0;
    left: calc(70% - 350px);
  }
  .AB-FREE-DELIVERY-CTA .ab-promotion-banner-container .owl-nav .owl-next {
    top: 30%;
    margin-right: 0;
    right: calc(70% - 350px);
  }
}
@media screen and (min-width: 991px) {
  .AB-FREE-DELIVERY-CTA .ab-promotion-banner-container .owl-nav .owl-prev {
    top: 35%;
    margin-left: 0;
    left: calc(59% - 350px);
  }
  .AB-FREE-DELIVERY-CTA .ab-promotion-banner-container .owl-nav .owl-next {
    top: 35%;
    margin-right: 0;
    right: calc(59% - 350px);
  }
}
@media screen and (min-width: 2300px) {
  .AB-FREE-DELIVERY-CTA .ab-promotion-banner-container .owl-nav .owl-prev {
    top: 35%;
    margin-left: 0;
    left: calc(50% - 350px);
  }
  .AB-FREE-DELIVERY-CTA .ab-promotion-banner-container .owl-nav .owl-next {
    top: 35%;
    margin-right: 0;
    right: calc(50% - 350px);
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
    page_initials: "AB-FREE-DELIVERY-CTA",
    test_variation: 1,
    test_version: 0.0008,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  function q(selector, parent = document) {
    return parent.querySelector(selector);
  }

  function qq(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
  }

  function waitForElementAsync(predicate, timeout = 20000, frequency = 150) {
    const startTime = Date.now();

    return new Promise((resolve, reject) => {
      if (typeof predicate === "function" && predicate()) {
        resolve(true);
        return;
      }

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;

        if (elapsed >= timeout) {
          clearInterval(interval);
          reject(
            new Error(
              `Timeout of ${timeout}ms reached while waiting for condition`,
            ),
          );
          return;
        }

        if (typeof predicate === "function" && predicate()) {
          clearInterval(interval);
          resolve(true);
        }
      }, frequency);
    });
  }

  function isSafari() {
    const userAgent = navigator.userAgent;
    return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
  }

  function loadResource(type, url) {
    return new Promise((resolve, reject) => {
      let element;

      if (type === "css") {
        element = document.createElement("link");
        element.rel = "stylesheet";
        element.href = url;
      } else {
        element = document.createElement("script");
        element.src = url;
        element.async = true;
      }

      element.onload = resolve;
      element.onerror = reject;

      document.head.appendChild(element);
    });
  }

  async function loadOwlCarousel() {
    // Wait for jQuery
    await waitForElementAsync(
      () => window.jQuery && typeof window.jQuery === "function",
    );

    // Load Owl CSS
    await loadResource(
      "css",
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css",
    );

    // Load Owl JS
    await loadResource(
      "js",
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
    );

    // Make sure Owl has initialized on jQuery
    await waitForElementAsync(
      () => window.jQuery && typeof window.jQuery.fn.owlCarousel === "function",
    );
  }

  function initCarousel() {
    const $carousels = window.jQuery(
      ".ab-promotion-banner-container.owl-carousel",
    );

    if (!$carousels.length) {
      return;
    }

    if (typeof window.jQuery.fn.owlCarousel !== "function") {
      return;
    }

    $carousels.each(function () {
      const $carousel = window.jQuery(this);

      // Prevent duplicate initialization
      if ($carousel.hasClass("owl-loaded")) {
        return;
      }

      $carousel.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: false,
        smartSpeed: 250,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      });
    });
  }

  async function init() {
    if (window[page_initials] === true) return;
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version-${test_version}`,
    );
    if (isSafari()) q("body").classList.add(`${page_initials}--safari`);
    window[page_initials] = true;

    !!window.sessionStorage.getItem(page_initials);

    // Hide original review
    const originalReviewItems = qq(".review-template, .review-template-navbar");
    originalReviewItems.forEach((reviewItem) => {
      // review-template-navbar, review-template
      const className = reviewItem.className;
      reviewItem.classList.add("ab-hidden");
      reviewItem.insertAdjacentHTML(
        "beforebegin",
        /* HTML */ `
          <div
            class="ab-promotion-banner-container ab-promotion-banner-container--${className} owl-carousel"
          >
            <div class="item ${className} ab-free-delivery">
              <span class="ab-icon">
                <img
                  src="https://cdn-3.convertexperiments.com/uf/100412165/10043124/subtract2x_6a9976113777d.png"
                  alt="Free Delivery Icon"
                />
              </span>
              <span class="review-text"
                >Learn How to
                <span class="ab-delivery-cta">Get FREE Delivery</span></span
              >
            </div>
            <div class="item ${className}">
              <span class="stars">★★★★★</span>
              <span class="review-text">
                ${q(".review-template .review-text").textContent}
              </span>
            </div>
          </div>
        `,
      );
    });

    window.sessionStorage.setItem(page_initials, true);

    qq(".ab-delivery-cta").forEach((item) =>
      item.addEventListener("click", (e) => {
        q(".free-delivery-btn-header").click();
      }),
    );

    // Load Owl and initialize
    await loadOwlCarousel();
    initCarousel();
  }

  function checkForItems() {
    return !!(
      q(`body:not(.${page_initials})`) &&
      q(".review-template") &&
      q(".review-template-navbar") &&
      q(".free-delivery-btn-header")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
