console.log("hebat mantap");
console.log("bjbdvjbbjv");
// console itu object log itu method
let nama;
nama = "RAffi";
console.log(nama);

let num = 90;
console.log(num);
console.log(typeof num);


let firstName = "Muhammad ";
let lastName  = "Raffi";
let fullName = firstName.concat(lastName)
console.log(fullName);
console.log(fullName.length);
console.log(fullName.slice(0,8));
console.log(fullName.split(" "));// ngambil string terus diubah ke aray


let y = fullName.split(" ");
console.log(y);
y = y.join(" "); // dijadiin satu
console.log(y);

let r = fullName.includes("Raffi");// ngecek ada ga
console.log(r);

fullName = `${firstName}${lastName} orang ganteng`;
console.log(fullName);

let money = 50;
money = parseInt(money);
money = money.toString();
console.log(typeof money);

//flow program itu if statement
let score = 4;

if(score >= 7){
    console.log('holy shit you actually good');
} 
else if(score > 4 ){
    console.log('you suck dude');
}
else {
    console.log('nuh uh go home lil bro');
}


//ini juga if versi riweh

let fruit = "Balls";

switch(fruit){
    case "Banana":
        console.log("Banana is good");
        break
    case "Apple":
        console.log("How you like them apples");
        break;
    case "Orange":
        console.log("I am not fan of orange");
        break
    default:
        console.log("never heard of that shit");
}


//looping le
// for(let i=0;i<5;i++){
//     console.log("Jembut");
// }
// for(let i = 0;i<=100;i++){
//     console.log(`RAffi ${i}`);
// }
let i = 10;
while (i<11) {
    console.log(`Raffi ${i}`);
    i++;
}

// let i = 1;
// do {
//     console.log("raff");
//     i++;
// } while (i<2);
// 

// array
var MyArray = [1,2,3,4,5,6,7];
// for (let index = 0; index < MyArray.length; index++) {
//     const element = MyArray[index];
//     console.log(element);
// }
MyArray.push(8); //nambah dibelakang
console.log(MyArray.length);
MyArray.pop();//ngaous element paling belakang
console.log(MyArray.length);
MyArray.shift();// ngapus eleement paling depan
console.log(MyArray.length);
MyArray.unshift(1);// nambahin element ke paling depan
console.log(MyArray.length);


var newArr = [8,9,10];
newArr = MyArray.concat(newArr); // gabungin 2 array
console.log(newArr);
console.log(newArr.join("-"));//buat nyatuin elemen di array 




//object
var person = {
    namapertama : "Muhammad",
    namaterakhir : "Raffi",
    umur : 19,
};
person.orang_ganteng = true;
console.log(person);
console.log(person.umur);
console.log(person["namaterakhir"]);


var car = {
    type : "Honda",
    model : 'Civic',
    color : "White",
};

console.log(typeof car);
car.type = "Toyota";
car.wheels = "Big";
console.log(car);


// function
function addUp(x,y){
    return x+y
}

var t = addUp(1,4);
console.log(t);
// function expression
const p = function(x,y){
    return x*y;
}

console.log(p(10,5));

//function call back
function sayHello(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    const name = 'Raffi';
    callback(name);
}

processUserInput(sayHello);


function showCallFunc(fn){
    const a = 10;
    fn(a);
}

showCallFunc(function(b){
    console.log(b)
})



//cara pertama
function greeting(){
    return `heloo my name is ${orang.name} and i am ${orang.age} years old`
}

var orang = {
    name : "Raffi",
    age : 19,
    greeting,
}

console.log(orang.greeting());

//cara kedua
var menusa = {
    nama : "doyok",
    age : 31,
    greeting : function(){
        return `hello, nama gwejh ${menusa.nama} dan umur gwejh ${menusa.age} tahun`;
    }
}

console.log(menusa.greeting());

// json pase dan stigify
var cir = {
    type : "Honda",
    model : 'Civic',
    color : "White",
};


var jsonstigify = JSON.stringify(cir); // ngerubah object js jadi json
console.log(jsonstigify);
var parsejson = JSON.parse(jsonstigify);//kebalikannnya atas
console.log(parsejson);

// date and time
const currentdate = new Date()
const year = currentdate.getFullYear();
const month = currentdate.getMonth();
const day = currentdate.getDay();
const hour = currentdate.getHours();

console.log(`year: ${year}, month: ${month}, day: ${day}, hour: ${hour}`);
console.log(currentdate.toDateString());
console.log(currentdate.toISOString());
console.log(currentdate.toLocaleString());


// set interval
// setInterval(
//     () => console.log('function ini bakal kepanggil setiap 2 detik'),2000 
// );

// set time out
setTimeout(function(){
    console.log('function ini bakal kepanggil setelah 5 detik');
},5000)



const mkmk = setInterval(function(){
    console.log('ini nyala bos');
},2000)

setTimeout(function(){
    clearInterval(mkmk);
    console.log('berhenti le');
},20000)



// arrow function 
// function pup(name){
//     return `namaku ${name}`;
// }

pup=(name)=>{
    return `namaku ${name}`;
}
console.log(pup("gintama"));


//enhace object literals
// Old way
const name = 'Alice';
const age = 25;
// const user = {
//   name: name,
//   age: age,
// };

// Enhanced
const user = { name, age };

// yang ada di param itu default value
const count5=(count = false)=>{
    if(count){
        for(let i = 0;i<=5;i++){
            console.log(`ini nomor ${i}`);
        }
    }
}

count5(true);


const multiply = (a,b = 1)=>{
    return a*b;
}

console.log(multiply(7,8));

//spread operator
function giveme4(a,b,c,d){
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(`d = ${d}`);
}

var color = ['red','blue','green','yellow']

giveme4(...color)

var itung = ['satu','dua','tiga']
var itung2 = ['empat','lima','enam']
var itung3 = [...itung,...itung2]
console.log(itung3);

// aaray dectructuring
function f(){
    return [1,2,3]
}

var [q, ,m] = f();
console.log(q,m);

var warna = ['red','blue','yellow','pink','purple']

var [t,o,...m] = warna
console.log(t,o,m);

//object destructuring
// disini urutan gak penting tapi nama penting(kalo arraykan urutan yg penting)
const murid ={aran : "Raffi",kelas : 'Informatika_c', kampus :'UIN'}

const {aran,kelas,kampus }= murid;
console.log(aran,kelas,kampus); 

const orang_1 = {
    numu : "John",
    omor : 30,
    gender : "male",
    country : "USA"
}

var {numu,omor,gender,country} = orang_1
console.log(numu,omor,gender,country);

//ganti nama destructuring
const nomo = {x: 300,u : 900}
const {x:makan,u:minum} = nomo
console.log(makan);
console.log(minum);


//object destructuring dan rest operator
const orang_2= {
    numu : "John",
    tete :"gede",
    omor : 30,
    gender : "male",
    country : "USA"
}
const {numu:neme,omor:memer,...sisanya} = orang_2;
console.log(neme);
console.log(memer);
console.log(sisanya);

//function destructuring
function gabut(orang_2){
    console.log(`nama : ${orang_2.numu}`);
    console.log(`sisanya : ${orang_2.umur}`);
    console.log(`country : ${orang_2.country}`);
}

function gabut1({numu,tete,omor}){
    console.log(`nAma : ${numu}`);
    console.log(`ukuran TT : ${tete}`);
    console.log(`umur : ${omor}`);
}

gabut(orang_2);
gabut1(orang_2);

//nested destructuring
const users = [
    {
      id: 1,
      profile: { username: "raffi", email: "raffi@example.com" }
    },
    {
      id: 2,
      profile: { username: "joko", email: "joko@example.com" }
    }
  ];
  
  const [{profile: { username: firstUsername }},{profile: { email: secondEmail }}] = users;
  
  console.log(firstUsername); // raffi
  console.log(secondEmail);   // joko@example.com


  const product = {
    title: "Laptop",
    specs: {
      dimensions: [34, 24, 2],
      weight: "1.5kg"
    }
  };
  
  const {
    title,
    specs: {
      dimensions: [width, height, thickness],
      weight
    }
  } = product;
  
  console.log(title);     // Laptop
  console.log(width);     // 34
  console.log(height);    // 24
  console.log(thickness); // 2
  console.log(weight);    // 1.5kg

//ternary operator tu kaya if else cuman lebih pendek
const jj = ()=>{
    if(7<9){
        return 'tollol';
    }
    else{
        return 'hebat';
    }
}

console.log(jj());

//ini ternary operator 
const pl = ()=>{
    return 7<9 ? 'tollol' :'hebat'
}

console.log(pl());

var uang = 10;
var ngecekduit = uang ? 'buy prodect' : 'bawa duit tlo';

console.log(ngecekduit);


var person_3 = {
    nama : 'bujang',
    age : 20,
    silit : 'ireng'
};


// ini cara looping object ini juga bisa dipake ke array 
for(let key in person_3){
    console.log(key,person_3[key]);
}


//for of loop
let peopels = ['bujang','lonte','mulyono']
for (const peopel of peopels) {
    console.log(peopel);
}

// for each
var number = [1,2,3,4,5,6]

var sum = 0;
number.forEach((arr)=>{
    sum += arr;
})

// function adder(arr){
//     sum += arr;
// }

// number.forEach(adder);

console.log(sum);

// map()
//bedanya map() method ama foreach itu kalo foreach pake arrnya langsung sedangkan map() ngebuat array baru
var nomor = [90,6,3,10,2,8]
const result = nomor.map(nomo=>{
    return nomo * 10
})

console.log(result);

// filter() method kaya namanya ini ngebalikin elemen yang memenuhi syarat
const computer = [
    {ram:4,HDD:100},
    {ram:8,HDD:200},
    {ram:16,HDD:300},
    {ram:32,HDD:400},
]

console.log(computer.filter(comput => {
    return comput.ram > 16;
}));

const umur = [19,17,20,6,50]

console.log(umur.filter(age =>{
    return age >18;
}));


// method find() ini nge return element yang paling pertama memenuhi syarat beda kaya filter yang ngelooping sampe akhir 
// ini juga bakal ngereturn undifined kalo misal elementnya ga ada yang memenuhi
const post = [
    {id :1,content :"good post"},
    {id :2,content :"funny post"},
    {id :3,content :"funny post"}
]

console.log(post.find(po => po.content === "funny post"));


// some() dan every() method di js ini fungsinya untuk ngecek elemen yang ada di array
// some() bakal ngembaliin true jika ada 1 atau lebih element yang memenuhi syarat
// every() bakal balikin true jika semua elemet di array memenuhi syarat
let products = [
    {name:"checker",category:"game"},
    {name: "haryy poteter",category:"books"},
    {name: "laptop",category:"electronics"},
    {name: "wuthering heights",category:"books"}
] 

console.log(products.every(produc => produc.category == "books"));
console.log(products.some(produc => produc.category == "books"));


// reduce() method
//var nomor = [90,6,3,10,2,8]
const calculator = nomor.reduce((p,c)=>{
    return p = p+c;
},0)

console.log(calculator);

//----------------------------------------------------------------------------------------------------------------
// map javascript 
var contohMap = new Map();
//cara masukin data ke map
contohMap.set("a",1);
contohMap.set("b",2);
contohMap.set("c",3);

// cara traverse
for(let [key,value] of contohMap){
    console.log(`ini key: ${key}, ini value ${value}`);
}
//cara manggil satu
console.log(contohMap.get("a"));

//cara liat size
console.log(contohMap.size);

//cara ngapus di map,ngapusnya pake key
contohMap.delete("b");
console.log(contohMap.size);

//set--------------------------------------------------------------------------------------------------------------------
//set, set ini kaya array cuman udah pasti unik elemennya ga ada yang sama
var contohsSet = new Set();
// cara nambah element di set
contohsSet.add("a")
contohsSet.add("b")
contohsSet.add("c")
contohsSet.add("a")
contohsSet.add("b")
contohsSet.add("c")
contohsSet.add("d")

console.log(contohsSet.size);
contohsSet.delete("b");
console.log(contohsSet.size);

for (var index of contohsSet){
    console.log(`ni elmentnya: ${index}`);
}

//---------------------------------------------------------------------------------------------------------------
//Simbol JavaScript adalah tipe data primitif baru yang dibuat menggunakan fungsi Symbol(). 
// Simbol ini merupakan pengenal unik dan digunakan dalam berbagai cara
var contohSymbol = Symbol("hola")
var hamdeh = {}
hamdeh[contohSymbol] = "Kontol"

console.log(hamdeh);


//7:49

function nyoba(a){
    return a;
}

console.log(nyoba([1,2,3,4,5,6]));