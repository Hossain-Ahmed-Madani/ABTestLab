(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `html {
  position: relative;
}
html::before {
  content: "AB test pilot CSS";
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999999;
  background: #ff0000;
  color: #ffffff;
  padding: 10px;
  border: 7px solid #269b11;
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
control: https://marketer.monetate.net/control/preview/12706/CAVKRJ99ASH875LLMN5CPEYYYMSFYNGK/lme73-home-add-net-new-subscription-content-feature
v1: https://marketer.monetate.net/control/preview/12706/UFOFQUD9R6VPPPOBR1YUOI5SC9BODME5/lme73-home-add-net-new-subscription-content-feature
v2: https://marketer.monetate.net/control/preview/12706/VH5IWBL18SSGFAMHGZ2G7OLN6SAG7XI9/lme73-home-add-net-new-subscription-content-feature

https://lemmelive.com/products/byob-3
document.cookie="qa5=true;path=/"

*/

(function () {
  const TEST_NAME = "LME56: [BYOB] Test Default on Pack Size - (2) SET UP TEST";
  const TEST_VARIATION = 1; /* 0 -> control, 1, 2 */

  function waitForElement(predicate, callback, timer = 20000, frequency = 100) {
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
      console.log(error);
      return;
    }
  }

  function fireGA4Event(eventName, eventLabel = "") {
    console.log(`LME56: Firing GA4 Event: ${eventName} - ${eventLabel}`);

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

  function handleTargetPackSizeClick() {
    const pack_size = "4";
    const targetInput = document.querySelector(
      `.bundle-builder__pack-size-options input[type=radio][value="${pack_size}"]`,
    );

    // First remove all checked attributes
    document
      .querySelectorAll(".bundle-builder__pack-size-options input[type=radio]")
      .forEach((item) => {
        item.removeAttribute("checked");
        item.checked = false;
      });

    // Then set the new checked state
    targetInput.setAttribute("checked", "true");
    targetInput.checked = true;

    // Dispatch proper events

    // Also trigger click on the label if needed
    const targetLabel = document.querySelector(
      `.bundle-builder__pack-size-options label.btn[for="${pack_size}-pack"]`,
    );
    if (targetLabel) targetLabel.click();

    targetInput.dispatchEvent(new Event("change", { bubbles: true }));
    targetInput.dispatchEvent(new Event("click", { bubbles: true }));

    waitForElement(
      () => document.readyState === "complete",
      () => {
        targetInput.dispatchEvent(new Event("change", { bubbles: true }));
        targetInput.dispatchEvent(new Event("click", { bubbles: true }));
      },
    );
  }

  function handleGA4Event() {
    document
      .querySelector(".bundle-builder__pack-size-options")
      .addEventListener("click", (e) => {
        if (e.target.closest("label.btn")) {
          const value = e.target.closest("label.btn").getAttribute("for");
          fireGA4Event("LME56_SizeClick", value);
        }
      });
  }

  waitForElement(
    () =>
      !!(
        // document.readyState === 'complete' &&
        (
          window.location.href.includes("/products/byob-3") &&
          document.querySelector(
            "body:not(.AB-LME56) .bundle-builder__pack-size-options",
          )
        )
      ),
    () => {
      console.log(TEST_NAME, TEST_VARIATION, document.readyState);
      document.body.classList.add("AB-LME56", `AB-LME56--v${TEST_VARIATION}`);

      if (TEST_VARIATION !== 0) {
        handleTargetPackSizeClick();
      }
      handleGA4Event();
    },
  );
})();
