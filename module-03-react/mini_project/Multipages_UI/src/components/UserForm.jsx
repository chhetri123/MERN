import React from "react";
import ReusableForm from "./ReusableForm";
import { getData, addData } from "../utils/localData";
import { validateUser } from "./../utils/validation";

const UserForm = () => {
  const userFormConfig = {
    title: "Create a New User",
    fields: [
      {
        name: "name",
        type: "text",
        placeholder: "Name",
        required: true,
        label: "Name",
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email",
        required: true,
        label: "Email",
      },
    ],
  };

  const initialUserData = { name: "", email: "" };

  const handleUserSubmit = (userData) => {
    const storedUsers = getData("users");
    storedUsers.push({
      ...userData,
      id: Math.random().toString(36).substr(2, 9),
    });
    addData("users", storedUsers);
  };

  return (
    <ReusableForm
      config={userFormConfig}
      formError={validateUser}
      initialData={initialUserData}
      onSubmit={handleUserSubmit}
      btnContent="Add User"
    />
  );
};

export default UserForm;
