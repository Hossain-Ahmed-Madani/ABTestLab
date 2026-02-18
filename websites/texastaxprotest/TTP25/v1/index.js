/* 

Figma: https://www.figma.com/design/EegmeIrFHMK3rVEhYTOlxT/TTP25---HOME--Add-Video?node-id=2001-2192&p=f&t=G8nZFwZy9SAvbBgU-0
Test container: https://marketer.monetate.net/control/a-7b7b9c2b/p/texastaxprotest.com/experience/2088292#c2622624:what

*/

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
        test_name: "TTP25: [HOME] Add Video - (2) SET UP TEST",
        page_initials: "AB-TTP25",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    const ASSETS = {
        close_cta_svg: /* HTML */ `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.907335 14C0.675145 14 0.442789 13.9111 0.266072 13.7343C-0.0886906 13.3797 -0.0886906 12.8063 0.266072 12.4517L12.4514 0.265953C12.806 -0.0886509 13.3793 -0.0886509 13.7339 0.265953C14.0887 0.620557 14.0887 1.1939 13.7339 1.54851L1.5486 13.7343C1.37072 13.912 1.13953 14 0.907335 14Z"
                fill="white"
            />
            <path
                d="M13.0927 14C12.8605 14 12.6283 13.9111 12.4514 13.7343L0.266072 1.54851C-0.0886906 1.1939 -0.0886906 0.620557 0.266072 0.265953C0.620668 -0.0886509 1.19384 -0.0886509 1.5486 0.265953L13.7339 12.4517C14.0887 12.8063 14.0887 13.3797 13.7339 13.7343C13.557 13.912 13.3249 14 13.0927 14Z"
                fill="white"
            />
        </svg> `,
        play_svg: /* HTML */ `
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 5.31586C13.3333 6.06437 13.3333 7.93564 12 8.68414L3 13.7366C1.66667 14.4851 -6.72981e-08 13.5494 0 12.0524L4.54262e-07 1.94758C5.2156e-07 0.450566 1.66667 -0.485068 3 0.263439L12 5.31586Z"
                fill="white"
            />
        </svg> `,
    };

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

    function createLayout() {
        const contactPrevSibling = q('.mantine-Button-root[href="#contact"]').previousSibling;
        contactPrevSibling.insertAdjacentHTML(
            "afterend",
            /* HTML */ ` <div class="${page_initials}__modal-cta-container">
                <div class="${page_initials}__modal-open-cta" style="cursor: pointer;">Play Video</div>
            </div>`,
        );

        const ctaContainer = q(`.${page_initials}__modal-cta-container`);

        qq('.mantine-Button-root[href="#contact"]').forEach((cta) => {
            ctaContainer.insertAdjacentElement("afterbegin", cta);
        });

        q("body").insertAdjacentHTML(
            "afterbegin",
            /* HTML */ ` <div class="${page_initials}__modal-layout">
                <div class="${page_initials}__modal-backdrop"></div>
                <div class="${page_initials}__modal">
                    <div class="${page_initials}__modal-close-cta">${ASSETS.close_cta_svg}</div>
                    <div class="${page_initials}__modal__content">Video Content here</div>
                </div>
            </div>`,
        );
    }

    function animate(targetElement, className, interval) {
        if (!targetElement) return;
        if (className.includes(".")) className.replace(".", "");
        targetElement.classList.add(className);
        setTimeout(() => targetElement.classList.remove(className), interval);
    }

    function preventScroll(e) {
        e.preventDefault();
    }

    function handleModalView(action = "show") {
        const modalShowClass = `${page_initials}--modal-show`;
        const modal = q(`.${page_initials}__modal`);
        const body = document.body;

        if (action === "show" && !body.classList.contains(modalShowClass)) {
            animate(modal, `${page_initials}__slide-bottom`, 200);
            modal.classList.add(`${page_initials}__slide-bottom`);
            body.classList.add(modalShowClass);
            document.addEventListener("touchmove", preventScroll, { passive: false });
        }

        if (action === "hide") {
            animate(modal, `${page_initials}__slide-top`, 200);
            setTimeout(() => body.classList.remove(modalShowClass), 200);
            document.removeEventListener("touchmove", preventScroll);
        }
    }

    function clickFunction() {
        document.body.addEventListener("click", (e) => {
            // ====== MODAL ======

            // OPEN MODAL
            if (e.target.closest(`.${page_initials}__modal-open-cta`)) {
                handleModalView("show");
            }

            if (e.target.closest(`.${page_initials}__modal-close-cta`) || (e.target.closest(`.${page_initials}__modal-backdrop`) && !e.target.closest(`.${page_initials}__modal`))) {
                handleModalView("hide");
            }
        });

        // CLOSE POPUP -> ON ESC CLICK
        document.addEventListener("keydown", function (evt) {
            evt = evt || window.event; // Fallback for older browsers (optional)
            if (evt.key === "Escape" || evt.key === "Esc") {
                handleModalView("hide");
            }
        });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        createLayout();
        clickFunction();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            qq('.mantine-Button-root[href="#contact"]').length === 2 &&
            document.readyState === "complete" &&
            window.Wistia &&
            typeof window.Wistia === "object"
        );
    }

    // try {
    //     await waitForElementAsync(checkForItems);
    //     init();
    // } catch (error) {
    //     return false;
    // }

    waitForElementAsync(checkForItems).then(init);
})();
