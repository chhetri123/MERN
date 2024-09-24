const FormInput = ({ label, type, id }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default FormInput;
