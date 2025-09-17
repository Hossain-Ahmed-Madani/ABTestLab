(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-BL10 .ab-scroll-and-table-contents {
  background: #f2f5f7;
  padding-bottom: 15px;
  position: relative;
  z-index: -1;
}
.AB-BL10
  .ab-scroll-and-table-contents.ab-scroll-and-table-contents--only-scroll {
  padding-top: 0;
  padding-bottom: 0;
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
  line-height: 22px;
  color: #0a1d35;
  display: none;
}
.AB-BL10 .ab-table-content-selection {
  width: 363px;
  max-width: 363px;
  min-height: 42px;
  margin-top: 12px;
  position: relative;
  user-select: none;
}
.AB-BL10
  .ab-table-content-selection[data-state="closed"]
  .ab-table-content-list {
  display: none !important;
}
.AB-BL10
  .ab-table-content-selection[data-state="opened"]
  .ab-table-content-selected-item {
  opacity: 0;
  visibility: hidden !important;
  z-index: -1;
  position: relative;
}
.AB-BL10 .ab-table-content-selected-item {
  border-radius: 5px;
  border: 1px solid #e8e5de;
  background: #fff;
  padding: 13px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  color: #933a25;
  font-family: quasimoda, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
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
  max-height: 75vh;
  overflow-y: auto;
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
  line-height: 22px;
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
.AB-BL10 .ab-ellipsis-two-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media screen and (min-width: 991px) {
  .AB-BL10 .ab-scroll-and-table-contents {
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
    overflow-y: auto;
  }
  .AB-BL10 .ab-table-content-list {
    max-height: 85vh;
  }
}
@media screen and (min-width: 1200px) {
  .AB-BL10 #ela-main_nav-link-library {
    height: 43px;
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
https://www.bergerlawsc.com/library/in-the-news.cfm


control: https://marketer.monetate.net/control/preview/13087/MBIJ7YMOZCKELA62TQTKUF1AFBG8XHO8/bl10-library-increase-scroll-depth
v1: https://marketer.monetate.net/control/preview/13087/8BFQHTP8MRVUPUZGCXLDWN9MGW8P6JUE/bl10-library-increase-scroll-depth
*/

(() => {
  const TEST_CONFIG = {
    page_initials: "AB-BL10",
    test_variation: 1,
    test_version: 0.0006,
  };

  function fireGA4Event(eventName, eventLabel = "") {
    console.log("BL10: ", eventName, eventLabel);
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
      return;
    } else if (predicate && predicate()) {
      callback();
    } else {
      setTimeout(
        () => waitForElement(predicate, callback, timer - frequency, frequency),
        frequency,
      );
    }
  }

  function q(s, o) {
    return document.querySelector(s);
  }
  function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  function createTableOfContents() {
    const foundNodes = qq(".dss-content h2, .dss-content h3").filter(
      (cItem) => cItem.textContent.trim().length > 0,
    );

    const firstChild = foundNodes[0];
    const initialText =
      firstChild.textContent.split(".")?.[1] || firstChild.textContent;

    return /* HTML */ `
      <div class="ab-table-contents-container container">
        <div class="ab-table-contents-title">Table of Contents</div>
        <div class="ab-table-content-selection" data-state="closed">
          <div class="ab-table-content-selected-item">
            <span>1.1</span>
            <span class="ab-ellipsis-two-lines">${initialText}</span>
          </div>
          <ul class="ab-table-content-list">
            ${Array.from(foundNodes)
              .map((item, index) => {
                item.setAttribute("id", `section-${index + 1}`);
                const txt = item.textContent.split(".")[1] || item.textContent;

                return /* HTML */ `
                  <li
                    targetH3="#section-${index + 1}"
                    class="ab-table-content-item"
                    ${index === 0 ? "selected" : ""}
                  >
                    <span>1.${index + 1}</span>
                    <span class=" ab-ellipsis-two-lines">${txt}</span>
                  </li>

                  ${foundNodes.length === 1
                    ? /* HTML */ `
                        <li
                          targetH3="#section-${index + 1}"
                          class="ab-table-content-item"
                        >
                          <span>1.${index + 1}</span>
                          <span class=" ab-ellipsis-two-lines">${txt}</span>
                        </li>
                      `
                    : ""}
                `;
              })
              .join("")}
          </ul>
        </div>
      </div>
    `;
  }

  function createLayout() {
    const totalHeaders = qq(".dss-content h2, .dss-content h3").reduce(
      (acc, cItem) => {
        if (cItem.textContent.trim().length > 0) {
          return acc + 1; // Only count if has text content
        }
        return acc;
      },
      0,
    );

    q("#nav").insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div
          class="ab-scroll-and-table-contents ${totalHeaders > 0
            ? ""
            : "ab-scroll-and-table-contents--only-scroll"}"
        >
          <div class="ab-scroll-container" data-scroll="25"></div>
          ${qq(".dss-content h2, .dss-content h3").length > 0
            ? createTableOfContents()
            : ""}
        </div>
      `,
    );
  }

  function getHeaderOffset() {
    const headerOffsetObj = {
      "(max-width: 575px)": 200,
      "(min-width: 576px) and (max-width: 991px)": 230,
      "(min-width: 992px)": 150,
    };

    const matchingQuery = Object.keys(headerOffsetObj).find(
      (mediaQuery) => window.matchMedia(mediaQuery).matches,
    );
    return matchingQuery ? headerOffsetObj[matchingQuery] : 150;
  }

  // Window Scroll
  function ga4ScrollGoalFunctions() {
    const milestones = [25, 50, 75, 100]; // scroll checkpoints
    let lastMilestone = null; // track last milestone crossed

    const getScrollPercent = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      return (scrollTop / docHeight) * 100;
    };

    const closestMilestone = (percent) => {
      // find the closest milestone user has passed
      return milestones.reduce(
        (prev, curr) => (percent >= curr ? curr : prev),
        0,
      );
    };

    const handleScrollGa4Goal = () => {
      const percent = getScrollPercent();
      const milestone = closestMilestone(percent);

      if (milestone !== lastMilestone && milestone !== 0) {
        if (lastMilestone !== null) {
          console.log(`User moved from ${lastMilestone}% → ${milestone}%`);
        }
        lastMilestone = milestone;
      }

      if (milestone === 25) {
        fireGA4Event("BL10_Scrolldepth", "25%");
      } else if (milestone === 50) {
        fireGA4Event("BL10_Scrolldepth", "50%");
      } else if (milestone === 75) {
        fireGA4Event("BL10_Scrolldepth", "75%");
      } else if (milestone === 100) {
        fireGA4Event("BL10_Scrolldepth", "100%");
      }
    };

    return { handleScrollGa4Goal };
  }

  // .dss-content Scroll
  function getMileStoneFunctions(targetElement) {
    const milestones = [25, 50, 75, 100];

    const getScrollPercent = () => {
      if (!targetElement) return 0;

      targetElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const elementTop = targetElement.offsetTop;
      const elementHeight = targetElement.offsetHeight;
      const elementBottom = elementTop + elementHeight;

      // When element starts entering viewport (top of element touches bottom of viewport)
      const startScrollPoint = elementTop - windowHeight;

      // When element is fully scrolled (bottom of element reaches top of viewport)
      const endScrollPoint = elementBottom - windowHeight;

      // Current scroll position
      const currentScroll = scrollTop;

      // Calculate percentage
      let percentage = 0;

      if (currentScroll <= startScrollPoint) {
        // Not reached yet
        percentage = 0;
      } else if (currentScroll >= endScrollPoint) {
        // Fully scrolled through the element
        percentage = 100;
      } else {
        // In progress
        const totalScrollRange = endScrollPoint - startScrollPoint;
        const scrolledThrough = currentScroll - startScrollPoint;
        percentage = (scrolledThrough / totalScrollRange) * 100;
      }

      return Math.min(Math.max(percentage, 0), 100);
    };

    const closestMilestone = (percent) => {
      return milestones.reduce(
        (prev, curr) => (percent >= curr ? curr : prev),
        25,
      );
    };

    return { getScrollPercent, closestMilestone };
  }

  function updateProgressBar() {
    const selector = ".ab-scroll-container";
    const targetNode = q(selector);
    const sectionToTrack = q(".main-content .dss-content");

    if (!sectionToTrack) return;

    const { getScrollPercent, closestMilestone } =
      getMileStoneFunctions(sectionToTrack);
    const percent = getScrollPercent();
    const milestone = closestMilestone(percent);

    // Store milestones in a persistent variable
    if (typeof window.scrollMilestones === "undefined") {
      window.scrollMilestones = { 25: false, 50: false, 75: false, 100: false };
    }

    // Ensure milestone never goes below 25
    const finalMilestone = Math.max(milestone, 25);

    // Update progress bar
    targetNode.setAttribute("data-scroll", finalMilestone);

    // Fire GA4 event when a new milestone is reached
    if (finalMilestone === 25 && !window.scrollMilestones[25]) {
      window.scrollMilestones[25] = true;
    } else if (finalMilestone === 50 && !window.scrollMilestones[50]) {
      window.scrollMilestones[50] = true;
    } else if (finalMilestone === 75 && !window.scrollMilestones[75]) {
      window.scrollMilestones[75] = true;
    } else if (finalMilestone === 100 && !window.scrollMilestones[100]) {
      window.scrollMilestones[100] = true;
    }
  }

  function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  function handleScrollEvent() {
    const selector = ".ab-scroll-container";
    const { handleScrollGa4Goal } = ga4ScrollGoalFunctions();
    waitForElement(
      () => q(selector),
      () => {
        const throttledScrollHandler = throttle(updateProgressBar, 50);
        window.addEventListener("scroll", (e) => {
          handleScrollGa4Goal();
          throttledScrollHandler();
        });
      },
    );
  }

  function scrollToTargetItem(selector) {
    if (!selector) return;

    const targetElement = q(selector);
    const headerOffset = getHeaderOffset();

    window.scrollTo({
      top: targetElement.offsetTop - headerOffset,
      behavior: "smooth",
    });

    fireGA4Event("BL10_Tableofcontent", targetElement.textContent);

    setTimeout(() => true, 1500);
  }

  function handleShowHideSelection(action /* show, hide */) {
    const selectionContainer = q(".ab-table-content-selection");
    if (action === "show") {
      selectionContainer.setAttribute("data-state", "opened");
    } else if (action === "hide") {
      selectionContainer.setAttribute("data-state", "closed");
    }
  }

  function eventListeners() {
    const event_list = [
      {
        selector: ".ab-scroll-and-table-contents",
        event: "click",
        callback: (e) => e.preventDefault(),
      },
      {
        selector: ".ab-table-content-selection",
        event: "mouseenter",
        callback: (e) => {
          if (window.innerWidth >= 1200) {
            handleShowHideSelection("show");
          }
        },
      },
      {
        selector: ".ab-table-content-selection",
        event: "mouseleave",
        callback: (e) => {
          if (window.innerWidth >= 1200) {
            handleShowHideSelection("hide");
          }
        },
      },
      {
        selector: "body",
        event: "click",
        callback: (e) => {
          if (window.innerWidth >= 1200) {
            return;
          }

          if (!e.target.closest(".ab-table-content-selection")) {
            handleShowHideSelection("hide");
          }
        },
      },
      {
        selector: ".ab-table-content-selected-item",
        event: "click",
        callback: (e) => {
          const selectionContainer = q(".ab-table-content-selection");
          if (selectionContainer.getAttribute("data-state") === "closed") {
            handleShowHideSelection("show");
          }
          // if (window.innerWidth < 1200) handleShowHideSelection("show");
        },
      },
      {
        selector: ".ab-table-content-item",
        event: "click",
        callback: (e) => {
          if (e.target.hasAttribute("selected")) {
            setTimeout(() => handleShowHideSelection("hide"), 50);
            return;
          }

          if (!e.target.hasAttribute("selected")) {
            q(".ab-table-content-selection");
            const arr = [...qq(".ab-table-content-item")];
            const selectedItem = q(".ab-table-content-item[selected]");
            const cItem = e.target.closest(".ab-table-content-item");

            if (arr.indexOf(cItem) === 0 && !e.target.closest("span")) {
              handleShowHideSelection("hide");
              return;
            }

            if (
              selectedItem.getAttribute("targeth3") !==
              cItem.getAttribute("targeth3")
            ) {
              arr.forEach((el) => el.removeAttribute("selected"));
              cItem.setAttribute("selected", "true");
              q(".ab-table-content-selected-item").innerHTML = cItem.innerHTML;
            }

            handleShowHideSelection("hide");
            scrollToTargetItem(cItem.getAttribute("targetH3"));
          }
        },
      },
    ];

    event_list.forEach(({ selector, event, callback }) => {
      waitForElement(
        () => selector && qq(selector).length > 0,
        () => {
          const targetNodes = qq(selector);
          targetNodes.forEach((node) => node.addEventListener(event, callback));
        },
      );
    });
  }

  function init() {
    const { page_initials, test_variation, test_version } = TEST_CONFIG;
    document.body.classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    createLayout();
    eventListeners();
    handleScrollEvent();
  }

  function hasAllTargetElements() {
    return !!(
      q(
        `body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`,
      ) &&
      q("#nav") &&
      q(".dss-content")
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
