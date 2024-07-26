# JavaScript Loops Lecture

---

## 2.22 Iteration: The `for` Loop

### Introduction

The `for` loop is a fundamental iteration construct in JavaScript used to execute a block of code a specific number of times. It consists of three parts: initialization, condition, and final expression.

### Syntax

```javascript
for (initialization; condition; finalExpression) {
  // Code to be executed
}
```

- **Initialization**: Initializes the loop variable.
- **Condition**: Tests the condition before each iteration. If the condition is true, the loop continues; otherwise, it stops.
- **Final Expression**: Updates the loop variable after each iteration.

### Example

```javascript
// Print numbers from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### Key Points

- Ensure the condition will eventually be false to avoid infinite loops.
- The initialization is executed once at the start.
- The final expression is executed after each iteration.

---

## 2.22 Looping Arrays, Breaking and Continuing

### Looping Arrays

The `for` loop is often used to iterate over arrays. You can access each element by its index.

### Example

```javascript
const fruits = ["Apple", "Banana", "Cherry"];

// Loop through the array and log each fruit
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### Breaking Out of a Loop

You can use the `break` statement to exit a loop prematurely.

### Example

```javascript
// Print numbers until 3 and then break the loop
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
```

### Continuing to the Next Iteration

The `continue` statement skips the current iteration and continues with the next one.

### Example

```javascript
// Print numbers from 0 to 4, skipping 2
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
```

---

## 2.23 Looping Backwards and Loops in Loops

### Looping Backwards

You can loop through an array in reverse order by initializing the loop variable to the last index and decrementing it.

### Example

```javascript
const numbers = [1, 2, 3, 4, 5];

// Loop through the array backwards
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
```

### Loops in Loops

Nested loops are used when you need to perform operations on multi-dimensional data structures.

### Example

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Print each element of the 2D array
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
```

---

## 2.24 The `while` Loop

### Introduction

The `while` loop is used to execute a block of code as long as a specified condition remains true. It is often used when the number of iterations is not known beforehand.

### Syntax

```javascript
while (condition) {
  // Code to be executed
}
```

### Example

```javascript
let count = 0;

// Print numbers from 0 to 4
while (count < 5) {
  console.log(count);
  count++;
}
```

### Key Points

- The condition is checked before each iteration.
- Ensure that the loop eventually terminates to avoid infinite loops.

### Infinite Loop Example

An infinite loop occurs when the condition always evaluates to true.

```javascript
// WARNING: This loop will run indefinitely
while (true) {
  console.log("This will run forever");
}
```

## Advance Loops( After Array and Object )

### JavaScript Looping Constructs

#### `forEach` Loop

The `forEach` loop is a method available on arrays in JavaScript. It executes a provided function once for each array element. It's a convenient way to iterate over arrays without needing to manage the loop's index manually.

**Syntax:**

```js
array.forEach(function (currentValue, index, array) {
  // code to be executed for each element
});
```

- `currentValue`: The current element being processed in the array.
- `index` (Optional): The index of the current element being processed in the array.
- `array` (Optional): The array `forEach` was called upon.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

// Output:
// 1
// 2
// 3
// 4
// 5
```

In this example, the `forEach` method iterates over each element in the `numbers` array and logs it to the console.

#### `for...of` Loop

The `for...of` loop is a modern iteration statement for iterable objects like arrays, strings, maps, sets, and more. It creates a loop that iterates over iterable objects and executes a specified statement for each distinct property.

**Syntax:**

```js
for (variable of iterable) {
  // code to be executed for each element
}
```

- `variable`: A different property value is assigned to `variable` on each iteration.
- `iterable`: An object that has iterable properties (e.g., an array, a string, a map, a set).

**Example:**

```js
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}

// Output:
// 1
// 2
// 3
// 4
// 5
```

In this example, the `for...of` loop iterates over each element in the `numbers` array and logs it to the console.

### Key Differences

- **Use Case:**

  - `forEach`: Used exclusively for iterating over arrays.
  - `for...of`: Used for iterating over any iterable objects (arrays, strings, maps, sets, etc.).

- **Control Flow:**

  - `forEach`: Cannot use `break` or `continue` statements to control the loop. It will always iterate through the entire array.
  - `for...of`: Can use `break` and `continue` to control the loop.

- **Scope:**
  - `forEach`: The callback function creates a new scope for each iteration.
  - `for...of`: The loop itself does not create a new scope; only the code block inside the loop creates a new scope.

### Practical Examples

#### Example 1: Using `forEach` to Log Array Elements

```js
const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

// Output:
// apple
// banana
// orange
```

#### Example 2: Using `for...of` to Log Array Elements

```js
const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Output:
// apple
// banana
// orange
```

#### Example 3: Using `for...of` to Log Characters in a String

```js
const message = "Hello, World!";

for (const char of message) {
  console.log(char);
}

// Output:
// H
// e
// l
// l
// o
// ,
//
// W
// o
// r
// l
// d
// !
```

#### Example 4: Using `forEach` with Index and Array

```js
const numbers = [10, 20, 30];

numbers.forEach((number, index, array) => {
  console.log(`Index: ${index}, Value: ${number}, Array: ${array}`);
});

// Output:
// Index: 0, Value: 10, Array: 10,20,30
// Index: 1, Value: 20, Array: 10,20,30
// Index: 2, Value: 30, Array: 10,20,30
```

#### Example 5: Using `for...of` to Iterate Over a Set

```js
const set = new Set(["apple", "banana", "orange"]);

for (const fruit of set) {
  console.log(fruit);
}

// Output:
// apple
// banana
// orange
```
