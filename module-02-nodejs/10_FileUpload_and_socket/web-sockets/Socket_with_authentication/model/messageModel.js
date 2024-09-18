const mongoose = require("mongoose");

const msg = mongoose.Schema({
  text: {
    type: String,
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  roomID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "room",
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Message = mongoose.model("msg", msg);

module.exports = Message;
