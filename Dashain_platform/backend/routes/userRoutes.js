const express = require("express");
const userRoutes = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user");
const { register, login } = require("../controllers/userController");
userRoutes.post("/register", register);
userRoutes.post("/login", login);

module.exports = userRoutes;
