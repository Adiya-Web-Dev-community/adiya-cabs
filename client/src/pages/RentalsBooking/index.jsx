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
      console.log(resp.data.data);
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
    <div className="py-[4rem]">
      <div className="p-2 my-5  grid grid-cols-4 gap-3">
        <div className="col-span-1 border-2 bg-blue-200 rounded-lg px-5 py-3 h-[fit-content]">
          <FilterBox
            filterInputs={filterInputs}
            setFilterInputs={setFilterInputs}
            handleFetchCarsList={handleFetchCarsList}
          />
        </div>
        <div className="border-2 col-span-3">
          <h1 className="font-bold">Results : {car?.carList?.length}</h1>
          <CarList />
        </div>
      </div>
    </div>
  );
};

export default RentalsBooking;
