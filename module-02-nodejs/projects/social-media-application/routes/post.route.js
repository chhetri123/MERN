import { createPost } from "../controllers/post.controller.js";
import express from "express";
import { authenticateUser } from "../middleware/auth.middleware.js";

const postRouter = express.Router();

// postRouter.get("");
postRouter.post("/create", authenticateUser, createPost);
// postRouter.patch("");
// postRouter.delete("");
export default postRouter;
