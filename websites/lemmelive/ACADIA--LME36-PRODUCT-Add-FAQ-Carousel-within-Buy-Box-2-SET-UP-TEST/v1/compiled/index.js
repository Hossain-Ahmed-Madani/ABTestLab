/* 

TEST INFO:
    Ticket: https://trello.com/c/RTPTT3Iq/4221-%F0%9F%92%99-lme36-product-add-faq-carousel-within-buy-box-2-set-up-test
    Test Data: https://docs.google.com/spreadsheets/d/12Xw4gg-15vp-CJ3IMeJ_0mmgYMcC73S_OEGfExADDRk/edit?gid=0#gid=0
    Container: https://marketer.monetate.net/control/a-2087c1e5/p/lemmelive.com/experience/2054686#c2580323:what
    Figma: https://www.figma.com/design/KIxYJABuvWotw6vOTpc0Eo/LME36?node-id=17-2163&t=bry8ux3vKRhJ2kjG-0
    Preview: 

*/

(() => {
    const TEST_CONFIG = {
        page_initials: "LME36",
        test_variation: 1,
        test_version: 0.0001,
    };

    const { page_initials, test_variation, test_version } = TEST_CONFIG;

    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
        if (timer <= 0) {
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => waitForElement(predicate, callback, timer - frequency, frequency), frequency);
        }
    }

    function q(s, o) {
        return document.querySelector(s);
    }


    function logInfo(message) {
        console.log(
            `%cAcadia%c${page_initials}-V${test_variation}`,
            "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
            message
        );
    }

    

    function init() {
        logInfo("fired");
        document.body.classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
    }

    function hasAllTargetElements() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`));
    }

    waitForElement(hasAllTargetElements, init);
})();
