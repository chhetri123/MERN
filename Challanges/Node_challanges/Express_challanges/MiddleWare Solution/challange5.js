const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Validation Middleware
const validateUser = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required" });
  }
  next();
};

// Route with Validation Middleware
app.post("/register", validateUser, (req, res) => {
  const { name, email } = req.body;
  res
    .status(201)
    .json({ message: `User ${name} registered with email ${email}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
