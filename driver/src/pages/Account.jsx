import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "../components/rider/Signup";
import Signin from "../components/rider/Signin";
import AdminSignin from "../components/admin/AdminSignin";

const Account = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  const [newRider, setNewRider] = useState(false);

  //* select rider or admin tab
  const [activeTab, setActiveTab] = useState("rider");
  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="h-[100vh] w-full 
    bg-[url('https://images.pexels.com/photos/5835266/pexels-photo-5835266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"
    >
      {newRider ? (
        <div className="bg-black/40 h-full w-full flex flex-col justify-center items-center">
          <Signup setNewRider={setNewRider} setAdmin={setAdmin} />
        </div>
      ) : (
        <div className="bg-black/40 h-full w-full flex flex-col justify-center items-center">
          <div className="flex justify-between  w-[90%]  md:w-[30rem]  ">
            <button
              className={`w-1/2  text-white  py-2 rounded-md
            ${activeTab === "rider" ? " bg-orange-300/80" : "bg-gray-500/60"}`}
              onClick={() => {
                handleTab("rider");
                setAdmin(false);
              }}
            >
              Rider
            </button>
            <button
              className={`w-1/2  text-white  py-2 rounded-md
            ${activeTab === "admin" ? "bg-orange-300/80" : " bg-gray-500/60"}`}
              onClick={() => {
                handleTab("admin");
                setAdmin(true);
              }}
            >
              Admin
            </button>
          </div>
          <div className="p-2">
            {!admin ? (
              <Signin setNewRider={setNewRider} />
            ) : (
              <AdminSignin setAdmin={setAdmin} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
