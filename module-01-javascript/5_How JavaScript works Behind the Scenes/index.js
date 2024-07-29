"use strict";

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);


///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
*/

/* ----------------------------------------------------------------
// Task Solution


---------------------------------------------------------------- */

// Task 1: JavaScript Engine Simulation
console.log("Task 1: JavaScript Engine Simulation");

class ExecutionContext {
  constructor(name) {
    this.name = name;
  }
}

class CallStack {
  constructor() {
    this.stack = [];
  }

  push(context) {
    this.stack.push(context);
    console.log(`Pushed: ${context.name}`);
    this.print();
  }

  pop() {
    const popped = this.stack.pop();
    console.log(`Popped: ${popped.name}`);
    this.print();
    return popped;
  }

  print() {
    console.log(
      "Call Stack:",
      this.stack.map((context) => context.name).join(" -> ")
    );
  }
}

const callStack = new CallStack();

function firstFunction() {
  callStack.push(new ExecutionContext("First"));
  secondFunction();
  callStack.pop();
}

function secondFunction() {
  callStack.push(new ExecutionContext("Second"));
  thirdFunction();
  callStack.pop();
}

function thirdFunction() {
  callStack.push(new ExecutionContext("Third"));
  callStack.pop();
}

callStack.push(new ExecutionContext("Global"));
firstFunction();
callStack.pop();

console.log("\n");

// Task 2: Scope Chain Exploration
console.log("Task 2: Scope Chain Exploration");

const globalVar = "I'm global";

function outerFunc() {
  const outerVar = "I'm from outer";

  function middleFunc() {
    const middleVar = "I'm from middle";

    function innerFunc() {
      const innerVar = "I'm from inner";
      console.log(innerVar); // Local scope
      console.log(middleVar); // Outer scope
      console.log(outerVar); // Outer scope
      console.log(globalVar); // Global scope
    }

    innerFunc();
  }

  middleFunc();
}

outerFunc();

console.log("\n");

// Task 3: Hoisting Quirks
console.log("Task 3: Hoisting Quirks");

console.log(varVariable); // undefined (hoisted)
// console.log(letVariable);  // ReferenceError
// console.log(constVariable);  // ReferenceError

var varVariable = "I'm a var";
let letVariable = "I'm a let";
const constVariable = "I'm a const";

hoistedFunction(); // This works

function hoistedFunction() {
  console.log("I'm a hoisted function declaration");
}

// notHoistedFunction();  // TypeError: notHoistedFunction is not a function

var notHoistedFunction = function () {
  console.log("I'm a function expression, not hoisted");
};

console.log("\n");

// Task 4: This Keyword Binding
console.log("Task 4: This Keyword Binding");

const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
  greetArrow: () => {
    console.log(`Hello, I'm ${this.name}`);
  },
};

person.greet(); // Hello, I'm John
person.greetArrow(); // Hello, I'm undefined

const standaloneGreet = person.greet;
standaloneGreet(); // Hello, I'm undefined

console.log("\n");

// Task 5: Arrow Functions vs Regular Functions
console.log("Task 5: Arrow Functions vs Regular Functions");

function RegularPerson(name) {
  this.name = name;

  this.sayHi = function () {
    console.log(`Hi, I'm ${this.name}`);
  };

  this.sayHiArrow = () => {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const john = new RegularPerson("John");
john.sayHi(); // Hi, I'm John
john.sayHiArrow(); // Hi, I'm John

const sayHi = john.sayHi;
const sayHiArrow = john.sayHiArrow;

sayHi(); // Hi, I'm undefined
sayHiArrow(); // Hi, I'm John

console.log("\n");

// Task 6: Closure Challenge
console.log("Task 6: Closure Challenge");

function createIdGenerator() {
  let id = 0;
  return function () {
    return ++id;
  };
}

const generateId = createIdGenerator();
console.log(generateId()); // 1
console.log(generateId()); // 2
console.log(generateId()); // 3

console.log("\n");

// Task 7: Promises and Async/Await
console.log("Task 7: Promises and Async/Await");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Using Promises
function usingPromises() {
  console.log("Starting");
  delay(1000)
    .then(() => {
      console.log("One second passed");
      return delay(1000);
    })
    .then(() => {
      console.log("Two seconds passed");
      return delay(1000);
    })
    .then(() => {
      console.log("Three seconds passed");
    });
}

// Using Async/Await
async function usingAsyncAwait() {
  console.log("Starting");
  await delay(1000);
  console.log("One second passed");
  await delay(1000);
  console.log("Two seconds passed");
  await delay(1000);
  console.log("Three seconds passed");
}

// Uncomment to run:
// usingPromises();
// usingAsyncAwait();

console.log("\n");

// Task 8: Prototypal Inheritance
console.log("Task 8: Prototypal Inheritance");

// Using prototypal inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks.`);
};

const dog = new Dog("Buddy");
dog.speak(); // Buddy makes a sound.
dog.bark(); // Buddy barks.

// Using ES6 classes
class AnimalClass {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class DogClass extends AnimalClass {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const dogClass = new DogClass("Max");
dogClass.speak(); // Max makes a sound.
dogClass.bark(); // Max barks.

console.log("\n");

// Task 9: Event Loop Visualization
console.log("Task 9: Event Loop Visualization");

console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");

console.log("\n");

// Task 10: Advanced Array Methods
console.log("Task 10: Advanced Array Methods");

const people = [
  { name: "Alice", age: 30, hobbies: ["reading", "gardening"] },
  { name: "Bob", age: 25, hobbies: ["gaming", "cooking"] },
  { name: "Charlie", age: 35, hobbies: ["painting", "music"] },
  { name: "David", age: 28, hobbies: ["sports", "cooking"] },
];

const result = people
  .filter((person) => person.age > 25)
  .map((person) => ({
    name: person.name,
    hobbies: person.hobbies,
  }))
  .flatMap((person) => person.hobbies)
  .reduce((acc, hobby) => {
    acc[hobby] = (acc[hobby] || 0) + 1;
    return acc;
  }, {});

console.log(result);

console.log("\n");
