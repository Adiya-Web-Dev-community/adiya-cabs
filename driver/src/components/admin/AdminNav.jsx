import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminNav = ({ setAdminAuth }) => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between bg-gradient-to-r from-yellow-500 via-orange-300 to-orange-300 px-3 shadow-xl shadow-black  ">
      <h1 className="font-thin text-xl py-6 px-3">Admin Dasboard</h1>
      <button
        onClick={() => {
          localStorage.clear();
          setAdminAuth("");
        }}
        className=" my-4 px-5 rounded-lg bg-red-600/30 shadow-md shadow-black hover:scale-105 hover:animate-pulse"
      >
        Signout
      </button>
    </header>
  );
};

export default AdminNav;
