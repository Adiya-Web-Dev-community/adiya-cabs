import { useEffect } from "react";
import axios from "../../helper/axios";

const SearchPassenger = () => {
  // get passengers' bookings
  const getData = async () => {
    try {
      const resp = await axios.get("/get-bookings-data");
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  });

  return <div className="w-full"></div>;
};

export default SearchPassenger;
