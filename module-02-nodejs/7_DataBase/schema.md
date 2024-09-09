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
