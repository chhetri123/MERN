require("dotenv").config(".env");
const express = require("express");
const { mongoose } = require("mongoose");
const app = express();

//
app.use(express.json());

//
const db_url = process.env.db_url;
//Import Model

//

// routes
const userRoute = require("./routes/userRoutes");
// const plaintext = "hello world";

// // const hashPassword = bcrypt.hashSync(plaintext, 10);
// // console.log(hashPassword);
// //
// const passwordHash =
//   "$2b$10$Tdg7xN5VcMaq7sBsDEUQvuKnLuHfFnB.CgVqYHa.NJg/g1eEyIriO";

// bcrypt.compare(plaintext, passwordHash).then((res) => {
//   console.log("Password match:", res);
// });

app.use("/api/auth", userRoute);

// Connect to MongoDB
mongoose
  .connect(db_url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit(1);
  });

app.listen(process.env.port, () => {
  console.log("Server is running on port 3000");
});
