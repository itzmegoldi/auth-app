// src/features/auth/pages/LoginPage.tsx
import "./LoginPage.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setCredentials, type AuthObject } from "../authSlice";

import { api_request } from "../../../api/axios";
import { getDecodedAccessToken } from "../../../api/jwt";
function LoginPage() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth as AuthObject);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth);
    if (auth.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [auth.isAuthenticated, navigate]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

    api_request("post", "/user/admin-login", {
      data,
      success_handler: (response) => {
        const responseData = response.data;
        const authToken = responseData.access_token;
        const decodedToken = getDecodedAccessToken(authToken);
        const user = {
          id: decodedToken.sub,
          email: decodedToken.email,
        };

        dispatch(
          setCredentials({
            user,
            accessToken: authToken,
          }),
        );
      },
      error_handler: (error: any) => {
        console.log(error);
      },
    });
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
    </div>
  );
}

export default LoginPage;
