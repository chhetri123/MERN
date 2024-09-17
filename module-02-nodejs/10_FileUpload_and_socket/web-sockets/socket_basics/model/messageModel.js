const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  text: {
    type: String,
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
