import { FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setShowCarDetailsPopup, setCarDetails } from "../../store/adminSlice";

const formatDate = (dateString) => {
  if (!dateString) return "---"; // If date string is not provided

  const date = new Date(dateString);
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

const RentalBookingTable = ({ data }) => {
  const dispatch = useDispatch();

  const view = async (carId) => {
    dispatch(setCarDetails(carId));
    dispatch(setShowCarDetailsPopup(true));
  };

  return (
    <div className="m-4 text-left">
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <table className="border-[1px] w-full">
          <thead className="border-b bg-black text-white rounded-t-lg">
            <tr>
              <th className="px-2 py-2 italic text-md text-left">
                Booking Date
              </th>
              <th className="px-2 py-2 italic text-md text-left">
                Passenger Name
              </th>
              <th className="px-2 py-2 italic text-md text-left">
                Passenger Email
              </th>
              <th className="px-2 py-2 italic text-md text-left">
                PickUp City
              </th>
              <th className="px-2 py-2 italic text-md text-left">
                Pickup Location
              </th>
              <th className="px-2 py-2 italic text-md text-left">
                Pickup Date
              </th>
              <th className="px-2 py-2 italic text-md text-left">
                Return Date
              </th>
              <th className="px-2 py-2 italic text-md text-left">Total Days</th>
              <th className="px-2 py-2 italic text-md text-left">
                Payable Amount
              </th>
              <th className="px-2 py-2 italic text-md text-left">
                Car Details
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, i) => (
              <tr
                key={i}
                className={
                  (i % 2 === 0 ? "bg-yellow-50 " : "bg-white ") +
                  "text-sm hover:bg-gray-200"
                }
              >
                <td className="px-2 py-2 text-sm text-left capitalize">
                  {formatDate(ele.bookingDate)}
                </td>
                <td className="px-2 py-2 text-sm text-left">
                  {ele.passengerId.name || "---"}
                </td>
                <td className="px-2 py-2 text-sm text-left">
                  {ele.passengerId.email || "---"}
                </td>
                <td className="px-2 py-2 text-sm text-left">
                  {ele.pickupCity || "---"}
                </td>
                <td className="px-2 py-2 text-sm text-left max-w-xl">
                  {ele.pickupLocation || "---"}
                </td>
                <td className="px-2 py-2 text-sm text-left">
                  {formatDate(ele.pickupDate)}
                </td>
                <td className="px-2 py-2 text-sm text-left">
                  {formatDate(ele.endDate)}
                </td>
                <td className="px-2 py-2 text-sm text-left">
                  {ele.totalDays || "---"}
                </td>
                <td className="px-2 py-2 text-sm text-left">
                  {ele.payableAmount || "---"}
                </td>
                <td className="px-2 py-2 text-lg text-left flex justify-center item-center ">
                  <span
                    className="w-4 h-4 cursor-pointer inline-block"
                    onClick={() => view(ele.carId)}
                  >
                    <FaEye />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RentalBookingTable;
