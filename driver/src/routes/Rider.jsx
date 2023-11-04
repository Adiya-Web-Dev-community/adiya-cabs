import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

function Rider({ setAuth, setAdminAuth }) {
  const riderName = localStorage.getItem("riderName");
  const driverToken = localStorage.getItem("driverToken");
  const adminToken = localStorage.getItem("adminToken");

  useEffect(() => {
    if (driverToken) {
      setAuth(driverToken);
    }
  }, [driverToken]);
  useEffect(() => {
    if (adminToken) {
      setAdminAuth(adminToken);
    }
  }, [adminToken]);

  return (
    <>
      {riderName ? (
        <Outlet />
      ) : adminToken ? (
        <Navigate to="/admin" />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Rider;
