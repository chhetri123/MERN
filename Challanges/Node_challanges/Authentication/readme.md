# Project 1: Simple Blog with Authentication

#### **Project Description**

The project is a simple blog platform where users can sign up, log in, and create blog posts. Each user can only create and view their own posts.

---

### **1. Routes**

Here are the endpoints for the "Simple Blog with Authentication" project:

### **Routes to Implement:**

1. **POST `/api/users/register`**
2. **POST `/api/users/login`**
3. **GET `/api/users/`**
4. **POST `/api/users/logout`**
5. **POST `/api/posts/new`** for creating new posts
6. **GET `/api/posts/`** for fetching posts
7. **PATCH `/api/posts/:id`** for updating posts
8. **DELETE `/api/posts/:id`** for deleting posts

---

### **2. Raw Schemas**

```javascript
// Raw Schemas (not using Mongoose syntax, just for illustration)

const UserSchema = {
  username: String, // The user's chosen username (required, unique)
  email: String, // User's email (required, unique)
  password: String, // Hashed password (required)
  createdAt: Date, // Date when the user was created
  ..... // you can add more
};

const PostSchema = {
  title: String, // Title of the blog post (required)
  body: String, // Content of the blog post (required)
  createdAt: Date, // Timestamp when the post was created
  author: String, // ID or username of the user who created the post (required)
  .... // you can add more fields
};
```

---

### **3. Middleware**

- **Authentication Middleware**
  This middleware will ensure that only authenticated users can create and view blog posts

---

### **Project Requirements**

- **Authentication** using hashed passwords and sessions or JWT tokens.
- **User Schema** to store user details and hashed passwords.
- **Post Schema** to store blog posts. Each post should be tied to a user.
- **Basic CRUD operations** (only creation and fetching for now).
- **Middleware**

---

# Project 2

In this project, you will be building a **Node.js** application that implements **user authentication**. The goal is to create a small web application where users can sign up, log in, and manage their profiles. This project focuses on using **Mongoose** for database schema design, **bcrypt** for password hashing, and **middleware** for validation and handling requests.

#### Project Features:

- **User Registration and Login** (Authentication)
- **Profile Management**
- **Input Validation Using Middleware**
- **Password Hashing with bcrypt**
- **Mongoose for Database Management**

#### Routes to Implement:

1. **POST `/api/users/register`**: Register a new user by providing the necessary information.
2. **POST `/api/users/login`**: Authenticate a user with email and password.
3. **GET `/api/users/profile`**: Retrieve the profile details of the logged-in user (after authentication).
4. **PATCH `/api/users/profile`**: Update the user profile (e.g., username, email, or other properties).
5. **POST `/api/users/logout`**: Log out the user by invalidating the session or token.
6. **GET `/api/task/`**: Retrieve the all the task of the users (after authentication).
7. **POST `/api/task/new`**: Create a new Task (after authentication).
8. **PATCH `/api/task/:id`**: Update the task (after authentication)
9. **DELETE `/api/task/:id`**: Delete the Task (after authentication)

#### Raw Schemas

You will design 3 schemas: **User**, **Profile**, and **Task**. These schemas will be simple object representations for now and will help build your understanding of Mongoose schema design.

1. **User Schema**:

   - **email**: String, required, unique, validated as an email.
   - **password**: String, required, hashed before saving.
   - **username**: String, required, unique.
   - **createdAt**: Date, default: current date.
   - **isActive**: Boolean, default: true (to indicate if the user is active).

2. **Profile Schema**:

   - **userId**: ObjectId, required (will reference the user's ID later).
   - **bio**: String, optional (a short biography about the user).
   - **socialLinks**: Array of Strings, optional (e.g., social media profile links).
   - **profileImage**: String, optional (URL of the profile image).
   - **updatedAt**: Date, default: current date, auto-updated when the profile is changed.

3. **Task Schema**:
   - **userId**: ObjectId, required (will reference the user's ID).
   - **title**: String, required (title of the task).
   - **description**: String, optional (task details).
   - **dueDate**: Date, optional (when the task is due).
   - **completed**: Boolean, default: false (whether the task is completed).
   - **createdAt**: Date, default: current date.

#### Middleware:

1. **Input Validation Middleware**: Create middleware to validate inputs such as email, password length, and required fields in the registration and login routes.

   - **Validate registration data**: Check that all fields are present and valid.
   - **Validate login data**: Ensure that email and password are provided.

   Example:

   ```javascript
   function validateRegisterInput(req, res, next) {
     const { email, password, username } = req.body;
     if (!email || !password || !username) {
       return res.status(400).json({ message: "All fields are required" });
     }
     // Add more validations like email format, password strength, etc.
     next();
   }
   ```

2. **Authentication Middleware**: Token Verification Middleware to check whether user is logged in or not

#### Detailed Steps for Students:

1. **Setting up the Project**:
   - Initialize a new **Node.js** project with **Express**.
   - Install necessary dependencies: `bcrypt`, `mongoose`, `express`, `dotenv`
   - Set up **MongoDB** connection using **Mongoose**.
2. **User Authentication**:

   - Create routes for user registration and login.
   - Implement password hashing using **bcrypt**.
   - Validate user input using middleware.
   - Use **Mongoose** to save and retrieve user data.

3. **Profile Management**:
   - Create a **Profile** schema and routes for managing user profiles.
   - Use the `userId` to link each profile to a specific user.
4. **Task Management**:
   - Create a **Task** schema and allow users to create, update, and delete tasks.
   - Tasks should be linked to the user via `userId`.
