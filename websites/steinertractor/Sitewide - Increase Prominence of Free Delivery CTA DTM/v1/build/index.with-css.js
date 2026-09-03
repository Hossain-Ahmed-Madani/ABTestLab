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
  height: 35px;
  overflow: hidden;
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
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  function q(selector, parent = document) {
    return parent.querySelector(selector);
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
    const $carousel = window.jQuery(
      ".ab-promotion-banner-container.owl-carousel",
    );

    if (!$carousel.length) {
      return;
    }

    if (typeof window.jQuery.fn.owlCarousel !== "function") {
      return;
    }

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
      smartSpeed: 500,
      nav: false,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
    });
  }

  async function init() {
    if (window[page_initials] === true) return;
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version-${test_version}`,
    );
    window[page_initials] = true;

    // Hide original review
    const originalReview = q(".review-template");
    originalReview.classList.add("ab-hidden");
    originalReview.insertAdjacentHTML(
      "beforebegin",
      /* HTML */ `
        <div class="ab-promotion-banner-container owl-carousel">
          <div class="item review-template ab-free-delivery">
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
          <div class="item review-template">
            <span class="stars">★★★★★</span>

            <span class="review-text"> 2,300+ Google Reviews </span>
          </div>
        </div>
      `,
    );

    q(".ab-delivery-cta").addEventListener("click", (e) => {
      q(".free-delivery-btn-header").click();
    });

    // Load Owl and initialize
    await loadOwlCarousel();
    initCarousel();
  }

  function checkForItems() {
    return !!(
      q(`body:not(.${page_initials})`) &&
      q(".review-template") &&
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
