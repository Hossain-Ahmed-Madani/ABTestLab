(function () {
    if (
        document.querySelectorAll(".product-name").length > 0 &&
        document.querySelector(".nav-tabs .nav-link") &&
        document.querySelector(".nav-tabs .nav-link").textContent.trim().toLowerCase().includes("stock")
    ) {
        return true;
    } else {
        setTimeout(convert_recheck_experiment, 150);
        return false;
    }
})()