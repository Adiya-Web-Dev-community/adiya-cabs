import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowCarDetailsPopup } from "../../store/adminSlice";
import axios from "../../helper/axios";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const CarTable = ({ data, setRidersData, getData, setCarId }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(data.length);
  }, []);

  const view = async (carId) => {
    setCarId(carId);
    dispatch(setShowCarDetailsPopup(true));
  };

  return (
    <div className="m-4 text-left">
      <div className="">
        {/* <select
          onChange={(e) => setCategory(e.target.value)}
          className="px-2 py-3 rounded-md border-[1px] border-black"
        >
          <option value="show-all">Show all</option>
          <option value="cab-service">Cab service</option>
          <option value="car-rental">Car rental</option>
        </select> */}
      </div>
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <table className="border-[1px] w-full">
          <thead className="border-b  bg-black text-white rounded-t-lg">
            <th className="px-1 py-2 italic text-md text-left">Manufacturer</th>
            <th className="px-1 py-2 italic text-md text-left">Model</th>
            <th className="px-2 py-2 italic text-md text-left">Vehicle No</th>
            <th className="px-2 py-2 italic text-md text-left">Fuel</th>
            <th className="px-2 py-2 italic text-md text-left">Transmission</th>
            <th className="px-2 py-2 italic text-md text-left">Seating</th>
            <th className="px-2 py-2 italic text-md text-left">Luggage</th>
            <th className="px-2 py-2 italic text-md text-left">Daily Rate</th>
            <th className="px-2 py-2 italic text-md text-left">Monthly Rate</th>
            <th className="px-2 py-2 italic text-md text-left">Action</th>
          </thead>
          <tbody>
            {data.map((ele, i) => {
              return (
                <tr
                  key={i}
                  className={
                    (i % 2 === 0 ? "bg-yellow-50 " : "bg-white ") +
                    "text-sm hover:bg-gray-200"
                  }
                >
                  <td className="px-1 py-2 text-sm text-left  capitalize">
                    {ele.manufacturer || "---"}
                  </td>
                  <td className="px-1 py-2 text-sm text-left ">
                    {ele.model || "---"}
                  </td>
                  <td className="px-2 py-2 text-sm text-left">
                    {ele.carNo || "---"}
                  </td>
                  <td className="px-2 py-2 text-sm text-left">
                    {ele.fuelType || "---"}
                  </td>
                  <td className="px-2 py-2 text-sm text-left">
                    {ele.transmissionType || "---"}
                  </td>
                  <td className="px-2 py-2 text-sm text-left">
                    {ele.seatingCapacity || "---"}
                  </td>
                  <td className="px-2 py-2 text-sm text-left">
                    {ele.luggageCapacity || "---"}
                  </td>
                  <td className="px-2 py-2 text-sm text-left">
                    {ele.dailyRate || "---"}
                  </td>
                  <td className="px-2 py-2 text-sm text-left">
                    {ele.monthlyRate || "---"}
                  </td>
                  <td className="px-3 py-2 text-lg text-left flex justify-center gap-5">
                    <span
                      onClick={() => view(ele._id)} // Call view function with carId
                      className="w-4 h-4 cursor-pointer inline-block"
                    >
                      <FaEye />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarTable;
