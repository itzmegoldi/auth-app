import { Link, Outlet } from "react-router-dom";
import RouterTitle from "../components/RouterTitle";

function AppLayout() {
  return (
    <div className="app-layout">
      <header>
        <RouterTitle />
        <h1>Admin Auth</h1>

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
