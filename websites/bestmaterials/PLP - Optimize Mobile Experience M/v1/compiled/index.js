(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolutions",
        project: "Best Materials",
        site_url: "https://www.bestmaterials.com/",
        test_name: "PLP - Optimize Mobile Experience [M]",
        page_initials: "AB-PLP-OPTIMIZE-MOBILE",
        test_variation: 1,
        test_version: 0.0002,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    async function waitForElementAsync(predicate, timeout = 20000, frequency = 150) {
        const startTime = Date.now();

        return new Promise((resolve, reject) => {
            if (typeof predicate === "function" && predicate()) {
                return resolve(true);
            }

            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime;

                if (elapsed >= timeout) {
                    clearInterval(interval);
                    return reject(new Error(`Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`));
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
        return [...document.querySelectorAll(s)];
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        document.head.insertAdjacentHTML("beforeend", `<meta name="viewport" content="width=device-width, initial-scale=1">`);
        document.head.insertAdjacentHTML(
            "beforeend",
            /* HTML */ `
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
            `,
        );

        const leftColumn = q("td#LeftColumnCell");
        const topWrapper = q("#Top_Wrapper");

        if (leftColumn && topWrapper) {
            // Insert hamburger nav
            topWrapper.insertAdjacentHTML(
                "afterbegin",
                `
                <input class="menu-btn" type="checkbox" id="menu-btn" name="menu-btn" />
                <label class="menu-icon" for="menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                </label>
            `,
            );

            document.addEventListener("click", (event) => {
                const menuCheckbox = q("#menu-btn");
                if (menuCheckbox && menuCheckbox.checked && !leftColumn.contains(event.target) && !topWrapper.contains(event.target)) {
                    menuCheckbox.checked = false;
                }
            });

            // Insert cart in header
            const leftLogo = q(topWrapper, "#leftlogo");
            if (leftLogo) {
                leftLogo.insertAdjacentHTML(
                    "afterend",
                    `
                    <div class="header-cart">
                        <a href="https://www.bestmaterials.com/shoppingcart.aspx">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        </a>
                        <div class="cart-qty"></div>
                    </div>
                `,
                );

                const countEl = q("#LeftColumnNav1_CartList1_lblCount");
                const cartQty = q(".cart-qty");
                if (countEl && cartQty) {
                    if (countEl.textContent) {
                        if (cartQty.textContent !== countEl.textContent) {
                            cartQty.textContent = countEl.textContent;
                        }
                        cartQty.classList.remove("hide");
                    } else {
                        cartQty.classList.add("hide");
                    }
                }
            }
        }

        // Move nav buttons to footer
        const footerCell = q("#FooterCell");
        const navLinks = qq("#TopBanner_Navigation > a");

        if (footerCell) {
            if (!q(footerCell, ".search-buttons")) {
                footerCell.insertAdjacentHTML("afterbegin", `<div class="search-buttons"></div>`);
                const searchButtons = q(footerCell, ".search-buttons");
                navLinks.forEach((link) => searchButtons.appendChild(link.cloneNode(true)));
            }
        } else {
            navLinks.forEach((link) => (link.style.display = "none"));
        }

        // Replace cart remove buttons with X icons
        qq('img[src="images/buttons/remove.jpg"]').forEach((img) => {
            const div = document.createElement("div");
            div.className = "cart-remove";
            div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>`;
            img.replaceWith(div);
        });

        // Style cart total row
        const jdfonts = q("td#jdfonts");
        if (jdfonts) {
            jdfonts.closest("tr").classList.add("total-row");
            jdfonts.setAttribute("colspan", "9");
        }
    }

    function checkForItems() {
        return !!(
            (q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && typeof window.jQuery === "function")
            &&
            q("td#LeftColumnCell") &&
            q("#Top_Wrapper") &&
            q("#FooterCell")
        );
    }

    await waitForElementAsync(checkForItems);
    init();
})();
