const { MongoClient } = require("mongodb");

// Connection URL
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    console.log("Connected to MongoDB");

    // Select the database
    const db = client.db("myDatabase");

    // Explicitly create a collection
    await db.createCollection("myCollection");
    console.log("Collection created!");

    // Insert a document into the collection (optional)
    await db.collection("myCollection").insertOne({ name: "Alice", age: 25 });
    console.log("Document inserted!");
  } finally {
    // Close the connection
    await client.close();
  }
}

run().catch(console.dir);
