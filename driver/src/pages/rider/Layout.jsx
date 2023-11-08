import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" w-[90%]">
      <Outlet />
    </div>
  );
};

export default Layout;
