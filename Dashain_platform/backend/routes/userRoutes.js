const express = require("express");
const userRoutes = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user");
const authValidation = require("../middleware/authMiddleware");
const {
  register,
  login,
  editUserDetails,
} = require("../controllers/userController");
const upload = require("../middleware/upload");

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.patch("/", authValidation, upload.single("photo"), editUserDetails);

module.exports = userRoutes;
