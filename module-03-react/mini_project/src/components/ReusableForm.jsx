import React, { useState } from "react";

const ReusableForm = ({
  config,
  initialData,
  formError,
  onSubmit,
  btnContent,
}) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = formError(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData(initialData);
    }
  };

  return (
    <form
      className="bg-white p-8 rounded-lg shadow-lg w-2/5 mx-auto mt-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6">{config.title}</h2>
      {config.fields.map((field, index) => (
        <div key={index} className="mb-4">
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
              value={formData[field.name]}
              className={`block w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500 ${
                errors[field.name] ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
          ) : field.type === "select" ? (
            <select
              name={field.name}
              onChange={handleChange}
              value={formData[field.name]}
              className={`block w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500 ${
                errors[field.name] ? "border-red-500" : "border-gray-300"
              }`}
            >
              {field.options.map((option, idx) => (
                <option key={idx} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
              value={formData[field.name]}
              className={`block w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500 ${
                errors[field.name] ? "border-red-500" : "border-gray-300"
              }`}
            />
          )}
          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
      >
        {btnContent}
      </button>
    </form>
  );
};

export default ReusableForm;
