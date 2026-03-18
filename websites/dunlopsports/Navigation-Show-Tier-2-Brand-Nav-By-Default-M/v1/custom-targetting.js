// How to implement in Optimizely:
// 1. Go to your experiment's Targeting tab.
// 2. Under Page Targeting, ensure your experiment is targeted to the relevant pages (e.g., using a URL match).
// 3. In the Activation section, select Custom Code.
// 4. Paste the code snippet below into the JavaScript editor.
// 5. Important: You will still need to add your "Mobile Users" audience to the experiment's Audience Targeting section. This activation condition will then only run for users who are already part of the "Mobile Users" audience.

function customTargetting() {
    const EXPERIMENT_ID = "6603162392461312"; // Replace with experiment's ID

    function waitForElement(predicate, callback, timer = 20000, frequency = 150) {
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
        return o ? s.querySelector(o) : document.querySelector(s);
    }

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function triggerExperiment() {
        window[EXPERIMENT_ID] = true;
        window["optimizely"].push({
            type: "activate",
            experimentId: EXPERIMENT_ID, // Replace with experiment's ID
        });
        return true;
    }

    const IS_BUCKETED = window[EXPERIMENT_ID] === true;

    if (IS_BUCKETED) {
        return true;
    }

    function handleClick(e) {
        console.log("Init Experiment: Navigation - Show Tier 2 Brand Nav By Default [M]", "Experiment ID:", EXPERIMENT_ID);
        triggerExperiment();
        e.currentTarget.removeEventListener("click", handleClick);
    }

    waitForElement(
        () => q(".navbar-toggler"),
        () => {
            const targetNode = q(".navbar-toggler");
            targetNode.addEventListener("click", handleClick);
        }
    );
}
