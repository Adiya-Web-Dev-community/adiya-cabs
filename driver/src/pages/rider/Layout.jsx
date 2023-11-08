import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-[100vh] w-[90%]">
      <Outlet />
    </div>
  );
};

export default Layout;
