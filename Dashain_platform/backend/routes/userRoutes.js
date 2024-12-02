const express = require("express");
const userRoutes = express.Router();
const authValidation = require("../middleware/authMiddleware");
const {
  register,
  login,
  editUserDetails,
} = require("../controllers/userController");
const upload = require("../middleware/upload");
const {
  validate,
  userRegistrationVal,
  userLoginVal,
} = require("../middleware/validation");

userRoutes.post("/register", userRegistrationVal(), validate, register);
userRoutes.post("/login", login);
userRoutes.patch("/", authValidation, upload.single("photo"), editUserDetails);

module.exports = userRoutes;
