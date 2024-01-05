import { useEffect, useState } from "react";
import axios from "../../helper/axios";
// components
import Table from "../../components/admin/Table";
import LoadingTable from "../../components/admin/LoadingTable";
import CarTable from "../../components/admin/CarTable";

const CarsData = () => {
  const [loading, setLoading] = useState(true);

  // get riders data
  const [carData, setCarData] = useState([]);
  const getData = async () => {
    try {
      const resp = await axios.get("/admin/cars");
      console.log(resp);
      if (resp.data.success) {
        setLoading(false);
        setCarData(resp.data.Cars);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-[100vh] bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300">
      {/* table */}

      <div className="w-[99%] m-auto ">
        {loading ? (
          <LoadingTable />
        ) : carData.length ? (
          <CarTable data={carData} getData={getData} />
        ) : (
          <div className="text-5xl text-center opacity-25  ">
            <h1 className="py-[10rem] ">NO DATA FOUND</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsData;
