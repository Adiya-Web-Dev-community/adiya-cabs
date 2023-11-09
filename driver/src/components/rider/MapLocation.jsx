import { useEffect, useRef, useState } from "react";

//icons
import { FaSpinner } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { toast } from "react-hot-toast";
//images
// GOOGLE MAP COMPONENETS
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

// set default center for map  ex-mumbai
const center = { lat: 18.5204, lng: 73.8567 };

const MapLocation = ({
  passengerRoute,
  setPassengerRoute,
  calculated,
  setCalculated,
  passengerDetails,
  setPassengerDetails,
  start,
  setStart,
  startRoute,
}) => {
  const [loading, setLoading] = useState(false);

  // navigate again to map default position when clicked on icon
  const [map, setMap] = useState(/**@type google.maps.Map */ (null));

  // DIRECTION RESPONSE
  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  /**@type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef(); //pickup location
  /**@type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();
  // function to calcualate
  async function calculateDirectionRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      toast("Select Route", {
        icon: <GrCircleInformation className="text-white" />,
        style: {
          background: "#FF5733 ",
          color: "white",
        },
      });
    } else {
      setLoading(true);
      const directionService = new google.maps.DirectionsService();
      const directionResult = await directionService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      // console.log(directionResult);
      // console.log(directionResult?.routes[0]?.legs[0]?.distance?.text);
      // console.log(directionResult?.routes[0]?.legs[0]?.duration?.text);

      setDirectionResponse(directionResult);
      setDistance(directionResult?.routes[0]?.legs[0]?.distance?.text);
      setDuration(directionResult?.routes[0]?.legs[0]?.duration?.text);
      setCalculated(true);
      setLoading(false);
    }
  }
  function clearDirectionRoute() {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
    setPassengerRoute({ pickup: "", destination: "" });
    setCalculated(false);
    setStart(false);
    setPassengerDetails({ passenderId: "" });
  }

  // set and show passenger route
  useEffect(() => {
    if (passengerRoute.pickup || passengerRoute.destination) {
      originRef.current.value = passengerRoute.pickup;
      destinationRef.current.value = passengerRoute.destination;
    }
  }, [passengerRoute]);
  if (passengerRoute.pickup || passengerRoute.destination) {
    // console.log(
    //   "ref values",
    //   originRef.current.value,
    //   destinationRef.current.value
    // );
  } else {
    // console.log("please select any route");
  }

  // LOAD JS API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCzSOQHv63VsWrPjwRI58388Dtui5T7MdI",
    libraries: ["places"],
  });
  // if js api loaded or not
  if (!isLoaded) {
    return <FaSpinner className="text-2xl" />;
  }

  return (
    <div className="border-t-[0.5rem] border-gray-300 md:border-t-0" id="map">
      {/* google map displaying markers directions*/}
      <div className="absolute w-full h-[45rem] text-white">
        <GoogleMap
          center={center}
          zoom={10}
          // without this map would be invisible
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoonControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          // when clicked on navigate icon
          onLoad={(map) => setMap(map)}
        >
          {/* marker not visible */}
          {start ? null : (
            <Marker
              position={center}
              options={{
                icon: {
                  url: "https://freesvg.org/img/car_topview.png",
                  scaledSize: new window.google.maps.Size(50, 50),
                },
              }}
            />
          )}
          {directionResponse && (
            <DirectionsRenderer directions={directionResponse} />
          )}
        </GoogleMap>
      </div>
      {/* search box */}
      <div className="absolute right-0 m-1 bg-white w-fit pt-4 pb-2 px-5  rounded-xl">
        <section className="flex justify-end pb-3">
          <button
            className="border-[1px] border-gray-200 text-xs px-2 py-0.5 hover:bg-black hover:text-white rounded-md"
            onClick={clearDirectionRoute}
          >
            Clear Route
          </button>
        </section>
        <section className="space-y-3  flex flex-col ">
          <div className="flex gap-1 ">
            <Autocomplete>
              <input
                type="text"
                placeholder="Pickup"
                ref={originRef}
                className="border-2 py-2 px-2  italic rounded-xl w-full"
              />
            </Autocomplete>
          </div>

          <div className="flex gap-2">
            <Autocomplete>
              <input
                type="text"
                placeholder="Destination"
                ref={destinationRef}
                className="border-2 py-2 px-2  italic rounded-xl"
              />
            </Autocomplete>
          </div>
        </section>

        <section className="py-2  flex  flex-col justify-between gap-2 mt-7 ">
          {calculated && (
            <>
              <h1 className="underline underline-offset-2 decoration-gray-400">
                Route
              </h1>
              <div>
                <p>
                  <span className="italic"> Distance: </span>
                  <span className="text-blue-600">{distance}</span>
                </p>
              </div>
              <div>
                <p>
                  <span className="italic"> Duration: </span>
                  <span className="text-blue-600">{duration}</span>
                </p>
              </div>
            </>
          )}
          {start && (
            <>
              <h1 className="underline underline-offset-2 decoration-gray-400">
                Passenger
              </h1>
              <div>
                <p>
                  <span className="italic"> Name: </span>
                  <span className="text-blue-600">
                    {passengerDetails.passengerId.name || "---"}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span className="italic"> Contact: </span>
                  <span className="text-blue-600">
                    {passengerDetails.passengerId.contact || "---"}
                  </span>
                </p>
              </div>
            </>
          )}
        </section>
        <section className="py-2">
          {!calculated ? (
            <button
              className="w-full bg-gray-200 py-1.5  px-2  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  rounded-lg flex justify-center "
              onClick={calculateDirectionRoute}
            >
              {loading ? (
                <FaSpinner className="animate-spin m-auto" />
              ) : (
                "Calculate Route"
              )}
            </button>
          ) : null}
          {calculated && !start ? (
            <button
              className="w-full bg-gray-200 py-1.5  px-2  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  rounded-lg flex justify-center "
              onClick={startRoute}
            >
              {loading ? (
                <FaSpinner className="animate-spin m-auto" />
              ) : (
                "Start"
              )}
            </button>
          ) : null}
          {start ? (
            <a href="#">
              <button
                className="w-full bg-gray-200 py-1.5  px-2  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  rounded-lg flex justify-center "
                onClick={clearDirectionRoute}
              >
                {loading ? (
                  <FaSpinner className="animate-spin m-auto" />
                ) : (
                  "Cancel"
                )}
              </button>
            </a>
          ) : null}
        </section>
      </div>
    </div>
  );
};

export default MapLocation;
