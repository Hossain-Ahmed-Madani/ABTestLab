(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-EXP-188 .ab-seat-view-messaging-section {
  margin-top: 18px;
  margin-bottom: 10px;
}
.AB-EXP-188 .ab-seat-view-messaging-item {
  border: 0.5px solid rgba(2, 87, 130, 0.5);
  border-radius: 4px;
  padding: 8px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 17px;
}
.AB-EXP-188 .ab-seat-view-messaging-item__icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-EXP-188 .ab-seat-view-messaging-item__icon svg {
  width: 20px;
  height: 18px;
}
.AB-EXP-188 .ab-seat-view-messaging-item__text-content strong {
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(2, 87, 130);
}
.AB-EXP-188 .ab-seat-view-messaging-item__text-content span {
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(2, 87, 130);
}
@media screen and (min-width: 991px) {
  .AB-EXP-188 .ab-seat-view-messaging-section {
    margin-top: 20px;
    margin-bottom: 8px;
  }
  .AB-EXP-188 .ab-seat-view-messaging-item {
    padding: 16px 16px;
    gap: 16px;
  }
  .AB-EXP-188 .ab-seat-view-messaging-item__text-content {
    display: flex;
    gap: 2px;
  }
  .AB-EXP-188 .ab-seat-view-messaging-item__text-content strong {
    font-size: 16px;
    line-height: 24px;
  }
  .AB-EXP-188 .ab-seat-view-messaging-item__text-content br {
    display: none;
  }
  .AB-EXP-188 .ab-seat-view-messaging-item__text-content span {
    font-size: 16px;
    line-height: 24px;
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
    client: "Seatplan",
    project: "Seatplan",
    site_url: "https://seatplan.com",
    test_name: "[ECX - 188] Production - Seat View Messaging",
    page_initials: "AB-EXP-188",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  ASSETS = {
    camera_svg: /* HTML */ `
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 14.5C11.25 14.5 12.3125 14.0625 13.1875 13.1875C14.0625 12.3125 14.5 11.25 14.5 10C14.5 8.75 14.0625 7.6875 13.1875 6.8125C12.3125 5.9375 11.25 5.5 10 5.5C8.75 5.5 7.6875 5.9375 6.8125 6.8125C5.9375 7.6875 5.5 8.75 5.5 10C5.5 11.25 5.9375 12.3125 6.8125 13.1875C7.6875 14.0625 8.75 14.5 10 14.5ZM10 12.5C9.3 12.5 8.70833 12.2583 8.225 11.775C7.74167 11.2917 7.5 10.7 7.5 10C7.5 9.3 7.74167 8.70833 8.225 8.225C8.70833 7.74167 9.3 7.5 10 7.5C10.7 7.5 11.2917 7.74167 11.775 8.225C12.2583 8.70833 12.5 9.3 12.5 10C12.5 10.7 12.2583 11.2917 11.775 11.775C11.2917 12.2583 10.7 12.5 10 12.5ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H5.15L7 0H13L14.85 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H2Z"
          fill="#025782"
        />
      </svg>
    `,
  };

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

    q(".production-overview__nav-section").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <section class="ab-seat-view-messaging-section">
          <div class="ab-seat-view-messaging-item">
            <div class="ab-seat-view-messaging-item__icon">
              ${ASSETS.camera_svg}
            </div>
            <div class="ab-seat-view-messaging-item__text-content">
              <strong>Book with confidence.</strong>
              <br />
              <span>See real seat view photos before you buy.</span>
            </div>
          </div>
        </section>
      `,
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".production-overview__nav-section") &&
      q(".production-page-section--long-description:not(:has(#seats-views))")
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
