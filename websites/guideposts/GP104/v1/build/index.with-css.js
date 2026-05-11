(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-GP104 .mobilefilter .elementor-widget-button,
.AB-GP104 #shop-filters .elementor-widget-container {
  display: none;
}
.AB-GP104 .mobilefilter {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  flex-direction: row;
}

/**
 * ----------------------------------------
		 *			ACCORDION
 * ----------------------------------------
 */
.AB-GP104 .ab__filter-accordion-section {
  max-height: calc(100dvh - 200px);
  overflow: auto;
}
.AB-GP104 .ab__filter-accordion-item {
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid rgb(229, 229, 229);
}
.AB-GP104 .ab__filter-accordion-item__head {
  padding: 15px 15px 15px 21px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}
.AB-GP104 .ab__filter-accordion-item__head__title {
  flex-grow: 1;
  font-family: "Inter", Sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 16.57px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(0, 0, 0);
}
.AB-GP104 .ab__filter-accordion-item__head__toggle-icon {
  width: 13px;
  height: 18px;
  position: relative;
}
.AB-GP104 .ab__filter-accordion-item .ab-accordion-icon {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}
.AB-GP104 .ab__filter-accordion-item .ab-accordion-icon--plus {
  opacity: 1;
}
.AB-GP104 .ab__filter-accordion-item .ab-accordion-icon--minus {
  opacity: 0;
}
.AB-GP104 .ab__filter-accordion-item .ab-accordion-icon svg {
  width: 13px;
  height: auto;
}
.AB-GP104 .ab__filter-accordion-item__body {
  padding: 0 15px 0 24px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s;
}
.AB-GP104 .ab__filter-accordion-item--open {
  border-bottom: 1px solid rgb(229, 229, 229);
}
.AB-GP104 .ab__filter-accordion-item--open .ab-accordion-icon {
  transform: rotate(180deg);
}
.AB-GP104 .ab__filter-accordion-item--open .ab-accordion-icon--plus {
  opacity: 0;
}
.AB-GP104 .ab__filter-accordion-item--open .ab-accordion-icon--minus {
  opacity: 1;
}
.AB-GP104 .ab__filter-accordion-item--open .ab__filter-accordion-item__body {
  max-height: 500px;
  margin-bottom: 22px;
}
.AB-GP104 ul.ab-filter-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
}
.AB-GP104 li.ab-filter-item {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 229, 229);
  border-radius: 10px;
  height: 40px;
  padding: 0 14px 0 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", Sans-serif;
  font-weight: 400;
  font-size: 14.5px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: rgb(0, 0, 0);
}
.AB-GP104 li.ab-filter-item.ab-selected {
  background-color: #ddd;
  color: #64808e;
  border-color: #e5e5e5;
}

/**
 * ----------------------------------------
		 *			MODAL
 * ----------------------------------------
 */
body.AB-GP104--modal-show {
  overflow: hidden;
}
body.AB-GP104--modal-show .AB-GP104__modal-layout {
  display: flex;
}
.AB-GP104__modal__open-cta {
  width: max-content;
  cursor: pointer;
  padding: 14px 30px 14px 30px;
  border-top-left-radius: 40px !important;
  border-top-right-radius: 40px !important;
  border-bottom-right-radius: 40px !important;
  border-bottom-left-radius: 40px !important;
  border-color: #4a73b6;
  background-color: #4a73b6;
  font-size: 1rem !important;
  font-family: "Inter", Sans-serif !important;
  font-weight: 500;
  color: #ffffff;
}
.AB-GP104__modal-layout {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background: transparent;
  z-index: 10000;
  overflow: hidden;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.AB-GP104__modal {
  opacity: 1;
  width: 100%;
  height: 100%;
  background: #ffffff;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.AB-GP104__modal__head {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 9px 6px 10px;
  border-bottom: 1px solid rgb(229, 229, 229);
}
.AB-GP104__modal__title {
  font-family: "STIX Two Text", Sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: rgb(0, 0, 0);
  flex-grow: 1;
}
.AB-GP104__modal__close-cta {
  width: 29px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.AB-GP104__modal__close-cta svg {
  width: 17px;
  height: 17px;
}
.AB-GP104__modal__body {
  margin-top: 49px;
  height: calc(100dvh - 49px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.AB-GP104__modal__filter-cta-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 0 15px 18px 21px;
  position: relative;
  z-index: 1;
  background-color: rgb(255, 255, 255);
}
.AB-GP104__modal__filter-cta-wrapper .ab-apply-filter-cta {
  width: 100%;
  height: 46px;
  background-color: rgb(28, 36, 75);
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "Inter", Sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
}
.AB-GP104__modal__filter-cta-wrapper .ab-clear-filter-cta {
  width: 100%;
  height: 44px;
  background-color: #fff;
  border: 1px solid rgb(46, 79, 124);
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "Inter", Sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  color: rgb(28, 36, 75);
}

.slide-in-left {
  -webkit-animation: slide-in-left 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-out-left {
  -webkit-animation: slide-out-left 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-out-left 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/**
   * ----------------------------------------
   * animation slide-in-left
   * ----------------------------------------
   */
@-webkit-keyframes slide-in-left {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-200px);
    transform: translateX(-200px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slide-in-left {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-200px);
    transform: translateX(-200px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
/**
   * ----------------------------------------
   * animation slide-out-left
   * ----------------------------------------
   */
@-webkit-keyframes slide-out-left {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-200px);
    transform: translateX(-200px);
  }
}
@keyframes slide-out-left {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-200px);
    transform: translateX(-200px);
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
(async () => {
  const TEST_ID = "GP104";
  const VARIANT_ID = "V1"; /* Control, V1, V2 */

  function logInfo(message) {
    console.log(
      `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
      "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
      "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
      message,
    );
  }

  logInfo("fired");

  const TEST_CONFIG = {
    page_initials: "AB-GP104",
    test_variation: 1 /* 0, 1, 2 */,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    cross_svg: /* HTML */ `
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.69167 0L0 1.69167L6.76667 8.45833L0 15.225L1.69167 16.9167L8.45833 10.15L15.225 16.9167L16.9167 15.225L10.15 8.45833L16.9167 1.69167L15.225 0L8.45833 6.76667L1.69167 0Z"
          fill="black"
        />
      </svg>
    `,
    plus_svg: /* HTML */ `
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0316 7.16223V8.93927C13.0316 9.18608 12.9452 9.39587 12.7724 9.56863C12.5997 9.7414 12.3899 9.82779 12.1431 9.82779H0.888517C0.641707 9.82779 0.431918 9.7414 0.259151 9.56863C0.0863836 9.39587 0 9.18608 0 8.93927V7.16223C0 6.91542 0.0863836 6.70563 0.259151 6.53287C0.431918 6.3601 0.641707 6.27372 0.888517 6.27372H12.1431C12.3899 6.27372 12.5997 6.3601 12.7724 6.53287C12.9452 6.70563 13.0316 6.91542 13.0316 7.16223Z"
          fill="black"
        />
        <path
          d="M5.62729 1.53497H7.40433C7.65114 1.53497 7.86093 1.62135 8.0337 1.79412C8.20646 1.96688 8.29285 2.17667 8.29285 2.42348V13.678C8.29285 13.9248 8.20646 14.1346 8.0337 14.3074C7.86093 14.4802 7.65114 14.5666 7.40433 14.5666H5.62729C5.38048 14.5666 5.17069 14.4802 4.99793 14.3074C4.82516 14.1346 4.73878 13.9248 4.73878 13.678L4.73878 2.42348C4.73878 2.17667 4.82516 1.96688 4.99793 1.79412C5.17069 1.62135 5.38048 1.53497 5.62729 1.53497Z"
          fill="black"
        />
      </svg>
    `,
    minus_svg: /* HTML */ `
      <svg
        width="14"
        height="4"
        viewBox="0 0 14 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0316 0.888525V2.66556C13.0316 2.91237 12.9452 3.12216 12.7724 3.29493C12.5997 3.46769 12.3899 3.55408 12.1431 3.55408H0.888517C0.641707 3.55408 0.431918 3.46769 0.259151 3.29493C0.0863836 3.12216 0 2.91237 0 2.66556V0.888525C0 0.641714 0.0863836 0.431925 0.259151 0.259158C0.431918 0.0863907 0.641707 7.15256e-06 0.888517 7.15256e-06H12.1431C12.3899 7.15256e-06 12.5997 0.0863907 12.7724 0.259158C12.9452 0.431925 13.0316 0.641714 13.0316 0.888525Z"
          fill="black"
        />
      </svg>
    `,
  };

  function fireGA4Event(eventName, eventLabel = "") {
    console.log("fireGA4Event", eventName, eventLabel);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "GA4event",
      "ga4-event-name": "cro_event",
      "ga4-event-p1-name": "event_category",
      "ga4-event-p1-value": eventName,
      "ga4-event-p2-name": "event_label",
      "ga4-event-p2-value": eventLabel,
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

  function filterAccordionSectionLayout() {
    const layout = /* HTML */ `
      <div class="ab__filter-accordion-section">
        ${qq("#shop-filters .wpfFilterWrapper")
          .map(
            (item, index) => /* HTML */ `
              <div
                class="ab__filter-accordion-item ${"ab__filter-accordion-item--open"}"
                data-toggle-id="${index + 1}"
              >
                <div class="ab__filter-accordion-item__head">
                  <div class="ab__filter-accordion-item__head__title">
                    ${q(item, ".wpfFilterTitle .wfpTitle").textContent}
                  </div>
                  <div class="ab__filter-accordion-item__head__toggle-icon">
                    <div class="ab-accordion-icon ab-accordion-icon--plus">
                      ${ASSETS.plus_svg}
                    </div>
                    <div class="ab-accordion-icon ab-accordion-icon--minus">
                      ${ASSETS.minus_svg}
                    </div>
                  </div>
                </div>
                <div class="ab__filter-accordion-item__body">
                  <ul class="ab-filter-list">
                    ${qq(item, "li")
                      .map(
                        (listItem) => /* HTML */ `
                          <li
                            class="ab-filter-item ${listItem.classList.contains(
                              "wpfTermChecked",
                            ) ||
                            q(listItem, ".wpfTermChecked") ||
                            q(listItem, ".selected")
                              ? "ab-selected"
                              : ""}"
                            ${listItem.hasAttribute("data-term-slug")
                              ? `data-term-slug="${listItem.getAttribute("data-term-slug")}"`
                              : ""}
                            ${listItem.hasAttribute("data-range")
                              ? `data-range="${listItem.getAttribute("data-range")}"`
                              : ""}
                          >
                            ${q(listItem, ".wpfValue").textContent}
                          </li>
                        `,
                      )
                      .join("")}
                  </ul>
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    `;

    return layout;
  }

  function createLayout() {
    q(".mobilefilter").insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <button class="${page_initials}__modal__open-cta">Filters</button>
      `,
    );

    q("body").insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <div class="${page_initials}__modal-layout">
          <div class="${page_initials}__modal-backdrop"></div>
          <div class="${page_initials}__modal">
            <div class="${page_initials}__modal__head">
              <div class="${page_initials}__modal__title">Filters</div>
              <div class="${page_initials}__modal__close-cta">
                ${ASSETS.cross_svg}
              </div>
            </div>
            <div class="${page_initials}__modal__body">
              <div class="${page_initials}__modal__filter__accordion-wrapper">
                ${filterAccordionSectionLayout()}
              </div>
              <div class="${page_initials}__modal__filter-cta-wrapper">
                <div class="ab-apply-filter-cta">Apply Filters</div>
                <div class="ab-clear-filter-cta">X Clear Filters</div>
              </div>
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
    if (e.target.closest(".ab__filter-accordion-section")) return;
    e.preventDefault();
  }

  function handleModalView(action = "show") {
    const modalShowClass = `${page_initials}--modal-show`;
    const body = document.body;

    const modal = q(`.${page_initials}__modal`);

    if (!modal) return;

    if (action === "show" && !body.classList.contains(modalShowClass)) {
      animate(modal, "slide-in-left", 200);
      modal.classList.add("slide-in-left");
      body.classList.add(modalShowClass);
      document.addEventListener("touchmove", preventScroll, { passive: false });
    }

    if (action === "hide") {
      animate(modal, "slide-out-left", 200);
      setTimeout(() => body.classList.remove(modalShowClass), 200);
      document.removeEventListener("touchmove", preventScroll);
    }
  }
  function clickFunction() {
    // Alterative Filter CTA
    q(`.${page_initials}__modal__open-cta`).addEventListener("click", () => {
      fireGA4Event("GP104_FilterOpen");
      handleModalView("show");
    });

    q(`.${page_initials}__modal__close-cta`).addEventListener("click", () => {
      handleModalView("hide");
    });

    q(".ab__filter-accordion-section").addEventListener("click", (e) => {
      if (e.target.closest(".ab__filter-accordion-item__head")) {
        const accordionElement = e.target.closest(
          ".ab__filter-accordion-item__head",
        ).parentNode;
        accordionElement.classList.toggle("ab__filter-accordion-item--open");
      }

      if (e.target.closest(".ab-filter-item[data-term-slug]")) {
        const filterItem = e.target.closest(".ab-filter-item");
        filterItem.classList.toggle("ab-selected");
      }

      if (e.target.closest(".ab-filter-item[data-range]")) {
        const filterItem = e.target.closest(".ab-filter-item");
        filterItem.classList.toggle("ab-selected");

        qq(".ab-filter-item[data-range]").forEach((item) => {
          if (item !== filterItem) {
            item.classList.remove("ab-selected");
          }
        });
      }
    });

    q(".ab-apply-filter-cta").addEventListener("click", () => {
      // Categories
      qq(".ab-filter-item[data-term-slug").forEach((item) => {
        const termSlug = item.getAttribute("data-term-slug");
        const targetNode = q(
          `#shop-filters .wpfFilterWrapper li.wpfTermWrapper[data-term-slug="${termSlug}"]`,
        );

        const isVariantSelected = item.classList.contains("ab-selected");
        const isControlSelected =
          targetNode.classList.contains("wpfTermChecked");
        if (isVariantSelected !== isControlSelected) {
          targetNode.click();
        }
      });

      // Price Range
      q(
        "#shop-filters .wpfFilterWrapper li[data-range]:has(.selected) label",
      )?.click();
      const selectedPriceRangeItem = q(
        ".ab-filter-item.ab-selected[data-range]",
      );
      if (selectedPriceRangeItem) {
        const priceRange = selectedPriceRangeItem.getAttribute("data-range");
        const targetNode = q(
          `#shop-filters .wpfFilterWrapper li[data-range="${priceRange}"] label.wpfLiLabel`,
        );
        targetNode.click();
      }

      // Hide Modal
      handleModalView("hide");
    });

    q(".ab-clear-filter-cta").addEventListener("click", () => {
      qq(".ab-filter-item").forEach((item) => {
        item.classList.remove("ab-selected");
      });

      qq(
        "#shop-filters .wpfFilterWrapper li.wpfTermWrapper.wpfTermChecked",
      ).forEach((item) => {
        item.click();
      });
      qq(
        "#shop-filters .wpfFilterWrapper li[data-range]:has(.selected)",
      ).forEach((item) => {
        q(item, "label").click();
      });

      // Remove all query parameters without reloading the page
      window.history.replaceState({}, document.title, window.location.pathname);
      window.location.reload();
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

    createLayout();
    clickFunction();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".elementor-button#shop-by") &&
      q("#shop-filters .wpfFilterWrapper")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
