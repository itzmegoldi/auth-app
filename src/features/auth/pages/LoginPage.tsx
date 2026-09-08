// src/features/auth/pages/LoginPage.tsx
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useForm } from "react-hook-form";
function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" {...register("email")} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        <button type="submit">Login</button>
      </form>
      <div>
        Don't have an account? <span> </span>
        <Link to="/register">Register here</Link>
      </div>
    </div>
  );
}

export default LoginPage;
