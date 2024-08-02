// 1. Default Parameters
function calculateTotal(price, taxRate = 0.1) {
  return price + price * taxRate;
}
console.log(calculateTotal(100)); // 110
console.log(calculateTotal(100, 0.2)); // 120

// 2. Default Parameters
function describePerson(name, age = 25, city = "Unknown") {
  console.log(`${name} is ${age} years old and lives in ${city}.`);
}
describePerson("Alice"); // Alice is 25 years old and lives in Unknown.
describePerson("Bob", 30, "New York"); // Bob is 30 years old and lives in New York.

// 3. Value vs. Reference
let a = 10;
let profile = { name: "Alice" };

function updateProfile(obj, value) {
  obj.name = "Updated Name";
  value = 20; // This won't affect the original 'a'
}

updateProfile(profile, a);
console.log(a); // 10
console.log(profile.name); // Updated Name

// 4. Value vs. Reference
let num = 5;
let settings = { theme: "light" };

function increment(number) {
  number += 1; // This won't affect the original 'num'
}

function updateSettings(obj) {
  obj.theme = "dark";
}

increment(num);
updateSettings(settings);

console.log(num); // 5
console.log(settings.theme); // dark

// 5. First-Class Functions
function logMessage(func) {
  console.log(func());
}

function getMessage() {
  return "Hello, World!";
}

logMessage(getMessage); // Hello, World!

// 6. Higher-Order Functions
function applyOperation(arr, operation) {
  return arr.map(operation);
}

function square(num) {
  return num * num;
}

console.log(applyOperation([1, 2, 3], square)); // [1, 4, 9]

// 7. Higher-Order Functions
function filterNumbers(arr, predicate) {
  return arr.filter(predicate);
}

function isEven(num) {
  return num % 2 === 0;
}

console.log(filterNumbers([1, 2, 3, 4], isEven)); // [2, 4]

// 8. Callback Functions
function processData(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

function onComplete() {
  console.log("Processing complete.");
}

processData(onComplete); // Processing complete.

// 9. Callback Functions
function asyncTask(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

function afterDelay() {
  console.log("Task completed.");
}

asyncTask(afterDelay); // Task completed.

// 10. Functions Returning Functions
function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const greetHello = createGreeting("Hello");
console.log(greetHello("Alice")); // Hello, Alice!

// 11. Functions Returning Functions
function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

const addFive = createAdder(5);
console.log(addFive(10)); // 15

// 12. Functions Returning Functions
function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1

// 13. Default Parameters & Callback Functions
function fetchUserData(
  id,
  callback = () => console.log("No callback provided")
) {
  // Simulate data fetch
  setTimeout(() => {
    if (callback) {
      callback("Fetched user data");
    }
  }, 1000);
}

fetchUserData(1); // No callback provided
fetchUserData(2, (data) => console.log(data)); // Fetched user data

// 14. Higher-Order Functions & Callback Functions
function processArray(arr, transform, filter) {
  return arr.map(transform).filter(filter);
}

function double(num) {
  return num * 2;
}

function isPositive(num) {
  return num > 0;
}

console.log(processArray([1, -2, 3, -4], double, isPositive)); // [2, 6]

// 15. Functions Accepting Callback Functions
function performOperation(num, operation) {
  return operation(num);
}

function square(n) {
  return n * n;
}

console.log(performOperation(5, square)); // 25

// 16. Functions Returning Functions
function createPower(exponent) {
  return function (base) {
    return Math.pow(base, exponent);
  };
}

const square = createPower(2);
console.log(square(4)); // 16

// 17. First-Class Functions
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function addTwo(x) {
  return x + 2;
}

function multiplyByThree(x) {
  return x * 3;
}

const addThenMultiply = compose(multiplyByThree, addTwo);
console.log(addThenMultiply(5)); // 21

// 18. Default Parameters & Functions Returning Functions
function generateDiscount(discount) {
  return function (amount) {
    return amount - amount * discount;
  };
}

const applyTenPercent = generateDiscount(0.1);
console.log(applyTenPercent(100)); // 90

// 19. Callback Functions & Functions Accepting Callback Functions
function processItems(items, callback) {
  return items.map(callback);
}

function capitalize(item) {
  return item.toUpperCase();
}

console.log(processItems(["apple", "banana", "cherry"], capitalize)); // ["APPLE", "BANANA", "CHERRY"]

// 20. Value vs. Reference & Higher-Order Functions
let settings = { theme: "light", notifications: true };

function updateValues(obj, updater) {
  updater(obj);
}

function disableNotifications(obj) {
  obj.notifications = false;
}

updateValues(settings, disableNotifications);
console.log(settings.notifications); // false
