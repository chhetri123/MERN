import React from "react";
import { validateTask } from "../utils/validation";
import FormResue from "./Resuse";

const Task1Form = () => {
  const configTaskForm = {
    fields: [
      {
        name: "title",
        type: "text",
        placeholder: "Title",
        required: true,
        label: "Title",
      },
      {
        name: "password",
        type: "password",
        placeholder: "enter your password",
        required: true,
        label: "Password",
      },
    ],
  };
  const initialDataTaskForm = { title: "", password: "" };

  const handleTaskFrom = (formData) => {
    console.log("From Task From", formData);
  };

  return (
    <>
      <FormResue
        config={configTaskForm}
        initaldata={initialDataTaskForm}
        onSubmit={handleTaskFrom}
        formError={validateTask}
      />
    </>
  );
};
export default Task1Form;
