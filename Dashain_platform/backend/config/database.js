const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully");
  } catch (e) {
    console.error(`Error connecting to the database: ${e.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
