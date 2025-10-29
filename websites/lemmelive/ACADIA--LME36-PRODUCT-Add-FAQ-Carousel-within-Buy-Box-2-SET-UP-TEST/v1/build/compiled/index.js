/* 

TEST INFO:
    Ticket: https://trello.com/c/RTPTT3Iq/4221-%F0%9F%92%99-lme36-product-add-faq-carousel-within-buy-box-2-set-up-test
    Test Data: https://docs.google.com/spreadsheets/d/12Xw4gg-15vp-CJ3IMeJ_0mmgYMcC73S_OEGfExADDRk/edit?gid=0#gid=0
    Figma: https://www.figma.com/design/KIxYJABuvWotw6vOTpc0Eo/LME36?node-id=17-2163&t=bry8ux3vKRhJ2kjG-0


    Container: https://marketer.monetate.net/control/a-2087c1e5/p/lemmelive.com/experience/2054686#c2580323:what
    Preview will all experiences: 
        v1: https://marketer.monetate.net/control/preview/12706/9LOM92CSKSEXMWJEIRIO0K0VOU3GF0B8/lme36-product-add-faq-carousel-within-buy-box
        v2: https://marketer.monetate.net/control/preview/12706/61JXRF7AH0M49JYIO54464HI80UMB624/lme36-product-add-faq-carousel-within-buy-box

    Target urls:
        https://lemmelive.com/collections/all/products/lemme-glp-1
        https://lemmelive.com/collections/all/products/lemme-play-gummies?variant=46734032273622
        https://lemmelive.com/collections/all/products/purr
        https://lemmelive.com/collections/all/products/lemme-greens-gummies
*/

const TEST_ID = "LME36";
const VARIANT_ID = "V1"; /* V1, V2 */

function logInfo(message) {
  console.log(
    `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
    "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
    "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
    message,
  );
}

logInfo("fired");

(() => {
  const TEST_CONFIG = {
    client: "Acadia",
    project: "Lemmelive",
    site_url: "https://lemmelive.com/",
    test_name:
      "LME36: [PRODUCT] Add FAQ Carousel within Buy Box - (2) SET UP TEST",
    page_initials: "LME36",
    test_variation: 1,
    test_version: 0.0003,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    star_svg: /* HTML */ `<svg
      role="img"
      aria-label="Sparkle Icon"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80 40C45.7139 43.1559 41.4122 45.7145 27.7955 80C35.1003 45.713 34.2861 43.1559 0 40C34.2861 36.8441 38.5878 34.2855 52.2045 0C44.8997 34.2855 45.7139 36.8441 80 40Z"
        fill="#000000"
      ></path>
    </svg>`,
    close_svg: /* HTML */ `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <path
          d="M14.7918 1.67725L13.3231 0.208496L7.50016 6.03141L1.67725 0.208496L0.208496 1.67725L6.03141 7.50016L0.208496 13.3231L1.67725 14.7918L7.50016 8.96891L13.3231 14.7918L14.7918 13.3231L8.96891 7.50016L14.7918 1.67725Z"
          fill="black"
        />
      </svg>
    `,
  };

  const DATA = {
    "GLP-1": [
      {
        title: "Are these clinically studied?",
        description:
          "Lemme GLP-1 Daily™ is formulated with 3 clinically-studied and patented ingredients: SupresaTM Saffron extract, MorosilTM Red Orange Fruit Extract, and Eriomin® Lemon Fruit Extract.",
      },
      {
        title: "Are there any side effects?",
        description:
          "There may be an adjustment period when starting a new supplement. If you experience symptoms that are concerning to you or do not resolve, please consult your healthcare provider.",
      },
      {
        title: "How long should these be taken?",
        description:
          "GLP-1 DailyTM is a daily supplement and can be taken for as long as you experience benefits. For best results, we recommend 3-6 months of consistent daily use.",
      },
    ],
    Play: [
      {
        title: "Are these clinically studied?",
        description:
          "Lemme Play is formulated with clinically-studied S7® Complex, a blend of seven plant-based ingredients shown in a clinical study to promote healthy blood flow and support nitric oxide levels.* Additionally, these gummies are formulated with Maca Root, Horny Goat Weed and Organic Ginger Root.",
      },
      {
        title: "Are these vegetarian?",
        description: "Yes, Lemme Play is vegetarian.",
      },
      {
        title: "Are these gluten-free?",
        description: "Yes, Lemme Play is gluten-free.",
      },
    ],
    Purr: [
      {
        title: "Are these gummies clinically studied?",
        description:
          "Lemme Purr is formulated with a clinically-studied dose of SNZ 1969™ probiotics, demonstrated to support vaginal health.* Additionally, our gummies include 100 mg of real Pineapple Extract (per serving) and antioxidant Vitamin C.",
      },
      {
        title: "Are these vegetarian?",
        description: "Yes, Lemme Purr is vegetarian.",
      },
      {
        title: "Are these gluten-free?",
        description: "Yes, Lemme Purr is gluten-free.",
      },
    ],
    Greens: [
      {
        title: "Are these vegetarian?",
        description: "Yes, Lemme Greens are vegetarian.",
      },
      {
        title: "Are these gluten-free?",
        description: "Yes, Lemme Greens are gluten-free.",
      },
      {
        title: "Are these clinically studied?",
        description:
          "Lemme Greens is formulated with clinically-studied probiotic MTCC 5724, shown to support digestive health, help balance gut flora, and combat bloating.* Additionally, these gummies are made with our Organic Greens Superfood Complex and our Superfruit Antioxidant Support Complex with 20+ fruits and vegetables to support overall wellness from within.*",
      },
    ],
  };

  const STATE = {
    previouslyClickedTabElement: null,
    faqActive: true,
  };

  function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
    if (timer <= 0) {
      console.warn(
        `Timeout reached while waiting for condition: ${predicate.toString()}`,
      );
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
    return o ? s.querySelector(o) : document.querySelector(s);
  }

  function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  function getFaqData() {
    const currentPath = window.location.pathname;
    const foundKey = Object.keys(DATA).find((key) =>
      currentPath.includes(key.toLowerCase()),
    );

    console.log("foundKey:", foundKey);

    return foundKey ? DATA[foundKey] : null;
  }

  function handleDrag() {
    waitForElement(
      () => q(".faq-title-container"),
      () => {
        const faqContainer = q(".faq-title-container");
        // FAQ Title Container - Drag & Scroll Functionality

        // Desktop drag functionality
        let isDown = false;
        let startX;
        let scrollLeft;

        faqContainer.addEventListener("mousedown", (e) => {
          isDown = true;
          faqContainer.style.cursor = "grabbing";
          faqContainer.style.userSelect = "none";
          startX = e.pageX - faqContainer.offsetLeft;
          scrollLeft = faqContainer.scrollLeft;
        });

        faqContainer.addEventListener("mouseleave", () => {
          isDown = false;
          faqContainer.style.cursor = "grab";
        });

        faqContainer.addEventListener("mouseup", () => {
          isDown = false;
          faqContainer.style.cursor = "grab";
        });

        faqContainer.addEventListener("mousemove", (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - faqContainer.offsetLeft;
          const walk = (x - startX) * 2; // Scroll speed multiplier
          faqContainer.scrollLeft = scrollLeft - walk;
        });

        // Mobile scroll detection
        let scrollTimeout;
        let isScrolling = false;

        faqContainer.addEventListener("scroll", () => {
          if (!isScrolling) {
            isScrolling = true;
            faqContainer.classList.add("is-scrolling");
          }

          clearTimeout(scrollTimeout);

          scrollTimeout = setTimeout(() => {
            isScrolling = false;
            faqContainer.classList.remove("is-scrolling");
          }, 150);
        });

        // Click to scroll into viewport
        const faqItems = faqContainer.querySelectorAll(
          ".faq-title-container > *",
        );

        faqItems.forEach((item) => {
          item.addEventListener("click", (e) => {
            // Prevent click during drag
            if (faqContainer.style.cursor === "grabbing") {
              e.preventDefault();
              return;
            }

            item.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          });
        });

        // Set initial cursor style
        faqContainer.style.cursor = "grab";
      },
    );
  }

  function createLayout() {
    const found_data = getFaqData();

    if (!found_data) return;

    const layout = /* HTML */ `
      <div
        class="faq-container ${STATE["faqActive"] === false ? "ab-hidden" : ""}"
      >
        <div class="faq-title-container">
          ${found_data
            .map(
              ({ title, description }) => /* HTML */ `
                <div class="faq-title-tab">
                  <div class="faq-title">${title}</div>
                  <div class="faq-description">${description}</div>
                </div>
              `,
            )
            .join(`<div class="faq-title-star">${ASSETS.star_svg}</div>`)}
        </div>
        <div class="faq-dropdown-backdrop"></div>
        <div class="faq-dropdown">
          <div class="faq-dropdown__head">
            <div class="faq-dropdown__title-tab">
              <div class="faq-dropdown__title"></div>
            </div>
            <div class="faq-dropdown__close-cta">${ASSETS.close_svg}</div>
          </div>
          <div class="faq-dropdown__body"></div>
        </div>
      </div>
    `;

    q(".product-benefits__content").insertAdjacentHTML("afterend", layout);
  }

  function createV2Layout() {
    getFaqData();

    return;
  }

  function handleDropdownView(action /* show, hide, toggle */) {
    const targetNode = q("body");

    const className = page_initials + "--show-faq-dropdown";

    if (action === "show") {
      targetNode.classList.add(className);
    } else if (action === "hide") {
      targetNode.classList.remove(className);
    } else if (action === "toggle") {
      targetNode.classList.toggle(className);
    }
  }

  function updateDropdown(title, description) {
    const titleElem = q(".faq-dropdown__title");
    const descriptionElem = q(".faq-dropdown__body");

    let count = 0;

    if (titleElem.innerText !== title) {
      titleElem.innerText = title;
      count++;
    }

    if (descriptionElem.innerText !== description) {
      descriptionElem.innerText = description;
      count++;
    }

    return count === 2;
  }

  function handleOutsideClick(e) {
    const dropdown = q(".faq-container");
    const clickedElement = e.target;

    // Check if click is outside the dropdown
    if (
      !dropdown.contains(clickedElement) &&
      !clickedElement.closest(".faq-title-tab")
    ) {
      handleDropdownView("hide");
      // Remove the listener after handling the click
      document.removeEventListener("click", handleOutsideClick);
    }
  }

  function closeDropdownOnOutsideClick() {
    // Remove any existing listener to prevent duplicates
    document.removeEventListener("click", handleOutsideClick);

    // Add new listener
    document.addEventListener("click", handleOutsideClick);
  }

  function updateFaqContainer() {
    isFaqActive = STATE["faqActive"];
    const faqContainer = q(".faq-container");
    if (isFaqActive) {
      faqContainer.classList.remove("ab-hidden");
    } else {
      faqContainer.classList.add("ab-hidden");
    }
  }

  function updateDetailsContent() {
    isFaqActive = STATE["faqActive"];

    const targetNodes = qq(".product-benefits__content > *:not(.benefit-nav)");

    if (isFaqActive) {
      targetNodes.forEach((elem) => elem.classList.add("ab-hidden"));
    } else {
      targetNodes.forEach((elem) => elem.classList.remove("ab-hidden"));
    }
  }

  function handleNavClick(e) {
    const currentTarget = e.currentTarget;
    const txt = currentTarget.innerText;

    if (txt.includes("SUPPLEMENT FACTS")) return;

    qq(".benefit-nav > a").forEach((elem) =>
      elem.setAttribute(
        "style",
        "color: rgb(113, 75, 103); text-decoration: underline; display: inline-flex; align-items: center; gap: 4px;  border-color: transparent;",
      ),
    );

    if (txt.includes("FAQs")) {
      STATE["faqActive"] = true;
    } else if (txt.includes("DETAILS")) {
      STATE["faqActive"] = false;
    }

    currentTarget.setAttribute(
      "style",
      "color: rgb(113, 75, 103); text-decoration: underline; border-color: #000;",
    );

    updateFaqContainer();
    updateDetailsContent();
  }

  function clickFunction() {
    [
      {
        selector: ".faq-title-tab",
        event: "click",
        callback: (e) => {
          const currentTarget = e.currentTarget;
          const title = q(currentTarget, ".faq-title").innerText;
          const description = q(currentTarget, ".faq-description").innerText;

          updateDropdown(title, description);

          if (STATE["previouslyClickedTabElement"] === currentTarget) {
            handleDropdownView("toggle");
          } else {
            handleDropdownView("show");
          }

          // Stop event propagation to prevent immediate closing
          e.stopPropagation();
          closeDropdownOnOutsideClick();

          STATE["previouslyClickedTabElement"] = currentTarget;
        },
      },
      {
        selector:
          ".faq-dropdown-backdrop, .faq-dropdown__close-cta, .faq-title-star",
        event: "click",
        callback: (e) => handleDropdownView("hide"),
      },
      {
        selector: ".LME36--v2 .benefit-nav a",
        event: "click",
        callback: handleNavClick,
      },
    ].forEach(({ selector, event, callback }) => {
      if (!selector) return;

      waitForElement(
        () => qq(selector).length > 0,
        () =>
          qq(selector).forEach((elem) =>
            elem.addEventListener(event, callback),
          ),
      );
    });
  }

  function init() {
    document.body.classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);

    createLayout();
    createV2Layout();
    clickFunction();
    handleDrag();
  }

  function hasAllTargetElements() {
    return !!(
      document.readyState === "complete" &&
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) &&
      q(".product-benefits__content") &&
      q(".benefit-nav")
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
