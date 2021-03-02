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

const animal = () => "Dog";
console.log("animal:", animal());

const anotherVariable = animal();

const superComplicatedFunc = (a, v) => {
  for (let i = a; i < 100000; i++) {
    for (let i = v; i < 100000; i++) {
      console.log(v, a);
    }
  }
};

const func1 = () => "Dog";
const func2 = (a, b) => a + b;
const func3 = (name, age) => ({ name: `WHAT? My name is: ${name}` });
const func4 = () => [1, 2, 3, 4];
/* 
const func3 = (name, age) => {
   name: `What? My anme is ${name}`
}
*/
let one = func1();
console.log("one:", one);
one = func2(1, 2);
console.log("one:", one);
one = func3("Slim Shady, tiki tiki");
console.log("one:", one);
one = func4();
console.log("one:", one);

class Game {
  constructor() {
    this.level = 0;
  }

  startGame() {
    var that = this;
    const intervalId = setInterval(function () {
      console.log(that);
      that.level++;
      console.log("CHACHENGED level");
    }, 1000);
  }

  checkLevel() {
    setInterval(() => {
      console.log(this);
      console.log("GAMES LEVEL IS: ", this.level);
    }, 500);
  }
}

const game = new Game();
// game.startGame();
// game.checkLevel();

const user = {
  name: "Laura",
  from: "Germany",
  livesIn: "Netherlands",
  languagesSpoken: {
    german: "Native",
    english: "very-acceptable",
    french: "conversational",
  },
};

const name1 = user.name;
const from1 = user.from;

const germanLevel1 = user.languagesSpoken.german;

const { name, from, languagesSpoken } = user;

const user2 = {
  name: "Luka",
  from: "Belgium",
  livesIn: "Netherlands",
  languagesSpoken: {
    dutch: "Native",
    french: "upper-intermediate",
    english: "native",
    spanish: "upper-intermediate",
    mandarin: "intermediate",
  },
};

const { name: name2 } = user2;
console.log("name2:", name2);

console.log(`${user.name} sent a message to ${user2.name}`);

const firstName = "Tom";
const lastName = "Sylva";

const user3 = {
  firstName,
  lastName,
};
/* 
const user3 = {
   firstName: firstName, 
   lastName: lastName
}
*/

const arr = [
  "apple",
  "pen",
  "applepen",
  "pineapple",
  "pineapplepen",
  "penpineappleapplepen",
];

// const [jacuzzi, tower, , , , fun] = arr;
// const [pen, penpineappleapplepen, pineapplepen] = arr;

const arr2 = [user, user2];

const [laura, luka] = arr2;

const mostImportantUser = {
  username: "aldo",
  email: "aldo@superimportantaccount.gov",
  password: "askfjghfdsiugyfdsiugtysifu ghdsiugyfdkjghfdskugyfdsukghfdskh",
  interactions: [],
  socialSecurity: "123123-854324",
  age: 24,
  profilePic: "https://superimportanntbutnotillegaltohavepic.com",
  hasDog: true,
  favoriteColor: "none, colors are dumb",
  hasDyslexya: true,
  favoriteWord: "grassy ass",
  favoriteDish: "mashed mushrooms with overcooked brocoli",
  favoriteMovie: "titanic",
  favoriteMusic: "nickelback",
  isDivorced: undefined,
  favoriteCandy: "potato skins",
  favoriteBear: "the one that is closer",
  laughter: "jajajajaja",
};
console.clear();

const { password, socialSecurity, email, ...mostImportant } = mostImportantUser;
console.log("mostImportantUser:", mostImportantUser);
console.log("mostImportant:", mostImportant);

// username / email / interaction

// const arr = [
//    "apple",
//    "pen",
//    "applepen",
//    "pineapple",
//    "pineapplepen",
//    "penpineappleapplepen",
//  ];

const [fruit, officeUtility, ...mumboJumbo] = arr;
console.log("mumboJumbo:", mumboJumbo);
const chess = [
  "queen",
  "king",
  "rook",
  "rook",
  "horsie",
  "horsie",
  "bishop",
  "bishop",
];
const [mvp, mInDanger, ...restOfTheTeam] = chess;

const copyOfChess = [...chess, ...chess];

console.log("copyOfChess:", copyOfChess);
console.clear();
luka.languagesSpoken.mandarin = "AMAZING";
console.log("luka:", luka);
console.log("luka:", user2);

// const obj = {}

// const obj2 = {}
// obj !== obj2
// const obj3 = obj
// obj === obj3

// first, turn it into primitive value
// second: turn it again into a whole new array
const inPrimitive = JSON.stringify(copyOfChess);
console.log("inPrimitive:", inPrimitive);
const wholeNew = JSON.parse(inPrimitive);
console.log("wholeNew:", wholeNew);

console.clear();

console.log(mostImportantUser);

const moreImportantProperties = {
  email: "no-reply@mostimportantemail.com",
  hairColor: "ravishing",
  likesSpinach: false,
  likesTheOffice: true,
  likesBerlin: "who knows? You know? No",
};

const updatedImportantUser = {
  ...moreImportantProperties,
  ...mostImportantUser,
};
console.log("updatedImportantUser:", updatedImportantUser);
