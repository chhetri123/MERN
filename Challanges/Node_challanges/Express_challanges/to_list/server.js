const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory array to store to-do items
let todos = [];

// GET /todos - Get all to-do items
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST /todos - Add a new to-do item
app.post("/todos", (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }

  const newTodo = {
    id: todos.length + 1,
    task: task,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PATCH /todos/:id - Update a to-do item by ID
app.patch("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  const todo = todos.find((todo) => todo.id == id);

  if (!todo) {
    return res.status(404).json({ error: "To-Do item not found" });
  }

  if (task) {
    todo.task = task;
  }
  if (typeof completed === "boolean") {
    todo.completed = completed;
  }

  res.json(todo);
});

// DELETE /todos/:id - Delete a to-do item by ID
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  const todoIndex = todos.findIndex((todo) => todo.id == id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: "To-Do item not found" });
  }

  todos.splice(todoIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`To-Do List API is running at http://localhost:${port}`);
});
