import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../helper/axios";
// components
// import Table from "../../components/admin/Table";
import LoadingTable from "../../components/admin/LoadingTable";
import CarTable from "../../components/admin/CarTable";
import { setShowCarDetailsPopup, setCarDetails } from "../../store/adminSlice";
import ViewCarDetails from "../../model/ViewCarDetails";

const CarsData = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { showCarDetailsPopup } = useSelector((state) => state.admin);

  // get riders data
  const [carData, setCarData] = useState([]);
  const getData = async () => {
    try {
      const resp = await axios.get("/admin/cars");
      console.log(resp);
      if (resp.data.success) {
        setLoading(false);
        console.log(resp.data);
        setCarData(resp.data.Cars);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // get individual car details
  const [carId, setCarId] = useState("");
  const fetchCarDetails = async () => {
    try {
      const resp = await axios.get(`/admin/cars/${carId}`);
      console.log("car details", resp);
      if (resp.data.success) {
        dispatch(setCarDetails(resp.data.car));
        dispatch(setShowCarDetailsPopup(true));
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (carId) {
      fetchCarDetails();
    }
  }, [carId]);

  return (
    <div className="w-full h-[90vh] bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200">
      {/* table */}

      <div className="w-full m-auto ">
        {loading ? (
          <LoadingTable />
        ) : carData.length ? (
          <CarTable data={carData} getData={getData} setCarId={setCarId} />
        ) : (
          <div className="text-5xl text-center opacity-25  ">
            <h1 className="py-[10rem] ">NO DATA FOUND</h1>
          </div>
        )}
      </div>
      {showCarDetailsPopup && <ViewCarDetails />}
    </div>
  );
};

export default CarsData;
