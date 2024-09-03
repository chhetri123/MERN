const express = require("express");
const userRoute = express.Router();
const fs = require("fs");
const path = require("path");

//
const filePath = path.join(__dirname, "./../public", "form.json");
//
userRoute.get("/", (req, res) => {
  const formData = fs.readFileSync(filePath, "utf-8");
  const userList = JSON.parse(formData);
  console.log(userList);
  res.render("userList", {
    userList,
  });
});
module.exports = userRoute;
