(function () {
    const productNamesLoaded = document.querySelectorAll(".product-name").length > 0;
    const stockTab = document.querySelector(".nav-tabs .nav-link");

    // Goal fires if Add to Cart is clicked
    document.addEventListener(
        "click",
        function (e) {
            if (e.target.closest(".js-pdp-add-to-cart")) {
                return true;
            }
        },
        { once: true }
    );

    if (
        productNamesLoaded &&
        stockTab &&
        stockTab.textContent?.trim().toLowerCase().includes("stock")
    ) {
        return true;
    }

    convert_recheck_experiment();
    return false;
})();