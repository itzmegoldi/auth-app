import { Link, Outlet } from "react-router-dom";
import ThemeSelector from "../components/ThemeSelector";
function AppLayout() {
  return (
    <div className="app-layout">
      <header>
        <h1>Admin Auth</h1>

        <ThemeSelector />

        <nav>
          <Link to="/dashboard">Dashboard</Link>

          <Link to="/profile">Profile</Link>

          <Link to="/settings">Settings</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
