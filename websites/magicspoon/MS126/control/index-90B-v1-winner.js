(() => {
    console.log("MS90B V1");
    function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
        let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
        if (timer <= 0) return;
        (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined")
            ? callback(elements)
            : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
    }

    function fireGA4Event(eventName, eventLabel = "") {
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

    const DATA = {
        image1: "https://cdn.shopify.com/s/files/1/0612/5086/3345/files/Classic_Protein.webp?v=1763675800",
        image2: "https://cdn.shopify.com/s/files/1/0081/3826/0542/files/MS90B_Protein_High_Fiber_Nav.webp?v=1765297331",
        image3: "https://magicspoon.imgix.net/files/MS_PastriesHeader.png?v=1768429172&auto=format,compress&w=800",
    };

    function mainJs() {
        if (document.body.classList.contains("ms90b")) return;
        document.body.classList.add("ms90b");

        const bundleSec = document.querySelector("#mobile-slides-content .bundle-sec");
        const navItem = bundleSec?.querySelector("ul > li:nth-child(1)");
        if (!navItem) return;

        const firstChild = navItem.firstElementChild;

        navItem.insertAdjacentHTML(
            "beforeend",
            `
                <div class="ms90b__dropdown-container">
                    <div class="ms90b__dropdown-header">
                        <span class="ms90b__header-slot"></span>
                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.68934 9.65191C8.13706 10.116 8.86295 10.116 9.31066 9.65191L17 1.68074L15.3787 0L8.5 7.13079L1.62132 0L0 1.68074L7.68934 9.65191Z"
                            fill="#3E0B91"/>
                        </svg>
                    </div>
                    <div class="ms90b__dropdown-content"></div>
                </div>
            `,
        );

        const treatsItem = bundleSec?.querySelector("ul > li:has(a[href='https://magicspoon.com/products/sweet-n-salty-variety-pack'])");
        if (treatsItem) {
            treatsItem?.insertAdjacentHTML(
                "beforebegin",
                /* HTML */ `
                    <li>
                        <a href="https://magicspoon.com/products/protein-pastries">
                            <img src="https://magicspoon.imgix.net/files/MS_PastriesHeader.png?v=1768429172&auto=format,compress&w=800" alt="" />
                            <h2>Pastries</h2>
                        </a>
                    </li>
                `,
            );
        }

        const dropdownContainer = navItem.querySelector(".ms90b__dropdown-container");
        const dropdownHeader = dropdownContainer.querySelector(".ms90b__dropdown-header");
        const headerSlot = dropdownHeader.querySelector(".ms90b__header-slot");
        const dropdownContent = dropdownContainer.querySelector(".ms90b__dropdown-content");

        headerSlot.replaceWith(firstChild);
        if (firstChild && firstChild.tagName === "A") {
            firstChild.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropdownContainer.classList.toggle("ms90b__dropdown-container--open");
            });
        }

        const menu = [
            { title: "ORIGINAL PROTEIN", img: DATA.image1, link: "https://magicspoon.com/products/variety-1-case-6-boxes-1" },
            { title: "PROTEIN + FIBER", img: DATA.image2, link: "https://magicspoon.com/products/fiber-cereal-variety-6" },
        ];

        dropdownContent.innerHTML = menu
            .map(
                (item) => `
                <a class="ms90b__dropdown-content-item" href="${item.link}">
                    <span>${item.title}</span>
                    ${item.img ? `<img src="${item.img}">` : ""}
                </a>
            `,
            )
            .join("");

        dropdownHeader.addEventListener("click", () => {
            dropdownContainer.classList.toggle("ms90b__dropdown-container--open");
        });

        document.querySelector(".mobile-menu > button")?.addEventListener("click", () => {
            if (!document.querySelector("html").classList.contains("mobile_slide")) return;
            fireGA4Event("MS126_NavView", "Nav View");
        });

        document.querySelector("#mobile-slides-content .bundle-sec").addEventListener("click", (e) => {
            fireGA4Event("MS126_NavEngagement", e.target.textContent.trim());
        });
    }

    waitForElem("#mobile-slides-content .bundle-sec", mainJs);
})();
