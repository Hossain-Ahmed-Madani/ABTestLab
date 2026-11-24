(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-ODT038 .odt-radio-button-group.choose-collection-option {
  display: flex;
  flex-direction: column;
}
.AB-ODT038 label.odt-radio-button:has(input[value="Walk-in clinic"]) {
  position: relative;
  order: -1;
}
.AB-ODT038 label.odt-radio-button:has(input[value="Walk-in clinic"]) input {
  min-width: 24px;
}
.AB-ODT038
  label.odt-radio-button:has(input[value="Walk-in clinic"])
  span.color-accent-800 {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #006eb3;
  white-space: nowrap;
}
.AB-ODT038
  label.odt-radio-button:has(input[value="Walk-in clinic"])
  .odt-radio-button__label {
  font-size: 0 !important;
  line-height: 0;
  letter-spacing: -10px;
}
.AB-ODT038 .ab-sample-collection-short-info {
  margin-top: 16px;
  padding: 8px 12px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.1490196078);
  border-radius: 8px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #1d1d1d;
}
.AB-ODT038 .ab-label-content {
  display: flex;
  flex-direction: column;
}
.AB-ODT038 .ab-label-title {
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #1d1d1d;
}
.AB-ODT038 .ab-label-subtitle {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #1d1d1d;
}
.AB-ODT038 .ab-badge {
  position: absolute;
  left: 45px;
  top: -10px;
  margin-left: auto;
  min-height: 18px;
  border-radius: 1000px;
  background-color: #d9f3e1;
  padding: 2px 6px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0px;
  color: #008927;
  white-space: nowrap;
}
@media screen and (max-width: 1039.5px) {
  .AB-ODT038 .odt-radio-button-group.choose-collection-option {
    margin-top: 24px;
  }
  .AB-ODT038 label.odt-radio-button:has(input[value="Walk-in clinic"]),
  .AB-ODT038
    label.odt-radio-button:has(input[value="Walk-in clinic"])
    .odt-radio-button__label {
    align-items: flex-start;
  }
}
@media screen and (min-width: 1040px) {
  .AB-ODT038 .ab-sample-collection-short-info {
    padding: 8px 14.5px 8px 12px;
  }
  .AB-ODT038
    label.odt-radio-button:has(input[value="Walk-in clinic"])
    span.color-accent-800 {
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;
    letter-spacing: 0px;
    white-space: nowrap;
  }
  .AB-ODT038 .ab-badge {
    position: static;
    margin-left: auto;
    min-height: 18px;
    border-radius: 1000px;
    background-color: #d9f3e1;
    padding: 2px 6px;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0px;
    color: #008927;
    white-space: nowrap;
  }
  .AB-ODT038 .ab-label-title {
    font-size: 19px;
    line-height: 22px;
  }
  .AB-ODT038 .ab-label-subtitle {
    font-size: 12px;
    line-height: 16px;
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
    page_initials: "AB-ODT038",
    test_variation: 1 /* 1, 2 */,
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
    return o ? s.querySelector(o) : document.querySelector(s);
  }

  function init() {
    if (window[page_initials] === true) return;
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;

    const sampleCollectionsNode = q(
      ".odt-radio-button-group.choose-collection-option",
    );
    sampleCollectionsNode.insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="ab-sample-collection-short-info">
          This is a large test that needs the most blood of any home kit. If you
          don’t bleed easily, a clinic visit is the most reliable option.
        </div>
      `,
    );

    const clinicVisitNode = q(
      'label.odt-radio-button:has(input[value="Walk-in clinic"])',
    );
    q(clinicVisitNode, ".odt-radio-button__label").insertAdjacentHTML(
      "beforeend",
      /* HTML */ `
        <div class="ab-label-content">
          <div class="ab-label-title">Clinic visit</div>
          <div class="ab-label-subtitle">
            Taken by a professional phlebotomist.
          </div>
        </div>
      `,
    );
    q(clinicVisitNode, ".odt-radio-button__label").insertAdjacentHTML(
      "afterend",
      /* HTML */ ` <div class="ab-badge">Recommended for this test</div> `,
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".odt-radio-button-group.choose-collection-option") &&
      q('label.odt-radio-button:has(input[value="Walk-in clinic"])')
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
