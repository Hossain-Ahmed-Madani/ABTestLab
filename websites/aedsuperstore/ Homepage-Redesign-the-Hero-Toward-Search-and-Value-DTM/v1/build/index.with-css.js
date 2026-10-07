(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-HOMEPAGE-HERO-SEARCH .frame-feature {
  display: none;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-container {
  background-color: #eaf4fa;
  padding: 24px 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
}
.AB-HOMEPAGE-HERO-SEARCH h2.ab-hero-heading {
  font-family: Rubik, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: #0d21a1;
  margin: 0;
}
.AB-HOMEPAGE-HERO-SEARCH .ab-hero-search {
  width: 100%;
}
.AB-HOMEPAGE-HERO-SEARCH a.ab-hero-promo-cta {
  height: 24px;
  background-color: #e00034;
  padding: 5px 10px;
  border-radius: 100px;
  font-family: Rubik, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #ffffff;
  align-content: center;
  text-decoration: none;
  outline: none;
  margin: 0;
}
.AB-HOMEPAGE-HERO-SEARCH a.ab-hero-promo-cta:hover {
  text-decoration: none;
  outline: none;
}
@media screen and (min-width: 991px) {
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-container {
    padding: 59.5px 0px;
    gap: 24px;
  }
  .AB-HOMEPAGE-HERO-SEARCH h2.ab-hero-heading {
    font-weight: 500;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
  }
  .AB-HOMEPAGE-HERO-SEARCH h2.ab-hero-heading br {
    display: none;
  }
  .AB-HOMEPAGE-HERO-SEARCH .ab-hero-search {
    max-width: 800px;
  }
  .AB-HOMEPAGE-HERO-SEARCH a.ab-hero-promo-cta {
    height: 35px;
    padding: 8px 20px;
    border-radius: 21.6px;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
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
    project: "AED Superstore",
    site_url: "https://www.aedsuperstore.com",
    test_name: "Homepage - Redesign the Hero Toward Search and Value [DTM]",
    page_initials: "AB-HOMEPAGE-HERO-SEARCH",
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

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);

    q(".frame-feature").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="ab-hero-container">
          <h2 class="ab-hero-heading">
            Find the exact AED, pad, <br />
            or battery you need
          </h2>
          <div class="ab-hero-search">${q(".searchWidget").outerHTML}</div>
          <a href="/aeds.html" class="ab-hero-promo-cta"
            >$175 off $1,500+ · code SAVE175</a
          >
        </div>
      `,
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".frame-feature") &&
      q(".searchWidget")
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
