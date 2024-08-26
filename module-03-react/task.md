### Mini Project: "Task Manager with Authentication"

This mini project involves building a simple Task Manager application with both a backend (Node.js) and frontend (React). The application will include user authentication, and the frontend will use React's `useContext` and callback functions to manage state and handle events.

#### Project Overview:

- **Backend:** Node.js, Express.js, MongoDB, JWT Authentication.
- **Frontend:** React, Context API, callback functions, Material-UI (optional for styling).
- **Functionality:** Users can sign up, log in, and manage their tasks (create, read, update, delete).

---

### Backend (Node.js + Express + MongoDB):

1. **Setup Node.js Project:**

   - Initialize a Node.js project.
   - Install necessary packages: `express`, `mongoose`, `jsonwebtoken`, `bcryptjs`, `cors`, `dotenv`.
   - Create a folder structure:
     - `controllers/`
     - `models/`
     - `routes/`
     - `middlewares/`
     - `config/`
     - `server.js`

2. **Create User Model:**

   - Define a User schema with fields: `username`, `email`, `password`.
   - Hash passwords before saving using `bcryptjs`.

3. **JWT Authentication:**

   - Create authentication middleware to protect routes.
   - Use `jsonwebtoken` to sign and verify tokens.

4. **User Routes:**

   - POST `/api/users/register`: Register a new user.
   - POST `/api/users/login`: Authenticate user and return a JWT.
   - GET `/api/users/me`: Get the authenticated user's data.

5. **Task Model and Routes:**

   - Define a Task schema with fields: `title`, `description`, `completed`, `userId`.
   - Implement CRUD operations:
     - POST `/api/tasks`: Create a new task.
     - GET `/api/tasks`: Get all tasks for the authenticated user.
     - PUT `/api/tasks/:id`: Update a task.
     - DELETE `/api/tasks/:id`: Delete a task.

6. **Connect to MongoDB:**

   - Use `mongoose` to connect to a MongoDB database.
   - Store user data and tasks in the database.

7. **CORS and Middleware:**
   - Enable CORS for communication between backend and frontend.
   - Implement error handling middleware.

### Frontend (React + Context API):

1. **Setup React Project:**

   - Create a new React project using Create React App or Vite.
   - Install necessary packages: `axios`, `react-router-dom`.

2. **Create Context for Authentication:**

   - Create an `AuthContext` to manage user authentication state.
   - Implement `AuthProvider` to wrap the application and provide auth-related values and functions (e.g., login, logout).

3. **Create Callback Functions:**

   - Define functions for login, logout, and task management inside `AuthContext`.
   - Use `useCallback` to optimize performance by memoizing the functions.

4. **Protected Routes:**

   - Implement protected routes that only authenticated users can access.
   - Redirect unauthenticated users to the login page.

5. **Task Management:**

   - Create a `TaskContext` to manage task state (e.g., tasks, addTask, removeTask).
   - Use `useContext` in components to interact with tasks.

6. **Components:**

   - **Auth Components:**
     - `Login.js`: Login form that calls the login function from `AuthContext`.
     - `Register.js`: Registration form that registers a new user.
   - **Task Components:**
     - `TaskList.js`: Displays all tasks.
     - `TaskForm.js`: Form to add or edit a task.
     - `TaskItem.js`: Individual task with options to edit or delete.

7. **Callback Integration:**

   - Use callback functions from context to manage state updates (e.g., adding a new task, marking a task as completed).

8. **Styling (Optional):**
   - Use Tailwind css for styling the components.

### Extra Challenge:

- **Optional Features:**
  - Implement pagination for tasks.
  - Add task filtering (e.g., show only completed tasks).
  - Add a profile page where users can update their information.
