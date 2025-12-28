(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-STICKY-ADD-TO-CART #add-to-cart-area input.add-to-cart {
  display: none;
}
.AB-STICKY-ADD-TO-CART #add-to-cart-area .ab-add-to-cart:active,
.AB-STICKY-ADD-TO-CART #add-to-cart-area .ab-add-to-cart:focus {
  border: none !important;
  outline: none !important;
}
.AB-STICKY-ADD-TO-CART .ab-sticky-cart-container {
  position: fixed;
  bottom: -100px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 99999;
  padding: 10px 15px 15px;
  border-top: 1px solid #ebebeb;
  background-color: #fff;
  transition: all 0.3s;
}
.AB-STICKY-ADD-TO-CART .ab-sticky-cart-container button {
  font-family:
    "Open Sans",
    Helvetica,
    Arial,
    -apple-system,
    BlinkMacSyste;
  border-radius: 5px;
}
.AB-STICKY-ADD-TO-CART .ab-sticky-cart-container button:active,
.AB-STICKY-ADD-TO-CART .ab-sticky-cart-container button:focus {
  border: none !important;
  outline: none !important;
}
.AB-STICKY-ADD-TO-CART--show-sticky #___ratingbadge_0 {
  z-index: 0 !important;
}
.AB-STICKY-ADD-TO-CART--show-sticky .ab-sticky-cart-container {
  bottom: 0;
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
/* 
Ticket: https://trello.com/c/q8ZdiK0H/4522-pdp-add-sticky-add-to-cart-iteration-m?search_id=8f2d25f5-996e-407f-8b24-04e50f0bf188
Test container: https://app.vwo.com/#/test/ab/279/edit/variations/?accountId=348406
QA URl: https://www.domyown.com/termidor-sc-p-184.html?to_mobile=true

Preview:
control: https://www.domyown.com/termidor-sc-p-184.html?_vis_preview_data=eyJhIjoiMTc3MWUwM2QyNzcxMmQ4ZmU0YjRmOThlYzEzMjhhOWQiLCJlIjp7IjI3OSI6eyJ2IjoiMSIsImQiOjAsInMiOjAsInRnIjowLCJ0IjowLCJ0ZCI6MCwibCI6MCwiYWxoIjowLCJpcGxlIjowLCJpaG8iOjAsInBhaGkiOm51bGwsInNhYmVyIjpudWxsLCJuZXdRdWVyeUJveCI6bnVsbCwiZGF0YVJlZ2lvbiI6bnVsbCwibWF0Y2hUeXBlIjpudWxsLCJjbiI6InVuZGVmaW5lZCIsInVybCI6Imh0dHBzJTI1M0ElMjUyRiUyNTJGd3d3LmRvbXlvd24uY29tJTI1MkZ0ZXJtaWRvci1zYy1wLTE4NC5odG1sIiwiYXBwIjoiYXBwIiwidHMiOjE3NjY5Mzg1OTQxNDV9fX0=

v1: https://www.domyown.com/termidor-sc-p-184.html?_vis_preview_data=eyJhIjoiMTc3MWUwM2QyNzcxMmQ4ZmU0YjRmOThlYzEzMjhhOWQiLCJlIjp7IjI3OSI6eyJ2IjoiMiIsImQiOjAsInMiOjAsInRnIjowLCJ0IjowLCJ0ZCI6MCwibCI6MCwiYWxoIjowLCJpcGxlIjowLCJpaG8iOjAsInBhaGkiOm51bGwsInNhYmVyIjpudWxsLCJuZXdRdWVyeUJveCI6bnVsbCwiZGF0YVJlZ2lvbiI6bnVsbCwibWF0Y2hUeXBlIjpudWxsLCJjbiI6InVuZGVmaW5lZCIsInVybCI6Imh0dHBzJTI1M0ElMjUyRiUyNTJGd3d3LmRvbXlvd24uY29tJTI1MkZ0ZXJtaWRvci1zYy1wLTE4NC5odG1sIiwiYXBwIjoiYXBwIiwidHMiOjE3NjY5Mzg2MTM5ODB9fX0=
*/

(async () => {
  const TEST_CONFIG = {
    client: "ROI Revolutions",
    project: "domyown",
    site_url: "https://www.domyown.com",
    test_name: "PDP - Add Sticky Add to Cart (Iteration) [M]",
    page_initials: "AB-STICKY-ADD-TO-CART",
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

  function isTouchEnabled() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  function isSafari() {
    const userAgent = navigator.userAgent;
    return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
  }

  async function intersectionObserverFunction() {
    await waitForElementAsync(() => q("#add-to-cart-area .ab-add-to-cart"));

    const targetElement = q("#add-to-cart-area .ab-add-to-cart");

    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible in viewport
            handleStickyCartShowHide("hide");
          } else if (
            !entry.isIntersecting &&
            entry.boundingClientRect.top < 0
          ) {
            // Element is out of viewport and has scrolled past (top)
            handleStickyCartShowHide("show");
          } else {
            // Element hasn't been reached yet or other cases
            handleStickyCartShowHide("hide");
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0,
      },
    ).observe(targetElement);
  }

  function handleStickyCartShowHide(action /* show, hide */) {
    const body = q("body");
    modifierClassName = `${page_initials}--show-sticky`;

    if (action === "show") {
      body.classList.add(modifierClassName);
    } else if (action === "hide") {
      body.classList.remove(modifierClassName);
    }
  }

  function createLayout() {
    q("#add-to-cart-area input.add-to-cart").insertAdjacentHTML(
      "afterend",
      `<button type="button" class="button-primary ab-add-to-cart text-lg w-full md:w-4/5 text-center">Add to Cart</button>`,
    );

    q("body").insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <div class="ab-sticky-cart-container">
          <button
            type="button"
            class="button-primary ab-sticky-add-to-cart text-lg w-full md:w-4/5 text-center"
          >
            Add to Cart
          </button>
        </div>
      `,
    );

    const eventName = isTouchEnabled() ? "touchend" : "click";
    qq(".ab-add-to-cart, .ab-sticky-add-to-cart").forEach((item) =>
      item.addEventListener(eventName, () =>
        q("#add-to-cart-area input.add-to-cart").click(),
      ),
    );
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );

    if (isSafari()) {
      q("body").classList.add(`${page_initials}--safari`);
    }

    console.table(TEST_CONFIG);
    createLayout();
    intersectionObserverFunction();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) && q("#add-to-cart-area input.add-to-cart")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
    return true;
  } catch (error) {
    console.warn(error);
    return false;
  }
})();
