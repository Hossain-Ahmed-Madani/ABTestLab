var maxTime = 25000; // 25s
var intervalTime = 200;
var elapsed = 0;

function hasAllElements() {
    var formItemsContainer = document.querySelector('#sud-formular form div[identifier="form-row"]');

    if (!formItemsContainer) return false;

    var genderSelectorEl = formItemsContainer.querySelector(".field-salutation");
    var firstNameEl = formItemsContainer.querySelector(".field-firstName");
    var lastNameEl = formItemsContainer.querySelector(".field-lastName");
    var emailEl = formItemsContainer.querySelector(".field-email");
    var streetEl = formItemsContainer.querySelector(".field-street");
    var streetNumberEl = formItemsContainer.querySelector(".field-streetNumber");
    var countryEl = formItemsContainer.querySelector(".formkit-outer.field.combobox");
    var zipEl = formItemsContainer.querySelector(".field-zip");
    var cityEl = formItemsContainer.querySelector(".field-city");
    var cityInputEl = formItemsContainer.querySelector(".field-city input");
    var viewPriceBtn = document.querySelector("#sud-formular .formkit-actions button");
    var securityHintContainer = formItemsContainer.querySelector('div[data-field="secure-hint-1"]');

    return (
        genderSelectorEl &&
        firstNameEl &&
        lastNameEl &&
        emailEl &&
        streetEl &&
        streetNumberEl &&
        countryEl &&
        zipEl &&
        cityEl &&
        cityInputEl &&
        viewPriceBtn &&
        securityHintContainer &&
        document.readyState === "complete"
    );
}

return new Promise(function (resolve) {
    var interval = setInterval(function () {
        if (hasAllElements()) {
            clearInterval(interval);
            resolve(true);
        }

        elapsed += intervalTime;

        if (elapsed >= maxTime) {
            clearInterval(interval);
            resolve(false);
        }
    }, intervalTime);
});
