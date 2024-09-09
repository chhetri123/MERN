require("dotenv").config(".env");
const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const bcrypt = require("bcrypt");

//
app.use(express.json());

//
const db_url = process.env.db_url;
//Import Model

const User = require("./model/userModel");
//
// const plaintext = "hello world";

// // const hashPassword = bcrypt.hashSync(plaintext, 10);
// // console.log(hashPassword);
// //
// const passwordHash =
//   "$2b$10$Tdg7xN5VcMaq7sBsDEUQvuKnLuHfFnB.CgVqYHa.NJg/g1eEyIriO";

// bcrypt.compare(plaintext, passwordHash).then((res) => {
//   console.log("Password match:", res);
// });

app.post("/signup", async (req, res) => {
  try {
    // {username,password,email, conformPassword}
    const { username, password, email, confirmPassword } = req.body;
    // conformPassword and pasword ==> are same ?
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    // Check Wheather Email is already Used or Registered or Not
    const user = await User.findOne({
      email: email,
    });
    if (user) {
      return res.status(400).json({ error: "Email is already registered" });
    }
    // if not==> Hash the user Entered Password;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save all the Details in User Database ( username, password:hashedPasswored, email)
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();
    // Res==> You are logged in
    res.status(200).json({
      msg: "Registration successful",
      user: newUser,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server Error" });
  }
});

app.post("/login", (req, res) => {
  // {email,password}==> req.body
  // Check wheather email exist Or not ===> if not DO SignUp
  // Database ma save vako hashed password ra req.body ko password compare garne ...
  // compare garda if yes==> your logged in
  // if no ==> invalid User name and Password
  // After jwt -===> create new Jwt and sent as a response
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

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
