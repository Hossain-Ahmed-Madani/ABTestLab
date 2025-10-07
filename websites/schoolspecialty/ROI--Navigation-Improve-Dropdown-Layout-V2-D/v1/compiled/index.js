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
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => waitForElement(predicate, callback, timer - frequency, frequency), frequency);
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
                    if (!e.target.closest("#departmentsMenu > li, .departmentMenu, .categoryList, .categoryList > li, .subcategoryList-level3")) {
                        qq(".ab-click-active").forEach((item) => {
                            item.classList.remove("ab-click-active");
                        });
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

                    qq("#departmentsMenu > li, .departmentMenu, .categoryList, .categoryList > li, .subcategoryList-level3").forEach((item) => {
                        item.classList.remove("ab-click-active");
                    });

                    if (!isActive) {
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
                        el.classList.add("ab-click-active");
                        el.parentNode.classList.add("ab-click-active");
                        q(el, ":scope .subcategoryList-level3").classList.add("ab-click-active");
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
                        [el, el.parentNode, el.parentNode.parentNode].forEach((item) => item.classList.remove("ab-click-active"));
                        return;
                    }

                    if (e.target.closest("li:not(.backToCategories) a")) {
                        qq(".ab-click-active").forEach((item) => item.classList.remove("ab-click-active"));
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
        qq(".categoryList").forEach((item) => {
            const categoryItem = item.parentNode.parentNode.querySelector(":scope > a");
            item.insertAdjacentHTML("afterbegin", `<li><a class="menuLink allCategories" href="${categoryItem.getAttribute("href")}">Shop All Categories</a></li>`);
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
                `
            );
        });
    }

    function init() {
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        updateLayout();
        clickFunction();
    }

    function hasAllTargetElements() {
        return !!(
            q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) &&
            q("#departmentsMenu > li") &&
            q(".departmentMenu") &&
            q(".categoryList") &&
            q(".categoryList > li") &&
            q(".subcategoryList-level3 .subcategoryList-level3_title")
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
