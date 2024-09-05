Better if you follow folder structure like this:

```javascript
library-management/
│
├── models/
│   └── modelName.js
├── routes/
│   └── routesName.js
├── app.js/or server  // you can give your own  entry  file name
└── config/
    └── db.js
```

### **Challenge 1: Library Management System**

**Objective:** Build a simple Library Management System where you can store, retrieve, update, and delete book records.

#### **Task:**

- Create a Node.js project and set up a MongoDB connection.
- Create a `Book` model with fields for `title`, `author`, `genre`, `publishedYear`, and `availability`.
- Implement routes to:
  1. Add new books to the library.
  2. Retrieve all available books.
  3. Update the availability status of a book.
  4. Delete a book from the library using its `title`.
- Ensure proper error handling and data validation.

---

### **Challenge 2: Student Portal**

**Objective:** Develop a student portal that allows teachers to manage student records.

#### **Task:**

- Set up a MongoDB database and connect it with your Node.js application.
- Create a `Student` model with fields for `name`, `age`, `grade`, `email`, and `enrollmentStatus`.
- Implement features to:
  1. Add new student records.
  2. View a list of students.
  3. Update student grades based on their `email`.
  4. Mark a student’s `enrollmentStatus` as "active" or "inactive."
- Add validation to ensure that emails are unique and grades follow a valid pattern.

---

### **Challenge 3: Movie Review Application**

**Objective:** Build a Movie Review Application where users can add and review movies.

#### **Task:**

- Set up a MongoDB collection for movies with fields like `title`, `director`, `releaseYear`, `rating`, and `review`.
- Implement routes to:
  1. Add new movies.
  2. Retrieve a list of all movies.
  3. Allow users to submit a review for a movie.
  4. Update or delete a movie by its `title`.
- Ensure that the `rating` is between 1-5 and the `review` is no longer than 500 characters.

---

### **Challenge 4: User Authentication System**

**Objective:** Create a basic User Authentication System that handles user registration and login.

#### **Task:**

- Set up MongoDB and Node.js to handle user data.
- Create a `User` model with fields for `username`, `email`, `password`, and `role` (either 'user' or 'admin').
- Implement routes for:
  1. User registration, ensuring the email is unique and the password is at least 8 characters long.
  2. User login, validating credentials.
  3. Retrieve a user’s profile after login.
- Add error handling for invalid login attempts and duplicate registrations.
