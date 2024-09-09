import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  bio: String,
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
