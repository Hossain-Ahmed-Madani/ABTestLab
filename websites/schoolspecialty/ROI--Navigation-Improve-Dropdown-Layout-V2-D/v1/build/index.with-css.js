(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `@charset "UTF-8";
.AB-NAV-V2-D {
  /* Webkit browsers (Chrome, Safari, Edge) */
  /* Firefox */
}
.AB-NAV-V2-D .departmentMenu {
  width: 326px;
}
.AB-NAV-V2-D .categoryList {
  padding: 0;
  background: #fff;
}
.AB-NAV-V2-D .categoryList > li:hover {
  background-color: #e7f0f8;
  color: rgb(77, 77, 77) !important;
}
.AB-NAV-V2-D .categoryList > li.selected {
  background-color: #e7f0f8;
  color: rgb(77, 77, 77) !important;
}
.AB-NAV-V2-D .categoryList > li > a.active {
  color: rgb(77, 77, 77) !important;
}
.AB-NAV-V2-D .categoryList > li {
  margin-left: 0;
  width: 100%;
}
.AB-NAV-V2-D .categoryList li a {
  font-family: "MuseoSans-300";
  padding: 10px 0 10px 10px;
}
.AB-NAV-V2-D .categoryList li a.left-positioned {
  padding: 10px 0 10px 40px !important;
}
.AB-NAV-V2-D .subcategoryList-level3_title {
  display: none;
}
.AB-NAV-V2-D .subcategoryList-level3 {
  padding: 0;
  background-color: #e7f0f8;
  left: 315px;
  transition: top 0.05s;
}
.AB-NAV-V2-D .subcategoryList-level3 li a {
  border-bottom: 1px solid #e7f0f8;
}
.AB-NAV-V2-D .categoryList span.icon-keyboard_arrow_right {
  font-size: 20px;
  display: block;
  margin-top: 4px;
}
.AB-NAV-V2-D .subcategoryList-level3 {
  position: fixed;
  min-height: unset;
  height: 584px;
  min-width: 270px;
  /* width: unset !important; */
  column-count: unset;
  flex-direction: column;
  flex-wrap: wrap;
  padding-right: 10px;
}
.AB-NAV-V2-D .subcategoryList-level3.active {
  display: flex;
}
.AB-NAV-V2-D .categoryList {
  height: 584px;
  overflow: auto;
}
.AB-NAV-V2-D .categoryList::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
.AB-NAV-V2-D .roi-scrollbar-track {
  position: absolute;
  right: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: rgb(227, 227, 227);
  pointer-events: none;
}
.AB-NAV-V2-D .roi-scrollbar-thumb {
  position: absolute;
  width: 100%;
  background: rgb(176, 176, 176);
  min-height: 24px;
  border-radius: 2px;
}
.AB-NAV-V2-D #departmentsMenu > li:has(> #departmentButton_QuickOrder),
.AB-NAV-V2-D #departmentsMenu > li:has(> #departmentButton_Dashboard) {
  display: none;
}
.AB-NAV-V2-D #departmentsMenu > li.selected,
.AB-NAV-V2-D #departmentsMenu > li:hover {
  background: #e7f0f8 !important;
}
.AB-NAV-V2-D #departmentsMenu > li.selected p,
.AB-NAV-V2-D #departmentsMenu > li:hover p {
  color: #0e6cb6;
}
.AB-NAV-V2-D #departmentsMenu {
  max-width: 2000px;
  margin: auto;
}
.AB-NAV-V2-D
  #departmentsMenu
  li:has(> a.departmentButton[href="/deals-clearance"]) {
  border-right: 0;
}
.AB-NAV-V2-D #departmentsButton + ul.categoryList > li:last-of-type {
  border-bottom: none;
}
.AB-NAV-V2-D .departmentMenu {
  top: calc(100% + 1px);
}
.AB-NAV-V2-D
  #departmentsMenu
  > li:has(.departmentButton:hover)
  .categoryList
  li:nth-child(1) {
  background-color: #e7f0f8;
  color: rgb(77, 77, 77) !important;
}
.AB-NAV-V2-D
  #departmentsMenu
  > li:has(.departmentButton:hover)
  .categoryList
  li:nth-child(1)
  ul.subcategoryList:not(.ab-click-active) {
  display: flex !important;
}
.AB-NAV-V2-D
  #departmentsMenu
  > li:has(.departmentButton:hover)
  .categoryList
  li:nth-child(1)
  ul.subcategoryList:not(.ab-click-active)
  li {
  min-width: 236px;
}
.AB-NAV-V2-D #departmentsMenu ul.active {
  display: none;
}
.AB-NAV-V2-D .departmentMenu,
.AB-NAV-V2-D .departmentMenu.active,
.AB-NAV-V2-D #departmentsMenu > li:hover .departmentMenu,
.AB-NAV-V2-D .subcategoryList-level3,
.AB-NAV-V2-D .subcategoryList-level3.active {
  display: none;
}
.AB-NAV-V2-D
  #departmentsMenu
  > li:has(.departmentButton:hover)
  .categoryList
  li:nth-child(1)
  ul.subcategoryList:not(.ab-click-active) {
  display: none !important;
}
.AB-NAV-V2-D #departmentsMenu > li .departmentMenu.ab-click-active {
  display: block;
}
.AB-NAV-V2-D .categoryList.ab-click-active {
  position: static !important;
}
.AB-NAV-V2-D #departmentsMenu > li .subcategoryList-level3.ab-click-active {
  width: 326px !important;
  background-color: #fff;
  box-shadow: none !important;
  position: absolute !important;
  display: block !important;
  top: 0 !important;
  left: 0 !important;
  z-index: 10;
  overflow-y: auto;
}
.AB-NAV-V2-D .categoryList::-webkit-scrollbar,
.AB-NAV-V2-D
  #departmentsMenu
  > li
  .subcategoryList-level3.ab-click-active::-webkit-scrollbar {
  width: 4px;
}
.AB-NAV-V2-D .categoryList::-webkit-scrollbar-track,
.AB-NAV-V2-D
  #departmentsMenu
  > li
  .subcategoryList-level3.ab-click-active::-webkit-scrollbar-track {
  background: rgb(227, 227, 227);
  border-radius: 0;
}
.AB-NAV-V2-D .categoryList::-webkit-scrollbar-thumb,
.AB-NAV-V2-D
  #departmentsMenu
  > li
  .subcategoryList-level3.ab-click-active::-webkit-scrollbar-thumb {
  background: rgb(176, 176, 176);
  border-radius: 2px;
  min-height: 24px;
}
.AB-NAV-V2-D .categoryList::-webkit-scrollbar-thumb:hover,
.AB-NAV-V2-D
  #departmentsMenu
  > li
  .subcategoryList-level3.ab-click-active::-webkit-scrollbar-thumb:hover {
  background: rgb(150, 150, 150);
}
.AB-NAV-V2-D .categoryList,
.AB-NAV-V2-D #departmentsMenu > li .subcategoryList-level3.ab-click-active {
  scrollbar-width: thin;
  scrollbar-color: rgb(176, 176, 176) rgb(227, 227, 227);
}
.AB-NAV-V2-D .backToCategories a {
  color: #0e6cb6;
  font-size: 20px;
  font-weight: 500;
}
.AB-NAV-V2-D .backToCategories a:before {
  content: "‹";
  font-size: 30px;
  margin-right: 0px;
  position: relative;
  top: 2px;
}
.AB-NAV-V2-D .backToCategories a:hover {
  text-decoration: none;
}
.AB-NAV-V2-D .categoryList > li > a.allCategories:hover,
.AB-NAV-V2-D .categoryList > li > a.shopAllSubcategories:hover {
  text-decoration: underline;
}
.AB-NAV-V2-D #departmentsMenu > li:hover {
  background-color: transparent !important;
}
.AB-NAV-V2-D #departmentsMenu > li:hover p {
  color: #fff !important;
}
.AB-NAV-V2-D #departmentsMenu > li:hover p .icon-arrow_drop_down {
  color: rgba(0, 169, 204, 0.7) !important;
}
.AB-NAV-V2-D #departmentsMenu > li.ab-click-active {
  background: #e7f0f8 !important;
}
.AB-NAV-V2-D #departmentsMenu > li.ab-click-active p {
  color: #0e6cb6 !important;
}
.AB-NAV-V2-D #departmentsMenu > li.ab-click-active .icon-arrow_drop_down {
  color: #0f6cb6 !important;
}

.AB-NAV-V2-D--nav-opened {
  overflow: hidden;
  position: relative;
  padding-right: 15px;
}
.AB-NAV-V2-D--nav-opened:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 5;
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

OLD TEST PREVIEW: https://select.schoolspecialty.com/?convert_action=convert_vpreview&convert_e=1004165327&convert_v=1004390817

*/

(() => {
  const TEST_CONFIG = {
    client: "ROI Revolution",
    project: "select.schoolspecialty",
    site_url: "https://select.schoolspecialty.com/",
    test_name: "Navigation - Improve Dropdown Layout V2 [D]",
    page_initials: "AB-NAV-V2-D",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
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

  function clickFunction() {
    ACTION_LIST = [
      {
        selector: "body",
        event: "click",
        callback: (e) => {
          body = e.currentTarget;

          if (
            !e.target.closest(
              "#departmentsMenu > li, .departmentMenu, .categoryList, .categoryList > li, .subcategoryList-level3",
            )
          ) {
            body.classList.remove("AB-NAV-V2-D--nav-opened");
            qq(".ab-click-active").forEach((item) =>
              item.classList.remove("ab-click-active"),
            );
          }
        },
      },
      {
        selector: "#departmentsMenu > li",
        event: "click",
        callback: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const el = e.currentTarget;
          const isActive = el.classList.contains("ab-click-active");

          q("body").classList.remove("AB-NAV-V2-D--nav-opened");
          qq(
            "#departmentsMenu > li, .departmentMenu, .categoryList, .categoryList > li, .subcategoryList-level3",
          ).forEach((item) => {
            item.classList.remove("ab-click-active");
          });

          if (!isActive) {
            q("body").classList.add("AB-NAV-V2-D--nav-opened");
            el.classList.add("ab-click-active");
            q(el, ":scope .departmentMenu").classList.add("ab-click-active");
          }
        },
      },
      {
        selector: ".categoryList > li",
        event: "click",
        callback: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const el = e.currentTarget;
          const isActive = el.classList.contains("ab-click-active");

          qq(".categoryList, .subcategoryList-level3").forEach((item) => {
            item.classList.remove("ab-click-active");
          });

          if (!q(el, "ul") && e.target.closest("a")) {
            window.location.href = e.target.closest("a").href;
            return;
          }

          if (!isActive) {
            q("body").classList.add("AB-NAV-V2-D--nav-opened");
            [
              el,
              el.parentNode,
              q(el, ":scope .subcategoryList-level3"),
            ].forEach((item) => item.classList.add("ab-click-active"));
            return;
          }
        },
      },
      {
        selector: ".subcategoryList-level3",
        event: "click",
        callback: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const el = e.currentTarget;

          if (e.target.closest(".backToCategories")) {
            [el, el.parentNode, el.parentNode.parentNode].forEach((item) =>
              item.classList.remove("ab-click-active"),
            );
            return;
          }

          if (e.target.closest("li:not(.backToCategories) a")) {
            qq(".ab-click-active").forEach((item) =>
              item.classList.remove("ab-click-active"),
            );
            window.location.href = e.target.closest("a").href;
            return;
          }
        },
      },
    ].forEach(({ selector, event, callback }) => {
      qq(selector)?.forEach((el) => el.addEventListener(event, callback));
    });
  }

  function updateLayout() {
    q("body").insertAdjacentHTML(
      "afterbegin",
      '<div class="ab-overlay"></div>',
    );

    qq(".categoryList").forEach((item) => {
      const categoryItem =
        item.parentNode.parentNode.querySelector(":scope > a");
      item.insertAdjacentHTML(
        "afterbegin",
        `<li><a class="menuLink allCategories" href="${categoryItem.getAttribute("href")}">Shop All Categories</a></li>`,
      );
    });

    qq(".subcategoryList-level3").forEach((item) => {
      const subCategoryItem = item.parentNode.querySelector(":scope > a");
      item.insertAdjacentHTML(
        "afterbegin",
        /* HTML */ `
          <li class="backToCategories">
            <a href="javascript:void(0);"> <span>Back</span></a>
          </li>
          <li>
            <a
              href="${subCategoryItem.getAttribute("href")}"
              class="menuLink shopAllSubcategories"
              role="menuitem"
              tabindex="-1"
              data-uw-rm-brl="PR"
              data-uw-original-href="${subCategoryItem.getAttribute("href")}"
            >
              Shop All ${subCategoryItem.innerText}
            </a>
          </li>
        `,
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
    updateLayout();
    clickFunction();
  }

  function hasAllTargetElements() {
    return !!(
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) &&
      q("#departmentsMenu > li") &&
      q(".departmentMenu") &&
      q(".categoryList") &&
      q(".categoryList > li") &&
      q(".subcategoryList-level3 .subcategoryList-level3_title")
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
