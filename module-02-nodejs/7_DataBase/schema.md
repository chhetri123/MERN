### **1. Install Mongoose**

Mongoose is an ODM (Object Data Modeling) library that helps you define schemas and models for MongoDB in Node.js.

First, you need to install **Mongoose** in your project.

```bash
npm install mongoose
```

### **2. Connect Node.js to MongoDB**

Create a new folder for your project and a file named `app.js`. Inside the file, set up the connection to MongoDB using Mongoose.

```javascript
const mongoose = require("mongoose");

// Connect to MongoDB (Make sure MongoDB is running on your system or use a cloud service like MongoDB Atlas)
const uri = "mongodb://localhost:27017/schoolDB"; // Replace with your MongoDB URI

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
```

### **3. Create a Folder Structure**

You can create a `models` folder to store your MongoDB models. This will help you keep your project structured as it grows.

The structure should look like this:

```
/project-folder
  /models
    student.js
  app.js
  package.json
```

### **4. Define a Schema**

In the `models` folder, create a file named `student.js` where you will define the schema for your `students` collection.

A **schema** defines the structure of documents in a MongoDB collection. For example, the `student.js` file would look like this:

```javascript
const mongoose = require("mongoose");

// Define a schema for the 'students' collection
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Active", // Optional field with default value
  },
});

// Create a model for the schema
const Student = mongoose.model("Student", studentSchema);

// Export the model
module.exports = Student;
```

### **5. Using the Model in `app.js`**

In your `app.js` file, you can now use the `Student` model to interact with the `students` collection in MongoDB.

For example, you can insert new student records or query the collection.

```javascript
const mongoose = require("mongoose");
const Student = require("./models/student"); // Import the Student model

// Connect to MongoDB
const uri = "mongodb://localhost:27017/schoolDB";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Create a new student
    const newStudent = new Student({
      name: "Alice",
      age: 12,
      grade: "7th",
    });

    // Save the new student to the database
    newStudent
      .save()
      .then((student) => {
        console.log("Student saved:", student);
      })
      .catch((err) => {
        console.log("Error saving student:", err);
      });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
```

### **6. CRUD Operations Using Models**

Now that you have the connection and model set up, you can perform basic CRUD (Create, Read, Update, Delete) operations.

#### **a. Create a Student**

Inserting a new document is simple using the `save()` method.

```javascript
const newStudent = new Student({
  name: "Bob",
  age: 13,
  grade: "8th",
});

newStudent
  .save()
  .then((student) => {
    console.log("Student created:", student);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
```

#### **b. Find Students**

Use the `find()` method to retrieve students from the database.

```javascript
Student.find()
  .then((students) => {
    console.log("All students:", students);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
```

#### **c. Update a Student**

You can update a student's data using the `updateOne()` method.

```javascript
Student.updateOne({ name: "Alice" }, { $set: { grade: "8th" } })
  .then(() => {
    console.log("Student updated");
  })
  .catch((err) => {
    console.log("Error updating student:", err);
  });
```

#### **d. Delete a Student**

To delete a student, use the `deleteOne()` method.

```javascript
Student.deleteOne({ name: "Bob" })
  .then(() => {
    console.log("Student deleted");
  })
  .catch((err) => {
    console.log("Error deleting student:", err);
  });
```

### **7. Organize the Code (Best Practices)**

Once you have these operations working, you may want to organize your code further by separating routes, controllers, and models for better project structure. Here's a simple organizational pattern:

```
/project-folder
  /models
    student.js
  /controllers
    studentController.js
  /routes
    studentRoutes.js
  app.js
  package.json
```

- **`models/student.js`**: Contains the schema and model.
- **`controllers/studentController.js`**: Contains the logic to interact with the model (e.g., create, read, update, delete students).
- **`routes/studentRoutes.js`**: Defines the endpoints (e.g., `/students`).
- **`app.js`**: Sets up the server, middleware, and routes.

### **8. Creating a Controller (studentController.js)**

The controller handles the logic for performing operations on the model.

```javascript
const Student = require("../models/student");

// Controller functions for CRUD operations

// Get all students
exports.getAllStudents = (req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(500).json({ error: err.message }));
};

// Create a student
exports.createStudent = (req, res) => {
  const newStudent = new Student(req.body);
  newStudent
    .save()
    .then((student) => res.json(student))
    .catch((err) => res.status(500).json({ error: err.message }));
};
```

### **9. Creating Routes (studentRoutes.js)**

You can create routes for your student-related operations.

```javascript
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Define routes
router.get("/", studentController.getAllStudents);
router.post("/", studentController.createStudent);

module.exports = router;
```

### **10. Setting up Express and Routes in `app.js`**

Finally, you can set up your Express server and use the routes.

```javascript
const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes"); // Import routes

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
const uri = "mongodb://localhost:27017/schoolDB";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Use routes
app.use("/students", studentRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

# Understanding Database Relationships – One-to-Many, One-to-One, and Many-to-Many

In any database, relationships between data are a crucial aspect of designing efficient data models. When designing applications, we often encounter different types of relationships between entities (tables/collections). These relationships are fundamental in both SQL and NoSQL databases, such as MongoDB.

#### Types of Database Relationships:

1. **One-to-One**
2. **One-to-Many (or Many-to-One)**
3. **Many-to-Many**

Let’s go over each one of these relationships with real-life examples and then look at how to implement these relationships using **MongoDB** and **Mongoose**.

---

### 1. **One-to-One Relationship**

**Definition**: In a one-to-one relationship, a record in one collection (table) is related to a single record in another collection (table).

**Real-life Example**:

- A **person** can have only **one passport**, and each **passport** belongs to only **one person**.

#### Example in Node.js (Mongoose):

```js
const mongoose = require("mongoose");

// Define the Person Schema
const personSchema = new mongoose.Schema({
  name: String,
  passport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Passport",
  },
});

// Define the Passport Schema
const passportSchema = new mongoose.Schema({
  passportNumber: String,
  issuedDate: Date,
});

// Create models
const Person = mongoose.model("Person", personSchema);
const Passport = mongoose.model("Passport", passportSchema);

// Example query to populate the passport details of a person
Person.findOne({ name: "John Doe" })
  .populate("passport")
  .exec((err, person) => {
    console.log(person);
  });
```

---

### 2. **One-to-Many (or Many-to-One) Relationship**

**Definition**: In a one-to-many relationship, one record in a collection (table) can be related to multiple records in another collection. However, each of the related records can only be linked to one record in the first collection.

**Real-life Example**:

- A **teacher** can teach **many students**, but each **student** can have only **one teacher** (for a given class or subject).

#### Example in Node.js (Mongoose):

```js
const mongoose = require("mongoose");

// Define the Teacher Schema
const teacherSchema = new mongoose.Schema({
  name: String,
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

// Define the Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
});

// Create models
const Teacher = mongoose.model("Teacher", teacherSchema);
const Student = mongoose.model("Student", studentSchema);

// Example query to populate all students of a teacher
Teacher.findOne({ name: "Mr. Smith" })
  .populate("students")
  .exec((err, teacher) => {
    console.log(teacher);
  });
```

In this example, one teacher has many students, but each student can only have one teacher.

---

### 3. **Many-to-Many Relationship**

**Definition**: In a many-to-many relationship, multiple records in one collection can relate to multiple records in another collection, and vice versa.

**Real-life Example**:

- **Students** can enroll in multiple **courses**, and each **course** can have multiple **students**.

#### Example in Node.js (Mongoose):

```js
const mongoose = require("mongoose");

// Define the Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

// Define the Course Schema
const courseSchema = new mongoose.Schema({
  courseName: String,
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

// Create models
const Student = mongoose.model("Student", studentSchema);
const Course = mongoose.model("Course", courseSchema);

// Example query to populate all courses of a student
Student.findOne({ name: "Alice" })
  .populate("courses")
  .exec((err, student) => {
    console.log(student);
  });

// Example query to populate all students of a course
Course.findOne({ courseName: "Math 101" })
  .populate("students")
  .exec((err, course) => {
    console.log(course);
  });
```

In this case, students can take many courses, and courses can have many students.

---

### `populate()` in Mongoose

The `populate()` method in Mongoose allows you to reference documents in other collections and load them when querying. In our examples, we used `populate()` to load related documents (e.g., loading students for a teacher or courses for a student).

---

### Summary

- **One-to-One**: Each entity in one collection corresponds to exactly one entity in another collection.
- **One-to-Many**: One entity in a collection is related to many entities in another collection, but each related entity refers back to only one entity.
- **Many-to-Many**: Many entities in one collection are related to many entities in another collection.

By designing proper relationships between your data, you can build more structured and scalable applications. Understanding these relationships is crucial in both relational databases (like MySQL) and NoSQL databases (like MongoDB).

---
