# Advanced JavaScript Functions

## Default Parameters

Default parameters allow you to initialize named parameters with default values if no value or `undefined` is passed.

### Example

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!
```

## How Passing Arguments Works: Value vs. Reference

In JavaScript, primitive data types are passed by value, while objects are passed by reference.

### Example: Passing by Value

```javascript
let a = 10;
function changeValue(x) {
  x = 20;
}
changeValue(a);
console.log(a); // 10
```

### Example: Passing by Reference

```javascript
let obj = { prop: 10 };
function changeProperty(o) {
  o.prop = 20;
}
changeProperty(obj);
console.log(obj.prop); // 20
```

## First-Class and Higher-Order Functions

### First-Class Functions

JavaScript treats functions as first-class citizens, meaning they can be stored in variables, passed as arguments, and returned from other functions.

### Higher-Order Functions

Higher-order functions are functions that take other functions as arguments or return functions as their result.

### Example: Higher-Order Function

```javascript
function higherOrderFunction(callback) {
  return callback();
}

function sayHello() {
  return "Hello!";
}

console.log(higherOrderFunction(sayHello)); // Hello!
```

## Functions Accepting Callback Functions

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.

### Example

```javascript
function fetchData(callback) {
  // Simulate a data fetch
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((message) => {
  console.log(message); // Data fetched
});
```

## Functions Returning Functions

Functions can also return other functions.

### Example

```javascript
function createMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10
```

## The `call` and `apply` Methods

The `call` and `apply` methods are used to invoke functions with a specific `this` context.

### Example: `call`

```javascript
function greet() {
  console.log(`Hello, ${this.name}`);
}

const person = { name: "Alice" };
greet.call(person); // Hello, Alice
```

### Example: `apply`

```javascript
function introduce(greeting, age) {
  console.log(`${greeting}, I am ${this.name} and I am ${age} years old`);
}

const person = { name: "Bob" };
introduce.apply(person, ["Hi", 30]); // Hi, I am Bob and I am 30 years old
```

## The `bind` Method

The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value.

### Example

```javascript
const person = {
  name: "Charlie",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

const greet = person.greet.bind(person);
greet(); // Hello, Charlie
```

## Immediately Invoked Function Expressions (IIFE)

An IIFE is a function that runs as soon as it is defined.

### Example

```javascript
(function () {
  console.log("IIFE executed");
})(); // IIFE executed
```

## Closures

A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.

### Example

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const closureExample = outerFunction("outside");
closureExample("inside"); // Outer: outside, Inner: inside
```

# Currying and Partial Application in JavaScript

## Introduction

Currying and partial application are powerful techniques in JavaScript that can help you create more flexible and reusable functions. This guide will introduce these concepts with simple, beginner-friendly explanations.

## Currying

### What is Currying?

Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions that each take a single argument. Instead of passing all arguments at once, you pass them one by one.

### How Currying Works

In currying, a function that originally takes multiple arguments is split into multiple functions, each taking one argument. When you call the curried function with the first argument, it returns a new function that takes the next argument. This process continues until all arguments are provided, and the final function returns the result.

### Benefits of Currying

1. **Function Reusability**: Currying allows you to create new functions by fixing some arguments of the original function.
2. **Function Composition**: It enables better function composition, making your code more modular and easier to understand.
3. **Deferred Execution**: Curried functions can be partially applied and executed later, which can be useful in event-driven or asynchronous programming.

## Partial Application

### What is Partial Application?

Partial application is a technique where you create a new function by pre-filling some of the arguments of the original function. This new function takes the remaining arguments and completes the operation.

### How Partial Application Works

In partial application, you call a function with fewer arguments than it expects. The function returns a new function that takes the remaining arguments. Once all arguments are provided, the new function executes the original function with the complete set of arguments.

### Benefits of Partial Application

1. **Simplified Functions**: You can create simpler functions with preset arguments, reducing the need for repeated code.
2. **Improved Readability**: Partially applied functions can make your code more readable by clearly indicating the intention and context of the operation.
3. **Enhanced Flexibility**: Like currying, partial application allows you to create flexible and reusable functions that can adapt to different scenarios.

## Conclusion

Currying and partial application are useful techniques in JavaScript that enable you to create more modular, reusable, and flexible functions. By breaking down functions into smaller, single-argument functions (currying) or pre-filling some arguments (partial application), you can write cleaner and more maintainable code. Experimenting with these techniques will help you understand their benefits and how they can be applied to improve your JavaScript programming.
