import { useEffect, useRef, useState } from "react";

//icons
import { FaSpinner } from "react-icons/fa";
// GOOGLE MAP COMPONENETS
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const MapLocation = ({ setOpenMap, openMap, bookingData, location }) => {
  console.log(bookingData);
  // LOAD JS API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA312x40OgaxL1ifZyztNEw1vwkMOxQPx8",
    libraries: ["places"],
  });

  // DIRECTION RESPONSE
  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState(bookingData.distance);
  const [duration, setDuration] = useState(bookingData.duration);
  /**@type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef(); //pickup location
  /**@type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();
  // function to calcualate
  async function calculateDirectionRoute() {
    const directionService = new google.maps.DirectionsService();
    const directionResult = await directionService.route({
      origin: bookingData?.pickupLocation?.address,
      destination: bookingData?.destinationLocation,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    // console.log(directionResult);
    // console.log(directionResult?.routes[0]?.legs[0]?.distance?.text);
    // console.log(directionResult?.routes[0]?.legs[0]?.duration?.text);

    setDirectionResponse(directionResult);
    setDistance(directionResult?.routes[0]?.legs[0]?.distance?.text);
    setDuration(directionResult?.routes[0]?.legs[0]?.duration?.text);
  }
  function clearDirectionRoute() {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
    // setPassengerRoute({ pickup: "", destination: "" });
  }
  useEffect(() => {
    calculateDirectionRoute();
  }, [bookingData?.destinationLocation]);
  // if js api loaded or not
  if (!isLoaded) {
    return <FaSpinner className="text-2xl" />;
  }

  return (
    <main className={`absolute  bg-white/70 w-full h-full z-20`}>
      <div className="p-2 border-[1px]   bg-blue-400/30 shadow-md shadow-blue-300 ">
        <section className="flex justify-between">
          <p className="text-gray-600">Passenger details</p>
          <p onClick={() => setOpenMap(false)} className="cursor-pointer">
            x
          </p>
        </section>
        <section>
          <p>Name: {bookingData?.passengerId?.name || "---"}</p>
          <p>Email: {bookingData?.passengerId?.email || "---"}</p>
          <p>Contact: {bookingData?.passengerId?.contact || "---"}</p>
        </section>
      </div>
      <div className="h-full w-full ">
        <GoogleMap
          center={location}
          zoom={7}
          options={{
            zoonControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          {directionResponse && (
            <DirectionsRenderer directions={directionResponse} />
          )}
        </GoogleMap>
      </div>
    </main>
  );
};

export default MapLocation;
