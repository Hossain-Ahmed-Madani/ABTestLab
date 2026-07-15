(async () => {
  const TEST_CONFIG = {
    client: "Netzproduzenten",
    project: "MDM",
    site_url: "https://www.mdm.de/",
    test_name:
      "Test006 [MDM] - Order Confirmation Page - Customer Satisfaction Survey",
    page_initials: "AB-TEST006",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    note_svg: /* HTML */ `<svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.24992 4.58337H6.41659C5.93036 4.58337 5.46404 4.77653 5.12022 5.12034C4.77641 5.46416 4.58325 5.93048 4.58325 6.41671V17.4167C4.58325 17.9029 4.77641 18.3693 5.12022 18.7131C5.46404 19.0569 5.93036 19.25 6.41659 19.25H15.5833C16.0695 19.25 16.5358 19.0569 16.8796 18.7131C17.2234 18.3693 17.4166 17.9029 17.4166 17.4167V6.41671C17.4166 5.93048 17.2234 5.46416 16.8796 5.12034C16.5358 4.77653 16.0695 4.58337 15.5833 4.58337H13.7499"
        stroke="white"
        stroke-width="1.65"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9167 2.75H10.0833C9.07081 2.75 8.25 3.57081 8.25 4.58333C8.25 5.59586 9.07081 6.41667 10.0833 6.41667H11.9167C12.9292 6.41667 13.75 5.59586 13.75 4.58333C13.75 3.57081 12.9292 2.75 11.9167 2.75Z"
        stroke="white"
        stroke-width="1.65"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.25 11H13.75M8.25 14.6667H11.9167"
        stroke="white"
        stroke-width="1.65"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg> `,
    clock_svg: /* HTML */ `<svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_822_101)">
        <path
          d="M6.49992 11.9167C9.49146 11.9167 11.9166 9.49158 11.9166 6.50004C11.9166 3.5085 9.49146 1.08337 6.49992 1.08337C3.50838 1.08337 1.08325 3.5085 1.08325 6.50004C1.08325 9.49158 3.50838 11.9167 6.49992 11.9167Z"
          stroke="#B5963A"
          stroke-width="1.08333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.5 3.25V6.5L8.66667 7.58333"
          stroke="#B5963A"
          stroke-width="1.08333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_822_101">
          <rect width="13" height="13" fill="white" />
        </clipPath>
      </defs>
    </svg> `,
    lock_svg: /* HTML */ `<svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2917 5.95837H2.70833C2.11002 5.95837 1.625 6.4434 1.625 7.04171V10.8334C1.625 11.4317 2.11002 11.9167 2.70833 11.9167H10.2917C10.89 11.9167 11.375 11.4317 11.375 10.8334V7.04171C11.375 6.4434 10.89 5.95837 10.2917 5.95837Z"
        stroke="#B5963A"
        stroke-width="1.08333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.79175 5.95837V3.79171C3.79175 3.07341 4.07709 2.38454 4.585 1.87663C5.09291 1.36872 5.78179 1.08337 6.50008 1.08337C7.21838 1.08337 7.90725 1.36872 8.41516 1.87663C8.92307 2.38454 9.20841 3.07341 9.20841 3.79171V5.95837"
        stroke="#B5963A"
        stroke-width="1.08333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg> `,
    coupon_svg: /* HTML */ `<svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.08325 4.87504C1.51423 4.87504 1.92755 5.04625 2.2323 5.35099C2.53705 5.65574 2.70825 6.06906 2.70825 6.50004C2.70825 6.93102 2.53705 7.34434 2.2323 7.64909C1.92755 7.95384 1.51423 8.12504 1.08325 8.12504V9.20837C1.08325 9.49569 1.19739 9.77124 1.40055 9.97441C1.60372 10.1776 1.87927 10.2917 2.16659 10.2917H10.8333C11.1206 10.2917 11.3961 10.1776 11.5993 9.97441C11.8024 9.77124 11.9166 9.49569 11.9166 9.20837V8.12504C11.4856 8.12504 11.0723 7.95384 10.7675 7.64909C10.4628 7.34434 10.2916 6.93102 10.2916 6.50004C10.2916 6.06906 10.4628 5.65574 10.7675 5.35099C11.0723 5.04625 11.4856 4.87504 11.9166 4.87504V3.79171C11.9166 3.50439 11.8024 3.22884 11.5993 3.02567C11.3961 2.82251 11.1206 2.70837 10.8333 2.70837H2.16659C1.87927 2.70837 1.60372 2.82251 1.40055 3.02567C1.19739 3.22884 1.08325 3.50439 1.08325 3.79171V4.87504Z"
        stroke="#B5963A"
        stroke-width="1.08333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.04175 2.70837V3.79171M7.04175 9.20837V10.2917M7.04175 5.95837V7.04171"
        stroke="#B5963A"
        stroke-width="1.08333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg> `,
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

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function q(s, o) {
    return o ? s.querySelector(o) : document.querySelector(s);
  }

  function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  const layout = /* HTML */ ` <div class="ab-survey-container">
    <div class="ab-survey-top">
      <div class="ab-survey-icon">${ASSETS.note_svg}</div>
      <div class="ab-survey-text-block">
        <div class="ab-survey-title">
          Beantworten Sie 6 kurze Fragen & sparen Sie 10€ beim nächsten Einkauf.
        </div>
        <div class="ab-survey-subtitle">
          Ihre Meinung hilft uns, unseren Shop und Service weiter zu verbessern.
        </div>
      </div>
    </div>
    <div class="ab-survey-bottom">
      <div class="ab-survey-pill-block">
        <div class="ab-survey-pill-item">
          <div class="ab-survey-pill-icon">${ASSETS.clock_svg}</div>
          <div class="ab-survey-pill-text">4–6 Minuten</div>
        </div>
        <div class="ab-survey-pill-item">
          <div class="ab-survey-pill-icon">${ASSETS.lock_svg}</div>
          <div class="ab-survey-pill-text">100 % anonym</div>
        </div>
        <div class="ab-survey-pill-item">
          <div class="ab-survey-pill-icon">${ASSETS.coupon_svg}</div>
          <div class="ab-survey-pill-text">10 € Gutschein</div>
        </div>
      </div>
      <a
        target="_blank"
        href="https://forms.gle/WDTWE1R7jrBEaio68"
        class="ab-survey-cta"
        >Jetzt teilnehmen</a
      >
    </div>
  </div>`;

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      (window.innerWidth < 1024
        ? q(".az-countdown__banner")
        : q(".az-textblock.az-success-upgrade__text-block"))
    );
  }

  async function init() {
    try {
      await waitForElementAsync(checkForItems);

      if (window[page_initials] === true) return;

      window[page_initials] = true;

      q("body").classList.add(
        page_initials,
        `${page_initials}--v${test_variation}`,
        `${page_initials}--version:${test_version}`,
      );
      console.table(TEST_CONFIG);

      q("head").insertAdjacentHTML(
        "beforeend",
        /* HTML */ `
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
            rel="stylesheet"
          />
        `,
      );

      const isMobile = window.innerWidth < 1024;
      const targetNode = isMobile
        ? q(".az-countdown__banner")
        : q(".az-textblock.az-success-upgrade__text-block");

      if (isMobile) {
        targetNode.insertAdjacentHTML("beforebegin", layout);
      } else {
        const div = document.createElement("div");
        div.classList.add("ab-text-container");

        qq(".az-textblock.az-success-upgrade__text-block > *").forEach(
          (element) => {
            div.appendChild(element);
          },
        );

        targetNode.insertAdjacentElement("afterbegin", div);
        targetNode.insertAdjacentHTML("beforeend", layout);
      }
    } catch (error) {
      return false;
    }
  }

  function handleLocationChanges() {
    if (q(".ab-survey-container")) return;

    document.body.classList.remove(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = false;

    init();
  }

  function urlObserver() {
    const debouncedChanges = debounce(handleLocationChanges, 150);

    const originalPushState = history.pushState;
    history.pushState = function () {
      originalPushState.apply(history, arguments);
      window.dispatchEvent(new Event("pushstate"));
    };

    // Listen for back/forward button clicks
    window.addEventListener("popstate", function (event) {
      debouncedChanges();
    });

    window.addEventListener("pushstate", function () {
      debouncedChanges();
    });
  }

  urlObserver();
  init();
})();
