const Button = ({ text, type }) => {
  return (
    <button
      type={type}
      className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      {text}
    </button>
  );
};

export default Button;
