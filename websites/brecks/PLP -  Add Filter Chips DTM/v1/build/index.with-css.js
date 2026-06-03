(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-FILTER-CHIPS .ab--filter-chips-wrap {
  width: 100%;
  margin: 0 0 12px;
  padding: 0 0 0 11px;
  box-sizing: border-box;
}
.AB-FILTER-CHIPS .ab--filter-chips {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 4px 20px 4px 0;
  scrollbar-width: none;
}
.AB-FILTER-CHIPS .ab--filter-chips::-webkit-scrollbar {
  display: none;
  height: 0;
}
.AB-FILTER-CHIPS .ab--scrollbar {
  height: 5px;
  margin: 0 20px 0 0;
  background: #fff;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  pointer-events: none;
}
.AB-FILTER-CHIPS .ab--scrollbar-thumb {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  min-width: 24px;
  background: #d9d9d9;
  border-radius: 50px;
  will-change: transform;
}
.AB-FILTER-CHIPS .ab--scrollbar--hidden {
  visibility: hidden;
}
@media (min-width: 991px) {
  .AB-FILTER-CHIPS .ab--scrollbar {
    display: none;
  }
  .AB-FILTER-CHIPS .ab--filter-chips {
    padding-bottom: 4px;
  }
  .AB-FILTER-CHIPS .ab--filter-chips:not(.ab--has-overflow-x) {
    scrollbar-width: none;
  }
  .AB-FILTER-CHIPS
    .ab--filter-chips:not(.ab--has-overflow-x)::-webkit-scrollbar {
    display: none;
    height: 0;
  }
  .AB-FILTER-CHIPS .ab--filter-chips.ab--has-overflow-x {
    padding-bottom: 8px;
    scrollbar-color: #d9d9d9 #fff;
    scrollbar-width: thin;
  }
  .AB-FILTER-CHIPS .ab--filter-chips.ab--has-overflow-x::-webkit-scrollbar {
    display: block;
    height: 5px;
  }
  .AB-FILTER-CHIPS
    .ab--filter-chips.ab--has-overflow-x::-webkit-scrollbar-track {
    background: #fff;
  }
  .AB-FILTER-CHIPS
    .ab--filter-chips.ab--has-overflow-x::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 50px;
    border: none;
  }
  .AB-FILTER-CHIPS
    .ab--filter-chips.ab--has-overflow-x::-webkit-scrollbar-thumb:hover,
  .AB-FILTER-CHIPS
    .ab--filter-chips.ab--has-overflow-x::-webkit-scrollbar-thumb:active {
    background: #d9d9d9;
    border-radius: 50px;
    border: none;
  }
  .AB-FILTER-CHIPS
    .ab--filter-chips.ab--has-overflow-x::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
  }
  .AB-FILTER-CHIPS
    .ab--filter-chips.ab--has-overflow-x::-webkit-scrollbar-corner {
    background: transparent;
  }
}
.AB-FILTER-CHIPS .ab--filter-chip {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  border: 1px solid #a0a0a0;
  border-radius: 50px;
  background: #f7f7f7;
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #000000;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.AB-FILTER-CHIPS .ab--filter-chip:hover,
.AB-FILTER-CHIPS .ab--filter-chip:focus-visible {
  border: 1px solid #487000;
  color: #487000;
  gap: 5px;
  background: #e5ecdd;
  outline: none;
}
.AB-FILTER-CHIPS .ab--chip-active {
  border: 1.5px solid #487000;
  background: #e5ecdd;
  color: #487000;
  font-weight: 700;
  gap: 5px;
}
.AB-FILTER-CHIPS .ab--chip-active:before {
  content: "";
  background-image: url('data:image/svg+xml,<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.825195 0.824951L4.8252 4.82495M4.8252 4.82495L8.8252 8.82495M4.8252 4.82495L8.8252 0.824951M4.8252 4.82495L0.825195 8.82495" stroke="%23487000" stroke-width="1.16667" stroke-linecap="square"/></svg>');
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  width: 8px;
  height: 8px;
}
.AB-FILTER-CHIPS .ab--chip-disabled {
  pointer-events: none;
  cursor: disabled;
  opacity: 0.4;
  filter: grayscale(100%);
}
.AB-FILTER-CHIPS .ab--chip-label {
  pointer-events: none;
}
@media (min-width: 991px) {
  .AB-FILTER-CHIPS .filter-topbar__inner {
    flex-wrap: nowrap;
    width: 100%;
  }
  .AB-FILTER-CHIPS .filter-topbar__sidebar-toggle-wrapper,
  .AB-FILTER-CHIPS .filter-topbar__sort-toggle {
    white-space: nowrap;
  }
  .AB-FILTER-CHIPS .ab--filter-chips-wrap {
    flex-grow: 1;
    overflow: hidden;
    padding: 0;
    margin-bottom: 0;
  }
  .AB-FILTER-CHIPS .ab--filter-chips {
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    cursor: grab;
  }
  .AB-FILTER-CHIPS .ab--filter-chips.ab--is-dragging {
    cursor: grabbing;
    user-select: none;
  }
  .AB-FILTER-CHIPS.snize-results-page:has(
      .snize-product-filters:not(.snize-hidden)
    )
    .snize-horizontal-left {
    width: 232px;
    min-width: 232px;
    height: 100%;
    padding-right: 5px;
    order: 0;
  }
  .AB-FILTER-CHIPS.snize-results-page:has(
      .snize-product-filters:not(.snize-hidden)
    )
    .snize-header {
    width: 100%;
  }
  .AB-FILTER-CHIPS.snize-results-page:has(
      .snize-product-filters:not(.snize-hidden)
    )
    .snize-search-results-header {
    max-width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 16px !important;
  }
  .AB-FILTER-CHIPS.snize-results-page:has(
      .snize-product-filters:not(.snize-hidden)
    )
    .snize-horizontal-right {
    min-width: 200px;
    margin-left: 15px;
    display: flex;
    order: 3;
  }
  .AB-FILTER-CHIPS.snize-results-page:has(
      .snize-product-filters:not(.snize-hidden)
    )
    .ab--filter-chips {
    padding-top: 0;
  }
  .AB-FILTER-CHIPS.snize-results-page:has(.snize-product-filters.snize-hidden)
    .ab--filter-chips-wrap {
    display: none;
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
https://www.brecks.com/collections/summer_flower_bulbs?sort_by=manual

*/

(async () => {
  const TEST_CONFIG = {
    client: "ROI Revolutions",
    project: "Brecks.com",
    site_url: "https://www.brecks.com/",
    test_name: "PLP - Add Filter Chips [DTM]",
    page_initials: "AB-FILTER-CHIPS",
    test_variation: 1,
    test_version: 0.0004,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const LAYOUT_CONFIG = {
    collections: {
      "(max-width: 990.5px)": {
        insertElementSelector:
          ".section-inner.section-inner--full-width:has(>.collection__inner)",
        insertPosition: "afterbegin",
        mutationObserverSelector: ".filter-sidebar",
        zoneSelector:
          'ul#filter-form__list-zone--sidebar input[type="checkbox"]',
        shippingSeasonSelector:
          'ul#filter-form__list-shipping-season--sidebar input[type="checkbox"][value="Fall"]',
        usageSelector:
          'ul#filter-form__list-usage--sidebar input[type="checkbox"]',
      },
      "(min-width: 991px)": {
        insertElementSelector: ".filter-topbar__sidebar-toggle-wrapper",
        insertPosition: "afterend",
        mutationObserverSelector: ".filter-sidebar",
        zoneSelector:
          'ul#filter-form__list-zone--sidebar input[type="checkbox"]',
        shippingSeasonSelector:
          'ul#filter-form__list-shipping-season--sidebar input[type="checkbox"][value="Fall"]',
        usageSelector:
          'ul#filter-form__list-usage--sidebar input[type="checkbox"]',
      },
    },
    search: {
      "(max-width: 990.5px)": {
        insertElementSelector: "",
        mutationObserverSelector: "",
        insertPosition: "afterbegin",
        zoneSelector: "",
        shippingSeasonSelector: "",
        usageSelector: "",
      },
      "(min-width: 991px)": {
        insertElementSelector:
          "main.search-results-page .snize-horizontal-right",
        mutationObserverSelector:
          "main.search-results-page .snize-filters-sidebar",
        insertPosition: "afterend",
        zoneSelector:
          "main.search-results-page input[data-se-facet-default-title='Zone'][type='checkbox']",
        shippingSeasonSelector:
          "main.search-results-page input[data-se-facet-default-title='Bloom Time'][type='checkbox'][value='Fall']",
        usageSelector:
          "main.search-results-page input[data-se-facet-default-title='Usage'][type='checkbox']",
      },
    },
  };

  let CURRENT_LAYOUT_CONFIG = null;

  function getLayoutConfig() {
    const currentPath = window.location.pathname;

    if (
      !(
        currentPath.includes("/collections/") ||
        currentPath.includes("/search-results-page")
      )
    ) {
      return null;
    }

    const pathConfig =
      LAYOUT_CONFIG[
        currentPath.includes("collections") ? "collections" : "search"
      ] ?? {};
    const matchedQuery = Object.keys(pathConfig).find(
      (query) => window.matchMedia(query).matches,
    );
    return pathConfig[matchedQuery] ?? null;
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
    return [...document.querySelectorAll(s)];
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

  function getCookie(key) {
    try {
      if (!key || typeof key !== "string");

      // Encode the key to handle special characters
      const encodedKey = encodeURIComponent(key);
      const cookies = `; ${document.cookie}`;

      // Find the cookie value
      const parts = cookies.split(`; ${encodedKey}=`);

      if (parts.length === 2) {
        const value = parts.pop().split(";").shift();
        return value ? decodeURIComponent(value) : null;
      }

      return null;
    } catch (error) {
      // console.error(`Error reading cookie "${key}":`, error);
      return null;
    }
  }

  function isTouchEnabled() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  function getFilterData() {
    const { zoneSelector, shippingSeasonSelector, usageSelector } =
      CURRENT_LAYOUT_CONFIG;
    const PlantingZone = getCookie("PlantingZone");

    const data = [];

    const matchingFilterNodeValue =
      qq(zoneSelector).find(
        (item) => PlantingZone && PlantingZone.includes(item.value),
      )?.value ?? null;

    if (PlantingZone && matchingFilterNodeValue) {
      data.push({
        label: "Shop Your Zone: " + PlantingZone.toUpperCase(),
        controlNodeSelector: `${zoneSelector}[value="${matchingFilterNodeValue}"]`,
      });
    }

    if (q(shippingSeasonSelector)) {
      data.push({
        label: "Ships Now",
        controlNodeSelector: shippingSeasonSelector,
      });
    }

    qq(usageSelector)?.forEach((item) =>
      data.push({
        label: item.getAttribute("value"),
        controlNodeSelector: `${usageSelector}[value="${item.getAttribute("value")}"]`,
      }),
    );

    return data;
  }

  function createLayout() {
    const filterData = getFilterData();
    if (!filterData.length) return;

    const { insertElementSelector, insertPosition } = CURRENT_LAYOUT_CONFIG;

    q(insertElementSelector).insertAdjacentHTML(
      insertPosition,
      /* HTML */ `
        <div class="ab--filter-chips-wrap">
          <div class="ab--filter-chips">
            ${filterData
              .map(
                ({ label, controlNodeSelector }) => /* HTML */ `
                  <button
                    type="button"
                    class="ab--filter-chip ${q(controlNodeSelector)?.checked &&
                    !q(controlNodeSelector)?.disabled
                      ? "ab--chip-active"
                      : ""} ${q(controlNodeSelector)?.disabled
                      ? "ab--chip-disabled"
                      : ""}"
                    data-selector="${encodeURIComponent(controlNodeSelector)}"
                  >
                    <span class="ab--chip-label">${label}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
          <div class="ab--scrollbar" aria-hidden="true">
            <div class="ab--scrollbar-thumb"></div>
          </div>
        </div>
      `,
    );
  }

  async function recreateInnerLayout() {
    await waitForElementAsync(() => q(".ab--filter-chips"));

    const filterData = getFilterData();

    if (!filterData.length) return;

    q(".ab--filter-chips").innerHTML = /* HTML */ filterData
      .map(
        ({ label, controlNodeSelector }) => /* HTML */ `
          <button
            type="button"
            class="ab--filter-chip ${q(controlNodeSelector)?.checked &&
            !q(controlNodeSelector)?.disabled
              ? "ab--chip-active"
              : ""} ${q(controlNodeSelector)?.disabled
              ? "ab--chip-disabled"
              : ""}"
            data-selector="${encodeURIComponent(controlNodeSelector)}"
          >
            <span class="ab--chip-label">${label}</span>
          </button>
        `,
      )
      .join("");
  }

  function syncFilterChipsScrollbar() {
    const scroller = q(".ab--filter-chips");
    if (!scroller) return;

    const scrollable = scroller.scrollWidth > scroller.clientWidth + 1;
    scroller.classList.toggle("ab--has-overflow-x", scrollable);

    if (window.matchMedia("(min-width: 991px)").matches) return;

    const thumb = q(".ab--scrollbar-thumb");
    const track = q(".ab--scrollbar");
    if (!thumb || !track) return;

    track.classList.toggle("ab--scrollbar--hidden", !scrollable);

    if (!scrollable) return;

    const trackWidth = track.clientWidth;
    const thumbWidth = Math.max(
      (scroller.clientWidth / scroller.scrollWidth) * trackWidth,
      24,
    );
    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    const maxThumbOffset = trackWidth - thumbWidth;
    const thumbOffset =
      maxScrollLeft > 0
        ? (scroller.scrollLeft / maxScrollLeft) * maxThumbOffset
        : 0;

    thumb.style.width = `${thumbWidth}px`;
    thumb.style.transform = `translate3d(${thumbOffset}px, 0, 0)`;
  }

  function filterChipsScrollbarFunction() {
    const scroller = q(".ab--filter-chips");
    if (!scroller) return;

    scroller.addEventListener("scroll", syncFilterChipsScrollbar, {
      passive: true,
    });
    new ResizeObserver(syncFilterChipsScrollbar).observe(scroller);
    syncFilterChipsScrollbar();
  }

  function mutationObserverFunction() {
    const { mutationObserverSelector } = CURRENT_LAYOUT_CONFIG;
    const targetNode = q(mutationObserverSelector);
    const debouncedUpdate = debounce(() => {
      recreateInnerLayout();
      syncFilterChipsScrollbar();
    }, 250);
    return new MutationObserver(debouncedUpdate).observe(targetNode, {
      childList: true,
      subtree: true,
      attributes: false,
    });
  }

  function dragScrollFunction() {
    if (!window.matchMedia("(min-width: 991px)").matches) return;
    if (isTouchEnabled()) return;

    const el = q(".ab--filter-chips");
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasDragged = false;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;
    let rafId = null;

    const DRAG_THRESHOLD = 5;
    const FRICTION = 0.92; // velocity multiplier per frame (~60fps decay)
    const MIN_VELOCITY = 0.3; // px/frame below which momentum stops
    const VELOCITY_SCALE = 16; // normalise raw px/ms to px/frame at ~60fps

    function cancelMomentum() {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    function applyMomentum() {
      velocity *= FRICTION;
      if (Math.abs(velocity) < MIN_VELOCITY) {
        velocity = 0;
        rafId = null;
        return;
      }
      el.scrollLeft -= velocity;
      rafId = requestAnimationFrame(applyMomentum);
    }

    function endDrag() {
      isDown = false;
      el.classList.remove("ab--is-dragging");
      if (hasDragged && Math.abs(velocity) > MIN_VELOCITY) {
        rafId = requestAnimationFrame(applyMomentum);
      }
    }

    el.addEventListener("mousedown", (e) => {
      cancelMomentum();
      isDown = true;
      hasDragged = false;
      velocity = 0;
      startX = e.pageX - el.getBoundingClientRect().left;
      scrollLeft = el.scrollLeft;
      lastX = e.pageX;
      lastTime = performance.now();
      el.classList.add("ab--is-dragging");
    });

    el.addEventListener("mouseleave", () => {
      if (!isDown) return;
      endDrag();
    });

    el.addEventListener("mouseup", () => {
      if (!isDown) return;
      endDrag();
    });

    el.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();

      const now = performance.now();
      const dt = now - lastTime;
      const dx = e.pageX - lastX;

      // EMA keeps velocity smooth — downweights noisy single-frame spikes
      if (dt > 0) {
        const raw = (dx / dt) * VELOCITY_SCALE;
        velocity = velocity * 0.4 + raw * 0.6;
      }

      lastX = e.pageX;
      lastTime = now;

      const x = e.pageX - el.getBoundingClientRect().left;
      const delta = x - startX;
      if (Math.abs(delta) > DRAG_THRESHOLD) hasDragged = true;
      el.scrollLeft = scrollLeft - delta;
    });

    // Suppress chip clicks that were actually drag gestures
    el.addEventListener(
      "click",
      (e) => {
        if (hasDragged) {
          e.stopImmediatePropagation();
          hasDragged = false;
        }
      },
      true,
    );
  }

  function clickFunction() {
    q(".ab--filter-chips").addEventListener("click", (e) => {
      const button = e.target.closest(".ab--filter-chip");

      if (button) {
        button.classList.toggle("ab--chip-active");
        const controlNodeSelector = decodeURIComponent(button.dataset.selector);
        const targetNode = q(controlNodeSelector);
        targetNode?.click();
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
    CURRENT_LAYOUT_CONFIG = getLayoutConfig();

    console.table(TEST_CONFIG);
    console.table(CURRENT_LAYOUT_CONFIG);

    createLayout();

    await waitForElementAsync(() => q(".ab--filter-chips-wrap"));

    clickFunction();
    dragScrollFunction();
    filterChipsScrollbarFunction();
    mutationObserverFunction();
  }

  function checkForItems() {
    const layoutConfig = getLayoutConfig();
    if (!layoutConfig) return false;

    console.log("LAYOUT CONFIG", layoutConfig);

    const {
      insertElementSelector,
      mutationObserverSelector,
      zoneSelector,
      shippingSeasonSelector,
      usageSelector,
    } = layoutConfig;

    return !!(
      document.readyState === "complete" &&
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(insertElementSelector) &&
      q(mutationObserverSelector) &&
      (q(zoneSelector) || q(shippingSeasonSelector) || q(usageSelector))
    );
  }

  //  ================ MAIN LOGIC ================
  await waitForElementAsync(checkForItems);
  init();
})();
