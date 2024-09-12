const mongoose = require("mongoose");

const comment = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  // Content of the blog post (required)
  createdAt: { type: Date, default: new Date() }, // Timestamp when the post was created
  // author: String, // ID or username of the user who created the post (required)

  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  // you can add more fields
});

const commentSchema = mongoose.model("comment", comment);

module.exports = commentSchema;
