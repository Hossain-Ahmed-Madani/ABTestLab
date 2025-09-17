/* 
Test container: https://app.convert.com/accounts/100414252/projects/100415740/experiences/1004167519/summary
control: https://select.schoolspecialty.com/furniture/early-childhood?_conv_eforce=1004167519.1004395699&utm_campaign=qa5
v1: https://select.schoolspecialty.com/furniture/early-childhood?_conv_eforce=1004167519.1004395700&utm_campaign=qa5


*/

(() => {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "select.schoolspecialty",
        site_url: "https://select.schoolspecialty.com/",
        test_name: "Level 2 PLP - Remove the Category Thumbnails [Iteration][DTM]",
        page_initials: "AB-LEVEL-2-PLP",
        test_variation: 1,
        test_version: 0.0002,
    };

    function q(s, o) {
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
        if (timer <= 0) {
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => waitForElement(predicate, callback, timer - frequency, frequency), frequency);
        }
    }

    const ASSETS = {
        view_more_svg: /* HTML */ `
            <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5558 14.4036L-1.25902e-07 2.88031L2.88843 -1.01024e-06L13 10.0831L23.1116 -1.26257e-07L26 2.88031L14.4442 14.4036C14.0611 14.7855 13.5417 15 13 15C12.4583 15 11.9389 14.7855 11.5558 14.4036Z"
                    fill="#2B94E6"
                />
            </svg>
        `,
    };

    function createLayout() {
        const targetNode = document.querySelector(".productlist").previousElementSibling;

        const ul = document.createElement("ul");
        ul.className = "ab-container";

        ul.innerHTML = qq(".left_espot .productlist").reduce((acc, cNode) => {
            const borderHTML = `<div class="bottomBorder">&nbsp;</div>`;

            if (q(cNode, ".fx-row")) {
                return (acc += qq(cNode, ".fx-row").reduce(
                    (accRow, cRowNode) => (accRow += /* HTML */ `<li><div class="productlist">${cRowNode.outerHTML + borderHTML}</div></li>`),
                    ""
                ));
            } else if (q(cNode, ".bottomBorder")) {
                let html = "";
                const oneFifthElements = qq(cNode, ".one-fifth");

                // Group .one-fifth elements in chunks of 4
                for (let i = 0; i < oneFifthElements.length; i += 4) {
                    let tmp_html = "<li><div class='productlist'>";

                    // Add up to 4 .one-fifth elements
                    for (let j = i; j < i + 4 && j < oneFifthElements.length; j++) {
                        tmp_html += oneFifthElements[j].outerHTML;
                    }

                    tmp_html += "</div>" + borderHTML + "</li>";
                    html += tmp_html;
                }

                return (acc += html);
            } else {
                return (acc += /* HTML */ `<li>${cNode.outerHTML + borderHTML}</li>`);
            }
        }, "");

        targetNode.insertAdjacentElement("afterend", ul);

        const button = document.createElement("button");
        button.type = "button";
        button.className = "ab-content-toggle-button";
        button.innerHTML = /* HTML */ `
            <span class="ab-content-toggle-button__icon">${ASSETS.view_more_svg}</span>
            <span class="ab-content-toggle-button__text ab-content-toggle-button__text--view-more">View More Categories</span>
            <span class="ab-content-toggle-button__text ab-content-toggle-button__text--view-less">View Less Categories</span>
        `;

        button.addEventListener("click", (e) => {
            if (!ul.classList.contains("ab-container--expanded")) {
                ul.classList.add("ab-container--expanded");
                button.classList.add("ab-content-toggle-button--expanded");
            } else {
                ul.classList.remove("ab-container--expanded");
                button.classList.remove("ab-content-toggle-button--expanded");
            }
        });

        ul.insertAdjacentElement("afterend", button);
    }

    function init() {
        const { page_initials, test_variation, test_version } = TEST_CONFIG;
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version${test_version}`);

        // console.table(TEST_CONFIG);

        createLayout();
    }

    function hasAllTargetElements() {
        return !!(q(`body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`) && q(".left_espot .productlist"));
    }

    waitForElement(hasAllTargetElements, init);
})();
