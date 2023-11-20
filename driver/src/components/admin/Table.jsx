import { useState, useEffect } from "react";
import axios from "../../helper/axios";
// components
// icons
import { BsFillCheckCircleFill } from "react-icons/bs";
import { toast } from "react-hot-toast";

const Table = ({ data, setRidersData, getData }) => {
  console.log(data);
  // set count
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(data.length);
  }, []);

  // send access
  const handleAdminAccess = async (rider) => {
    console.log(rider);
    try {
      toast.loading("Please wait...");
      const resp = await axios.put("/admin-rider-verification", {
        riderId: rider.riderId,
      });
      if (resp.data.msg === "Access Granted") {
        getData();
        toast.dismiss();
        toast.success("Access Granted");
      }
      if (resp.data.msg === "Access Denied") {
        getData();
        toast.dismiss();
        toast.success("Access Denied", {
          icon: <BsFillCheckCircleFill className="text-green-500" />,
          style: {
            background: "white",
          },
        });
      }
      if (resp.data.success === false) {
        toast.dismiss();
        toast.error("Cannot send email");
      }
      // Update the status of the clicked button only
      setRidersData((prevData) =>
        prevData.map((rider, index) =>
          index === i
            ? { ...rider, adminVerification: !rider.adminVerification }
            : rider
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  // filter box
  const [category, setCategory] = useState("");

  return (
    <div className=" py-3 text-left ">
      <div className=" py-3">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="px-2 py-3 rounded-md border-[1px] border-black"
        >
          <option value="show-all">Show all</option>
          <option value="cab-service">Cab service</option>
          <option value="car-rental">Car rental</option>
        </select>
      </div>
      <div className="bg-gray-100 shadow-lg shadow-gray-800 mt-3 overflow-y-auto">
        <table className="border-[1px] border-black w-full ">
          <thead className="border-b border-black bg-blue-600 text-black">
            <th className="px-1 py-2 italic text-md text-left border-r border-gray-800">
              Category
            </th>
            <th className="px-1 py-2 italic text-md text-left border-r border-gray-800">
              RiderId
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Name
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Email
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Contact
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              State
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              City
            </th>
            <th className="px-1 py-2 italic text-sm text-left border-r border-gray-800">
              Pincode
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Driving license
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Vehicle Registration
            </th>
            <th className="px-2 py-2 italic text-md text-left border-r border-gray-800">
              Verification
            </th>
          </thead>
          <tbody>
            {data
              .filter((rider) => {
                if (category) {
                  if (rider.serviceCategory === category) {
                    return rider;
                  } else if (category === "show-all") {
                    return rider;
                  }
                } else {
                  return rider;
                }
              })
              .map((ele, i) => {
                return (
                  <tr key={i} className="border-b border-black ">
                    <td className="px-1 py-2 text-sm text-left border-r border-gray-800 capitalize">
                      {ele.serviceCategory.replace("-", " ") || "---"}
                    </td>
                    <td className="px-1 py-2 text-sm text-left border-r border-gray-800">
                      {ele.riderId || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.name || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.email || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.contact || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.state || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.city || "---"}
                    </td>
                    <td className="px-1 py-2 text-sm text-left border-r border-gray-800">
                      {ele.pincode || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.drivingLicenseNo || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      {ele.vehicleRegistrationNo || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left border-r border-gray-800">
                      <button
                        onClick={() => {
                          handleAdminAccess(ele);
                        }}
                      >
                        {`${ele.adminVerification ? "deny" : "grant"}`}
                      </button>
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

export default Table;
