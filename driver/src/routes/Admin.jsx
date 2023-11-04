import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

function Admin({ setAuth, setAdminAuth }) {
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
      {adminToken ? (
        <Outlet />
      ) : riderName ? (
        <Navigate to="/profile" />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Admin;
