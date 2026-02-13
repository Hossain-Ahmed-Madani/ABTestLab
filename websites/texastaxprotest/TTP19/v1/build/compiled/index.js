/* 
Target URL's:
https://www.texastaxprotest.com

Figma: https://www.figma.com/design/Jb671zJS1JeGCuC0EiFyuh/TTP19---Header--Add-Sticky-CTA-to-Nav-Header?node-id=2001-905&t=BQzGzcgL7HY0pFpJ-0

Test container: https://marketer.monetate.net/control/a-7b7b9c2b/p/texastaxprotest.com/experience/2088290#c2622620:what

Preview:
control: 
v1: https://marketer.monetate.net/control/preview/12476/DI1X3YT5TON9R3CIXST9WNPPPDRQ4XIJ/19-header-add-sticky-cta-to-nav-header
v2: https://marketer.monetate.net/control/preview/12476/A04PNWHNAB7JRKXHJF890KU8198N8R1Z/19-header-add-sticky-cta-to-nav-header

Preview including all experiences:
control: 
v1: https://marketer.monetate.net/control/preview/12476/9VWFL0JC5QVN06Q3MMPGKRXCTAMMF0L4/19-header-add-sticky-cta-to-nav-header
v2: https://marketer.monetate.net/control/preview/12476/U7UQ3TYDM70J1GY5QANZF99KAOILTRQ7/19-header-add-sticky-cta-to-nav-header


*/

(async () => {
  const TEST_ID = "TTP19";
  const VARIANT_ID = "V1"; /* Control, V1, V2 */

  function logInfo(message) {
    console.log(
      `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
      "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
      "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
      message,
    );
  }

  logInfo("fired");

  const TEST_CONFIG = {
    client: "Acadia",
    project: "texastaxprotest",
    host: "https://www.texastaxprotest.com",
    test_name: "TTP19: [Header] Add Sticky CTA to Nav Header - (2) SET UP TEST",
    page_initials: "AB-TTP19",
    test_variation: 1 /* 0, 1, 2 */,
    test_version: 0.0002,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    sign_in_svg: /* HTML */ `<svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2001_612)">
        <path
          d="M6 0C4.25534 0 2.83594 1.4194 2.83594 3.16406C2.83594 4.90873 4.25534 6.32812 6 6.32812C7.74466 6.32812 9.16406 4.90873 9.16406 3.16406C9.16406 1.4194 7.74466 0 6 0Z"
          fill="#FC6A00"
        />
        <path
          d="M9.9367 8.3952C9.07045 7.51563 7.92209 7.03125 6.70312 7.03125H5.29688C4.07794 7.03125 2.92955 7.51563 2.0633 8.3952C1.20129 9.27045 0.726562 10.4258 0.726562 11.6484C0.726562 11.8426 0.883969 12 1.07812 12H10.9219C11.116 12 11.2734 11.8426 11.2734 11.6484C11.2734 10.4258 10.7987 9.27045 9.9367 8.3952Z"
          fill="#FC6A00"
        />
      </g>
      <defs>
        <clipPath id="clip0_2001_612">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg> `,
  };

  function fireGA4Event(eventName, eventLabel = "") {
    console.log("fireGA4Event:", eventName, eventLabel);

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

  function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
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

  const DATA = {
    1: {
      label: "Contact Us",
      link: "/#contact",
    },
    2: {
      label: "Get Started",
      link: "/#contact",
    },
  };

  const layout = /* HTML */ `
    <a
      href="https://client.texastaxprotest.com/login"
      target="_blank"
      class="ab-cta ab-sign-in-cta"
    >
      <span class="ab-sign-in-cta__icon">${ASSETS["sign_in_svg"]}</span>
      <span class="ab-cta__text ab-sign-in-cta__text">Sign In</span>
    </a>
    <a href="${DATA[test_variation].link}" class="ab-cta ab-contact-cta">
      <span class="ab-cta__text ab-contact-cta__text">
        ${DATA[test_variation].label}</span
      >
      <span class="ab-contact-cta__icon">→</span>
    </a>
  `;

  function updateLayout() {
    q("header .mantine-Group-root.mantine-visible-from-sm").insertAdjacentHTML(
      "afterend",
      `<div class="ab-cta-container ab-cta-container--mobile">${layout}</div>`,
    );
    q(
      "header a.mantine-focus-auto[href='https://client.texastaxprotest.com/login']",
    ).insertAdjacentHTML(
      "afterend",
      `<div class="ab-cta-container ab-cta-container--desktop">${layout}</div>`,
    );
  }

  function clickFunction() {
    // Variation
    qq(`.ab-cta`).forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const href = currentTarget.getAttribute("href");
        const target = currentTarget.getAttribute("target") ?? "_self";
        const label = q(currentTarget, "span.ab-cta__text").textContent;
        fireGA4Event("TTP19_headerCTAclicks", label);
        window.open(href, target);
      });
    });
  }

  function handleLocationChanges() {
    if (q(".ab-cta-container")) return;

    document.body.classList.remove(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = false;

    init_TTP19();
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
      console.log("==== < Navigation occurred (back/forward button) ====");
      debouncedChanges();
    });

    window.addEventListener("pushstate", function () {
      console.log("=== > History state was changed programmatically ===");
      debouncedChanges();
    });
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      document.readyState === "complete" &&
      q("header .mantine-Group-root.mantine-visible-from-sm") &&
      q(
        "header a.mantine-focus-auto[href='https://client.texastaxprotest.com/login']",
      )
    );
  }

  async function init_TTP19() {
    if (window[page_initials] === true) return;

    try {
      await waitForElementAsync(checkForItems);

      window[page_initials] = true;
      q("body").classList.add(
        page_initials,
        `${page_initials}--v${test_variation}`,
        `${page_initials}--version:${test_version}`,
      );

      console.log(TEST_CONFIG);

      updateLayout();
      clickFunction();
    } catch (error) {
      return false;
    }
  }

  init_TTP19();
  urlObserver();
})();
