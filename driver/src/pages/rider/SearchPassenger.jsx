import { useState, useEffect, useRef } from "react";
import axios from "../../helper/axios";
// COMPONENTS
import PassengerCard from "../../components/rider/PassengerCard";
import InTransitPassenger from "./InTransitPassenger";
// GOOGLE MAP COMPONENTS
import {
  Autocomplete,
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";
// icons
import { FaSpinner } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import RiderLocation from "../../components/rider/RiderLocation";

const SearchPassenger = () => {
  const riderToken = localStorage.getItem("driverToken");

  // handle navigation button waiting for pickup $ in transit
  const [activeTab, setActiveTab] = useState("waitingForPickup");
  // const [inTransit, setIntransit] = useState(false);
  const handleSelectButton = (tab) => {
    setActiveTab(tab);
  };

  // get passengers' bookings-> waiting for pickups
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios.get("/get-bookings-data");
      console.log(resp.data);
      setData(resp.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // riders current location
  const [riderCurrentLocation, setRiderCurrentLocation] = useState("");
  const riderLocationRef = useRef();
  const handleRiderCurrentLocation = () => {
    setRiderCurrentLocation(riderLocationRef.current.value);
    toast.success("Location updated");
  };

  //! GET RIDERS CITY
  // AUTOCOMPLETE ON PLACE CHANGE
  const [locationObj, setLocationObj] = useState({});
  function onLoad(selectPlace) {
    setLocationObj(selectPlace);
  }
  async function onPlaceChanged() {
    const place = locationObj.getPlace();
    const { lat, lng } = place.geometry.location;
    // lat and long are function , call them
    let latitude = lat();
    let longitude = lng();

    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=166e9c08befd40909204b8042a4b028a`
    );
    console.log(response?.data?.results[0].components?.city);
  }

  //! Load google map api
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCzSOQHv63VsWrPjwRI58388Dtui5T7MdI",
    libraries: ["places"],
  });
  if (!isLoaded) {
    return <p>Loading</p>;
  }

  return (
    <div className=" w-full h-full  ">
      {/* col1 */}
      <div className="">
        <div className="flex justify-between w-full ">
          <button
            className={`w-1/2 py-2 text-sm ${
              activeTab === "waitingForPickup"
                ? "bg-black text-white"
                : "bg-gray-200 text-black "
            } `}
            onClick={() => handleSelectButton("waitingForPickup")}
          >
            Waiting for pickup
          </button>
          <button
            className={`w-1/2 py-2 text-sm ${
              activeTab === "inTransit"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            } `}
            onClick={() => handleSelectButton("inTransit")}
          >
            In transit
          </button>
        </div>
        <div className="flex flex-col gap-1 py-2 px-2  justify-between bg-blue-50 shadow-md shadow-blue-300">
          <p className="text-blue-300">Your current location</p>
          <div className="flex gap-5 ">
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <input
                type="text"
                placeholder="Current Location"
                ref={riderLocationRef}
                className={`border-[1px] border-gray-300 py-0.5 px-2
                italic w-[100%] rounded-md   ${
                  !riderCurrentLocation ? "border-red-500" : "border-gray-300"
                }`}
              />
            </Autocomplete>
            <button
              className={`bg-yellow-200 rounded-md px-5 disabled:cursor-not-allowed cursor-pointer `}
              disabled={!riderLocationRef}
              onClick={() => handleRiderCurrentLocation()}
            >
              Update
            </button>
          </div>
          {riderCurrentLocation ? null : (
            <p className="text-xs text-red-600 px-2">
              Please update current location !
            </p>
          )}
        </div>

        {activeTab === "waitingForPickup" ? (
          <div className="space-y-5 overflow-y-auto py-6 h-[40rem] md:px-12  ">
            {loading ? (
              <FaSpinner />
            ) : data.length && riderCurrentLocation ? (
              data.map((obj, i) => {
                return (
                  <PassengerCard
                    key={i}
                    obj={obj}
                    riderLocationRef={riderLocationRef}
                    setActiveTab={setActiveTab}
                  />
                );
              })
            ) : (
              <p className="text-center">No active passenegers</p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchPassenger;
