import { Outlet } from "react-router-dom";
import Navbar from "../components/Ui/Navbar";
import Footer from "../components/Ui/Footer";
import { navBarData } from "../navigation/nav";
import { useDispatch } from "react-redux";
import { setLoginToken } from "../store/appSlice";
import { useEffect } from "react";

const Layout = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const setLoginStatusInStore = () => {
    dispatch(setLoginToken(token));
    console.log("token set");
  };
  useEffect(() => {
    if (token) {
      setLoginStatusInStore();
    }
  }, []);
  
  return (
    <>
      <Navbar navArr={navBarData} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
