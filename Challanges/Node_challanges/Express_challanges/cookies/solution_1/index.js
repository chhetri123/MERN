const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const theme = req.cookies.theme || "light";
  const fontSize = req.cookies.fontSize || "medium";
  const language = req.cookies.language || "English";

  res.render("index", { theme, fontSize, language });
});

app.post("/set-preferences", (req, res) => {
  const { theme, fontSize, language, duration } = req.body;
  const maxAge = parseInt(duration) * 24 * 60 * 60 * 1000;

  res.cookie("theme", theme, { maxAge });
  res.cookie("fontSize", fontSize, { maxAge });
  res.cookie("language", language, { maxAge });

  res.redirect("/");
});

app.get("/reset-preferences", (req, res) => {
  res.clearCookie("theme");
  res.clearCookie("fontSize");
  res.clearCookie("language");
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
