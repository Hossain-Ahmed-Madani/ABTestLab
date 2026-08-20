(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-TEST014-1 footer.page-footer {
  padding-bottom: 60px;
}
.AB-TEST014-1 .ab-sticky-cta__button--signup {
  margin-right: 0;
}
.AB-TEST014-1 .footer-buttons-bottom {
  bottom: 50px;
}
.AB-TEST014-1 .ab-sticky-cta {
  width: 100vw;
  position: fixed;
  bottom: 0;
  background-color: #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}
.AB-TEST014-1 .ab-sticky-cta__button {
  min-width: 100%;
}
.AB-TEST014-1 .ab-sticky-cta__container {
  flex-grow: 1;
}

.AB-TEST014-1--v1 .ab-sticky-cta {
  padding: 10px 19px 20px 12px;
}

.AB-TEST014-1--v2 .footer-buttons-bottom {
  bottom: 65px;
}
.AB-TEST014-1--v2 .ab-sticky-cta {
  padding: 10px 19px 5px 12px;
}
.AB-TEST014-1--v2 .ab-sticky-cta__bottom-text {
  font-family: "Onest Regular";
  font-weight: 300;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: #595c5f;
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
    page_initials: "AB-TEST014-1",
    test_variation: 1 /* 1, 2 */,
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

  function q(s, o) {
    return o ? s.querySelector(o) : document.querySelector(s);
  }

  const CONTENT = {
    1: {
      info_package: {
        label: "Infopaket",
        bottom_text: "",
        btn_class_name: "btn btn-info btn-sm link-modal-info-package",
      },
      sign_up: {
        label: "Anmelden",
        bottom_text: "",
        btn_class_name:
          "btn btn-prio-1 btn-reg-header btn-sm track-fb-init-free-month",
      },
    },
    2: {
      info_package: {
        label: "Infopaket",
        bottom_text: "Kostenlos. Alles Wissenswerte.",
        btn_class_name: "btn btn-info btn-sm link-modal-info-package",
      },
      sign_up: {
        label: "Anmelden",
        bottom_text: "4 Wochen unverbindlich testen.",
        btn_class_name:
          "btn btn-prio-1 btn-reg-header btn-sm track-fb-init-free-month",
      },
    },
  };

  function init() {
    if (window[page_initials] === true) return;

    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;

    const { info_package, sign_up } = CONTENT[test_variation];

    q("body").insertAdjacentHTML(
      "beforeend",
      /* HTML */ `
        <div class="ab-sticky-cta">
          <div class="ab-sticky-cta__container">
            <button
              class="ab-sticky-cta__button ab-sticky-cta__button--info ${info_package.btn_class_name}"
            >
              ${info_package.label}
            </button>
            ${""}
          </div>
          <div class="ab-sticky-cta__container">
            <button
              class="ab-sticky-cta__button ab-sticky-cta__button--signup ${sign_up.btn_class_name}"
            >
              ${sign_up.label}
            </button>
            ${""}
          </div>
        </div>
      `,
    );

    q(".ab-sticky-cta__button--info").addEventListener("click", (e) =>
      q(
        ".btn.btn-info.btn-sm.link-modal-info-package:not(.ab-sticky-cta__button)",
      ).click(),
    );
    q(".ab-sticky-cta__button--signup").addEventListener("click", (e) =>
      q(
        ".btn.btn-prio-1.btn-reg-header.btn-sm.track-fb-init-free-month:not(.ab-sticky-cta__button)",
      ).click(),
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q(".btn.btn-info.btn-sm.link-modal-info-package") &&
      q(".btn.btn-prio-1.btn-reg-header.btn-sm.track-fb-init-free-month")
    );
  }

  await waitForElementAsync(checkForItems);
  init();
})();
