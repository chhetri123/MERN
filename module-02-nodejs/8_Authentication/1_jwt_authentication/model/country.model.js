import mongoose from "mongoose";

const countrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
});

const countryModel = mongoose.model("Country", countrySchema);

export default countryModel;
