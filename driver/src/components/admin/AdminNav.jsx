import { FaSignOutAlt } from "react-icons/fa";
const AdminNav = ({ setAdminAuth }) => {
  return (
    <header className="flex justify-between items-center  w-full h-[10vh] bg-black text-white px-3 shadow-xl">
      <h1 className="font-thin text-xl py-6 px-3">Admin Dasboard</h1>
      <nav className=" flex gap-3">
        <button
          onClick={() => {
            localStorage.clear();
            setAdminAuth("");
          }}
          className="flex items-center  px-4 rounded-full py-2 border-[1px] border-white shadow-md shadow-black hover:scale-105 hover:bg-yellow-100 hover:text-black text-sm"
        >
          Signout
          <FaSignOutAlt className="text-lg ml-2" />
        </button>
      </nav>
    </header>
  );
};

export default AdminNav;
