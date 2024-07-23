const config = require("./config/config");
const express = require("express");
const countries = require("./routes/country.routes");
const expressEjs = require("express-ejs-layouts");
const app = express();
const jwt = require("jsonwebtoken");
const path = require("path");

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressEjs);
app.set("layout", "layout/layout");

app.get("/", (req, res) => {
  res.render("index.ejs", { pagetitle: "Home" });
});
app.get("/about", (req, res) => {
  res.render("about.ejs", { pagetitle: "About us" });
});

app.use("/api/countries", countries);

app.get("/token", (req, res) => {
  // const token = jwt.sign({ _id: "one" }, "hello123", { expiresIn: "10s" });
  const decodedVal = jwt.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJvbmUiLCJpYXQiOjE3MjEzNjMyMDgsImV4cCI6MTcyMTM2MzIxOH0.2i5jQzkMZif1ojRSvNHA5X0wERet-DmnBK1pi-aKSIc",
    "hello123"
  );
  res.json(decodedVal);
});
// get country => /api/countries/
// post country => /api/countries/add
// patch country => /api/countries/edit/0-n
// delete country => /api/countries/remove/0-n``

//start the server
app.listen(
  config.port,
  console.log(`Server is running on port ${config.port}`)
);
