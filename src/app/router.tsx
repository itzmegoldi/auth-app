import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AppLayout />,
    children: [{}],
  },
]);

export default router;
