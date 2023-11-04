import { Outlet, Navigate } from "react-router-dom";

function Public() {
  const token = localStorage.getItem("driverToken");
  return <>{token ? <Navigate to="/profile" /> : <Outlet />}</>;
}

export default Public;
