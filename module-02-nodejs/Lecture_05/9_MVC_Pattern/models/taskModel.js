// models/taskModel.js
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "data", "tasks.json");

// Helper functions
const readData = () => {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data || "[]");
};

const writeData = (tasks) => {
  fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
};

// CRUD operations
exports.getAllTasks = () => {
  return readData();
};

exports.getTaskById = (id) => {
  const tasks = readData();
  return tasks.find((task) => task.id === id);
};

exports.createTask = (newTask) => {
  const tasks = readData();
  tasks.push(newTask);
  writeData(tasks);
  return newTask;
};

exports.updateTask = (id, updatedTask) => {
  const tasks = readData();
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updatedTask };
    writeData(tasks);
    return tasks[index];
  }
  return null;
};

exports.deleteTask = (id) => {
  const tasks = readData();
  const filteredTasks = tasks.filter((task) => task.id !== id);
  writeData(filteredTasks);
  return filteredTasks;
};
