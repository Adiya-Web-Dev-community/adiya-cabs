import { useState, useEffect } from "react";
import axios from "../../helper/axios";
// components
// icons
import { BsFillCheckCircleFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const CarTable = ({ data, setRidersData, getData }) => {
  console.log(data);
  // set count
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(data.length);
  }, []);

  //handle view
  const view = async () => {};

  // send access

  // filter box
  //   const [category, setCategory] = useState("");

  return (
    <div className=" py-3 text-left ">
      <div className=" py-3">
        {/* <select
          onChange={(e) => setCategory(e.target.value)}
          className="px-2 py-3 rounded-md border-[1px] border-black"
        >
          <option value="show-all">Show all</option>
          <option value="cab-service">Cab service</option>
          <option value="car-rental">Car rental</option>
        </select> */}
      </div>
      <div className="bg-gray-100 shadow-lg shadow-gray-800 mt-3 overflow-y-auto">
        <table className="border-[1px] border-black w-full ">
          <thead className="border-b border-black bg-blue-600 text-black">
            <th className="px-1 py-2 italic text-md text-left border-r border-gray-800">
              Manufacturer
            </th>
            <th className="px-1 py-2 italic text-md text-left border-r border-gray-800">
              Model
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Vehicle No
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Fuel
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Transmission
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Seating
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Luggage
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Daily Rate
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Monthly Rate
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Action
            </th>
          </thead>
          <tbody>
            {data
              //   .filter((rider) => {
              //     if (category) {
              //       if (rider.serviceCategory === category) {
              //         return rider;
              //       } else if (category === "show-all") {
              //         return rider;
              //       }
              //     } else {
              //       return rider;
              //     }
              //   })
              .map((ele, i) => {
                return (
                  <tr key={i} className="border-b border-black ">
                    <td className="px-1 py-2 text-sm text-left border-r border-gray-800 capitalize">
                      {ele.manufacturer || "---"}
                    </td>
                    <td className="px-1 py-2 text-sm text-left border-r border-gray-800">
                      {ele.model || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.carNo || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.fuelType || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.transmissionType || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.seatingCapacity || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.luggageCapacity || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.dailyRate || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.monthlyRate || "---"}
                    </td>
                    <td className="px-3 py-2 text-lg text-left border-r border-gray-800 flex  justify-center gap-5">
                      <span
                        onClick={() => {
                          view(ele);
                        }}
                      >
                        <FaEye />
                      </span>
                      <span>
                        <MdDelete />
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
