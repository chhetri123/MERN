const express = require("express");
const app = express();
const port = 3000;

// Custom Authentication Middleware
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader === "Bearer mysecrettoken") {
    next();
  } else {
    res.status(403).json({ error: "Forbidden - Invalid Token" });
  }
};

// Protected Route
app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to the dashboard!");
});

// Public Routes
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
