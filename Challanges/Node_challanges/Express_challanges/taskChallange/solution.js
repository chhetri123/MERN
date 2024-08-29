const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());

// Validation
// Middleware to validate the request body for new tasks
const validateTask = (req, res, next) => {
  const { id, title, completed } = req.body;
  if (
    typeof id !== "number" ||
    typeof title !== "string" ||
    typeof completed !== "boolean"
  ) {
    return res.status(400).json({ error: "Invalid task data" });
  }
  next();
};
// Read tasks from file
const readTasks = () => {
  const data = fs.readFileSync("tasks.json");
  return JSON.parse(data);
};

// Write tasks to file
const writeTasks = (tasks) => {
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
};

// Get all tasks
app.get("/tasks", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// Add a new task
app.post("/tasks", validateTask, (req, res) => {
  const tasks = readTasks();
  const newTask = req.body;
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});
// == ===
// Delete a task
app.delete("/tasks/:id", (req, res) => {
  const tasks = readTasks();
  console.log(typeof req.params.id);
  const updatedTasks = tasks.filter((task) => task.id != req.params.id);
  console.log(updatedTasks);
  writeTasks(updatedTasks);
  res.status(204).send();
});

// // Search tasks by title
app.get("/tasks/search", (req, res, next) => {
  try {
    const { title } = req.query;
    const tasks = readTasks();
    const filteredTasks = tasks.filter((task) => task.title.includes(title));
    res.json(filteredTasks);
  } catch (err) {
    next(err);
  }
});

// Update Task
app.put("/tasks/:id", (req, res, next) => {
  try {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex((task) => task.id == req.params.id);
    if (taskIndex !== -1) {
      const updatedTask = { ...tasks[taskIndex], ...req.body };
      tasks[taskIndex] = updatedTask;
      writeTasks(tasks);
      res.json(updatedTask);
    } else {
      res.status(404).send("Task not found");
    }
  } catch (err) {
    next(err);
  }
});
// Error Handling
// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
};
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
