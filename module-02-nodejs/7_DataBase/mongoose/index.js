const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/school";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");

    // Model Cration ///
    const StudentSchema = new mongoose.Schema({
      name: String,
      age: {
        type: Number,
        default: null,
      },

      email: {
        type: String,
        required: true,
        unique: true,
      },
    });

    const Student = mongoose.model("user", StudentSchema);
    //

    //Create

    // Student.create({
    //   name: "John Doe",
    //   email: "johndoe@example.com",
    // });

    Student.updateOne(
      {
        name: "John Doe",
      },
      {
        $set: {
          age: 25,
        },
      }
    ).then(() => {
      console.log("Student updated successfully");
    });

    // const newStudent = new Student({
    //   name: "Hello",
    //   email: "hello@example.com",
    // });
    // newStudent
    //   .save()
    //   .then((data) => {
    //     console.log("Student created successfully", data);
    //   })
    //   .catch((err) => {
    //     console.error("Failed to create student", err);
    //   });

    //
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
