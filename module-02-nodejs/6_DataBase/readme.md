# MongoDB Database

1. **What?**  
   MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents rather than traditional table-based relational databases. It allows for scalable, high-performance data storage with dynamic schemas.

2. **When?**  
   Use MongoDB when working with applications requiring large-scale data storage, flexible schema design, or real-time analytics. It’s ideal for projects with rapidly changing data structures or for handling unstructured or semi-structured data.

3. **Why?**  
   MongoDB is beneficial because of its flexibility in schema design, horizontal scalability, high performance, and the ability to handle large volumes of data. It’s also well-suited for modern applications that need to evolve quickly and handle diverse data types.

4. **How?**  
   MongoDB can be used by installing the MongoDB server, setting up a database, and interacting with it through a MongoDB client or programmatically using drivers available for various programming languages like Node.js, Python, etc. CRUD operations (Create, Read, Update, Delete) are performed using MongoDB’s query language.

5. **Example**  
   To insert a document into a collection:
   ```javascript
   db.collectionName.insertOne({ name: "John", age: 30, city: "New York" });
   ```
   This inserts a new document into the `collectionName` collection with the fields `name`, `age`, and `city`.

[Mongo Compass Downlaod Link ](https://downloads.mongodb.com/compass/mongodb-compass-1.44.0-win32-x64.exe)

[Documentation](https://www.mongodb.com/docs/mongodb-shell/run-commands/)

## Basics Commands

### 1. **Switch to a Database**

Switch to or create a database:

```bash
use yourDatabaseName
```

Replace `yourDatabaseName` with the name of the database you want to use.

## create a collection

```bash
db.createCollection("myCollection")
```

### 2. **Show Collections**

List all collections in the current database:

```bash
show collections
```

### 3. **Insert a Document**

Insert a single document into a collection:

```javascript
db.collectionName.insertOne({ name: "John", age: 30 });
```

### 4. **Find Documents**

Retrieve all documents from a collection:

```javascript
db.collectionName.find();
```

### 5. **Update a Document**

Update a document in a collection:

```javascript
db.collectionName.updateOne(
  { name: "John" }, // Filter
  { $set: { age: 31 } } // Update
);
```

### 6. **Delete a Document**

Remove a document from a collection:

```javascript
db.collectionName.deleteOne({ name: "John" });
```

### 7. **Count Documents**

Count the number of documents in a collection:

```javascript
db.collectionName.countDocuments();
```

### 8. **Drop a Collection**

Remove an entire collection:

```javascript
db.collectionName.drop();
```

## More Practices

Here are more MongoDB terminal commands that you can use for practice. These commands will help you get comfortable with various MongoDB operations.

### **1. Show All Databases**

List all databases on the MongoDB server:

```bash
show dbs
```

### **2. Create/Switch to a Database**

Switch to a database (will create it if it doesn’t exist):

```bash
use yourDatabaseName
```

### **3. Create a Collection**

Create a new collection in the current database:

```javascript
db.createCollection("yourCollectionName");
```

### **4. Insert Multiple Documents**

Insert multiple documents into a collection:

```javascript
db.yourCollectionName.insertMany([
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 35 },
]);
```

### **5. Find One Document**

Find the first document that matches a query:

```javascript
db.yourCollectionName.findOne({ name: "John" });
```

### **6. Find All Documents**

Retrieve all documents in a collection:

```javascript
db.yourCollectionName.find().pretty();
```

The `pretty()` method formats the output for easier reading.

### **7. Find Documents with a Query**

Find documents that match a specific condition:

```javascript
db.yourCollectionName.find({ age: { $gt: 25 } }).pretty();
```

This finds all documents where the `age` field is greater than 25.

### **8. Update One Document**

Update a single document in a collection:

```javascript
db.yourCollectionName.updateOne(
  { name: "John" }, // Filter
  { $set: { age: 31 } } // Update
);
```

### **9. Update Multiple Documents**

Update multiple documents that match a condition:

```javascript
db.yourCollectionName.updateMany(
  { age: { $lt: 30 } }, // Filter
  { $set: { status: "Active" } } // Update
);
```

### **10. Replace a Document**

Replace an entire document with a new one:

```javascript
db.yourCollectionName.replaceOne(
  { name: "John" }, // Filter
  { name: "John", age: 32, city: "New York" } // New document
);
```

### **11. Delete One Document**

Delete a single document from a collection:

```javascript
db.yourCollectionName.deleteOne({ name: "Jane" });
```

### **12. Delete Multiple Documents**

Delete multiple documents that match a condition:

```javascript
db.yourCollectionName.deleteMany({ age: { $lt: 30 } });
```

### **13. Drop a Collection**

Delete a collection and all of its documents:

```javascript
db.yourCollectionName.drop();
```

### **14. Drop a Database**

Delete the current database:

```javascript
db.dropDatabase();
```

### **15. Count Documents**

Count the number of documents in a collection:

```javascript
db.yourCollectionName.countDocuments();
```

### **16. Aggregate Data**

Perform aggregation operations, such as grouping and summing:

```javascript
db.yourCollectionName.aggregate([
  { $match: { age: { $gt: 25 } } }, // Filter
  { $group: { _id: "$status", total: { $sum: 1 } } }, // Group and sum
]);
```

### **17. Create an Index**

Create an index on a field to improve query performance:

```javascript
db.yourCollectionName.createIndex({ name: 1 });
```

### **18. List All Indexes**

List all indexes for a collection:

```javascript
db.yourCollectionName.getIndexes();
```

### **19. Explain a Query**

Analyze the query performance:

```javascript
db.yourCollectionName.find({ age: { $gt: 25 } }).explain("executionStats");
```

### **20. Rename a Collection**

Rename a collection:

```javascript
db.yourCollectionName.renameCollection("newCollectionName");
```

## Challange Task

Here are a few beginner-friendly challenges that focus on basic MongoDB operations. These tasks will help students get comfortable with MongoDB commands and working with collections and documents.

### **Challenge 1: Create and Manage a Database**

1. **Create a Database**: Use the `use` command to create and switch to a new database called `school`.

   - Command: `use school`

2. **Create a Collection**: Create a collection named `students` in the `school` database.

   - Command: `db.createCollection("students")`

3. **Insert Documents**: Insert the following student records into the `students` collection:

   ```json
   { "name": "Alice", "age": 12, "grade": "7th" }
   { "name": "Bob", "age": 13, "grade": "8th" }
   { "name": "Charlie", "age": 11, "grade": "6th" }
   ```

4. **View All Documents**: List all documents in the `students` collection.

   - Command: `db.students.find().pretty()`

5. **Count the Documents**: Count how many students are in the `students` collection.
   - Command: `db.students.countDocuments()`

### **Challenge 2: Querying and Updating Data**

1. **Find Specific Documents**: Find all students who are in the 7th grade.

   - Command: `db.students.find({ grade: "7th" }).pretty()`

2. **Update a Document**: Bob has moved up to the 9th grade. Update his grade in the `students` collection.

   - Command:
     ```javascript
     db.students.updateOne({ name: "Bob" }, { $set: { grade: "9th" } });
     ```

3. **Verify the Update**: Use the `find` command to verify that Bob's grade has been updated.
   - Command: `db.students.find({ name: "Bob" }).pretty()`

### **Challenge 3: Advanced Document Management**

1. **Add Multiple Documents**: Insert the following new student records into the `students` collection:

   ```json
   { "name": "David", "age": 12, "grade": "7th" }
   { "name": "Eva", "age": 14, "grade": "9th" }
   ```

2. **Delete a Document**: Charlie has left the school. Remove his record from the `students` collection.

   - Command: `db.students.deleteOne({ name: "Charlie" })`

3. **Aggregate Data**: Group students by their grade and count how many students are in each grade.
   - Command:
     ```javascript
     db.students.aggregate([
       { $group: { _id: "$grade", totalStudents: { $sum: 1 } } },
     ]);
     ```

### **Challenge 4: Indexing and Performance**

1. **Create an Index**: Create an index on the `name` field of the `students` collection to optimize search queries by student name.

   - Command: `db.students.createIndex({ name: 1 })`

2. **Check Indexes**: List all indexes on the `students` collection.

   - Command: `db.students.getIndexes()`

3. **Explain a Query**: Use the `explain` command to analyze the performance of a query that finds all students in the 9th grade.
   - Command: `db.students.find({ grade: "9th" }).explain("executionStats")`

### **Challenge 5: Dropping Collections and Databases**

1. **Drop a Collection**: Drop the `students` collection from the `school` database.

   - Command: `db.students.drop()`

2. **Verify the Drop**: Check if the `students` collection has been successfully removed.

   - Command: `show collections`

3. **Drop the Database**: Drop the `school` database entirely.
   - Command: `db.dropDatabase()`
