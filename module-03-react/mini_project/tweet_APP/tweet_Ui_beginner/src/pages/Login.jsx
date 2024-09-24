import FormInput from "../components/FormInput";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
          Login
        </h2>
        <form>
          <FormInput label="Email:" type="email" id="email" />
          <FormInput label="Password:" type="password" id="password" />
          <Button text="Submit" type="submit" />
        </form>
        <div className="text-center mt-2">
          <a href="/register" className="text-blue-600 hover:underline">
            Register here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
