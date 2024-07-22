// Task array to store tasks
const tasks = [];

// Function to render tasks
function renderTasks() {
  // Clear existing tasks
  console.clear();
  console.log("To-Do List:");

  if (tasks.length === 0) {
    console.log("No tasks to display.");
  }

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    let status = task.completed ? "Completed" : "Pending";
    console.log(`${i + 1}. ${task.text} [${status}]`);
  }
}

// Function to add a task
function addTask(taskText) {
  if (taskText.trim() === "") {
    console.log("Task cannot be empty.");
    return;
  }
  tasks.push({ text: taskText, completed: false });
  renderTasks();
}

// Function to remove a task
function removeTask(index) {
  if (index < 0 || index >= tasks.length) {
    console.log("Invalid task index.");
    return;
  }
  tasks.splice(index, 1);
  renderTasks();
}

// Function to toggle task completion
function toggleComplete(index) {
  if (index < 0 || index >= tasks.length) {
    console.log("Invalid task index.");
    return;
  }
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Function to sort tasks
function sortTasks() {
  tasks.sort((a, b) => a.completed - b.completed);
  renderTasks();
}

// Example Usage

// Adding tasks
addTask("Learn JavaScript");
addTask("Practice coding");
addTask("Read documentation");

// Toggle completion status
toggleComplete(0);

// Sort tasks
sortTasks();

// Remove a task
removeTask(1);

// Add a new task
addTask("Write a blog post");
