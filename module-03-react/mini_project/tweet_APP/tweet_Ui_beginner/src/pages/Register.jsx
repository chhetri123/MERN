import FormInput from "../components/FormInput";
import Button from "../components/Button";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
          Register
        </h2>
        <form>
          <FormInput label="Email:" type="email" id="email" />
          <FormInput label="Password:" type="password" id="password" />
          <FormInput
            label="Confirm Password:"
            type="password"
            id="confirm-password"
          />
          <Button text="Submit" type="submit" />
        </form>
        <div className="text-center mt-2">
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
