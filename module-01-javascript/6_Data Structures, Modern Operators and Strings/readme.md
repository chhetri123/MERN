# Modern JavaScript Features

## Table of Contents

1. [Destructuring Arrays and Objects](#1-destructuring-arrays-and-objects)
2. [The Spread Operator (...)](#2-the-spread-operator-)
3. [Rest Pattern and Parameters](#3-rest-pattern-and-parameters)
4. [Short Circuiting (&& and ||)](#4-short-circuiting--and-)
5. [The Nullish Coalescing Operator (??)](#5-the-nullish-coalescing-operator-)
6. [Looping Arrays: The for-of Loop](#6-looping-arrays-the-for-of-loop)

7. [Enhanced Object Literals](#7-enhanced-object-literals)
8. [Optional Chaining (?.)](#8-optional-chaining-)
9. [Looping Objects: Object Keys, Values, and Entries](#9-looping-objects-object-keys-values-and-entries)
10. [Sets](#10-sets)
11. [Maps: Fundamentals](#11-maps-fundamentals)
12. [Maps: Iteration](#12-maps-iteration)
13. [Working With Strings](#13-working-with-strings)

## 1. Destructuring Arrays and Objects

Destructuring is a convenient way to extract values from arrays or properties from objects into distinct variables.

### Array Destructuring

```javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3

// Skipping elements
const [x, , z] = numbers;
console.log(x, z); // 1 3

// Default values
const [p = 1, q = 2, r = 3, s = 4] = [8, 9];
console.log(p, q, r, s); // 8 9 3 4
```

### Object Destructuring

```javascript
const person = { name: "John", age: 30, job: "developer" };
const { name, age } = person;
console.log(name, age); // John 30

// Assigning to different variable names
const { name: personName, job: occupation } = person;
console.log(personName, occupation); // John developer

// Default values
const { name, age, country = "Unknown" } = person;
console.log(country); // Unknown
```

## 2. The Spread Operator (...)

The spread operator allows an iterable (array, string, object) to be expanded in places where zero or more arguments or elements are expected.

### Array Spreading

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copying an array
const copy = [...arr1];
console.log(copy); // [1, 2, 3]
```

### Object Spreading

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Overriding properties
const updated = { ...obj1, b: 5 };
console.log(updated); // { a: 1, b: 5 }
```

## 3. Rest Pattern and Parameters

The rest pattern allows us to represent an indefinite number of arguments as an array.

### Rest with Arrays

```javascript
const [first, second, ...others] = [1, 2, 3, 4, 5];
console.log(first, second, others); // 1 2 [3, 4, 5]
```

### Rest with Objects

```javascript
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a, b, rest); // 1 2 { c: 3, d: 4 }
```

### Rest Parameters in Functions

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

## 4. Short Circuiting (&& and ||)

Short-circuiting is a feature of logical operators where the second operand is only evaluated if necessary.

### OR (||) Operator

Returns the first truthy value or the last value if all are falsy.

```javascript
console.log(null || "default"); // 'default'
console.log("Hello" || "default"); // 'Hello'
console.log("" || false || 0 || "fallback"); // 'fallback'
```

### AND (&&) Operator

Returns the first falsy value or the last value if all are truthy.

```javascript
console.log("truthy" && 5 && "last"); // 'last'
console.log("truthy" && 0 && "last"); // 0
```

## 5. The Nullish Coalescing Operator (??)

The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined.

```javascript
const foo = null ?? "default";
console.log(foo); // 'default'

const bar = 0 ?? "default";
console.log(bar); // 0

const baz = "" ?? "default";
console.log(baz); // ''
```

## 6. Looping Arrays: The for-of Loop

The for...of statement creates a loop iterating over iterable objects (arrays, strings, maps, sets, etc.).

```javascript
const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// orange

// With index
for (const [index, fruit] of fruits.entries()) {
  console.log(`${index}: ${fruit}`);
}
// Output:
// 0: apple
// 1: banana
// 2: orange
```

## 7. Enhanced Object Literals

Enhanced object literals provide a more concise syntax for defining object properties and methods.

```javascript
const name = "John";
const age = 30;

// Property shorthand
const person = { name, age };
console.log(person); // { name: 'John', age: 30 }

// Method shorthand
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

console.log(calculator.add(5, 3)); // 8

// Computed property names
const propName = "dynamicProp";
const obj = {
  [propName]: "This is a dynamic property",
};
console.log(obj.dynamicProp); // 'This is a dynamic property'
```

## 8. Optional Chaining (?.)

Optional chaining allows you to safely access nested object properties, even if an intermediate property doesn't exist.

```javascript
const user = {
  name: "Alice",
  address: {
    street: "123 Main St",
  },
};

console.log(user.address?.street); // '123 Main St'
console.log(user.phoneNumbers?.mobile); // undefined

// Can also be used with function calls
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
  dog: {
    sayHello() {
      return "Woof!";
    },
  },
};

console.log(adventurer.dog?.sayHello()); // 'Woof!'
console.log(adventurer.cat?.sayHello?.()); // undefined
```

## 9. Looping Objects: Object Keys, Values, and Entries

These methods allow you to iterate over object properties in different ways.

```javascript
const person = {
  name: "John",
  age: 30,
  job: "developer",
};

// Object.keys()
console.log(Object.keys(person)); // ['name', 'age', 'job']

// Object.values()
console.log(Object.values(person)); // ['John', 30, 'developer']

// Object.entries()
console.log(Object.entries(person));
// [['name', 'John'], ['age', 30], ['job', 'developer']]

// Looping with Object.entries()
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// name: John
// age: 30
// job: developer
```

## 10. Sets

A Set is a collection of unique values.

```javascript
const mySet = new Set([1, 2, 3, 4, 4, 5]);
console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }

// Adding and deleting elements
mySet.add(6);
mySet.delete(2);
console.log(mySet); // Set(5) { 1, 3, 4, 5, 6 }

// Checking for element existence
console.log(mySet.has(4)); // true
console.log(mySet.has(2)); // false

// Set size
console.log(mySet.size); // 5

// Clearing a set
mySet.clear();
console.log(mySet.size); // 0
```

## 11. Maps: Fundamentals

A Map is a collection of key-value pairs where both the keys and values can be of any type.

```javascript
const myMap = new Map();

// Setting key-value pairs
myMap.set("name", "John");
myMap.set(1, "number one");
myMap.set(true, "boolean");

// Getting values
console.log(myMap.get("name")); // 'John'
console.log(myMap.get(1)); // 'number one'

// Checking for key existence
console.log(myMap.has(true)); // true
console.log(myMap.has("age")); // false

// Map size
console.log(myMap.size); // 3

// Deleting entries
myMap.delete(1);
console.log(myMap.size); // 2

// Clearing a map
myMap.clear();
console.log(myMap.size); // 0
```

## 12. Maps: Iteration

Maps are iterable and can be looped over.

```javascript
const myMap = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["job", "engineer"],
]);

// Iterating over keys
for (const key of myMap.keys()) {
  console.log(key);
}
// name
// age
// job

// Iterating over values
for (const value of myMap.values()) {
  console.log(value);
}
// Alice
// 25
// engineer

// Iterating over entries
for (const [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
}
// name: Alice
// age: 25
// job: engineer

// Using forEach
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// name: Alice
// age: 25
// job: engineer
```

## 13. Working With Strings

JavaScript provides various methods for working with strings.

```javascript
const str = "Hello, World!";

// String length
console.log(str.length); // 13

// Accessing characters
console.log(str[0]); // 'H'
console.log(str.charAt(7)); // 'W'

// Finding substrings
console.log(str.indexOf("World")); // 7
console.log(str.includes("Hello")); // true

// Extracting substrings
console.log(str.slice(0, 5)); // 'Hello'
console.log(str.substring(7, 12)); // 'World'

// Changing case
console.log(str.toLowerCase()); // 'hello, world!'
console.log(str.toUpperCase()); // 'HELLO, WORLD!'

// Trimming whitespace
console.log("  trimmed  ".trim()); // 'trimmed'

// Splitting strings
console.log("a,b,c".split(",")); // ['a', 'b', 'c']

// Joining strings
console.log(["a", "b", "c"].join("-")); // 'a-b-c'

// Repeating strings
console.log("abc".repeat(3)); // 'abcabcabc'

// Replacing substrings
console.log(str.replace("World", "JavaScript")); // 'Hello, JavaScript!'
```

Now, let's tasks to practice these concepts:

### Destructuring Arrays and Objects

1. **Task:** Destructure the first and second elements from the array `const arr = [1, 2, 3, 4]` and log them to the console.
2. **Task:** Destructure `name` and `age` properties from the object `const person = { name: 'John', age: 25 }` and log them to the console.
3. **Task:** Use nested destructuring to extract the `title` from the object `const book = { title: 'JavaScript', author: { name: 'John Doe' } }` and log it to the console.

### The Spread Operator (...)

4. **Task:** Create a new array that combines `const arr1 = [1, 2, 3]` and `const arr2 = [4, 5, 6]` using the spread operator and log the result.
5. **Task:** Use the spread operator to create a shallow copy of the array `const arr = [1, 2, 3]` and log the result.
6. **Task:** Merge two objects `const obj1 = { a: 1, b: 2 }` and `const obj2 = { c: 3, d: 4 }` into a new object using the spread operator and log the result.

### Rest Pattern and Parameters

7. **Task:** Create a function `sum` that accepts any number of arguments, sums them up using the rest parameters, and returns the result.
8. **Task:** Destructure the first element and the rest of the elements from the array `const arr = [1, 2, 3, 4]` using the rest pattern and log the result.

### Short Circuiting (&& and ||)

9. **Task:** Use the `||` operator to set a default value for the variable `const user = undefined` and log the result.
10. **Task:** Use the `&&` operator to log a message only if the variable `const isLoggedIn = true` is true.

### The Nullish Coalescing Operator (??)

11. **Task:** Use the nullish coalescing operator to set a default value for `const user = null` and log the result.
12. **Task:** Compare the behavior of `??` and `||` operators with `const value = 0`.

### Looping Arrays: The for-of Loop

13. **Task:** Use the `for-of` loop to iterate over the array `const arr = [1, 2, 3, 4]` and log each element.
14. **Task:** Use the `for-of` loop to iterate over the string `const str = 'Hello'` and log each character.

### Enhanced Object Literals

15. **Task:** Create an object using enhanced object literals with a method `greet` that logs "Hello" to the console.
16. **Task:** Use enhanced object literals to define an object with a property `name` and a method `getName` that returns the name.

### Optional Chaining (?.)

17. **Task:** Use optional chaining to safely access the `name` property from the object `const user = { profile: { name: 'John' } }` and log the result.
18. **Task:** Use optional chaining to log the value of `user.profile.email` only if `user.profile` exists.

### Looping Objects: Object Keys, Values, and Entries

19. **Task:** Use `Object.keys` to log all keys of the object `const obj = { a: 1, b: 2, c: 3 }`.
20. **Task:** Use `Object.values` to log all values of the object `const obj = { a: 1, b: 2, c: 3 }`.
21. **Task:** Use `Object.entries` to log all entries (key-value pairs) of the object `const obj = { a: 1, b: 2, c: 3 }`.

### Sets

22. **Task:** Create a set `const set = new Set([1, 2, 3, 3, 4, 5, 5])` and log the unique values.
23. **Task:** Add a value to a set `const set = new Set()` and check if the value exists using the `has` method.

### Maps: Fundamentals

24. **Task:** Create a map `const map = new Map()` and set key-value pairs `('a', 1)` and `('b', 2)`. Log the map.
25. **Task:** Get the value of a key from the map `const map = new Map([['a', 1], ['b', 2]])` and log the result.

### Maps: Iteration

26. **Task:** Use a `for-of` loop to iterate over the entries of the map `const map = new Map([['a', 1], ['b', 2]])` and log each key-value pair.
27. **Task:** Use the `forEach` method to iterate over the values of the map `const map = new Map([['a', 1], ['b', 2]])` and log each value.

### Working With Strings

28. **Task:** Use the `includes` method to check if the string `const str = 'Hello, World!'` contains the substring 'World' and log the result.
29. **Task:** Use the `slice` method to extract a substring from `const str = 'Hello, World!'` starting from index 7 and log the result.
30. **Task:** Use the `split` method to split the string `const str = 'apple,banana,orange'` into an array of fruits and log the result.
31. **Task:** Use the `replace` method to replace 'World' with 'JavaScript' in the string `const str = 'Hello, World!'` and log the result.
32. **Task:** Use the `toUpperCase` method to convert the string `const str = 'hello'` to uppercase and log the result.
33. **Task:** Use the `trim` method to remove the whitespace from the string `const str = '  hello  '` and log the result.
