import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const likeModel = mongoose.model("Like", likeSchema);

export default likeModel;
