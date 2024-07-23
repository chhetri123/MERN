import mongoose from "mongoose";

const tokenSchema = mongoose.Schema(
  {
    token: { type: String },
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  },
  { timestamp: true }
);

const tokenModel = mongoose.model("Token", tokenSchema);
export default tokenModel;
