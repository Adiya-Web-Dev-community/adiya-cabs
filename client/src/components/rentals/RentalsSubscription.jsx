import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LocationPicker from "./LocationPicker";
import { setInitialData } from "../../store/rental";
import DatePicker from "./DatePicker";
const RentalsSubscription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const obj = {
    calender1: {
      time: new Date().toLocaleTimeString(),
      date: new Date(),
    },
    calender2: {
      time: new Date().toLocaleTimeString(),
      date: new Date(),
    },
  };
  obj.calender2.date.setDate(new Date().getDate() + 15);

  const [active, setActive] = useState("");
  const [typeOfSubscription, setSubscription] = useState("daily");
  const [dateObj, setDateObj] = useState(obj.calender1);
  const [dateObj2, setDateObj2] = useState(obj.calender2);
  const [selectedLocation, setSelectedLocation] = useState("Delhi");

  const handlePickupDate = (value) => {
    setActive((prev) => (prev === value ? "" : value));
  };

  const handleSubsCriptionType = (type) => {
    setSubscription(type);
    setActive("");
    setDateObj(obj.calender1);
    setDateObj2(obj.calender2);
  };
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  //handle search
  const handleSearch = () => {
    dispatch(
      setInitialData({
        pickupDate: dateObj,
        dropDate: dateObj2,
        city: selectedLocation,
      })
    );
  };
  console.log("PICKUPDATE:", dateObj);
  console.log("DROPDATE", dateObj2);
  return (
    <section className=" self-start  mt-16 justify-center">
       <div className="bg-white ">
        <nav className="flex w-full md:w-full">
          <button
            onClick={() => handleSubsCriptionType("daily")}
            className={`p-3 px-8  
        text-md rounded-tl-xl border border-r-0 ${
          typeOfSubscription === "daily"
            ? "bg-red-500 text-white"
            : "hover:bg-red-50"
        } `}
          >
            Daily Rentals
          </button>
          <button
            onClick={() => handleSubsCriptionType("monthly")}
            className={`p-3 px-8  text-md  rounded-tr-xl border 
       border-l-0 bg-gray-100   duration-200 ${
         typeOfSubscription === "monthly"
           ? "bg-red-500 text-white"
           : "hover:bg-red-50"
       } `}
          >
            Monthly Subscription
          </button>
        </nav>
        <div className="w-full md:w-full shadow-lg flex justify-between  lg:justify-between xl:w-[40rem]">
          <div className="md:py-2 py-0 text-start font-semibold md:flex ">
            <div className="flex lg:gap-36 xl:gap-0">
              <div
                className={`p-3 w-full  rounded-lg cursor-pointer border hover:border-gray-300 ${
                  active === "Location"
                    ? "border-gray-300"
                    : "border-transparent"
                }`}
                onClick={() => handlePickupDate("Location")}
              >
                <h2 className="text-lg flex p-0 text-gray-600">
                  {" "}
                  Location
                  <MdOutlineKeyboardArrowDown
                    className={`cursor-pointer duration-200 mx-2 mt-1 ${
                      active === "Location" ? "-rotate-180" : ""
                    }`}
                  />{" "}
                </h2>
                <p className="text-sm text-gray-400"> {selectedLocation}</p>
              </div>

              <div
                className={`p-3 w-full  rounded-lg cursor-pointer border hover:border-gray-300 ${
                  active === "Pick-Up Date"
                    ? "border-gray-300"
                    : "border-transparent"
                }`}
                onClick={() => handlePickupDate("Pick-Up Date")}
              >
                <h2 className="text-lg flex p-0 text-gray-600 ">
                  {" "}
                  Pick-Up Date{" "}
                  <MdOutlineKeyboardArrowDown
                    className={`cursor-pointer duration-200 mx-2 mt-1 ${
                      active === "Pick-Up Date" ? "-rotate-180" : ""
                    }`}
                  />{" "}
                </h2>
                <p className="text-sm text-gray-400 font-montserrat">
                  {" "}
                  {new Date(dateObj.date).toDateString()} <br /> {dateObj.time}{" "}
                </p>
              </div>
            </div>
            <div className="flex lg:gap-36 xl:gap-0">
              <div
                className={`p-3 ${
                  typeOfSubscription === "monthly" ? "hidden" : ""
                } w-full mx-2 rounded-lg cursor-pointer border hover:border-gray-300 ${
                  active === "Return Date"
                    ? "border-gray-300"
                    : "border-transparent"
                }`}
                onClick={() => handlePickupDate("Return Date")}
              >
                <h2 className="text-lg flex p-0 text-gray-600 lg:ml-22 xl:ml-0">
                  {" "}
                  Return Date
                  <MdOutlineKeyboardArrowDown
                    className={`cursor-pointer duration-200 mx-2 mt-1 ${
                      active === "Return Date" ? "-rotate-180" : ""
                    }`}
                  />{" "}
                </h2>
                <p className="text-sm text-gray-400 font-montserrat lg:ml-22 xl:ml-0">
                  {" "}
                  {new Date(dateObj2.date).toDateString()} <br />{" "}
                  {dateObj2.time}{" "}
                </p>
              </div>
              <div className="h-[inherit] flex py-2 items-center  p-4 ">
                <button
                  className="bg-red-500 p-[6px] px-8 text-md text-white rounded-[40px]  cursor-pointer"
                  onClick={() => {
                    handleSearch();
                    navigate("/rentals-booking");
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div
            className={`w-full shadow-lg  mt-5 px-8 py-3 absolute z-[2] top-full left-0 bg-white ${
              active === "Location" ? "block" : "hidden"
            }`}
          >
            <LocationPicker onLocationChange={handleLocationChange} />
          </div>
          <div
            className={`w-full shadow-lg  mt-5 px-3  absolute z-[2] top-full left-0 bg-white ${
              active === "Pick-Up Date" ? "block" : "hidden"
            }`}
          >
            <DatePicker
              name={"Pickup"}
              getDate={setDateObj}
              dateObj={dateObj}
              endTo={typeOfSubscription === "daily" ? dateObj2.date : false}
            />
          </div>
          <div
            className={`w-full shadow-lg  mt-5 px-3  absolute z-[2] top-full left-0 bg-white ${
              active === "Return Date" ? "block" : "hidden"
            }`}
          >
            <DatePicker
              name={"Return"}
              getDate={setDateObj2}
              dateObj={dateObj2}
              startTo={dateObj.date}
            />
          </div>
        </div>
        <h2 className="md:text-5xl lg:text-6xl lg:justify-center text-lg text-gray-600 mt-14 font-semibold justify-center font-montserrat ">
          Our vehicles are meticulously maintained to guarantee a comfortable
          journey,
        </h2>
        <p className="text-lg mt-6 text-gray-400 font-montserrat">
          Book your rental vehicle for a seamless travel experience!
        </p>
      </div> 
      
    </section>
  );
};

export default RentalsSubscription;
