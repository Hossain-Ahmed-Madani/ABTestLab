(async () => {
    const TEST_CONFIG = {
        client: "Converted",
        project: "One Day Tests",
        site_url: "https://onedaytests.com",
        test_name: "ODT039 - PDP: Test details before brand content",
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
                ["White Blood Cell Count (WBC)", "white-blood-cell-count-wbc"],
                ["Red Blood Cell Count (RBC)", "red-blood-cell-count-rbc"],
                ["Haemoglobin (HGB)", "haemoglobin-hgb"],
                ["Hematocrit (HCT)", "hematocrit-hct"],
                ["Mean Corpuscular Volume (MCV)", "mean-corpuscular-volume-mcv"],
                ["Mean Corpuscular Haemoglobin (MCH)", "mean-corpuscular-haemoglobin-mch"],
                ["Mean Corpuscular Haemoglobin Concentration (MCHC)", "mean-corpuscular-haemoglobin-concentration-mchc"],
                ["Red Cell Distribution Width (RDW)", "red-cell-distribution-width-rdw"],
                ["Platelets* (PLT)", "platelets-plt"],
                ["Mean Platelet Volume* (MPV)", "mean-platelet-volume-mpv"],
                ["Lymphocytes* (LYM)", "lymphocytes-lym"],
                ["Monocytes* (MON)", "monocytes-mon"],
                ["Neutrophils* (NEU)", "neutrophils-neu"],
                ["Eosinophils* (EOS)", "eosinophils-eos"],
                ["Basophils* (BAS)", "basophils-bas"],
            ],
        },
        {
            title: "Immunoglobulins",
            description: "Biomarker to assess immune function and help detect IgA deficiency or immune-related conditions.",
            items: [["Total IgA", "immunoglobulin-a-iga"]],
        },
        {
            title: "Thyroid Function",
            description:
                "A thyroid function part of this blood test that checks levels of triiodothyronine (T3), thyroxine (T4), and thyroid-stimulating hormone (TSH) to diagnose thyroid disorders like hypothyroidism or hyperthyroidism.",
            items: [
                ["Unbound thyroxine (Free T4)", "thyroxine-t4"],
                ["Unbound triiodothyronine (Free T3)", "triiodothyronine-t3"],
                ["Thyroid Stimulating Hormone (TSH)", "thyroid-stimulating-hormone-tsh"],
            ],
        },
        {
            title: "Micronutrients And Vitamins",
            description: "Here we measure essential vitamins and minerals to detect deficiencies that can impact energy, immunity, and overall health.",
            items: [
                ["Vitamin B12", "vitamin-b12"],
                ["Folate serum"],
                ["Ferritin", "ferritin"],
                ["Iron", "iron"],
                ["Transferrin"],
                ["TIBC Calculation", "total-iron-binding-capacity-tibc"],
            ],
        },
        {
            title: "Female Hormones",
            description: "This measures levels of key female hormones to assess hormonal balance and diagnose conditions related to fertility, metabolism, stress, and more.",
            items: [
                ["Oestradiol/estrogen", "oestradiol"],
                ["Luteinizing Hormone (LH)", "luteinising-hormone-lh"],
                ["Follicle Stimulating Hormone (FSH)", "follicle-stimulating-hormone-fsh"],
            ],
        },
        {
            title: "Kidney Function",
            description: "This checks how well your kidneys are working and to detect kidney disease or monitor existing conditions.",
            items: [
                ["Creatinine", "creatinine"],
                ["eGFR (CKD-EPI 2009 formula)", "egfr"],
                ["Urea", "urea"],
                ["Uric acid", "uric-acid"],
            ],
        },
        {
            title: "Liver Function",
            description: "This measures enzymes, proteins, and bilirubin levels to assess liver health and detect conditions like hepatitis, liver damage, or inflammation.",
            items: [
                ["Globulin calculation", "globulin"],
                ["Albumin", "albumin"],
                ["Total protein", "total-protein"],
                ["Bilirubin", "bilirubin"],
                ["Alanine AminoTransferase (ALT)", "alt"],
                ["Gamma-Glutamyl Transferase (GGT)", "ggt"],
                ["Alkaline Phosphatase (ALP)", "alp"],
                ["Aspartate Aminotransferase (AST)", "ast"],
            ],
        },
        {
            title: "Cholesterol",
            description: "Also known as a lipid panel, this measures key markers to assess heart disease risk and monitor cardiovascular health.",
            items: [
                ["LDL cholesterol", "low-density-lipoprotein-hdl"],
                ["Non-HDL cholesterol", "non-hdl-cholesterol"],
                ["HDL cholesterol", "high-density-lipoprotein-hdl"],
                ["Total cholesterol", "total-cholesterol"],
                ["Total cholesterol/HDL ratio"],
                ["Triglycerides", "triglycerides"],
            ],
        },
        {
            title: "Inflammation",
            description:
                "Training hard? This marker is for your performance, as well as detection and monitoring inflammation in the body caused by infections, autoimmune disorders, or chronic diseases",
            items: [["C-Reactive protein"]],
        },
        {
            title: "Electrolytes",
            description: "This assesses hydration, muscle function, nerve signaling, and overall electrolyte balance.",
            items: [["Magnesium", "magnesium"]],
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

    function getLinkLayout([label, slug]) {
        return `<li>${slug ? `<a href="/pages/${slug}-description-and-reference-ranges">${label}</a>` : label}</li>`;
    }

    function getBioMakersLayout() {
        return /* HTML */ `
            <section class="ab-section ab-biomakers">
                <div class="rich-text--container rich-text-full-width rich-text-block">
                    <div class="ab-container">
                        <h2 id="title"><span>48</span> Biomarkers in 10 Groups</h2>
                        <div id="accordion">
                            ${DATA.map(
                                ({ title, description, items = [], notes = [] }, idx) => /* HTML */ `
                                    <div class="item">
                                        <button type="button" aria-expanded="${idx === 0}">${title}${items.length ? ` (${items.length})` : ""}</button>
                                        <div class="panel" ${idx === 0 ? "" : "hidden"}>
                                            ${description ? `<em>${description}</em>` : ""} ${items.length ? `<ul>${items.map(getLinkLayout).join("")}</ul>` : ""}
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
                <div class="rich-text--container rich-text-full-width rich-text-block rich-text-alignment-left">
                    <div class="rich-text-content rte" data-rte="">
                        <div class="funky_list">
                            <ol role="list" style="--length: 1;">
                                <li style="--i: 1;">
                                    <h4>IS TEST RIGHT <span style="color: #BD3332;">FOR YOU</span>?</h4>
                                    <p class="ab-right-for-you-subtitle">This test is a good fit if you want to:</p>
                                    <div class="ab-right-for-you-card-list">
                                        <div class="ab-right-for-you-card">
                                            <p>For a comprehensive health check</p>
                                        </div>
                                        <div class="ab-right-for-you-card">
                                            <p>You want to ensure your diet is providing the right amounts of micronutrients</p>
                                        </div>
                                        <div class="ab-right-for-you-card">
                                            <p>You are worried about cardiovascular risk</p>
                                        </div>
                                        <div class="ab-right-for-you-card">
                                            <p>You want to check on your reproductive health or menopause status</p>
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
            <div class="rich-text--container rich-text-full-width">
                <div class="metafield-rich_text_field">
                    <h2>HOME KIT <span style="color: rgb(189, 51, 50);">VS</span> CLINIC</h2>
                    <p>
                        We recommend a clinic visit for this test, rather than finger prick, as this is a large panel and requires more blood than most panels. It is available as a home
                        kit, however, if you don't bleed very well from your fingers, it will be a struggle.&nbsp;
                    </p>
                    <p>
                        We have clinics nationwide and it takes 15 minutes, you can book a slot below. We recommend you come to the clinic for this test if possible. If not - please
                        follow the instructions carefully (and warm your hands up!).
                    </p>
                    <p>There are also some minor exclusions that apply to the Full Blood Count in the home kit version of this test, please see below.</p>
                </div>
            </div>
        `;
    }

    function getUltimateHealthyWomenBloodTestInnerLayout() {
        return /* HTML */ `
            <p>
                Get more than just a routine check-up with our comprehensive women's blood panel. It covers <b>48 key biomarkers</b> to assess your hormones, nutrition, heart health and
                overall wellness.
            </p>
            <p>
                Gain clarity on <b>cardiovascular risk factors</b> like cholesterol, check that your liver and kidneys are working at their best, and assess your vitamin and mineral
                levels to identify any nutritional shortfalls. You'll also get information on your reproductive health, menopause status and thyroid function - all tied to energy, mood
                and vitality.
            </p>
            <p>
                Enjoy <b>fast, accurate results from our UK-based lab,</b> plus easy tracking in our <b>free online Health Dashboard.</b> This test is an ideal annual health review -
                check out our subscription plans to see how you could save.
            </p>
            <p>Stop guessing - start knowing.</p>
        `;
    }

    function updateLayout() {
        const ultimateHealthyWomenElement = qq(".shopify-section").find((item) => q(item, "h2") && q(item, "h2").textContent.trim() === "ULTIMATE HEALTHY WOMAN BLOOD TEST OVERVIEW");

        // 48 BIOMARKERS IN 10 GROUPS +  IS THIS TEST RIGHT FOR YOU? +  HOME KIT VS CLINIC
        ultimateHealthyWomenElement.insertAdjacentHTML("beforebegin", getBioMakersLayout() + getIsThisTestRightForYourLayout() + getHomeKitVSClinicLayout());

        // ULTIMATE HEALTHY WOMAN BLOOD TEST OVERVIEW
        ultimateHealthyWomenElement.classList.add("ab-ultimateHealthyWomen-section");
        q(ultimateHealthyWomenElement, ".metafield-rich_text_field").innerHTML = getUltimateHealthyWomenBloodTestInnerLayout();

        // Hide -> 48 BIOMAKERS, WHY HAVE THE TEST?, WHY HAVE THE ULTIMATE HEALTHY WOMAN BLOOD TEST?

        qq(".rich-text--container")
            .find((item) => q(item, "h3") && q(item, "h3").textContent.trim() === "48 BIOMARKERS")
            ?.classList.add("ab-hidden");
        qq(".shopify-section")
            .find((item) => q(item, "h2") && q(item, "h2").textContent.trim() === "WHY HAVE THE TEST?")
            ?.classList.add("ab-hidden");
        qq(".shopify-section")
            .find((item) => q(item, "h4") && q(item, "h4").textContent.trim() === "WHY HAVE THE ULTIMATE HEALTHY WOMAN BLOOD TEST?")
            ?.classList.add("ab-hidden");

        // SHARE YOUR STORY
        const quickAndAccurateResultsElement = qq(".shopify-section ").find(
            (item) => q(item, "h2") && q(item, "h2").textContent.trim() === "QUICK AND ACCURATE RESULTS DIRECT FROM A LABORATORY.",
        );
        const shareYourStoryElement = q(".shopify-section:has(.glider-contain)");
        quickAndAccurateResultsElement.insertAdjacentElement("afterend", shareYourStoryElement);

        // EXPAND / COLLAPSE
        const accordion = document.getElementById("accordion");
        accordion.addEventListener("click", ({ target }) => {
            const btn = target.closest("button");
            if (!btn) return;
            const open = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", !open);
            btn.nextElementSibling.hidden = open;
        });
    }

    function init() {
        if (window[page_initials] === true) return;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;
        console.table(TEST_CONFIG);

        updateLayout();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            qq(".shopify-section").filter((item) => q(item, "h2") && q(item, "h2").textContent.trim() === "ULTIMATE HEALTHY WOMAN BLOOD TEST OVERVIEW").length > 0 &&
            q(".shopify-section:has(.glider-contain)") &&
            qq(".shopify-section").filter((item) => q(item, "h2") && q(item, "h2").textContent.trim() === "QUICK AND ACCURATE RESULTS DIRECT FROM A LABORATORY.").length > 0 &&
            qq(".shopify-section").filter((item) => q(item, "h2") && q(item, "h2").textContent.trim() === "WHY HAVE THE TEST?").length > 0 &&
            qq(".shopify-section").filter((item) => q(item, "h4") && q(item, "h4").textContent.trim() === "WHY HAVE THE ULTIMATE HEALTHY WOMAN BLOOD TEST?").length > 0 &&
            qq(".rich-text--container").filter((item) => q(item, "h3") && q(item, "h3").textContent.trim() === "48 BIOMARKERS").length > 0
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
