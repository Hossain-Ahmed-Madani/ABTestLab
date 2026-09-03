(async () => {
    const TEST_CONFIG = {
        client: "ROI Revolution",
        project: "steinertractor",
        site_url: "https://www.steinertractor.com",
        test_name: "Sitewide - Increase Prominence of Free Delivery CTA [DTM]",
        page_initials: "AB-FREE-DELIVERY-CTA",
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
        return document.querySelector(s);
    }

    function init() {
        if (window[page_initials] === true) return;
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        window[page_initials] = true;

        q(".review-template").classList.add('ab-hidden');


        q(".review-template").insertAdjacentHTML(
            "beforebegin",
            /* HTMl */ `
            <div class="ab-promotion-banner-container owl-carousel">
                <div class="item review-template ab-free-delivery">
                    <span class="ab-icon">
                        <img src="https://cdn-3.convertexperiments.com/uf/100412165/10043124/subtract2x_6a9976113777d.png"/>
                    </span>
                    <span class="review-text">Learn How to <span class="ab-delivery-cta">Get FREE Delivery</span></span>
                </div>
                <div class="item review-template">
                    <span class="stars">★★★★★</span>
                    <span class="review-text">2,300+ Google Reviews</span>
                </div>
            </div>
            `,
        );

        console.table(TEST_CONFIG);

        // $('.ab-promotion-banner-container.owl-carousel').owlCarousel({
        //     loop:true,
        //     margin:10,
        //     nav:true,
        //     responsive:{
        //         0:{
        //             items:1
        //         },
        //         600:{
        //             items:3
        //         },
        //         1000:{
        //             items:5
        //         }
        //     }
        // })
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) && q(".review-template"));
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        return false;
    }
})();
