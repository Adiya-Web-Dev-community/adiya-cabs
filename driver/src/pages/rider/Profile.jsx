import { useEffect, useState } from "react";
import { MdAlternateEmail, MdOutlineCall } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import axios from "../../helper/axios";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("driverToken");
        const response = await axios.get("/rider-profile", {
          headers: {
            Authorization: `${token}`,
          },
        });
        console.log(response);
        console.log(response.data.data);
        setUserData(response.data.data);
        // console.log(userData);
      } catch (error) {
        console.error("Error fetching userData profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  const [editableFields, setEditableFields] = useState({});

  const toggleEditField = (field) => {
    setEditableFields((prev) => {
      const newEditableFields = { [field]: !prev[field] };

      Object.keys(prev).forEach((key) => {
        if (key !== field) {
          newEditableFields[key] = false;
        }
      });

      return newEditableFields;
    });
  };

  // const handleInputChange = (field, value) => {
  //   console.log(`Updating ${field} to: ${value}`);
  // };

  const generateLabelsAndValues = () => {
    const excludedProperties = [
      "_id",
      "__v",
      "serialNo",
      "profileImgUrl",
      "adminVerification",
    ];
    const nonEditableFields = ["riderId", "serviceCategory", "currentLocation"];

    return Object.entries(userData)
      .filter(([key]) => !excludedProperties.includes(key))
      .map(([key, value]) => (
        <div className="flex justify-between items-center py-4 pr-4" key={key}>
          <h2 className="w-1/2 text-lg font-semibold text-gray-600">
            {key.charAt(0).toUpperCase() + key.slice(1)}:
          </h2>
          {nonEditableFields.includes(key) ? (
            <p className="w-1/2 text-gray-600">{value || "--"}</p>
          ) : editableFields[key] ? (
            <input
              type="text"
              value={value}
              // onChange={(e) => handleInputChange(key, e.target.value)}
              onBlur={() => toggleEditField(key)}
              className="w-1/2 border-b-2 focus:outline-none py-2 px-3 rounded-xl mr-20"
            />
          ) : (
            <p
              className="w-1/2 text-gray-600 cursor-pointer"
              onClick={() => toggleEditField(key)}
            >
              {value || "--"}
            </p>
          )}
        </div>
      ));
  };

  return (
    <div className="bg-[url('https://images.pexels.com/photos/5835277/pexels-photo-5835277.jpeg?auto=compress&cs=tinysrgb&w=600')] w-full bg-cover bg-center h-screen">
      <div className="w-full h-full bg-black/50">
        <div className="flex justify-center p-10 items-center h-full">
          {userData && (
            <div className="w-full h-full overflow-hidden shadow-lg">
              <div className="flex justify-between items-center p-8  bg-gray-50 rounded-t-xl backdrop-filter backdrop-blur-sm bg-opacity-80 border">
                <div className="relative flex items-center ">
                  <img
                    src={userData.profileImgUrl}
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-4 border-yellow-500 object-cover"
                  />
                  <span className="absolute top-14 left-14 w-6 h-6 bg-green-500 rounded-full text-white">
                    <FaCheck className="m-1" />
                  </span>
                  <div className="ml-6">
                    <h1 className="text-3xl font-bold text-gray-800 ">
                      {userData.name}
                    </h1>
                  </div>
                </div>
                <div className="-ml-10">
                  <h1 className="text-2xl font-semibold text-yellow-600">
                    Phone
                  </h1>
                  <p className="flex items-center text-gray-800">
                    <MdOutlineCall className="m-1 text-xl text-gray-800" />
                    +91{userData.contact}
                  </p>
                </div>
                <div className="mr-10">
                  <h1 className="text-2xl font-semibold text-yellow-600">
                    Email
                  </h1>
                  <p className="flex text-black">
                    <MdAlternateEmail className="m-1 text-xl" />
                    {userData.email}
                  </p>
                </div>
              </div>

              <div className="personal_details grid grid-cols-2 p-10 bg-gray-200">
                {generateLabelsAndValues()}
                {userData.adminVerification && (
                  <div className="mt-6 ml-auto text-right">
                    <p className="bg-green-500 text-sm rounded-full p-1 text-white font-semibold ">
                      Admin Verified
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
