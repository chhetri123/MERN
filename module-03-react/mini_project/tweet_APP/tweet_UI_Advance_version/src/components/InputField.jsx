// components/InputField.js
import React from "react";

const InputField = ({ label, id, type = "text", className = "", ...props }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className="w-full p-2 border rounded-md"
        {...props}
      />
    </div>
  );
};

export default InputField;
