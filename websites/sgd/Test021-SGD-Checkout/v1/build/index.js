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

  const ASSETS = {
    check_svg: /* HTML */ `
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="20" height="20" fill="url(#pattern0_2_361)" />
        <defs>
          <pattern
            id="pattern0_2_361"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlink:href="#image0_2_361" transform="scale(0.0078125)" />
          </pattern>
          <image
            id="image0_2_361"
            width="128"
            height="128"
            preserveAspectRatio="none"
            xlink:href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    `,
  };

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

  function getProgressLayout() {
    const currentLocation = window.location.pathname;

    const progress_data = [
      {
        title: "1. Deine Daten",
        is_active: true,
      },
      {
        title: "2. Zahlungsweise",
        is_active:
          currentLocation.includes("/kursanmeldung/schritt/2.html") ||
          currentLocation.includes("/kursanmeldung/schritt/3.html"),
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
              <div
                class="ab-progress__item ${is_active
                  ? "ab-progress__item--filled"
                  : ""}"
              >
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
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);

    q("main.page-content > .container-md > h1").innerText =
      "Sichere jetzt deinen Platz im Lehrgang";
    q(".container-md.registration").insertAdjacentHTML(
      "afterbegin",
      getProgressLayout(),
    );

    waitForElementAsync(() => q(".registration-left"))
      .then(() => {
        q(".registration-left").className =
          "col-12 col-lg-12 registration-left";
      })
      .catch(() => {});

    // Step 1 - Page Changes
    waitForElementAsync(
      () =>
        !window.location.href.includes("2.html") &&
        !window.location.href.includes("3.html") &&
        q(
          ".registration-inner-container > .row > .form-field-course.form-group.form-input",
        ) &&
        q(".d-flex.justify-content-end.mb-4.mb-lg-0.mt-4:has(>button#submit1)"),
    ).then(() => {
      q("body").classList.add(page_initials + "--STEP-1");

      // Other Sections
      const preferredCourseHeader = q(
        ".registration-inner-container > .row > h2.mt-4",
      );
      preferredCourseHeader.className = "ab-preferred-course-title";
      const preferredCourseSelectionContainer = q(
        ".registration-inner-container > .row > .form-field-course.form-group.form-input",
      );
      const row = q(".registration-inner-container > .row");
      row.classList.add("ab-row");
      const p = q(".registration-inner-container > p");
      const submitButtonContainer = q(
        ".d-flex.justify-content-end.mb-4.mb-lg-0.mt-4:has(>button#submit1)",
      );
      q(submitButtonContainer, "button#submit1").innerText =
        "Weiter zu Zahlungsmöglichkeiten";

      const referredCourseContainer = document.createElement("div");
      referredCourseContainer.className = "ab-preferred-course-container";
      referredCourseContainer.insertAdjacentHTML(
        "afterbegin",
        `<p class="ab-preferred-course-subtitle">In welchem Bereich möchtest du beruflich voran kommen?</p>`,
      );
      referredCourseContainer.insertAdjacentElement(
        "afterbegin",
        preferredCourseHeader,
      );
      referredCourseContainer.insertAdjacentElement(
        "beforeend",
        preferredCourseSelectionContainer,
      );

      q(".registration-inner-container").insertAdjacentElement(
        "afterbegin",
        referredCourseContainer,
      );

      referredCourseContainer.insertAdjacentHTML(
        "afterend",
        /* HTML */ `
          <div class="ab-signup-text-container">
            <span> ${ASSETS.check_svg} </span>
            <p class="ab-mobile">Diesen Kurs 4 Wochen kostenlos testen</p>
            <p class="ab-desktop">
              Jetzt anmelden und diesen Kurs 4 Wochen kostenlos testen
            </p>
          </div>
        `,
      );

      row.insertAdjacentElement("beforeend", submitButtonContainer);
      row.insertAdjacentElement("beforeend", p);

      // Form Section
      const firstNameGroup = q(".form-field-last-name.form-group");
      const formEmailGroup = q(".form-field-email.form-group");
      const formBirthGroup = q(".form-field-birth.form-group");
      const formPostalCodeCol = q(".form-field-postal-code");
      const formCityCol = q(".form-field-city");
      const formStreetCol = q(".form-field-street");
      const formHouseNoCol = q(".form-field-house-number");
      const formLandGroup = q(".form-field-land.form-group");
      const formTelephoneGroup = q(".form-field-phone.form-group");
      const formStreetGroup = q(".form-field-group-street");

      // Update Form Elements

      // Email
      const formEmailCol = document.createElement("div");
      formEmailCol.classList.add("col-12");

      const formEmailRow = document.createElement("div");
      formEmailRow.className = "row";
      formEmailCol.appendChild(formEmailRow);

      formEmailRow.appendChild(formEmailGroup);
      // First Name
      firstNameGroup.insertAdjacentElement("afterend", formEmailCol);
      formEmailCol.insertAdjacentElement("afterend", formBirthGroup);

      // Date Share Info Desktop
      formEmailGroup.insertAdjacentHTML(
        "afterend",
        /* HTML */ `
          <div class="col-12 col-lg-6 ab-data-share-info-group-desktop">
            <p>
              Alle Angaben dienen nur Ihrem Anmeldeprozess und werden
              vertraulich behandelt. <br />
              Keine Weitergabe. DSGVO-konform.
            </p>
          </div>
        `,
      );

      // Post Code
      formPostalCodeCol.classList.remove("col-md-3");
      formPostalCodeCol.classList.add("col-md-2");
      // City
      formCityCol.classList.remove("col-md-9");
      formCityCol.classList.add("col-md-6");
      // Street
      formStreetCol.classList.add("col-md-6");
      // House
      formHouseNoCol.classList.add("col-md-2");

      // Land
      const formLandCol = document.createElement("div");
      formLandCol.classList.add("col-12");

      const forLandRow = document.createElement("div");
      forLandRow.className = "row";
      formLandCol.appendChild(forLandRow);
      forLandRow.appendChild(formLandGroup);

      formStreetGroup.insertAdjacentElement("afterend", formLandCol);

      // Telephone
      const formTelephoneCol = document.createElement("div");
      formTelephoneCol.classList.add("col-12");

      const formTelephoneRow = document.createElement("div");
      formTelephoneRow.className = "row";
      formTelephoneCol.appendChild(formTelephoneRow);
      formTelephoneRow.appendChild(formTelephoneGroup);

      formLandCol.insertAdjacentElement("afterend", formTelephoneCol);

      // Date Share Info Mobile

      formTelephoneCol.insertAdjacentHTML(
        "afterend",
        /* HTML */ `
          <div class="col-12 ab-data-share-info-group-mobile">
            <p>
              Alle Angaben dienen nur Ihrem Anmeldeprozess und werden
              vertraulich behandelt. <br />
              Keine Weitergabe. DSGVO-konform.
            </p>
          </div>
        `,
      );
    });
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q("main.page-content > .container-md > h1") &&
      q(".container-md.registration")
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
