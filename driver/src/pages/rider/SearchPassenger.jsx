import { useState, useEffect } from "react";
import axios from "../../helper/axios";
import MapLocation from "../../components/rider/MapLocation";
// icons
import SearchTable from "../../components/rider/SearchTable";

const SearchPassenger = () => {
  // get passengers' bookings
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const resp = await axios.get("/get-bookings-data");
      console.log(resp.data);
      setData(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // set passenger route
  const [passengerRoute, setPassengerRoute] = useState({});

  return (
    <div className=" w-full h-full">
      <div className="border-2 w-full h-full grid grid-cols-1 lg:grid-cols-7 ">
        {/* passenger's list */}
        <SearchTable data={data} setPassengerRoute={setPassengerRoute} />
        {/* map */}
        <MapLocation
          passengerRoute={passengerRoute}
          setPassengerRoute={setPassengerRoute}
        />
      </div>
    </div>
  );
};

export default SearchPassenger;
