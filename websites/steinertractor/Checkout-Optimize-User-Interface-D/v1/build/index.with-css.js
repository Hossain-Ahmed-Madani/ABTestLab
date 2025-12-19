(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-Checkout-Step-1-2 h2.ab-form-heading {
  font-family: Arial;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 20px;
}
.AB-Checkout-Step-1-2 .ab-form {
  margin-bottom: 25px;
}
.AB-Checkout-Step-1-2 .ab-action-button {
  width: 100%;
  height: 51px;
  padding: 17px 20px;
  border: none;
  outline: none;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #ffffff;
  background-color: #b3b3b3;
}
.AB-Checkout-Step-1-2 .ab-action-button:not(disabled) {
  background-color: #9cca5a;
}
.AB-Checkout-Step-1-2 .ab-form-group {
  margin: 0;
  text-align: left;
}
.AB-Checkout-Step-1-2 .ab-form-col {
  margin-bottom: 12px;
}
.AB-Checkout-Step-1-2 .ab-form-subtitle {
  min-height: 13px;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #333333;
}
.AB-Checkout-Step-1-2 .ab-pl-0 {
  padding-left: 0;
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input:not([type="radio"]):not([type="checkbox"])) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid #ced4da;
  overflow: hidden;
  height: 51px;
  padding: 7px 10px;
  position: relative;
}
.AB-Checkout-Step-1-2 .ab-form-group:has(> input[type="radio"]),
.AB-Checkout-Step-1-2 .ab-form-group:has(> input[type="checkbox"]) {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0px;
  color: #333333;
  cursor: pointer;
  margin-bottom: 3px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input[type="radio"])
  input[type="checkbox"],
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input[type="checkbox"])
  input[type="checkbox"] {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  min-width: 18px;
  height: 18px;
  min-height: 18px;
  border: 2px solid #767676;
  background-color: #fff;
  cursor: pointer;
  border-radius: 2px;
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input[type="radio"])
  input[type="checkbox"]:checked,
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input[type="checkbox"])
  input[type="checkbox"]:checked {
  border: none;
  background-color: #0078d7;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input[type="radio"])
  input[type="checkbox"]:checked:after,
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input[type="checkbox"])
  input[type="checkbox"]:checked:after {
  content: "";
  margin-top: -3px;
  width: 6px;
  height: 11px;
  border-right: 2.5px solid #fff;
  border-bottom: 2.5px solid #fff;
  transform: rotate(45deg);
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input:not([type="radio"]):not([type="checkbox"]))
  .ab-label {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  width: 100%;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #767676;
  white-space: nowrap;
  margin-bottom: 0px;
  margin: 0 !important;
  padding: 0 !important;
  font-size: 16px;
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input:not([type="radio"]):not([type="checkbox"]))
  .ab-label:has(~ input:not([type="radio"]):not([type="checkbox"]):focus),
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input:not([type="radio"]):not([type="checkbox"]))
  .ab-label:has(~ input:not([type="radio"]):not([type="checkbox"]):active),
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input:not([type="radio"]):not([type="checkbox"]))
  .ab-label:has(
    ~ input:not([type="radio"]):not([type="checkbox"]):not(:placeholder-shown)
  ) {
  position: static;
  font-size: 14px;
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input:not([type="radio"]):not([type="checkbox"]))
  .ab-label:has(~ input[required][area-empty]):after {
  content: " *";
  color: red;
}
.AB-Checkout-Step-1-2
  .ab-form-group
  input:not([type="radio"]):not([type="checkbox"]) {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  z-index: 2;
  background: transparent;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #333333;
}
.AB-Checkout-Step-1-2 .ab-form-group input:-webkit-autofill,
.AB-Checkout-Step-1-2 .ab-form-group input:-webkit-autofill:hover,
.AB-Checkout-Step-1-2 .ab-form-group input:-webkit-autofill:focus,
.AB-Checkout-Step-1-2 .ab-form-group input:-webkit-autofill:active {
  -webkit-text-fill-color: black !important;
  -webkit-box-shadow: none !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}
.AB-Checkout-Step-1-2 .ab-error-message {
  margin-top: 6px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #dc3545;
  display: none;
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(
    > input[area-invalid]:not([type="radio"]):not([type="checkbox"])
  ) {
  border: 2px solid #dc3545;
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(
    > input[area-invalid]:not([type="radio"]):not([type="checkbox"])
  )
  + .ab-error-message {
  display: block;
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(
    > input[area-invalid]:not([type="radio"]):not([type="checkbox"])
  ),
.AB-Checkout-Step-1-2
  .ab-form-group:has(> select[required]:not([area-selected])) {
  border: 2px solid #dc3545;
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(
    > input[area-invalid]:not([type="radio"]):not([type="checkbox"])
  )
  + .ab-error-message,
.AB-Checkout-Step-1-2
  .ab-form-group:has(> select[required]:not([area-selected]))
  + .ab-error-message {
  display: block;
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(> input:not([type="radio"]):not([type="checkbox"]):focus),
.AB-Checkout-Step-1-2
  .ab-form-group:has(
    > input:not([type="radio"]):not([type="checkbox"]):active
  ) {
  border: 2px solid #333333;
}
.AB-Checkout-Step-1-2 .ab-form-group:has(> select) {
  width: 100%;
  position: relative;
}
.AB-Checkout-Step-1-2 .ab-form-group:has(> select) .ab-label {
  display: none;
}
.AB-Checkout-Step-1-2 .ab-form-group:has(> select):before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-right: 2px solid #333333;
  border-bottom: 2px solid #333333;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  z-index: 5;
  transform: rotate(45deg);
  pointer-events: none;
  cursor: pointer;
  transition: all 0.2s;
}
.AB-Checkout-Step-1-2 .ab-form-group:has(> select):has(> select:open):before {
  transform: rotate(-135deg);
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(> select):has(> select[area-invalid])
  ~ .ab-error-message {
  display: block;
}
.AB-Checkout-Step-1-2 .ab-form-group:has(> select) select {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 1px solid #ced4da;
  overflow: hidden;
  width: 100%;
  height: 51px;
  padding: 7px 10px;
  position: relative;
  background-color: transparent;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0px;
  color: #767676;
  white-space: nowrap;
  appearance: none; /* Hide default arrow */
  -webkit-appearance: none; /* For Webkit browsers */
  -moz-appearance: none; /* For Firefox */
}
.AB-Checkout-Step-1-2 .ab-form-group:has(> select) select[area-selected] {
  color: #333333;
}
.AB-Checkout-Step-1-2
  .ab-form-group:has(> select)
  select:focus-within:not([area-invalid]),
.AB-Checkout-Step-1-2
  .ab-form-group:has(> select)
  select:active:not([area-invalid]) {
  border: 2px solid #333333;
  box-shadow: none;
  color: #333333;
}
.AB-Checkout-Step-1-2 .ab-form-group:has(> select) select:-webkit-autofill,
.AB-Checkout-Step-1-2
  .ab-form-group:has(> select)
  select
  option:-webkit-autofill,
.AB-Checkout-Step-1-2
  .ab-form-group:has(> select)
  select:-webkit-autofill:hover,
.AB-Checkout-Step-1-2
  .ab-form-group:has(> select)
  select
  option:-webkit-autofill:hover,
.AB-Checkout-Step-1-2
  .ab-form-group:has(> select)
  select:-webkit-autofill:focus,
.AB-Checkout-Step-1-2
  .ab-form-group:has(> select)
  select
  option:-webkit-autofill:focus,
.AB-Checkout-Step-1-2
  .ab-form-group:has(> select)
  select:-webkit-autofill:active,
.AB-Checkout-Step-1-2
  .ab-form-group:has(> select)
  select
  option:-webkit-autofill:active {
  -webkit-text-fill-color: black !important;
  -webkit-box-shadow: none !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}

.AB-Checkout-Step-1-2 {
  background-color: #fff;
}
.AB-Checkout-Step-1-2 .free-delivery-btn {
  z-index: 10;
}
.AB-Checkout-Step-1-2 > form > .container.pl-0.pr-0 {
  background-color: #fff;
}
.AB-Checkout-Step-1-2 .ab-hidden {
  display: none;
}
.AB-Checkout-Step-1-2 .ab-content-wrapper {
  width: 100%;
  position: relative;
  background-color: #f3f5f6;
}
.AB-Checkout-Step-1-2 .ab-content-wrapper > * {
  position: relative;
  z-index: 1;
}
.AB-Checkout-Step-1-2 .ab-content-wrapper:after {
  content: "";
  width: 50%;
  height: 100%;
  background-color: #fff;
  border-radius: 1px solid #dddddd;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 50%;
  z-index: 0;
}
.AB-Checkout-Step-1-2 .ab-content-top {
  display: flex;
  flex-direction: column;
  padding-bottom: 49px;
  border-bottom: 1px solid #dddddd;
  background-color: #fff;
}
.AB-Checkout-Step-1-2 .ab-content-top h1 {
  text-align: center;
}
.AB-Checkout-Step-1-2 .ab-content-forms-wrapper {
  padding: 0;
  padding-left: 15px;
}
.AB-Checkout-Step-1-2 .ab-content-product-summary-wrapper {
  padding-left: 0 !important;
  background-color: #f3f5f6;
}
.AB-Checkout-Step-1-2 .ab-product-summary {
  padding-top: 53px;
  padding-bottom: 53px;
  padding-left: 61px;
}
.AB-Checkout-Step-1-2 h3.ab-product-summary__heading {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 13px;
}
.AB-Checkout-Step-1-2 .ab-product-summary__added-products {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 27px;
}
.AB-Checkout-Step-1-2 .ab-product-summary__product {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
}
.AB-Checkout-Step-1-2 .ab-product-summary__product-img {
  border: 1px solid #ddd;
  text-decoration: none;
  outline: none;
  width: 122px;
  min-width: 122px;
  max-width: 122px;
  height: 134px;
  min-height: 134px;
  max-height: 134px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px 25px;
  position: relative;
}
.AB-Checkout-Step-1-2 .ab-product-summary__product-img:hover {
  text-decoration: none;
  outline: none;
}
.AB-Checkout-Step-1-2 .ab-product-summary__product-img img {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: top;
}
.AB-Checkout-Step-1-2 .ab-product-summary__product-sku {
  position: absolute;
  z-index: 1;
  bottom: 10px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  font-size: 14px;
  color: #333333;
  padding: 0;
  margin: 0;
}
.AB-Checkout-Step-1-2 .ab-product-summary__product-info {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.AB-Checkout-Step-1-2 .ab-product-summary__product-info p {
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0px;
  color: #333333;
  text-align: left;
  padding: 0;
  margin: 0;
}
.AB-Checkout-Step-1-2 p.ab-product-summary__product-availability {
  font-weight: 700;
}
.AB-Checkout-Step-1-2 p.ab-product-summary__product-availability--available {
  color: #9cca5a;
}
.AB-Checkout-Step-1-2 p.ab-product-summary__product-availability--stock-out {
  color: #dc3545;
}
.AB-Checkout-Step-1-2 .ab-product-summary__border {
  width: 100%;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 29px;
}
.AB-Checkout-Step-1-2 .ab-product-summary__addons-and-coupon {
  display: flex;
  flex-direction: column;
}
.AB-Checkout-Step-1-2 .ab-product-summary__addons {
  margin-bottom: 35px;
}
.AB-Checkout-Step-1-2 .ab-product-summary__addons-heading {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgb(51, 51, 51);
  margin-bottom: 14px;
}
.AB-Checkout-Step-1-2 .ab-product-summary__addons-form-group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  gap: 10px;
  cursor: pointer;
}
.AB-Checkout-Step-1-2
  input[type="checkbox"].ab-product-summary__addons-checkbox {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  min-width: 18px;
  height: 18px;
  min-height: 18px;
  border: 2px solid #767676;
  background-color: #fff;
  cursor: pointer;
  border-radius: 2px;
}
.AB-Checkout-Step-1-2
  input[type="checkbox"].ab-product-summary__addons-checkbox:checked {
  border: none;
  background-color: #0078d7;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-Checkout-Step-1-2
  input[type="checkbox"].ab-product-summary__addons-checkbox:checked:after {
  content: "";
  margin-top: -3px;
  width: 6px;
  height: 11px;
  border-right: 2.5px solid #fff;
  border-bottom: 2.5px solid #fff;
  transform: rotate(45deg);
}
.AB-Checkout-Step-1-2 .ab-product-summary__addons-label {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgb(51, 51, 51);
}
.AB-Checkout-Step-1-2 .ab-product-summary__coupons {
  margin-bottom: 31px;
}
.AB-Checkout-Step-1-2 .ab-product-summary__coupons-heading {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  color: rgb(0, 0, 0);
  margin-bottom: 15px;
}
.AB-Checkout-Step-1-2 .ab-product-summary__coupons-form-group {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 12px;
  margin-bottom: 0;
}
.AB-Checkout-Step-1-2 .ab-product-summary__coupons-input {
  outline: none;
  height: 51px;
  flex-grow: 1;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  padding: 16px 10px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333333;
}
.AB-Checkout-Step-1-2 .ab-product-summary__coupons-input::placeholder,
.AB-Checkout-Step-1-2 .ab-product-summary__coupons-input::-ms-input-placeholder,
.AB-Checkout-Step-1-2
  .ab-product-summary__coupons-input::-ms-input-placeholder {
  color: rgb(59, 59, 59);
}
.AB-Checkout-Step-1-2 .ab-product-summary__coupons-button {
  width: 76px;
  height: 51px;
  background-color: rgb(255, 242, 204);
  border: 1px solid rgb(221, 221, 221);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgb(59, 59, 59);
  transition: all 0.2s;
}
.AB-Checkout-Step-1-2 .ab-product-summary__coupons-button:hover {
  background-color: #ffe8a6;
  color: #333333;
}
.AB-Checkout-Step-1-2 .ab-product-summary__calculation-table {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.AB-Checkout-Step-1-2 .ab-product-summary__col {
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0px;
  color: #333333;
}
.AB-Checkout-Step-1-2
  .ab-product-summary__row--total
  > .ab-product-summary__col {
  line-height: 1.5;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 20px;
}
.AB-Checkout-Step-1-2
  .ab-product-summary__row
  > .ab-product-summary__col:first-child {
  text-align: left;
}
.AB-Checkout-Step-1-2
  .ab-product-summary__row
  > .ab-product-summary__col:last-child {
  text-align: right;
}

.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-product-summary__addons-and-coupon {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-content-wrapper--show-login {
  background-color: #fff;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-content-wrapper--show-login
  .ab-login-section {
  display: block !important;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-content-wrapper--show-login
  .ab-content-product-summary-wrapper {
  display: none !important;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-content-wrapper--show-guest-checkout
  .ab-guest-checkout-section {
  display: block !important;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-content-wrapper--show-delivery-address
  .ab-form#delivery-address {
  display: block;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-content-wrapper--show-guest-create-account
  .ab-form#guest-create-account {
  display: block;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .guest-checkout-optn {
  margin: auto;
  flex-direction: row;
  gap: 25px;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .guest-checkout-optn button {
  min-width: 167px;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section,
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-guest-checkout-section {
  display: none !important;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section {
  padding: 49px 59px 135px 0 !important;
  width: 100% !important;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section #loginSlogan {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section h2 {
  padding-bottom: 49px;
  margin-bottom: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0;
  color: #333333;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section .dnnFormMessage {
  margin-top: 0;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section .dnnForm,
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section .dnnLabel {
  margin: 0;
  text-align: left;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnFormItem:has(> input) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid #ced4da;
  overflow: hidden;
  height: 51px;
  padding: 7px 10px;
  margin-bottom: 12px;
  position: relative;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnFormItem:has(> .dnnLoginActions) {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnFormItem:not(:has(> input))
  .dnnFormLabel,
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnFormItem:not(:has(> input))
  .dnnSecondaryAction {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnFormItem:not(:has(> input))
  .dnnPrimaryAction {
  margin-top: 22px;
  margin-bottom: 17px;
  margin-left: 0;
  padding: 16px 47px 17px;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  border: none;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #ffffff;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnFormItem:not(:has(> input))
  .dnnPrimaryAction:hover {
  text-decoration: none;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section .dnnLabel {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #767676;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section .dnnLabel label {
  white-space: nowrap;
  margin-bottom: 0px;
  margin: 0 !important;
  padding: 0 !important;
  font-size: 16px;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel
  label:after {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel:has(~ input:focus),
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel:has(~ input:active),
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel:has(~ input:not(:placeholder-shown)) {
  position: static;
  font-size: 14px;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel:has(~ input:focus)
  label,
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel:has(~ input:active)
  label,
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel:has(~ input:not(:placeholder-shown))
  label {
  font-size: 14px;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section input {
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: none;
  margin: 0;
  padding: 0;
  background: transparent;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #000000;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section input:focus,
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section input:active,
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  input:not(:placeholder-shown) {
  position: static;
  border: none;
  outline: none;
  background-color: #fff;
  box-shadow: none;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-login-section #socialControls {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  p:has(> a[href="./ResetPassword"]),
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-login-section
  p:has(> a[href="/create-account"]) {
  padding-left: 0;
  margin-bottom: 12px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0%;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  color: #0078d7;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout #guest-checkout-form {
  width: 500px;
  border: 1px solid red;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout #guest-checkout-form:before {
  content: "Control Form, Hide when test is completed";
  color: red;
  font-size: 16px;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-guest-checkout-section {
  padding: 49px 59px 97px 0;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-guest-checkout-section
  .pr-0.pl-0.col-md-12.col-sm-6,
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-guest-checkout-section
  .ab-control-guest-checkout-form {
  width: 100%;
  display: none !important;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout h1.ab-guest-checkout-header {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 38px;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-form#personal-information {
  margin-bottom: 38px;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-form#billing-address {
  margin-bottom: 34px;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-form#shipping-address {
  margin-bottom: 0px;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-form#shipping-address
  .ab-form-input-container {
  margin-bottom: 26px;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-form#shipping-address
  #ab-continue-as-guest {
  background-color: #b3b3b3;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-form#shipping-address
  #ab-continue-as-guest:not(disabled) {
  background-color: #9cca5a;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-form#shipping-address
  #ab-need-help {
  background-color: #6c757d;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout
  .ab-form#shipping-address
  #ab-need-help:hover {
  opacity: 0.7;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-form#delivery-address {
  display: none;
  margin-bottom: 34px;
}
.AB-Checkout-Step-1-2.AB-Guest-Checkout .ab-form#guest-create-account {
  display: none;
  margin-bottom: 34px;
}

.AB-Checkout-Step-1-2.AB-Address-Checkout
  .ab-product-summary__addons-and-coupon {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout
  .ab-content-wrapper--show-shipping-address
  .ab-form#shipping-address {
  display: block;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout .ab-content-top {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout
  app-address-management
  > *:not(app-progress-stepper) {
  display: none !important;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout .ab-address-checkout-section {
  padding: 54px 59px 73px 0;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout form .ab-form-heading {
  margin-bottom: 31px;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout .ab-form#billing-address {
  margin-bottom: 32px;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout .ab-form#shipping-address {
  display: none;
  margin-bottom: 32px;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout .ab-form#same-billing {
  margin-bottom: 0;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout
  .ab-form#same-billing
  .ab-form-heading {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout
  .ab-form#same-billing
  .ab-form-input-container {
  margin-bottom: 42px;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout
  .ab-form#same-billing
  #ab-continue-as-guest {
  background-color: #b3b3b3;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout
  .ab-form#same-billing
  #ab-continue-as-guest:not(disabled) {
  background-color: #9cca5a;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout .ab-form#same-billing #ab-need-help {
  background-color: #6c757d;
}
.AB-Checkout-Step-1-2.AB-Address-Checkout
  .ab-form#same-billing
  #ab-need-help:hover {
  opacity: 0.7;
}

.AB-Checkout-Step-1-2.AB-Shipping-Checkout eve-checkout-page hr,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-checkout-page
  .col-12
  > .text-center.mb-5,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout eve-checkout-page .col-12 > .row,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-checkout-page
  .col-12
  > .col-sm-12,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout eve-authorizenet,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout app-progress-stepper + h4 {
  display: none !important;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .checkout-promo {
  padding-bottom: 50px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-content-top {
  padding-bottom: 30px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-shipping-address
  > .btn.btn-primary {
  margin-top: 13px;
  width: 214px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0px;
  color: rgb(255, 255, 255);
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .address-text {
  height: auto;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-shipping-address-wrapper {
  height: 100%;
  gap: 10px;
  padding: 20px;
  border: 1px solid rgb(206, 212, 218);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-shipping-address-wrapper > br {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-shipping-address-wrapper > p {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0px;
  color: rgb(51, 51, 51);
  margin-bottom: 15px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-shipping-address-wrapper > div {
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: rgb(118, 118, 118);
  margin-bottom: 15px;
  position: relative;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-shipping-address-wrapper
  > div
  strong {
  font-weight: 400;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-shipping-address-wrapper
  > div
  *:not(.btn) {
  width: 50%;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-shipping-address-wrapper .btn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 76px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgb(255, 255, 255);
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-shipping-address-wrapper
  select.form-control {
  outline: none;
  box-shadow: none;
  height: 51px;
  min-width: 100%;
  border: 1px solid rgb(222, 222, 222);
  padding-left: 10px;
  border-radius: 0;
  margin-top: auto !important;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0px;
  color: rgb(118, 118, 118);
  text-align: left;
  appearance: none; /* Disable the default arrow */
  -webkit-appearance: none; /* For WebKit-based browsers */
  -moz-appearance: none; /* For Firefox */
  background-color: #fff;
  background-image: url('data:image/svg+xml,<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.330173 0.344159C0.541647 0.123794 0.828428 0 1.12745 0C1.42648 0 1.71326 0.123794 1.92473 0.344159L7.50681 6.16269L13.0889 0.344159C13.3016 0.130039 13.5864 0.0115592 13.8821 0.0142373C14.1778 0.0169155 14.4606 0.140538 14.6697 0.358478C14.8788 0.576418 14.9974 0.871238 15 1.17944C15.0025 1.48764 14.8889 1.78457 14.6834 2.00626L8.30409 8.65584C8.09261 8.87621 7.80583 9 7.50681 9C7.20778 9 6.921 8.87621 6.70953 8.65584L0.330173 2.00626C0.118763 1.78583 0 1.4869 0 1.17521C0 0.863519 0.118763 0.564591 0.330173 0.344159Z" fill="black"/></svg>') !important;
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 15px;
  cursor: pointer;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-shipping-address-wrapper
  select.form-control:open {
  background-image: url('data:image/svg+xml,<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6698 8.65584C14.4584 8.87621 14.1716 9 13.8725 9C13.5735 9 13.2867 8.87621 13.0753 8.65584L7.49319 2.83731L1.91111 8.65584C1.69843 8.86996 1.41357 8.98844 1.11789 8.98576C0.822215 8.98308 0.539376 8.85946 0.330292 8.64152C0.121209 8.42358 0.00261186 8.12876 4.24806e-05 7.82056C-0.0025269 7.51236 0.111138 7.21544 0.316556 6.99374L6.69591 0.344159C6.90739 0.123794 7.19417 -9.68142e-08 7.49319 -1.22956e-07C7.79221 -1.49097e-07 8.079 0.123794 8.29047 0.344159L14.6698 6.99374C14.8812 7.21417 15 7.5131 15 7.82479C15 8.13648 14.8812 8.43541 14.6698 8.65584Z" fill="%23333333"/></svg>') !important;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-shipping-address-wrapper
  select.form-control:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-content-wrapper--show-credit-debit
  .ab-credit-or-debit-forms-section {
  display: block;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-shipping-header {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgb(51, 51, 51);
  margin-bottom: 35px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout shipping-rates select.form-control {
  margin-bottom: 5px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  shipping-rates
  .row
  > .col-lg-12.mb-4 {
  margin: 0;
  margin-bottom: 0 !important;
  padding-top: 0;
  padding-bottom: 0;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  shipping-rates
  .row
  > .col-lg-12.mb-4
  > br {
  display: none !important;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  shipping-rates
  .row
  > .col-lg-12.mb-4
  span,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  shipping-rates
  .row
  > .col-lg-12.mb-4
  p {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0px;
  color: rgb(51, 51, 51);
  margin-bottom: 0;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  shipping-rates
  .row
  > .col-lg-12.mb-4
  b {
  font-weight: 700;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-credit-or-debit-forms-section {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-credit-or-debit-forms-section
  .card-icons {
  margin-top: 10px;
  margin-bottom: 24px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  div.ab-form-col:has(input#ab-check-same-as-billing) {
  margin-top: 22px;
  margin-bottom: 18px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  div.ab-form-col:has(input#ab-check-same-as-billing)
  label {
  align-items: center;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  div.ab-form-col:has(input#ab-check-same-as-billing)
  input[type="checkbox"]:checked:after {
  margin-top: -2px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  div.ab-form-col:has(input#ab-check-same-as-billing)
  .ab-label {
  margin-bottom: -3px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout div.ab-form-col:has(input#ab-city),
.AB-Checkout-Step-1-2.AB-Shipping-Checkout div.ab-form-col:has(select#ab-state),
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  div.ab-form-col:has(input#ab-zip-code) {
  margin-top: 73px;
  margin-bottom: 63px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout label.ab-form-group[for="ab-cvv"] {
  overflow: visible;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-tooltip-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  cursor: pointer;
  z-index: 10;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-tooltip-container svg {
  width: 20px;
  height: 20px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-tooltip-container:hover
  .ab-tooltip-message {
  display: block;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-tooltip-container
  .ab-tooltip-message {
  display: none;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0px;
  color: #fff;
  position: absolute;
  bottom: 34px;
  width: 200px;
  padding: 10px;
  background: rgb(51, 51, 51);
  z-index: 1;
  border-radius: 5px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-tooltip-container
  .ab-tooltip-message:after {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background: rgb(51, 51, 51);
  border-radius: 5px;
  bottom: -7.5px;
  left: 0;
  right: 0;
  margin: auto;
  transform: rotate(45deg);
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-control-forms-section {
  padding: 44px 63px 0 0;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-control-forms-section > div {
  width: 100%;
  max-width: 100%;
  padding-left: 0;
  padding-right: 0;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  > .col-lg-4.col-md-12.mb-4 {
  margin-bottom: 36px !important;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  > .col-lg-4.col-md-12.mb-4
  > h6,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  > .col-lg-4.col-md-12.mb-4
  > h4:first-of-type,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  > .col-lg-4.col-md-12.mb-4
  label[for="shipping"] {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  > .col-lg-4.col-md-12.mb-4
  > h4,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  > .col-lg-4.col-md-12.mb-4
  > h4
  > strong {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgb(51, 51, 51);
  margin-bottom: 17px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  > .row
  .col-12
  > h4.mb-4.mx-3,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  > .row
  .col-12
  > h4.mb-4.mx-3
  > strong {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgb(51, 51, 51);
  margin-left: 0 !important;
  margin-bottom: 17px !important;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  .payment-row {
  padding-left: 0 !important;
  margin-left: 0 !important;
  margin-bottom: 18px !important;
  margin-right: -30px !important;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  .payment-row
  .col-lg-6.col-sm-12 {
  min-width: 100%;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  select.form-control {
  outline: none;
  box-shadow: none;
  margin-left: 0 !important;
  height: 51px;
  min-width: 100%;
  border: 1px solid rgb(222, 222, 222);
  padding-left: 10px;
  border-radius: 0;
  margin-top: auto !important;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0px;
  color: rgb(118, 118, 118);
  text-align: left;
  appearance: none; /* Disable the default arrow */
  -webkit-appearance: none; /* For WebKit-based browsers */
  -moz-appearance: none; /* For Firefox */
  background-color: #fff;
  background-image: url('data:image/svg+xml,<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.330173 0.344159C0.541647 0.123794 0.828428 0 1.12745 0C1.42648 0 1.71326 0.123794 1.92473 0.344159L7.50681 6.16269L13.0889 0.344159C13.3016 0.130039 13.5864 0.0115592 13.8821 0.0142373C14.1778 0.0169155 14.4606 0.140538 14.6697 0.358478C14.8788 0.576418 14.9974 0.871238 15 1.17944C15.0025 1.48764 14.8889 1.78457 14.6834 2.00626L8.30409 8.65584C8.09261 8.87621 7.80583 9 7.50681 9C7.20778 9 6.921 8.87621 6.70953 8.65584L0.330173 2.00626C0.118763 1.78583 0 1.4869 0 1.17521C0 0.863519 0.118763 0.564591 0.330173 0.344159Z" fill="black"/></svg>') !important;
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 15px;
  cursor: pointer;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  select.form-control:open {
  background-image: url('data:image/svg+xml,<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6698 8.65584C14.4584 8.87621 14.1716 9 13.8725 9C13.5735 9 13.2867 8.87621 13.0753 8.65584L7.49319 2.83731L1.91111 8.65584C1.69843 8.86996 1.41357 8.98844 1.11789 8.98576C0.822215 8.98308 0.539376 8.85946 0.330292 8.64152C0.121209 8.42358 0.00261186 8.12876 4.24806e-05 7.82056C-0.0025269 7.51236 0.111138 7.21544 0.316556 6.99374L6.69591 0.344159C6.90739 0.123794 7.19417 -9.68142e-08 7.49319 -1.22956e-07C7.79221 -1.49097e-07 8.079 0.123794 8.29047 0.344159L14.6698 6.99374C14.8812 7.21417 15 7.5131 15 7.82479C15 8.13648 14.8812 8.43541 14.6698 8.65584Z" fill="%23333333"/></svg>') !important;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-control-forms-section
  select.form-control:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout eve-payment-options > div {
  margin-left: 0 !important;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout eve-payment-options > div.ml-5 {
  display: flex;
  flex-direction: column;
  width: 103%;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  > div.ml-5
  div:has(> eve-paypal) {
  order: 1;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .col-lg-2.mb-3:has(> input#poNumber) {
  min-width: 100% !important;
  width: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid #ced4da;
  overflow: hidden;
  height: 51px;
  padding: 7px 10px;
  position: relative;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .col-lg-2.mb-3:has(> input#poNumber):has(input:focus),
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .col-lg-2.mb-3:has(> input#poNumber):has(input:active) {
  border: 2px solid #333333;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .col-lg-2.mb-3:has(> input#poNumber)
  label {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  width: 100%;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #767676;
  white-space: nowrap;
  margin-bottom: 0px;
  margin: 0 !important;
  padding: 0 !important;
  font-size: 16px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .col-lg-2.mb-3:has(> input#poNumber)
  label:has(~ input:not(:placeholder-shown)),
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .col-lg-2.mb-3:has(> input#poNumber)
  label:has(~ input:focus),
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .col-lg-2.mb-3:has(> input#poNumber)
  label:has(~ input:active) {
  position: static;
  font-size: 14px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .col-lg-2.mb-3:has(> input#poNumber)
  input {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: transparent;
  padding: 0;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #333333;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .col-lg-2.mb-3:has(> input#poNumber)
  input:focus,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .col-lg-2.mb-3:has(> input#poNumber)
  input:active,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .col-lg-2.mb-3:has(> input#poNumber)
  input:not(:placeholder-shown) {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .btn.btn-primary {
  border-radius: 0px;
  outline: none;
  width: 103%;
  height: 51px;
  padding: 17px 20px;
  border: none;
  outline: none;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #ffffff;
  background-color: #b3b3b3;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .btn.btn-primary:not(disabled) {
  background-color: #9cca5a;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  eve-payment-options
  .btn.btn-primary:hover {
  opacity: 0.9;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout eve-payment-options .ml-5 .row {
  margin-left: 0 !important;
  margin-left: 0 !important;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout .ab-credit-or-debit-forms-section {
  padding: 0 63px 123px 0;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-product-summary__coupons-form-group,
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  .ab-product-summary__addons-form-group {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout div:has(> input#newsletter) {
  margin: 0 !important;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  gap: 10px;
  cursor: pointer;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  div:has(> input#newsletter)
  input[type="checkbox"]#newsletter {
  position: relative;
  margin: 0 !important;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  min-width: 18px;
  height: 18px;
  min-height: 18px;
  border: 2px solid #767676;
  background-color: #fff;
  cursor: pointer;
  border-radius: 2px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  div:has(> input#newsletter)
  input[type="checkbox"]#newsletter:checked {
  border: none;
  background-color: #0078d7;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  div:has(> input#newsletter)
  input[type="checkbox"]#newsletter:checked:after {
  content: "";
  margin-top: -2px;
  width: 6px;
  height: 11px;
  border-right: 2.5px solid #fff;
  border-bottom: 2.5px solid #fff;
  transform: rotate(45deg);
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  div:has(> input#newsletter)
  label[for="newsletter"] {
  margin: 0 !important;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgb(51, 51, 51);
  cursor: pointer;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout cart-coupon {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px 12px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout cart-coupon .text-danger {
  margin-bottom: 0;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout cart-coupon div:empty {
  display: none;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  cart-coupon
  div:not(:empty):not([class]) {
  width: 100%;
  order: 3;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout cart-coupon input.form-control {
  margin: 0 !important;
  border-radius: 0;
  width: 70%;
  order: 1;
  outline: none;
  height: 51px;
  flex-grow: 1;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  padding: 16px 10px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333333;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  cart-coupon
  .btn.btn-warning.w-100.mt-3.mb-3 {
  order: 2;
  margin: 0 !important;
  width: 76px !important;
  height: 51px;
  background-color: rgb(255, 242, 204);
  border: 1px solid rgb(221, 221, 221);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgb(59, 59, 59);
  transition: all 0.2s;
  border-radius: 0;
  font-size: 0px;
}
.AB-Checkout-Step-1-2.AB-Shipping-Checkout
  cart-coupon
  .btn.btn-warning.w-100.mt-3.mb-3:after {
  content: "Apply";
  font-size: 14px;
}
`;
      document.head.appendChild(style);
      setTimeout(() => {
        clearInterval(interval); // Clear the interval after 5 seconds
      }, 5000);
    }
  }, 100); // Check every 100ms for <head>
})();
/* 
https://www.steinertractor.com/guestcheckout?returnurl=/checkout
https://www.steinertractor.com/checkout#/address
https://www.steinertractor.com/checkout#/main

Figma: https://www.figma.com/design/8qOYEM40DrLkcFtP6ZFY3N/Steiner-Tractor?node-id=3492-2&p=f&t=ZD282H7VVVlTJ2FM-0

Test container: https://app.convert.com/accounts/100412165/projects/10043124/experiences/1004178648/summary
Forced variation v1:  https://www.steinertractor.com/guestcheckout?_conv_eforce=1004178648.1004420738&utm_campaign=qa5&returnurl=%2Fcheckout

*/

(async function AB_CHECKOUT_TEST() {
  const TEST_CONFIG = {
    client: "ROI Revolutions",
    project: "steinertractor",
    host: "https://www.steinertractor.com",
    path: window.location.pathname,
    hash: window.location.hash,
    test_name: "Checkout - Optimize User Interface [D]",
    page_initials: "AB-Checkout-Step-1-2",
    test_variation: 1,
    test_version: 0.0002,
  };

  const { host, page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    question_svg: /* HTML */ `<svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2ZM10 14C10.2652 14 10.5196 14.1054 10.7071 14.2929C10.8946 14.4804 11 14.7348 11 15C11 15.2652 10.8946 15.5196 10.7071 15.7071C10.5196 15.8946 10.2652 16 10 16C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15C9 14.7348 9.10536 14.4804 9.29289 14.2929C9.48043 14.1054 9.73478 14 10 14ZM10 4.5C10.8423 4.50003 11.6583 4.79335 12.3078 5.3296C12.9573 5.86585 13.3998 6.61154 13.5593 7.43858C13.7188 8.26562 13.5853 9.12239 13.1818 9.86171C12.7783 10.601 12.1299 11.1768 11.348 11.49C11.2322 11.5326 11.1278 11.6014 11.043 11.691C10.999 11.741 10.992 11.805 10.993 11.871L11 12C10.9997 12.2549 10.9021 12.5 10.7272 12.6854C10.5522 12.8707 10.313 12.9822 10.0586 12.9972C9.80416 13.0121 9.55362 12.9293 9.35817 12.7657C9.16271 12.6021 9.0371 12.3701 9.007 12.117L9 12V11.75C9 10.597 9.93 9.905 10.604 9.634C10.8783 9.52446 11.1176 9.34227 11.2962 9.10699C11.4748 8.87171 11.5859 8.59222 11.6176 8.29856C11.6493 8.00489 11.6004 7.70813 11.4762 7.44014C11.352 7.17215 11.1571 6.94307 10.9125 6.77748C10.6679 6.61189 10.3829 6.51606 10.0879 6.50027C9.79295 6.48448 9.49927 6.54934 9.23839 6.68787C8.97752 6.8264 8.75931 7.03338 8.60719 7.28658C8.45508 7.53978 8.37481 7.82962 8.375 8.125C8.375 8.39022 8.26964 8.64457 8.08211 8.83211C7.89457 9.01964 7.64022 9.125 7.375 9.125C7.10978 9.125 6.85543 9.01964 6.66789 8.83211C6.48036 8.64457 6.375 8.39022 6.375 8.125C6.375 7.16359 6.75692 6.24156 7.43674 5.56174C8.11656 4.88192 9.03859 4.5 10 4.5Z"
        fill="#333333"
      />
    </svg> `,
  };

  const DATA = {
    text_based_input_list: [
      "text",
      "tel",
      "number",
      "email",
      "password",
      "url",
      "search",
    ],
    forms: {
      // Guest Checkout
      guest_personal_information: {
        title: "Personal Information",
        id: "personal-information",
        inputList: [
          {
            id: "ab-company",
            type: "text",
            label: "Company",
            required: false,
            className: "col-12",
            control_node_selector: "#company",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-first-name",
            type: "text",
            label: "First name",
            required: true,
            className: "col-6",
            control_node_selector: "input[name='FirstName']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-last-name",
            type: "text",
            label: "Last name",
            required: true,
            className: "col-6 ab-pl-0",
            control_node_selector: "#lastName",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-phone",
            type: "tel",
            label: "Phone",
            required: true,
            className: "col-6",
            control_node_selector: "#phonereg, #phone",
            dependency_node_selector: "#ab-billing-phone-bill",
            value: "",
            errorMessage: "Please enter a valid phone number",
          },
          {
            id: "ab-ext",
            type: "tel",
            label: "Ext",
            required: true,
            className: "col-6 ab-pl-0",
            control_node_selector: "#ext",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-email",
            type: "email",
            label: "Email",
            required: true,
            className: "col-12",
            control_node_selector: "#ResetEmail",
            value: "",
            errorMessage: "Please enter a valid email address",
          },
        ],
      },
      guest_billing_address: {
        title: "Billing Address",
        id: "billing-address",
        inputList: [
          {
            id: "ab-billing-country",
            type: "select" /* Dropdown/Select */,
            optionList: [],
            label: "Country",
            className: "col-6",
            required: true,
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(6) select[name='CountryId']",
            dependency_node_selector: "select#ab-billing-state",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-billing-phone-bill",
            type: "tel",
            label: "Phone",
            required: false,
            className: "col-6 ab-pl-0",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(6) #phone",
            value: "",
            errorMessage: "Please enter a valid phone number",
          },
          {
            id: "ab-billing-street-address",
            type: "text",
            label: "Street Address",
            required: true,
            className: "col-12",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(6) #coAddress",
            value: "",
            errorMessage: "Enter a valid address",
          },
          {
            id: "ab-billing-street-address-two",
            type: "text",
            label: "Street address 2",
            required: true,
            className: "col-12",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(6) #coAddress2",
            value: "",
            errorMessage: "Enter a valid address",
          },
          {
            id: "ab-billing-city",
            type: "text",
            label: "City",
            required: true,
            className: "col-4",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(6) #coCity",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-billing-state",
            type: "select" /* Dropdown/Select */,
            label: "State",
            optionList: [],
            required: true,
            className: "col-4 ab-pl-0",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(6) select[name='StateId']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-billing-zip-code",
            type: "text",
            label: "Zip code",
            required: true,
            className: "col-4 ab-pl-0",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(6) #coZip",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-billing-carriers",
            subtitle: "Which carriers offer delivery service to this address?",
            type: "select" /* Dropdown/Select */,
            label: "All Carriers",
            optionList: [],
            required: false,
            className: "col-12",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(6) select#ShipMethod",
            value: "",
            errorMessage: "",
          },
        ],
      },
      guest_delivery_address: {
        title: "Delivery Address",
        id: "delivery-address",
        inputList: [
          {
            id: "ab-delivery-country",
            type: "select" /* Dropdown/Select */,
            optionList: [],
            label: "Country",
            className: "col-6",
            required: true,
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(9) select[name='CountryId']",
            dependency_node_selector: "select#ab-delivery-state",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-delivery-phone-bill",
            type: "tel",
            label: "Phone",
            required: false,
            className: "col-6 ab-pl-0",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(9) #phone",
            value: "",
            errorMessage: "Please enter a valid phone number",
          },
          {
            id: "ab-delivery-street-address",
            type: "text",
            label: "Street Address",
            required: true,
            className: "col-12",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(9) #coAddress",
            value: "",
            errorMessage: "Enter a valid address",
          },
          {
            id: "ab-delivery-street-address-two",
            type: "text",
            label: "Street address 2",
            required: true,
            className: "col-12",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(9) #coAddress2",
            value: "",
            errorMessage: "Enter a valid address",
          },
          {
            id: "ab-delivery-city",
            type: "text",
            label: "City",
            required: true,
            className: "col-4",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(9) #coCity",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-delivery-state",
            type: "select" /* Dropdown/Select */,
            label: "State",
            optionList: [],
            required: true,
            className: "col-4 ab-pl-0",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(9) select[name='StateId']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-delivery-zip-code",
            type: "text",
            label: "Zip code",
            required: true,
            className: "col-4 ab-pl-0",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(9) #coZip",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-delivery-carriers",
            subtitle: "Which carriers offer delivery service to this address?",
            type: "select" /* Dropdown/Select */,
            label: "All Carriers",
            optionList: [],
            required: false,
            className: "col-12",
            control_node_selector:
              "#guestCheckoutWrapper >  form > div:nth-child(9) select#ShipMethod",
            value: "",
            errorMessage: "",
          },
        ],
      },
      guest_create_account: {
        title: "Create Account",
        id: "guest-create-account",
        inputList: [
          {
            id: "ab-guest-password",
            type: "password",
            label: "Password",
            className: "col-6",
            control_node_selector: "#Password",
            errorMessage: "Password must be at least 7 characters long",
          },
          {
            id: "ab-guest-retype-password",
            type: "password",
            label: "Confirm Password",
            className: "col-6 ab-pl-0",
            control_node_selector: "#confirmPassword",
            errorMessage: "Passwords do not match",
          },
        ],
      },
      guest_shipping_address: {
        title: "Shipping Address",
        id: "shipping-address",
        inputList: [
          {
            id: "ab-guest-same-as-billing",
            type: "checkbox",
            label: "Use the same address for delivery.",
            className: "col-12",
            control_node_selector: "#sameAsBilling",
            checked: true,
          },
          {
            id: "ab-guest-create-account",
            type: "checkbox",
            label:
              "Register as a customer. Customers can view order history and shipping status and track previous orders.",
            className: "col-12",
            control_node_selector: "#createAccount",
            checked: false,
          },
        ],
        actionList: [
          {
            id: "ab-continue-as-guest",
            label: "Continue as Guest",
            className: "col-8",
            disabled: true,
            control_node_selector:
              "#guestCheckoutWrapper button[type='submit']",
          },
          {
            id: "ab-need-help",
            className: "col-4 ab-pl-0",
            label: "Need help?",
            control_node_selector: "#help-button",
          },
        ],
      },
      guest_action_container: {
        title: "",
        id: "guest-submit-actions",
        inputList: [],
        actionList: [
          {
            id: "ab-continue-as-guest",
            label: "Continue as Guest",
            className: "col-8",
            disabled: true,
            control_node_selector:
              "#guestCheckoutWrapper button[type='submit']",
          },
          {
            id: "ab-need-help",
            className: "col-4 ab-pl-0",
            label: "Need help?",
            control_node_selector: "#help-button",
          },
        ],
      },
      // Checkout
      checkout_billing_address: {
        title: "Billing Address",
        id: "billing-address",
        inputList: [
          {
            id: "ab-billing-full-name",
            type: "text",
            label: "Full name",
            required: true,
            className: "col-12",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form input[name='DisplayName']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-billing-country",
            type: "select" /* Dropdown/Select */,
            optionList: [],
            label: "Country",
            className: "col-6",
            required: true,
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:first-of-type  > eve-address-form select[name='CountryId']",
            dependency_node_selector: "select#ab-billing-state",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-billing-phone-bill",
            type: "tel",
            label: "Phone",
            required: false,
            className: "col-6 ab-pl-0",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form #coPhone",
            value: "",
            errorMessage: "Please enter a valid phone number",
          },
          {
            id: "ab-billing-street-address",
            type: "text",
            label: "Street Address",
            required: true,
            className: "col-12",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form #coAddress",
            value: "",
            errorMessage: "Enter a valid address",
          },
          {
            id: "ab-billing-street-address-two",
            type: "text",
            label: "Street address 2",
            required: true,
            className: "col-12",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form #coAddress2",
            value: "",
            errorMessage: "Enter a valid address",
          },
          {
            id: "ab-billing-city",
            type: "text",
            label: "City",
            required: true,
            className: "col-4",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form #coCity",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-billing-state",
            type: "select" /* Dropdown/Select */,
            label: "State",
            optionList: [],
            required: true,
            className: "col-4 ab-pl-0",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form select[name='StateId']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-billing-zip-code",
            type: "text",
            label: "Zip code",
            required: true,
            className: "col-4 ab-pl-0",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form #coZip",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-billing-carriers",
            subtitle: "Which carriers offer delivery service to this address?",
            type: "select" /* Dropdown/Select */,
            label: "All Carriers",
            optionList: [],
            required: false,
            className: "col-12",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:first-of-type   > eve-address-form select#carrier",
            value: "",
            errorMessage: "",
          },
        ],
      },
      checkout_shipping_address: {
        title: "Shipping Address",
        id: "shipping-address",
        inputList: [
          {
            id: "ab-shipping-full-name",
            type: "text",
            label: "Full name",
            required: true,
            className: "col-12",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:last-of-type   > eve-address-form input[name='DisplayName']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-shipping-country",
            type: "select" /* Dropdown/Select */,
            optionList: [],
            label: "Country",
            className: "col-6",
            required: true,
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:last-of-type   > eve-address-form select[name='CountryId']",
            dependency_node_selector: "select#ab-shipping-state",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-shipping-phone-bill",
            type: "tel",
            label: "Phone",
            required: false,
            className: "col-6 ab-pl-0",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form #coPhone",
            value: "",
            errorMessage: "Please enter a valid phone number",
          },
          {
            id: "ab-shipping-street-address",
            type: "text",
            label: "Street Address",
            required: true,
            className: "col-12",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form #coAddress",
            value: "",
            errorMessage: "Enter a valid address",
          },
          {
            id: "ab-shipping-street-address-two",
            type: "text",
            label: "Street address 2",
            required: true,
            className: "col-12",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form #coAddress2",
            value: "",
            errorMessage: "Enter a valid address",
          },
          {
            id: "ab-shipping-city",
            type: "text",
            label: "City",
            required: true,
            className: "col-4",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form #coCity",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-shipping-state",
            type: "select" /* Dropdown/Select */,
            label: "State",
            optionList: [],
            required: true,
            className: "col-4 ab-pl-0",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form select[name='StateId']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-shipping-zip-code",
            type: "text",
            label: "Zip code",
            required: true,
            className: "col-4 ab-pl-0",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form #coZip",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-shipping-carriers",
            subtitle: "Which carriers offer delivery service to this address?",
            type: "select" /* Dropdown/Select */,
            label: "All Carriers",
            optionList: [],
            required: false,
            className: "col-12",
            control_node_selector:
              "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form select#carrier",
            value: "",
            errorMessage: "",
          },
        ],
      },
      checkout_same_billing: {
        title: "",
        id: "same-billing",
        inputList: [
          {
            id: "ab-checkout-same-as-billing",
            type: "checkbox",
            label: "Use the same address for delivery.",
            className: "col-8 col-lg-7",
            control_node_selector: "#sameShip",
            checked: true,
          },
        ],
        actionList: [
          {
            id: "ab-continue-checkout",
            label: "Continue Checkout",
            className: "col-8",
            disabled: true,
            control_node_selector:
              "app-address-management > button.btn.btn-primary.mt-5.text-right",
          },
        ],
      },
      // Shipping & Review
      payment_options_credit_or_debit: {
        title: "",
        id: "payment-options-credit-or-debit",
        inputList: [
          {
            id: "ab-name-on-card",
            type: "text",
            label: "Name on Card",
            required: true,
            className: "col-12",
            control_node_selector: "#cardName",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-credit-debit",
            type: "text",
            label: "Credit/Debit Card Number",

            required: true,
            className: "col-12",
            control_node_selector: "#creditCardNumber",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-month",
            type: "select" /* Dropdown/Select */,
            subtitle: "Expiration Date",
            optionList: [],
            label: "MM",
            className: "col-6",
            required: true,
            control_node_selector: "#month",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-year",
            type: "select" /* Dropdown/Select */,
            subtitle: "",
            optionList: [],
            label: "YY",
            className: "col-6 ab-pl-0",
            required: true,
            control_node_selector: "#year",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-cvv",
            type: "tel",
            label: "CVV / CSC",
            required: true,
            className: "col-6",
            control_node_selector: "input[name='ccv']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-po-number",
            type: "tel",
            label: "PO Number",
            className: "col-6 ab-pl-0",
            control_node_selector:
              "input[formcontrolname='ExternalPurchaseOrderNumber']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-check-same-as-billing",
            type: "checkbox",
            label: "Check if billing address is same as above",
            className: "col-12",
            control_node_selector: "input[type='checkbox'].form-check.ng-valid",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-address-line-1",
            type: "text",
            label: "Address Line 1",
            required: true,
            className: "col-12",
            control_node_selector: "input[formcontrolname='addressOne']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-address-line-2",
            type: "text",
            label: "Address Line 2",
            className: "col-12",
            control_node_selector: "input[formcontrolname='addressTwo']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-country",
            type: "select" /* Dropdown/Select */,
            optionList: [],
            label: "Country",
            className: "col-12",
            required: true,
            control_node_selector: "select[formcontrolname='country']",
            dependency_node_selector: "select#ab-state",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-city",
            type: "text",
            label: "City",
            className: "col-4",
            required: true,
            control_node_selector: "input[formcontrolname='city']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-state",
            type: "select" /* Dropdown/Select */,
            optionList: [],
            label: "State",
            className: "col-4 ab-pl-0",
            required: true,
            control_node_selector: "select[formcontrolname='state']",
            value: "",
            errorMessage: "",
          },
          {
            id: "ab-zip-code",
            type: "text",
            label: "ZIP code",
            className: "col-4 ab-pl-0",
            required: true,
            control_node_selector: "input[formcontrolname='zip']",
            value: "",
            errorMessage: "",
          },
        ],
        actionList: [
          {
            id: "ab-place-order",
            label: "Place Order",
            className: "col-12",
            disabled: true,
            control_node_selector: "eve-authorizenet .btn.btn-primary",
          },
        ],
      },
    },
  };

  async function fetchCartData() {
    const response = await fetch(
      "https://www.steinertractor.com/api/carts/carts_read",
      {
        method: "GET",
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          // authorization: "Bearer your-token-here", // If needed
          "x-requested-with": "XMLHttpRequest",
        },
        credentials: "include",
      },
    );

    return await response.json();
  }

  async function waitForElementAsync(
    predicate,
    timeout = 20000,
    frequency = 150,
  ) {
    const startTime = Date.now();

    return new Promise((resolve, reject) => {
      if (typeof predicate === "function" && predicate()) {
        return resolve(true);
      }

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;

        if (elapsed >= timeout) {
          clearInterval(interval);
          return reject(
            new Error(
              `Timeout of ${timeout}ms reached while waiting for condition: ${predicate.toString()}`,
            ),
          );
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

  //  ========= FORM BUILDER =========
  function getFormLayout(formObj) {
    const { title, id: formId, inputList, actionList } = formObj;

    const layout = /* HTML */ `
      <div id="${formId}" class="ab-form">
        ${title ? `<h2 class="ab-form-heading">${title}</h2>` : ""}
        ${inputList && inputList.length > 0
          ? `
                        <div class="ab-form-input-container row">
                        ${inputList
                          .map(
                            ({
                              id,
                              title,
                              subtitle,
                              type: inputType,
                              optionList,
                              label,
                              required,
                              pattern,
                              className,
                              control_node_selector,
                              dependency_node_selector,
                              value,
                              checked,
                              errorMessage,
                            }) => {
                              return /* HTML */ `
                                <div
                                  class="ab-col ab-form-col col ${className}"
                                >
                                  ${title
                                    ? `<span class="ab-form-title">${title}</span>`
                                    : ""}
                                  ${subtitle !== undefined
                                    ? `<span class="ab-form-subtitle">${subtitle}</span>`
                                    : ""}
                                  <label for="${id}" class="ab-form-group">
                                    <span class="ab-label">${label}</span>
                                    ${inputType === "select"
                                      ? ` 
                                                <select
                                                    id="${id}"
                                                    class="ab-input"
                                                    type="${inputType}"
                                                    control_node_selector="${control_node_selector}"
                                                    placeholder=""
                                                    ${dependency_node_selector ? `dependency_node_selector="${dependency_node_selector}"` : ""}
                                                    ${value ? `value="${value}"` : ""}
                                                    ${required ? `required` : ""}
                                                    ${pattern ? `pattern="${pattern}"` : ""}
                                                >
                                                    <option value="${q(control_node_selector + "> option:first-child").value || ""}" selected>${label}</option>
                                                    ${
                                                      control_node_selector &&
                                                      q(control_node_selector)
                                                        ? `
                                                            ${qq(
                                                              control_node_selector +
                                                                "> option:not(:first-child)",
                                                            )
                                                              .map(
                                                                (item) =>
                                                                  item.outerHTML,
                                                              )
                                                              .join("")}
                                                            `
                                                        : ""
                                                    }
                                                </select>`
                                      : `
                                                    <input
                                                        id="${id}"
                                                        class="ab-input"
                                                        type="${inputType}"
                                                        placeholder=""
                                                        control_node_selector="${control_node_selector}"
                                                        ${dependency_node_selector ? `dependency_node_selector="${dependency_node_selector}"` : ""}
                                                        ${value ? `value="${value}"` : ""}
                                                        ${required ? `required` : ""}
                                                        ${pattern ? `pattern="${pattern}"` : ""}
                                                        ${inputType === "checkbox" && q(control_node_selector + ":checked") ? "checked" : ""}
                                                        area-empty
                                                    />
                                                `}
                                  </label>
                                  <span class="ab-error-message"
                                    >${errorMessage
                                      ? errorMessage
                                      : `${label} is required`}
                                  </span>
                                </div>
                              `;
                            },
                          )
                          .join("")}

                        </div>
                    `
          : ""}
        ${actionList && actionList.length > 0
          ? `
                        <div class="ab-form-action-container row">
                            ${actionList
                              .map(
                                ({
                                  id,
                                  label,
                                  disabled,
                                  className,
                                  control_node_selector,
                                }) => /* HTML */ `
                                  <div class="ab-action-col col ${className}">
                                    <button
                                      class="ab-action-button"
                                      type="button"
                                      id="${id}"
                                      ${disabled ? "disabled" : ""}
                                      control_node_selector="${control_node_selector}"
                                    >
                                      ${label}
                                    </button>
                                  </div>
                                `,
                              )
                              .join("")}
                        </div>`
          : ""}
      </div>
    `;

    return layout;
  }

  //  ========= PRODUCT SUMMARY =========
  async function getProductSummaryLayout() {
    const { CartLine, UnitTotals, SubTotal, PromotionTotal, TaxTotal, Total } =
      await fetchCartData();

    const layout = /* HTML */ `
      <div class="ab-product-summary">
        <h3 class="ab-product-summary__heading">Your Order</h3>
        <div class="ab-product-summary__added-products">
          ${CartLine.map(
            ({
              Image,
              Code,
              SEOUrl,
              Name,
              ProductStatus,
              UnitOfMeasure,
            }) => /* HTML */ `
              <div class="ab-product-summary__product">
                <a
                  class="ab-product-summary__product-img"
                  href="${host}/${SEOUrl}"
                >
                  <img
                    src="${Image[0].CdnUrl}"
                    alt="${Name}"
                    onerror="this.src='/images/no-image-available.png'"
                    alt="/images/no-image-available.png"
                  />
                  <p class="ab-product-summary__product-sku">${Code}</p>
                </a>
                <div class="ab-product-summary__product-info">
                  <p class="ab-product-summary__product-title">${Name}</p>
                  ${ProductStatus === "Active"
                    ? '<p class="ab-product-summary__product-availability ab-product-summary__product-availability--available">Available</p>'
                    : '<p class="ab-product-summary__product-availability ab-product-summary__product-availability--stock-out">Stock Out</p>'}

                  <p class="ab-product-summary__product-quantity">
                    Quantity: ${UnitOfMeasure[0].Quantity}
                  </p>
                  <p class="ab-product-summary__product-price">
                    $${UnitOfMeasure[0].Price}
                  </p>
                </div>
              </div>
            `,
          ).join("")}
        </div>
        <div class="ab-product-summary__border"></div>
        <div class="ab-product-summary__addons-and-coupon">
          <div class="ab-product-summary__addons">
            <div class="ab-product-summary__addons-heading">
              Optional Add-ons:
            </div>
            <label
              for="ab-addons"
              class="ab-product-summary__addons-form-group"
            >
              <input
                id="ab-addons"
                class="ab-product-summary__addons-checkbox"
                type="checkbox"
              />
              <span class="ab-product-summary__addons-label">FREE Catalog</span>
            </label>
          </div>
          <div class="ab-product-summary__coupons">
            <div class="ab-product-summary__coupons-heading">Coupons</div>
            <label
              for="ab-coupons"
              class="ab-product-summary__coupons-form-group"
            >
              <input
                id="ab-coupons"
                placeholder="Please enter coupon code"
                class="ab-product-summary__coupons-input"
                type="text"
                control_node_selector="cart-coupon input[name='coupon']"
                ${"area-invalid"}
              />
              <button type="button" class="ab-product-summary__coupons-button">
                Apply
              </button>
            </label>
          </div>
        </div>
        <div class="ab-product-summary__calculation-table">
          <div class="ab-product-summary__row row">
            <div class="ab-product-summary__col col-6">Items in Cart</div>
            <div class="ab-product-summary__col col-6">
              ${UnitTotals[0].Quantity}
            </div>
          </div>
          <div class="ab-product-summary__row row">
            <div class="ab-product-summary__col col-6">Delivery</div>
            <div class="ab-product-summary__col col-6">$0.00</div>
          </div>
          <div class="ab-product-summary__row row">
            <div class="ab-product-summary__col col-6">Sub Total</div>
            <div class="ab-product-summary__col col-6">$${SubTotal}</div>
          </div>
          <div class="ab-product-summary__row row">
            <div class="ab-product-summary__col col-6">Promotion Discount</div>
            <div class="ab-product-summary__col col-6">$${PromotionTotal}</div>
          </div>
          <div class="ab-product-summary__row row">
            <div class="ab-product-summary__col col-6">Estimated Tax</div>
            <div class="ab-product-summary__col col-6">$${TaxTotal}</div>
          </div>
          <div
            class="ab-product-summary__row ab-product-summary__row--total row"
          >
            <div class="ab-product-summary__col col-6">Total</div>
            <div class="ab-product-summary__col col-6">$${Total}</div>
          </div>
        </div>
      </div>
    `;

    return layout;
  }

  async function updateProductSummaryLayout() {
    const { CartLine, UnitTotals, SubTotal, PromotionTotal, TaxTotal, Total } =
      await fetchCartData();

    q(".ab-product-summary__added-products").innerHTML = /* HTML */ `
      ${CartLine.map(
        ({
          Image,
          Code,
          SEOUrl,
          Name,
          ProductStatus,
          UnitOfMeasure,
        }) => /* HTML */ `
          <div class="ab-product-summary__product">
            <a class="ab-product-summary__product-img" href="${host}/${SEOUrl}">
              <img
                src="${Image[0].CdnUrl}"
                alt="${Name}"
                onerror="this.src='/images/no-image-available.png'"
                alt="/images/no-image-available.png"
              />
              <p class="ab-product-summary__product-sku">${Code}</p>
            </a>
            <div class="ab-product-summary__product-info">
              <p class="ab-product-summary__product-title">${Name}</p>
              ${ProductStatus === "Active"
                ? '<p class="ab-product-summary__product-availability ab-product-summary__product-availability--available">Available</p>'
                : '<p class="ab-product-summary__product-availability ab-product-summary__product-availability--stock-out">Stock Out</p>'}

              <p class="ab-product-summary__product-quantity">
                Quantity: ${UnitOfMeasure[0].Quantity}
              </p>
              <p class="ab-product-summary__product-price">
                $${UnitOfMeasure[0].Price}
              </p>
            </div>
          </div>
        `,
      ).join("")}
    `;

    q(".ab-product-summary__calculation-table").innerHTML = /* HTML */ `
      <div class="ab-product-summary__row row">
        <div class="ab-product-summary__col col-6">Items in Cart</div>
        <div class="ab-product-summary__col col-6">
          ${UnitTotals[0].Quantity}
        </div>
      </div>
      <div class="ab-product-summary__row row">
        <div class="ab-product-summary__col col-6">Delivery</div>
        <div class="ab-product-summary__col col-6">$0.00</div>
      </div>
      <div class="ab-product-summary__row row">
        <div class="ab-product-summary__col col-6">Sub Total</div>
        <div class="ab-product-summary__col col-6">$${SubTotal}</div>
      </div>
      <div class="ab-product-summary__row row">
        <div class="ab-product-summary__col col-6">Promotion Discount</div>
        <div class="ab-product-summary__col col-6">$${PromotionTotal}</div>
      </div>
      <div class="ab-product-summary__row row">
        <div class="ab-product-summary__col col-6">Estimated Tax</div>
        <div class="ab-product-summary__col col-6">$${TaxTotal}</div>
      </div>
      <div class="ab-product-summary__row ab-product-summary__row--total row">
        <div class="ab-product-summary__col col-6">Total</div>
        <div class="ab-product-summary__col col-6">$${Total}</div>
      </div>
    `;
  }

  async function createAndUpdateGuestCheckoutLayout() {
    const {
      guest_personal_information,
      guest_billing_address,
      guest_shipping_address,
    } = DATA["forms"];

    // Update
    q("body").classList.add("AB-Guest-Checkout");
    qq(".row.content-body  *:not(.ab-content-wrapper) input").forEach((item) =>
      item.setAttribute("placeholder", ""),
    );
    qq("body > form > .container.bg-white, .footer").forEach((item) =>
      item.classList.remove("container"),
    );

    // Create
    /* ab-content-wrapper--show-login, ab-content-wrapper--show-guest-checkout */
    q(".row.content-body").insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <div class="ab-content-wrapper ab-content-wrapper--show-guest-checkout">
          <div class="ab-content-top"></div>
          <div class="ab-content-bottom container">
            <div class="row">
              <div class="ab-content-forms-wrapper col-6">
                <div class="ab-guest-checkout-section">
                  <div class="ab-guest-checkout-form">
                    <h1 class="ab-guest-checkout-header">
                      Checkout with New Account
                    </h1>
                    ${getFormLayout(guest_personal_information)}
                    ${getFormLayout(guest_billing_address)}
                    ${getFormLayout(guest_shipping_address)}
                  </div>
                </div>
              </div>
              <div class="ab-content-product-summary-wrapper col-6"></div>
            </div>
          </div>
        </div>
      `,
    );

    const mainWrapperElement = q(".ab-content-wrapper");

    // Insert Heading Items
    qq(".guest-checkout-optn > h1, .guest-checkout-optn").forEach((item) =>
      q(mainWrapperElement, ".ab-content-top").insertAdjacentElement(
        "afterbegin",
        item,
      ),
    );

    // Insert Login Form
    const controlLoginElement = qq(
      ".row.content-body > *:not(.ab-content-wrapper)",
    ).find((item) => !!q(item, ".Head")?.innerText.includes("Account Login"));
    if (controlLoginElement) {
      controlLoginElement.classList.add("ab-login-section");
      q(mainWrapperElement, ".ab-content-forms-wrapper").insertAdjacentElement(
        "afterbegin",
        controlLoginElement,
      );
    }

    // Insert Control Guest Checkout Form
    const controlGuestCheckoutElement = qq(
      ".row.content-body > *:not(.ab-content-wrapper)",
    ).find((item) => !!q(item, "#guest-checkout-form"));
    if (controlGuestCheckoutElement) {
      controlGuestCheckoutElement.classList.add(
        "ab-control-guest-checkout-form",
      );
      q(mainWrapperElement, ".ab-guest-checkout-section").insertAdjacentElement(
        "afterbegin",
        controlGuestCheckoutElement,
      );
    }

    // Add product summary element
    const productSummaryLayout = await getProductSummaryLayout();
    if (productSummaryLayout) {
      q(
        mainWrapperElement,
        ".ab-content-product-summary-wrapper",
      ).insertAdjacentHTML("afterbegin", productSummaryLayout);
    }
  }

  async function createAndUpdateAddressLayout() {
    const { checkout_billing_address, checkout_same_billing } = DATA["forms"];

    // Update
    q("body").classList.add("AB-Address-Checkout");
    qq("body > form > .container.bg-white, .footer").forEach((item) =>
      item.classList.remove("container"),
    );

    // Create
    q(".row.content-body").insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <div class="ab-content-wrapper">
          <div class="ab-content-top"></div>
          <div class="ab-content-bottom container">
            <div class="row">
              <div class="ab-content-forms-wrapper col-6">
                <div class="ab-address-checkout-section">
                  <div class="ab-address-checkout-form">
                    ${getFormLayout(checkout_billing_address)}
                    ${getFormLayout(checkout_same_billing)}
                  </div>
                </div>
              </div>
              <div class="ab-content-product-summary-wrapper col-6"></div>
            </div>
          </div>
        </div>
      `,
    );

    const mainWrapperElement = q(".ab-content-wrapper");

    // Add heading items
    qq(".guest-checkout-optn > h1, .guest-checkout-optn").forEach((item) =>
      q(mainWrapperElement, ".ab-content-top").insertAdjacentElement(
        "afterbegin",
        item,
      ),
    );

    // Add product summary element
    const productSummaryLayout = await getProductSummaryLayout();
    if (productSummaryLayout) {
      q(
        mainWrapperElement,
        ".ab-content-product-summary-wrapper",
      ).insertAdjacentHTML("afterbegin", productSummaryLayout);
    }
  }

  async function createAndUpdateShippingLayout() {
    console.log("Shipping & Review...");

    // const { checkout_billing_address, checkout_shipping_address, checkout_same_billing } = DATA["forms"];

    await waitForElementAsync(() => q("eve-shipping-address"));

    // Update
    q("body").classList.add("AB-Shipping-Checkout");
    qq("body > form > .container.bg-white, .footer").forEach((item) =>
      item.classList.remove("container"),
    );

    // Create
    q(".row.content-body").insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <div class="ab-content-wrapper">
          <div class="ab-content-top">
            <div class="container"></div>
          </div>
          <div class="ab-content-bottom container">
            <div class="row">
              <div class="ab-content-forms-wrapper col-6">
                <div class="ab-control-forms-section">
                  <h1 class="ab-shipping-header">Delivery</h1>
                </div>
                <div class="ab-credit-or-debit-forms-section">
                  <div _ngcontent-c9="" class="card-icons">
                    <img _ngcontent-c9="" alt="" src="/portals/0/visa.png" />
                    <img
                      _ngcontent-c9=""
                      alt=""
                      src="/portals/0/mastercard.png"
                    />
                    <img
                      _ngcontent-c9=""
                      alt=""
                      src="/portals/0/discover.png"
                    />
                    <img _ngcontent-c9="" alt="" src="/portals/0/amex.png" />
                  </div>
                </div>
              </div>
              <div class="ab-content-product-summary-wrapper col-6"></div>
            </div>
          </div>
        </div>
      `,
    );

    const mainWrapperElement = q(".ab-content-wrapper");

    // Add heading items
    qq("eve-shipping-address .address-text").forEach((item) => {
      q(item, "div:not(.btn)").appendChild(q(item, ".btn"));

      const div = document.createElement("div");
      div.className = "ab-shipping-address-wrapper";
      qq(item, ":scope > *").forEach((child) => div.appendChild(child));
      item.appendChild(div);
    });

    qq("eve-shipping-address").forEach((item) =>
      q(
        mainWrapperElement,
        ".ab-content-top > .container",
      ).insertAdjacentElement("afterbegin", item),
    );

    // Add form elements
    qq("eve-checkout-page > hr ~ div").forEach((item) => {
      q(mainWrapperElement, ".ab-control-forms-section").appendChild(item);
    });

    // Add product summary element
    const productSummaryLayout = await getProductSummaryLayout();
    if (productSummaryLayout) {
      q(
        mainWrapperElement,
        ".ab-content-product-summary-wrapper",
      ).insertAdjacentHTML("afterbegin", productSummaryLayout);
      q(
        mainWrapperElement,
        "#ab-addons.ab-product-summary__addons-checkbox",
      ).checked = q("#newsletter").checked;
      q("label[for='newsletter']").innerText = "FREE Catalog";
      q(mainWrapperElement, ".ab-product-summary__addons").appendChild(
        q("div:has(> input#newsletter)"),
      );
      q(mainWrapperElement, ".ab-product-summary__coupons").appendChild(
        q("cart-coupon"),
      );
    }

    // return true;
  }

  async function handleAddressDeliveryFormShowHide(e) {
    q(".ab-form#delivery-address")?.remove();

    const { guest_delivery_address } = DATA.forms;
    const contentWrapper = q(".ab-content-wrapper");
    const billingAddressForm = q(".ab-form#billing-address");

    if (!e.target.checked) {
      await waitForElementAsync(
        () =>
          !!(
            q(
              "#guestCheckoutWrapper >  form > div:nth-child(9) select[name='CountryId']",
            ) && validateAllControlNodesExist(guest_delivery_address.inputList)
          ),
      );
      contentWrapper.classList.add("ab-content-wrapper--show-delivery-address");
      billingAddressForm.insertAdjacentHTML(
        "afterend",
        getFormLayout(guest_delivery_address),
      );
      eventHandler();
    } else {
      contentWrapper.classList.remove(
        "ab-content-wrapper--show-delivery-address",
      );
      setTimeout(
        () =>
          billingAddressForm.scrollIntoView({
            behavior: "smooth",
            block: "center",
          }),
        100,
      );
    }
  }

  async function handleAddressCreateAccountFormShowHide(e) {
    q(".ab-form#guest-create-account")?.remove();

    const { guest_create_account } = DATA.forms;
    const contentWrapper = q(".ab-content-wrapper");
    const shippingAddressForm = q(".ab-form#shipping-address");

    if (e.target.checked) {
      await waitForElementAsync(
        () => !!validateAllControlNodesExist(guest_create_account.inputList),
      );
      contentWrapper.classList.add(
        "ab-content-wrapper--show-guest-create-account",
      );
      shippingAddressForm.insertAdjacentHTML(
        "beforebegin",
        getFormLayout(guest_create_account),
      );
      eventHandler();
    } else {
      contentWrapper.classList.remove(
        "ab-content-wrapper--show-guest-create-account",
      );
      setTimeout(
        () =>
          shippingAddressForm.scrollIntoView({
            behavior: "smooth",
            block: "center",
          }),
        100,
      );
    }
  }

  async function handleCreditDebitFormShowHide(e) {
    await waitForElementAsync(() => !q("ngx-loading .backdrop"));

    const selectInput = q(
      ".AB-Shipping-Checkout .payment-row >  .col-lg-6  > select.form-control",
    );
    optionTxt =
      q(
        selectInput,
        `option[value="${selectInput.value}"]`,
      ).innerText?.trim() ?? null;

    q(".ab-form#payment-options-credit-or-debit")?.remove();

    const { payment_options_credit_or_debit } = DATA.forms;
    const contentWrapper = q(".ab-content-wrapper");
    const targetFormSection = q(".ab-credit-or-debit-forms-section");

    if (optionTxt === "Credit/Debit Card") {
      await waitForElementAsync(
        () =>
          !!validateAllControlNodesExist(
            payment_options_credit_or_debit.inputList,
          ),
      );
      contentWrapper.classList.add("ab-content-wrapper--show-credit-debit");
      targetFormSection.insertAdjacentHTML(
        "beforeend",
        getFormLayout(payment_options_credit_or_debit),
      );
      q("input#ab-cvv").insertAdjacentHTML(
        "afterend",
        /* HTML */ `
          <div class="ab-tooltip-container">
            <div class="ab-tooltip-icon">${ASSETS["question_svg"]}</div>
            <div class="ab-tooltip-message">
              The <b _ngcontent-c9="">CVV Number</b> ("Card Verification Value")
              on your credit card or debit card is a 3 digit number located on
              the back of VISA®, MasterCard® and Discover® branded credit and
              debit cards. On your American Express® branded credit or debit
              card, it is a 4 digit numeric code located on the front.
            </div>
          </div>
        `,
      );
      eventHandler();
    } else {
      contentWrapper.classList.remove("ab-content-wrapper--show-credit-debit");
      setTimeout(
        () =>
          q(".ab-control-forms-section").scrollIntoView({
            behavior: "smooth",
            block: "center",
          }),
        100,
      );
    }
  }

  async function handleSameAsBillingCheckboxClick(e) {
    const isChecked = e.target.checked;
    const controlCheckSelector = e.target.getAttribute("control_node_selector");

    await waitForElementAsync(
      () =>
        q(controlCheckSelector) &&
        q(controlCheckSelector).checked === isChecked,
    );

    qq(
      "input#ab-address-line-1, input#ab-address-line-2, select#ab-country, input#ab-city, select#ab-state, input#ab-zip-code",
    ).forEach((currentTarget) => {
      const dataObj = getElementData(currentTarget);

      if (dataObj["inputType"] === "select") {
        setTimeout(() => {
          const controlOptions = qq(
            dataObj["controlNodeSelector"] + " > option:not(:first-child)",
          );
          currentTarget.innerHTML = `${q(currentTarget, "option:first-child").outerHTML} ${controlOptions.map((option) => option.outerHTML).join("")} `;
          const selectedOption = controlOptions.find(
            (option) => option.selected,
          );
          currentTarget.value = selectedOption.value;

          handleFormErrorMessage(dataObj);
          updateSelectInputView(dataObj);
        }, 1500);
      } else {
        currentTarget.value = q(dataObj["controlNodeSelector"]).value;
        handleFormErrorMessage(dataObj);
      }
    });
  }

  function getElementData(currentTarget) {
    const value = currentTarget.value;
    const checked = currentTarget?.checked;
    const inputType = currentTarget.getAttribute("type");
    const controlNodeSelector = currentTarget.getAttribute(
      "control_node_selector",
    );
    const controlNodes = qq(controlNodeSelector);

    const dependencySelector = currentTarget.getAttribute(
      "dependency_node_selector",
    );
    const dependencyNodes = qq(dependencySelector);

    return {
      currentTarget,
      value,
      checked,
      inputType,
      controlNodeSelector,
      controlNodes,
      dependencySelector,
      dependencyNodes,
    };
  }

  function handleFormErrorMessage({
    currentTarget,
    value,
    checked,
    inputType,
    controlNodeSelector,
    controlNodes,
    dependencySelector,
    dependencyNodes,
  }) {
    if (
      controlNodes?.some((controlNode) =>
        controlNode.classList.contains("is-invalid"),
      )
    ) {
      currentTarget.setAttribute("area-invalid", "");
    } else {
      currentTarget?.removeAttribute("area-invalid");
    }

    if (!currentTarget.value) {
      currentTarget?.setAttribute("area-empty", "");
    } else {
      currentTarget?.removeAttribute("area-empty");
    }

    // Exception | Guest Password input
    if (
      currentTarget.getAttribute("id") === "ab-guest-password" &&
      currentTarget.value.length >= 7
    ) {
      currentTarget?.removeAttribute("area-invalid");
    }
  }

  function updateSelectInputView({
    currentTarget,
    value,
    checked,
    inputType,
    controlNodeSelector,
    controlNodes,
    dependencySelector,
    dependencyNodes,
  }) {
    if (inputType !== "select") return;

    if (currentTarget.value) {
      currentTarget.setAttribute("area-selected", "");
    } else {
      currentTarget.removeAttribute("area-selected");
    }
  }

  function handleTextBasedInputs({
    currentTarget,
    value,
    checked,
    inputType,
    controlNodeSelector,
    controlNodes,
    dependencySelector,
    dependencyNodes,
  }) {
    const scrollPos = { x: window.scrollX, y: window.scrollY };
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    ).set;

    controlNodes.forEach((controlNode) => {
      if (nativeInputValueSetter) {
        nativeInputValueSetter.call(controlNode, value);
      } else {
        controlNode.value = value;
      }
      controlNode.dispatchEvent(
        new InputEvent("input", {
          inputType: "insertText",
          data: value,
          bubbles: true,
          cancelable: true,
        }),
      );
      controlNode.dispatchEvent(new Event("change", { bubbles: true }));
    });

    window.scrollTo(scrollPos.x, scrollPos.y);
  }

  function handleCheckBoxInput({
    currentTarget,
    value,
    checked,
    inputType,
    controlNodeSelector,
    controlNodes,
    dependencySelector,
    dependencyNodes,
  }) {
    controlNodes.forEach((controlNode) => {
      controlNode.click();
      controlNode.checked = checked;
      controlNode.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }

  function handleSelectInput({
    currentTarget,
    value,
    checked,
    inputType,
    controlNodeSelector,
    controlNodes,
    dependencySelector,
    dependencyNodes,
  }) {
    qq(`${controlNodeSelector} > option`).forEach((option) => {
      if (option.value === value) {
        option.selected = true;
        option.click();
        option.dispatchEvent(new Event("change", { bubbles: true }));
        option.dispatchEvent(new Event("click", { bubbles: true }));
        return;
      }

      option.selected = false;
    });

    controlNodes.forEach((controlNode) => {
      controlNode.value = value;
      controlNode.dispatchEvent(new Event("change", { bubbles: true }));
    });

    // Show Hide Borders
    updateSelectInputView({
      currentTarget,
      value,
      inputType,
      controlNodeSelector,
      controlNodes,
      dependencySelector,
      dependencyNodes,
    });
  }

  function updateDependencyNodes({
    currentTarget,
    value,
    checked,
    inputType,
    controlNodeSelector,
    controlNodes,
    dependencySelector,
    dependencyNodes,
  }) {
    if (dependencyNodes?.length === 0) return;

    dependencyNodes.forEach(async (dependencyNode) => {
      try {
        const controlNodeSelector = dependencyNode.getAttribute(
          "control_node_selector",
        );
        const controlNode = q(controlNodeSelector);
        const dependencyNodeInputType = dependencyNode.getAttribute("type");
        const dependencyDataObj = getElementData(dependencyNode);

        let count = 0;

        await waitForElementAsync(
          () =>
            !!(
              DATA["text_based_input_list"].some(
                (type) => type === dependencyNodeInputType,
              ) && controlNode?.value !== dependencyNode?.value
            ) ||
            (dependencyNodeInputType === "select" &&
              controlNode?.options.length > 1 &&
              controlNode?.options?.[1]?.innerText.trim().toLowerCase() !==
                dependencyNode?.options?.[1]?.innerText.trim().toLowerCase() &&
              ++count > 3),
          5000,
        );

        if (DATA["text_based_input_list"].some((type) => type === inputType)) {
          dependencyNode.value =
            inputType === "tel"
              ? controlNode.value.replace(/\D/g, "")
              : controlNode.value;
        } else if (inputType === "checkbox") {
          //
        } else if (inputType === "radio") {
          //
        } else if (inputType === "select") {
          const controlOptions = qq(
            controlNodeSelector + "> option:not(:first-child)",
          );

          dependencyNode.innerHTML = /* HTML */ `${q(
            dependencyNode,
            "option:first-child",
          ).outerHTML}
          ${controlOptions.map((option) => option.outerHTML).join("")} `;
          dependencyNode.value = "";
          q(dependencyNode, " option:first-child").selected = true;
          updateSelectInputView(dependencyDataObj);
        }

        handleFormErrorMessage(dependencyDataObj);
      } catch (error) {
        console.error(error);
        return false;
      }
    });
  }

  function updateFormActionElements() {
    qq(".ab-action-button").forEach((item) => {
      const selector = item.getAttribute("control_node_selector");
      const controlNode = q(selector);

      setTimeout(() => {
        const isDisabled = controlNode.disabled;

        if (isDisabled) {
          item.setAttribute("disabled", "");
        } else {
          item.removeAttribute("disabled", "");
        }
      }, 500);
    });
  }

  function eventHandler() {
    // =========== FROM AND OTHER ACTIONS ============
    const ACTION_LIST = [
      // Form Input
      {
        selector: ".ab-input",
        events: ["input", "change"],
        callback: (e) => {
          const currentTarget = e.target;
          const dataObj = getElementData(currentTarget);

          // Check For Control inputs
          if (
            dataObj["controlNodes"] &&
            dataObj["controlNodes"]?.length === 0
          ) {
            console.error(
              "Target node not found:",
              dataObj["controlNodeSelector"],
            );
            return;
          }

          // Handle control input updates
          if (
            DATA["text_based_input_list"].some(
              (type) => type === dataObj["inputType"],
            )
          ) {
            handleTextBasedInputs(dataObj);
          } else if (dataObj["inputType"] === "radio");
          else if (dataObj["inputType"] === "checkbox") {
            handleCheckBoxInput(dataObj);
          } else if (dataObj["inputType"] === "select") {
            handleSelectInput(dataObj);
          }

          // Update dependent fields
          updateDependencyNodes(dataObj);

          // Handle error message
          handleFormErrorMessage(dataObj);

          // Update actions items
          updateFormActionElements();
        },
      },
      // Form Actions
      {
        selector: ".ab-action-button",
        events: ["click"],
        callback: (e) => {
          const currentTarget = e.target;
          const selector = currentTarget.getAttribute("control_node_selector");
          const controlNodes = qq(selector);
          controlNodes.forEach((controlNode) => controlNode.click());
        },
      },
      // Others
      {
        selector: "#showLogin",
        events: ["click"],
        callback: (e) =>
          (q(".ab-content-wrapper").className =
            "ab-content-wrapper ab-content-wrapper--show-login"),
      },
      {
        selector: "#showCheckout",
        events: ["click"],
        callback: (e) =>
          (q(".ab-content-wrapper").className =
            "ab-content-wrapper ab-content-wrapper--show-guest-checkout"),
      },
      {
        selector: ".AB-Guest-Checkout #ab-guest-same-as-billing",
        events: ["click"],
        callback: handleAddressDeliveryFormShowHide,
      },
      {
        selector: ".AB-Guest-Checkout #createAccount",
        events: ["click"],
        callback: handleAddressCreateAccountFormShowHide,
      },
      {
        selector:
          ".AB-Shipping-Checkout  select#shipping, .AB-Shipping-Checkout .payment-row >  .col-lg-6  > select.form-control",
        events: ["change"],
        callback: handleCreditDebitFormShowHide,
      },
      // Add Ons | Control
      {
        selector: ".AB-Shipping-Checkout input[type='checkbox']#newsletter",
        events: ["click"],
        callback: updateProductSummaryLayout,
      },
      {
        selector: "label[for='ab-check-same-as-billing']",
        events: ["click"],
        callback: handleSameAsBillingCheckboxClick,
      },
      // Add Ons | New Form
      // {
      //     selector: ".AB-Shipping-Checkout .ab-product-summary__addons-checkbox",
      //     events: ["click"],
      //     callback: (e) => {
      //         const targetNode = q("#newsletter");
      //         targetNode.click();
      //         updateProductSummaryLayout();
      //     },
      // },
      // Coupons  | New Form
      // {
      //     selector: ".AB-Shipping-Checkout .ab-product-summary__coupons-input",
      //     events: ["input", "change"],
      //     callback: async (e) => {
      //         const currentTarget = e.target;
      //         const dataObj = getElementData(currentTarget);

      //         // Check For Control inputs
      //         if (dataObj["controlNodes"] && dataObj["controlNodes"]?.length === 0) {
      //             console.error("Target node not found:", dataObj["controlNodeSelector"]);
      //             return;
      //         }

      //         handleTextBasedInputs(dataObj);
      //     },
      // },
      // {
      //     selector: ".AB-Shipping-Checkout .ab-product-summary__coupons-button",
      //     events: ["click"],
      //     callback: async (e) => {
      //         q("cart-coupon input[name='coupon']").focus();
      //         q("cart-coupon div.btn").click();
      //     },
      // },
    ];

    ACTION_LIST.forEach(({ selector, events, callback }) => {
      qq(selector)?.forEach((item) => {
        const debouncedCallback = debounce(callback, 150);
        events.forEach((event) => {
          const className = `ab-${event}-event-attached`;
          if (!item.classList.contains(className)) {
            item.classList.add(className);
            item.addEventListener(event, debouncedCallback);
          }
        });
      });
    });
  }

  function reInitializeTest() {
    console.log("No matching path...");

    setTimeout(() => {
      console.log("Re Initializing Test...");
      if (window.location.pathname === "/checkout") {
        q("body").classList.remove(page_initials);
        q("body").classList.remove(`${page_initials}--v${test_variation}`);
        q("body").classList.remove(`${page_initials}--version:${test_version}`);
        AB_CHECKOUT_TEST();
      }
    }, 250);
  }

  // ===========  MAIN JS ===========
  const FORM_CONFIG = {
    "/guestcheckout": {
      inputList: [
        ...DATA.forms.guest_personal_information.inputList,
        ...DATA.forms.guest_billing_address.inputList,
        ...DATA.forms.guest_shipping_address.inputList,
      ],
      layoutFunction: createAndUpdateGuestCheckoutLayout,
    },
    "/checkout#/address": {
      inputList: [
        ...DATA.forms.checkout_billing_address.inputList,
        ...DATA.forms.checkout_same_billing.inputList,
      ],
      layoutFunction: createAndUpdateAddressLayout,
    },
    "/checkout#/main": {
      inputList: [],
      layoutFunction: createAndUpdateShippingLayout,
    },
  };

  const config = FORM_CONFIG[
    window.location.pathname + window.location.hash
  ] || {
    inputList: [],
    layoutFunction: reInitializeTest,
  };
  const { inputList, mainLayoutFunction } = {
    inputList: config.inputList,
    mainLayoutFunction: config.layoutFunction,
  };

  function validateAllControlNodesExist(inputList) {
    // Temporary Solution
    if (inputList.length === 0) return true;

    return inputList?.every(({ type, control_node_selector }) => {
      if (type === "select") {
        return qq(`${control_node_selector} > option`).length > 1;
      }
      return !!q(control_node_selector);
    });
  }

  async function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);
    await mainLayoutFunction();
    eventHandler();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) &&
      q(".progress-stepper .checkout-wrap") &&
      q(".row.content-body") &&
      validateAllControlNodesExist(inputList)
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
    return true;
  } catch (error) {
    console.warn(error);
    return false;
  }
})();
