import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["Private", "Public"],
      default: "Public",
      required: false,
    },
    caption: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  { timestamp: true }
);

const userModel = mongoose.model("Post", postSchema);

export default userModel;
