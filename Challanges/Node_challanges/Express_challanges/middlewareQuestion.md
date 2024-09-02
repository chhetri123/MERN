### **Challenge 1: Implementing Global Middleware**

**Objective:** Create an Express server with a global middleware that logs the request method and URL for each incoming request.

**Instructions:**

1. **Setup:** Initialize a new Node.js project and install Express.
2. **Global Middleware:**
   - In your `index.js`, create a global middleware that logs the request method and URL (e.g., `GET /about`).
   - Use `app.use()` to apply this middleware to all routes.
3. **Routes:**
   - Create at least three routes (e.g., `/`, `/about`, `/contact`) to test the global middleware.
4. **Testing:** Run the server and make requests to different routes. Check the console to see if the middleware logs the correct information.

---

### **Challenge 2: Creating a Custom Middleware for Authentication**

**Objective:** Create a custom middleware that checks for an authentication token in the request headers.

**Instructions:**

1. **Custom Middleware:**
   - Create a middleware function that checks if a request header `Authorization` contains a valid token (e.g., `Bearer mysecrettoken`).
   - If the token is missing or invalid, respond with a `403 Forbidden` status and an error message.
   - If the token is valid, allow the request to proceed to the next middleware or route handler.
2. **Protected Route:**
   - Create a protected route (e.g., `/dashboard`) that requires the custom authentication middleware.
3. **Testing:** Test the route with and without the `Authorization` header using Postman.

---

### **Challenge 3: Logging Request Time with Global Middleware**

**Objective:** Extend the global middleware to log the time each request was made.

**Instructions:**

1. **Extend Global Middleware:**
   - Modify the global middleware to log the current timestamp in addition to the request method and URL.
   - Format the timestamp as `YYYY-MM-DD HH:mm:ss` using the native JavaScript `Date` object or a library like `moment.js`.
2. **Routes:** Use the same routes from Challenge 1 to test the middleware.
3. **Testing:** Ensure that the log entries include the correct timestamp for each request.

---

### **Challenge 4: Implementing Error-Handling Middleware**

**Objective:** Create an error-handling middleware that catches and responds to errors from other middleware or routes.

**Instructions:**

1. **Error-Handling Middleware:**
   - Create a global error-handling middleware using four parameters (`err, req, res, next`).
   - In the middleware, check if the error is an instance of `Error`. If it is, respond with a `500 Internal Server Error` status and an error message.
   - If the error is not an instance of `Error`, respond with a `400 Bad Request` status and a different error message.
2. **Simulate Errors:**
   - Create a route that deliberately throws an error to test the error-handling middleware.
   - Add a custom middleware that throws an error to simulate an error scenario.
3. **Testing:** Trigger the errors by accessing the route and verify that the error-handling middleware responds appropriately.

---

### **Challenge 5: Custom Middleware for Request Validation**

**Objective:** Create a custom middleware that validates the request body for specific routes.

**Instructions:**

1. **Validation Middleware:**
   - Create a middleware function that checks if the request body contains specific fields (e.g., `name` and `email`).
   - If the fields are missing, respond with a `400 Bad Request` status and a message indicating the missing fields.
   - If the fields are present, allow the request to proceed to the next middleware or route handler.
2. **Apply Middleware:**
   - Apply the validation middleware to a POST route (e.g., `/register`).
3. **Testing:** Test the route with valid and invalid request bodies using Postman to ensure the middleware works correctly.

---

### **Challenge 6: Project Challenge - Building a User Management System with Middleware**

**Objective:** Build a simple user management system that integrates global, custom, and error-handling middleware.

**Instructions:**

1. **Setup:** Initialize a new Node.js project and install Express.
2. **Global Middleware:**
   - Implement global middleware to log the request method, URL, and timestamp.
3. **Custom Middleware:**
   - Implement authentication middleware to protect certain routes (e.g., `/users`, `/users/:id`).
   - Implement request validation middleware for routes that handle user creation and updates.
4. **Error-Handling Middleware:**
   - Implement error-handling middleware to catch and respond to any errors that occur in the application.
5. **Routes:**
   - **GET `/users`:** Retrieve a list of users (protected route).
   - **POST `/users`:** Create a new user (validate request body).
   - **PUT `/users/:id`:** Update user information by ID (validate request body and protected route).
   - **DELETE `/users/:id`:** Delete a user by ID (protected route).
6. **In-Memory Data:** Use an array to store user data (e.g., `let users = []`).
7. **Testing:** Test all routes with valid and invalid inputs to ensure the middleware works as expected.
8. **Extras:** Add more advanced features like role-based access control or rate-limiting middleware.

### Folder Structure Challange

- convert the final challange by adding task functionality to this folder structure:

```
/task-manager
├── /controller
│   ├── taskController.js
│   └── userController.js
├── /routes
│   ├── taskRoutes.js
│   └── userRoutes.js
├── /middleware
│   ├── auth.js
│   ├── logger.js
│   └── errorHandler.js
└── index.js

```
