import { validateTask } from "../utils/validation";
import { addData, getData } from "../utils/localData";
import ReusableForm from "./ReusableForm";
import { useState, useEffect } from "react";

const TaskForm = () => {
  const [assignedUsers, setAssignedUsers] = useState([]);
  useEffect(() => {
    const storedUsers = getData("users");
    setAssignedUsers(storedUsers);
  }, [localStorage]);
  const taskFormConfig = {
    title: "Create a New Task",
    fields: [
      {
        name: "title",
        type: "text",
        placeholder: "Title",
        required: true,
        label: "Title",
      },
      {
        name: "description",
        type: "textarea",
        placeholder: "Description",
        required: true,
        label: "Description",
      },
      {
        name: "status",
        type: "select",
        placeholder: "Status",
        required: true,
        label: "Status",
        options: [
          { value: "pending", label: "Pending" },
          { value: "completed", label: "Completed" },
        ],
      },
      //   Assing user to Task Make Object

      {
        name: "user",
        type: "select",
        placeholder: "Assign User",
        required: true,
        label: "Assign User",
        options: [
          ...assignedUsers.map((user) => ({
            value: user.id,
            label: user.name,
          })),
        ],
      },
    ],
  };

  const initialTaskData = { title: "", description: "", status: "pending" };

  const handleTaskSubmit = (taskData) => {
    const storedTasks = getData("tasks");
    storedTasks.push({
      ...taskData,
      id: Math.random().toString(36).substr(2, 9),
    });
    addData("tasks", storedTasks);
  };

  return (
    <ReusableForm
      config={taskFormConfig}
      initialData={initialTaskData}
      formError={validateTask}
      onSubmit={handleTaskSubmit}
      btnContent="Add Task"
    />
  );
};

export default TaskForm;
