const express = require("express");
const formRoute = express.Router();
const fs = require("fs");
const path = require("path");

//
const filePath = path.join(__dirname, "./../public", "form.json");
formRoute.get("/", (req, res) => {
  res.render("form");
});

formRoute.post("/", (req, res) => {
  const formData = fs.readFileSync(filePath, "utf-8");
  const formDataObj = JSON.parse(formData);
  // Validate req.boy data
  formDataObj.push(req.body);
  fs.writeFileSync(filePath, JSON.stringify(formDataObj, null, 2), "utf-8");
  res.send("Form submitted successfully!,<a href='/'>Back to home </a>");
});

module.exports = formRoute;
