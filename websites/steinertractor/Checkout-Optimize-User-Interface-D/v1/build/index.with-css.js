(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-Checkout-Step-1 h2.ab-form-heading {
  font-family: Arial;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 20px;
}
.AB-Checkout-Step-1 .ab-form {
  margin-bottom: 25px;
}
.AB-Checkout-Step-1 .ab-action-button {
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
.AB-Checkout-Step-1 .ab-action-button:not(disabled) {
  background-color: #9cca5a;
}
.AB-Checkout-Step-1 .ab-form-group {
  margin: 0;
  text-align: left;
}
.AB-Checkout-Step-1 .ab-form-col {
  margin-bottom: 12px;
}
.AB-Checkout-Step-1 .ab-form-subtitle {
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
.AB-Checkout-Step-1 .ab-pl-0 {
  padding-left: 0;
}
.AB-Checkout-Step-1
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
.AB-Checkout-Step-1 .ab-form-group:has(> input[type="radio"]),
.AB-Checkout-Step-1 .ab-form-group:has(> input[type="checkbox"]) {
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
.AB-Checkout-Step-1
  .ab-form-group:has(> input[type="radio"])
  input[type="checkbox"],
.AB-Checkout-Step-1
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
.AB-Checkout-Step-1
  .ab-form-group:has(> input[type="radio"])
  input[type="checkbox"]:checked,
.AB-Checkout-Step-1
  .ab-form-group:has(> input[type="checkbox"])
  input[type="checkbox"]:checked {
  border: none;
  background-color: #0078d7;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-Checkout-Step-1
  .ab-form-group:has(> input[type="radio"])
  input[type="checkbox"]:checked:after,
.AB-Checkout-Step-1
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
.AB-Checkout-Step-1
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
.AB-Checkout-Step-1
  .ab-form-group:has(> input:not([type="radio"]):not([type="checkbox"]))
  .ab-label:has(~ input:not([type="radio"]):not([type="checkbox"]):focus),
.AB-Checkout-Step-1
  .ab-form-group:has(> input:not([type="radio"]):not([type="checkbox"]))
  .ab-label:has(~ input:not([type="radio"]):not([type="checkbox"]):active),
.AB-Checkout-Step-1
  .ab-form-group:has(> input:not([type="radio"]):not([type="checkbox"]))
  .ab-label:has(
    ~ input:not([type="radio"]):not([type="checkbox"]):not(:placeholder-shown)
  ) {
  position: static;
  font-size: 14px;
}
.AB-Checkout-Step-1
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
.AB-Checkout-Step-1 .ab-form-group input:-webkit-autofill,
.AB-Checkout-Step-1 .ab-form-group input:-webkit-autofill:hover,
.AB-Checkout-Step-1 .ab-form-group input:-webkit-autofill:focus,
.AB-Checkout-Step-1 .ab-form-group input:-webkit-autofill:active {
  -webkit-text-fill-color: black !important;
  -webkit-box-shadow: none !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}
.AB-Checkout-Step-1 .ab-error-message {
  margin-top: 6px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #dc3545;
  display: none;
}
.AB-Checkout-Step-1
  .ab-form-group:has(
    > input[area-invalid]:not([type="radio"]):not([type="checkbox"])
  ) {
  border: 2px solid #dc3545;
}
.AB-Checkout-Step-1
  .ab-form-group:has(
    > input[area-invalid]:not([type="radio"]):not([type="checkbox"])
  )
  + .ab-error-message {
  display: block;
}
.AB-Checkout-Step-1
  .ab-form-group:has(
    > input:not([type="radio"]):not(
        [type="checkbox"]
      ):placeholder-shown[required]
  ) {
  border: 2px solid #dc3545;
}
.AB-Checkout-Step-1
  .ab-form-group:has(
    > input:not([type="radio"]):not(
        [type="checkbox"]
      ):placeholder-shown[required]
  )
  + .ab-error-message {
  display: block;
}
.AB-Checkout-Step-1
  .ab-form-group:has(> input:not([type="radio"]):not([type="checkbox"]):focus),
.AB-Checkout-Step-1
  .ab-form-group:has(
    > input:not([type="radio"]):not([type="checkbox"]):active
  ) {
  border: 2px solid #333333;
}
.AB-Checkout-Step-1 .ab-form-group:has(> select) {
  width: 100%;
  position: relative;
}
.AB-Checkout-Step-1 .ab-form-group:has(> select) .ab-label {
  display: none;
}
.AB-Checkout-Step-1 .ab-form-group:has(> select):before {
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
.AB-Checkout-Step-1 .ab-form-group:has(> select):has(> select:open):before {
  transform: rotate(-135deg);
}
.AB-Checkout-Step-1
  .ab-form-group:has(> select):has(> select[area-invalid])
  ~ .ab-error-message {
  display: block;
}
.AB-Checkout-Step-1 .ab-form-group:has(> select) select {
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
.AB-Checkout-Step-1 .ab-form-group:has(> select) select[area-invalid] {
  border: 2px solid #dc3545;
}
.AB-Checkout-Step-1 .ab-form-group:has(> select) select[area-selected] {
  color: #333333;
}
.AB-Checkout-Step-1 .ab-form-group:has(> select) select:focus-within,
.AB-Checkout-Step-1 .ab-form-group:has(> select) select:active {
  border: 2px solid #333333;
  box-shadow: none;
  color: #333333;
}
.AB-Checkout-Step-1 .ab-form-group:has(> select) select:-webkit-autofill,
.AB-Checkout-Step-1 .ab-form-group:has(> select) select option:-webkit-autofill,
.AB-Checkout-Step-1 .ab-form-group:has(> select) select:-webkit-autofill:hover,
.AB-Checkout-Step-1
  .ab-form-group:has(> select)
  select
  option:-webkit-autofill:hover,
.AB-Checkout-Step-1 .ab-form-group:has(> select) select:-webkit-autofill:focus,
.AB-Checkout-Step-1
  .ab-form-group:has(> select)
  select
  option:-webkit-autofill:focus,
.AB-Checkout-Step-1 .ab-form-group:has(> select) select:-webkit-autofill:active,
.AB-Checkout-Step-1
  .ab-form-group:has(> select)
  select
  option:-webkit-autofill:active {
  -webkit-text-fill-color: black !important;
  -webkit-box-shadow: none !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}

.AB-Checkout-Step-1 {
  background-color: #fff;
}
.AB-Checkout-Step-1 .free-delivery-btn {
  z-index: 10;
}
.AB-Checkout-Step-1 > form > .container.pl-0.pr-0 {
  background-color: #fff;
}
.AB-Checkout-Step-1 .ab-hidden {
  display: none;
}
.AB-Checkout-Step-1 .ab-content-wrapper {
  width: 100%;
  position: relative;
  background-color: #f3f5f6;
}
.AB-Checkout-Step-1 .ab-content-wrapper > * {
  position: relative;
  z-index: 1;
}
.AB-Checkout-Step-1 .ab-content-wrapper:after {
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
.AB-Checkout-Step-1 .ab-content-top {
  display: flex;
  flex-direction: column;
  padding-bottom: 49px;
  border-bottom: 1px solid #dddddd;
  background-color: #fff;
}
.AB-Checkout-Step-1 .ab-content-top h1 {
  text-align: center;
}
.AB-Checkout-Step-1 .ab-content-forms-wrapper {
  padding: 0;
}
.AB-Checkout-Step-1 .ab-content-product-summary-wrapper {
  background-color: #f3f5f6;
}
.AB-Checkout-Step-1 .ab-product-summary {
  max-width: 407px;
  padding-top: 53px;
  padding-left: 61px;
}
.AB-Checkout-Step-1 h3.ab-product-summary__heading {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 13px;
}
.AB-Checkout-Step-1 .ab-product-summary__added-products {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 27px;
}
.AB-Checkout-Step-1 .ab-product-summary__product {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
}
.AB-Checkout-Step-1 .ab-product-summary__product-img {
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
.AB-Checkout-Step-1 .ab-product-summary__product-img:hover {
  text-decoration: none;
  outline: none;
}
.AB-Checkout-Step-1 .ab-product-summary__product-img img {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: top;
}
.AB-Checkout-Step-1 .ab-product-summary__product-sku {
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
.AB-Checkout-Step-1 .ab-product-summary__product-info {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.AB-Checkout-Step-1 .ab-product-summary__product-info p {
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
.AB-Checkout-Step-1 p.ab-product-summary__product-availability {
  font-weight: 700;
}
.AB-Checkout-Step-1 p.ab-product-summary__product-availability--available {
  color: #9cca5a;
}
.AB-Checkout-Step-1 p.ab-product-summary__product-availability--stock-out {
  color: #dc3545;
}
.AB-Checkout-Step-1 .ab-product-summary__border {
  width: 100%;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 29px;
}
.AB-Checkout-Step-1 .ab-product-summary__calculation-table {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.AB-Checkout-Step-1 .ab-product-summary__col {
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0px;
  color: #333333;
}
.AB-Checkout-Step-1 .ab-product-summary__row--total > .ab-product-summary__col {
  line-height: 1.5;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 20px;
}
.AB-Checkout-Step-1
  .ab-product-summary__row
  > .ab-product-summary__col:first-child {
  text-align: left;
}
.AB-Checkout-Step-1
  .ab-product-summary__row
  > .ab-product-summary__col:last-child {
  text-align: right;
}

.AB-Checkout-Step-1.AB-Guest-Checkout .ab-content-wrapper--show-login {
  background-color: #fff;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-content-wrapper--show-login
  .ab-login-section {
  display: block !important;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-content-wrapper--show-login
  .ab-content-product-summary-wrapper {
  display: none !important;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-content-wrapper--show-guest-checkout
  .ab-guest-checkout-section {
  display: block !important;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-content-wrapper--show-delivery-address
  .ab-form#delivery-address {
  display: block;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-content-wrapper--show-guest-create-account
  .ab-form#guest-create-account {
  display: block;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .guest-checkout-optn {
  margin: auto;
  flex-direction: row;
  gap: 25px;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .guest-checkout-optn button {
  min-width: 167px;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section,
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-guest-checkout-section {
  display: none !important;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section {
  padding: 49px 59px 135px 0 !important;
  width: 100% !important;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section #loginSlogan {
  display: none;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section h2 {
  padding-bottom: 49px;
  margin-bottom: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0;
  color: #333333;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section .dnnFormMessage {
  margin-top: 0;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section .dnnForm,
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section .dnnLabel {
  margin: 0;
  text-align: left;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
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
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-login-section
  .dnnFormItem:has(> .dnnLoginActions) {
  display: none;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-login-section
  .dnnFormItem:not(:has(> input))
  .dnnFormLabel,
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-login-section
  .dnnFormItem:not(:has(> input))
  .dnnSecondaryAction {
  display: none;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
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
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-login-section
  .dnnFormItem:not(:has(> input))
  .dnnPrimaryAction:hover {
  text-decoration: none;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section .dnnLabel {
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
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section .dnnLabel label {
  white-space: nowrap;
  margin-bottom: 0px;
  margin: 0 !important;
  padding: 0 !important;
  font-size: 16px;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section .dnnLabel label:after {
  display: none;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel:has(~ input:focus),
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel:has(~ input:active),
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel:has(~ input:not(:placeholder-shown)) {
  position: static;
  font-size: 14px;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel:has(~ input:focus)
  label,
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel:has(~ input:active)
  label,
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-login-section
  .dnnLabel:has(~ input:not(:placeholder-shown))
  label {
  font-size: 14px;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section input {
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
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section input:focus,
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section input:active,
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-login-section
  input:not(:placeholder-shown) {
  position: static;
  border: none;
  outline: none;
  background-color: #fff;
  box-shadow: none;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-login-section #socialControls {
  display: none;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-login-section
  p:has(> a[href="./ResetPassword"]),
.AB-Checkout-Step-1.AB-Guest-Checkout
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
.AB-Checkout-Step-1.AB-Guest-Checkout #guest-checkout-form {
  width: 500px;
  border: 1px solid red;
}
.AB-Checkout-Step-1.AB-Guest-Checkout #guest-checkout-form:before {
  content: "Control Form, Hide when test is completed";
  color: red;
  font-size: 16px;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-guest-checkout-section {
  padding: 49px 59px 97px 0;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-guest-checkout-section
  .pr-0.pl-0.col-md-12.col-sm-6,
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-guest-checkout-section
  .ab-control-guest-checkout-form {
  width: 100%;
  display: none !important;
}
.AB-Checkout-Step-1.AB-Guest-Checkout h1.ab-guest-checkout-header {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 38px;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-form#personal-information {
  margin-bottom: 38px;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-form#billing-address {
  margin-bottom: 34px;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-form#shipping-address {
  margin-bottom: 0px;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-form#shipping-address
  .ab-form-input-container {
  margin-bottom: 26px;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-form#shipping-address
  #ab-continue-as-guest {
  background-color: #b3b3b3;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-form#shipping-address
  #ab-continue-as-guest:not(disabled) {
  background-color: #9cca5a;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-form#shipping-address #ab-need-help {
  background-color: #6c757d;
}
.AB-Checkout-Step-1.AB-Guest-Checkout
  .ab-form#shipping-address
  #ab-need-help:hover {
  opacity: 0.7;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-form#delivery-address {
  display: none;
  margin-bottom: 34px;
}
.AB-Checkout-Step-1.AB-Guest-Checkout .ab-form#guest-create-account {
  display: none;
  margin-bottom: 34px;
}

.AB-Checkout-Step-1.AB-Address-Checkout
  .ab-content-wrapper--show-shipping-address
  .ab-form#shipping-address {
  display: block;
}
.AB-Checkout-Step-1.AB-Address-Checkout .ab-content-top {
  display: none;
}
.AB-Checkout-Step-1.AB-Address-Checkout
  app-address-management
  > *:not(app-progress-stepper) {
  display: none !important;
}
.AB-Checkout-Step-1.AB-Address-Checkout .ab-address-checkout-section {
  padding: 54px 59px 73px 0;
}
.AB-Checkout-Step-1.AB-Address-Checkout form .ab-form-heading {
  margin-bottom: 31px;
}
.AB-Checkout-Step-1.AB-Address-Checkout .ab-form#billing-address {
  margin-bottom: 32px;
}
.AB-Checkout-Step-1.AB-Address-Checkout .ab-form#shipping-address {
  display: none;
  margin-bottom: 32px;
}
.AB-Checkout-Step-1.AB-Address-Checkout .ab-form#same-billing {
  margin-bottom: 0;
}
.AB-Checkout-Step-1.AB-Address-Checkout .ab-form#same-billing .ab-form-heading {
  display: none;
}
.AB-Checkout-Step-1.AB-Address-Checkout
  .ab-form#same-billing
  .ab-form-input-container {
  margin-bottom: 42px;
}
.AB-Checkout-Step-1.AB-Address-Checkout
  .ab-form#same-billing
  #ab-continue-as-guest {
  background-color: #b3b3b3;
}
.AB-Checkout-Step-1.AB-Address-Checkout
  .ab-form#same-billing
  #ab-continue-as-guest:not(disabled) {
  background-color: #9cca5a;
}
.AB-Checkout-Step-1.AB-Address-Checkout .ab-form#same-billing #ab-need-help {
  background-color: #6c757d;
}
.AB-Checkout-Step-1.AB-Address-Checkout
  .ab-form#same-billing
  #ab-need-help:hover {
  opacity: 0.7;
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
*/

(async () => {
  const TEST_CONFIG = {
    client: "ROI Revolutions",
    project: "steinertractor",
    host: "https://www.steinertractor.com",
    path: window.location.pathname,
    test_name: "Checkout - Optimize User Interface [D]",
    page_initials: "AB-Checkout-Step-1",
    test_variation: 1,
    test_version: 0.0001,
  };

  const { host, path, page_initials, test_variation, test_version } =
    TEST_CONFIG;

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
            errorMessage: "",
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
            errorMessage: "",
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
            errorMessage: "",
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
            errorMessage: "",
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
            errorMessage: "",
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
                                  ${subtitle
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
                                                    ${qq(control_node_selector).some((item) => item.classList.contains("is-invalid")) || required ? "area-invalid" : ""}
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
                                                        ${qq(control_node_selector).some((item) => item.classList.contains("is-invalid")) || required ? "area-invalid" : ""}
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
        <div class="ab-content-wrapper ">
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

  async function handleAddressShippingFormShowHide(e) {
    q(".ab-form#shipping-address")?.remove();

    const { checkout_shipping_address } = DATA.forms;
    const contentWrapper = q(".ab-content-wrapper");
    const billingAddressForm = q(".ab-form#billing-address");

    if (!e.target.checked) {
      await waitForElementAsync(
        () =>
          !!(
            q(
              "app-progress-stepper ~ .row.mt-5:last-of-type > eve-address-form select#carrier",
            ) &&
            validateAllControlNodesExist(checkout_shipping_address.inputList)
          ),
      );
      contentWrapper.classList.add("ab-content-wrapper--show-shipping-address");
      billingAddressForm.insertAdjacentHTML(
        "afterend",
        getFormLayout(checkout_shipping_address),
      );
      eventHandler();
    } else {
      contentWrapper.classList.remove(
        "ab-content-wrapper--show-shipping-address",
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

        await waitForElementAsync(
          () =>
            !!(
              DATA["text_based_input_list"].some(
                (type) => type === dependencyNodeInputType,
              ) && controlNode.value !== dependencyNode.value
            ) ||
            (dependencyNodeInputType === "select" &&
              controlNode?.options[1].innerText.trim().toLowerCase() !==
                dependencyNode?.options[1].innerText.trim().toLowerCase()),
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
        return false;
      }
    });
  }

  function updateFormActionElements() {
    qq(".ab-action-button").forEach((item) => {
      const selector = item.getAttribute("control_node_selector");
      const controlNode = q(selector);
      const isDisabled = controlNode.disabled;

      if (isDisabled) {
        item.setAttribute("disabled", "");
      } else {
        item.removeAttribute("disabled", "");
      }
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
        selector: ".AB-Address-Checkout #ab-checkout-same-as-billing",
        events: ["click"],
        callback: handleAddressShippingFormShowHide,
      },
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
    "/checkout": {
      inputList: [
        ...DATA.forms.checkout_billing_address.inputList,
        ...DATA.forms.checkout_same_billing.inputList,
      ],
      layoutFunction: createAndUpdateAddressLayout,
    },
  };

  const config = FORM_CONFIG[path] || {
    inputList: [],
    layoutFunction: () => console.log("No matching path"),
  };
  const { inputList, mainLayoutFunction } = {
    inputList: config.inputList,
    mainLayoutFunction: config.layoutFunction,
  };

  function validateAllControlNodesExist(inputList) {
    return inputList?.every(({ type, control_node_selector }) => {
      if (type === "select") {
        return qq(`${control_node_selector} > option`).length > 1;
      }
      return !!q(control_node_selector);
    });
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);
    mainLayoutFunction();
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
