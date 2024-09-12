const mongoose = require("mongoose");

const post = mongoose.Schema({
  title: String, // Title of the blog post (required)
  body: String, // Content of the blog post (required)
  createdAt: { type: Date, default: new Date() }, // Timestamp when the post was created
  // author: String, // ID or username of the user who created the post (required)

  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  // you can add more fields
});

const postSchema = mongoose.model("post", post);

module.exports = postSchema;
