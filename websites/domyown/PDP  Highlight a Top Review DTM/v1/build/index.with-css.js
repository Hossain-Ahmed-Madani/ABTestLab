(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-HIGHLIGHT-TOP-REVIEW .ab-review {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin: 10px 0;
  cursor: pointer;
}
.AB-HIGHLIGHT-TOP-REVIEW .ab-review--expanded .ab-review__icon {
  transform: rotate(-180deg);
}
.AB-HIGHLIGHT-TOP-REVIEW .ab-review--expanded .ab-review__txt {
  width: initial;
  overflow: visible;
  white-space: normal;
  text-overflow: unset;
  max-height: 3000px;
}
.AB-HIGHLIGHT-TOP-REVIEW .ab-review__txt {
  flex: 1;
  font-family: Open Sans;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 0px;
  color: #424242;
  max-height: 25px;
  transition: all 0.3s;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  user-select: none;
}
.AB-HIGHLIGHT-TOP-REVIEW .ab-review__icon {
  margin-top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: max-content;
  transition: all 0.3s;
}
.AB-HIGHLIGHT-TOP-REVIEW .ab-review__icon svg {
  width: 14px;
}
.AB-HIGHLIGHT-TOP-REVIEW#desktop .ab-review {
  gap: 13px;
}
.AB-HIGHLIGHT-TOP-REVIEW#desktop .ab-review__txt {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0;
}
.AB-HIGHLIGHT-TOP-REVIEW#desktop .ab-review__icon {
  margin-top: 5px;
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
    test_name: "PDP - Highlight a Top Review [DTM]",
    page_initials: "AB-HIGHLIGHT-TOP-REVIEW",
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

    // GET ITEMS
    const targetNode = q(".leading-none:has(.price-breaks)");
    const isMobile = !!q("body#mobile");
    const insertPosition = isMobile ? "beforebegin" : "afterend";
    const reviewTxt = q(
      "li:has(p img[alt='5 of 5 Stars']) div.product-review, li:has(p img[alt='5 of 5 Stars']) p.paragraphs-bottom.leading-normal.md\\:leading-loose.text-grey-darkest",
    ).textContent;

    // CREATE MARKUP
    const layout = /* HTML */ `
      <div class="ab-review">
        <div class="ab-review__txt">${reviewTxt}</div>
        <div class="ab-review__icon">
          <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L8 9L15 1"
              stroke="#315CAA"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    `;

    // INSERT ELEMENTS
    if (isMobile)
      targetNode.insertAdjacentElement(
        insertPosition,
        q("div:has(>#product-title)"),
      );
    targetNode.insertAdjacentHTML(insertPosition, layout);

    // HANDLE FUNCTIONALITIES
    const abReviewTxtDiv = q(".ab-review__txt");
    abReviewTxtDiv.style.width = `${abReviewTxtDiv.getBoundingClientRect().width}px`;

    q(".ab-review").addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("ab-review--expanded");
    });
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q("#product-page-reviews") &&
      q("li p img[alt='5 of 5 Stars']")
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
