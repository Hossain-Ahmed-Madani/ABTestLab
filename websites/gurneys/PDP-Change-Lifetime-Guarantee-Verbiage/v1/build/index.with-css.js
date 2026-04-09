(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `@charset "UTF-8";
.AB-GUARANTEE-VERBIAGE .ab-modal-open-cta {
  padding-left: 0;
  margin-left: -1rem;
  list-style: none;
  color: #004925;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
}
.AB-GUARANTEE-VERBIAGE .ab-modal-open-cta::before {
  content: "•";
  color: #004925;
  font-size: 1em;
  margin-right: 2.5px;
  display: inline-block;
}
.AB-GUARANTEE-VERBIAGE .ab-modal-open-cta__text {
  text-decoration: underline;
}
.AB-GUARANTEE-VERBIAGE .ab-modal-open-cta__icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-GUARANTEE-VERBIAGE .ab-modal-open-cta__icon svg {
  width: 13px;
  height: 13px;
}

/**
 * ----------------------------------------
		 *			MODAL
 * ----------------------------------------
 */
body.AB-GUARANTEE-VERBIAGE--modal-show {
  overflow: hidden;
}
body.AB-GUARANTEE-VERBIAGE--modal-show .AB-GUARANTEE-VERBIAGE__modal-layout {
  display: flex;
}
body.AB-GUARANTEE-VERBIAGE--modal-show .AB-GUARANTEE-VERBIAGE__modal-backdrop {
  display: block;
}
.AB-GUARANTEE-VERBIAGE__modal-layout {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
  z-index: 10000;
  overflow: hidden;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
}
.AB-GUARANTEE-VERBIAGE__modal-backdrop {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.AB-GUARANTEE-VERBIAGE__modal {
  opacity: 1;
  border: 4px solid #004925;
  width: 100%;
  min-height: max-content;
  max-height: auto;
  background: #ffffff;
  position: relative;
  z-index: 1;
  padding: 18px 15px 24px 16px;
}
.AB-GUARANTEE-VERBIAGE__modal__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8px;
}
.AB-GUARANTEE-VERBIAGE__modal__head__img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-GUARANTEE-VERBIAGE__modal__head__img-container img {
  width: 85px;
  height: 85px;
  object-fit: contain;
}
.AB-GUARANTEE-VERBIAGE__modal__head__close-cta {
  margin: 0;
  padding: 6.5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-GUARANTEE-VERBIAGE__modal__head__close-cta svg {
  width: 18px;
  height: 18px;
}
.AB-GUARANTEE-VERBIAGE__modal__body {
  width: 100%;
  font-family: geneo-std;
  font-weight: 400;
  line-height: 1.5;
  font-size: 14px;
  text-align: left;
  text-wrap: pretty;
}
.AB-GUARANTEE-VERBIAGE__modal .divider {
  display: block;
  margin-bottom: 20px;
}

@media screen and (min-width: 650px) {
  .AB-GUARANTEE-VERBIAGE__modal {
    width: 711px;
    min-height: 366px;
    padding: 33px 32px 39px 40px;
  }
  .AB-GUARANTEE-VERBIAGE__modal__head {
    margin-bottom: 20px;
  }
  .AB-GUARANTEE-VERBIAGE__modal__head__img-container img {
    width: 102px;
    height: 102px;
    object-fit: contain;
  }
  .AB-GUARANTEE-VERBIAGE__modal__head__close-cta {
    padding: 0;
  }
  .AB-GUARANTEE-VERBIAGE__modal__head__close-cta svg {
    width: 30px;
    height: 30px;
  }
  .AB-GUARANTEE-VERBIAGE__modal__body {
    padding: 10px 0;
    font-size: 16px;
  }
  .AB-GUARANTEE-VERBIAGE__modal .divider {
    display: block;
    margin-bottom: 20px;
  }
}
.slide-bottom {
  -webkit-animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-top {
  -webkit-animation: slide-top 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/**
   * ----------------------------------------
   * animation slide-bottom
   * ----------------------------------------
   */
@-webkit-keyframes slide-bottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-200px);
    transform: translateY(-200px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slide-bottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-200px);
    transform: translateY(-200px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
/**
   * ----------------------------------------
   * animation slide-top
   * ----------------------------------------
   */
@-webkit-keyframes slide-top {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-200px);
    transform: translateY(-200px);
  }
}
@keyframes slide-top {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-200px);
    transform: translateY(-200px);
  }
}
/**
   * ----------------------------------------
   * animation fade-in
   * ----------------------------------------
   */
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
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
/* 
Test container: 

Preview URL: 

*/

(async () => {
  const TEST_CONFIG = {
    client: "ROI Revolutions",
    project: "Gurneys",
    site_url: "https://www.gurneys.com/",
    test_name: "PDP - Change Lifetime Guarantee Verbiage [DTM]",
    page_initials: "AB-GUARANTEE-VERBIAGE",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    question_svg: /* HTML */ `<svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.875 13.75C3.07804 13.75 0 10.672 0 6.875C0 3.07804 3.07804 0 6.875 0C10.672 0 13.75 3.07804 13.75 6.875C13.75 10.672 10.672 13.75 6.875 13.75ZM6.875 12.5C9.9816 12.5 12.5 9.9816 12.5 6.875C12.5 3.7684 9.9816 1.25 6.875 1.25C3.7684 1.25 1.25 3.7684 1.25 6.875C1.25 9.9816 3.7684 12.5 6.875 12.5ZM6.87521 9.99897C6.52991 9.99897 6.25 9.71914 6.25 9.37397C6.25 9.02879 6.52991 8.74897 6.87521 8.74897C7.2205 8.74897 7.50041 9.02879 7.50041 9.37397C7.50041 9.71914 7.2205 9.99897 6.87521 9.99897ZM7.5 8.125H6.25C6.25 7.06147 6.64036 6.60605 7.53299 6.15973C8.04661 5.90292 8.125 5.81147 8.125 5.3125C8.125 4.72275 7.67323 4.375 6.875 4.375C6.18464 4.375 5.625 4.93464 5.625 5.625H4.375C4.375 4.24429 5.49429 3.125 6.875 3.125C8.30272 3.125 9.375 3.95039 9.375 5.3125C9.375 6.37603 8.98464 6.83145 8.09201 7.27777C7.57839 7.53458 7.5 7.62603 7.5 8.125Z"
        fill="#004925"
      />
    </svg> `,
    close_svg: /* HTML */ `<svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.378316 0.378316C0.882751 -0.126105 1.70058 -0.126105 2.20502 0.378316L9.04167 7.21499L15.8783 0.378316C16.3827 -0.126105 17.2006 -0.126105 17.705 0.378316C18.2094 0.882751 18.2094 1.70058 17.705 2.20502L10.8683 9.04167L17.705 15.8783C18.2094 16.3827 18.2094 17.2006 17.705 17.705C17.2006 18.2094 16.3827 18.2094 15.8783 17.705L9.04167 10.8683L2.20502 17.705C1.70058 18.2094 0.882751 18.2094 0.378316 17.705C-0.126105 17.2006 -0.126105 16.3827 0.378316 15.8783L7.21499 9.04167L0.378316 2.20502C-0.126105 1.70058 -0.126105 0.882751 0.378316 0.378316Z"
        fill="#0F1729"
      />
    </svg> `,
    no_risk_guarantee_img_url:
      "https://cdn.shopify.com/s/files/1/0867/8676/9195/files/No-RiskLogoGU_480x480.jpg?v=1730483097",
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
    return document.querySelector(s);
  }

  function createLayout() {
    // CTA Layout
    q(".bulletlist").insertAdjacentHTML(
      "beforeend",
      /* HTML */ `
        <li class="ab-modal-open-cta">
          <span class="ab-modal-open-cta__text">100% GUARANTEED TO GROW</span>
          <span class="ab-modal-open-cta__icon">${ASSETS.question_svg}</span>
        </li>
      `,
    );

    // Modal Layout
    q("body").insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <div class="${page_initials}__modal-layout">
          <div class="${page_initials}__modal-backdrop"></div>
          <div class="${page_initials}__modal">
            <div class="${page_initials}__modal__head">
              <div class="${page_initials}__modal__head__img-container">
                <img
                  src="${ASSETS.no_risk_guarantee_img_url}"
                  alt="No Risk Guarantee"
                />
              </div>
              <div class="${page_initials}__modal__head__close-cta">
                ${ASSETS.close_svg}
              </div>
            </div>
            <div class="${page_initials}__modal__body">
              We stand behind every one of our product offerings, and we want
              you to be satisfied! If you're not happy with your purchase, we'll
              replace it or provide merchandise credit for the full amount of
              your purchase price.
              <b
                >All nursery stock, trees, plants, seeds and merchandise are
                guaranteed for one full year.</b
              >
              <div class="divider"></div>
              Our confidence is backed by our dedication to quality, innovation
              and garden performance.
            </div>
          </div>
        </div>
      `,
    );
  }

  function animate(targetElement, className, interval) {
    if (!targetElement) return;
    if (className.includes(".")) className.replace(".", "");
    targetElement.classList.add(className);
    setTimeout(() => targetElement.classList.remove(className), interval);
  }

  function preventScroll(e) {
    e.preventDefault();
  }

  function handleModalView(action = "show") {
    const modal = q(`.${page_initials}__modal`);
    const modalShowClass = `${page_initials}--modal-show`;
    const body = document.body;

    if (action === "show" && !body.classList.contains(modalShowClass)) {
      animate(modal, "slide-bottom", 200);
      modal.classList.add("slide-bottom");
      body.classList.add(modalShowClass);
      document.addEventListener("touchmove", preventScroll, { passive: false });
    }

    if (action === "hide") {
      animate(modal, "slide-top", 200);
      setTimeout(() => body.classList.remove(modalShowClass), 200);
      document.removeEventListener("touchmove", preventScroll);
    }
  }

  function clickFunction() {
    q(".ab-modal-open-cta").addEventListener("click", () => {
      handleModalView("show");
    });

    q(`.${page_initials}__modal__head__close-cta`).addEventListener(
      "click",
      () => {
        handleModalView("hide");
      },
    );

    q(`.${page_initials}__modal-backdrop`).addEventListener("click", (e) => {
      if (e.target.closest(`.${page_initials}__modal`)) return;
      handleModalView("hide");
    });

    // CLOSE POPUP -> ON ESC CLICK
    document.addEventListener("keydown", function (evt) {
      evt = evt || window.event; // Fallback for older browsers (optional)
      if (evt.key === "Escape" || evt.key === "Esc") {
        handleModalView("hide");
      }
    });
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);
    createLayout();
    clickFunction();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) && q(".bulletlist")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    console.warn(error);
    return false;
  }
})();
