(async () => {
    const TEST_CONFIG = {
        client: "Netzproduzenten",
        project: "SGD",
        site_url: "https://www.sgd.de",
        test_name: "Test021 [SGD] - checkout - more clarity for users in step 1",
        page_initials: "AB-TEST021-CHECKOUT",
        test_variation: 1,
        test_version: 0.0001,
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

    function getProgressLayout() {
        const currentLocation = window.location.pathname;

        const progress_data = [
            {
                title: "1. Deine Daten",
                is_active: true,
            },
            {
                title: "2. Zahlungsweise",
                is_active: currentLocation.includes("/kursanmeldung/schritt/2.html") || currentLocation.includes("/kursanmeldung/schritt/3.html"),
            },
            {
                title: '3. <span class="ab-mobile-hidden">Bestätigen &</span> Starten',
                is_active: currentLocation.includes("/kursanmeldung/schritt/3.html"),
            },
        ];

        return /* HTML */ `
            <div class="ab-progress">
                ${progress_data
                    .map(
                        ({ title, is_active }) => /* HTML */ `
                            <div class="ab-progress__item ${is_active ? "ab-progress__item--filled" : ""}">
                                <div class="ab-progress__item__label">${title}</div>
                                <div class="ab-progress__item__bar"></div>
                            </div>
                        `,
                    )
                    .join("")}
            </div>
        `;
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        q("main.page-content > .container-md > h1").innerText = "Sichere jetzt deinen Platz im Lehrgang";
        q(".container-md.registration").insertAdjacentHTML("afterbegin", getProgressLayout());

        waitForElementAsync(() => q(".registration-left"))
            .then(() => {
                q(".registration-left").className = "col-12 col-lg-12 registration-left";
            })
            .catch(() => {});

        // Step 1 - Page Changes
        waitForElementAsync(
            () =>
                !window.location.href.includes("2.html") &&
                !window.location.href.includes("3.html") &&
                q(".registration-inner-container > .row > .form-field-course.form-group.form-input") &&
                q(".d-flex.justify-content-end.mb-4.mb-lg-0.mt-4:has(>button#submit1)"),
        ).then(() => {
            const preferredCourseHeader = q(".registration-inner-container > .row > h2.mt-4");
            preferredCourseHeader.className = "ab-preferred-course-title";
            const preferredCourseSelectionContainer = q(".registration-inner-container > .row > .form-field-course.form-group.form-input");
            const row =  q(".registration-inner-container > .row");
            row.classList.add('ab-row');
            const p = q(".registration-inner-container > p");
            const submitButtonContainer = q(".d-flex.justify-content-end.mb-4.mb-lg-0.mt-4:has(>button#submit1)");
            q(submitButtonContainer, 'button#submit1').innerText = "Weiter zu Zahlungsmöglichkeiten";

            const div = document.createElement("div");
            div.className = "ab-preferred-course-container";
            div.insertAdjacentHTML("afterbegin", `<p class="ab-preferred-course-subtitle">In welchem Bereich möchtest du beruflich voran kommen?</p>`);
            div.insertAdjacentElement("afterbegin", preferredCourseHeader);
            div.insertAdjacentElement("beforeend", preferredCourseSelectionContainer);

            q(".registration-inner-container").insertAdjacentElement("afterbegin", div);
            
            row.insertAdjacentElement("beforeend", submitButtonContainer);
            row.insertAdjacentElement("beforeend", p);
        });
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q("main.page-content > .container-md > h1") && q(".container-md.registration"));
    }

    await waitForElementAsync(checkForItems);
    init();
    // try {
    // } catch (error) {
    //     console.warn(error);
    //     return false;
    // }
})();
