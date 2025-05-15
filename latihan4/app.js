// classlist
// add()
// remove()
// toggle()

const h1 = document.querySelector("h1");
// BROWSER CONSOLE
console.log(h1.classList);
// console.log((h1.style.color = "skyblue"));
// console.log((h1.style.fontWeight = "normal"));

// In EDITOR
//ini nambah class ke html
h1.classList.add("styles");

//ini ngapus class
h1.classList.remove("styles");

//toggle ini bakal ngapus class kalo ada, kalo ga ada di htmlnya bakal di hapus
h1.classList.toggle("styles");
