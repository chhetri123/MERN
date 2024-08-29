const fs = require("fs");
const path = require("path");
/*


//
TODO List 
// Create function ===> data ==>  file ma write garne data lai ( data.json)


// Read function  ===>  file lai read garne  and data lai return or console garne 


// remove function ===> title or Index ==> file ko content lai read garna paryo , remove remove and write 

// Edit function ===> (title or Index, nayaTitle) ==> read file --> content[index].title=nayaTitle==> write file


*/

let fileName = path.join(__dirname, "task.json");
let tasks = [];

function createTask(taskTitle) {
  const isFileExist = fs.existsSync(fileName);
  if (!isFileExist) {
    fs.writeFileSync(fileName, JSON.stringify(tasks), "utf-8");
  }
  const newTask = {
    task: taskTitle,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  fs.writeFileSync(fileName, JSON.stringify(tasks), "utf-8");
}

function deleteTask(index, newtaskTitle) {
  let taskList = fs.readFileSync(fileName, "utf-8");
  taskList = JSON.parse(taskList);

  //
  taskList[index].title = newtaskTitle;

  //
  //   taskList.splice(index, 1);
  //   console.log(taskList);

  fs.writeFileSync(fileName, JSON.stringify(taskList), "utf-8");
}

createTask("hello");
createTask("hello2");
createTask("hello3");

deleteTask(1);
deleteTask(0);
