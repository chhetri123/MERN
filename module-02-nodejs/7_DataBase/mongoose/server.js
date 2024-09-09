const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const url = "mongodb://localhost:27017/school";
//Model

const Student = require("./model/studentModel");
const Book = require("./model/bookModel");

app.use(express.json());

//

mongoose.connect(url).then(() => {
  console.log("Connected to MongoDB");
});

app.post("/book", async (req, res) => {
  try {
    const bookName = req.body.bookName;
    const bookAuthor = req.body.bookAuthor;

    const newBook = new Book({
      bookName: bookName,
      bookAuthor: bookAuthor,
    });

    const book = await newBook.save();

    res.json({
      message: "Book added successfully",
      book,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

app.get("/", async (req, res) => {
  const users = await Student.find();
  res.json({
    users,
  });
});

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const user = await Student.create({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    });

    //
    res.json({
      msg: "User created successfully",
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});
app.patch("/:id", async (req, res) => {
  //
  const id = req.params.id;
  const user = await Student.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name: req.body.name,
      },
    }
  );
  res.json({
    message: "User updated successfully",
    user,
  });
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Student.deleteOne({ _id: id });
  res.json({ message: "User deleted successfully" });
});
app.listen(8000, () => {
  console.log(`Server is running at http://localhost:${6000}`);
});
