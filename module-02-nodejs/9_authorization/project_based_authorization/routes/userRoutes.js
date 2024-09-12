const express = require("express");
const userRoute = express.Router();
const { login, signup, getAllUser } = require("../controller/userController");
const { verifyToken, restrictTo } = require("../middleware/verifyToken");

//

userRoute.get("/", restrictTo("admin"), verifyToken, getAllUser);
userRoute.get("/hello", verifyToken, restrictTo("guest"), (req, res) => {
  res.json({ message: "Hello World" });
});
userRoute.post("/signup", signup);
userRoute.post("/login", login);

//
module.exports = userRoute;
