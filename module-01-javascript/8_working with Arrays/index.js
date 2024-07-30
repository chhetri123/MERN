// Task 1: Double the Values
let numbers1 = [1, 2, 3, 4, 5];
let doubled = numbers1.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Task 2: Filter Even Numbers
let numbers2 = [1, 2, 3, 4, 5];
let evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Task 3: Sum of Numbers
let numbers3 = [1, 2, 3, 4, 5];
let sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Task 4: Square and Sum
let numbers4 = [1, 2, 3, 4, 5];
let squareAndSum = numbers4
  .map((num) => num * num)
  .reduce((acc, num) => acc + num, 0);
console.log(squareAndSum); // 55

// Task 5: Find the First Greater Than 3
let numbers5 = [1, 2, 3, 4, 5];
let firstGreaterThan3 = numbers5.find((num) => num > 3);
console.log(firstGreaterThan3); // 4

// Task 6: Index of First Even Number
let numbers6 = [1, 2, 3, 4, 5];
let indexOfFirstEven = numbers6.findIndex((num) => num % 2 === 0);
console.log(indexOfFirstEven); // 1

// Task 7: Extract and Transform
let people1 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mary", age: 22 },
];
let doubledAges = people1.map((person) => person.age * 2);
console.log(doubledAges); // [50, 60, 44]

// Task 8: Filter and Map
let people2 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mary", age: 22 },
];
let namesOlderThan25 = people2
  .filter((person) => person.age > 25)
  .map((person) => person.name);
console.log(namesOlderThan25); // ['Jane']

// Task 9: Sum of Prices
let items1 = [
  { name: "apple", price: 1.2 },
  { name: "banana", price: 0.8 },
  { name: "orange", price: 1.5 },
];
let totalPrice = items1.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice); // 3.5

// Task 10: Chaining Methods
let people3 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mary", age: 22 },
  { name: "Tom", age: 27 },
];
let sumAgesOver25 = people3
  .filter((person) => person.age > 25)
  .map((person) => person.age)
  .reduce((acc, age) => acc + age, 0);
console.log(sumAgesOver25); // 57

// Task 11: Find and Update
let people4 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mary", age: 22 },
];
let jane = people4.find((person) => person.name === "Jane");
if (jane) jane.age = 32;
console.log(people4); // [{name: 'John', age: 25}, {name: 'Jane', age: 32}, {name: 'Mary', age: 22}]

// Task 12: Index and Remove
let people5 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mary", age: 22 },
];
let maryIndex = people5.findIndex((person) => person.name === "Mary");
if (maryIndex !== -1) people5.splice(maryIndex, 1);
console.log(people5); // [{name: 'John', age: 25}, {name: 'Jane', age: 30}]

// Task 13: Nested Array Flatten
let nestedArray1 = [1, [2, [3, [4, 5]]]];
let flattenedArray = nestedArray1.flat(3);
console.log(flattenedArray); // [1, 2, 3, 4, 5]

// Task 14: Map and Flatten
let words = ["hello", "world"];
let letters = words.flatMap((word) => word.split(""));
console.log(letters); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// Task 15: Sort by Age
let people6 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mary", age: 22 },
];
let sortedByAge = people6.sort((a, b) => a.age - b.age);
console.log(sortedByAge); // [{name: 'Mary', age: 22}, {name: 'John', age: 25}, {name: 'Jane', age: 30}]

// Task 16: Sort Strings
let fruits = ["banana", "apple", "orange"];
let sortedFruits = fruits.sort();
console.log(sortedFruits); // ['apple', 'banana', 'orange']

// Task 17: Custom Fill
let arr1 = new Array(5).fill("x");
arr1.fill("y", 1, 4);
console.log(arr1); // ['x', 'y', 'y', 'y', 'x']

// Task 18: Copy and Modify
let numbers7 = [1, 2, 3, 4, 5];
let modifiedNumbers = Array.from(numbers7, (num) => num + 1);
console.log(modifiedNumbers); // [2, 3, 4, 5, 6]

// Task 19: Creating an Array from Arguments
let arr2 = Array.of(1, 2, 3);
console.log(arr2); // [1, 2, 3]

// Task 20: Create DOM Elements from Array
let items2 = ["Item 1", "Item 2", "Item 3"];
items2.forEach((item) => {
  let element = document.createElement("div");
  element.textContent = item;
  document.body.appendChild(element);
});

// Task 21: Filter and Create DOM Elements
let numbers8 = [1, 2, 3, 4, 5];
numbers8
  .filter((num) => num % 2 === 0)
  .forEach((num) => {
    let element = document.createElement("div");
    element.textContent = num;
    document.body.appendChild(element);
  });

// Task 22: Chain Map, Filter, and Reduce
let numbers9 = [1, 2, 3, 4, 5];
let chainedResult = numbers9
  .map((num) => num * num)
  .filter((num) => num > 10)
  .reduce((acc, num) => acc + num, 0);
console.log(chainedResult); // 41

// Task 23: Group by Age
let people7 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mary", age: 25 },
];
let groupedByAge = people7.reduce((acc, person) => {
  if (!acc[person.age]) acc[person.age] = [];
  acc[person.age].push(person);
  return acc;
}, {});
console.log(groupedByAge); // {25: [{name: 'John', age: 25}, {name: 'Mary', age: 25}], 30: [{name: 'Jane', age: 30}]}

// Task 24: Find and Update Nested Object
let data = [
  { id: 1, info: { name: "John", age: 25 } },
  { id: 2, info: { name: "Jane", age: 30 } },
];
let person = data.find((item) => item.id === 2);
if (person) person.info.age = 32;
console.log(data); // [{id: 1, info: {name: 'John', age: 25}}, {id: 2, info: {name: 'Jane', age: 32}}]

// Task 25: Filter Unique Values
let numbers10 = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = numbers10.filter(
  (num, index, arr) => arr.indexOf(num) === index
);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Task 26: Sum Nested Array Values
let nestedArray2 = [1, [2, 3], [4, [5, 6]]];
let flattenedAndSummed = nestedArray2
  .flat(2)
  .reduce((acc, num) => acc + num, 0);
console.log(flattenedAndSummed); // 21

// Task 27: Remove Duplicates Using Set
let numbers11 = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbersSet = Array.from(new Set(numbers11));
console.log(uniqueNumbersSet); // [1, 2, 3, 4, 5]

// Task 28: Count Occurrences
let fruits2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let occurrences = fruits2.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(occurrences); // {apple: 3, banana: 2, orange: 1}

// Task 29: Calculate Average Age
let people8 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mary", age: 22 },
];
let averageAge = people8.reduce((acc, person, index, arr) => {
  acc += person.age;
  if (index === arr.length - 1) return acc / arr.length;
  return acc;
}, 0);
console.log(averageAge); // 25.666666666666668

// Task 30: Flatten Deeply Nested Array
let nestedArray3 = [1, [2, [3, [4, 5]]]];
function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}
let deeplyFlattened = flattenArray(nestedArray3);
console.log(deeplyFlattened); // [1, 2, 3, 4, 5]

// Task 31: Custom Sort Function
let people9 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mary", age: 22 },
];
let customSorted = people9.sort((a, b) => a.name.localeCompare(b.name));
console.log(customSorted); // [{name: 'Jane', age: 30}, {name: 'John', age: 25}, {name: 'Mary', age: 22}]
