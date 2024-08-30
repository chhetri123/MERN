const express = require("express");
const app = express();
const port = 3000;

// Simulate Error Middleware
app.use("/error", (req, res, next) => {
  const error = new Error("Simulated error");
  next(error);
});

// Global Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
