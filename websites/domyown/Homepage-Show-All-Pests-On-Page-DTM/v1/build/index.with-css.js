(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-HOME-SHOW-ALL-PESTS div[id*="category-carousel"] div[class="mt-4"],
.AB-HOME-SHOW-ALL-PESTS div[id*="category-carousel"] div.swiper.mt-2 {
  display: none;
}
.AB-HOME-SHOW-ALL-PESTS .ab-pests-grid {
  margin: auto;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 13px 10px;
}
.AB-HOME-SHOW-ALL-PESTS .ab-pest-item {
  width: 100%;
}
@media screen and (max-width: 990.5px) {
  .AB-HOME-SHOW-ALL-PESTS .ab-pests-grid {
    padding: 0 0.25rem;
  }
}
@media screen and (min-width: 991px) {
  .AB-HOME-SHOW-ALL-PESTS .ab-pests-grid {
    width: 90.6%;
    padding: 0;
    padding-right: 1.45rem;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px 15px;
  }
  .AB-HOME-SHOW-ALL-PESTS .ab-pest-item {
    padding: 0.25rem;
  }
  .AB-HOME-SHOW-ALL-PESTS .ab-pest-item a:not(:has(img)) {
    padding: 0 0.25rem;
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
    client: "ROI Revolutions",
    project: "Do My Own",
    site_url: "https://www.domyown.com",
    test_name: "Homepage Show All Pests On Page DTM",
    page_initials: "AB-HOME-SHOW-ALL-PESTS",
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

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);

    const layout = /* HTML */ `
      <div class="ab-content ab-pests-grid mt-4">
        ${qq(
          "div[id*='category-carousel'] .w-1\\/4 > .flex.flex-col.mx-auto.h-full",
        )
          .map(
            (item) =>
              /* HTML -> Mobile */ `<div class="ab-pest-item flex flex-col leading-tight ">${item.innerHTML}</div>`,
          )
          .join("")}
        ${qq(
          "div[id*='category-carousel'] .w-1\\/6 > .text-center.h-full.border.border-grey.p-1",
        )
          .map(
            (item) => /* HTML -> Desktop */ ` 
                        <div class="ab-pest-item flex flex-col leading-tight">
                            <div class="text-center h-full border border-grey p-1">${item.innerHTML}</div>
                        </div>`,
          )
          .join("")}
      </div>
    `;

    q("div[id*='category-carousel']").insertAdjacentHTML("beforeend", layout);
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) && q("div[id*='category-carousel']")
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
