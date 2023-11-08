import { useState, useEffect } from "react";
import axios from "../../helper/axios";
import MapLocation from "../../components/rider/MapLocation";
import SearchTable from "../../components/rider/SearchTable";

const SearchPassenger = () => {
  // get passengers' bookings
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

  // set passenger route
  const [passengerRoute, setPassengerRoute] = useState({});
  // calculate distance and duration
  const [calculated, setCalculated] = useState(false);
  const [passengerDetails, setPassengerDetails] = useState({});
  // start button means acceptd passenger booking
  const [start, setStart] = useState(false);

  const startRoute = async () => {
    setStart(true);
    console.log(passengerDetails);
  };

  return (
    <div className=" w-full h-full">
      <div className="border-2 w-full h-full flex flex-col">
        {/* passenger's list */}
        <SearchTable
          data={data}
          setPassengerRoute={setPassengerRoute}
          setPassengerDetails={setPassengerDetails}
          start={start}
          loading={loading}
        />
        {/* map */}
        <MapLocation
          passengerRoute={passengerRoute}
          setPassengerRoute={setPassengerRoute}
          setCalculated={setCalculated}
          calculated={calculated}
          passengerDetails={passengerDetails}
          setPassengerDetails={setPassengerDetails}
          start={start}
          setStart={setStart}
          startRoute={startRoute}
        />
      </div>
    </div>
  );
};

export default SearchPassenger;
