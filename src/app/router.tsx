import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";
import DashboardPage from "../features/dashboard/pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
