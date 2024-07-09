// controllers/taskController.js
const { v4: uuidv4 } = require("uuid");
const taskModel = require("../models/taskModel");

exports.getAllTasks = (req, res) => {
  const tasks = taskModel.getAllTasks();
  res.json(tasks);
};

exports.getTaskById = (req, res) => {
  const task = taskModel.getTaskById(req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

exports.createTask = (req, res) => {
  // title, description, status, dueDate, priority
  const newTask = { id: uuidv4(), ...req.body };
  const createdTask = taskModel.createTask(newTask);
  res.status(201).json(createdTask);
};

exports.updateTask = (req, res) => {
  const updatedTask = taskModel.updateTask(req.params.id, req.body);
  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

exports.deleteTask = (req, res) => {
  const tasks = taskModel.deleteTask(req.params.id);
  res.json(tasks);
};
