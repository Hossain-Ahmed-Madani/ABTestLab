(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-EXP-193 .sp-footer {
  padding-bottom: 7rem;
}
.AB-EXP-193 .ab-offer-bar {
  background-color: #ff0066;
  color: #fff;
  margin: -8px -8px 8px -8px;
  height: 32px;
  display: flex;
}
.AB-EXP-193 .ab-offer-bar__header {
  margin: auto;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}
.AB-EXP-193 .ab-offer-bar__header__text {
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0px;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
}
.AB-EXP-193
  .production-right-panel__sticky-container--toggled-hidden
  .ab-offer-bar {
  margin-bottom: -3px;
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
    page_initials: "AB-EXP-193",
    test_variation: 1,
    test_version: 0.0002,
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

  function formatDateToOrdinal(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });

    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getOrdinal(day)} ${month}`;
  }

  function formatNumber(number) {
    return number.toLocaleString("en-US");
  }

  function q(s, o) {
    return o ? s.querySelector(o) : document.querySelector(s);
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

  function createLayout() {
    if (q(".ab-offer-bar")) return;

    q(".production-right-panel__sticky-container").insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <div class="ab-offer-bar">
          <div class="ab-offer-bar__header">
            <div class="ab-offer-bar__header__text">
              ${formatNumber(+window.numberOfOffers)} tickets on offer from
              ${formatDateToOrdinal(window.offerFromDate)}
            </div>
          </div>
        </div>
      `,
    );
  }

  function mutationObserverFunction() {
    const debouncedUpdate = debounce(createLayout, 150);
    const observer = new MutationObserver(debouncedUpdate);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function init() {
    if (window[page_initials]) return;

    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;

    createLayout();
    mutationObserverFunction();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".production-right-panel__sticky-container") &&
      window.numberOfOffers &&
      window.offerFromDate
    );
  }

  await waitForElementAsync(checkForItems);
  init();
})();
