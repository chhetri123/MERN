const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "public", "form.json");
// Routes
const formRoute = require("./routes/formRoute");
const userRoute = require("./routes/userRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// File to save form Data
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]), "utf-8");
}
app.get("/", (req, res) => {
  res.render("home");
});

// app.get("/form", (req, res) => {
//   res.render("form");
// });

// form route Middleware
app.use("/form", formRoute);
app.use("/user", userRoute);

// You can create a validation middleware to validate form data
// app.post("/submit", (req, res) => {
//   const formData = fs.readFileSync(filePath, "utf-8");
//   const formDataObj = JSON.parse(formData);
//   // Validate req.boy data
//   formDataObj.push(req.body);
//   fs.writeFileSync(filePath, JSON.stringify(formDataObj, null, 2), "utf-8");
//   res.send("Form submitted successfully!,<a href='/'>Back to home </a>");
// });

// app.get("/userData", (req, res) => {
//   const formData = fs.readFileSync(filePath, "utf-8");
//   const userList = JSON.parse(formData);
//   console.log(userList);
//   res.render("userList", {
//     userList,
//   });
// });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
