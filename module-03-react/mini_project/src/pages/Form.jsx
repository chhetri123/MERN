import React from "react";
import TaskForm from "./../components/TaskForm";
import UserForm from "../components/UserForm";
import Task1Form from "../components/Task1From";
import User1Form from "../components/UserTaskForm";

const Form = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex flex-col gap-6 justify-center items-center">
        <Task1Form />
        <User1Form />
      </div>
    </div>
  );
};

export default Form;
