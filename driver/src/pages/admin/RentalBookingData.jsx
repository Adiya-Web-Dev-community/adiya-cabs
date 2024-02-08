import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../helper/axios";
// components
import ViewCarDetails from "../../model/ViewCarDetails";
import LoadingTable from "../../components/admin/LoadingTable";
import RentalBookingTable from "../../components/admin/RentalBookingTable";
import { setShowCarDetailsPopup, setCarDetails } from "../../store/adminSlice";

const RentalBookingData = () => {
  const dispatch = useDispatch();
  const { showCarDetailsPopup } = useSelector((state) => state.admin);
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState([]);

  // Function to view car details
  const viewCarDetails = (carId) => {
    // Dispatch action or perform any other action to show car details
    console.log("View car details for car ID:", carId);
  };

  const getRentalBookingData = async () => {
    try {
      const resp = await axios.get("/get-rental-bookings");
      console.log(resp);
      if (resp.data.success) {
        setLoading(false);
        console.log(resp.data.allBookings);
        setBookingData(resp.data.allBookings);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRentalBookingData();
  }, []);

  return (
    <div className="w-full h-[90vh] bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200">
      <div className="w-full m-auto ">
        {loading ? (
          <LoadingTable />
        ) : bookingData.length ? (
          <RentalBookingTable data={bookingData} />
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

export default RentalBookingData;
