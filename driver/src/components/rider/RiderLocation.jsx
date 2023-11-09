import { useEffect, useRef, useState } from "react";

//icons
import { FaSpinner } from "react-icons/fa";
// GOOGLE MAP COMPONENETS
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const RiderLocation = () => {
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
    <div className="h-full w-full">
      <GoogleMap
        zoom={7}
        options={{
          zoonControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      ></GoogleMap>
    </div>
  );
};

export default RiderLocation;
