import React from "react";

import FormResue from "./Resuse";

const User1Form = () => {
  const configUserForm = {
    fields: [
      {
        name: "username",
        type: "text",
        placeholder: "username",
        required: true,
        label: "username",
      },
      {
        name: "email",
        type: "email",
        placeholder: "enter your email address",
        required: true,
        label: "Email",
      },
    ],
  };
  const initialDataUserForm = { username: "", email: "" };

  const handleUserForm = (formData) => {
    console.log("from UserForm", formData);
  };

  return (
    <>
      <FormResue
        config={configUserForm}
        initaldata={initialDataUserForm}
        onSubmit={handleUserForm}
      />
    </>
  );
};
export default User1Form;
