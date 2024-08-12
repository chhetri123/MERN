import React from "react";

const TaskSummary = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="mb-8 p-4 border rounded bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">Task Summary</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed: {completedTasks}</p>
      <p>Pending: {pendingTasks}</p>

      <p className="mt-2">
        You have completed {completedTasks} out of {totalTasks} tasks.
      </p>
    </div>
  );
};

export default TaskSummary;
