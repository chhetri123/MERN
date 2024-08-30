const express = require("express");
const app = express();
const port = 3000;

// Global Middleware for Logging with Timestamp
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.get("/contact", (req, res) => {
  res.send("Contact us at contact@example.com");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
