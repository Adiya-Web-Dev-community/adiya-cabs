import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminNav = ({ setAdminAuth }) => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between bg-black text-white px-3 shadow-xl shadow-black  ">
      <h1 className="font-thin text-xl py-6 px-3">Admin Dasboard</h1>
      <nav className=" flex gap-3">
        <button
          onClick={() => navigate("/admin")}
          className=" my-4 px-3 rounded-lg py-2 border-[1px] border-white shadow-md shadow-black hover:scale-105 hover:bg-orange-300 hover:text-black text-sm"
        >
          Cab service
        </button>
        <button
          onClick={() => navigate("/all-vehicles")}
          className=" my-4 px-3 rounded-lg py-2 border-[1px] border-white shadow-md shadow-black hover:scale-105 hover:bg-orange-300 hover:text-black text-sm"
        >
          Vehicles
        </button>
        <button
          onClick={() => navigate("/new-vehicle")}
          className=" my-4 px-3 rounded-lg py-2 border-[1px] border-white shadow-md shadow-black hover:scale-105 hover:bg-orange-300 hover:text-black text-sm"
        >
          New Vehicle +
        </button>
        <button
          onClick={() => {
            localStorage.clear();
            setAdminAuth("");
          }}
          className=" my-4 px-3 rounded-lg py-2 border-[1px] border-white shadow-md shadow-black hover:scale-105 hover:bg-orange-300 hover:text-black text-sm"
        >
          Signout
        </button>
      </nav>
    </header>
  );
};

export default AdminNav;
