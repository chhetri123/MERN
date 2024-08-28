// // const arr = "Hello";

// const tasksList = document.querySelector(".tasks");
// const newListItem = document.createElement("li");
// newListItem.textContent = "Inserted Item";
// tasksList.insertBefore(newListItem, tasksList.children[1]);// for (let value of arr) {
// // //   console.log("Each Element: " + value);
// // // }

// const taskList = document.querySelector(".tasks");
// console.log(taskList.children);

// const newList = document.createElement("li");
// newList.textContent = "New Task";

// const newList1 = document.createElement("li");
// newList1.textContent = "New Task";
// console.log(newList);

// taskList.insertBefore(newList, taskList.children[1]);
// console.log(taskList.children);
// taskList.insertBefore(newList1, taskList.children[3]);

// // const value = 0;

// // let name = value ?? "Beheviour";
// // let name2 = value || "Beheviour";

// // console.log(name);
// // console.log(name2);

// // Advance Function Calls

// // function greet(name) {
// //   console.log("Hello " + name);
// // }

// // greet("manish");

// // let a = 10;
// // let b = 30;

// // function myValue(c, d) {
// //   c = 23;
// //   d = 46;
// // }

// // myValue(a, b);

// // console.log(a);

// // let obj1 = {
// //   username: "John",
// // };

// // function myObject(obj) {
// //   obj.username = "Alice";
// // }

// // myObject(obj1);
// // console.log(obj1);
// // let a = 10;
// // function jay() {
// //   console.log("Hello Jay!!!");
// // }

// // function mummy() {
// //   console.log("Hello Mummy!!!");
// // }

// // function kay(number, callback) {
// //   console.log("Hello Kay!!!");
// //   if (number > 20) {
// //     callback();
// //   }

// //   console.log("Hello Ray!!!");
// // }
// // kay(a, jay);

// //
// // let a = 26;
// // function jay(name, age) {
// //   console.log(`Hello ${name}! I am ${age} years old.`);
// // }

// // function kay(number, callback) {
// //   console.log("Hello Kay!!!");
// //   if (number > 20) {
// //     callback("Manish", number);
// //   }

// //   console.log("Hello Ray!!!");
// // }
// // kay(a, jay);

// //

// // function hello() {
// //   console.log("Hello");
// // }
// // function main(callBack) {
// //   console.log("THis Is main Function");

// //   return callBack;
// // }
// // const returnMain = main(hello);

// // returnMain();

// // function createMultiplier(number) {
// //   return function (number2) {
// //     return number * number2;
// //   };
// // }

// // const double = createMultiplier(9);

// // const result = double(8);
// // console.log(result);

// //

// // function myName() {
// //   console.log("Hello Word !!");
// //   console.log("Hwllo slkjslk ");
// // }

// // myName();
// // myName();
// // myName();
// // let name = "name";
// // function myName(name) {
// //   console.log(name);
// // }

// // // myName("Hello world");
// // //
// // myName("Hwllo Nepal");

// // myName("Uts me lkdflkjdf ");

// // function sum(a, b) {
// //   let c = a + b;

// //   console.log(c);
// // }

// // // function multiply(a, b) {

// // // }
// // sum(23, 56);
// // sum(34, 89);

// // sum(345, 9847);

// // const sub = (a, b) => {
// //   let y = a - b;
// //   console.log(y);
// // };

// // sub(78, 2);

// // function divison(a, b) {
// //   let divide = a / b;

// //   return divide;
// // }

// // let result = divison(9, 3);
// // console.log(result);

// // let result2 = divison(45, 5);
// // console.log(result2);

// // let arrayFruits = ["mango", "orange", "grapes"];
// // console.log(arrayFruits);
// // let arrayNum = [1, 3, 5, 6, 767];
// // console.log(arrayNum);

// // console.log(arrayFruits[0]);
// // console.log(arrayFruits[2]);

// // arrayFruits[1] = "pineapple";
// // arrayFruits[2] = "apple";
// // arrayFruits[4] = "horse";

// // console.log(arrayFruits);

// /*
// .push()  => Add Element at the end of the array
// .pop() => Remove Element at the end of the array
// .shift() => Remove Element at the start of the array
// .unshift() => Add Element at the start of the array
// .splice() => Remove or replaces elements from a specified index in the array
// */

// // arrayFruits.push("Apple");
// // arrayFruits.push("water");

// //
// // arrayFruits.pop();
// // arrayFruits.pop();

// // //
// // arrayFruits.unshift("kiwi");
// // arrayFruits.unshift("banana");

// // //
// // arrayFruits.shift();
// // arrayFruits.shift();

// // //  ["mango", "orange", "grapes", "Apple", "water"];
// // // arrayFruits.splice(2, 1);
// // // arrayFruits.splice(2, 2, "kiwi", "hello");

// // console.log(arrayFruits);

// // Objects

// const obj = {
//   username: "John",
//   age: 45,
//   isStudent: true,
// };

// console.log(obj);

// console.log(obj["username"]);

// console.log(obj.username);
// console.log(obj.isStudent);

// obj["isStudent"] = false;
// obj.username = "hari";

// obj.address = "Kathmandu";
// obj["phoneNumber"] = 980000303;

// delete obj.age;
// console.log(obj);

// //

// const newObj = {
//   landMark: "CITY977",
//   country: "Nepal",
//   population: 27000000,
//   capital: "Kathmandu",
//   continent: "Asia",
//   ages: [2, 3, 4, 5, 6],
//   isMajorCity: true,
//   getName: function () {
//     console.log("THis is a .....");

//     this.landMark = "jkdfodifljd";
//   },
//   setName: function (name) {
//     console.log(`Hi There , its me ${name}
//   `);
//   },
// };

// console.log(newObj.isMajorCity);
// newObj.getName();
// newObj.setName("John");
// newObj.setName("preeti");
// console.log(newObj.ages);

// console.log(newObj);

// Advanced JavaScript Array Methods and DOM Manipulation

// "key1"=> "value1"
// let myMap = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);

// console.log(myMap);

// myMap.forEach(function (value, key) {
//   console.log(`Key: ${key}, Value: ${value}`);
// });

/*

.map() ==> return new array ( modified )




*/

// let newNumArray = [3, 4, 56, 9];
// let doubledArray = newNumArray.map(function (value, index) {
//   let double;
//   if (value % 2 === 0) {
//     double = value * 2;
//   }

//   if (value % 2 !== 0) {
//     double = value * 3;
//   }
//   return double;
// });

// console.log(doubledArray);

/*

.filter() ==> return condition satisfied element in a array
*/

// let ramdomArray = [2, 3, 43983, 30, 9830943];

// let evenFiltered = ramdomArray.filter(function (value, index) {
//   if (value % 10 === 0) {
//     return value;
//   }
// });

// console.log(evenFiltered);

/*

.reduce() ==> return a single value ( accumulated )
*/

// let arrayNum = [2, 15, 3, 7, 6];

// let sum = arrayNum.reduce(function (prev, currValue) {
//   //
//   // console.log(prev);
//   if (currValue % 2 !== 0) {
//     prev = prev * currValue;
//   }
//   return prev;
//   //
// }, 1);
// console.log(sum);
/*
0 2
2 15
17 3
20 7
27 6
33
*/

// Chaining Methods

// let numbers = [1, 2, 3, 4, 6, 80, 78, 9];

// let result = numbers
//   .filter(function (value) {
//     if (value % 2 === 0) {
//       return value;
//     }
//   })
//   .map(function (value) {
//     return value ** 2;
//   })
//   .reduce(function (prev, currValue) {
//     prev = prev + currValue;

//     return prev;
//   }, 0);
// console.log(result);

// Loop
/*

for()

inital condition 
console.log("hello world")
final condition 

*/

// const array = ["fruits", 1, "apple", 2, "banana", 3];
// console.log(array.length);
// array[0];
// array[1];
// array[2];
// for (let i = 0; i < 6; i = i + 1) {
// console.log("hello world");
// console.log(i);
// console.log(array[i]);
// array[i] = i;

// if (i % 2 === 0) {
//   console.log(i);
// }
// }

// console.log(array);

// for (let i = 0; i < array.length; i++) {
//   if (i > 3) {
//     break;
//   }

//   console.log(array[i]);
// }
// let a = 4;
// // Print numbers until 3 and then break the loop
// for (let i = 0; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// i=0
/*

i=0 
    j=0  ---- j=3
      -matrix[0][0]--> 1
      - matrix[0][1]-->2
      - matrix[0][2]-->3
i=1       
    j=0 -----j=3
      - matrix[1][0]-->4



*/
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

// let count = 0;

// while (count < 3) {
//   count++;
//   console.log(count);
// }

// const fruits = [2, 5, 6, 6, 7, 7, 8, 8, 9, 1];

// fruits.forEach(function (value, index) {
//   if (value % 2 === 0) {
//     console.log(value);
//   }
// });

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// const name = "Hello , world";
// // console.log(name[0]);
// for (let char of name) {
//   console.log(char);
// }

//

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let value = number.find(function (value) {
//   if (value % 2 === 0) {
//     return value;
//   }
// });

// let value = number.find((value) => value % 2 === 0);
// console.log(value);

// // Some and Every
// let arr = [1, [2, [3, [4, 5]]]];
// let flatArr = arr.flat(3);
// console.log(flatArr);

//
// let test = ["Apple", "Orange", "Banana"];

// test.sort(function (a, b) {
//   return b.toString().localeCompare(a.toString);
// });

// console.log(test);

// let arr = [1, 2, 3, 4];
// arr.fill(9, 1, 3);
// console.log(arr); // [1, 0, 0, 4]

// let testArry = new Array(10).fill(9, 2, 6).fill(10, 0, 2).fill(5, 6, 10);
// console.log(testArry);

// let num = 1;

// console.log(Number(num));

// console.log(parseInt(num));
// console.log(parseFloat(num));
// console.log(Number.isFinite(num));
// console.log(isNaN("37,5"));
// console.log("-------");

// console.log(Number.isNaN("NaN"));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN("blabla"));
// console.log(Number.isNaN(true));
// console.log(Number.isNaN(null));
// console.log(Number.isNaN("37"));
// console.log(Number.isNaN("37.37"));
// console.log(Number.isNaN(""));
// console.log(Number.isNaN(" "));

// const number = 677;
// const bigNumber = 35n;

// console.log(bigNumber);

// let date = new Date();

// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(
//   date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
// );

// setInterval(() => {
//   let date = new Date();
//   console.log(
//     date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
//   );
// }, 1000);

// console.log(new Date("2024-08-08"));
// console.log(new Date(2024, 7, 22, 10, 33, 30));

// const transactionDate = new Date("1998-07-02T10:33:30Z");
// console.log(transactionDate);
// const daysPassed = (new Date() - transactionDate) / (1000 * 60 * 60 * 24 * 365);
// console.log(daysPassed);

// const now = new Date();
// const options = {
//   year: "numeric",
//   month: "2-digit",
//   day: "2-digit",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   weekday: "long",
//   timeZone: "Asia/Kathmandu",
//   timeZoneName: "short",
// };

// console.log(new Intl.DateTimeFormat("en-NP", options).format(now));
// console.log(new Intl.DateTimeFormat("de-DE", options).format(now));
// console.log(new Intl.DateTimeFormat("en-US", options).format(now)); // e.g., Monday, July 22, 2024
// console.log(new Intl.DateTimeFormat("de-DE", options).format(now)); // e.g., Montag, 22. Juli 2024

// const timeInterval = setInterval(() => {
//   let date = new Date();
//   console.log(
//     date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
//   );
// }, 1000);

// setTimeout(() => {
//   clearInterval(timeInterval);
//   console.log("Timer stopped");
// }, 5000);

// Node.

// Understanding DOM

// console.log(document);

// // const para = document.getElementsByClassName("para")[0];
// // const para2 = document.querySelector(".para");
// // const para3 = document.getElementsByTagName("p")[0];

// const para = document.getElementById("para_id");

// // console.log(para);

// // console.log(para2);
// // console.log(para3);
// console.log(para);

// console.log(para.innerHTML);

// console.log(para.lastChild);

// const div = document.createElement("div");
// const body = document.querySelector("body");
// const ul = document.createElement("ul");
// const li = document.createElement("li");
// li.textContent = "Todo";
// div.appendChild(ul);

// ul.appendChild(li);

// body.appendChild(div);

// div.setAttribute("class", "div_js");
// div.setAttribute("id", "div_id");
// div.style.color = "blue";
// div.removeAttribute("class");

// const button = document.getElementById("click");
// const h2 = document.getElementById("counter");

// button.addEventListener("click", function () {
//   let number = Number(h2.textContent);
//   number += 1;
//   h2.textContent = number;
// });
// console.log(div);
// console.log(li);

// console.log(ul);

// console.log(body);

// console.log("hello world");
/*----------------------------------------------------------------
/
/
/   Model Project 
/
/
*/

// 1) select button elements
// const btnsOpenModal = document.querySelectorAll(".show-modal");
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// // 2) Add Event listeners to each button element

// for (let button of btnsOpenModal) {
//   button.addEventListener("click", openModal);
// }

// // 3)  make  Functions to dynamically add classList ( add/remove hidden properties)
// function openModal() {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// }

// function closeModal() {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// }
// // 4) Select the close button element of model
// const btnCloseModal = document.querySelector(".close-modal");

// // 5) Add Event listener to the close button element
// btnCloseModal.addEventListener("click", closeModal);

// // 6)  call function of Step 3 to add hidden properties in class
// // */

// // Features // press ESC to close modal
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

// Introduction // ----------------------------------------------------------------

// 1) Constructor Function

// const obj = {
//   age: 23,
// };

// obj.name = "hello";
// function Person(name, age, address) {
//   this.name = name;
//   this.age = age;
//   this.address = address;
//   this.getDetails = function () {
//     return `Hi my name is ${this.name}. I am ${this.age} years old.I live in ${this.address}`;
//   };
// }

// const kushal = new Person("kushal", 19, "Buda");
// const sushank = new Person("sushank", 21, "bhakta");

// Person.prototype.setName = function () {
//   console.log("Hello");
// // };

// console.log(kushal);
// console.log(kushal.getDetails());
// console.log(sushank);
// console.log(sushank.getDetails());

// kushal.setName();

// const sushank = new Person();
// sushank.name = 5;

// console.log(sushank);

// const arr = [1, 2, 3, 4];
// // console.log(arr);

// const arr2 = [3, 4];
// Array.prototype.download = function () {
//   console.log(this);
//   return "coding software download in sushank's mind";
// };

// console.log(arr.download());
// console.log(arr2.download());

// Class

// class Person {
//   #username; // private property
//   constructor(name, age) {
//     this.#username = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hello , Good Morning ");
//   }
//   formatedGreet() {
//     return `Hello, Good Morning ${this.username}! I am ${this.age} years old`;
//   }
//   setAge(age) {
//     this.age = age;
//     console.log(`New age: ${this.age}`);
//   }

//   get username() {
//     return this.#username;
//   }

//   set username(name) {
//     this.#username = name;
//   }

//   static add(a, b) {
//     return a + b;
//   }
// }

// let sushank = new Person("Sushank", 19);
// console.log(sushank);

// sushank.greet();
// console.log(sushank.formatedGreet());

// let preeti = new Person("Preeti", 19);
// console.log(preeti.username);
// preeti.username = "Hello me Preeti";
// console.log(preeti);
// console.log(preeti.username);
// console.log(Person.add(14, 14));
// preeti.greet();
// console.log(preeti.formatedGreet());
// preeti.setAge(26);
// console.log(preeti.#username);

// const person = {
//   greet() {
//     console.log("Hello, Good Morning");
//   },
// };

// person.greet();

// const sushank = Object.create(person);

// console.log(sushank);
// sushank.greet();

// class House {
//   constructor(name, address, rooms, floor, furniture) {
//     this.name = name;
//     this.address = address;
//     this.rooms = rooms;
//     this.floor = floor;
//     this.furniture = furniture;
//   }

//   getDetails() {
//     console.log(
//       `The ${this.name}'s house is situated at ${this.address}, has ${this.rooms} rooms, is on ${this.floor} floor, and has ${this.furniture} furniture.`
//     );
//   }
// }

// class KushalHouse extends House {
//   constructor(name, address, rooms, floor, furniture, parking) {
//     super(name, address, rooms, floor, furniture);
//     this.parking = parking;
//   }
//   kitchenFurner() {
//     console.log(`Furniture : ${this.furniture}`);
//   }
// }
// const house = new House("Admin", "kath", 67, 3, "wood");
// const kushalhouse = new KushalHouse(
//   "Kushal",
//   "Kath, buda",
//   24,
//   5,
//   "Steel",
//   "car 4"
// );

// //
// console.log(house);
// house.getDetails();
// console.log(kushalhouse);
// kushalhouse.getDetails();
// kushalhouse.kitchenFurner();
// kushalhouse.rooms = 78;
// console.log(kushalhouse);
// console.log(house);

// class SushankHouse extends House {
//   swimmingPool() {
//     console.log("Swimming Pool Added");
//   }
// }

// const sushankhouse = new SushankHouse();
// console.log(sushankhouse);

// class SarojHouse extends KushalHouse {
//   constructor(name, address, floor, room, furniture, parking, theater) {
//     super(name, address, room, floor, furniture, parking);
//     this.theater = theater;
//   }
//   skyScraper() {
//     console.log("Skyscraper Added");
//   }
//   moreDetails() {
//     console.log(
//       ` ${this.name} has parkign ${this.parking} . He also has ${this.theater} `
//     );
//     return this;
//   }

//   getMore() {
//     console.log(this.moreDetails());
//     return this;
//   }

//   moreAndMore() {
//     console.log("More");
//     return this;
//   }
// }

// const sarojhouse = new SarojHouse(
//   "Saroj",
//   "Lalitur",
//   45,
//   100,
//   "Plastic",
//   "3 cars",
//   "Deadpool"
// );

// sarojhouse.getDetails();
// console.log(sarojhouse);
// sarojhouse.moreDetails().getMore().moreAndMore();

// Default Value
// const [p = 1, q = 2, r = 9] = [];
// console.log(p, q, r);
// const person = { name: "John", age: 30, job: "developer", country: "nepal" };
// const { name, age, job, country = "Unknown" } = person;
// console.log(name, age, job, country);

// //
// const obj1 = { a: 1, b: 2 };
// const updated = { ...obj1, b: 5 };

// // =>  { a:1,b:5}
// console.log(updated);

// const [first, second, ...others] = [1, 2, 3, 4, 5];

// console.log(first, second, others);

// const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// console.log(a, b, rest);

// function add(a, b, ...num) {
//   // const sum = num.reduce((prev, curr) => {
//   //   return prev + curr;
//   // }, 0);
//   console.log(a, b);
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   // console.log(sum);
// }

// add(1, 2);

// add(1, 2, 4, 5, 5);

// add(1, 2, 2, 3, 90);

// console.log(null || "default");
// console.log(null || "default"); // 'default'
// console.log("Hello" || "default"); // 'Hello'
// console.log("" || false || 0 || "fallback");

// const fruits = ["apple", "banana", "orange"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const name = "John";
// const age = 30;

// Property shorthand
// const person = { name, age };
// console.log(person); // { name: 'John', age: 30 }

// // // Method shorthand
// const calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   subtract(a, b) {
//     return a - b;
//   },
// };

// console.log(calculator.add(2, 3)); // 8

// const propName = "hello";
// const obj = {
//   [propName]: "This is a dynamic property",
// };
// console.log(obj);

// const person = {
//   name: "John",
//   age: 30,
//   job: "developer",
//   hello: 1,
// };
// // console.log(Object.keys(person)); // '123 Main St'

// console.log(Object.entries(person));
// console.log(user.phoneNumbers?.mobile); // undefine
// for (const [key, value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`);
// }

// const mySet = new Set([1, 2, 3, 4, 4, 5]);
// console.log(mySet);

// const myMap = new Map();
// console.log(myMap);
// // Setting key-value pairs
// myMap.set("name", "John");
// myMap.set("number one", 1);
// myMap.set(true, "boolean");
// console.log(myMap);
// console.log(myMap.get("name"));

// const myMap = new Map([
//   ["name", "Alice"],
//   ["age", 25],
//   ["job", "engineer"],
// ]);

// // Iterating over keys
// for (const key of myMap.values()) {
//   console.log(key);
// }

// const str = "Hello, World!";

// // String length
// console.log(str.length);

// function BankAccount(initBal) {
//   balance = initBal;

//   this.deposit = function (depositAmount) {
//     balance += depositAmount;
//     return `Rs${depositAmount} amount is deposited into your account`;
//   };

//   this.getBalance = function () {
//     return `Your available Balance is Rs${balance}`;
//   };
// }

// const account = new BankAccount(6000);

// console.log(account.deposit(5000));

// console.log(account.getBalance());

// console.log(account.deposit(300));

// console.log(account.getBalance());

// const array = [
//   {
//     name: "Privik",
//     age: 1,
//   },
//   { name: "Bikram", age: 29 },
//   { name: "Preeti", age: 26 },
//   { name: "Habi", age: 17 },
//   { name: "Nedin", age: 18 },
//   { name: "Ritu", age: 8 },
// ];

// console.log(array);

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i].age;
// }

// console.log("Total Age:", sum);

// let average = sum / array.length;

// console.log("Average Age:", average);

// let countAbove22 = 0;
// let countBelow22 = 0;

// array.forEach((person) => {
//   if (person.age > 22) {
//     countAbove22++;
//     person.citizen = "Your are Adult";
//   } else {
//     countBelow22++;
//     person.citizen = "Your are minor";
//   }
// });

// console.log("Total Person Above 22 ", countAbove22);
// console.log("Total Person Below 22 ", countBelow22);
// console.log(array);
//
// let a = 10;
// function changeValue(x) {
//   x = 20;
// }
// changeValue(a);
// console.log(a);

// let obj = { prop: 10 };
// function changeProperty(o) {
//   o.prop = 20;
// }
// changeProperty(obj);

// //
// console.log(obj.prop);

// let username = "John Chhetri";

// function changeUsername(name) {
//   name = "Sushank Ratput";
// }

// changeUsername(username);

// console.log(username);

// function higherOrderFunc(callBack) {
//   return callBack();
// }

// function sayHello() {
//   return "Hello Its me";
// }

// const msg = higherOrderFunc(sayHello);
// console.log(msg);

// function calculate(a, b, callBack, callBack2, formatCallBack) {
//   let result1 = callBack(a, b);
//   let result2 = callBack2(a, b);

//   return formatCallBack(result1, result2);
// }

// function formatedResult(result1, result2) {
//   return `The sum is ${result1} the power is ${result2}`;
// }
// function add(a, b) {
//   return a + b;
// }

// function pow(a, b) {
//   return a ** b;
// }
// // const result = sum(5, 6, add);

// console.log(calculate(3, 4, add, pow, formatedResult));
// console.log(result);

// const result2 = sum(5, 19, add);
// console.log(result2);

// const resultPow = sum(3, 4, pow);
// console.log(resultPow);

// function createMultiplier(multiplier) {
//   return function (value) {
//     return multiplier * value;
//   };
// }

// const double = createMultiplier(3);
// console.log(double(3));

// const calculateCircleArea = (r) => {
//   // let maxArray = 0;
//   // for (let i = 0; i < numbers.length; i++) {
//   //   // Find Max element in an array
//   //   if (numbers[i] > maxArray) {
//   //     maxArray = numbers[i];
//   //   }
//   // }
//   // return maxArray;

//   return Math.PI * r ** 2;
// };

// console.log(calculateCircleArea(3)); // 28.274333882308138
// console.log(calculateCircleArea(5));
// console.log(findMax([1, 2, 3, 4, 5])); // 5
// console.log(findMax([10, 20, 30, 40])); // 40
// console.log(findMax([5, 15, 25, 35])); // 35

// Your functions and higher-order function here

// function double(a) {
//   return a * 2;
// }

// function triple(a) {
//   return a * 3;
// }

// function applyFunctions(a, functions) {
//   // const first = functions[0](a);
//   // const second = functions[1](a);
//   // return {
//   //   first,
//   //   second,
//   // };
//   // return functions.reduce((result, fn) => fn(result), a);
// }
// console.log(applyFunctions(2, [double, triple])); // 12
// console.log(applyFunctions(4, [triple, double]));

// Your function with variable arguments here

// function concatenateStrings(...string) {
//   return string.join(" ");
// }

// console.log(concatenateStrings("Hello", "World")); // Hello World
// console.log(concatenateStrings("JavaScript", "is", "fun")); // JavaScript is fun
// console.log(concatenateStrings("Concatenate", "these", "strings"));

// Your recursive function here

// function countdown(num) {
//   num = num - 1;
//   if (num <= 0) {
//     return;
//   }
//   console.log(num);
//   countdown(num);
// }

// countdown(5); // 5, 4, 3, 2, 1
// countdown(3);

// function add(x, y, z) {
//   return x + y + z;
// }

// console.log(add(2, 3, 4));

// function curriedAdd(x) {
//   return function (y, z) {
//     return x + y + z;
//   };
// }

// //

// const add5 = curriedAdd(5);
// const add6 = add5(6, 9);
// console.log(add6);

/*

map(()=>{
  
})
1,0
2,1,
3,2

*/

// let double = number.map(function (value, index) {
//   let times2 = value ** 3;
//   return times2;
// });
// console.log(double);

// let filterNumber = number.filter(function (value, index) {
//   // if (value > 3) {
//   //   return value;
//   // }

//   if (value % 2 !== 0) {
//     return value;
//   }
// });
// console.log(filterNumber);

// let number = [
//   {
//     name: "hari",
//     age: "30",
//     city: "chennai",
//   },
//   {
//     name: "prakash",
//     age: "25",
//     city: "bangalore",
//   },

//   {
//     name: "Sushank",
//     age: "27",
//     city: "kathm",
//   },
//   {
//     name: "Kushal",
//     age: "28",
//     city: "lalitpur",
//   },
//   {
//     name: "Saroj",
//     age: "29",
//     city: "Pokhara",
//   },
// ];

// let findNumber = number.findIndex(function (value, index) {
//   if (value.age == 29) {
//     return value;
//   }
// });
// let numbers = [1, 2, 3, 4, 5];
// let hasEven = numbers.some(function (value, index) {
//   return value > 6;
// });

// let hasOdd = numbers.every(function (value, index) {
//   return value < 6;
// });
// console.log(hasOdd);

// let arr = [1, [2, [3, [4, 5]]]];
// let flatArr = arr.flat(2);
// console.log(flatArr);
// let modified = number
//   .map((value, index) => {
//     return value * 5 + 1;
//   })
//   .filter((value, index) => {
//     if (value % 2 !== 0) {
//       return value;
//     }
//   })
//   .reduce((prevValue, currValue) => {
//     return prevValue + currValue;
//   }, 0);

// console.log(modified);
// console.log(filtered);
// console.log(sum);

// // let numbers = [5, 6, 8, 1];
// number.sort(function (a, b) {
//   return b.age - a.age;
// });
// console.log(number);

// let arr = new Array(2).fill(0);
// console.log(arr);

// let str = "Hello";
// // console.log(Array.from(str));

// console.log(Array.of(1, 2, 3, 4, 4));

// const numbers = [1, 2, 3, 4, 5];

// numbers.fill(7);
// console.log(numbers);

// let people = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Mary", age: 22 },
// ];

// const olderPeople = people.filter((value, index) => {
//   if (value.age >= 25) {
//     return value;
//   }
// });

// const olderPeopleName = olderPeople.map((value, index) => {
//   return value.name;
// });

// console.log(olderPeople);
// console.log(olderPeopleName);

// function fetchData(data, callBack) {
//   setTimeout(() => {
//     if (data == "click") {
//       return callBack("You clicked");
//     }
//     if (data == "mouseover") {
//       return callBack("Mouse over");
//     }
//     if (data == "error") {
//       return callBack("An error occurred");
//     }
//     return callBack("Noting");
//   }, 2000);
// }

// fetchData("click", (data) => {
//   console.log(data);
// });

// fetchData("mouseover", (data) => {
//   console.log(data);
// });

// / Fetch user data

// function getOrderDetails(orderId, callback) {
//   setTimeout(() => {
//     callback({ orderId: orderId, shippingId: 201 });
//   }, 1000);
// }

// function getOrders(userId, callback) {
//   setTimeout(() => {
//     callback([
//       { id: 101, item: "Laptop" },
//       { id: 102, item: "Phone" },
//     ]);
//   }, 1000);
// }
// function getUser(userId, callback) {
//   setTimeout(() => {
//     callback({ id: userId, name: "John Doe" });
//   }, 1000);
// }

// function getShippingInfo(shippingId, callback) {
//   setTimeout(() => {
//     callback({ shippingId: shippingId, deliveryId: 301 });
//   }, 1000);
// }

// function getDeliveryEstimate(deliveryId, callback) {
//   setTimeout(() => {
//     callback({ deliveryId: deliveryId, estimate: "2 days" });
//   }, 1000);
// }

// getUser(1, (user) => {
//   console.log(user);

//   getOrders(user.id, (order) => {
//     console.log(order);

//     getOrderDetails(order[0].id, (orderDetails) => {
//       console.log(orderDetails);

//       getShippingInfo(orderDetails.shippingId, (shippingInfo) => {
//         console.log(shippingInfo);

//         getDeliveryEstimate(shippingInfo.deliveryId, () => {
//           console.log("Delivery estimate fetched");
//         });
//       });
//     });
//   });

//   // console.log(user);
// });

// class Movie {
//   constructor(title, director, rating = 0) {
//     this.title = title;
//     this.director = director;
//     this.rating = rating;
//   }

//   rate(rating) {
//     this.rating = rating;
//   }
//   1;
//   getDetails() {
//     return `${this.title} is directed by ${this.director}.I would rate this movie ${this.rating} out of 5`;
//   }
// }

// class MovieManager {
//   constructor() {
//     this.movies = [];
//   }

//   addMovie(movie) {
//     this.movies.push(movie);
//   }

//   //   filterMovies(callback) {
//   //     return this.movies.filter(callback);
//   //   }
//   // }
//   filterMovieByRating(rating) {
//     return this.movies
//       .filter((movie) => {
//         return movie.rating >= rating;
//       })
//       .sort((movie1, movie2) => {
//         return movie1.rating - movie2.rating;
//       });
//   }

//   saveToLocalStorage() {
//     const movies = JSON.stringify(this.movies);
//     localStorage.setItem("movies", movies);
//   }
//   getFromLocalStorage() {
//     const movies = localStorage.getItem("movies");
//     this.movies = JSON.parse(movies);
//   }
//   displayMovies() {
//     this.movies.forEach(function (movie) {
//       console.log(movie.getDetails());
//     });
//   }
// }

// const movie1 = new Movie("Superman", "Sushank", 4);
// // console.log(movie1);

// const movie2 = new Movie("Superman", "Sushank");

// // console.log(movie2);

// const movie3 = new Movie("Batman", "kushal", 5);

// const newMovieManager = new MovieManager();

// // newMovieManager.addMovie(movie1);
// // newMovieManager.addMovie(movie2);
// // newMovieManager.addMovie(movie3);
// newMovieManager.displayMovies();
// newMovieManager.filterMovieByRating(4);
// console.log(newMovieManager.movies);
// console.log("+++++filtered movies++++");

// // newMovieManager.saveToLocalStorage();
// newMovieManager.getFromLocalStorage();
// console.log(newMovieManager.movies);

// localStsorage.setItem("hello", "My name is this");

// const data = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     state: "NY",
//   },
// };
// const string = JSON.stringify(data);
// console.log(string);
// localStorage.setItem("data", data);
// const dataFromLocal = localStorage.getItem("data");
// console.log(typeof dataFromLocal);

// const data1 = localStorage.getItem("data");
// console.log(data);

// console.log(JSON.parse(data));

//
//

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data fetched!");
//   }, 2000);
// }

// fetchData((message) => {
//   console.log(message);
// });

// Fetch user data

// // Mock functions to simulate asynchronous operations
// function getUser(userId, callback) {
//   setTimeout(() => {
//     callback({ id: userId, name: "John Doe" });
//   }, 1000);
// }

// function getOrders(userId, callback) {
//   setTimeout(() => {
//     callback([
//       { id: 101, item: "Laptop" },
//       { id: 102, item: "Phone" },
//     ]);
//   }, 1000);
// }

// function getOrderDetails(orderId, callback) {
//   setTimeout(() => {
//     callback({ orderId: orderId, shippingId: 201 });
//   }, 1000);
// }

// function getShippingInfo(shippingId, callback) {
//   setTimeout(() => {
//     callback({ shippingId: shippingId, deliveryId: 301 });
//   }, 1000);
// }

// function getDeliveryEstimate(deliveryId, callback) {
//   setTimeout(() => {
//     callback({ deliveryId: deliveryId, estimate: "2 days" });
//   }, 1000);
// }

// getUser(1, (user) => {
//   console.log("User:", user);
//   getOrders(user.id, (order) => {
//     console.log(order);

//     getOrderDetails(order[0].id, (orderDetails) => {
//       console.log(orderDetails);
//     });
//   });
// });

// // d
// let mydata = promise
//   .then((data) => {
//     return data;
//   })
//   .catch((err) => {
//     console.log("running from Catch block");
//     console.log(err);
//   });

// console.log(mydata);

// Async await
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data fetched!");
//   }, 2000);
// });
// async function getData() {
//   try {
//     let data = await promise;
//     data += " Its Me ";

//     return data;
//   } catch (err) {
//     console.log("Handling from catch Block  ", err);
//   }
// }

// // getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Handling from catch block  ", err);
//   });

// try {
//   const a = 5;

//   a = 6;
//   console.log(a);
// } catch (err) {
//   console.log("The Error", err);
// }

// console.log("hello world");

// fetch("www.google.com").then((response) => {
//   console.log(response);
// });

// const list = document.getElementById("list-contaienr");
// fetch("https://api.freeapi.app/api/v1/public/randomusers")
//   .then((response) => {
//     return response.json();
//   })
//   .then((resData) => {
//     // console.log(resData.data.data);
//     resData.data.data.forEach((user) => {
//       const li = document.createElement("li");
//       li.textContent = `${user.name.title} ${user.name.first} ${user.name.last} has email ${user.email}`;
//       list.appendChild(li);
//     });
//   })

//   .catch((error) => {
//     console.log(error);
//   });

// async function fetchRandomUser(limit) {
//   try {
//     const data = await fetch(
//       `https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=${limit}`
//     );
//     const resData = await data.json();
//     let randomUsers = resData.data.data;
//     randomUsers.forEach((user) => {
//       const li = document.createElement("li");
//       li.textContent = `${user.name.title} ${user.name.first} ${user.name.last} has email ${user.email}`;

//       list.appendChild(li);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchRandomUser(30);

//
// class Product {
//   constructor(name, category, quantity, price) {
//     this.name = name;
//     this.category = category;
//     this.quantity = quantity;
//     this.price = price;
//     this.dateAdded = new Date();
//     this.id = Math.random().toString(36).substr(2, 9);
//   }

//   getTotalValue(quantity, price) {
//     const total = quantity * price;
//     return total;
//   }
// }

// class Inventory {
//   constructor() {
//     this.productList = [];
//   }
//   addProduct(product) {
//     this.productList.push(product);
//   }

//   deleteProduct(id) {
//     this.productList = this.productList.filter((product) => {
//       this.productList.id !== id;
//     });
//   }

//   updateProduct(id, updatedProduct) {
//     const index = this.productList.findIndex((product) => {
//       return product.id === id;
//     });

//     const product = this.productList[index];
//     const upadatePrevProduct = { ...product, ...updatedProduct };
//     const newUpdatedProduct = new Product(
//       upadatePrevProduct.name,
//       upadatePrevProduct.category,
//       upadatePrevProduct.quantity,
//       upadatePrevProduct.price
//     );
//     newUpdatedProduct.id = product.id;
//     newUpdatedProduct.dateAdded = product.dateAdded;

//     this.productList[index] = newUpdatedProduct;
//   }
// }

// const newInvent = new Inventory();

// const newProduc = new Product("headphone", "electronic", 4, 500);
// // console.log(newProduc);
// // console.log(newInvent);
// const newProduc1 = new Product("t-shirt", "electronic", 4, 500);
// newInvent.addProduct(newProduc);
// newInvent.addProduct(newProduc1);
// // newInvent.addProduct("Phone");
// // newInvent.addProduct("laptop");
// // newInvent.addProduct("water");

// // // newInvent.deleteProduct("water");
// newInvent.updateProduct(newProduc1.id, {
//   category: "cloths",
//   quantity: 100,
// });
// console.log(newInvent);

// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const address = document.getElementById("address");
// const profile = document.getElementById("profile");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     response.json().then((res) => {
//       console.log(res);
//       res.forEach((user) => {
//         displayUI(user);
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function displayUI(res) {
//   let htmlData = `
//   <p><strong>Name:</strong> <span id="name">${res.name}</span></p>
//       <p><strong>Email:</strong> <span id="email">${res.email}</span></p>
//       <p><strong>Address:</strong> <span id="address">${res.address.city}, ${res.address.street},${res.address.suite}</span></p> <br />`;

//   profile.innerHTML += htmlData;
// }
// document.getElementById("form").addEventListener("submit", function (e) {
//   console.log(e);
//   console.log(document.getElementById("county").value);
// });

// fetch(https://wttr.in/${}?format=j1).then((response)=>{
//     response.json().then((res)=>{
//         console.log(res);
//         console.log(res.current_condition[0]);
//         console.log(res.current_condition[0].temp_C)
//         console.log(res.current_condition[0].visibility)
//         console.log(res.current_condition[0].weatherDesc[0].value);

//         displayUI(res);
//     })
// }).catch((err)=>{
//     console.log(err)
// })
// const errMsg = document.getElementById("errMsg");
// function country(country) {
//   fetch(`https://wttr.in/${country}?format=j1`)
//     .then((response) => {
//       errMsg.innerText = "";
//       if (response.status === 404) {
//         errMsg.innerText = `This '${country}' country not found`;
//         return;
//       }
//       response.json().then((res) => {
//         displayUI(res);
//       });
//     })
//     .catch((err) => {
//       console.log(`Country Not Found,err`);
//     });
// }

// function displayUI(user) {
//   let htmlData = `<p><strong>Temp_C :</strong> <span id="tempC">${user.current_condition[0].temp_C}</span></p>
//     <p><strong>Visibility :</strong> <span id="visible">${user.current_condition[0].visibility}</span></p>
//     <p><strong>WeatherDes :</strong> <span id="weatherDes">${user.current_condition[0].weatherDesc[0].value}</span></p>`;

//   document.getElementById("div").innerHTML = htmlData;
// }

// document.getElementById("formID").addEventListener("submit", (e) => {
//   e.preventDefault();

//   const inputID = document.getElementById("input");
//   country(inputID.value);
// });
// import { a, add } from "./test.js";
// import { multiplication } from "./secondTest.js";
// console.log("Function Calling from Index.js");
// let sum = add(3, 4);
// let muliple = multiplication(5, 6);

// console.log(sum);
// console.log(muliple);
// import { multiplication } from "./secondTest.js";

// console.log(multiplication(5, 6));

// export function divion(a, b) {
//   return a / b;
// }

// import { Animal as SocialAnimal, a as b } from "./secondTest.js";
// console.log(b);
// const man = new SocialAnimal("Human");
// console.log(man.getName());
const obj = {
  a: 1,
  b: 2,
};

function multiplication(a, b) {
  console.log(this);
  console.log(a, b);
}
const multiply = multiplication.bind(obj, 8, 9, 0);

multiply(3, 4);
