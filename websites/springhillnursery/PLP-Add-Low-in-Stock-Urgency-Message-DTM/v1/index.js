/* 
Test doc: https://trello.com/c/R1C2oyZu/4600-plp-add-low-in-stock-urgency-message-dtm
Figma: https://www.figma.com/design/9JhvESiGmUH7UEXd0rEUDe/Gardens-Alive-?node-id=2429-37&t=tEDyQ6JOHJGqd8Zy-1
Test container: https://app.convert.com/accounts/100412411/projects/100416781/experiences/1004182892/summary

Forced variation: 

v1: https://springhillnursery.com/collections/flower_bulbs?_conv_eforce=1004182892.1004430151&utm_campaign=qa5

v2: https://springhillnursery.com/collections/flower_bulbs?_conv_eforce=1004182892.1004430875&utm_campaign=qa5
*/

(async () => {
    const TEST_CONFIG = {
        client: "EchoLogyx",
        project: "springhillnursery",
        site_url: "https://springhillnursery.com",
        test_name: "PLP - Add Low in Stock Urgency Message [DTM]",
        page_initials: "AB-PLP-URGENCY",
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

    function isSafari() {
        const userAgent = navigator.userAgent;
        return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    }

    function isTouchEnabled() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    const TXT = {
        1: "Hurry! Selling Fast",
        2: "Low in Stock",
    }

    function shuffleInPlace(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function pickAndShuffleCards(cards) {
        // 1. If there is only one card, return it
        if (cards.length === 1) {
            return cards;
        }
        
        // 2. For multiple cards: pick 30% of the cards array
        const pickCount = Math.max(1, Math.min(cards.length, Math.round(cards.length * 0.3)));
        
        // 3. Ensure one of the 1st, 2nd, or 3rd card is always included
        // Randomly select which one of the first 3 cards to guarantee
        const guaranteedIndex = Math.min(Math.floor(Math.random() * 3), cards.length - 1);
        const guaranteedCard = cards[guaranteedIndex];
        
        // Get remaining cards (excluding the guaranteed one)
        const remainingCards = cards.filter((_, idx) => idx !== guaranteedIndex);
        
        // Shuffle the remaining cards
        const shuffledRemaining = shuffleInPlace([...remainingCards]);
        
        // Pick the required number of cards (including the guaranteed one)
        const selectedCards = [guaranteedCard, ...shuffledRemaining.slice(0, pickCount - 1)];

        console.log("selectedCards...",cards.length, selectedCards.length);
        
        // Shuffle the final selection randomly
        return shuffleInPlace(selectedCards);
    }

    function updateLayout() {
        console.log("updateLayout...");

        const cards = qq( ".product-item[data-id]:not(.ab-urgency-msg-injected):not(:has( .soldoutstrip))");
        if (cards.length === 0) return;


        const picked = pickAndShuffleCards(cards);
        picked.forEach(card => {
            card.classList.add("ab-urgency-msg-injected");
            q(card, ".product-item__text_group_primary").insertAdjacentHTML("beforeend",  /* HTML */ `<div class="ab-urgency-msg">${TXT[test_variation]}</div>`);
        });
    }

    function mutationObserverFunction() {
        const targetNode = q("#root");
        const debouncedUpdate = debounce(updateLayout, 250);
        const observer = new MutationObserver(debouncedUpdate).observe(targetNode, { childList: true, subtree: false, attributes: false });
        return observer;
    }
    
    function init() {
        q("body").classList.add(page_initials, `${page_initials}--v${test_variation}`, `${page_initials}--version:${test_version}`);
        console.table(TEST_CONFIG);
        updateLayout();
        mutationObserverFunction();
    }

    function checkForItems() {
        return !!(
            q(`body:not(.${page_initials}):not(.${page_initials}--v${test_variation})`) &&
            q("#root") &&
            q(".collection__products-container")
        );
    }

    try {
        await waitForElementAsync(checkForItems);
        init();
    } catch (error) {
        console.warn(error);
        return false;
    }
})();
