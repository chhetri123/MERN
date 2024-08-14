import React from "react";
import TaskForm from "./../components/TaskForm";
import UserForm from "../components/UserForm";

const Form = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex flex-col gap-6 justify-center items-center">
        <TaskForm />
        <UserForm />
      </div>
    </div>
  );
};

export default Form;
