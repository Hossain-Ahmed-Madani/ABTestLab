(() => {
    if (window.location.pathname !== "/products/testosterone-blood-test") {
        return;
    }
    function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
        let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
        if (timer <= 0) return;
        (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined")
            ? callback(elements)
            : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
    }

    const images = [
        "https://cdn-3.convertexperiments.com/uf/10018141/10018430/image-a1_6ad76d024edc7.png",
        "https://cdn-3.convertexperiments.com/uf/10018141/10018430/image-b1_6ad76d2639892.png",
    ];

    function mainJs() {
        const style = document.createElement("style");
        style.textContent = /* HTML */ `
            .media_wrapper_el, .pswp__img.custom_preview_el { left: 50%; transform: translate(-50%, -50%) !important; top: 50%; } @media (min-width: 946px) { .pswp__container
            .pswp__item .pswp__img.custom_preview_el { width: auto !important; height: 100vh !important; } } @media (max-width: 945px) { .pswp__container .pswp__item
            .pswp__img.custom_preview_el { width: 100vw !important; height: 100vw !important; } }
        `;

        document.head.appendChild(style);

        function replaceThumbImageDesktop() {
            const thumb1 = document.querySelector('.gallery-navigation--scroller .product-gallery--media-thumbnail[data-gallery-index="1"] img');
            const thumb2 = document.querySelector('.gallery-navigation--scroller .product-gallery--media-thumbnail[data-gallery-index="2"] img');
            const thumb5 = document.querySelector('.gallery-navigation--scroller .product-gallery--media-thumbnail[data-gallery-index="5"] img');

            const preview1 = document.querySelector('.product-gallery--viewer .product-gallery--media[data-gallery-index="1"] img');
            const preview2 = document.querySelector('.product-gallery--viewer .product-gallery--media[data-gallery-index="2"] img');
            const preview5 = document.querySelector('.product-gallery--viewer .product-gallery--media[data-gallery-index="5"] img');

            if (thumb1) {
                thumb1.src = images[0];
                thumb1.srcset = images[0];
            }

            if (thumb2) {
                thumb2.src = images[1];
                thumb2.srcset = images[1];
            }

            if (preview1) {
                preview1.src = images[0];
                preview1.srcset = images[0];
            }

            if (preview2) {
                preview2.src = images[1];
                preview2.srcset = images[1];
            }

            thumb5?.remove();
            thumb5?.parentNode?.remove();
            preview5?.remove();
        }
        replaceThumbImageDesktop();

        const interval = setInterval(() => {
            replaceThumbImageDesktop();
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
        }, 5000);
        const interval10 = setInterval(() => {
            replaceThumbImageDesktop();
        }, 100);

        setTimeout(() => {
            clearInterval(interval10);
        }, 10000);

        function replacePreviewImageDesktop() {
            const imageList = [
                "https://onedaytests.com/cdn/shop/files/One_Day_Test-Clinic_male_customer_1000x667.jpg?v=1786443187",
                "https://onedaytests.com/cdn/shop/products/box_sleeve_2000px_b1c5e5ff-fc28-42dc-9e53-04914947d948_2000x1594.jpg?v=1768211106",
            ];
            document.querySelectorAll(".pswp__container .pswp__item .pswp__img").forEach((previewItm, index) => {
                if (previewItm.src.includes(imageList[0]) || previewItm.src.includes(imageList[1])) {
                    previewItm.classList.add("custom_preview_el");
                    previewItm.parentElement.classList.add("media_wrapper_el");

                    if (previewItm.src.includes(imageList[0])) {
                        previewItm.src = images[0];
                    } else if (previewItm.src.includes(imageList[1])) {
                        previewItm.src = images[1];
                    }
                }
            });
        }
        replacePreviewImageDesktop();

        waitForElem(".pswp__container", ([pswpContainer]) => {
            const observer = new MutationObserver(() => {
                replacePreviewImageDesktop();
            });

            observer.observe(pswpContainer, { childList: true, attributes: true, subtree: true });
        });
    }

    waitForElem(".product-gallery", mainJs);
})();