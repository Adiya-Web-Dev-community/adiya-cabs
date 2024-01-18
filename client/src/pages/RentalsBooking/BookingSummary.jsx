import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { setLocationDetails, setPayableAmount } from "../../store/rental";
import { setOtpModal } from "../../store/appSlice";
import OtpModal from "../../modal/OtpModal";
import axiosInstance from "../../api/axiosInstance";
import { loadStripe } from "@stripe/stripe-js";

const BookingSummary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginToken, otpModal, username, userEmail } = useSelector(
    (state) => state.app
  );
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    if (loginToken) {
      setLoginStatus(true);
    }
  }, [otpModal]);

  const { locationDetails, rentalsInitialData, carDetails, payableAmount } =
    useSelector((state) => state.rental);
  // fetch pickup and drop locations
  const pickupLocationRef = useRef();
  const dropLocationRef = useRef();

  //error message
  const [errMsg, setErrMsg] = useState(null);

  //set data
  const handlePayment = async () => {
    dispatch(setPayableAmount(carDetails?.dailyRate * 7));
    dispatch(
      setLocationDetails({
        pickupLocation: pickupLocationRef.current.value,
        dropLocation: dropLocationRef.current.value,
      })
    );
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHED_KEY);
    const response = await axiosInstance.post("/payment", {
      amount: carDetails?.dailyRate * 7,
    });
    if (response?.data?.url) {
      window.location.href = response?.data?.url;
      // console.log(response.data.url);
      handleConfirmBooking();
    }
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  //handle booking confirm
  const handleConfirmBooking = async () => {
    console.log(rentalsInitialData, carDetails, locationDetails, payableAmount);
  };

  // LOAD JS API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA312x40OgaxL1ifZyztNEw1vwkMOxQPx8",
    libraries: ["places"],
  });

  if (carDetails === null) {
    navigate("/rentals");
  }

  return (
    <div className="border-2 py-[5rem]">
      <div className="py-5 px-5 grid grid-cols-3 gap-3">
        <div className="col-span-2">Car Details here</div>
        <div>
          <div className="border-2 p-2">
            <section className="space-y-2">
              <label>Pickup Loaction</label>
              {isLoaded && (
                <Autocomplete>
                  <input
                    type="text"
                    ref={pickupLocationRef}
                    placeholder="Pickup Location"
                    className="border-2 py-2 px-3 italic rounded-xl"
                  />
                </Autocomplete>
              )}
            </section>
            <section className="space-y-2">
              <label>Drop Loaction</label>
              {isLoaded && (
                <Autocomplete>
                  <input
                    type="text"
                    ref={dropLocationRef}
                    placeholder="Pickup Location"
                    className="border-2 py-2 px-3 italic rounded-xl"
                  />
                </Autocomplete>
              )}
            </section>
          </div>
          <section className="h-[15rem] mt-3 border-2 p-2">
            Payment summary here
            {console.log(carDetails)}
            <p>Rent/day: {carDetails?.dailyRate}</p>
            <p>Number of day: 7</p>
            <h className="font-bold text-lg">
              Total Payable amount: {carDetails?.dailyRate * 7}
            </h>
          </section>
          {loginToken === "" && username === "" && !loginStatus ? (
            <section className="p-2 border-2 my-2">
              <button onClick={() => dispatch(setOtpModal(true))}>Login</button>
            </section>
          ) : null}
          {loginStatus ? (
            <section className="p-2 border-2 my-2">
              <h1>Personal Details</h1>
              <p>Name: {username}</p>
              <p>Gmail: {userEmail}</p>
            </section>
          ) : null}
          <section>
            <button
              onClick={handlePayment}
              disabled={!loginStatus}
              className="bg-orange-400 rounded-md px-4 py-1.5 mt-5 disabled:cursor-not-allowed disabled:bg-gray-200"
            >
              Confirm & Proceed
            </button>
            {errMsg ? <p className="text-red-500 text-sm">{errMsg}</p> : null}
          </section>
        </div>
      </div>
      {otpModal ? <OtpModal setLoginStatus={setLoginStatus} /> : null}
    </div>
  );
};

export default BookingSummary;
