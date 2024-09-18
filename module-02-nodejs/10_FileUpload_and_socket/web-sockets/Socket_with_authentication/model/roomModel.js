const mongoose = require("mongoose");

const room = mongoose.Schema({
  roomId: {
    type: String,
    unique: true,
  },
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  membersId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const Room = mongoose.model("room", room);

module.exports = Room;
