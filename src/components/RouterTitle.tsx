import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/": "Login | Auth Service",
  "/login": "Login | Auth Service",
  "/register": "Register | Auth Service",
  "/dashboard": "Dashboard | Auth Service",
  "/profile": "Profile | Auth Service",
  "/settings": "Settings | Auth Service",
};

function RouteTitle() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] ?? "Auth Service";
  }, [location.pathname]);

  return null;
}

export default RouteTitle;
