const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config(".env");
app.use(express.json());
const url = process.env.url_db;
const userRoute = require("./route/userRoute");
const postRoute = require("./route/postRoute");
const commentRoute = require("./route/commentRoute");
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: "GET,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comment", commentRoute);

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Can't Connect MongoDB");
  });

app.listen(8070, () => {
  console.log("The server is running on port 8070");
});
