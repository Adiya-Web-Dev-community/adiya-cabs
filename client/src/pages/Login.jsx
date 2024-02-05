import React, { useEffect, useState } from "react";
import { Input, Button } from "../components/form/form";
import axiosInstance from "../api/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import MapCotainer from "../components/utils/MapCotainer";
import { saveTokenToLoacal } from "../store/appSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const loginObj = {
    name: "" || userInfo?.userName,
    email: "" || userInfo?.email,
    otp: "",
  };

  const [loginInfo, steLoginInfo] = useState({ ...loginObj });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(loginInfo);

  const [activeVarification, setVriFiactionActive] = useState(false);

  const handleChange = (e) => {
    steLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitLoginInfo = async (e) => {
    const path = activeVarification ? "/verify-otp" : "/send-otp";

    const loadingToast = toast.info("Sending OTP...", { autoClose: false });

    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        path,
        { ...loginInfo, otp: +loginInfo.otp },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("User data posted successfully");
      toast.dismiss(loadingToast);

      if (!response.statusText === "OK") {
        throw new Error("Network request failed");
      } else {
        if (activeVarification) {
          dispatch(
            saveTokenToLoacal({
              token: response.data.token,
              userName: loginInfo.name,
              email: loginInfo.email,
              userId: response.data.findUser._id,
            })
          );

          localStorage.setItem("token", response.data.token);
          steLoginInfo({ ...loginObj });
          navigate("/");
        } else {
          setVriFiactionActive(true);
        }
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      toast.dismiss(loadingToast);
    }
  };

  useEffect(() => {
    if (userInfo?.userName) {
      toast.success("User Already Login", {
        onClose: () => {
          navigate("/");
        },
      });
    }
  }, []);

  return (
    <div className="min-h-[fit-content] h-[100vh] bg-gray-400 flex justify-end items-center relative  ">
      <ToastContainer position="top-right" />
      <MapCotainer />
      {!activeVarification ? (
        <form
          onSubmit={(e) => handleSubmitLoginInfo(e, "email")}
          className="w-[24rem] mr-16  z-[500] bg-white rounded-md p-4 "
        >
          <h2 className="m-5 mb-16 text-2xl">Let’s Sign You In!</h2>
          <Input
            name={"name"}
            type={"text"}
            label={"Name*"}
            required
            className="m-5 mb-8"
            onChange={handleChange}
            value={loginInfo.name}
          />
          <Input
            name={"email"}
            type={"email"}
            label={"Email*"}
            required
            className="m-5 mb-24"
            onChange={handleChange}
            value={loginInfo.email}
          />

          <div className="flex justify-center items-center mt-4 mb-2">
            <Button
              className={
                "w-[10rem] shadow-lg bg-red-400 border text-white hover:bg-red-500 "
              }
              disabled={false || !!userInfo?.userName}
            >
              {" "}
              SEND OTP
            </Button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={(e) => handleSubmitLoginInfo(e, "otp")}
          className="w-[24rem]  mr-16   bg-white rounded-md p-4 z-[500]"
        >
          <h2
            className="m-5 mb-16 text-2xl"
            onClick={() => setVriFiactionActive(false)}
          >
            Go Back To Email
          </h2>
          <Input
            name={"otp"}
            type={"number"}
            label={"OTP"}
            required
            className="m-5 mb-24"
            onChange={handleChange}
            value={loginInfo.otp}
          />

          <div className="flex justify-center items-center mt-4 mb-2">
            <Button
              className={
                "w-[10rem] shadow-lg bg-red-400 border text-white hover:bg-red-500 "
              }
            >
              {" "}
              Verify
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export { Login };
