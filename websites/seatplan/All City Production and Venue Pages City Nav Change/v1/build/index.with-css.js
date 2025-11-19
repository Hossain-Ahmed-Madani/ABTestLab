(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-ECX-162-CITY-NAV main.body-content > .trust-bar,
.AB-ECX-162-CITY-NAV #page-wrap > .trust-bar {
  display: none;
}
.AB-ECX-162-CITY-NAV.venue-homepage-wrapper .ab-sub-nav {
  z-index: 1;
}
@media screen and (max-width: 950px) {
  .AB-ECX-162-CITY-NAV.venue-homepage-wrapper
    .city-nav__item:has(> .city-nav__link[href="/london/"]),
  .AB-ECX-162-CITY-NAV.venue-homepage-wrapper
    .city-nav__item:has(> .city-nav__link[href="/new-york/"]) {
    background-color: transparent;
  }
}
.AB-ECX-162-CITY-NAV .ab-sub-nav {
  width: 100%;
  background: #0576ae;
  color: #fff;
}
.AB-ECX-162-CITY-NAV .ab-sub-nav__container {
  height: 100%;
}
.AB-ECX-162-CITY-NAV .ab-sub-nav__list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-y: auto;
}
.AB-ECX-162-CITY-NAV .ab-sub-nav__list::-webkit-scrollbar {
  display: none;
}
.AB-ECX-162-CITY-NAV .ab-sub-nav__list--align-center {
  justify-content: center;
}
.AB-ECX-162-CITY-NAV .ab-sub-nav__item:last-child .ab-sub-nav__link {
  margin-right: 0;
}
.AB-ECX-162-CITY-NAV .ab-sub-nav__link {
  display: inline-block;
  text-decoration: none;
  border: none;
  color: #fff;
  font-size: 15px;
  line-height: 15px;
  padding: 15px 11px;
  margin-right: 13px;
  transition: all 0.2s ease-in-out;
}
.AB-ECX-162-CITY-NAV .ab-sub-nav__link:hover {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 7px;
}
.AB-ECX-162-CITY-NAV.AB-ECX-162-CITY-NAV--show-highlighted
  .city-nav__item:has(> .city-nav__link[href="/london/"]),
.AB-ECX-162-CITY-NAV.AB-ECX-162-CITY-NAV--show-highlighted
  .city-nav__item:has(> .city-nav__link[href="/new-york/"]) {
  background: #0576ae;
}
@media screen and (max-width: 539.5px) {
  .AB-ECX-162-CITY-NAV.AB-ECX-162-CITY-NAV--show-highlighted
    .city-nav__item
    > .city-nav__link[href="/london/"],
  .AB-ECX-162-CITY-NAV.AB-ECX-162-CITY-NAV--show-highlighted
    .city-nav__item
    > .city-nav__link[href="/new-york/"] {
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 0;
  }
}
.AB-ECX-162-CITY-NAV.venue-page-wrapper:not(.venue-homepage-wrapper)
  .city-nav__item:has(> .city-nav__link[href="/london/"]),
.AB-ECX-162-CITY-NAV.venue-page-wrapper:not(.venue-homepage-wrapper)
  .city-nav__item:has(> .city-nav__link[href="/new-york/"]) {
  background: none;
}
.AB-ECX-162-CITY-NAV
  .city-nav__item:has(> .city-nav__link[href*="whats-on/musicals/"]),
.AB-ECX-162-CITY-NAV
  .city-nav__item:has(> .city-nav__link[href*="whats-on/plays/"]),
.AB-ECX-162-CITY-NAV
  .city-nav__item:has(> .city-nav__link[href*="whats-on/christmas/"]),
.AB-ECX-162-CITY-NAV
  .city-nav__item:has(> .city-nav__link[href*="whats-on/kids/"]),
.AB-ECX-162-CITY-NAV
  .city-nav__item:has(> .city-nav__link.city-nav__link--for-dropdown-no-icon) {
  display: none;
}
@media screen and (max-width: 539.5px) {
  .AB-ECX-162-CITY-NAV .ab-sub-nav__container {
    padding-left: 0;
  }
  .AB-ECX-162-CITY-NAV
    .city-nav__list
    .city-nav__item:first-child
    .city-nav__link {
    margin-right: 0;
  }
}
@media screen and (min-width: 400px) {
  .AB-ECX-162-CITY-NAV .ab-sub-nav__list {
    justify-content: center;
    padding-right: 0;
  }
}
@media screen and (min-width: 651px) and (max-width: 768px) {
  .AB-ECX-162-CITY-NAV .city-nav__list {
    justify-content: flex-start;
  }
}
@media screen and (min-width: 991px) {
  .AB-ECX-162-CITY-NAV .ab-sub-nav__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .AB-ECX-162-CITY-NAV .ab-sub-nav__link {
    min-width: 100px;
    font-size: 16px;
    line-height: 16px;
    padding: 17px 20px;
    margin: auto;
    text-align: center;
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
/* 
Ticket: https://trello.com/c/lQarYbLO/4374-all-city-production-and-venue-pages-city-nav-change?filter=label%3ATeam+Titans

Container: https://app.convert.com/accounts/1004737/projects/1004631/experiences/1004176421/summary
v1: https://seatplan.com/london/?_conv_eforce=1004176421.1004415730&utm_campaign=qa5
v1 preview: https://seatplan.com/london/?convert_action=convert_vpreview&convert_e=1004176421&convert_v=1004415730

*/

(async () => {
  const TEST_CONFIG = {
    client: "SeatPlan",
    project: "SeatPlan",
    host: "https://seatplan.com",
    test_name: "All | City, Production and Venue Pages | City Nav Change",
    page_initials: "AB-ECX-162-CITY-NAV",
    test_variation: 1,
    test_version: 0.0003,
  };

  const { host, page_initials, test_variation, test_version } = TEST_CONFIG;

  const DATA = [
    {
      title: "Musicals",
      link: "whats-on/musicals/",
    },
    {
      title: "Plays",
      link: "whats-on/plays/",
    },
    {
      title: "Christmas",
      link: "whats-on/christmas/",
    },
    {
      title: "Kids",
      link: "whats-on/kids/",
    },
    {
      title: "Opera",
      link: "whats-on/opera/",
    },
  ];

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

  function getCityFromDataLayer() {
    const pageViewEvent = window?.dataLayer.find(
      (item) =>
        item?.eventName === "page_view" && item?.eventPayload?.content_city,
    );
    return (
      pageViewEvent?.eventPayload?.content_city
        .toLowerCase()
        .replace(" ", "-") || null
    );
  }

  function isTargetCityUrl() {
    const CITY_URL_REGEX =
      /^https?:\/\/(?:www\.)?seatplan\.com\/(london|new\-york)(?:\/(?:whats-on(?:\/(?:musicals|plays|christmas|kids|opera))?)?)?(?:\/)?(?:\?.*)?$/;
    try {
      return CITY_URL_REGEX.test(window.location.href);
    } catch (e) {
      return false;
    }
  }

  function createLayout() {
    const city = getCityFromDataLayer();
    if (!city) return;

    q(".city-nav__list").insertAdjacentHTML(
      "beforeend",
      /* HTML */ `
        <li class="city-nav__item">
          <a
            class="city-nav__link"
            href="${host}/${city}/venues/"
            data-js="city-nav-city-link"
            >Theatres</a
          >
        </li>
        <li class="city-nav__item">
          <a
            class="city-nav__link"
            href="${host}/${city}/news/"
            data-js="city-nav-city-link"
            >News</a
          >
        </li>
      `,
    );

    if (!isTargetCityUrl()) return;

    q("body").classList.add(page_initials + "--show-highlighted");

    q(".city-nav").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="ab-sub-nav">
          <div class="ab-sub-nav__container container">
            <ul
              class="ab-sub-nav__list ${city !== "london"
                ? "ab-sub-nav__list--align-center"
                : ""}"
            >
              ${DATA.map(({ title, link }) => {
                if (
                  city !== "london" &&
                  (link.includes("christmas") || link.includes("opera"))
                ) {
                  return "";
                }

                return /* HTML */ `
                  <li class="ab-sub-nav__item">
                    <a class="ab-sub-nav__link" href="${host}/${city}/${link}"
                      >${title}</a
                    >
                  </li>
                `;
              }).join("")}
            </ul>
          </div>
        </div>
      `,
    );
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);
    createLayout();
  }

  function checkForItems() {
    return !!(
      window?.dataLayer.some(
        (item) =>
          item?.eventName === "page_view" && item?.eventPayload?.content_city,
      ) &&
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) &&
      q(".city-nav")
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
    return true;
  } catch (error) {
    console.warn(error);
    return false;
  }
})();
