### Asynchronous JavaScript: Promises, Async/Await, and AJAX

#### Why Asynchronous JavaScript is Needed

JavaScript, by nature, is single-threaded, meaning it executes one piece of code at a time. This can become problematic when dealing with tasks that take time to complete, like fetching data from a server, reading files, or processing large datasets. If JavaScript had to wait for each of these tasks to complete before moving on to the next, the entire application would become unresponsive, leading to poor user experience.

Asynchronous JavaScript allows the language to perform these time-consuming tasks without blocking the execution of other code. This is crucial for creating efficient, responsive web applications.

#### Benefits of Asynchronous JavaScript

- **Improved Performance:** Allows JavaScript to handle multiple operations simultaneously, improving the efficiency of the application.
- **Better User Experience:** Ensures that the application remains responsive, even while performing complex operations in the background.
- **Scalability:** Helps in building scalable applications by handling multiple tasks like API requests, file handling, and animations efficiently.

#### Evolution: Callbacks to Promises to Async/Await

Initially, callbacks were the primary way to handle asynchronous operations in JavaScript. However, callbacks often led to deeply nested structures known as "callback hell," making the code difficult to read and maintain.

Promises were introduced to solve this problem by providing a cleaner and more manageable way to handle asynchronous tasks. They allow chaining and error handling in a more structured way.

Async/Await, introduced in ES2017, built upon Promises and provided a way to write asynchronous code that looks and behaves like synchronous code, further simplifying the process.

### Asynchronous JavaScript: Callbacks, Promises, Async/Await, and AJAX

#### 12.1. **Callbacks**

A callback is a function passed into another function as an argument and is executed after some operation has been completed. Callbacks were the first way to handle asynchronous operations in JavaScript.

**Example:**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 2000);
}

fetchData((message) => {
  console.log(message);
});
```

**Challenges with Callbacks:**

- **Callback Hell:** Deeply nested callbacks can lead to complex and hard-to-read code.

```js
// Fetch user data
getUser(1, (user) => {
  console.log("User:", user);

  // Fetch orders for the user
  getOrders(user.id, (orders) => {
    console.log("Orders:", orders);

    // Fetch details for each order
    getOrderDetails(orders[0].id, (details) => {
      console.log("Order Details:", details);

      // Additional nested callbacks
      getShippingInfo(details.shippingId, (shippingInfo) => {
        console.log("Shipping Info:", shippingInfo);

        // Another level of nesting
        getDeliveryEstimate(shippingInfo.deliveryId, (estimate) => {
          console.log("Delivery Estimate:", estimate);
        });
      });
    });
  });
});

// Mock functions to simulate asynchronous operations
function getUser(userId, callback) {
  setTimeout(() => {
    callback({ id: userId, name: "John Doe" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    callback([
      { id: 101, item: "Laptop" },
      { id: 102, item: "Phone" },
    ]);
  }, 1000);
}

function getOrderDetails(orderId, callback) {
  setTimeout(() => {
    callback({ orderId: orderId, shippingId: 201 });
  }, 1000);
}

function getShippingInfo(shippingId, callback) {
  setTimeout(() => {
    callback({ shippingId: shippingId, deliveryId: 301 });
  }, 1000);
}

function getDeliveryEstimate(deliveryId, callback) {
  setTimeout(() => {
    callback({ deliveryId: deliveryId, estimate: "2 days" });
  }, 1000);
}
```

- **Error Handling:** Managing errors in callback chains is difficult, leading to scattered and messy code.

#### 12.2. **Promises and Async**

Promises were introduced to handle asynchronous operations more gracefully than callbacks. A Promise represents the eventual result of an asynchronous operation.

**Example:**

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched!");
  }, 2000);
});

console.log(promise);
```

#### 12.3. **Consuming Promises**

Promises can be consumed using `.then()` for success and `.catch()` for handling errors.

**Example:**

```javascript
promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
```

#### 12.4. **Chaining Promises**

Promises can be chained together, allowing you to perform a sequence of asynchronous operations.

**Example:**

```javascript
promise
  .then((message) => {
    console.log(message);
    return "Next task";
  })
  .then((nextMessage) => {
    console.log(nextMessage);
  });
```

#### 12.5. **Handling Rejected Promises**

Rejections can be handled with `.catch()` to manage errors gracefully.

**Example:**

```javascript
let failingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Failed to fetch data!");
  }, 2000);
});

failingPromise.catch((error) => {
  console.error(error);
});
```

#### 12.6. **Throwing Errors Manually**

You can throw custom errors within Promises for specific failure conditions.

**Example:**

```javascript
let errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Something went wrong!"));
  }, 2000);
});

errorPromise.catch((error) => {
  console.error(error.message);
});
```

#### 12.7. **Consuming Promises with Async/Await**

Async functions, introduced in ES2017, allow you to write asynchronous code as if it were synchronous. `await` pauses the execution until the Promise resolves.

**Example:**

```javascript
async function fetchData() {
  let result = await promise;
  console.log(result);
}

fetchData();
```

#### 12.8. **Error Handling with try...catch**

Errors in async functions can be handled using `try...catch` blocks, providing a more intuitive way of managing errors compared to `.catch()`.

**Example:**

```javascript
async function fetchData() {
  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

#### 12.9. **Returning Values from Async Functions**

Async functions always return a Promise, and you can return values from an async function, which will be wrapped in a Promise.

**Example:**

```javascript
async function fetchData() {
  return "Data retrieved!";
}

fetchData().then((message) => {
  console.log(message);
});
```

#### 12.10. **Our First AJAX Call: XMLHttpRequest**

AJAX allows web pages to update asynchronously by exchanging data with a web server in the background. `XMLHttpRequest` is the traditional method for making HTTP requests in JavaScript.

**Example:**

```javascript
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

#### 12.11. **Promisifying the XMLHttpRequest Function**

Promisifying converts a callback-based function into a function that returns a Promise, making it easier to manage.

**Example:**

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.example.com/data", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject("Request failed");
      }
    };
    xhr.send();
  });
}

fetchData().then(console.log).catch(console.error);
```

#### 12.12. **Fetch the Request**

The `fetch()` function provides a modern alternative to `XMLHttpRequest`. It returns a Promise and is easier to use for making HTTP requests.

**Example:**

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### Recap: Why Understanding Asynchronous JavaScript Matters

- **Efficient Code Management:** From callbacks to Promises to Async/Await, understanding these concepts allows you to write cleaner, more maintainable asynchronous code.
- **Enhanced User Experience:** Proper handling of asynchronous operations ensures your application remains responsive and user-friendly.
- **Scalability:** Mastering these tools is crucial for building scalable, modern web applications that handle multiple tasks efficiently.

## Task

#### Task 1: **Simple Callback Function**

- **Question:** Create a function named `greetUser` that accepts a username and a callback function. The function should print a greeting message using the username, and then call the callback function.
- **Instruction:** Pass a function that logs "Greeting complete" as the callback to `greetUser`.

---

#### Task 2: **Simulating Asynchronous Operations**

- **Question:** Create a function named `fetchData` that simulates fetching data from a server using `setTimeout`. Pass a callback function that logs the fetched data.
- **Instruction:** The data to be fetched is `{ id: 1, name: 'John Doe' }`, and the delay should be 2 seconds.

---

#### Task 3: **Callback Hell Simulation**

- **Question:** Create a series of nested callbacks to simulate fetching user data, fetching orders for the user, and fetching order details.
- **Instruction:** Use `setTimeout` to simulate each operation with a 1-second delay.

---

#### Task 4: **Converting Callbacks to Promises**

- **Question:** Convert the `fetchData` function from Task 2 to return a promise instead of using a callback.
- **Instruction:** Use `resolve` to return the fetched data after 2 seconds.

---

#### Task 5: **Chaining Promises**

- **Question:** Using the promise from Task 4, create a chain that first fetches data, then logs the data, and finally logs "Process complete".
- **Instruction:** Each step should be done using `.then()`.

---

#### Task 6: **Handling Rejected Promises**

- **Question:** Modify the `fetchData` function to randomly reject the promise 50% of the time with an error message "Data fetch failed".
- **Instruction:** Handle the rejection in the promise chain and log the error message.

---

#### Task 7: **Throwing Errors Manually**

- **Question:** Create a promise function named `checkUserStatus` that throws an error if the user status is not 'active'.
- **Instruction:** Pass an object `{ id: 1, status: 'inactive' }` to the function and handle the error in the promise chain.

---

#### Task 8: **Consuming Promises with Async/Await**

- **Question:** Convert the promise chain from Task 5 into an `async` function using `await`.
- **Instruction:** Ensure that you catch any errors using `try...catch`.

---

#### Task 9: **Returning Values from Async Functions**

- **Question:** Create an `async` function named `getUserData` that returns a user's data after a 2-second delay.
- **Instruction:** Log the returned data when calling the function.

---

#### Task 10: **Creating Multiple Promises**

- **Question:** Create three promises that resolve after 1, 2, and 3 seconds, respectively.
- **Instruction:** Use `Promise.all` to wait for all three promises to resolve and log the result.

---

#### Task 11: **Handling Multiple Rejected Promises**

- **Question:** Modify one of the promises in Task 10 to randomly reject with an error message.
- **Instruction:** Use `Promise.allSettled` to log the status of each promise after all have settled.

---

### Task 12: Simple Fetch Request

- **Question:** Make a fetch request to retrieve the post with ID 1 from the JSONPlaceholder API. Log the response data to the console.
- **Instruction:** : Fetch data from https://jsonplaceholder.typicode.com/posts/1 and log the response.

---

### Task 13: Handling Errors in Fetch Request

- **Question:**Modify the fetch request to handle errors. Ensure you log appropriate error messages if the request fails or if the response is not successful.

---

### Task 14: Creating a Fetch Wrapper Function

**Instruction:**  
Create a wrapper function that returns a promise for a fetch request. The function should take a URL as an argument and resolve with the response data or reject with an error message.

#### Task 15: **Using Fetch API**

- **Question:** Make the same Fetch call as in Task 12
- **Instruction:** Fetch data from `https://jsonplaceholder.typicode.com/posts/1` and log the response.

---

### Task 16: Handling Fetch Errors

**Instruction:**  
Handle errors in a fetch request. Log an error message if the request fails or if the response is not successful.

---

#### Task 17: **Chaining Fetch Calls**

- **Question:** Chain two fetch calls to first fetch a user's data and then fetch the user's posts.
- **Instruction:** Fetch the user data from `https://jsonplaceholder.typicode.com/users/1` and then their posts from `https://jsonplaceholder.typicode.com/posts?userId=1`.

---

#### Task 18: **Async/Await with Fetch**

- **Question:** Convert the chained Fetch calls from Task 17 into an `async` function using `await`.
- **Instruction:** Log the user data and posts sequentially.

---

#### Task 19: **Handling Multiple Fetch Requests**

- **Question:** Use `Promise.all` with the Fetch API to fetch data from multiple endpoints simultaneously.
- **Instruction:** Fetch posts from `https://jsonplaceholder.typicode.com/posts`, comments from `https://jsonplaceholder.typicode.com/comments`, and albums from `https://jsonplaceholder.typicode.com/albums`.

---

#### Task 20: **Combining Callbacks and Promises**

- **Question:** Create a function that accepts a callback and returns a promise. If the callback is passed, execute it; otherwise, resolve the promise.
- **Instruction:** Simulate an asynchronous operation that either executes the callback or resolves the promise after 2 seconds.

---

#### Task 21: **Callback to Async/Await Conversion**

- **Question:** Take the callback-based `fetchData` function from Task 2 and convert it first to use promises, then to use `async/await`.
- **Instruction:** Compare the readability of the code in all three versions.
