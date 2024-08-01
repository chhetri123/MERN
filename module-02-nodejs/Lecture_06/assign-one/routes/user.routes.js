import express from "express";
import { listMessagesByUser } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.get("/list/:id", listMessagesByUser);

export default userRouter;
