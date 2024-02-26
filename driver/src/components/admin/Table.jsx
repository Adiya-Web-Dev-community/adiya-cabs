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
        <table className=" w-full">
          <thead className=" bg-black text-white divide-x-[1px] divide-gray-500 text-center">
            <th className="px-2 py-2 italic  ">Category</th>
            <th className="px-2 py-2 italic  ">RiderId</th>
            <th className="px-2 py-2 italic  ">Name</th>
            <th className="px-2 py-2 italic  ">Email</th>
            <th className="px-2 py-2 italic  ">Contact</th>
            <th className="px-2 py-2 italic  ">State</th>
            <th className="px-2 py-2 italic  ">City</th>
            <th className="px-2 py-2 italic  ">Pincode</th>
            <th className="px-2 py-2 italic  ">Driving license</th>
            <th className="px-2 py-2 italic  ">Vehicle Registration</th>
            <th className="px-2 py-2 italic ">Verification</th>
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
                  <tr
                    key={i}
                    className={
                      (i % 2 === 0 ? "bg-yellow-50 " : "bg-white ") +
                      "text-sm hover:bg-gray-200"
                    }
                  >
                    <td className="p-2  text-sm text-left capitalize">
                      {ele.serviceCategory.replace("-", " ") || "---"}
                    </td>
                    <td className="px-1 py-2 text-sm text-left">
                      {ele.riderId || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left">
                      {ele.name && ele.name.length > 20
                        ? `${ele.name.slice(0, 20)}...`
                        : ele.name || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left">
                      {ele.email && ele.email.length > 25
                        ? `${ele.email.slice(0, 25)}...`
                        : ele.email || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left">
                      {ele.contact || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left">
                      {ele.state || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left">
                      {ele.city || "---"}
                    </td>
                    <td className="px-1 py-2 text-sm text-left">
                      {ele.pincode || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left">
                      {ele.drivingLicenseNo || "---"}
                    </td>
                    <td className="px-2 py-2 text-sm text-left">
                      {ele.vehicleRegistrationNo || "---"}
                    </td>
                    {/* <td className="px-2 py-2 text-sm text-left">
                      <button
                        onClick={() => {
                          handleAdminAccess(ele);
                        }}
                      >
                        {`${ele.adminVerification ? "deny" : "grant"}`}
                      </button>
                    </td> */}
                    <td className="px-2 py-2 text-sm text-left">
                      <label
                        htmlFor={`toggle-${i}`}
                        className="flex items-center justify-center cursor-pointer"
                      >
                        <div className="relative">
                          <input
                            id={`toggle-${i}`}
                            type="checkbox"
                            className="sr-only"
                            checked={ele.adminVerification}
                            onChange={() => handleAdminAccess(ele)}
                          />
                          <div
                            className={`block ${
                              ele.adminVerification
                                ? "bg-green-500"
                                : "bg-black"
                            } w-14 h-8 rounded-full`}
                          ></div>
                          <div
                            className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow transition-transform duration-300 ease-in-out ${
                              ele.adminVerification
                                ? "transform translate-x-full"
                                : ""
                            }`}
                          ></div>
                        </div>
                      </label>
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
