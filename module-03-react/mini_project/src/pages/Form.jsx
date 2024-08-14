import { useState } from "react";
import { validateTask } from "./../utils/validation";
import { addTask, getTask } from "../utils/localTask";

const Form = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pending",
  });
  const [btnContent, setBtnContent] = useState("Add Task");
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnContent("Adding Task");
    const validationErrors = validateTask(task);
    setErrors(validationErrors);

    // If there are validation errors, prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const tasks = getTask();
    tasks.push({ ...task, id: Math.random().toString(36).substr(2, 9) });
    addTask(tasks);
    setTask({ title: "", description: "", status: "pending" });
    setErrors({});

    setBtnContent("Add task");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-2/5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Create a New Task</h2>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={task.title}
            className={`block w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={task.description}
            className={`block w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500 ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>

          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>
        <div className="mb-4">
          <select
            name="status"
            onChange={handleChange}
            value={task.status}
            className={`block w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500 ${
              errors.status ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
        >
          {btnContent}
        </button>
      </form>
    </div>
  );
};

export default Form;
