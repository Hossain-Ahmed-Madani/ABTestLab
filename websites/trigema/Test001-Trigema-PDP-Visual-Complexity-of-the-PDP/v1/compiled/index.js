(async () => {
    const TEST_CONFIG = {
        page_initials: "AB-TEST001",
        test_variation: 1,
        test_version: 0.0005,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        heart_icon: /* HTML */ `
            <svg class="ab-heart-icon" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.4938 1.51381C13.9536 1.51209 14.4093 1.60186 14.8342 1.77787C15.2591 1.95381 15.6447 2.21247 15.9688 2.53881C16.4032 2.97327 16.7157 3.51443 16.8748 4.10787C17.0338 4.70139 17.0338 5.32623 16.8748 5.91975C16.7157 6.51319 16.4032 7.05435 15.9688 7.48881L15.2488 8.19381L9.24885 14.1938L2.54383 7.48881C2.08759 7.05975 1.75485 6.51607 1.58039 5.91459C1.40586 5.31311 1.39594 4.67577 1.55164 4.06913C1.70735 3.46249 2.02296 2.90873 2.46562 2.46569C2.90828 2.02257 3.46164 1.70639 4.06812 1.55007C4.6746 1.39374 5.31194 1.40304 5.91358 1.57695C6.5153 1.75085 7.05929 2.08305 7.48883 2.53883L8.19883 3.24383L9.24885 4.30383L10.3088 3.24383L11.0188 2.53883C11.3454 2.20899 11.7351 1.94829 12.1646 1.77219C12.5941 1.59609 13.0546 1.50829 13.5188 1.51383M13.5188 0.0138212C12.8614 0.0132742 12.2103 0.142415 11.6029 0.393825C10.9955 0.645225 10.4435 1.01391 9.97885 1.47883L9.24885 2.16883L8.54383 1.46383C7.60429 0.525625 6.33062 -0.000938744 5.00282 1.25638e-06C3.675 0.000938256 2.40202 0.529305 1.46382 1.46883C0.525617 2.40835 -0.000938744 3.68203 1.25639e-06 5.00983C0.000939256 6.33765 0.529297 7.61063 1.46882 8.54883L2.17882 9.25385L9.24885 16.3238L16.3188 9.25385L17.0288 8.54883C17.9662 7.61117 18.4928 6.33963 18.4927 5.01363C18.4927 3.68777 17.966 2.41623 17.0285 1.47863C16.0911 0.541045 14.8195 0.0141612 13.4937 0.0138612L13.5188 0.0138212Z"
                    fill="#939194"
                />
            </svg>
        `,
    };

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
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function init() {
        if (window[page_initials] === true) return;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        q("head").insertAdjacentHTML(
            "beforeend",
            /*  HTML */ `
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
            
            `,
        );

        waitForElementAsync(() => q(".product-detail-buy-box form.heart span.heart-default:not(:has(> svg.ab-heart-icon))")).then(() => {
            q(".product-detail-buy-box form.heart span.heart-default")?.insertAdjacentHTML("afterbegin", ASSETS.heart_icon);
        });

        waitForElementAsync(
            () =>
                !!(
                    q(".product-detail-buy-box .product-name__group form.heart") &&
                    q(".product-name__group.product-name__group--items-center") &&
                    q(".product-detail-content-inner-wrap-sticky .product-name .product-name__group > .p--small--medium:last-child").textContent.includes("Bewertungen")
                ),
        )
            .then(() => {
                const watchListButton = q(".product-detail-buy-box .product-name__group form.heart");
                const reviewSection = q(".product-name__group.product-name__group--items-center");

                if (watchListButton) {
                    reviewSection.insertAdjacentElement("beforeend", watchListButton);
                }

                qq(reviewSection, "p.p--small--medium")?.forEach((item) => {
                    const txt = item.textContent.trim();

                    if (+txt >= 0 && +txt <= 5) {
                        item.classList.add("ab-review-value");
                        const newTxt = txt.replace(/\./g, ",");
                        item.innerText = newTxt + "/5";
                    }

                    if (txt.includes("Bewertungen")) {
                        item.classList.add("ab-review-total");
                        item.innerText = "(" + txt + ")";
                    }
                });
            })
            .catch(() => {
                //
            });

        waitForElementAsync(() => q(".product-variant__info.product-variant__info--color .product-variant__label"))
            .then(() => {
                q(".product-variant__info.product-variant__info--color .product-variant__label").innerText = "Farbe wählen:";
            })
            .catch(() => {
                //
            });

        waitForElementAsync(() => !!(q(".product-variant__info.product-variant__info--size .product-variant__label") && q(".product-size.product-size--active")))
            .then(() => {
                const productSizeVariantLabelElement = q(".product-variant__info.product-variant__info--size .product-variant__label");
                productSizeVariantLabelElement.innerText = "Größe wählen:";
                const activeSizeElement = q(".product-size.product-size--active");
                if (activeSizeElement) {
                    productSizeVariantLabelElement.insertAdjacentHTML("afterend", /* HTML */ `<span class="product-variant__size-name">${activeSizeElement.textContent}</span>`);
                }
            })
            .catch(() => {
                //
            });

        waitForElementAsync(() => !!(q(".product-name") && q(".product-detail-attribute-row:has(>.price-in-discount)")))
            .then(() => {
                q(".product-name").insertAdjacentElement("afterend", q(".product-detail-attribute-row:has(>.price-in-discount)"));
            })
            .catch(() => {
                //
            });

        waitForElementAsync(() => !!(q(".product-detail-attribute-row:has(>ul.product-detail-shipping-commitment)") && q(".product-name__group.product-name__group--justify-between")))
            .then(() => {
                q(".product-detail-attribute-row:has(>ul.product-detail-shipping-commitment)").insertAdjacentElement(
                    "afterbegin",
                    q(".product-name__group.product-name__group--justify-between"),
                );
            })
            .catch(() => {
                //
            });

        waitForElementAsync(
            () =>
                !!(
                    q(".product-description-parameters table.table tbody tr td:first-child") &&
                    qq(".product-description-parameters table.table tbody tr td:first-child").some((td) =>
                        ["Material und Pflege", "Passform", "Produktdetails"].some((txt) => txt.includes(td.textContent.trim())),
                    )
                ),
        )
            .then(() => {
                const topProductDescriptionBlock = document.createElement("div");
                topProductDescriptionBlock.className = "product-description-block product-description-block--top";

                const topProductDescription = document.createElement("div");
                topProductDescription.className = "product-description-parameters product-description-parameters--top";
                topProductDescriptionBlock.appendChild(topProductDescription);

                const topProductDescriptionTable = document.createElement("table");
                topProductDescriptionTable.className = "table";
                topProductDescription.appendChild(topProductDescriptionTable);

                const topProductDescriptionTableBody = document.createElement("tbody");
                topProductDescriptionTable.appendChild(topProductDescriptionTableBody);

                qq(".product-description-parameters table.table tbody tr").forEach((tr) => {
                    const label = q(tr, "td:first-child").textContent.trim();
                    if (["Material und Pflege", "Passform", "Produktdetails"].some((text) => label.includes(text))) {
                        topProductDescriptionTableBody.appendChild(tr);
                    }
                });

                q(".product-detail-attribute-row:has(> ul.product-detail-shipping-commitment)").insertAdjacentElement("beforebegin", topProductDescriptionBlock);

                q(".collapsible-block").addEventListener("click", (e) => {
                    q(".product-description-parameters:not(.product-description-parameters--top)").classList.toggle("show");
                });
            })
            .catch(() => {
                //
            });

        setTimeout(() => {
            if (!q(".ab-review-value") && q(".product-detail-buy-box .product-name__group form.heart")) {
                const watchListButton = q(".product-detail-buy-box .product-name__group form.heart");
                q(".product-detail-content-inner-wrap-sticky h3.h3.product-name__name ").insertAdjacentElement("afterend", watchListButton);
            }
        }, 1000);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".product-detail-content-inner-wrap-sticky"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
