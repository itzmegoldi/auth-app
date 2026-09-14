import { Outlet } from "react-router-dom";
import RouterTitle from "../components/RouterTitle";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/auth/authSlice";

function AppLayout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
      <header>
        <RouterTitle />
      </header>
      <main>
        <div className="d-flex">
          <SideBar onLogout={handleLogout} />
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
