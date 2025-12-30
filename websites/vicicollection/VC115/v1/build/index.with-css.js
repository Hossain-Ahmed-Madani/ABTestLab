(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-VC115 div.ab-quantity-added {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.AB-VC115 .ab-label {
  margin: 0;
  padding-left: 0;
  order: 1;
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
Ticket link: https://trello.com/c/oQ2yiWSy/4560-%F0%9F%92%9B%F0%9F%8D%BF-vc115-collection-filter-quantities-2-set-up-test
URL:https://www.vicicollection.com/?preview_theme_id=137131098174&pb=1 , https://www.vicicollection.com/collections/new-arrivals , https://www.vicicollection.com/collections/the-daily-drop#page=1 
Figma: https://www.figma.com/design/OqFHShfnjCQzW7JHGAf9vT/VC_---COLLECTION--Filter-Quantities?node-id=2002-9&t=zIfUG0iOTtzAFOjq-0
Test container: https://marketer.monetate.net/control/a-41b13725/p/vicicollection.com/experience/2073784#

*/

(async () => {
  const TEST_CONFIG = {
    client: "Acadia",
    project: "vicicollection",
    host: "https://www.vicicollection.com/",
    test_name: "VC115: [COLLECTION] Filter Quantities - (2) SET UP TEST",
    page_initials: "AB-VC115",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  function fireGA4Event(eventName, eventLabel = "") {
    console.log("fireGA4Event", eventName, eventName);
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

  function updateLayout() {
    console.log("updateLayout...");

    const flagClassName = "ab-quantity-added";
    qq('input[type="checkbox"][data-count]').forEach((input) => {
      if (
        input.parentNode.classList.contains(flagClassName) ||
        q(input.parentNode, ".ab-label")
      )
        return;

      const parentNode = input.parentNode;

      parentNode.classList.add(flagClassName);

      const quantity = input.getAttribute("data-count");
      const className = q(parentNode, "label").getAttribute("class");

      parentNode.insertAdjacentHTML(
        "beforeend",
        `<label class="ab-label ${className}" for="${input.getAttribute("id")}">&nbsp;(${quantity})</label>`,
      );
    });
  }

  function mutationObserverFunction() {
    const targetNode = q(".collection-filters-modal__content");
    const observer = new MutationObserver(updateLayout);
    if (targetNode)
      observer.observe(targetNode, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
  }

  function clickFunction() {
    q(".collection-filter-sort").addEventListener("click", (e) => {
      if (
        e.target.closest(
          ".collection-filter-sort__filter, .collection-filter-sort__more-filters-cta-wrapper, .collection-filter-sort__filter-button",
        )
      ) {
        fireGA4Event("VC115_FilterView");
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
    updateLayout();
    mutationObserverFunction();
    clickFunction();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) &&
      q(
        ".collection-filters-modal__content input[type='checkbox'][data-count]",
      ) &&
      q('input[type="checkbox"][data-count]') &&
      q(".collection-filter-sort")
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
