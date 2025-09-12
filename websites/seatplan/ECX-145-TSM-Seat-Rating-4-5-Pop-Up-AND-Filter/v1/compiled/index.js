var id = "1757688068081_2473_v1";
var name = "v1";
var testInfo = {
	id: id,
	name: name};

(() => {
    const TEST_CONFIG = {
        client: "Client Name",
        project: "Project Name",
        site_url: "https://www.example.com",
        test_name: "Ticket Name",
        page_initials: "AB-TEST",
        test_variation: 1,
        test_version: 0.0001,
    };

    function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
        try {
            if (timer <= 0) {
                throw new Error(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            } else if (predicate && predicate()) {
                callback();
            } else {
                setTimeout(() => {
                    waitForElement(predicate, callback, timer - frequency, frequency);
                }, frequency);
            }
        } catch (error) {
            return;
        }
    }

    function init() {
        document.body.classList.add(
            TEST_CONFIG.page_initials,
            `${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation}`,
            `${TEST_CONFIG.page_initials}--version${TEST_CONFIG.test_version}`
        );

        console.table({ ID: testInfo.id, Variation: testInfo.name });

        console.log(
            `%c${JSON.stringify(TEST_CONFIG, null, 2)}`,
            "background: black; border: 2px solid green; color: white; display: block; text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3); text-align: left; font-weight: bold; padding: 10px; margin: 10px; font-family: monospace; white-space: pre;"
        );
    }

    function hasAllTargetElements() {
        return !!(
            document.querySelector(
                `body:not(.${TEST_CONFIG.page_initials}):not(${TEST_CONFIG.page_initials}--v${TEST_CONFIG.test_variation})`
            ) && document.querySelector(`.target-element`)
        );
    }

    waitForElement(hasAllTargetElements, init);
})();
