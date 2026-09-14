import React from "react";
import { CSidebar, CSidebarNav, CNavItem, CNavTitle } from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { cilLayers, cilSpeedometer, cilAccountLogout } from "@coreui/icons";
import "@coreui/coreui/dist/css/coreui.min.css";

interface SideBarProps {
  onLogout: () => void;
}

export const SideBar = ({ onLogout }: SideBarProps) => {
  return (
    <CSidebar className="border-end min-vh-100">
      <CSidebarNav compact>
        <div>
          <CNavTitle>Admin Dashboard</CNavTitle>
          <CNavItem href="/dashboard">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Dashboard
          </CNavItem>
          <CNavItem href="/users">
            <CIcon customClassName="nav-icon" icon={cilLayers} /> Users
          </CNavItem>
        </div>

        <div
          style={{
            marginTop: "auto",
          }}
        >
          <CNavItem>
            <button
              type="button"
              className="nav-link border-0 bg-transparent w-100 text-start"
              onClick={onLogout}
            >
              <CIcon customClassName="nav-icon" icon={cilAccountLogout} />
              Logout
            </button>
          </CNavItem>
        </div>
      </CSidebarNav>
    </CSidebar>
  );
};

export default SideBar;
