const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    default: null,
  },
});

const Student = mongoose.model("user", studentSchema);

module.exports = Student;
