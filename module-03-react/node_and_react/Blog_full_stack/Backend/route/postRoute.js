const express = require("express");

const postRoute = express.Router();
const authenticateToken = require("../middleware/userVerify");

const {
  createPost,
  deletePost,
  updatePost,
  allPost,
  getAllCommentsInPost,
} = require("../controller/postController");

postRoute.get("/", allPost);
postRoute.post("/new", createPost);
postRoute.delete("/:id", authenticateToken, deletePost);
postRoute.patch("/:id", authenticateToken, updatePost);
postRoute.get("/:id/comment", authenticateToken, getAllCommentsInPost);

module.exports = postRoute;
