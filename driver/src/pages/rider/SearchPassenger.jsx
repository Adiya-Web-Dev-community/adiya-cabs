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
import { useNavigate } from "react-router-dom";
// redux slice
import MapLocation from "../../components/rider/MapLocation";

const SearchPassenger = () => {
  const navigate = useNavigate();
  const riderToken = localStorage.getItem("driverToken");
  // handle navigation button waiting for pickup $ in transit
  const [activeTab, setActiveTab] = useState("waitingForPickup");
  const handleSelectButton = (tab) => {
    setActiveTab(tab);
  };
  // The empty dependency array ensures that this effect runs only once

  //! GET RIDERS CITY AND GET BOOKING DATA ACC TO IT
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
  const [latLng, setLatLng] = useState({});

  // get current location
  useEffect(() => {
    const getLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            console.log(position?.coords);
            const response = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?q=${position?.coords?.latitude}+${position?.coords?.longitude}&key=166e9c08befd40909204b8042a4b028a`
            );
            const currentLoc = `${response?.data?.results[0]?.components?.city},${response?.data?.results[0]?.components?.state},${response?.data?.results[0]?.components?.country}`;
            setCity(currentLoc);
            // On success, set the location state
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            // fectch city using lat and lng
          },

          (error) => {
            // On error, set the error state
            setError(`Error: ${error.message}`);
          }
        );
      } else {
        setError("Geolocation is not supported by your browser.");
      }
    };

    // Call the function to get the location when the component mounts
    getLocation();
  }, []);
  // AUTOCOMPLETE ON PLACE CHANGE
  const [locationObj, setLocationObj] = useState({});
  const [locationChange, setLocationChage] = useState(false);
  function onLoad(selectPlace) {
    setLocationObj(selectPlace);
  }
  async function onPlaceChanged() {
    setLocationChage(true);
    const place = locationObj.getPlace();
    const { lat, lng } = place.geometry.location;
    //!lat and long are function , call them
    // console.log(lat(), lng());
    let latitude = lat();
    let longitude = lng();
    setLatLng({ lat: latitude, longitude: lng });
    setLoading(true);

    // fectch city using lat and lng
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=166e9c08befd40909204b8042a4b028a`
    );
    const searchCity = response?.data?.results[0].components?.city;
    // console.log(searchCity);
    setCity(searchCity);
    setLoading(false);
  }

  const getData = async () => {
    try {
      // get data when fetched city by lat & lng
      const resp = await axios.get(`/current-bookings?city=${city}`, {
        headers: { authorization: riderToken },
      });
      setData(resp.data.bookingData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [city]);

  // riders current location on click=>update button
  const riderLocationRef = useRef();
  const [riderCurrentLocation, setRiderCurrentLocation] = useState("");
  const handleRiderCurrentLocation = async () => {
    setRiderCurrentLocation(riderLocationRef.current.value);
    const resp = await axios.put(
      "/current-location-update",
      { city: city },
      { headers: { authorization: riderToken } }
    );
    setLocationChage(false);
    toast.success("Location updated");
  };

  // open map after accepting booking
  const [openMap, setOpenMap] = useState(false);

  //! Load google map api
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA312x40OgaxL1ifZyztNEw1vwkMOxQPx8",
    libraries: ["places"],
  });
  if (!isLoaded) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className=" w-full h-full  ">
        {/* col1 */}
        <div className="">
          <div className="flex justify-between w-full ">
            <button
              className={`w-1/2 py-2 text-sm disabled:cursor-not-allowed  ${
                activeTab === "waitingForPickup"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black "
              } `}
              disabled={openMap === true}
              onClick={() => handleSelectButton("waitingForPickup")}
            >
              Waiting for pickup
            </button>
            <button
              className={`w-1/2 py-2 text-sm disabled:cursor-not-allowed ${
                activeTab === "inTransit"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              } `}
              onClick={() => handleSelectButton("inTransit")}
              disabled={openMap === false}
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
                  defaultValue={city}
                  className={`border-[1px] border-gray-300 py-0.5 px-2
                italic w-[100%] rounded-md   ${
                  locationChange ? "border-red-500" : "border-gray-300"
                } `}
                />
              </Autocomplete>
              <button
                className={` bg-yellow-200 rounded-md px-5 disabled:cursor-not-allowed cursor-pointer `}
                disabled={!riderLocationRef}
                onClick={() => handleRiderCurrentLocation()}
              >
                Update
              </button>
            </div>
            {!locationChange ? null : (
              <p className="text-xs text-red-600 px-2">
                Please update new current location !
              </p>
            )}
          </div>
          {activeTab === "waitingForPickup" && !openMap ? (
            <div className="space-y-5 overflow-y-auto py-6 h-[40rem] md:px-12  ">
              {loading ? (
                <FaSpinner className="animate-spin text-gray-300 text-2xl text-center" />
              ) : data.length ? (
                data.map((obj, i) => {
                  return (
                    <PassengerCard
                      key={i}
                      obj={obj}
                      riderLocationRef={riderLocationRef}
                      setOpenMap={setOpenMap}
                      setActiveTab={setActiveTab}
                    />
                  );
                })
              ) : (
                <p className="text-center">No active passenegers</p>
              )}
            </div>
          ) : (
            <InTransitPassenger
              setActiveTab={setActiveTab}
              latLng={latLng}
              location={location}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPassenger;
