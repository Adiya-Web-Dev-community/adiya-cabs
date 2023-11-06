import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// icons
import { FaHouseUser } from "react-icons/fa";
import { ImSearch, ImSwitch } from "react-icons/im";
import { GoBroadcast } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";

// components
import ResponsiveNav from "./ResponsiveNav";

const Navbar = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const driverToken = localStorage.getItem("driverToken");

  useEffect(() => {
    if (driverToken) {
      setAuth(driverToken);
    }
  }, [driverToken]);

  // navigation tabs
  const [activeTab, setActiveTab] = useState("profile");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "logout") {
      return navigate("/");
    }
    navigate(`/${tab}`);
  };

  // responsive menu
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden flex justify-between gap-3 py-3 px-6 bg-gradient-to-r from-yellow-200 via-yellow-500 to-orange-200 shadow-xl shadow-gray-700  ">
        <span className="text-xl font-sans">MERU RIDERS</span>
        <GiHamburgerMenu
          className={`mt-1 text-2xl hover:scale-125 transition ease-in duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="z-20 hidden lg:flex flex-col bg-gradient-to-b from-yellow-500 via-orange-300 to-orange-500   py-3 px-2 w-[20%] ">
        <div className="py-3 flex gap-3 border-b-[1px]">
          <span className="text-xl font-sans mt-1">MERU RIDERS</span>
        </div>
        <div className="flex flex-col space-y-1 py-1">
          <button
            onClick={() => handleTabClick("active_passenger")}
            className={`hover:bg-black/30 hover:text-white py-[0.7rem] rounded-md pl-1 text-left flex gap-3
          ${activeTab === "active_passenger" ? "bg-orange-700/50" : ""}`}
          >
            <GoBroadcast className="mt-1 text-black" />
            <span className="text-md font-sans">Active Passenger</span>
          </button>

          <button
            onClick={() => handleTabClick("search_passenger")}
            className={`hover:bg-black/30 hover:text-white py-[0.7rem] rounded-md pl-1 text-left flex gap-3   
          ${activeTab === "search_passenger" ? "bg-orange-700/50" : ""}`}
          >
            <ImSearch className="mt-1 text-black" />
            <span className="text-md font-sans">Serach Passenger</span>
          </button>
          <button
            onClick={() => handleTabClick("profile")}
            className={`hover:bg-black/30 hover:text-white py-[0.7rem] rounded-md pl-1 text-left flex gap-3   
            ${activeTab === "profile" ? "bg-orange-700/50" : ""}`}
          >
            <FaHouseUser className="mt-1 text-black" />
            <span className="text-md font-sans">Rider Profile</span>
          </button>
          <button
            onClick={() => {
              handleTabClick("logout");
              localStorage.clear();
              setAuth("");
            }}
            className={`hover:bg-black/30 hover:text-white py-[0.7rem] rounded-md pl-1 text-left flex gap-3  
          ${activeTab === "logout" ? "bg-orange-700/50" : ""}`}
          >
            <ImSwitch className="mt-1 text-black" />
            <span className="text-md font-sans">Logout</span>
          </button>
        </div>
      </div>
      <ResponsiveNav open={open} setOpen={setOpen} setAuth={setAuth} />
    </>
  );
};

export default Navbar;
