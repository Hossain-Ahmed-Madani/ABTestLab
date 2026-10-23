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

    function mainJs() {
        const style = document.createElement("style");
        style.textContent = /* HTML */ `
            .media_wrapper_el, .pswp__img.custom_preview_el { left: 50%; transform: translate(-50%, -50%) !important; top: 50%; } @media (min-width: 946px) { .pswp__container
            .pswp__item .pswp__img.custom_preview_el { width: auto !important; height: 100vh !important; } } @media (max-width: 945px) { .pswp__container .pswp__item
            .pswp__img.custom_preview_el { width: 100vw !important; height: 100vw !important; } }
        `;

        document.head.appendChild(style);
        const images = [
            "//cdn-3.convertexperiments.com/uf/10018141/10018430/platform-2_6a4ce43dbf6c7.png",
            "//cdn-3.convertexperiments.com/uf/10018141/10018430/platform-3_6a4ce46a10e6b.png",
            "//cdn-3.convertexperiments.com/uf/10018141/10018430/platform-1_6a4ce40031e42.png",
        ];

        function replaceThumbImageDesktop() {
            const thumb1 = document.querySelector('.gallery-navigation--scroller .product-gallery--media-thumbnail[data-gallery-index="1"] img');
            const thumb2 = document.querySelector('.gallery-navigation--scroller .product-gallery--media-thumbnail[data-gallery-index="2"] img');
            const thumb3 = document.querySelector('.gallery-navigation--scroller .product-gallery--media-thumbnail[data-gallery-index="3"] img');

            const preview1 = document.querySelector('.product-gallery--viewer .product-gallery--media[data-gallery-index="1"] img');
            const preview2 = document.querySelector('.product-gallery--viewer .product-gallery--media[data-gallery-index="2"] img');
            const preview3 = document.querySelector('.product-gallery--viewer .product-gallery--media[data-gallery-index="3"] img');

            if (thumb1) {
                thumb1.src = images[0];
                thumb1.srcset = images[0];
            }

            if (thumb2) {
                thumb2.src = images[1];
                thumb2.srcset = images[1];
            }

            if (thumb3) {
                thumb3.src = images[2];
                thumb3.srcset = images[2];
            }

            if (preview1) {
                preview1.src = images[0];
                preview1.srcset = images[0];
            }

            if (preview2) {
                preview2.src = images[1];
                preview2.srcset = images[1];
            }

            if (preview3) {
                preview3.src = images[2];
                preview3.srcset = images[2];
            }
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
                "https://onedaytests.com/cdn/shop/products/venipuncture_6767b80c-0a0d-4dcc-998d-a97e74ae7356",
                "https://onedaytests.com/cdn/shop/files/Tasso_-device-in-use",
                "https://onedaytests.com/cdn/shop/products/mobile_phlebotomist_ee39e9ce-44d7-4a09-82a8-7e2ac5c3ecf4",
            ];
            document.querySelectorAll(".pswp__container .pswp__item .pswp__img").forEach((previewItm, index) => {
                if (previewItm.src.includes(imageList[0]) || previewItm.src.includes(imageList[1]) || previewItm.src.includes(imageList[2])) {
                    previewItm.classList.add("custom_preview_el");
                    previewItm.parentElement.classList.add("media_wrapper_el");

                    if (previewItm.src.includes(imageList[0])) {
                        previewItm.src = `https:${images[0]}`;
                    } else if (previewItm.src.includes(imageList[1])) {
                        previewItm.src = `https:${images[1]}`;
                    } else {
                        previewItm.src = `https:${images[2]}`;
                    }
                }
            });
        }
        replacePreviewImageDesktop();

        waitForElem(".pswp__container", ([pswpContainer]) => {
            const observer = new MutationObserver(() => {
                replacePreviewImageDesktop();
            });

            observer.observe(pswpContainer, {
                childList: true,
                attributes: true,
                subtree: true,
            });
        });
    }

    waitForElem(".product-gallery", mainJs);
})();
