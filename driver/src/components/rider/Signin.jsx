import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../helper/axios";

// icons
import { MdEmail } from "react-icons/md";
import {
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { toast } from "react-hot-toast";

const Signin = ({ setNewRider }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // show hide password
  const [passwordType, SetPasswordType] = useState("password");

  // handle inputs
  const [signinForm, setSigninForm] = useState({
    userId: "",
    password: "",
  });
  const handleInputs = (e) => {
    setSigninForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle signin
  const handleSignin = async (e) => {
    e.preventDefault();
    // console.log(signinForm);
    try {
      setLoading(true);
      const resp = await axios.post("/rider-login", signinForm);
      console.log(resp);
      if (resp.data.success) {
        toast.success(resp.data.msg, {
          style: {
            background: "#349B04",
          },
        });
        localStorage.setItem("driverToken", resp.data.token);
        localStorage.setItem("riderName", "Harshada");
        navigate("/profile");
      } else {
        toast.error(resp.data.msg, {
          style: { background: "#AB0505", color: "white" },
        });
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" md:w-[30rem] px-7 py-4 bg-gradient-to-tr from-yellow-300 via-orange-300 to-orange-400 rounded-sm shadow-black shadow-xl">
      <div className="">
        <span className="font-thin text-lg opacity-50">Rider Login</span>
      </div>
      <form className="space-y-5 py-4 " onSubmit={handleSignin}>
        <section className="flex gap-2 bg-gray-300/40 border-[1px] border-gray-400 rounded-sm">
          <sapn className="flex justify-center items-center">
            <MdEmail className="ml-3 text-lg" />
          </sapn>
          <input
            type="text"
            placeholder="Email or Contact"
            name="userId"
            value={signinForm.userId}
            onChange={handleInputs}
            className="py-2 px-2 rounded-sm bg-transparent  focus:border-red-500 w-full"
          />
        </section>
        <section className="flex gap-2 bg-gray-300/40 border-[1px] border-gray-400 rounded-sm">
          <sapn className="flex justify-center items-center">
            {passwordType === "password" ? (
              <AiFillEye
                className="ml-3 text-md"
                onClick={() => SetPasswordType("text")}
              />
            ) : (
              <AiFillEyeInvisible
                className="ml-3 text-md"
                onClick={() => SetPasswordType("password")}
              />
            )}
          </sapn>
          <input
            type={passwordType}
            name="password"
            value={signinForm.password}
            onChange={handleInputs}
            placeholder="Password"
            className="py-2 px-2 rounded-sm bg-transparent  focus:border-red-500 w-full"
          />
        </section>
        <section className="">
          <button
            disabled={!signinForm.userId || !signinForm.password}
            className=" w-full text-sm bg-gray-800/80 text-white py-2 mt-3 rounded-md hover:animate-pulse hover:bg-black  flex justify-center disabled:cursor-not-allowed"
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin text-lg" />
            ) : (
              <p>Login</p>
            )}
          </button>
        </section>
      </form>
      <div className="md:space-x-2 pt-3 pb-5 flex flex-col md:block">
        <span className="md:py-4">New Rider?</span>
        <span
          className="font-sans text-blue-900 cursor-pointer  underline underline-offset-4 hover:scale-125 duration-300"
          onClick={() => setNewRider(true)}
        >
          Create Account
        </span>
      </div>
    </div>
  );
};

export default Signin;
