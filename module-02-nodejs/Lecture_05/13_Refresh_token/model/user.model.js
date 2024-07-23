import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: { type: String },
    name: { type: String },
  },
  { timestamp: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
