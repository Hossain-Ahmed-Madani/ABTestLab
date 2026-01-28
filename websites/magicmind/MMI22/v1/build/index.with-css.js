(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-MMI22 .hm-v3-banner__btn {
  display: none;
}
.AB-MMI22 .ab-hero-micro-commitment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 29px;
}
.AB-MMI22 .ab-hero-micro-commitment__title {
  color: #000;
  text-align: center;
  font-family: CircularStd-Book, "sans-serif";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}
.AB-MMI22 .ab-hero-micro-commitment__cta-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}
.AB-MMI22 .ab-hero-micro-commitment__cta {
  border-radius: 5px;
  border: 1px solid rgba(3, 161, 136, 0.15);
  background: #fff;
  box-shadow: 0 10px 55px 0 rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  min-width: 275px;
  width: 100%;
  height: 60px;
  padding: 20px 20px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
}
.AB-MMI22 .ab-hero-micro-commitment__cta:hover,
.AB-MMI22 .ab-hero-micro-commitment__cta:focus {
  text-decoration: none;
}
.AB-MMI22 .ab-hero-micro-commitment__cta:hover:before,
.AB-MMI22 .ab-hero-micro-commitment__cta:focus:before {
  background: rgb(3, 161, 136);
}
.AB-MMI22 .ab-hero-micro-commitment__cta:before {
  content: "";
  width: 15px;
  min-width: 15px;
  height: 15px;
  min-height: 15px;
  border-radius: 50%;
  border: 2px solid rgb(3, 161, 136);
  background: #fff;
  transition: all 0.2s;
  margin-right: 5px;
  margin-top: -1.5px;
}
.AB-MMI22 .ab-hero-micro-commitment__cta-title {
  color: #000;
  font-family: CircularStd-Book, "sans-serif";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-self: center;
}
.AB-MMI22 .ab-hero-micro-commitment__cta-prefix {
  color: rgb(0, 0, 0);
  font-family:
    Circular Std,
    sans-serif;
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: 0px;
  align-self: center;
}
.AB-MMI22 .hm-v3-banner {
  min-height: 740px;
}
.AB-MMI22 .hm-v3-banner__wrapper {
  padding: 40px 20px;
  gap: 0;
}
.AB-MMI22 .hm-v3-banner__title {
  font-weight: 500;
  font-size: 42px;
  line-height: 48px;
  letter-spacing: -3px;
  text-align: center;
  color: rgb(0, 0, 0);
  margin-bottom: 35px !important;
}
.AB-MMI22 .hm-v3-banner__text {
  font-weight: 450;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: rgb(0, 0, 0);
  margin: 0;
  text-wrap: pretty;
  margin-bottom: 38px;
}
.AB-MMI22 .hm-v3-banner__text br {
  display: none;
}
@media screen and (min-width: 990px) {
  .AB-MMI22 .hm-v3-banner {
    min-height: 850px;
  }
  .AB-MMI22 .hm-v3-banner__wrapper {
    padding: 50px 0;
  }
  .AB-MMI22 .hm-v3-banner__title {
    font-weight: 500;
    font-size: 70px;
    line-height: 70px;
    letter-spacing: -3px;
    text-align: center;
    margin-bottom: 40px !important;
  }
  .AB-MMI22 .hm-v3-banner__text {
    font-weight: 450;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 40px;
  }
  .AB-MMI22 .hm-v3-banner__text br {
    display: block;
  }
}
@media screen and (min-width: 991px) {
  .AB-MMI22 .ab-hero-micro-commitment {
    gap: 41px;
  }
  .AB-MMI22 .ab-hero-micro-commitment__title {
    color: #000;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 150% */
  }
  .AB-MMI22 .ab-hero-micro-commitment__cta-container {
    flex-direction: row;
    gap: 20px;
  }
  .AB-MMI22 .ab-hero-micro-commitment__cta {
    min-width: 220px;
  }
  .AB-MMI22 .ab-hero-micro-commitment__cta:before {
    margin-right: 0;
  }
}

@media screen and (min-width: 991px) {
  .AB-MMI22.AB-MMI22--v3 .ab-hero-micro-commitment__cta {
    min-width: 275px;
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
Ticket: https://trello.com/c/dttpgBmS/4664-%F0%9F%92%9A%F0%9F%92%99-mmi22-home-add-micro-commitment-in-hero-2-set-up-test?search_id=4dae847e-f4e7-492b-b499-5bb3a4ade8a4
Figma: https://www.figma.com/design/wxDp7xjfq5OMEwIZ4PVDMk/MMI22---HOME--Add-Micro-Commitment-in-Hero?node-id=7-2&p=f&t=ZiZ5JhgqDaW0oehq-0

Test container: https://marketer.monetate.net/control/a-d6198f6f/p/magicmind.com/experience/2085745

Preview :
control: 
V1: 
V2:
V3:



Preview including all experiences:
control: 
V1: 
V2:
V3:
*/

const TEST_ID = "MMI22";
const VARIANT_ID = "V1"; /* Control, V1, V2, V3 */

function logInfo(message) {
  console.log(
    `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
    "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
    "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
    message,
  );
}

logInfo("fired");

(async () => {
  const TEST_CONFIG = {
    client: "Acadia",
    project: "magicmind",
    site_url: "https://magicmind.com",
    test_name: "MMI22: [HOME] Add Micro-Commitment in Hero (2) SET UP TEST",
    page_initials: "AB-MMI22",
    test_variation: 1 /* 0, 1, 2, 3 */,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  function fireGA4Event(eventName, eventLabel = "") {
    console.log("fireGA4Event", eventName, eventLabel);
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

  const DATA = {
    1: [
      {
        title: "No Caffeine",
        prefix: "",
        link: "https://magicmind.com/products/mental-performance-shot-free",
      },
      {
        title: "1-2 Cups of Coffee",
        prefix: "",
        link: "https://magicmind.com/products/mental-performance-shot-original",
      },
      {
        title: "3+ Cups of Coffee",
        prefix: "",
        link: "https://magicmind.com/products/mental-performance-shot-maxx",
      },
    ],
    2: [
      {
        title: "No Caffeine",
        prefix: "",
        link: "https://magicmind.com/products/mental-performance-shot-free",
      },
      {
        title: "Low Caffeine",
        prefix: "",
        link: "https://magicmind.com/products/mental-performance-shot-original",
      },
      {
        title: "High Caffeine",
        prefix: "",
        link: "https://magicmind.com/products/mental-performance-shot-maxx",
      },
    ],
    3: [
      {
        title: "No Caffeine",
        prefix: "(0 mg)",
        link: "https://magicmind.com/products/mental-performance-shot-free",
      },
      {
        title: "Low Caffeine",
        prefix: "(55 mg)",
        link: "https://magicmind.com/products/mental-performance-shot-original",
      },
      {
        title: "High Caffeine",
        prefix: "(165 mg)",
        link: "https://magicmind.com/products/mental-performance-shot-maxx",
      },
    ],
  };

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);

    const data = DATA[test_variation];

    q(".hm-v3-banner__btn").insertAdjacentHTML(
      "afterend" /* HTML */,
      `<div class="ab-hero-micro-commitment">
                <div class="ab-hero-micro-commitment__title">Choose your caffeine level:</div>
                <div class="ab-hero-micro-commitment__cta-container">
                    ${data
                      .map(
                        (item) => /* HTML */ `
                          <a
                            href="${item.link}"
                            class="ab-hero-micro-commitment__cta"
                          >
                            <span class="ab-hero-micro-commitment__cta-title"
                              >${item.title}</span
                            >
                            <span class="ab-hero-micro-commitment__cta-prefix"
                              >${item.prefix}</span
                            >
                          </a>
                        `,
                      )
                      .join("")}
                </div>
            </div>
        `,
    );

    qq(".ab-hero-micro-commitment__cta").forEach((item) =>
      item.addEventListener("click", (e) => {
        e.preventDefault();

        const currentItem = e.currentTarget;
        const title = q(
          currentItem,
          ".ab-hero-micro-commitment__cta-title",
        ).textContent;
        const link = currentItem.href;
        fireGA4Event("MMI22_CTAClick", title);

        setTimeout(() => {
          if (e.ctrlKey) {
            window.open(link, "_blank");
          } else {
            window.location.href = link;
          }
        }, 150);
      }),
    );
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) && q(".hm-v3-banner__btn")
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
