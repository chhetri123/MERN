// ES5 Features
"use strict";

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const person = {
  name: "John",
  age: 30,
};
console.log(Object.keys(person)); // ['name', 'age']

// ES6 Features
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!

const sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const personInstance = new Person("Bob", 25);
console.log(personInstance); // Person { name: 'Bob', age: 25 }

import { add } from "./math.js";
console.log(add(2, 3)); // 5

// ES6+ Features
const arr = [1, 2, [3, 4]];
console.log(arr.flat()); // [1, 2, 3, 4]

const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]

const getUser = async (id) => {
  const response = await fetch(`https://api.example.com/users/${id}`);
  return await response.json();
};
getUser(1).then((user) => console.log(user));

// Strict Mode Example
function foo() {
  console.log(this); // undefined
}
foo();
