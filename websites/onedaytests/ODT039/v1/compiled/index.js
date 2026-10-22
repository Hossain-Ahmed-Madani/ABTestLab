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

    function getBioMakersLayout() {
        return /* HTML */ `
            <section class="ab-section">
                <div style="border:1px solid red; text-transform: uppercase;">48 biomarkers in 10 groups</div>
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
        const ultimateHealthyWomenElement = qq(".shopify-section ").find((item) => q(item, "h2") && q(item, "h2").textContent.trim() === "ULTIMATE HEALTHY WOMAN BLOOD TEST OVERVIEW");

        // 48 BIOMARKERS IN 10 GROUPS +  IS THIS TEST RIGHT FOR YOU? +  HOME KIT VS CLINIC
        ultimateHealthyWomenElement.insertAdjacentHTML("beforebegin", getBioMakersLayout() + getIsThisTestRightForYourLayout() + getHomeKitVSClinicLayout());

        // ULTIMATE HEALTHY WOMAN BLOOD TEST OVERVIEW
        ultimateHealthyWomenElement.classList.add("ab-ultimateHealthyWomen-section");
        q(ultimateHealthyWomenElement, ".metafield-rich_text_field").innerHTML = getUltimateHealthyWomenBloodTestInnerLayout();

        // SHARE YOUR STORY
        const quickAndAccurateResultsElement = qq(".shopify-section ").find(
            (item) => q(item, "h2") && q(item, "h2").textContent.trim() === "QUICK AND ACCURATE RESULTS DIRECT FROM A LABORATORY.",
        );
        const shareYourStoryElement = q(".shopify-section:has(.glider-contain)");
        quickAndAccurateResultsElement.insertAdjacentElement("afterend", shareYourStoryElement);
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
            qq(".shopify-section ").filter((item) => q(item, "h2") && q(item, "h2").textContent.trim() === "ULTIMATE HEALTHY WOMAN BLOOD TEST OVERVIEW").length > 0 &&
            q(".shopify-section:has(.glider-contain)") &&
            qq(".shopify-section ").filter((item) => q(item, "h2") && q(item, "h2").textContent.trim() === "QUICK AND ACCURATE RESULTS DIRECT FROM A LABORATORY.").length > 0
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
