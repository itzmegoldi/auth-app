import { Outlet } from "react-router-dom";
// import ThemeSelector from "../components/ThemeSelector";
import RouterTitle from "../components/RouterTitle";
import "./AuthLayout.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AuthLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  });
  return (
    <div>
      {/* <ThemeSelector /> */}
      <div className="auth-layout">
        <RouterTitle />
        <h1>Admin Login</h1>
        <main>
          <Outlet />
        </main>
      </div>
      <footer>© 2026 Auth Service</footer>
    </div>
  );
}

export default AuthLayout;
