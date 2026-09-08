import { Link } from "react-router-dom";
function RegisterPage() {
  return (
    <div>
      <h1>Create Account</h1>
      <div>
        Already Have an account?
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
