/* 

URL: https://www.covesmart.com/quiz-results/
Figma: https://www.figma.com/design/6kGIV8C7MvldVxOx8N3EHb/CS104---QUIZ-RESULTS--Card-Clean-Up?node-id=2001-3683&p=f&t=bHhinD1kOtBsyoSs-0
Test container: https://app.convert.com/accounts/10049195/projects/100410617/experiences/1004177293/summary
Forced variation: https://www.covesmart.com/quiz-results/?utm_campaign=acadia
Preview: https://www.covesmart.com/quiz-results/?convert_action=convert_vpreview&convert_e=1004177293&convert_v=1004417797
*/

const TEST_ID = "CS104";
const VARIANT_ID = "V1";

function logInfo(message) {
    console.log(
        `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
        "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
        "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
        message
    );
}

logInfo("fired");

(async () => {
    const TEST_CONFIG = {
        client: "Acadia",
        project: "Convesmart",
        host: "https://www.covesmart.com/",
        test_name: "CS104: [QUIZ RESULTS] Card Clean Up - (2) SET UP TEST",
        page_initials: "AB-CS104",
        test_variation: 1,
        test_version: 0.0002,
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

    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function updateLayout() {

        // Strike through pricing
        qq(
            ".relative.text-sm.text-cove-dark-grey.after\\:absolute.after\\:left-0.after\\:right-0.after\\:top-\\[calc\\(50\\%-1px\\)\\].after\\:-translate-y-1\\/2.after\\:border-t.after\\:border-t-cove-dark-grey:not(.ab-ea-removed)"
        ).forEach((item) => {
            item.innerText = item.innerText.replace("/ea", "");
            item.classList.add("ab-ea-removed");
        });

        // Relocate Badges
        qq(".flex.flex-wrap.items-center").forEach((item) => {
            const badges = qq(
                item,
                ".px-cove-5.ml-\\[10px\\].hidden.h-\\[14px\\].whitespace-nowrap.border.pt-\\[1px\\].text-xs.font-light.sm\\:inline-block.border-cove-green.text-cove-navy-blue, .border-cove-dark-grey.text-cove-dark-grey.px-cove-5.ml-\\[10px\\].hidden.h-\\[14px\\].whitespace-nowrap.border.pt-\\[1px\\].text-xs.font-light.sm\\:inline-block"
            );
            if (badges.length > 0) {
                const div = document.createElement("div");
                div.className = "ab-badge-container";
                badges.forEach((badge) => div.appendChild(badge));
                item.insertAdjacentElement("afterend", div);
            }
        });
    }

    function mutationObserverFunction() {
        const targetNode = q("body");
        const debouncedUpdate = debounce(updateLayout, 250);
        return new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: true, attributes: true });
    }

    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        updateLayout();
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(q(`body:not(.${page_initials}):not(${page_initials}--v${test_variation})`) && true);
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
