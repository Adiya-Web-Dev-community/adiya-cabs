import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarList from "./CarList";
import FilterBox from "./FilterBox";
import axiosInstance from "../../api/axiosInstance";
import { setCarList } from "../../store/carSlice";
const RentalsBooking = () => {
  const dispatch = useDispatch();
  const { car } = useSelector((state) => state);
  // filter box data
  const [filterInputs, setFilterInputs] = useState({
    fuelType: "",
    transmissionType: "",
    seatingCapacity: "",
    luggageCapacity: "",
  });

  //fetch cars data
  const handleFetchCarsList = async () => {
    try {
      const resp = await axiosInstance.get(
        `/cars?fuelType=${filterInputs.fuelType}&transmissionType=${filterInputs.transmissionType}&seatingCapacity=${filterInputs.seatingCapacity}&luggageCapacity=${filterInputs.luggageCapacity}`
      );
      // w=-w5.log(resp.data.data);
      dispatch(setCarList(resp.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleFetchCarsList();
  }, []);
  useEffect(() => {
    handleFetchCarsList();
  }, [filterInputs]);

  return (
    <div className="py-20 mx-10">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 rounded-lg h-auto">
          <FilterBox
            filterInputs={filterInputs}
            setFilterInputs={setFilterInputs}
            handleFetchCarsList={handleFetchCarsList}
          />
        </div>
        <div className="flex col-span-3 ">
          {/* <h1 className="pl-4 pb-4 font-bold text-xl text-red-700">
            Results : {car?.carList?.length}
          </h1> */}
          <CarList />
        </div>
      </div>
    </div>
  );
};

export default RentalsBooking;
