### **Challenge 1: Basic Routing**

**Objective:** Create a simple Express server with basic routing.

**Instructions:**

1. **Setup:** Initialize a new Node.js project and install Express (`npm init -y` and `npm install express`).
2. **Create Server:** Create an `index.js` file and set up a basic Express server.
3. **Routes:**
   - Create a route for the home page (`/`) that responds with "Welcome to the Home Page."
   - Create a route for an "About" page (`/about`) that responds with "This is the About Page."
   - Create a route for a "Contact" page (`/contact`) that responds with "Contact us at contact@example.com."
4. **Testing:** Run the server and test the routes in your browser or Postman.
5. **Extras:** Add a route that responds with a 404 message for any undefined routes.

---

### **Challenge 2: Serving Static Files**

**Objective:** Serve static files like HTML, CSS, and images using Express.

**Instructions:**

1. **Setup:** Create a folder named `public` in your project root.
2. **Static Files:**
   - Inside the `public` folder, create an `index.html` file with basic HTML content.
   - Add a `style.css` file to style the HTML page.
   - Place an image in the `public` folder.
3. **Express Setup:** In your `index.js`, use Express middleware to serve static files from the `public` folder (`app.use(express.static('public'))`).
4. **Routes:** Set up a route for the home page (`/`) that serves the `index.html` file.
5. **Testing:** Run the server and ensure that the HTML, CSS, and image are loading correctly.
6. **Extras:** Add more static files (e.g., JavaScript) and include them in your HTML page.

---

### **Challenge 3: REST API for a Simple To-Do List**

**Objective:** Create a simple REST API for managing a to-do list.

**Instructions:**

1. **Setup:** Create a new Express project.
2. **In-Memory Data:** Use an array to store the to-do items (e.g., `let todos = []`).
3. **API Endpoints:**
   - **GET `/todos`:** Respond with the list of to-do items.
   - **POST `/todos`:** Add a new to-do item to the list. The to-do item should be passed in the request body (e.g., `{ "task": "Buy groceries" }`).
   - **PUT `/todos/:id`:** Update a to-do item by its ID. The updated task should be passed in the request body.
   - **DELETE `/todos/:id`:** Remove a to-do item by its ID.
4. **Testing:** Use Postman to test all the API endpoints (GET, POST, PUT, DELETE).
5. **Extras:** Implement basic validation (e.g., checking if the task is not empty) and error handling.

---

### **Challenge 4: Dynamic Routing**

**Objective:** Implement dynamic routes using URL parameters.

**Instructions:**

1. **Setup:** Create a new Express project.
2. **Routes with Parameters:**
   - Create a route for displaying user profiles: `/users/:username`.
   - In the route handler, respond with a message that includes the `username` parameter (e.g., "Hello, [username]!").
3. **Advanced Routing:**
   - Create another route for blog posts: `/posts/:postId`.
   - Respond with a message that includes the `postId` parameter (e.g., "Viewing post with ID: [postId]").
4. **Testing:** Run the server and test the routes in your browser or Postman by replacing the parameters with actual values.
5. **Extras:** Add another route that accepts multiple parameters (e.g., `/users/:username/posts/:postId`) and respond with a message that includes both parameters.

---

### **Challenge 5: Building a Simple REST API with Data Persistence**

**Objective:** Extend the To-Do List REST API by adding data persistence using a JSON file.

**Instructions:**

1. **Setup:** Extend the To-Do List project from Challenge 3.
2. **Data Persistence:**
   - Use the `fs` module to read and write the to-do list to a `todos.json` file.
   - On server start, read the `todos.json` file to initialize the in-memory to-do list.
   - After each modification (POST, PUT, DELETE), update the `todos.json` file to save the changes.
3. **Endpoints:** The API endpoints remain the same as in Challenge 3.
4. **Testing:** Test the API with Postman and verify that the data persists across server restarts.
5. **Extras:** Add error handling for file operations (e.g., file not found, read/write errors).
