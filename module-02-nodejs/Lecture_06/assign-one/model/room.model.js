import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roomId: {
    type: Number,
    unique: true,
  },
});

const roomModel = mongoose.model("Room", roomSchema);
export default roomModel;
