(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-PMO25--v1
  .wrapper-step:nth-of-type(1)
  .wrapper-step__actions
  .btn:not(.ab-btn),
.AB-PMO25--v1
  .wrapper-step:nth-of-type(2)
  .wrapper-step__actions
  .btn:not(.ab-btn) {
  display: none;
}
.AB-PMO25--v1 .btn[disabled] ~ .ab-btn {
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: non;
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
// https://trello.com/c/2dylU19x/3920-pmo25-shop-funnel-cta-copy-2-set-up-test
// https://marketer.monetate.net/control/a-899aac64/p/water.com/experience/2036051#c2556744:what

(() => {
  const TEST_CONFIG = {
    page_initials: "AB-PMO25",
    test_variation: 1,
    test_version: 0.0002,
  };

  function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
    try {
      if (timer <= 0) {
        throw new Error(
          `Timeout reached while waiting for condition: ${predicate.toString()}`,
        );
      } else if (predicate && predicate()) {
        callback();
      } else {
        setTimeout(() => {
          waitForElement(predicate, callback, timer - frequency, frequency);
        }, frequency);
      }
    } catch (error) {
      return;
    }
  }

  function fireGA4Event(eventName, eventLabel = "") {
    console.log(`Firing GA4 Event: ${eventName} - ${eventLabel}`);
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

  function createButtonElement(className, text) {
    const btn = document.createElement("button");
    btn.className = `${className} ab-btn btn btn-primary btm-size-full shadow-btn`;
    btn.setAttribute("type", "button");
    btn.innerText = text;
    return btn;
  }

  function createButtonComponent({
    parentSelector,
    className,
    label,
    mutationCallback,
  }) {
    const targetNode = document.querySelector(parentSelector);
    const btn = createButtonElement(className, label);
    targetNode.insertAdjacentElement("beforeend", btn);

    targetNode.addEventListener("click", (e) => {
      if (e.target.closest(".ab-btn")) {
        targetNode.querySelector(".btn:not(.ab-btn)").click();
        fireGA4Event(
          "PM025_CTAclick",
          targetNode.querySelector(".ab-btn").innerText,
        );
      }
    });

    new MutationObserver(mutationCallback).observe(targetNode, {
      childList: true,
      subtree: true,
    });
  }

  function init() {
    document.body.classList.add(
      TEST_CONFIG.page_initials,
      `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`,
      `${TEST_CONFIG.page_initials}--version-${TEST_CONFIG.test_version}`,
    );

    const data = [
      {
        parentSelector: ".wrapper-step:nth-of-type(1) .wrapper-step__actions",
        className: "ab-step-one-btn",
        label: "Add Products to Continue",
        mutationCallback: (mutationList, observer) => {
          mutationList.forEach((mutation) => {
            const targetNode = document.querySelector(
              ".ab-btn.ab-step-one-btn",
            );
            const parentNode = targetNode.parentNode;
            if (!mutation.target.classList.contains("ab-btn")) {
              targetNode.innerText =
                parentNode
                  .querySelector(".btn:not(.ab-btn)")
                  .innerText.trim() === "Next"
                  ? "Next: Select Dispenser →"
                  : "Add Products to Continue";
            }
          });
        },
      },
      {
        parentSelector: ".wrapper-step:nth-of-type(2) .wrapper-step__actions",
        className: "ab-step-two-btn",
        label: "Skip",
        mutationCallback: (mutationList, observer) => {
          mutationList.forEach((mutation) => {
            const targetNode = document.querySelector(
              ".ab-btn.ab-step-two-btn",
            );
            const parentNode = targetNode.parentNode;
            if (!mutation.target.classList.contains("ab-btn")) {
              targetNode.innerText =
                parentNode
                  .querySelector(".btn:not(.ab-btn)")
                  .innerText.trim() === "Next"
                  ? "Next: Select Add-ons →"
                  : "Skip";
            }
          });
        },
      },
    ];

    data.forEach((obj) => createButtonComponent(obj));
  }

  function hasAllTargetElements() {
    return !!(
      window.location.href.includes("start-water-delivery") &&
      document.querySelector(
        `body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`,
      ) &&
      document.querySelector(
        ".wrapper-step:nth-of-type(1) .wrapper-step__actions .btn:not(.ab-btn)",
      ) &&
      document.querySelector(
        ".wrapper-step:nth-of-type(2) .wrapper-step__actions .btn:not(.ab-btn)",
      )
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
