(function () {
  var interval = setInterval(function () {
    if (document.head) {
      // Check if <head> exists
      clearInterval(interval); // Stop checking once found
      var style = document.createElement("style");
      style.innerHTML = `/* 
Array.from($0.classList).join('.')
*/
.AB-CS104 .flex.w-full.items-center.justify-start h3.text-h3 {
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 20.5px;
  line-height: 28.24px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(0, 35, 52);
}
.AB-CS104
  .mx-auto.mb-cove-15.mt-cove-15.grid.w-full.grid-cols-2.gap-cove-10.sm\:gap-cove-25.md\:grid-cols-3.lg\:grid-cols-4 {
  margin-top: 15px;
}
.AB-CS104
  .relative.flex.h-full.w-full.flex-col.items-center.justify-between.rounded.border.border-cove-dove.bg-white.p-cove-5.sm\:p-cove-10 {
  padding: 6px 6px 8px;
}
.AB-CS104
  .flex.h-full.max-h-\[160px\].w-full.max-w-\[250px\].items-center.justify-center.rounded-\[10px\].bg-cove-dove.px-\[30px\].py-cove-5.sm\:py-cove-25 {
  background-color: rgb(228, 222, 214);
  width: 100%;
  height: 83px;
  border-radius: 10px;
}
.AB-CS104
  .flex.h-full.max-h-\[160px\].w-full.max-w-\[250px\].items-center.justify-center.rounded-\[10px\].bg-cove-dove.px-\[30px\].py-cove-5.sm\:py-cove-25
  img {
  width: auto;
  height: 100%;
  object-fit: contain;
}
.AB-CS104
  .m-0.flex.text-\[12px\].font-bold.leading-4.text-cove-navy-blue.sm\:text-sm.sm\:font-bold,
.AB-CS104
  .text-cove-dark-grey.mb-cove-5.m-0.flex.text-\[12px\].font-bold.leading-4.sm\:text-sm.sm\:font-bold {
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(0, 35, 52);
  margin-bottom: 10px;
  text-align: center;
  display: inline-block;
}
.AB-CS104
  .m-0.flex.text-\[12px\].font-bold.leading-4.text-cove-navy-blue.sm\:text-sm.sm\:font-bold
  *,
.AB-CS104
  .text-cove-dark-grey.mb-cove-5.m-0.flex.text-\[12px\].font-bold.leading-4.sm\:text-sm.sm\:font-bold
  * {
  display: inline-block;
}
.AB-CS104
  .m-0.flex.text-\[12px\].font-bold.leading-4.text-cove-navy-blue.sm\:text-sm.sm\:font-bold
  .ml-cove-10.flex.items-center.justify-center,
.AB-CS104
  .m-0.flex.text-\[12px\].font-bold.leading-4.text-cove-navy-blue.sm\:text-sm.sm\:font-bold
  .ml-cove-30.flex.items-center.justify-center,
.AB-CS104
  .text-cove-dark-grey.mb-cove-5.m-0.flex.text-\[12px\].font-bold.leading-4.sm\:text-sm.sm\:font-bold
  .ml-cove-10.flex.items-center.justify-center,
.AB-CS104
  .text-cove-dark-grey.mb-cove-5.m-0.flex.text-\[12px\].font-bold.leading-4.sm\:text-sm.sm\:font-bold
  .ml-cove-30.flex.items-center.justify-center {
  margin-left: 1px;
}
.AB-CS104
  .m-0.flex.text-\[12px\].font-bold.leading-4.text-cove-navy-blue.sm\:text-sm.sm\:font-bold
  button,
.AB-CS104
  .text-cove-dark-grey.mb-cove-5.m-0.flex.text-\[12px\].font-bold.leading-4.sm\:text-sm.sm\:font-bold
  button {
  padding: 0px;
  padding-left: 2px;
  display: inline-block;
}
.AB-CS104
  .m-0.flex.text-\[12px\].font-bold.leading-4.text-cove-navy-blue.sm\:text-sm.sm\:font-bold
  button
  svg,
.AB-CS104
  .text-cove-dark-grey.mb-cove-5.m-0.flex.text-\[12px\].font-bold.leading-4.sm\:text-sm.sm\:font-bold
  button
  svg {
  margin-bottom: -1px;
  width: 12px;
  height: 12px;
}
.AB-CS104 .flex.h-auto.w-auto.items-center.justify-center.mt-\[6px\] {
  margin-bottom: 10px;
  margin-top: 3px;
  width: 9px;
  height: 9px;
}
.AB-CS104
  .mt-cove-10.flex.w-full.flex-col.items-center.justify-center.gap-cove-2.xs\:flex-row.xs\:gap-cove-5 {
  flex-direction: row;
  flex-wrap: nowrap;
}
.AB-CS104
  .mt-cove-10.flex.w-full.flex-col.items-center.justify-center.gap-cove-2.xs\:flex-row.xs\:gap-cove-5,
.AB-CS104
  .text-cove-dark-grey.ml-cove-5.mb-0.text-base.font-medium.leading-4
  + .text-cove-dark-grey.text-xs.font-light,
.AB-CS104 .text-cove-dark-grey.ml-cove-5.mb-0.text-base.font-medium.leading-4 {
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21.01px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(0, 35, 52);
  margin-top: 0;
}
.AB-CS104
  .relative.text-sm.text-cove-dark-grey.after\:absolute.after\:left-0.after\:right-0.after\:top-\[calc\(50\%-1px\)\].after\:-translate-y-1\/2.after\:border-t.after\:border-t-cove-dark-grey,
.AB-CS104
  .mr-cove-5.relative.m-0.text-sm.font-light.leading-\[14px\].text-inherit.before\:absolute.before\:top-\[42\%\].before\:h-\[1px\].before\:w-full.before\:translate-y-\[50\%\].before\:bg-black.before\:content-\[\'\'\].md\:mr-0 {
  font-family: Poppins, sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 21.01px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(81, 81, 81);
}
.AB-CS104
  .relative.text-sm.text-cove-dark-grey.after\:absolute.after\:left-0.after\:right-0.after\:top-\[calc\(50\%-1px\)\].after\:-translate-y-1\/2.after\:border-t.after\:border-t-cove-dark-grey
  > span.text-cove-dark-grey.text-xs.font-light,
.AB-CS104
  .mr-cove-5.relative.m-0.text-sm.font-light.leading-\[14px\].text-inherit.before\:absolute.before\:top-\[42\%\].before\:h-\[1px\].before\:w-full.before\:translate-y-\[50\%\].before\:bg-black.before\:content-\[\'\'\].md\:mr-0
  > span.text-cove-dark-grey.text-xs.font-light {
  display: none;
}
.AB-CS104
  .border-cove-dark-grey.text-cove-dark-grey.px-cove-5.ml-\[10px\].hidden.h-\[14px\].whitespace-nowrap.border.pt-\[1px\].text-xs.font-light.sm\:inline-block {
  border: 1px solid rgb(62, 190, 176);
  height: 14px;
  font-family: Poppins, sans-serif;
  font-weight: 300;
  font-style: Light;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(0, 35, 52);
}
.AB-CS104
  .flex.w-full.max-w-\[160px\].items-center.justify-center.gap-cove-10.rounded-full.border.px-cove-15.py-cove-5.border-cove-green.bg-cove-green\/10.text-cove-green {
  background: rgba(62, 190, 176, 0.1);
  border: 1px solid rgb(62, 190, 176);
  height: 22px;
  padding: 6px 22px;
  font-family: Poppins, sans-serif;
  font-weight: 300;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(0, 35, 52);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.AB-CS104
  .flex.w-full.max-w-\[160px\].items-center.justify-center.gap-cove-10.rounded-full.border.px-cove-15.py-cove-5.border-cove-green.bg-cove-green\/10.text-cove-green
  svg {
  width: 10px;
  color: rgb(62, 190, 176);
}
.AB-CS104
  .flex.w-full.max-w-\[160px\].items-center.justify-center.gap-cove-10.rounded-full.border.px-cove-15.py-cove-5.border-cove-green.bg-cove-green\/10.text-cove-green
  svg
  path {
  fill: rgb(62, 190, 176);
}
.AB-CS104
  .flex.w-full.max-w-\[160px\].items-center.justify-center.gap-cove-10.rounded-full.border.px-cove-15.py-cove-5.border-cove-dark-grey.bg-cove-baby-dove {
  background: rgb(242, 239, 235);
  border: 1px solid rgb(81, 81, 81);
  height: 22px;
  padding: 6px 22px;
  font-family: Poppins, sans-serif;
  font-weight: 300;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgb(0, 35, 52);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.AB-CS104
  .flex.w-full.max-w-\[160px\].items-center.justify-center.gap-cove-10.rounded-full.border.px-cove-15.py-cove-5.border-cove-dark-grey.bg-cove-baby-dove
  svg {
  width: 6.5px;
  color: rgb(0, 35, 52);
}
.AB-CS104
  .flex.w-full.max-w-\[160px\].items-center.justify-center.gap-cove-10.rounded-full.border.px-cove-15.py-cove-5.border-cove-dark-grey.bg-cove-baby-dove
  svg
  path {
  fill: rgb(0, 35, 52);
}
.AB-CS104
  .mb-cove-10.mt-cove-15.flex.w-full.max-w-\[160px\].items-center.rounded-full.border.border-cove-blue.px-cove-5.shadow,
.AB-CS104
  .border-cove-blue.px-cove-5.flex.w-full.max-w-\[160px\].items-center.rounded-full.border.shadow {
  background-color: rgba(255, 255, 255, 0.002);
  border: 1px solid rgb(55, 34, 211);
  height: 34px;
  padding: 9px 10px;
  overflow: hidden;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: rgb(0, 35, 52);
  margin-top: 10px;
  margin-bottom: 10px;
}
.AB-CS104
  .mb-cove-10.mt-cove-15.flex.w-full.max-w-\[160px\].items-center.rounded-full.border.border-cove-blue.px-cove-5.shadow
  svg,
.AB-CS104
  .border-cove-blue.px-cove-5.flex.w-full.max-w-\[160px\].items-center.rounded-full.border.shadow
  svg {
  height: 25px;
}
.AB-CS104
  .py-cove-10.absolute.flex.w-full.items-center.justify-center
  .select-none {
  background: rgba(62, 190, 176, 0.1);
  border: 1px solid rgb(62, 190, 176);
  height: 34px;
  padding: 5px 20px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 21.01px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: rgb(0, 35, 52);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.AB-CS104
  .py-cove-10.absolute.flex.w-full.items-center.justify-center
  .select-none
  svg {
  width: 20px;
}
.AB-CS104 .mb-auto.mt-cove-15.w-full {
  margin-top: 20px;
}
.AB-CS104
  .border-cove-dove.p-cove-5.sm\:p-cove-10.gap-cove-15.relative.flex.h-full.w-full.flex-col.items-center.justify-between.rounded.border.bg-white {
  gap: 20px;
}
.AB-CS104
  .mb-cove-10.mt-cove-15.h-cove-35.relative.flex.w-full.items-center.justify-center {
  margin-top: 10px;
  margin-bottom: 10px;
}
@media screen and (min-width: 768px) {
  .AB-CS104 .flex.w-full.items-center.justify-start h3.text-h3 {
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 39.01px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: rgb(0, 35, 52);
  }
  .AB-CS104
    .mx-auto.mb-cove-15.mt-cove-15.grid.w-full.grid-cols-2.gap-cove-10.sm\:gap-cove-25.md\:grid-cols-3.lg\:grid-cols-4 {
    margin-top: 12px;
  }
  .AB-CS104
    .relative.flex.h-full.w-full.flex-col.items-center.justify-between.rounded.border.border-cove-dove.bg-white.p-cove-5.sm\:p-cove-10 {
    padding: 11px;
  }
  .AB-CS104
    .flex.h-full.max-h-\[160px\].w-full.max-w-\[250px\].items-center.justify-center.rounded-\[10px\].bg-cove-dove.px-\[30px\].py-cove-5.sm\:py-cove-25 {
    background-color: rgb(228, 222, 214);
    height: 160px;
  }
  .AB-CS104
    .flex.h-full.max-h-\[160px\].w-full.max-w-\[250px\].items-center.justify-center.rounded-\[10px\].bg-cove-dove.px-\[30px\].py-cove-5.sm\:py-cove-25
    img {
    width: auto;
    height: 100%;
    object-fit: contain;
  }
  .AB-CS104
    .m-0.flex.text-\[12px\].font-bold.leading-4.text-cove-navy-blue.sm\:text-sm.sm\:font-bold,
  .AB-CS104
    .text-cove-dark-grey.mb-cove-5.m-0.flex.text-\[12px\].font-bold.leading-4.sm\:text-sm.sm\:font-bold {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 21.01px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: rgb(0, 35, 52);
    padding-bottom: 0;
    margin-bottom: 13px;
  }
  .AB-CS104
    .m-0.flex.text-\[12px\].font-bold.leading-4.text-cove-navy-blue.sm\:text-sm.sm\:font-bold
    button
    svg,
  .AB-CS104
    .text-cove-dark-grey.mb-cove-5.m-0.flex.text-\[12px\].font-bold.leading-4.sm\:text-sm.sm\:font-bold
    button
    svg {
    margin-bottom: 0;
  }
  .AB-CS104
    .mt-cove-10.flex.w-full.flex-col.items-center.justify-center.gap-cove-2.xs\:flex-row.xs\:gap-cove-5,
  .AB-CS104
    .text-cove-dark-grey.ml-cove-5.mb-0.text-base.font-medium.leading-4
    + .text-cove-dark-grey.text-xs.font-light,
  .AB-CS104
    .text-cove-dark-grey.ml-cove-5.mb-0.text-base.font-medium.leading-4 {
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 21.01px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: rgb(0, 35, 52);
  }
  .AB-CS104
    .relative.text-sm.text-cove-dark-grey.after\:absolute.after\:left-0.after\:right-0.after\:top-\[calc\(50\%-1px\)\].after\:-translate-y-1\/2.after\:border-t.after\:border-t-cove-dark-grey,
  .AB-CS104
    .mr-cove-5.relative.m-0.text-sm.font-light.leading-\[14px\].text-inherit.before\:absolute.before\:top-\[42\%\].before\:h-\[1px\].before\:w-full.before\:translate-y-\[50\%\].before\:bg-black.before\:content-\[\'\'\].md\:mr-0 {
    font-weight: 300;
    font-size: 14px;
    line-height: 21.01px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: rgb(81, 81, 81);
  }
  .AB-CS104
    .border-cove-dark-grey.text-cove-dark-grey.px-cove-5.ml-\[10px\].hidden.h-\[14px\].whitespace-nowrap.border.pt-\[1px\].text-xs.font-light.sm\:inline-block {
    border: 1px solid rgb(62, 190, 176);
    height: 15px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: rgb(0, 35, 52);
  }
  .AB-CS104
    .flex.w-full.max-w-\[160px\].items-center.justify-center.gap-cove-10.rounded-full.border.px-cove-15.py-cove-5.border-cove-green.bg-cove-green\/10.text-cove-green {
    background: rgba(62, 190, 176, 0.1);
    border: 1px solid rgb(62, 190, 176);
    height: 33px;
    padding: 6px 22px;
    font-family: Poppins;
    font-weight: 300;
    font-size: 14px;
    line-height: 21.01px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: rgb(0, 35, 52);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .AB-CS104
    .flex.w-full.max-w-\[160px\].items-center.justify-center.gap-cove-10.rounded-full.border.px-cove-15.py-cove-5.border-cove-green.bg-cove-green\/10.text-cove-green
    svg {
    width: 15px;
  }
  .AB-CS104
    .flex.w-full.max-w-\[160px\].items-center.justify-center.gap-cove-10.rounded-full.border.px-cove-15.py-cove-5.border-cove-dark-grey.bg-cove-baby-dove {
    background: rgb(242, 239, 235);
    border: 1px solid rgb(81, 81, 81);
    height: 33px;
    padding: 6px 22px;
    font-family: Poppins;
    font-weight: 300;
    font-size: 14px;
    line-height: 21.01px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: rgb(0, 35, 52);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .AB-CS104
    .flex.w-full.max-w-\[160px\].items-center.justify-center.gap-cove-10.rounded-full.border.px-cove-15.py-cove-5.border-cove-dark-grey.bg-cove-baby-dove
    svg {
    width: 15px;
    color: rgb(0, 35, 52);
  }
  .AB-CS104
    .flex.w-full.max-w-\[160px\].items-center.justify-center.gap-cove-10.rounded-full.border.px-cove-15.py-cove-5.border-cove-dark-grey.bg-cove-baby-dove
    svg
    path {
    fill: rgb(0, 35, 52);
  }
  .AB-CS104
    .py-cove-10.absolute.flex.w-full.items-center.justify-center
    .select-none {
    background: rgba(62, 190, 176, 0.1);
    border: 1px solid rgb(62, 190, 176);
    height: 34px;
    padding: 5px 24px 5px 47px;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 21.01px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    color: rgb(0, 35, 52);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .AB-CS104
    .mb-cove-10.mt-cove-15.flex.w-full.max-w-\[160px\].items-center.rounded-full.border.border-cove-blue.px-cove-5.shadow,
  .AB-CS104
    .border-cove-blue.px-cove-5.flex.w-full.max-w-\[160px\].items-center.rounded-full.border.shadow {
    background-color: rgba(255, 255, 255, 0.002);
    border: 1px solid rgb(55, 34, 211);
    height: 34px;
    padding: 9px 18px;
    overflow: hidden;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    color: rgb(0, 35, 52);
    margin-top: 16px;
    margin-bottom: 10px;
  }
  .AB-CS104
    .mb-cove-10.mt-cove-15.flex.w-full.max-w-\[160px\].items-center.rounded-full.border.border-cove-blue.px-cove-5.shadow
    svg,
  .AB-CS104
    .border-cove-blue.px-cove-5.flex.w-full.max-w-\[160px\].items-center.rounded-full.border.shadow
    svg {
    height: 25px;
  }
  .AB-CS104 .mb-auto.mt-cove-15.w-full {
    margin-top: 17px;
  }
  .AB-CS104
    .border-cove-dove.p-cove-5.sm\:p-cove-10.gap-cove-15.relative.flex.h-full.w-full.flex-col.items-center.justify-between.rounded.border.bg-white {
    gap: 17px;
  }
  .AB-CS104
    .mb-cove-10.mt-cove-15.h-cove-35.relative.flex.w-full.items-center.justify-center {
    margin-top: 16px;
    margin-bottom: 10px;
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

URL: https://www.covesmart.com/quiz-results/
Figma: https://www.figma.com/design/6kGIV8C7MvldVxOx8N3EHb/CS104---QUIZ-RESULTS--Card-Clean-Up?node-id=2001-3683&p=f&t=bHhinD1kOtBsyoSs-0
Test container: https://app.convert.com/accounts/10049195/projects/100410617/experiences/1004177293/summary
Forced variation: https://www.covesmart.com/quiz-results/?utm_campaign=acadia
Preview: https://www.covesmart.com/quiz-results/?convert_action=convert_vpreview&convert_e=1004177293&convert_v=1004417797
*/

const TEST_ID = "CS104";
const VARIANT_ID = "V1";

function logInfo(message) {
  console.log(
    `%cAcadia%c${TEST_ID}-${VARIANT_ID}`,
    "color: white; background: rgb(0, 0, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
    "margin-left: 8px; color: white; background: rgb(0, 57, 57); font-weight: 700; padding: 2px 4px; border-radius: 2px;",
    message,
  );
}

logInfo("fired");

(async () => {
  const TEST_CONFIG = {
    client: "Acadia",
    project: "Convesmart",
    host: "https://www.covesmart.com/",
    test_name: "CS104: [QUIZ RESULTS] Card Clean Up - (2) SET UP TEST",
    page_initials: "AB-CS104",
    test_variation: 1,
    test_version: 0.0004,
  };

  const { page_initials, test_variation, test_version } = TEST_CONFIG;

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
    return document.querySelector(s);
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

  function updateLayout() {
    // Strike through pricing
    qq(
      ".relative.text-sm.text-cove-dark-grey.after\\:absolute.after\\:left-0.after\\:right-0.after\\:top-\\[calc\\(50\\%-1px\\)\\].after\\:-translate-y-1\\/2.after\\:border-t.after\\:border-t-cove-dark-grey:not(.ab-ea-removed)",
    ).forEach((item) => {
      item.innerText = item.innerText.replace("/ea", "");
      item.classList.add("ab-ea-removed");
    });

    // Relocate Badges
    qq(".flex.flex-wrap.items-center").forEach((item) => {
      const badges = qq(
        item,
        ".px-cove-5.ml-\\[10px\\].hidden.h-\\[14px\\].whitespace-nowrap.border.pt-\\[1px\\].text-xs.font-light.sm\\:inline-block.border-cove-green.text-cove-navy-blue, .border-cove-dark-grey.text-cove-dark-grey.px-cove-5.ml-\\[10px\\].hidden.h-\\[14px\\].whitespace-nowrap.border.pt-\\[1px\\].text-xs.font-light.sm\\:inline-block",
      );
      if (badges.length > 0) {
        const div = document.createElement("div");
        div.className = "ab-badge-container";
        badges.forEach((badge) => div.appendChild(badge));
        item.insertAdjacentElement("afterend", div);
      }
    });
  }

  function mutationObserverFunction() {
    const targetNode = q("body");
    const debouncedUpdate = debounce(updateLayout, 250);
    return new MutationObserver(debouncedUpdate).observe(targetNode, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  }

  function init() {
    q("body").classList.add(
      page_initials,
      `${page_initials}--v${test_variation}`,
      `${page_initials}--version:${test_version}`,
    );
    console.table(TEST_CONFIG);
    updateLayout();
    mutationObserverFunction();
  }

  function checkForItems() {
    return !!(
      q(
        `body:not(.${page_initials}):not(${page_initials}--v${test_variation})`,
      ) && true
    );
  }

  try {
    await waitForElementAsync(checkForItems);
    init();
  } catch (error) {
    console.warn(error);
    return false;
  }
})();
