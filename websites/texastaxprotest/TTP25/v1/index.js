(async () => {
    const TEST_ID = "TTP25";
    const VARIANT_ID = "V1"; /* Control, V1, V2 */

    function logInfo(message) {
        console.log(
            `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
            "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            message,
        );
    }

    logInfo("fired");

    const TEST_CONFIG = {
        client: "Acadia",
        project: "Texas Tax Protest",
        site_url: "https://www.texastaxprotest.com",
        test_name: "MS126: [NAV-Mobile] Move Main Nav Element into CTAs (2) SET UP TEST",
        page_initials: "AB-TTP25",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function fireGA4Event(eventName, eventLabel = "") {
        console.log("fireGA4Event", eventName, eventLabel);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "GA4event",
            "ga4-event-name": "cro_event",
            "ga4-event-p1-name": "event_category",
            "ga4-event-p1-value": eventName,
            "ga4-event-p2-name": "event_label",
            "ga4-event-p2-value": eventLabel,
        });
    }

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
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);

        // investigation();
    }

    function investigation() {
        const html = `
        <script class="w-json-ld" type="application/ld+json" id="w-json-ldwistia_40">
            {
                "@context": "http://schema.org/",
                "@id": "https://fast.wistia.net/embed/iframe/p9lruxird8",
                "@type": "VideoObject",
                "duration": "PT1M55S",
                "name": "CM_TexasTax_MAIN",
                "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/1bb4759b294f04e7d7b264504cc5de48.jpg?image_crop_resized=640x360",
                "embedUrl": "https://fast.wistia.net/embed/iframe/p9lruxird8",
                "uploadDate": "2024-04-03T23:07:50.000Z",
                "description": "a TTP Site Videos video",
                "contentUrl": "https://embed-ssl.wistia.com/deliveries/542de4f89401f23f0bd26756b2f135a7e73508ed.m3u8",
                "transcript": "[WOMAN CRIES]\n\n- Property taxes suck harder than 100 pounds skeeter. Thanks to Texas Tax Protest, you can take back the power to control your property taxes.\n\n- Oh yeah, this is way better. Can Texas Tax Protest really lower my property taxes?\n\n- You bet your boots. [SWOOSH]\n\nYou love your house as a home and as an investment. But then, the government comes in like a bull in a China shop and--\n\n[SLEDGEHAMMER SMASH]\n\nso long investment dollars and how to do outrageous property taxes. But Texas Tax Protest helps protect what's yours and keeps your money, right where it belongs.\n\n- Great! I'd hate to fight it on my own.\n\n[FINGER CLICKS]\n\n- There's no need to spend hours filling out forms, researching property values, or sitting and waiting in a county tax office. Let Texas Tax Protest empower you [FINGER CLICKS]\n\nby doing the heavy lifting.\n\n[SWOOSH]\n\n- But how they really do it?\n\n- Well--\n\n- No don't snap! Dang it!\n\nNARRATOR: Texas Tax Protest proprietary software analyzes millions of data records to prepare the strongest case to negotiate a fair value for you. You enroll in their program one time and Texas Tax Protest represents you each tax year.\n\n- Oh, nice.\n\nNARRATOR: Plus, they have excellent customer service.\n\n- So you can talk to a fellow Texan any time you call.\n\n- Yeehaw.\n\n- Only pay your fair share and spend your money how you want. Buy an extravagant sculpture of the state of Texas. Hire an opera singer to serenade you.\n\n- (SINGING) Property taxes is suck!\n\n- Or heal your childhood trauma by buying that designer pony your daddy never bought you.\n\n- [SQUEAL]\n\nGoing to name her Dr. Catherine after my therapist. [WOMAN CRIES]\n\n- Take back the power to control your property taxes with Texas Tax Protest.\n\nNARRATOR: Go to Texastaxprotest.com and join thousands of money saving Texans today.\n\n[FINGER CLICKS]\n\nCLICKS]",
                "potentialAction": {
                    "@type": "SeekToAction",
                    "target": "https://www.texastaxprotest.com/?wtime={seek_to_second_number}",
                    "startOffset-input": "required name=seek_to_second_number"
                }
            }
        </script>
    
        <div
            class="my-new-content"
            style="position: fixed; top: 0; bottom: 0; left: 0; right: 0; background-color: rgb(8 8 8 / 90%); z-index: 9999; display: flex; justify-content: center; align-items: center"
        >
            <div class="wistia-video" style="width: 640px; height: 360px">
                <
                <!-- <div id="wistia-player-igkoj" class="wistia_embed wistia_async_p9lruxird8 wistia_embed_initialized" style="width: 100%; height: 100%"></div> -->
                <div id="wistia-player-ttp25" class="wistia_embed wistia_async_p9lruxird8 wistia_embed_initialized" style="width: 100%; height: 100%"></div>
            </div>
        </div>
    `;

        document.body.insertAdjacentHTML("afterbegin", html);

        setTimeout(() => {
            //
            const videoId = "wistia-player-ttp25"; // Unique element id for your overlay video
            window._wq = window._wq || [];
            _wq.push({
                id: videoId,
                onReady: function (video) {
                    console.log("Video is ready:", video);
                    // Pause the video
                    // video.pause();
                    // video.time(0);
                    // To play the video
                    // video.play();
                    video.bind("end", function () {
                        // Video has ended
                        console.log("=== Video ended! ====");
                        video.time(0);
                        // You can trigger your logic here

                        console.log("=== Video ended! ====");
                        const hashedId = video.hashedId();
                        video.replaceWith(hashedId, { transition: "none" });
                    });
                },
            });
        }, 1000);
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && typeof window.Wistia === "object");
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
