import { useState, useEffect } from "react";
import { addData, getData } from "../utils/localData";
const Details = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = getData("tasks");
    setTasks(storedTasks);
  }, []);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    addData("tasks", updatedTasks);
    setTasks(updatedTasks);
  };

  const handleStatusChange = (id, status) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status } : task
    );
    addData("tasks", updatedTasks);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Task List</h2>
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
              </div>
              <div className="flex space-x-4 items-center">
                <select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task.id, e.target.value)}
                  className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                >
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
