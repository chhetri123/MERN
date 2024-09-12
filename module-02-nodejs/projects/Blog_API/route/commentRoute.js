const express = require("express");

const commentRoute = express.Router();
const authenticateToken = require("../middleware/userVerify");

const { createComment } = require("./../controller/commentController");

// commentRoute.get("/", authenticateToken, allPost);
commentRoute.post("/:postId", authenticateToken, createComment);
// commentRoute.delete("/:id", authenticateToken, deletePost);
// commentRoute.patch("/:id", authenticateToken, updatePost);

module.exports = commentRoute;
