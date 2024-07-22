### Lecture 2.8: JavaScript Releases: ES5, ES6+ and ESNext

#### Overview

JavaScript is an evolving language, with new features and improvements added over time. Understanding the different versions and their features is essential for writing modern and efficient JavaScript code.

#### ES5 (ECMAScript 5)

Released in 2009, ES5 introduced several important features and improvements over previous versions:

- **Strict Mode:** A way to opt into a restricted variant of JavaScript, which helps in catching common coding errors and preventing insecure actions.
- **Array Methods:** `forEach`, `map`, `filter`, `reduce`, `some`, `every`
- **JSON Support:** `JSON.parse`, `JSON.stringify`
- **Object Methods:** `Object.create`, `Object.defineProperty`, `Object.keys`

Example:

```javascript
"use strict";

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const person = {
  name: "John",
  age: 30,
};
console.log(Object.keys(person)); // ['name', 'age']
```

#### ES6 (ECMAScript 2015)

Released in 2015, ES6 is one of the most significant updates to JavaScript, adding many new features and syntax improvements:

- **Let and Const:** Block-scoped variable declarations.
- **Arrow Functions:** Shorter syntax for writing functions.
- **Classes:** Syntactic sugar for working with prototypes and creating objects.
- **Template Literals:** String literals allowing embedded expressions.
- **Destructuring:** A way to unpack values from arrays or properties from objects.
- **Modules:** `import` and `export` for modular code.
- **Promises:** For handling asynchronous operations.
- **Default Parameters, Rest and Spread Operators:** Improved function parameter handling.

Example:

```javascript
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!

const sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person("Bob", 25);
console.log(person); // Person { name: 'Bob', age: 25 }

import { add } from "./math.js";
console.log(add(2, 3)); // 5
```

#### ES6+ (Beyond ES6)

Subsequent versions of ECMAScript have continued to add new features. These updates are often referred to as ES6+ or ESNext:

- **ES7 (2016):** `Array.prototype.includes`, Exponentiation Operator (`**`)
- **ES8 (2017):** `async/await` for handling asynchronous code, Object entries, values, and `Object.getOwnPropertyDescriptors`
- **ES9 (2018):** Asynchronous Iteration, Rest/Spread Properties
- **ES10 (2019):** `Array.prototype.flat`, `Array.prototype.flatMap`, `Object.fromEntries`
- **ES11 (2020):** Optional Chaining, Nullish Coalescing Operator

Example:

```javascript
const arr = [1, 2, [3, 4]];
console.log(arr.flat()); // [1, 2, 3, 4]

const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]

const getUser = async (id) => {
  const response = await fetch(`https://api.example.com/users/${id}`);
  return await response.json();
};
getUser(1).then((user) => console.log(user));
```

#### ESNext

Refers to the features currently in the proposal stage that may be added to future versions of ECMAScript. These features are constantly evolving and include new syntax, APIs, and improvements.

### Lecture 2.9: Activating Strict Mode

#### Overview

Strict mode in JavaScript is a way to opt into a restricted variant of the language, which eliminates some silent errors, improves performance, and provides more warnings for problematic code.

#### Enabling Strict Mode

To enable strict mode, add the following directive at the beginning of your script or function:

```javascript
"use strict";
```

#### Benefits of Strict Mode

- **Eliminates Silent Errors:** Throws errors for actions that would otherwise fail silently.
- **Prevents Accidental Globals:** Disallows the use of undeclared variables.
- **Ensures Secure `this`:** In strict mode, `this` remains `undefined` in functions called as functions, rather than defaulting to the global object.
- **Disallows Duplicates:** Prohibits duplicate parameter names or object properties.

#### Examples of Strict Mode Errors

```javascript
"use strict";

// 1. Using an undeclared variable throws an error
// x = 3.14; // ReferenceError: x is not defined

// 2. Deleting an undeletable property throws an error
// delete Object.prototype; // TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

// 3. Duplicating a parameter name throws an error
// function sum(a, a, c) { // SyntaxError: Duplicate parameter name not allowed in this context
//   return a + a + c;
// }

// 4. Assigning to a non-writable property throws an error
const obj = {};
Object.defineProperty(obj, "prop", { value: 42, writable: false });
// obj.prop = 77; // TypeError: Cannot assign to read-only property 'prop' of object '#<Object>'

// 5. `this` is undefined in functions that are not methods
function foo() {
  console.log(this); // undefined
}
foo();
```

#### Summary

- **ES5**: Introduced strict mode, array methods, JSON support, and object methods.
- **ES6**: Major update with let/const, arrow functions, classes, template literals, destructuring, modules, promises, and more.
- **ES6+**: Includes features like async/await, optional chaining, and other modern additions.
- **Strict Mode**: A way to write more secure and performant JavaScript by catching errors and prohibiting certain actions.
