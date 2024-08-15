//  Task Class
class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }

  markCompleted() {
    this.completed = true;
  }
}

// Todo Class Definition
class ToDoList {
  constructor() {
    this.tasks = [];
  }

  // Task Adding Functionality
  addTask(description) {
    this.tasks.push(new Task(description));
  }

  // Task Removing Functionality
  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  // Task Marking Functionality
  markTaskCompleted(index) {
    if (this.tasks[index]) {
      this.tasks[index].markCompleted();
    }
  }

  // Task Listing Functionality
  getTotalCount() {
    return this.tasks.length;
  }
}

// DOM Manipulation
const toDoList = new ToDoList();

document.getElementById("addTaskButton").addEventListener("click", () => {
  const taskDescription = document.getElementById("taskDescription").value;
  if (taskDescription.trim()) {
    toDoList.addTask(taskDescription);
    document.getElementById("taskDescription").value = "";
    displayTasks();
  }
});

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  /* This Loops Iterates through the list of tasks Created which are stored in 
  arras
   */
  toDoList.tasks.forEach((task, index) => {
    //

    // Create a li element to add the the task description inside the li content
    const taskItem = document.createElement("li");

    // Add the bootstrap class to the li for interactive UI
    taskItem.className = `list-group-item d-flex justify-content-between align-items-center ${
      task.completed ? "completed" : ""
    }`;

    //  Add task description
    taskItem.textContent = task.description;

    // Create  a Button
    const completeButton = document.createElement("button");
    completeButton.className = "btn btn-success btn-sm";
    completeButton.textContent = "Complete";

    //
    completeButton.addEventListener("click", () => {
      toDoList.markTaskCompleted(index);
      displayTasks();
    });

    // Append the button to the taskItem and TaskItem to Task List to display in  page
    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem);
  });

  // Count the number of tasks
  document.getElementById(
    "totalCount"
  ).textContent = `Total tasks: ${toDoList.getTotalCount()}`;
}

displayTasks();
