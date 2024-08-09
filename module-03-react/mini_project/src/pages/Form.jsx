import { useState } from "react";

const Form = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pending",
  });
  const [btnContent, setBtnContent] = useState("Add Task");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnContent("Adding Task");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ ...task, id: Math.random().toString(36).substr(2, 9) });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTask({ title: "", description: "", status: "pending" });
    setBtnContent("Add task");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-2/5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Create a New Task</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="block w-full p-3 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="block w-full p-3 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
        <select
          name="status"
          onChange={handleChange}
          className="block w-full p-3 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
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
