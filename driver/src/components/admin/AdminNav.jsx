import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminNav = ({ setAdminAuth }) => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between bg-black text-white px-3 shadow-xl shadow-black  ">
      <h1 className="font-thin text-xl py-6 px-3">Admin Dasboard</h1>
      <button
        onClick={() => {
          localStorage.clear();
          setAdminAuth("");
        }}
        className=" my-4 px-5 rounded-lg bg-red-600/30 shadow-md shadow-black hover:scale-105 hover:bg-orange-300 hover:text-black"
      >
        Signout
      </button>
    </header>
  );
};

export default AdminNav;
