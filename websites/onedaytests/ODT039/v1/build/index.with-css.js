(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-ODT039 .ab-hidden {
  display: none !important;
}
.AB-ODT039 #biomarkers_anchor,
.AB-ODT039 .metafield-rich_text_field:has(#biomarkers_anchor) {
  display: none;
}
.AB-ODT039 .tiles-section:has(.trustpilot-widget) {
  padding-bottom: 40px !important;
}
.AB-ODT039
  .custom-liquid--container:has(#biomarkers_anchor)
  .rich-text--container {
  padding-left: 0;
  padding-right: 0;
}
.AB-ODT039 .shopify-section:has(.glider-contain) > .tiles-section {
  padding-top: 0 !important;
}
.AB-ODT039 .ab-ultimateHealthyWomen-section .rich-text--container > div {
  padding: 56px 16px;
}
.AB-ODT039 .ab-ultimateHealthyWomen-section .metafield-rich_text_field {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.AB-ODT039 .ab-ultimateHealthyWomen-section h2 {
  margin-top: 0;
  margin-bottom: 24px;
}
.AB-ODT039 .ab-ultimateHealthyWomen-section p {
  margin: 0;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #222222;
}
.AB-ODT039 .ab-ultimateHealthyWomen-section b {
  font-weight: 800;
}
.AB-ODT039 .ab-right-for-you li {
  margin: 0;
  padding: 64px 16px 56px;
}
.AB-ODT039 .ab-right-for-you h4 {
  font-weight: 700;
  font-size: 27px;
  line-height: 35px;
  letter-spacing: 0px;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.AB-ODT039 .ab-home-kit-vs-clinic h2 {
  font-size: 27px;
  line-height: 35px;
  margin-bottom: 24px;
}
.AB-ODT039 .ab-home-kit-vs-clinic p {
  font-size: 17px;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 12px;
}
.AB-ODT039 .ab-right-for-you p.ab-right-for-you-subtitle {
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #222222;
}
.AB-ODT039 .ab-right-for-you-card-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.AB-ODT039 .ab-right-for-you-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
}
.AB-ODT039 .ab-right-for-you-card::before {
  content: "";
  background-image: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6568 2.34313C12.1458 0.832156 10.1369 0 8 0C5.86312 0 3.85413 0.832156 2.34313 2.34313C0.832156 3.85413 0 5.86312 0 8C0 10.1369 0.832156 12.1458 2.34313 13.6568C3.85409 15.1678 5.86312 16 8 16C10.1369 16 12.1458 15.1678 13.6568 13.6569C15.1678 12.1458 16 10.1369 16 8C16 5.86312 15.1678 3.85416 13.6568 2.34313ZM11.8221 6.09603L7.35128 10.5668C7.30781 10.6104 7.25614 10.645 7.19926 10.6686C7.14239 10.6921 7.08141 10.7042 7.01984 10.7041C6.95827 10.7042 6.89729 10.6921 6.84041 10.6686C6.78352 10.645 6.73185 10.6104 6.68837 10.5668L4.17794 8.05644C3.99487 7.87341 3.99487 7.57662 4.17794 7.39353C4.36097 7.21047 4.65778 7.21047 4.84084 7.39353L7.01984 9.5725L11.1592 5.43313C11.3422 5.25006 11.639 5.25006 11.8221 5.43313C12.0051 5.61619 12.0051 5.91297 11.8221 6.09603Z" fill="%23006EB3"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  width: 16px;
  min-width: 16px;
  height: 16px;
  min-height: 16px;
  margin-top: 4px;
}
.AB-ODT039 .ab-right-for-you-card p {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #222222;
}
@media screen and (min-width: 768px) {
  .AB-ODT039 .ab-right-for-you h4 br {
    display: none;
  }
}
@media screen and (min-width: 860px) {
  .AB-ODT039 .rich-text--container {
    margin-top: 56px;
  }
  .AB-ODT039 .custom-liquid--container .rich-text-alignment-left {
    padding-left: 0;
    padding-right: 0;
  }
  .AB-ODT039 .ab-ultimateHealthyWomen-section .rich-text--container > div {
    padding: 56px 16px;
  }
  .AB-ODT039 .ab-right-for-you h4 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
  }
  .AB-ODT039 .ab-home-kit-vs-clinic h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0px;
    margin-bottom: 24px;
  }
  .AB-ODT039 .ab-right-for-you-card-list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }
  .AB-ODT039 .ab-right-for-you-card {
    flex: 1 1 calc(50% - 4px);
    background-color: #ffffff;
    border-radius: 8px;
    padding: 24px 23px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
  }
  .AB-ODT039 .ab-right-for-you-card::before {
    background-repeat: no-repeat;
    background-size: contain;
    width: 16px;
    min-width: 16px;
    height: 16px;
    min-height: 16px;
    margin-top: 4px;
  }
  .AB-ODT039 .ab-right-for-you-card p {
    font-size: 16px;
    line-height: 24px;
  }
}
.AB-ODT039 .ab-biomarkers {
  padding: 56px 0;
  background-color: #f7fcfe;
}
.AB-ODT039 .ab-biomarkers .rich-text--container {
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 16px;
  padding-right: 16px;
}
.AB-ODT039 .ab-biomarkers h2 {
  font-weight: 700;
  font-size: 27px;
  line-height: 35px;
  letter-spacing: 0px;
  text-transform: uppercase;
  margin: 0 0 10px;
}
.AB-ODT039 .ab-biomarkers h2 span {
  color: #c0302e;
}
.AB-ODT039 .ab-biomarkers .item:not(:last-child) {
  border-bottom: 1px solid #e2eff4;
}
.AB-ODT039 .ab-biomarkers .item button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  width: 100%;
  padding: 16px 0;
  background: none;
  border: 0;
  font-family: inherit;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0px;
  text-transform: capitalize;
  color: #1d1d1d;
}
.AB-ODT039 .ab-biomarkers .item button::after {
  content: "";
  width: 12.5px;
  height: 12.5px;
  margin: 0 6px 4px 16px;
  border: solid #006eb3;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  transition: transform 0.2s;
}
.AB-ODT039 .ab-biomarkers .item button[aria-expanded="true"]::after {
  transform: rotate(-135deg);
  margin-top: 6px;
}
.AB-ODT039 .ab-biomarkers .panel {
  color: #444;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  will-change: height;
}
.AB-ODT039 .ab-biomarkers .panel:not([hidden]) {
  height: 100%;
  max-height: 1000px; /* Set a reasonable upper limit */
}
.AB-ODT039 .ab-biomarkers .panel:not([hidden]) {
  margin-bottom: 16px;
}
.AB-ODT039 .ab-biomarkers .panel em {
  display: block;
}
.AB-ODT039 .ab-biomarkers .panel ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.AB-ODT039 .ab-biomarkers .panel li {
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}
.AB-ODT039 .ab-biomarkers .panel li::before {
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #046e82;
}
.AB-ODT039 .ab-biomarkers .panel a {
  color: #0e6e8c;
  text-decoration: none;
}
.AB-ODT039 .ab-biomarkers .panel a:hover {
  text-decoration: none;
}
.AB-ODT039 .ab-biomarkers .panel p {
  margin: 0;
}
.AB-ODT039 .ab-biomarkers .panel > * {
  margin: 0;
}
@media screen and (min-width: 860px) {
  .AB-ODT039 .ab-biomarkers h2 {
    font-size: 27px;
    line-height: 38px;
  }
}
@media screen and (min-width: 1024px) {
  .AB-ODT039 .ab-biomarkers .ab-container {
    max-width: 1019px;
    margin: auto;
  }
  .AB-ODT039 .ab-biomarkers h2 {
    margin: 0 0 4px;
  }
  .AB-ODT039 .ab-biomarkers .item button {
    padding: 20px 0;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0px;
  }
  .AB-ODT039 .ab-biomarkers .panel:not([hidden]) {
    margin-bottom: 20px;
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
(async () => {
  const TEST_CONFIG = {
    page_initials: "AB-ODT039",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const DATA = [
    {
      title: "Full Blood Count",
      description:
        "This part of the panel checks overall health by measuring red and white blood cells, haemoglobin, haematocrit, and platelets to detect conditions like aenemia, infections, and blood disorders.",
      items: [
        [
          "White Blood Cell Count (WBC)",
          "/pages/white-blood-cell-count-wbc-description-and-reference-ranges",
        ],
        [
          "Red Blood Cell Count (RBC)",
          "/pages/red-blood-cell-count-rbc-description-and-reference-ranges",
        ],
        [
          "Haemoglobin (HGB)",
          "/pages/haemoglobin-hgb-description-and-reference-ranges",
        ],
        [
          "Hematocrit (HCT)",
          "/pages/hematocrit-hct-description-and-reference-ranges",
        ],
        [
          "Mean Corpuscular Volume (MCV)",
          "/pages/mean-corpuscular-volume-mcv-description-and-reference-ranges",
        ],
        [
          "Mean Corpuscular Haemoglobin (MCH)",
          "/pages/mean-corpuscular-haemoglobin-mch-description-and-reference-ranges",
        ],
        [
          "Mean Corpuscular Haemoglobin Concentration (MCHC)",
          "/pages/mean-corpuscular-haemoglobin-concentration-mchc-description-and-reference-ranges",
        ],
        [
          "Red Cell Distribution Width (RDW)",
          "/pages/red-cell-distribution-width-rdw-description-and-reference-ranges",
        ],
        [
          "Platelets* (PLT)",
          "/pages/platelets-plt-description-and-reference-ranges",
        ],
        [
          "Mean Platelet Volume* (MPV)",
          "/pages/mean-platelet-volume-mpv-description-and-reference-ranges",
        ],
        [
          "Lymphocytes* (LYM)",
          "/pages/lymphocytes-lym-description-and-reference-ranges",
        ],
        [
          "Monocytes* (MON)",
          "/pages/monocytes-mon-description-and-reference-ranges",
        ],
        [
          "Neutrophils* (NEU)",
          "/pages/neutrophils-neu-description-and-reference-ranges",
        ],
        [
          "Eosinophils* (EOS)",
          "/pages/eosinophils-eos-description-and-reference-ranges",
        ],
        [
          "Basophils* (BAS)",
          "/pages/basophils-bas-description-and-reference-ranges",
        ],
      ],
    },
    {
      title: "Immunoglobulins",
      description:
        "Biomarker to assess immune function and help detect <a href='/pages/immunoglobulin-a-iga-description-and-reference-ranges' title='IgA'>IgA</a> deficiency or immune-related conditions.",
      items: [["Total IgA", ""]],
    },
    {
      title: "Thyroid Function",
      description:
        "A thyroid function part of this blood test that checks levels of triiodothyronine (T3), thyroxine (T4), and thyroid-stimulating hormone (TSH) to diagnose thyroid disorders like hypothyroidism or hyperthyroidism.",
      items: [
        ["Unbound thyroxine (Free T4)", ""],
        ["Unbound triiodothyronine (Free T3)", ""],
        [
          "Thyroid Stimulating Hormone (TSH)",
          "/pages/thyroid-stimulating-hormone-tsh-description-and-reference-ranges",
        ],
      ],
    },
    {
      title: "Micronutrients And Vitamins",
      description:
        "Here we measure essential vitamins and minerals to detect deficiencies that can impact energy, immunity, and overall health.",
      items: [
        ["Vitamin B12", "/pages/vitamin-b12-description-and-reference-ranges"],
        ["Folate serum", ""],
        ["Ferritin", "/pages/ferritin-description-and-reference-ranges"],
        ["Iron", "/pages/iron-description-and-reference-ranges"],
        ["Transferrin", ""],
        [
          "TIBC Calculation",
          "/pages/total-iron-binding-capacity-tibc-description-and-reference-ranges",
        ],
      ],
    },
    {
      title: "Female Hormones",
      description:
        "This measures levels of key female hormones to assess hormonal balance and diagnose conditions related to fertility, metabolism, stress, and more.",
      items: [
        [
          "Oestradiol/estrogen",
          "/pages/oestradiol-description-and-reference-ranges",
        ],
        [
          "Luteinizing Hormone (LH)",
          "/pages/luteinising-hormone-lh-description-and-reference-ranges",
        ],
        [
          "Follicle Stimulating Hormone (FSH)",
          "/pages/follicle-stimulating-hormone-fsh-description-and-reference-ranges",
        ],
      ],
    },
    {
      title: "Kidney Function",
      description:
        "This checks how well your kidneys are working and to detect kidney disease or monitor existing conditions.",
      items: [
        ["Creatinine", "/pages/creatinine-description-and-reference-ranges"],
        [
          "eGFR (CKD-EPI 2009 formula)",
          "/pages/egfr-description-and-reference-ranges",
        ],
        ["Urea", "/pages/urea-description-and-reference-ranges"],
        ["Uric acid", "/pages/uric-acid-description-and-reference-ranges"],
      ],
    },
    {
      title: "Liver Function",
      description:
        "This measures enzymes, proteins, and bilirubin levels to assess liver health and detect conditions like hepatitis, liver damage, or inflammation.",
      items: [
        [
          "Globulin calculation",
          "/pages/globulin-description-and-reference-ranges",
        ],
        ["Albumin", "/pages/albumin-description-and-reference-ranges"],
        [
          "Total protein",
          "/pages/total-protein-description-and-reference-ranges",
        ],
        ["Bilirubin", ""],
        [
          "Alanine AminoTransferase (ALT)",
          "/pages/alt-description-and-reference-ranges",
        ],
        ["Gamma-Glutamyl Transferase (GGT)", ""],
        [
          "Alkaline Phosphatase (ALP)",
          "/pages/alp-description-and-reference-ranges",
        ],
        [
          "Aspartate Aminotransferase (AST)",
          "/pages/ast-description-and-reference-ranges",
        ],
      ],
    },
    {
      title: "Cholesterol",
      description:
        "Also known as a lipid panel, this measures key markers to assess heart disease risk and monitor cardiovascular health.",
      items: [
        [
          "LDL cholesterol",
          "/pages/low-density-lipoprotein-hdl-description-and-reference-ranges",
        ],
        [
          "Non-HDL cholesterol",
          "/pages/non-hdl-cholesterol-description-and-reference-ranges",
        ],
        [
          "HDL cholesterol",
          "/pages/high-density-lipoprotein-hdl-description-and-reference-ranges",
        ],
        [
          "Total cholesterol",
          "/pages/total-cholesterol-description-and-reference-ranges",
        ],
        ["Total cholesterol/HDL ratio", ""],
        [
          "Triglycerides",
          "/pages/triglycerides-description-and-reference-ranges",
        ],
      ],
    },
    {
      title: "Inflammation",
      description:
        "Training hard? This marker is for your performance, as well as detection and monitoring inflammation in the body caused by infections, autoimmune disorders, or chronic diseases",
      items: [["C-Reactive protein", ""]],
    },
    {
      title: "Electrolytes",
      description:
        "This assesses hydration, muscle function, nerve signaling, and overall electrolyte balance.",
      items: [
        ["Magnesium", "/pages/magnesium-description-and-reference-ranges"],
      ],
    },
    {
      title: "Upgrade",
      notes: [
        'Not enough biomarkers? Check out the <a href="https://onedaytests.com/products/ultimate-performance">Ultimate Performance Blood Test</a>, for an even more comprehensive body check up.',
      ],
    },
    {
      title: "Home Kit Exclusions *",
      notes: [
        "Less common Full Blood Count Markers (marked with * symbol) are not reported in Capillary/Home kit samples due to their instability. If you are undergoing a particular FBC investigation and need these specific markers for your GP, we advise you to come to one of our clinics for a venous sample. We routinely report these markers in venous samples.",
        "Platelets Count (PLT) in home kits is usually reported, providing the blood has no clots.",
      ],
    },
  ];

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

  function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  function getLinkLayout([label, href]) {
    return `<li>${href ? `<a href="/pages/${href}-description-and-reference-ranges">${label}</a>` : `<p>${label}</p>`}</li>`;
  }

  function getBioMakersLayout() {
    return /* HTML */ `
      <section id="ab_biomarkers" class="ab-section ab-biomarkers">
        <div class="rich-text--container rich-text-full-width rich-text-block">
          <div class="ab-container">
            <h2 id="title"><span>48</span> Biomarkers in 10 Groups</h2>
            <div id="accordion">
              ${DATA.map(
                (
                  { title, description, items = [], notes = [] },
                  idx,
                ) => /* HTML */ `
                  <div class="item">
                    <button type="button" aria-expanded="${idx === 0}">
                      ${title}${items.length ? ` (${items.length})` : ""}
                    </button>
                    <div class="panel" hidden>
                      ${description ? `<em>${description}</em>` : ""}
                      ${items.length
                        ? `<ul>${items.map(getLinkLayout).join("")}</ul>`
                        : ""}
                      ${notes.map((n) => `<p>${n}</p>`).join("")}
                    </div>
                  </div>
                `,
              ).join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function getIsThisTestRightForYourLayout() {
    return /* HTML */ `
      <section class="ab-section ab-right-for-you">
        <div
          class="rich-text--container rich-text-full-width rich-text-block rich-text-alignment-left"
        >
          <div class="rich-text-content rte" data-rte="">
            <div class="funky_list">
              <ol role="list" style="--length: 1;">
                <li style="--i: 1;">
                  <h4>
                    IS THIS TEST RIGHT <br /><span style="color: #BD3332;"
                      >FOR YOU</span
                    >?
                  </h4>
                  <p class="ab-right-for-you-subtitle">
                    This test is a good fit if you want to:
                  </p>
                  <div class="ab-right-for-you-card-list">
                    <div class="ab-right-for-you-card">
                      <p>For a comprehensive health check</p>
                    </div>
                    <div class="ab-right-for-you-card">
                      <p>
                        You want to ensure your diet is providing the right
                        amounts of micronutrients
                      </p>
                    </div>
                    <div class="ab-right-for-you-card">
                      <p>You are worried about cardiovascular risk</p>
                    </div>
                    <div class="ab-right-for-you-card">
                      <p>
                        You want to check on your reproductive health or
                        menopause status
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function getHomeKitVSClinicLayout() {
    return /* HTML */ `
      <div
        class="rich-text--container rich-text-full-width ab-home-kit-vs-clinic"
      >
        <div class="metafield-rich_text_field">
          <h2>
            HOME KIT <span style="color: rgb(189, 51, 50);">VS</span> CLINIC
          </h2>
          <p>
            We recommend a clinic visit for this test, rather than finger prick,
            as this is a large panel and requires more blood than most panels.
            It is available as a home kit, however, if you don't bleed very well
            from your fingers, it will be a struggle.&nbsp;
          </p>
          <p>
            We have clinics nationwide and it takes 15 minutes, you can book a
            slot below. We recommend you come to the clinic for this test if
            possible. If not - please follow the instructions carefully (and
            warm your hands up!).
          </p>
          <p>
            There are also some minor exclusions that apply to the Full Blood
            Count in the home kit version of this test, please see below.
          </p>
        </div>
      </div>
    `;
  }

  function getUltimateHealthyWomenBloodTestInnerLayout() {
    return /* HTML */ `
      <p>
        Get more than just a routine check-up with our comprehensive women's
        blood panel. It covers <b>48 key biomarkers</b> to assess your hormones,
        nutrition, heart health and overall wellness.
      </p>
      <p>
        Gain clarity on <b>cardiovascular risk factors</b> like cholesterol,
        check that your liver and kidneys are working at their best, and assess
        your vitamin and mineral levels to identify any nutritional shortfalls.
        You'll also get information on your reproductive health, menopause
        status and thyroid function - all tied to energy, mood and vitality.
      </p>
      <p>
        Enjoy <b>fast, accurate results from our UK-based lab,</b> plus easy
        tracking in our <b>free online Health Dashboard.</b> This test is an
        ideal annual health review - check out our subscription plans to see how
        you could save.
      </p>
      <p>Stop guessing - start knowing.</p>
    `;
  }

  function hideSections() {
    // Hide ->  48 BIOMAKERS, WHY HAVE THE TEST?, WHY HAVE THE ULTIMATE HEALTHY WOMAN BLOOD TEST?, IS THIS TEST RIGHT FOR YOU?, IS THE ULTIMATE HEALTHY WOMAN BLOOD TEST RIGHT FOR YOU?
    const sectionInfo = [
      {
        container: ".rich-text--container",
        heading: "h3",
        text: "48 BIOMARKERS",
      },
      {
        container: ".shopify-section",
        heading: "h2",
        text: "WHY HAVE THE TEST?",
      },
      {
        container: ".shopify-section",
        heading: "h4",
        text: "WHY HAVE THE ULTIMATE HEALTHY WOMAN BLOOD TEST?",
      },
      {
        container: ".slideshow",
        heading: "h2",
        text: "IS THIS TEST RIGHT FOR YOU?",
      },
      {
        container: ".rich-text--container",
        heading: "h4",
        text: "IS THE ULTIMATE HEALTHY WOMAN BLOOD TEST RIGHT FOR YOU?",
      },
    ];

    sectionInfo.forEach(({ container, heading, text }) => {
      qq(container)
        .find(
          (item) =>
            q(item, heading) && q(item, heading).textContent.trim() === text,
        )
        .classList.add("ab-hidden");
    });
  }

  function clickFunction() {
    // EXPAND / COLLAPSE
    const accordion = q(".ab-biomarkers #accordion");
    accordion.addEventListener("click", ({ target }) => {
      const btn = target.closest("button");
      if (!btn) return;
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", !open);
      btn.nextElementSibling.hidden = open;
    });
  }

  function updateSections() {
    q("a[href='#biomarkers_anchor']").href = "#ab_biomarkers";

    const ultimateHealthyWomenElement = qq(".shopify-section").find(
      (item) =>
        q(item, "h2") &&
        q(item, "h2").textContent.trim() ===
          "ULTIMATE HEALTHY WOMAN BLOOD TEST OVERVIEW",
    );

    // 48 BIOMARKERS IN 10 GROUPS +  IS THIS TEST RIGHT FOR YOU? +  HOME KIT VS CLINIC
    ultimateHealthyWomenElement.insertAdjacentHTML(
      "beforebegin",
      getBioMakersLayout() +
        getIsThisTestRightForYourLayout() +
        getHomeKitVSClinicLayout(),
    );

    // ULTIMATE HEALTHY WOMAN BLOOD TEST OVERVIEW
    ultimateHealthyWomenElement.classList.add(
      "ab-ultimateHealthyWomen-section",
    );
    q(ultimateHealthyWomenElement, ".metafield-rich_text_field").innerHTML =
      getUltimateHealthyWomenBloodTestInnerLayout();

    // Relocate -> SHARE YOUR STORY
    const quickAndAccurateResultsElement = qq(".shopify-section ").find(
      (item) =>
        q(item, "h2") &&
        q(item, "h2").textContent.trim() ===
          "QUICK AND ACCURATE RESULTS DIRECT FROM A LABORATORY.",
    );
    const shareYourStoryElement = q(".shopify-section:has(.glider-contain)");
    quickAndAccurateResultsElement.insertAdjacentElement(
      "afterend",
      shareYourStoryElement,
    );
  }

  function init() {
    if (window[page_initials] === true) return;
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    window[page_initials] = true;

    updateSections();
    hideSections();
    clickFunction();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`,
      ) &&
      q("a[href='#biomarkers_anchor']") &&
      q(".shopify-section:has(.glider-contain)") &&
      qq(".shopify-section").filter(
        (item) =>
          q(item, "h2") &&
          q(item, "h2").textContent.trim() ===
            "ULTIMATE HEALTHY WOMAN BLOOD TEST OVERVIEW",
      ).length > 0 &&
      qq(".shopify-section").filter(
        (item) =>
          q(item, "h2") &&
          q(item, "h2").textContent.trim() ===
            "QUICK AND ACCURATE RESULTS DIRECT FROM A LABORATORY.",
      ).length > 0 &&
      qq(".shopify-section").filter(
        (item) =>
          q(item, "h2") &&
          q(item, "h2").textContent.trim() === "WHY HAVE THE TEST?",
      ).length > 0 &&
      qq(".shopify-section").filter(
        (item) =>
          q(item, "h4") &&
          q(item, "h4").textContent.trim() ===
            "WHY HAVE THE ULTIMATE HEALTHY WOMAN BLOOD TEST?",
      ).length > 0 &&
      qq(".rich-text--container").filter(
        (item) =>
          q(item, "h3") && q(item, "h3").textContent.trim() === "48 BIOMARKERS",
      ).length > 0 &&
      qq(".slideshow").filter(
        (item) =>
          q(item, "h2") &&
          q(item, "h2").textContent.trim() === "IS THIS TEST RIGHT FOR YOU?",
      ).length > 0 &&
      qq(".rich-text--container").filter(
        (item) =>
          q(item, "h4") &&
          q(item, "h4").textContent.trim() ===
            "IS THE ULTIMATE HEALTHY WOMAN BLOOD TEST RIGHT FOR YOU?",
      ).length > 0
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    return false;
  }
})();
