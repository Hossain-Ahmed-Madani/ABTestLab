(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-ECX-173 #loggedout-control .avatar-error-icon {
  bottom: 4px;
  right: 4px;
  font-size: 20px;
}
@media screen and (min-width: 991px) {
  .AB-ECX-173 #loggedout-control .avatar-error-icon {
    bottom: 4px;
    right: 4px;
    font-size: 24px;
  }
}
.AB-ECX-173 .ab-error-icon-animation {
  position: relative;
  animation: jump 1.5s ease infinite;
  -webkit-animation: jump 1.5s ease infinite;
  -moz-animation: jump 1.5s ease infinite;
  -o-animation: jump 1.5s ease infinite;
}
@-webkit-keyframes jump {
  0% {
    -webkit-transform: translateY(0);
  }
  10% {
    -webkit-transform: translateY(-5px);
  }
  15% {
    -webkit-transform: translateY(0);
  }
  20% {
    -webkit-transform: translateY(-5px);
  }
  25% {
    -webkit-transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(0);
  }
}
@-moz-keyframes jump {
  0% {
    -moz-transform: translateY(0);
  }
  10% {
    -moz-transform: translateY(-5px);
  }
  15% {
    -moz-transform: translateY(0);
  }
  20% {
    -moz-transform: translateY(-5px);
  }
  25% {
    -moz-transform: translateY(0);
  }
  100% {
    -moz-transform: translateY(0);
  }
}
@-o-keyframes jump {
  0% {
    -o-transform: translateY(0);
  }
  10% {
    -o-transform: translateY(-5px);
  }
  15% {
    -o-transform: translateY(0);
  }
  20% {
    -o-transform: translateY(-5px);
  }
  25% {
    -o-transform: translateY(0);
  }
  100% {
    -o-transform: translateY(0);
  }
}
@keyframes jump {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-5px);
  }
  15% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-5px);
  }
  25% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
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
    client: "SeatPlan",
    project: "SeatPlan",
    site_url: "https://www.example.com",
    test_name:
      "[ECX - 173] Logged Out Users | Header | Shaking Error Icon on Avatar",
    page_initials: "AB-ECX-173",
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

    q("#loggedout-control").insertAdjacentHTML(
      "beforeend",
      `
            <span class="icon-user-warning sp-icon sp-icon-counter-1 sp-icon--filled avatar-error-icon ab-error-icon-animation"></span>
        `,
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) && q("#loggedout-control")
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
