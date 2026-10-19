(function () {
    function qq(s, o) {
        return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
    }
    if (qq(".item-fullname").length > 0 && qq(".item-fullname").every((item) => !item.textContent?.toLowerCase().includes("zoll"))) {
        return true;
    }
})();
