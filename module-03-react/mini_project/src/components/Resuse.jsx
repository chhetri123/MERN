import { useState } from "react";

const FormResue = ({ config, initaldata, onSubmit, formError }) => {
  //
  const [formdata, setFormData] = useState(initaldata);
  const [error, setError] = useState({});
  const handleChange = (e) => {
    // console.log(formdata);
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formdata);

    const error = formError(formdata);
    setError(error);
    onSubmit(formdata);

    // localStorage.setItem("tasks", formdata);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {config.fields.map((field, index) => (
          <div key={index} className="mb-4">
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              onChange={handleChange}
              value={formdata[field.name]}
              placeholder={field.placeholder}
            />
            {error[field.name] && (
              <p className="text-red-500">{error[field.name]}</p>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormResue;
