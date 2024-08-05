//// Coding Challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// #### Solution 1: Function Declarations

function square(num) {
  return num * num;
}

console.log(square(2)); // 4
console.log(square(5)); // 25
console.log(square(10)); // 100

// #### Solution 2: Function Expressions

const cube = function (num) {
  return num * num * num;
};

console.log(cube(2)); // 8
console.log(cube(3)); // 27
console.log(cube(4)); // 64

// #### Solution 3: Arrow Functions

const power = (base, exponent) => base ** exponent;

console.log(power(2, 3)); // 8
console.log(power(5, 2)); // 25
console.log(power(7, 3)); // 343

// #### Solution 4: Functions Calling Other Functions

function double(num) {
  return num * 2;
}

function triple(num) {
  return num * 3;
}

function applyOperation(num, operation) {
  return operation(num);
}

console.log(applyOperation(5, double)); // 10
console.log(applyOperation(5, triple)); // 15
console.log(applyOperation(10, double)); // 20
console.log(applyOperation(10, triple)); // 30

// #### Solution 5: Function Review

function calculateRectangleArea(width, height) {
  return width * height;
}

function formatResult(value, unit) {
  return `${value} ${unit}`;
}

const width = 5;
const height = 10;
const area = calculateRectangleArea(width, height);
const formattedArea = formatResult(area, "square meters");

console.log(formattedArea); // 50 square meters

// Task 6: Basic Function Declaration
function divide(a, b) {
  return a / b;
}

console.log("Task 1: Basic Function Declaration");
console.log(divide(10, 2)); // 5
console.log(divide(20, 4)); // 5
console.log(divide(30, 5)); // 6

console.log(""); // New line for separation

// Task 7: Function Expression with Anonymous Function
const modulus = function (a, b) {
  return a % b;
};

console.log("Task 2: Function Expression with Anonymous Function");
console.log(modulus(10, 3)); // 1
console.log(modulus(20, 7)); // 6
console.log(modulus(30, 4)); // 2

console.log(""); // New line for separation

// Task 8: Arrow Function for Squaring Numbers
const square = (num) => num * num;

console.log("Task 3: Arrow Function for Squaring Numbers");
console.log(square(2)); // 4
console.log(square(5)); // 25
console.log(square(10)); // 100

console.log(""); // New line for separation

// Task 9: Functions Returning Other Functions
function createAdder(base) {
  return function (num) {
    return num + base;
  };
}

const add10 = createAdder(10);
console.log("Task 4: Functions Returning Other Functions");
console.log(add10(5)); // 15
console.log(add10(20)); // 30

const add25 = createAdder(25);
console.log(add25(10)); // 35
console.log(add25(15)); // 40

console.log(""); // New line for separation

// Task 10: Function with Default Parameters
function describePerson(name, age = "unknown") {
  return `${name} is ${age} years old.`;
}

console.log("Task 5: Function with Default Parameters");
console.log(describePerson("Alice", 30)); // Alice is 30 years old.
console.log(describePerson("Bob")); // Bob is unknown years old.

console.log(""); // New line for separation

// Task 11: Function Expression with Named Function
const findMax = function max(arr) {
  return Math.max(...arr);
};

console.log("Task 6: Function Expression with Named Function");
console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMax([10, 20, 30, 40])); // 40
console.log(findMax([5, 15, 25, 35])); // 35

console.log(""); // New line for separation

// Task 12: Arrow Function with Multiple Statements
const calculateCircleArea = (radius) => {
  const pi = Math.PI;
  return pi * radius * radius;
};

console.log("Task 7: Arrow Function with Multiple Statements");
console.log(calculateCircleArea(3)); // 28.274333882308138
console.log(calculateCircleArea(5)); // 78.53981633974483

console.log(""); // New line for separation

// Task 13: Functions Calling Other Functions
function double(num) {
  return num * 2;
}

function triple(num) {
  return num * 3;
}

function applyFunctions(num, functions) {
  return functions.reduce((result, fn) => fn(result), num);
}

console.log("Task 8: Functions Calling Other Functions");
console.log(applyFunctions(2, [double, triple])); // 12
console.log(applyFunctions(4, [triple, double])); // 24

console.log(""); // New line for separation

// Task 14: Functions with Variable Arguments
function concatenateStrings(...strings) {
  return strings.join(" ");
}

console.log("Task 9: Functions with Variable Arguments");
console.log(concatenateStrings("Hello", "World")); // Hello World
console.log(concatenateStrings("JavaScript", "is", "fun")); // JavaScript is fun
console.log(concatenateStrings("Concatenate", "these", "strings")); // Concatenate these strings

console.log(""); // New line for separation

// Task 15: Recursive Function
function countdown(n) {
  if (n > 0) {
    console.log(n);
    countdown(n - 1);
  }
}

console.log("Task 10: Recursive Function");
countdown(5); // 5, 4, 3, 2, 1
countdown(3); // 3, 2, 1
