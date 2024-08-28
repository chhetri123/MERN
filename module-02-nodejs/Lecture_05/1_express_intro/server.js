const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const filePath = path.join(__dirname, "public");

//
app.use(express.static(filePath));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/json", (req, res) => {
  const data = { name: "John Doe", age: 30 };
  res.json(data);
});

app.post("/form-submit", (req, res) => {
  const data = req.body;
  const formData = fs.readFileSync("data.json", "utf8");
  const parsedData = JSON.parse(formData);
  parsedData.push(data);
  fs.writeFileSync("data.json", JSON.stringify(parsedData, null, 2), "utf8");
  setTimeout(() => {
    res.send(
      `<h1>Form submited successfully</h1>
      <a href="/">Go back</a>
    `
    );
  }, 6000);
});

//
app
  .route("/")
  .get((req, res) => {
    res.sendFile(path.join(filePath, "index.html"));
  })
  .post((req, res) => {
    const data = req.body;
    fs.writeFileSync("data.json", JSON.stringify(data));
    res.send("Client want to save data");
  })
  .patch((req, res) => {
    res.send("file updated successful");
  })
  .delete((req, res) => {
    fs.unlinkSync("data.json");
    res.send("File deleted");
  });

//
app.get("/home", (req, res) => {
  res.sendFile(path.join(filePath, "home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(filePath, "about.html"));
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
