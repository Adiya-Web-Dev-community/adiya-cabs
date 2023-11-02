import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {navBarData} from "../navigation/nav";

const Layout = () => {
  return (
    <>
      <Navbar navArr={navBarData} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
