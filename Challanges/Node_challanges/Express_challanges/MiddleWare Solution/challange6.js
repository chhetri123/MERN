const express = require("express");
const app = express();
const port = 3000;

let users = []; // In-memory array to store users

// Global Middleware for Logging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Middleware to parse JSON bodies
app.use(express.json());

// Custom Authentication Middleware
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader === "Bearer mysecrettoken") {
    next();
  } else {
    res.status(403).json({ error: "Forbidden - Invalid Token" });
  }
};

// Validation Middleware
const validateUser = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required" });
  }
  next();
};

// Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "An internal server error occurred" });
});

// Routes

// GET /users - Protected route
app.get("/users", authMiddleware, (req, res) => {
  res.json(users);
});

// POST /users - Validate and create a new user
app.post("/users", validateUser, (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id - Update user information by ID
app.put("/users/:id", authMiddleware, validateUser, (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id == id);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users[userIndex] = { id: parseInt(id), ...req.body };
  res.json(users[userIndex]);
});

// DELETE /users/:id - Delete a user by ID
app.delete("/users/:id", authMiddleware, (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id == id);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(userIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
