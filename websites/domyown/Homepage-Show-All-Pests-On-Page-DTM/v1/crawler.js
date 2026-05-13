// const newData = qq("div[id*='category-carousel'] .w-1\\/6, div[id*='category-carousel'] .w-1\\/4").map((item) => {
//     return {
//         title: q(item, "a:not(:has( img))").textContent,
//         imgURL: q(item, "img").getAttribute("src"),
//         link: item.querySelector("a").getAttribute("href"),
//     };
// });

// console.log(newData);
const newData = qq("div[id*='category-carousel'] .w-1\\/6 > .flex.flex-col.mx-auto.h-full, div[id*='category-carousel'] .w-1\\/4 > .flex.flex-col.mx-auto.h-full").map((item) => {
    return `<div class="ab-pest-item flex flex-col leading-tight ">${item.innerHTML}</div>`;
}).join("");

console.log(newData);


// body div[id*='category-carousel'] .w-1\\/4,
// body div[id*='category-carousel'] .w-1\\/6,
// body div[id*='category-carousel'] .ab-pest-item {
// 	border: 1px solid red;
// }