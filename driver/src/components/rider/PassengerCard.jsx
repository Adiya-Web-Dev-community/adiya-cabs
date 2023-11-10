import { useState, useEffect } from "react";

// icons
import { MdTripOrigin } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoNavigateSharp } from "react-icons/io5";

const PassengerCard = ({ obj, riderLocationRef, setActiveTab }) => {
  // console.log(riderLocationRef.current.value);
  //! Calculate rider current location to passenger pickup location distance
  const [riderToPickUpDistance, setRiderToPickUpDistance] = useState(null);
  const calRiderToPickupDistance = async () => {
    // console.log(obj);
    const directionService = new google.maps.DirectionsService();
    const directionResult = await directionService.route({
      origin: riderLocationRef.current.value,
      destination: obj.pickupLocation.address,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    // console.log("result", directionResult);
    setRiderToPickUpDistance(
      directionResult.routes[0]?.legs[0]?.distance?.text
    );
  };
  useEffect(() => {
    calRiderToPickupDistance();
  });

  return (
    <div className="shadow-md shadow-gray-300 border-[1px] border-gray-200 py-3 px-2 rounded-md mx-1 md:mx-3">
      <div className="flex justify-between flex-col ">
        <div className="relative w-[90%] ">
          <p className="flex gap-1 italic">
            <MdTripOrigin className="text-orange-400 opacity-70" />
            <span className="text-sm">{obj.pickupLocation?.address}</span>
          </p>
          <p className="flex gap-1 mt-5 italic">
            <FaLocationDot className="text-red-600 opacity-70 " />
            <span className="text-sm">{obj.destinationLocation}</span>
          </p>
          <div className="space-y-2 mt-2 pt-3 pb-3 italic border-t-[1px] border-gray-400 text-sm">
            <p>
              <span>Distance: </span>
              <span className="text-blue-700 pl-3">{obj.distance}</span>
            </p>
            <p>
              <span>Duration: </span>
              <span className="text-blue-700 pl-3">{obj.duration}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="flex gap-2 text-sm">
            <span>Pickup</span>
            <FaArrowRightLong className="mt-1" />
            <span className="text-blue-500">{riderToPickUpDistance}</span>
            <span>away</span>
          </p>
          <button
            onClick={() => setActiveTab("inTransit")}
            className="border-[1px] rounded-md bg-gray-200 px-1 py-1 hover:bg-black hover:text-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassengerCard;
