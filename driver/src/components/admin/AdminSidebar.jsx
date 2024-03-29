import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTaxi } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import {
  FaPlus,
  FaSignOutAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { MdCarRental } from "react-icons/md";

const AdminSidebar = ({ setAdminAuth }) => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(true);
  const [tooltipText, setTooltipText] = useState("");

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleMouseEnter = (text) => {
    if (!showSidebar) {
      setTooltipText(text);
    }
  };

  const handleMouseLeave = () => {
    setTooltipText("");
  };

  return (
    <header className="flex flex-col h-full bg-black text-white shadow-xl shadow-black transition-all ease-in-out duration-1000">
      <div
        className="toggle_sidebar p-4 text-center cursor-pointer border-y-[1px] border-gray-500 hover:bg-yellow-100 hover:text-black "
        onClick={handleToggleSidebar}
      >
        <div className="w-full px-2">
          {showSidebar ? (
            <FaArrowLeft className="ml-auto" />
          ) : (
            <FaArrowRight className="ml-auto" />
          )}
        </div>
      </div>
      <nav
        className={`${
          !showSidebar ? "" : " w-52"
        } flex flex-col divide-y-[1px] divide-solid divide-gray-500 transition-all ease-in-out duration-1000`}
      >
        <div
          onClick={() => navigate("/admin")}
          className={` ${
            !showSidebar ? "flex justify-center" : ""
          } flex items-center p-4 cursor-pointer hover:bg-yellow-100 hover:text-black`}
          onMouseEnter={() => handleMouseEnter("Cab service")}
          onMouseLeave={handleMouseLeave}
        >
          <FaTaxi />
          <span
            className={
              !showSidebar ? "sr-only flex items-center justify-center" : "ml-2"
            }
          >
            Cab service
          </span>
          {!showSidebar && tooltipText === "Cab service" && (
            <div className="absolute  bg-gray-800 opacity-80 text-white text-xs py-1 px-3 rounded-full ml-36 w-24">
              {tooltipText}
            </div>
          )}
        </div>
        <div
          onClick={() => navigate("/all-vehicles")}
          className={` ${
            !showSidebar ? "flex justify-center " : ""
          } flex items-center p-4 cursor-pointer hover:bg-yellow-100 hover:text-black`}
          onMouseEnter={() => handleMouseEnter("Vehicles")}
          onMouseLeave={handleMouseLeave}
        >
          <IoCarSport />
          <span className={!showSidebar ? "sr-only" : "ml-2"}>Vehicles</span>
          {!showSidebar && tooltipText === "Vehicles" && (
            <div className="absolute  bg-gray-800 opacity-80 text-white text-xs py-1 px-3 rounded-full ml-36 w-20">
              {tooltipText}
            </div>
          )}
        </div>
        <div
          onClick={() => navigate("/new-vehicle")}
          className={` ${
            !showSidebar ? "flex justify-center" : ""
          } flex items-center p-4 cursor-pointer hover:bg-yellow-100 hover:text-black`}
          onMouseEnter={() => handleMouseEnter("New Vehicle")}
          onMouseLeave={handleMouseLeave}
        >
          <FaPlus />
          <span className={!showSidebar ? "sr-only" : "ml-2"}>New Vehicle</span>
          {!showSidebar && tooltipText === "New Vehicle" && (
            <div className="absolute bg-gray-800 opacity-80 text-white text-xs py-1 px-3 rounded-full ml-36 w-24">
              {tooltipText}
            </div>
          )}
        </div>
        <div
          onClick={() => navigate("/rental-bookings")}
          className={` ${
            !showSidebar ? "flex justify-center" : ""
          } flex items-center p-4 cursor-pointer hover:bg-yellow-100 hover:text-black`}
          onMouseEnter={() => handleMouseEnter("Rental Bookings")}
          onMouseLeave={handleMouseLeave}
        >
          <MdCarRental />
          <span className={!showSidebar ? "sr-only" : "ml-2"}>
            Rental Bookings
          </span>
          {!showSidebar && tooltipText === "Rental Bookings" && (
            <div className="absolute bg-gray-800 opacity-80 text-white  text-xs py-1 px-3 rounded-full ml-36 w-28">
              {tooltipText}
            </div>
          )}
        </div>
        <div
          onClick={() => {
            localStorage.clear();
            setAdminAuth("");
          }}
          className={` ${
            !showSidebar ? "flex justify-center" : ""
          } flex items-center p-4 cursor-pointer hover:bg-yellow-100 hover:text-black`}
          onMouseEnter={() => handleMouseEnter("Signout")}
          onMouseLeave={handleMouseLeave}
        >
          <FaSignOutAlt />
          <span className={!showSidebar ? "sr-only" : "ml-2"}>Signout</span>
          {!showSidebar && tooltipText === "Signout" && (
            <div className="absolute bg-gray-800 opacity-80 text-white text-xs py-1 px-3 rounded-full ml-36 w-20">
              {tooltipText}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default AdminSidebar;
