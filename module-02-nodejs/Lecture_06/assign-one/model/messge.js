import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  sender: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  messageType: {
    type: String,
    enum: ["text", "audio", "video", "file"],
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
  media: {
    type: String,
    required: false,
  },
  room: {
    type: mongoose.Types.ObjectId,
    ref: "Room",
    required: true,
  },
});

const messageModel = mongoose.model("Message", messageSchema);
export default messageModel;
