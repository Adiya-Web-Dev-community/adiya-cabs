import { Outlet, Navigate } from "react-router-dom";

function Public() {
  const token = localStorage.getItem("driverToken");
  return <>{token ? <Navigate to="/search_passenger" /> : <Outlet />}</>;
}

export default Public;
