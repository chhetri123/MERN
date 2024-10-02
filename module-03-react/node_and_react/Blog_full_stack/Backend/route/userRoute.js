const express = require("express");
const userRoute = express.Router();
const authenticateToken = require("../middleware/userVerify");
const {
  register,
  login,
  getAllusers,
  checkLogIn,
} = require("../controller/userController");

userRoute.get("/", authenticateToken, getAllusers);
userRoute.get("/isLoggedIn", authenticateToken, checkLogIn);

userRoute.post("/register", register);

userRoute.post("/login", login);

module.exports = userRoute;
