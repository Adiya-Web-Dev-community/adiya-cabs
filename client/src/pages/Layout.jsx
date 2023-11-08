import { Outlet } from "react-router-dom";
import Navbar from "../components/Ui/Navbar";
import Footer from "../components/Ui/Footer";
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
