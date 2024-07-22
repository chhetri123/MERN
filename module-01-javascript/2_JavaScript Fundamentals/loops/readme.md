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
