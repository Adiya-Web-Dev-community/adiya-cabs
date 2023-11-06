import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../helper/axios";

// icons
import { MdEmail } from "react-icons/md";
import {
  BiSolidUser,
  BiSolidCity,
  BiSolidLandmark,
  BiLocationPlus,
} from "react-icons/bi";
import {
  AiFillCar,
  AiFillFlag,
  AiFillEyeInvisible,
  AiFillEye,
  AiFillPhone,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BsArrowLeft, BsFillPersonVcardFill } from "react-icons/bs";
import { toast } from "react-hot-toast";

const Signup = ({ setNewRider, setAdmin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // show hide password
  const [passwordType, SetPasswordType] = useState("password");

  // state city api
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  var stateConfig = {
    url: "https://api.countrystatecity.in/v1/countries/In/states",
    key: "N00wMDJleEpjQ09wTjBhN0VSdUZxUGxWMlJKTGY1a0tRN0lpakh5Vw==",
  };
  const getStates = async () => {
    await fetch(stateConfig.url, {
      headers: { "X-CSCAPI-KEY": stateConfig.key },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setStates(resp);
        // console.log("states", resp);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getStates();
  }, []);
  // get cities after selecting state
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  var cityConfig = {
    url: `https://api.countrystatecity.in/v1/countries/IN/states/${selectedState}/cities`,
    key: "N00wMDJleEpjQ09wTjBhN0VSdUZxUGxWMlJKTGY1a0tRN0lpakh5Vw==",
  };
  const getCities = async () => {
    await fetch(cityConfig.url, {
      headers: { "X-CSCAPI-KEY": cityConfig.key },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setCities(resp);
        // console.log("cities", resp);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (selectedState) {
      getCities();
    }
  }, [selectedState]);

  // handle inputs
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    contact: "",
    drivingLicenseNo: "",
    vehicleRegistrationNo: "",
    state: "",
    city: "",
    locality: "",
    pincode: "",
    password: "",
  });
  const handleInputs = (e) => {
    setSignupForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle signin
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(signupForm);
    try {
      setLoading(true);
      const resp = await axios.post("/rider-signup", signupForm);
      console.log(resp);
      if (resp.data.success) {
        toast.success(resp.data.msg, {
          style: {
            background: "#349B04",
          },
        });
      } else {
        toast.error(resp.data.msg, {
          style: {
            background: "#AB0505",
            color: "white",
          },
        });
      }
      setLoading(false);
      setNewRider(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" overflow-scroll md:overflow-auto  w-[90%] md:w-[65%] px-7 py-7 my-5 md:my-0 bg-gradient-to-tr from-yellow-300 via-orange-300 to-orange-400 rounded-md shadow-black shadow-xl">
      <div className="flex gap-4">
        <BsArrowLeft
          className="mt-1"
          onClick={() => {
            setNewRider(false);
          }}
        />
        <span className="font-thin text-lg opacity-50">Ride with meru</span>
      </div>
      <form className="space-y-5 py-4 " onSubmit={handleSignup}>
        {/* col1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-7">
            <section className="flex gap-2 bg-gray-300/40 border-[1px] border-gray-400 rounded-md">
              <sapn className="flex justify-center items-center">
                <BiSolidUser className="ml-3 text-md" />
              </sapn>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={signupForm.name}
                onChange={handleInputs}
                className="py-2 px-2 rounded-md bg-transparent  focus:border-red-500 w-full"
              />
            </section>
            <section className="flex gap-2 bg-gray-300/40 border-[1px] border-gray-400 rounded-md">
              <sapn className="flex justify-center items-center">
                <MdEmail className="ml-3 text-md" />
              </sapn>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={signupForm.email}
                onChange={handleInputs}
                className="py-2 px-2 rounded-md bg-transparent  focus:border-red-500 w-full"
              />
            </section>
            <section className="flex gap-2 bg-gray-300/40 border-[1px] border-gray-400 rounded-md">
              <sapn className="flex justify-center items-center">
                <AiFillPhone className="ml-3 text-md" />
              </sapn>
              <input
                type="text"
                placeholder="Contact"
                name="contact"
                value={signupForm.contact}
                onChange={handleInputs}
                className="py-2 px-2 rounded-md bg-transparent  focus:border-red-500 w-full"
              />
            </section>
            <section className="flex gap-2 bg-gray-300/40 border-[1px] border-gray-400 rounded-md">
              <sapn className="flex justify-center items-center">
                <BsFillPersonVcardFill className="ml-3 text-md" />
              </sapn>
              <input
                type="text"
                placeholder="Driving License Number"
                name="drivingLicenseNo"
                value={signupForm.drivingLicenseNo}
                onChange={handleInputs}
                className="py-2 px-2 rounded-md bg-transparent  focus:border-red-500 w-full"
              />
            </section>
            <section className="flex gap-2 bg-gray-300/40 border-[1px] border-gray-400 rounded-md">
              <sapn className="flex justify-center items-center">
                <AiFillCar className="ml-3 text-md" />
              </sapn>
              <input
                type="text"
                placeholder="Vehicle Registration Number"
                name="vehicleRegistrationNo"
                value={signupForm.vehicleRegistrationNo}
                onChange={handleInputs}
                className="py-2 px-2 rounded-md bg-transparent  focus:border-red-500 w-full"
              />
            </section>
          </div>
          {/* col2 */}
          <div className="space-y-7">
            <section className="flex gap-2 bg-gray-300/40 border-[1px] border-gray-400 rounded-md">
              <sapn className="flex justify-center items-center">
                <AiFillFlag className="ml-3 text-md" />
              </sapn>
              <input
                type="State"
                placeholder="State"
                name="state"
                value={signupForm.state}
                onChange={handleInputs}
                className="py-2 px-2 rounded-md bg-transparent  focus:border-red-500 w-full"
              />
            </section>
            <section className="flex gap-2 bg-gray-300/40 border-[1px] border-gray-400 rounded-md">
              <sapn className="flex justify-center items-center">
                <BiSolidCity className="ml-3 text-md" />
              </sapn>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={signupForm.city}
                onChange={handleInputs}
                className="py-2 px-2 rounded-md bg-transparent  focus:border-red-500 w-full"
              />
            </section>
            <section className="flex gap-2 bg-gray-300/40 border-[1px] border-gray-400 rounded-md">
              <sapn className="flex justify-center items-center">
                <BiSolidLandmark className="ml-3 text-md" />
              </sapn>
              <input
                type="text"
                placeholder="Locality / Landmark"
                name="locality"
                value={signupForm.locality}
                onChange={handleInputs}
                className="py-2 px-2 rounded-md bg-transparent  focus:border-red-500 w-full"
              />
            </section>
            <section className="flex gap-2 bg-gray-300/40 border-[1px] border-gray-400 rounded-md">
              <sapn className="flex justify-center items-center">
                <BiLocationPlus className="ml-3 text-md" />
              </sapn>
              <input
                type="text"
                placeholder="Pincode"
                name="pincode"
                value={signupForm.pincode}
                onChange={handleInputs}
                className="py-2 px-2 rounded-md bg-transparent  focus:border-red-500 w-full"
              />
            </section>
            <section className="flex gap-2 bg-gray-300/40 border-[1px] border-gray-400 rounded-md">
              <sapn className="flex justify-center items-center">
                {passwordType === "password" ? (
                  <AiFillEye
                    className="ml-3 text-md"
                    onClick={() => SetPasswordType("text")}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="ml-3 text-lg"
                    onClick={() => SetPasswordType("password")}
                  />
                )}
              </sapn>
              <input
                type={passwordType}
                placeholder="Set Password"
                name="password"
                value={signupForm.password}
                onChange={handleInputs}
                className="py-2 px-2 rounded-md bg-transparent  focus:border-red-500 w-full"
              />
            </section>
          </div>
        </div>
        <section className="pt-6">
          <button
            disabled={
              !signupForm.name ||
              !signupForm.email ||
              !signupForm.contact ||
              !signupForm.drivingLicenseNo ||
              !signupForm.password ||
              !signupForm.state ||
              !signupForm.city ||
              !signupForm.locality ||
              !signupForm.pincode
            }
            className="
                 disabled:cursor-not-allowed w-full text-sm bg-gray-800/80 text-white py-2 mt-3 rounded-md hover:animate-pulse hover:bg-black flex justify-center"
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin text-lg" />
            ) : (
              <p>Create Account</p>
            )}
          </button>
        </section>
      </form>
    </div>
  );
};

export default Signup;
