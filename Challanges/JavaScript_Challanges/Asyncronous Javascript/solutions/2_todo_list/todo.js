document.addEventListener("DOMContentLoaded", loadTasks);

document
  .getElementById("todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const taskInput = document.getElementById("task");
    addTask(taskInput.value);
    taskInput.value = "";
  });

function addTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

function loadTasks() {
  renderTasks();
}
