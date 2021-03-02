// var importantString = "Hello";
// const importantString2 = "Hello";

// if (true) {
//   var importantString = "GoodBye";
// }

// if (true) {
//   const importantString2 = "Goodbye";
// }

// console.log("IMPORTANT STRING: ", importantString);
// console.log("IMPORTANT STRING2: ", importantString2);

// CONSTS vs LET
// let you dont have to assign

let flower;
var flower3;
// const flower2;
// const flower2 = "Lilly";

flower = 2;
flower = "Django";
flower = { name: "Tadej" };

// flower2 = "Daisy";

// let flower = "Roses";
// Const:
// Assignemnt on declaration
// Cannot be reassigned

// LET:
// assignment and declaration can be split
// Can be reassigned
// Can't be redeclared

// VAR:
// assignment and declaration can be split
// Can be reassigned
// CAN BE REDECLARED
// Its the jungle

const dog = "Scooby";
console.log(dog);
// dog = "Scooby";
const a = "A";
var c = "HELLO";

if (true) {
  const b = "B";
  console.log(a, b);
  var c = "Everybody";
}

console.log(c);

function saySomething() {
  var c = "cause im giving on you";
  console.log(c);
}

saySomething();

console.log(c);
