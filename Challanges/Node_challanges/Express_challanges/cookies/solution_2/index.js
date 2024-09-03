const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  const username = req.cookies.username || "";
  res.render("login", { username });
});

app.post("/login", (req, res) => {
  const { username, remember } = req.body;

  if (remember) {
    res.cookie("username", username, { maxAge: 30 * 24 * 60 * 60 * 1000 }); // 30 days
  } else {
    res.clearCookie("username");
  }

  res.redirect("/login");
});

app.get("/logout", (req, res) => {
  res.clearCookie("username");
  res.redirect("/login");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
