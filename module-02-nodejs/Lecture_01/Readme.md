# Node.js Fundamentals

## 2.1. Understanding the Node.js Event Loop

The event loop is a fundamental concept in Node.js that enables non-blocking I/O operations despite JavaScript being single-threaded.

### Key Points:

- Allows Node.js to perform non-blocking I/O operations
- Handles executing callbacks, network I/O, and timers
- Operates in a loop, continuously checking for and executing tasks

### Event Loop Phases:

1. Timers: Execute callbacks scheduled by `setTimeout()` and `setInterval()`
2. Pending callbacks: Execute I/O callbacks deferred to the next loop iteration
3. Idle, prepare: Internal use only
4. Poll: Retrieve new I/O events; execute I/O related callbacks
5. Check: Execute `setImmediate()` callbacks
6. Close callbacks: Execute close event callbacks

### Example: Demonstrating the Event Loop

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout!");
}, 0);

Promise.resolve("Promise!").then((res) => console.log(res));

console.log("End");
```

![Event loop Demo](https://miro.medium.com/v2/resize:fit:1400/0*HMNxUG9rIjy30Cfn.gif)
Output:

```
Start
End
Promise!
Timeout!
```

[For Real demo ](https://www.jsv9000.app/)

## 2.2. Asynchronous Programming in Node.js

Asynchronous programming is a core feature of Node.js, allowing it to handle multiple operations without blocking the execution thread.

### Key Concepts:

- Non-blocking I/O
- Event-driven architecture
- Callbacks, Promises, and Async/Await

## 2.3. Callbacks and Promises

Callbacks and Promises are two ways to handle asynchronous operations in Node.js.

### Callbacks

Callbacks are functions passed as arguments to other functions, to be executed once an asynchronous operation completes.

Example:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback(null, "Data fetched successfully");
  }, 2000);
}

fetchData((err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log(data);
});
```

### Promises

Promises provide a more structured way to handle asynchronous operations, allowing for better error handling and chaining.

Example:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err));
```

### Challenge:

Rewrite the file reading example from section 2.2 using Promises instead of callbacks.

## 2.4. Working with Async/Await

Async/Await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code.

### Key Points:

- `async` functions always return a Promise
- `await` can only be used inside an `async` function
- Makes asynchronous code more readable and maintainable

### Example:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}

getData();
```

### Challenge:

Create an async function that fetches data from two different sources (you can simulate these with Promise-returning functions) and combines the results. Handle potential errors appropriately.

## Final Challenge: Asynchronous File Operations

Create a Node.js script that performs the following operations:

1. Read the contents of a file named 'input.txt'
2. Convert the contents to uppercase
3. Write the uppercase contents to a new file named 'output.txt'
4. Log a success message once all operations are complete

Implement this challenge using:

- Callbacks
- Promises
- Async/Await
