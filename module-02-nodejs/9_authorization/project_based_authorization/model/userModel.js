const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user", "guest"],
    default: "user",
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
