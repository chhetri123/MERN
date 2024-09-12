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

postRoute.get("/", authenticateToken, allPost);
postRoute.post("/new", authenticateToken, createPost);
postRoute.delete("/:id", authenticateToken, deletePost);
postRoute.patch("/:id", authenticateToken, updatePost);
postRoute.get("/:id/comment", authenticateToken, getAllCommentsInPost);

module.exports = postRoute;
