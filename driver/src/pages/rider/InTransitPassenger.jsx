import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MapLocation from "../../components/rider/MapLocation";
const InTransitPassenger = ({ location }) => {
  const data = useSelector((store) => store.rider);
  const [bookingData, setBookingData] = useState([]);
  useEffect(() => {
    setBookingData(data);
  }, []);
  return (
    <div className="w-full h-full">
      <MapLocation bookingData={bookingData} location={location} />
    </div>
  );
};

export default InTransitPassenger;
