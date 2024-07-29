// Destructuring Arrays and Objects

// Task 1
const arr1 = [1, 2, 3, 4];
const [first, second] = arr1;
console.log("Task 1:", first, second);

// Task 2
const person = { name: "John", age: 25 };
const { name, age } = person;
console.log("Task 2:", name, age);

// Task 3
const book = { title: "JavaScript", author: { name: "John Doe" } };
const { title } = book;
console.log("Task 3:", title);

// The Spread Operator (...)

const arr2 = [1, 2, 3];
const arr3 = [4, 5, 6];
const combinedArray = [...arr2, ...arr3];
console.log("Task 4:", combinedArray);

const arrCopy = [...arr2];
console.log("Task 5:", arrCopy);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log("Task 6:", mergedObj);

// Rest Pattern and Parameters

// Task 7
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log("Task 7:", sum(1, 2, 3, 4));

// Task 8
const arr4 = [1, 2, 3, 4];
const [firstElement, ...restElements] = arr4;
console.log("Task 8:", firstElement, restElements);

// Short Circuiting (&& and ||)

// Task 9
const user = undefined;
const defaultUser = user || "Default User";
console.log("Task 9:", defaultUser);

// Task 10
const isLoggedIn = true;
isLoggedIn && console.log("Task 10: User is logged in");

// The Nullish Coalescing Operator (??)

// Task 11
const userName = null;
const defaultName = userName ?? "Default Name";
console.log("Task 11:", defaultName);

// Task 12
const value = 0;
const defaultValue = value ?? 10;
console.log("Task 12:", defaultValue);

// Looping Arrays: The for-of Loop

// Task 13
const arr5 = [1, 2, 3, 4];
for (const num of arr5) {
  console.log("Task 13:", num);
}

// Task 14
const str = "Hello";
for (const char of str) {
  console.log("Task 14:", char);
}

// Enhanced Object Literals

// Task 15
const obj3 = {
  name: "John",
  greet() {
    console.log("Task 15: Hello");
  },
};
obj3.greet();

// Task 16
const obj4 = {
  name: "Alice",
  getName() {
    return this.name;
  },
};
console.log("Task 16:", obj4.getName());

// Optional Chaining (?.)

// Task 17
const userProfile = { profile: { name: "John" } };
console.log("Task 17:", userProfile.profile?.name);

// Task 18
console.log("Task 18:", userProfile.profile?.email);

// Looping Objects: Object Keys, Values, and Entries

// Task 19
const obj5 = { a: 1, b: 2, c: 3 };
console.log("Task 19:", Object.keys(obj5));

// Task 20
console.log("Task 20:", Object.values(obj5));

// Task 21
console.log("Task 21:", Object.entries(obj5));

// Sets

// Task 22
const set = new Set([1, 2, 3, 3, 4, 5, 5]);
console.log("Task 22:", set);

// Task 23
const set2 = new Set();
set2.add(1);
console.log("Task 23:", set2.has(1));

// Maps: Fundamentals

// Task 24
const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log("Task 24:", map);

// Task 25
const map2 = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log("Task 25:", map2.get("a"));

// Maps: Iteration

// Task 26
const map3 = new Map([
  ["a", 1],
  ["b", 2],
]);
for (const [key, value] of map3) {
  console.log("Task 26:", key, value);
}

// Task 27
map3.forEach((value, key) => {
  console.log("Task 27:", key, value);
});

// Working With Strings

// Task 28
const str2 = "Hello, World!";
console.log("Task 28:", str2.includes("World"));

// Task 29
console.log("Task 29:", str2.slice(7));

// Task 30
const str3 = "apple,banana,orange";
console.log("Task 30:", str3.split(","));

// Task 31
console.log("Task 31:", str2.replace("World", "JavaScript"));

// Task 32
console.log("Task 32:", "hello".toUpperCase());

// Task 33
console.log("Task 33:", "  hello  ".trim());
