import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { ImSearch, ImSwitch } from "react-icons/im";
import { GoBroadcast } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

const ResponsiveNav = ({ open, setOpen, setAuth }) => {
  const navigate = useNavigate();

  // navigation tabs
  const [activeTab, setActiveTab] = useState("profile");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "logout") {
      return navigate("/");
    }
    navigate(`/${tab}`);
    setOpen(false);
  };

  return (
    <main
      className={`z-20 fixed top-0 left-0 w-full flex justify-between bg-black/10 transition ease-in duration-300  ${
        open ? "visible" : "invisible"
      } `}
    >
      <div className="w-[70%] ">
        <div
          className={`flex flex-col bg-gradient-to-br from-yellow-200 via-yellow-500 to-orange-400 h-[45rem] py-3 px-2  rounded-2xl `}
        >
          <div className="flex flex-col space-y-1 py-1">
            <button
              onClick={() => handleTabClick("active_passenger")}
              className={`hover:bg-black/30 hover:text-white py-[0.7rem] rounded-md pl-1 text-left flex gap-3
          ${activeTab === "active_passenger" ? "" : ""}`}
            >
              <GoBroadcast className="mt-1 text-black" />
              <span className="text-md font-sans">Active Passenger</span>
            </button>

            <button
              onClick={() => handleTabClick("search_passenger")}
              className={`hover:bg-black/30 hover:text-white py-[0.7rem] rounded-md pl-1 text-left flex gap-3   
          ${activeTab === "search_passenger" ? "" : ""}`}
            >
              <ImSearch className="mt-1 text-black" />
              <span className="text-md font-sans">Serach Passenger</span>
            </button>
            <button
              onClick={() => handleTabClick("profile")}
              className={`hover:bg-black/30 hover:text-white py-[0.7rem] rounded-md pl-1 text-left flex gap-3   
            ${activeTab === "profile" ? "" : ""}`}
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
          ${activeTab === "logout" ? "bg-gray-500" : ""}`}
            >
              <ImSwitch className="mt-1 text-black" />
              <span className="text-md font-sans">Logout</span>
            </button>
          </div>
        </div>
      </div>
      <RxCross1
        className={`m-4 text-2xl hover:scale-125 transition ease-in duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setOpen(!open)}
      />
    </main>
  );
};

export default ResponsiveNav;
