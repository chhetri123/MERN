### 1. Introduction to Functions

Functions are one of the fundamental building blocks in JavaScript. They allow you to group a series of statements together to perform a specific task. Functions can be reused, making your code more modular and maintainable.

#### Basic Syntax

```javascript
function functionName(parameters) {
  // code to be executed
}
```

Example:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Hello, Alice!
```

### 2. Function Declarations vs. Expressions

#### Function Declarations

A function declaration defines a named function. This function can be called before it is defined in the code due to hoisting.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```

#### Function Expressions

A function expression defines a function as part of an expression. This function can be anonymous or named.

```javascript
const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(5, 3)); // 2
```

#### Differences

1. **Hoisting**: Function declarations are hoisted to the top of their scope, meaning they can be called before they are defined. Function expressions are not hoisted.
2. **Syntax**: Function declarations start with the `function` keyword, followed by the function name. Function expressions can be assigned to variables.

### 3. Arrow Functions

Arrow functions provide a shorter syntax for writing functions and do not bind their own `this`.

#### Basic Syntax

```javascript
const functionName = (parameters) => {
  // code to be executed
};
```

Example:

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(3, 4)); // 12
```

#### Key Features

1. **Concise Syntax**: Arrow functions provide a shorter syntax.
2. **No `this` Binding**: Arrow functions do not have their own `this`, which makes them useful in certain contexts like callbacks and array methods.

Example with Array Method:

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]
```

### 4. Functions Calling Other Functions

Functions can call other functions, making it possible to build complex operations from simpler ones.

#### Example

```javascript
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(2, 3, add)); // 5
console.log(calculate(2, 3, multiply)); // 6
```
