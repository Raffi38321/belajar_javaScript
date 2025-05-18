// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("Hello World");
};

// ----------- GREAT WAY-----------
const best = document.querySelector(".best");

best.addEventListener("click", () => {
  console.log("Yellow");
});

// ----------- Event (e) Object -----------
// It's an event object which contains information about perticular event.

const para = document.querySelector(".para");

para.addEventListener("click", (e) => {
  console.log(e);
});

var kontol = document.querySelector(".Kontol")
var counter = 0;
kontol.addEventListener("click",()=>{
  counter += 10;
  kontol.innerText = counter;
})


const submit = document.querySelector(".hadeh")
const input = document.querySelector("input") 
const form = document.querySelector("form") 
var hasil;

form.addEventListener("submit",(event)=>{
  event.preventDefault();
  hasil = input.value;
  console.log(hasil);
})