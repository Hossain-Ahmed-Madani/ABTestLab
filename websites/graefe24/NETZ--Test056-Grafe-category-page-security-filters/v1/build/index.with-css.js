(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `.AB-TEST056 .content > h2,
.AB-TEST056 .ab-039_slider-banner_container,
.AB-TEST056 .ab-039_banner_container {
  display: none;
}
.AB-TEST056 .syn-sl .syn-sl--box-outer-header {
  font-family:
    "Open Sans", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #ffffff;
  min-height: 22px;
}
.AB-TEST056 .syn-sl--box-description {
  margin-bottom: 16px;
}
.AB-TEST056 .ab-security-layout {
  display: flex;
  flex-direction: column;
}
.AB-TEST056 .ab-security-layout--locking-level {
  margin-top: -3%;
  margin-bottom: 3%;
}
.AB-TEST056 .ab-security-layout__head {
  background: rgba(234, 239, 245, 0.5019607843);
  padding: 7px 10px 11px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 21px;
  margin-left: -1%;
  margin-right: -1%;
}
.AB-TEST056 .ab-security-layout__title {
  min-height: 15px;
  font-family:
    "Open Sans", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 700;
  font-size: 11px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #13629b;
  display: inline-flex;
  align-items: center;
}
.AB-TEST056 .ab-security-layout__tooltip-cta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: max-content;
  cursor: pointer;
  position: relative;
}
.AB-TEST056 .ab-security-layout__tooltip-cta:before {
  content: "";
}
.AB-TEST056 .ab-security-layout__tooltip-cta svg {
  width: 10px;
  height: auto;
}
.AB-TEST056 .ab-security-layout__tooltip-cta:after {
  content: "Info";
  font-family:
    "Open Sans", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  text-decoration: underline;
  color: #13629b;
}
.AB-TEST056 .ab-security-layout__body {
  margin-left: -1%;
  margin-right: -1%;
  padding-top: 9px;
  padding-left: 21px;
  padding-right: 21px;
}
.AB-TEST056 .ab-security-layout__head > .ab-security-layout__tooltip-cta {
  display: none;
}
.AB-TEST056 .ab-security-layout__option-item-cta {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-TEST056 .ab-security-layout__options {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 17px;
}
.AB-TEST056 .ab-security-layout__option-item {
  user-select: none;
  width: max-content;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
}
.AB-TEST056
  .ab-security-layout__option-item.checked
  .ab-security-layout__option-item__checkbox {
  background: #13629b;
}
.AB-TEST056
  .ab-security-layout__option-item.checked
  .ab-security-layout__option-item__checkbox:after {
  opacity: 1;
}
.AB-TEST056 .ab-security-layout__option-item__checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid #13629b;
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-TEST056 .ab-security-layout__option-item__checkbox:after {
  opacity: 0;
  content: "";
  background: url('data:image/svg+xml,<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.992751" y1="4.67387" x2="4.80228" y2="8.4834" stroke="white" stroke-width="2"/><line x1="3.38811" y1="8.48338" x2="11.0072" y2="0.864336" stroke="white" stroke-width="2"/></svg>');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 10px;
  height: 10px;
  transition: opacity 0.3s;
}
.AB-TEST056 .ab-security-layout__option-item__label {
  font-family:
    "Open Sans", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 700;
  font-size: 11px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #13629b;
}
@media screen and (max-width: 991px) {
  .AB-TEST056 .ab-security-layout__option-item--order-1 {
    order: 1;
  }
  .AB-TEST056 .ab-security-layout__option-item--order-2 {
    order: 2;
  }
  .AB-TEST056 .ab-security-layout__option-item--order-3 {
    order: 3;
  }
  .AB-TEST056 .ab-security-layout__option-item--order-4 {
    order: 4;
  }
  .AB-TEST056 .ab-security-layout__option-item--order-5 {
    order: 5;
  }
  .AB-TEST056 .ab-security-layout__option-item--order-6 {
    order: 6;
  }
}
@media screen and (min-width: 360px) {
  .AB-TEST056 .ab-security-layout__options {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 768px) {
  .AB-TEST056 .ab-security-layout__option-item--order-6 {
    justify-content: flex-start;
  }
  .AB-TEST056 .ab-security-layout__tooltip-cta {
    margin-left: 0;
    justify-content: flex-start;
  }
  .AB-TEST056 .ab-security-layout__tooltip-cta {
    margin-left: 3px;
  }
  .AB-TEST056 .ab-security-layout__tooltip-cta:before {
    display: none;
  }
}
@media screen and (min-width: 991px) {
  .AB-TEST056 .syn-sl .syn-sl--box-outer-header {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0px;
    min-height: 31px;
  }
  .AB-TEST056 .syn-sl--box-description {
    margin-bottom: 19px;
  }
  .AB-TEST056 .ab-security-layout__head > .ab-security-layout__tooltip-cta {
    display: flex;
  }
  .AB-TEST056 .ab-security-layout__tooltip-cta:after {
    display: none;
  }
  .AB-TEST056 .ab-security-layout__tooltip-cta:before {
    display: none;
  }
  .AB-TEST056 .ab-security-layout__head {
    padding: 9px 7px 6px;
  }
  .AB-TEST056 .ab-security-layout__title {
    min-height: 31px;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
  }
  .AB-TEST056 .ab-security-layout__tooltip-cta svg {
    width: 19px;
  }
  .AB-TEST056 .ab-security-layout__body {
    margin-left: -1%;
    margin-right: -1%;
    padding-top: 16px;
    padding-left: 19px;
    padding-right: 19px;
  }
  .AB-TEST056 .ab-security-layout__option-item__label {
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
  }
  .AB-TEST056 .ab-security-layout__option-item__checkbox {
    width: 21px;
    height: 21px;
  }
  .AB-TEST056 .ab-security-layout__option-item__checkbox:after {
    width: 13px;
    height: 13px;
  }
  .AB-TEST056 .ab-security-layout__option-item-cta {
    display: none;
  }
  .AB-TEST056 .ab-security-layout__options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 1200px) {
  .AB-TEST056 .ab-security-layout__options {
    display: flex;
    justify-content: space-between;
  }
}

/**
 * ----------------------------------------
		 *			MODAL
 * ----------------------------------------
 */
.AB-TEST056--modal-show .dvaccess.dvaccess-pos-lb,
.AB-TEST056--modal-show div[data-test-id="userlike-container"] {
  display: none;
}
.AB-TEST056--modal-show .AB-TEST056__modal-backdrop {
  display: block;
  opacity: 1;
}
.AB-TEST056--modal-show .AB-TEST056__modal {
  display: block;
  opacity: 1;
}

.AB-TEST056 .ab-modal-container {
  position: relative;
}
.AB-TEST056__modal-backdrop {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
}
.AB-TEST056__modal {
  display: none;
  opacity: 0;
  box-shadow: 0px 4px 23.9px 0px rgba(0, 0, 0, 0.1607843137);
  margin: auto;
  width: 100%;
  height: max-content;
  background: #ffffff;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 10001;
  padding: 6px 26px 48px 17px;
}
@media screen and (max-width: 768px) {
  .AB-TEST056__modal {
    top: 15px;
    width: calc(100% + 7px);
    margin-left: -3px;
  }
}
@media screen and (min-width: 768px) {
  .AB-TEST056__modal {
    width: 100%;
    margin-right: 0;
    top: 0;
    max-width: 434px;
  }
}
.AB-TEST056__modal__head {
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
}
.AB-TEST056__modal__head__title {
  font-family:
    "Open Sans", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #000000;
  min-height: 37px;
  display: inline-flex;
  align-items: center;
}
.AB-TEST056__modal__head__sub-title {
  font-family:
    "Open Sans", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: 0px;
  margin-bottom: 10px;
}
.AB-TEST056__modal__head__close-cta {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 15px;
  right: 18px;
  cursor: pointer;
}
.AB-TEST056__modal__head__close-cta svg {
  width: 14px;
  height: 14px;
}
.AB-TEST056__modal__body {
  width: 100%;
}
.AB-TEST056__modal__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 42px;
}
.AB-TEST056__modal__item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 11px;
}
.AB-TEST056__modal__item__img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.AB-TEST056__modal__item__img img {
  min-width: 81px;
  width: 81px;
  height: auto;
}
.AB-TEST056__modal__item__txt {
  font-family:
    "Open Sans", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: 0px;
  color: #000000;
}
@media screen and (min-width: 991px) {
  .AB-TEST056__modal {
    top: -37px;
    left: 0;
    right: 40%;
    min-height: max-content;
    height: max-content;
    padding: 6px 43px 48px 17px;
  }
  .AB-TEST056__modal__head {
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
  }
  .AB-TEST056__modal__head__title {
    font-size: 16px;
  }
  .AB-TEST056__modal__head__sub-title {
    font-size: 12px;
    margin-bottom: 15px;
  }
  .AB-TEST056__modal__item {
    gap: 14px;
  }
  .AB-TEST056__modal__item__txt {
    font-size: 12px;
  }
}

.slide-bottom {
  -webkit-animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-top {
  -webkit-animation: slide-top 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/**
  * ----------------------------------------
  * animation slide-bottom
  * ----------------------------------------
  */
@-webkit-keyframes slide-bottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-200px);
    transform: translateY(-200px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slide-bottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-200px);
    transform: translateY(-200px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
/**
  * ----------------------------------------
  * animation slide-top
  * ----------------------------------------
  */
@-webkit-keyframes slide-top {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-200px);
    transform: translateY(-200px);
  }
}
@keyframes slide-top {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-200px);
    transform: translateY(-200px);
  }
}
/**
  * ----------------------------------------
  * animation fade-in
  * ----------------------------------------
  */
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
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
    Test doc: https://docs.google.com/document/d/1_Qg6DOPK75FjK6keUc7U6bqXUx9XHUp_Y3PADAhCOxM/edit?tab=t.0
    Figma: https://www.figma.com/design/IXXxSANOOd7R3XCFVgABAe/Test056---Kategorieseite---Erweiterung-des-Sicherheitsfilters?node-id=18-49&t=MPA79lO2FLQ01kuo-0
    Test container: https://app.convert.com/accounts/1004828/projects/1004764/experiences/1004170679/summary
    v1: https://www.graefe24.de/schliesszylinder/?_conv_eforce=1004170679.1004402886&f=351%7C413&n=24&o=8&p=1&s=41&utm_campaign=qa5
*/

(() => {
  const TEST_CONFIG = {
    client: "Netzproduzenten",
    project: "Gräfe",
    site_url: "https://www.graefe24.de/",
    test_name:
      "Test056 [Gräfe] - category page - Security filters complemented by top 5 filters",
    page_initials: "AB-TEST056",
    test_variation: 1,
    test_version: 0.0002,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

  const ASSETS = {
    tooltip_svg: /* HTML */ `
      <svg
        id="syn-sl--hover-image"
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="#13629b"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.06456 0.796894C7.78851 0.822935 6.5906 1.08335 5.47081 1.57814C4.37706 2.07294 3.42002 2.74351 2.59971 3.58986C1.7794 4.43622 1.13487 5.41929 0.666118 6.53908C0.197368 7.65887 -0.0239857 8.85679 0.00205592 10.1328C0.00205592 11.4089 0.249452 12.5938 0.744243 13.6875C1.23904 14.8073 1.90961 15.7774 2.75596 16.5977C3.60232 17.418 4.58539 18.0625 5.70518 18.5313C6.82497 19 8.02289 19.2214 9.29893 19.1953C10.575 19.1693 11.7729 18.9089 12.8927 18.4141C13.9864 17.9193 14.9435 17.2487 15.7638 16.4024C16.5841 15.556 17.2286 14.5729 17.6974 13.4531C18.1661 12.3334 18.3875 11.1354 18.3614 9.85939C18.3614 8.60939 18.114 7.4245 17.6192 6.30471C17.1245 5.18491 16.4539 4.21486 15.6075 3.39455C14.7612 2.57424 13.7781 1.92971 12.6583 1.46096C11.5385 0.992207 10.3406 0.770853 9.06456 0.796894ZM10.0802 3.88283C10.5489 3.88283 10.8679 3.99351 11.0372 4.21486C11.2065 4.43622 11.2911 4.70314 11.2911 5.01564C11.2911 5.40627 11.1414 5.75783 10.8419 6.07033C10.5424 6.38283 10.1323 6.53908 9.61143 6.53908C9.16872 6.53908 8.8432 6.4284 8.63487 6.20705C8.42653 5.9857 8.32237 5.69273 8.32237 5.32814C8.32237 5.01564 8.45909 4.69663 8.73252 4.37111C9.00596 4.04559 9.45518 3.88283 10.0802 3.88283ZM7.69737 15.7578C7.35883 15.7578 7.10492 15.6211 6.93565 15.3477C6.76638 15.0742 6.79893 14.5078 7.03331 13.6485L7.73643 10.6406C7.81456 10.3802 7.85362 10.1979 7.85362 10.0938C7.85362 9.9896 7.81456 9.93752 7.73643 9.93752C7.65831 9.93752 7.44997 10.0091 7.11143 10.1524C6.77289 10.2956 6.48643 10.4453 6.25206 10.6016L5.93956 10.0938C6.69476 9.44273 7.4695 8.93491 8.26377 8.57033C9.05805 8.20575 9.65049 8.02346 10.0411 8.02346C10.3536 8.02346 10.5424 8.19924 10.6075 8.5508C10.6726 8.90236 10.6271 9.3646 10.4708 9.93752L9.61143 13.1406C9.53331 13.4271 9.50726 13.6224 9.53331 13.7266C9.55935 13.8307 9.61143 13.8828 9.68956 13.8828C9.76768 13.8828 9.94997 13.8242 10.2364 13.7071C10.5229 13.5899 10.8224 13.4141 11.1349 13.1797L11.4864 13.6485C10.7312 14.4037 9.98903 14.944 9.25987 15.2696C8.5307 15.5951 8.00987 15.7578 7.69737 15.7578Z"
          fill="#13629b"
        ></path>
      </svg>
    `,
    abus_img_src:
      "https://www.graefe24.de/media/image/9c/2c/be/abus-logo-png-transparent.png",
    doppelzylinder_img_src:
      "https://www.graefe24.de/media/image/f1/18/f1/ABUS-Bravus-3000-MX-Doppelzylinder.jpg",
    knaufzylinder_img_src:
      "https://www.graefe24.de/media/image/90/3a/d8/ABUS-Bravus-3000-MX-Knaufzylinder_600x600.jpg",
    sicherungskartes_img_src:
      "https://www.graefe24.de/media/image/20/f2/37/sicherungskarte_1.png",
    schließzylinder_img_src:
      "https://www.graefe24.de/media/image/d4/67/0d/Graefe24-Not-und-Gefahrenfunktion-Schliesszylinder-Titelbild_600x600@2x.jpg",
  };

  const DATA = {
    options: [
      {
        id: 1,
        label: "ABUS Zylinder",
        mobileOrder: "1",
        labelFor: "__s__41",
      },
      {
        id: 2,
        label: "Doppelzylinder",
        mobileOrder: "4",
        labelFor: "__f__351",
      },
      {
        id: 3,
        label: "Knaufzylinder",
        mobileOrder: "2",
        labelFor: "__f__352",
      },
      {
        id: 4,
        label: "mit Sicherungskarte",
        mobileOrder: "3",
        labelFor: "__f__370",
      },
      {
        id: 5,
        label: "mit Not- & Gefahrenfunktion",
        mobileOrder: "5",
        labelFor: "__f__345",
      },
    ],
    modal: [
      {
        imgSrc: ASSETS["abus_img_src"],
        description:
          "<b>ABUS</b> steht seit der Gründung in den 1920er Jahren für ein hohes Maß an Qualität und ein breitgefächertes Sortiment. Die Profilzylinder in vielerlei Varianten der Marke sind heute sowohl im privaten als auch im gewerblichen Bereich anzutreffen.",
      },
      {
        imgSrc: ASSETS["doppelzylinder_img_src"],
        description:
          "Der klassische <b>Doppelzylinder</b> gehört heute zu den Elementen aus dem Bereich der Sicherheitstechnik, die vergleichsweise häufig genutzt werden. Bei ihm handelt es sich um eine Profilzylinder Version, die sich vollkommen unkompliziert von beiden Seiten der Tür abschließen bzw. öffnen lässt.",
      },
      {
        imgSrc: ASSETS["knaufzylinder_img_src"],
        description:
          "Der <b>Knaufzylinder</b> ist der praktische Schließzylinder für den Einsatz in Haus- und Wohnungstüren oder bei anderen Türen, die von der Innenseite jederzeit geöffnet werden dürfen. Hierzu befindet sich direkt am Zylinder ein Drehknauf (demontierbar), mit dessen Hilfe die Tür verschlossen werden kann.",
      },
      {
        imgSrc: ASSETS["sicherungskartes_img_src"],
        description:
          "Eine <b>Sicherungskarte</b> ist ein Dokument, das als Eigentums- und Berechtigungsnachweis für eine Schließanlage oder einen geschützten Schließzylinder dient und den unbefugten Nachbau von Schlüsseln verhindert.",
      },
      {
        imgSrc: ASSETS["schließzylinder_img_src"],
        description:
          "Schließzylinder <b>mit Not- und Gefahrenfunktion</b> haben gegenüber herkömmlichen Profilzylindern einen entscheidenden Vorteil. Sie verfügen über eine eingebaute Funktion, die es ermöglicht, die Tür auch dann von außen zu öffnen, wenn auf der Innenseite ein Schlüssel steckt.",
      },
    ],
  };

  function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
    if (timer <= 0) {
      return;
    } else if (predicate && predicate()) {
      callback();
    } else {
      setTimeout(
        () => waitForElement(predicate, callback, timer - frequency, frequency),
        frequency,
      );
    }
  }

  function q(s, o) {
    return document.querySelector(s);
  }

  function qq(s, o) {
    return o ? [...s.querySelectorAll(o)] : [...document.querySelectorAll(s)];
  }

  function getModalLayout() {
    return /* HTML */ `
      <div class="${page_initials}__modal-backdrop"></div>
      <div class="${page_initials}__modal">
        <div class="${page_initials}__modal__head">
          <div class="${page_initials}__modal__head__title">
            Erläuterungen zur Auswahl
          </div>
          <div class="${page_initials}__modal__head__sub-title">
            Die Optionen zur Auswahl werden von unseren Kunden gern genommen, um
            den passenden Schließzylinder zu finden. Weitere Filter finden Sie
            in der linken Spalte
          </div>
          <div class="${page_initials}__modal__head__close-cta">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M25.4999 1.5001L1.5 25.5M1.4999 1.5L25.4998 25.4999"
                stroke="#547351"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div class="${page_initials}__modal__body">
          <div class="${page_initials}__modal__content">
            ${DATA["modal"]
              .map(
                ({ imgSrc, description }) => /* HTML */ `
                  <div class="${page_initials}__modal__item">
                    <div class="${page_initials}__modal__item__img">
                      <img src="${imgSrc}" />
                    </div>
                    <div class="${page_initials}__modal__item__txt">
                      ${description}
                    </div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  function handleModalView(action = "show") {
    const modalShowClass = `${page_initials}--modal-show`;
    const body = document.body;

    q(`.${page_initials}__modal`);

    if (action === "show" && !body.classList.contains(modalShowClass)) {
      // animate(modal, "slide-bottom", 200);
      // modal.classList.add("slide-bottom");
      body.classList.add(modalShowClass);
      // document.addEventListener("touchmove", preventScroll, { passive: false });
    }

    if (action === "hide") {
      // animate(modal, "slide-top", 200);
      // setTimeout(() => body.classList.remove(modalShowClass), 200);
      // document.removeEventListener("touchmove", preventScroll);
      body.classList.remove(modalShowClass);
    }
  }

  function createSecurityFilterLayout() {
    if (q(".ab-security-layout")) return;

    const { tooltip_svg } = ASSETS;

    q(".syn-sl--box-outer-header").innerText =
      "Den richtigen Schließzylinder in wenigen Schritten finden";

    const targetNodeOne = q(".syn-sl--box-outer");
    targetNodeOne.insertAdjacentHTML(
      "afterbegin",
      /* HTML */ `
        <div class="ab-security-layout ab-security-layout--locking-level">
          <div class="ab-security-layout__head">
            <span class="ab-security-layout__title"
              >1. Wählen Sie die Sicherheitsstufe Ihres Schließzylinders</span
            >
            <span class="ab-security-layout__tooltip-cta">
              ${tooltip_svg}
            </span>
          </div>
        </div>
      `,
    );

    const targetNodeTwo = q(".syn-sl--box-description");
    targetNodeTwo.insertAdjacentHTML(
      "afterend",
      /* HTML */ `
        <div class="ab-security-layout ab-security-layout--frequently-chosen">
          <div class="ab-security-layout__head">
            <span class="ab-security-layout__title"
              >2. Die beliebtesten und meistgewählten Schließzylinderarten</span
            >
            <span class="ab-security-layout__tooltip-cta">
              ${tooltip_svg}
            </span>
          </div>
          <div class="ab-security-layout__body">
            <div class="ab-security-layout__options">
              ${DATA["options"]
                .map(
                  ({ id, label, mobileOrder, labelFor }) => /* HTML */ `
                    <div
                      class="ab-security-layout__option-item ab-security-layout__option-item--order-${mobileOrder} ${q(
                        "#" + labelFor,
                      )?.checked
                        ? "checked"
                        : ""}"
                      for="${labelFor}"
                    >
                      <div
                        class="ab-security-layout__option-item__checkbox"
                      ></div>
                      <div class="ab-security-layout__option-item__label">
                        ${label}
                      </div>
                    </div>
                  `,
                )
                .join("")}
              <div
                class="ab-security-layout__option-item-cta ab-security-layout__option-item--order-6"
              >
                <span class="ab-security-layout__tooltip-cta">
                  ${tooltip_svg}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="ab-modal-container">${getModalLayout()}</div>
      `,
    );
  }

  function updateSecurityFilterLayout() {
    qq(".ab-security-layout__option-item").forEach((item) => {
      const labelFor = item.getAttribute("for");

      if (q("#" + labelFor)?.checked === true) {
        item.classList.add("checked");
      } else {
        item.classList.remove("checked");
      }
    });
  }

  function mutationObserver() {
    new MutationObserver((mutationList, observer) => {
      if (!q(".ab-security-layout")) {
        console.log("Re-creating security filter layout...");
        createSecurityFilterLayout();
      } else {
        updateSecurityFilterLayout();
      }
    }).observe(q(".content-main--inner"), { childList: true, subtree: true });
  }

  function clickFunction() {
    ACTION_LIST = [
      {
        selector: ".ab-security-layout__option-item",
        event: "click",
        callback: (e) => {
          const option = e.target.closest(".ab-security-layout__option-item");
          if (!option) return;

          const labelFor = option.getAttribute("for");
          const isChecked = option.classList.contains("checked");

          if (isChecked) {
            option.classList.remove("checked");
          } else {
            option.classList.add("checked");
          }

          q("#" + labelFor).click();
        },
      },
      {
        selector:
          ".ab-security-layout--frequently-chosen .ab-security-layout__tooltip-cta",
        event: "click",
        callback: (e) => handleModalView("show"),
      },
      {
        selector: `.${page_initials}__modal__head__close-cta, .${page_initials}__modal-backdrop`,
        event: "click",
        callback: (e) => handleModalView("hide"),
      },
      {
        selector: `.${page_initials}__modal`,
        event: "click",
        callback: (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
      },
    ].forEach(({ selector, event, callback }) => {
      if (selector) {
        waitForElement(
          () => qq(selector).length > 0,
          () => {
            qq(selector).forEach((item) =>
              item.addEventListener(event, callback),
            );
          },
        );
      }
    });
  }

  function init() {
    document.body.classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);
    createSecurityFilterLayout();
    // createModalLayout();
    mutationObserver();
    clickFunction();
  }

  function hasAllTargetElements() {
    return !!(
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) &&
      q(".content-main--inner") &&
      q(".syn-sl--box-description")
    );
  }

  waitForElement(hasAllTargetElements, init);
})();
