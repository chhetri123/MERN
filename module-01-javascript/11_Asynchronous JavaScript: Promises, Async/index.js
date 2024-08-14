// Task 1: Simple Callback Function
function greetUser(username, callback) {
  console.log(`Hello, ${username}!`);
  callback();
}

greetUser("Alice", () => console.log("Greeting complete"));

// Task 2: Simulating Asynchronous Operations
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 2000);
}

fetchData((data) => console.log("Fetched data:", data));

// Task 3: Callback Hell Simulation
function fetchUserData(callback) {
  setTimeout(() => {
    console.log("User data fetched");
    callback();
  }, 1000);
}

function fetchUserOrders(callback) {
  setTimeout(() => {
    console.log("User orders fetched");
    callback();
  }, 1000);
}

function fetchOrderDetails(callback) {
  setTimeout(() => {
    console.log("Order details fetched");
    callback();
  }, 1000);
}

fetchUserData(() => {
  fetchUserOrders(() => {
    fetchOrderDetails(() => console.log("All data fetched"));
  });
});

// Task 4: Converting Callbacks to Promises
function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 2000);
  });
}

fetchDataPromise().then((data) => console.log("Fetched data:", data));

// Task 5: Chaining Promises
fetchDataPromise()
  .then((data) => {
    console.log("Data:", data);
    return "Process complete";
  })
  .then((message) => console.log(message));

// Task 6: Handling Rejected Promises
function fetchDataWithRejection() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        reject("Data fetch failed");
      } else {
        resolve({ id: 1, name: "John Doe" });
      }
    }, 2000);
  });
}

fetchDataWithRejection()
  .then((data) => console.log("Fetched data:", data))
  .catch((error) => console.error("Error:", error));

// Task 7: Throwing Errors Manually
function checkUserStatus(user) {
  return new Promise((resolve, reject) => {
    if (user.status !== "active") {
      reject(new Error("User is not active"));
    } else {
      resolve(user);
    }
  });
}

checkUserStatus({ id: 1, status: "inactive" })
  .then((user) => console.log("User:", user))
  .catch((error) => console.error("Error:", error));

// Task 8: Consuming Promises with Async/Await
async function processFetchData() {
  try {
    const data = await fetchDataPromise();
    console.log("Data:", data);
    console.log("Process complete");
  } catch (error) {
    console.error("Error:", error);
  }
}

processFetchData();

// Task 9: Returning Values from Async Functions
async function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 2000);
  });
}

getUserData().then((data) => console.log("User Data:", data));

// Task 10: Creating Multiple Promises
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Resolved after 1 second"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Resolved after 2 seconds"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Resolved after 3 seconds"), 3000)
);

Promise.all([promise1, promise2, promise3]).then((results) =>
  console.log("All results:", results)
);

// Task 11: Handling Multiple Rejected Promises
const promise1WithRejection = new Promise((resolve, reject) => {
  setTimeout(
    () => (Math.random() > 0.5 ? resolve("Resolved") : reject("Error")),
    1000
  );
});
const promise2WithRejection = new Promise((resolve) =>
  setTimeout(() => resolve("Resolved"), 2000)
);
const promise3WithRejection = new Promise((resolve) =>
  setTimeout(() => resolve("Resolved"), 3000)
);

Promise.allSettled([
  promise1WithRejection,
  promise2WithRejection,
  promise3WithRejection,
]).then((results) => console.log("All results:", results));

// Task 12: Simple Fetch Request
function fetchPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log("Response:", data))
    .catch((error) => console.error("Error:", error));
}

fetchPost();

// Task 13: Handling Errors in Fetch Request
function fetchPostWithErrorHandling() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log("Response:", data))
    .catch((error) => console.error("Error:", error));
}

fetchPostWithErrorHandling();

// Task 14: Creating a Fetch Wrapper Function
function fetchDataPromise(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(`Fetch error: ${error.message}`);
    });
}

fetchDataPromise("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log("Response:", data))
  .catch((error) => console.error("Error:", error));

// Task 15: Using Fetch API
function fetchPostUsingFetch() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log("Response:", data))
    .catch((error) => console.error("Error:", error));
}

fetchPostUsingFetch();

// Task 16: Handling Fetch Errors
function fetchPostWithFetchErrorHandling() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log("Response:", data))
    .catch((error) => console.error("Error:", error));
}

fetchPostWithFetchErrorHandling();

// Task 17: Chaining Fetch Calls
function fetchUserAndPosts() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((user) => {
      console.log("User:", user);
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      );
    })
    .then((response) => response.json())
    .then((posts) => console.log("Posts:", posts))
    .catch((error) => console.error("Error:", error));
}

fetchUserAndPosts();

// Task 18: Async/Await with Fetch
async function fetchUserAndPostsAsync() {
  try {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await userResponse.json();
    console.log("User:", user);

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const posts = await postsResponse.json();
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUserAndPostsAsync();

// Task 19: Handling Multiple Fetch Requests
async function fetchMultipleData() {
  try {
    const [posts, comments, albums] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
        res.json()
      ),
    ]);

    console.log("Posts:", posts);
    console.log("Comments:", comments);
    console.log("Albums:", albums);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchMultipleData();

// Task 20: Combining Callbacks and Promises
function performOperation(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (callback) {
        callback();
      } else {
        resolve("Operation completed");
      }
    }, 2000);
  });
}

performOperation(() => console.log("Callback executed")).then((message) =>
  console.log(message)
);

// Task 21: Callback to Async/Await Conversion
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "John Doe" });
  }, 2000);
}

function fetchDataPromise() {
  return new Promise((resolve) => {
    fetchDataCallback(resolve);
  });
}

async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAsync();
