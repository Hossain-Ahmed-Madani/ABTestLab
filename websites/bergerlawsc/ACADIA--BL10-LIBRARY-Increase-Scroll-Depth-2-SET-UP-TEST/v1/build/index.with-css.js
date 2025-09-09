(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-BL10 .ab-scroll-and-table-contents {
  background: #f2f5f7;
  padding-bottom: 15px;
  height: 72px;
  min-height: 72px;
  position: relative;
  z-index: -1;
}
.AB-BL10 .ab-scroll-container {
  width: 100%;
  height: 3px;
  background-color: #e4cec8;
  position: relative;
}
.AB-BL10 .ab-scroll-container:after {
  content: "";
  background-color: #933a25;
  position: absolute;
  left: 0;
  height: 3px;
  top: 0;
  width: 0;
  transition: all 0.3s ease-in-out;
}
.AB-BL10 .ab-scroll-container[data-scroll="25"]::after {
  width: 25%;
}
.AB-BL10 .ab-scroll-container[data-scroll="50"]::after {
  width: 50%;
}
.AB-BL10 .ab-scroll-container[data-scroll="75"]::after {
  width: 75%;
}
.AB-BL10 .ab-scroll-container[data-scroll="100"]::after {
  width: 100%;
}
.AB-BL10 .ab-table-contents-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-BL10 .ab-table-contents-title {
  color: #0a1d35;
  text-align: right;
  font-family: quasimoda, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #0a1d35;
  display: none;
}
.AB-BL10 .ab-table-content-selection {
  width: 363px;
  max-width: 363px;
  height: 35px;
  margin-top: 12px;
  position: relative;
}
.AB-BL10
  .ab-table-content-selection[data-state="closed"]
  .ab-table-content-list {
  display: none !important;
}
.AB-BL10
  .ab-table-content-selection[data-state="opened"]
  .ab-table-content-selected-item {
  display: none !important;
}
.AB-BL10 .ab-table-content-selected-item {
  border-radius: 5px;
  border: 1px solid #e8e5de;
  background: #fff;
  padding: 13px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  color: #933a25;
  font-family: quasimoda, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: all 0.3s ease-in-out;
}
.AB-BL10 .ab-table-content-selected-item:after {
  content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none"><path d="M0 0.904462L0.976248 0L5.50001 4.19107L10.0238 0L11 0.904462L5.50001 6L0 0.904462Z" fill="%23003764"/></svg>');
  display: flex;
  justify-content: center;
  align-self: center;
  margin-left: auto;
}
.AB-BL10 .ab-table-content-list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 5px;
  border: 1px solid #e8e5de;
  background: #fff;
  box-shadow: 0 15px 50px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;
}
.AB-BL10 .inner.mobile-open .ab-scroll-and-table-contents {
  z-index: -1;
}
.AB-BL10 .ab-table-content-list .ab-table-content-item {
  padding: 13px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  color: #333;
  font-family: quasimoda, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  margin-bottom: 0;
}
.AB-BL10 .ab-table-content-list .ab-table-content-item:hover,
.AB-BL10 .ab-table-content-list .ab-table-content-item[selected] {
  color: #933a25;
}
.AB-BL10 .ab-table-content-list .ab-table-content-item:first-child::after {
  content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none"><path d="M0 5.09554L0.976248 6L5.50001 1.80893L10.0238 6L11 5.09554L5.50001 4.76837e-07L0 5.09554Z" fill="%23003764"/></svg>');
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-self: center;
  align-self: center;
}
.AB-BL10 .ab-table-content-list .ab-table-content-item:not(:last-child) {
  border-bottom: 1px solid #e8e5de;
}
@media screen and (min-width: 991px) {
  .AB-BL10 .ab-scroll-and-table-contents {
    height: 60px;
    margin-top: -1px;
    padding-top: 7px;
    padding-bottom: 13px;
  }
  .AB-BL10 .ab-scroll-container {
    height: 5px;
  }
  .AB-BL10 .ab-scroll-container:after {
    height: 5px;
  }
  .AB-BL10 .ab-table-contents-title {
    display: block;
  }
  .AB-BL10 .ab-table-contents-container {
    justify-content: flex-end;
    gap: 20px;
  }
  .AB-BL10 .ab-table-content-selection {
    margin-top: 0;
  }
  .AB-BL10 .ab-table-content-list {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}

@media screen and (max-width: 859px) {
  html:not(.mobile-open) .AB-BL10 #top-header.top-header-1 {
    overflow: visible;
  }
  .AB-BL10 .sticky-on-scroll {
    display: none !important;
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
https://www.figma.com/design/gRstDeTcFaKxrCReVHbMeh/BL-10-Blog-Work?node-id=26-2&p=f&t=g7MMjZOYSByPG8s3-0
https://www.bergerlawsc.com/library/10-ways-sc-buses-must-be-maintained-for-child-safety.cfm

*/

(() => {
  const TEST_CONFIG = {
    client: "Acadia",
    project: "bergerlawsc",
    site_url: "https://www.bergerlawsc.com/",
    test_name: "BL10: [LIBRARY] Increase Scroll Depth-(2) SET UP TEST",
    page_initials: "AB-BL10",
    test_variation: 1,
    test_version: 0.0001,
  };

  function fireGA4Event(eventName, eventLabel = "") {
    console.log(`BL10: Firing GA4 Event: ${eventName} - ${eventLabel}`);

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

  function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
    if (timer <= 0) {
      console.warn(
        `Timeout reached while waiting for condition: ${predicate.toString()}`,
      );
    } else if (predicate && predicate()) {
      callback();
    } else {
      setTimeout(
        () => waitForElement(predicate, callback, timer - frequency, frequency),
        frequency,
      );
    }
  }

  function createTableOfContents() {
    const initialText = document
      .querySelector(".dss-content h3:first-of-type")
      .textContent.split(".")[1];

    return /* HTML */ `
      <div class="ab-table-contents-container container">
        <div class="ab-table-contents-title">Table of Contents</div>
        <div class="ab-table-content-selection" data-state="closed">
          <div class="ab-table-content-selected-item">
            <span>1.1</span>
            <span>${initialText}</span>
          </div>
          <ul class="ab-table-content-list">
            ${Array.from(document.querySelectorAll(".dss-content h3"))
              .map((item, index) => {
                item.setAttribute("id", `section-${index + 1}`);
                const txt = item.textContent.split(".")[1];

                return /* HTML */ `
                  <li
                    targetH3="#section-${index + 1}"
                    class="ab-table-content-item"
                    ${index === 0 ? "selected" : ""}
                  >
                    <span>1.${index + 1}</span>
                    <span>${txt}</span>
                  </li>
                `;
              })
              .join("")}
          </ul>
        </div>
      </div>
    `;
  }

  function createLayout() {
    document.querySelector("#nav").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="ab-scroll-and-table-contents">
          <div class="ab-scroll-container" data-scroll="25"></div>
          ${document.querySelectorAll(".dss-content h3").length > 0
            ? createTableOfContents()
            : ""}
        </div>
      `,
    );
  }

  function handleScroll() {
    waitForElement(
      () => document.querySelector(".ab-scroll-container"),
      () => {
        const targetNode = document.querySelector(".ab-scroll-container");

        const milestones = [25, 50, 75, 100]; // scroll checkpoints

        function getScrollPercent() {
          const scrollTop =
            window.scrollY || document.documentElement.scrollTop;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          return (scrollTop / docHeight) * 100;
        }

        function closestMilestone(percent) {
          return milestones.reduce(
            (prev, curr) => (percent >= curr ? curr : prev),
            0,
          );
        }

        let milestone_reached = {
          25: false,
          50: false,
          75: false,
          100: false,
        };

        window.addEventListener("scroll", () => {
          const percent = getScrollPercent();
          const milestone = closestMilestone(percent);

          if (milestone >= 25) {
            targetNode.setAttribute("data-scroll", milestone);
          }

          // Fire GA4 event when a new milestone is reached
          if (milestone === 25 && !milestone_reached[25]) {
            milestone_reached[25] = true;
            fireGA4Event("BL10_Scrolldepth", "25%");
          } else if (milestone === 50 && !milestone_reached[50]) {
            fireGA4Event("BL10_Scrolldepth", "50%");
            milestone_reached[50] = true;
          } else if (milestone === 75 && !milestone_reached[75]) {
            fireGA4Event("BL10_Scrolldepth", "75%");
            milestone_reached[75] = true;
          } else if (milestone === 100 && !milestone_reached[100]) {
            fireGA4Event("BL10_Scrolldepth", "100%");
            milestone_reached[100] = true;
          }
        });
      },
    );
  }

  function handleSelectionTableInteraction() {
    waitForElement(
      () =>
        !!(
          document.querySelector(".ab-scroll-and-table-contents") &&
          document.querySelector(".ab-table-content-selection")
        ),
      () => {
        // PREVENT LOADING THE LINK
        document
          .querySelector(".ab-scroll-and-table-contents")
          .addEventListener("click", (e) => e.preventDefault());

        // HANDLE MOUSE ENTER AND LEAVE EVENTS
        const selectionContainer = document.querySelector(
          ".ab-table-content-selection",
        );

        selectionContainer.addEventListener("mouseenter", (e) => {
          selectionContainer.setAttribute("data-state", "opened");
        });
        selectionContainer.addEventListener("mouseleave", (e) => {
          selectionContainer.setAttribute("data-state", "closed");
        });

        // HANDLE CLICK ON ITEMS
        document
          .querySelector(".ab-table-content-selection")
          .addEventListener("click", (e) => {
            if (e.target.closest(".ab-table-content-selected-item")) {
              selectionContainer.setAttribute("data-state", "opened");
              return;
            }

            if (e.target.closest(".ab-table-content-item[selected]")) {
              setTimeout(() => {
                selectionContainer.setAttribute("data-state", "closed");
              }, 50);
            }

            if (e.target.closest(".ab-table-content-item:not([selected])")) {
              document
                .querySelectorAll(".ab-table-content-item")
                .forEach((el) => el.removeAttribute("selected"));

              const item = e.target.closest(".ab-table-content-item");
              item.setAttribute("selected", "true");
              document.querySelector(
                ".ab-table-content-selected-item",
              ).innerHTML = item.innerHTML;

              setTimeout(() => {
                // if (window.innerWidth < 991) {
                selectionContainer.setAttribute("data-state", "closed");
                // }
              }, 50);

              // SCROLL TO THE TARGET H3
              const targetH3 = item.getAttribute("targetH3");
              const targetElement = document.querySelector(targetH3);

              const headerOffsetObj = {
                "(max-width: 575px)": 200,
                "(min-width: 576px) and (max-width: 991px)": 230,
                "(min-width: 992px)": 150,
              };

              const matchingQuery = Object.keys(headerOffsetObj).find(
                (mediaQuery) => window.matchMedia(mediaQuery).matches,
              );
              const headerOffset = matchingQuery
                ? headerOffsetObj[matchingQuery]
                : 150;

              window.scrollTo({
                top: targetElement.offsetTop - headerOffset,
                behavior: "smooth",
              });

              fireGA4Event("BL10_Tableofcontent", targetElement.textContent);
            }
          });
      },
    );
  }

  function init() {
    console.table(TEST_CONFIG);

    const { page_initials, test_variation, test_version } = TEST_CONFIG;
    document.body.classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    createLayout();
    handleScroll();
    handleSelectionTableInteraction();
  }

  function hasAllTargetElements() {
    return !!(
      window.location.href.includes("/library/") &&
      document.querySelector(
        `body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`,
      ) &&
      document.querySelector("#nav") &&
      document.querySelector(".dss-content h3")
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
