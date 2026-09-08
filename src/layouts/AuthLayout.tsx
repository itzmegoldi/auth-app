import { Outlet } from "react-router-dom";
// import ThemeSelector from "../components/ThemeSelector";
import "./AuthLayout.css";
function AuthLayout() {
  return (
    <div>
      {/* <ThemeSelector /> */}
      <div className="auth-layout">
        <h1>Admin Auth</h1>
        <main>
          <Outlet />
        </main>
      </div>
      <footer>© 2026 Auth Service</footer>
    </div>
  );
}

export default AuthLayout;
