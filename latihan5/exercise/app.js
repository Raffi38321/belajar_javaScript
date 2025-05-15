// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

const a = document.querySelector("a");
console.log(a.getAttribute("href"));

const b = document.querySelector(".a-two");
b.setAttribute("href","https://nekopoi.care/");
// Bonuse
// console.log(a2.getAttribute("href"));

//8:48
