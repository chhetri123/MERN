import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
  deleteUser,
  editUser,
} from "../controller/user.controller.js";
import { verifyAccessToken } from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter
  .get("/", getUser)
  .post("/login", loginUser)
  .post("/register", registerUser)
  .patch("/edit/:id", verifyAccessToken, editUser)
  .delete("/delete/:id", verifyAccessToken, deleteUser);

export default userRouter;
