const express = require("express");
const app = express();
const port = 3000;

// Middleware part

const myMiddleware = (req, res, next) => {
  console.log("This is middleware!");
  next(); // Don't forget to call next()
};

// Use middleware
app.use(myMiddleware);

// Built-in middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Middleware for specific route
app.get("/protected", myMiddleware, (req, res) => {
  res.send("Protected route");
});

// ROutes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/submit", (req, res) => {
  res.send("Form Submitted");
});

// Route parameters
app.get("/users/:userId", (req, res) => {
  res.send(`User ID: ${req.params.userId}`);
});

// Route handlers
app
  .route("/book")
  .get((req, res) => {
    res.send("Get a book");
  })
  .post((req, res) => {
    res.send("Add a book");
  })
  .put((req, res) => {
    res.send("Update a book");
  });

// Form data handling

// app.use(express.urlencoded({ extended: true }));

app.post("/submit-form", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(`Form submitted with Name: ${name} and Email: ${email}`);
});

//
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
