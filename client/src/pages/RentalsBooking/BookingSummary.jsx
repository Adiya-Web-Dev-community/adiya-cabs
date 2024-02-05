import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { setLocationDetails, setPayableAmount } from "../../store/rental";
import { setOtpModal, saveTokenToLoacal } from "../../store/appSlice";
import OtpModal from "../../modal/OtpModal";
import axiosInstance from "../../api/axiosInstance";
import { loadStripe } from "@stripe/stripe-js";

const BookingSummary = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginToken, userloginToken, otpModal, username, userEmail, userId } =
    useSelector((state) => state.app);
  const { locationDetails, rentalsInitialData, carDetails, payableAmount } =
    useSelector((state) => state.rental);

  useEffect(() => {
    const locationDetails = {
      pickupLocation: pickupLocationRef.current?.value || null,
      dropLocation: dropLocationRef.current?.value || null,
    };

    dispatch(setLocationDetails(locationDetails));
    if (loginToken) {
      setLoginStatus(true);
    }
  }, [otpModal]);

  const pickupLocationRef = useRef(null);
  const dropLocationRef = useRef(null);
  const handlePlaceChanged = () => {
    if (pickupLocationRef.current && dropLocationRef.current) {
      const pickup = pickupLocationRef.current.value;
      const drop = dropLocationRef.current.value;
      console.log("Selected pick place:", pickup);
      console.log("Selected drop place:", drop);
      dispatch(
        setLocationDetails({
          pickupLocation: pickupLocationRef.current.value,
          dropLocation: dropLocationRef.current.value,
        })
      );
    }
  };

  // dispatch(setLocationDetails({ pickupLocation, dropLocation }));
  // console.log(pickupLocation);
  // console.log(dropLocation);

  const [errMsg, setErrMsg] = useState(null);

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
  // const handleConfirmBooking = async () => {
  //   console.log(rentalsInitialData, carDetails, locationDetails, payableAmount);
  // };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA312x40OgaxL1ifZyztNEw1vwkMOxQPx8",
    libraries: ["places"],
  });

  if (carDetails === null) {
    navigate("/rentals");
  }

  console.log("location:", locationDetails);

  const calculateDuration = (startDate, startTime, endDate, endTime) => {
    const startDateTime = new Date(`${startDate} ${startTime}`).getTime();
    const endDateTime = new Date(`${endDate} ${endTime}`).getTime();
    const duration = endDateTime - startDateTime;

    const days = Math.floor(duration / (24 * 60 * 60 * 1000));
    const remainingTime = duration % (24 * 60 * 60 * 1000);
    const hours = Math.floor(remainingTime / (60 * 60 * 1000));

    return { days, hours, totalHours: duration / (60 * 60 * 1000) };
  };

  // Convert Date objects to strings
  const pickupDateStr = rentalsInitialData?.pickupDate?.date
    .toISOString()
    .split("T")[0];
  const dropDateStr = rentalsInitialData?.dropDate?.date
    .toISOString()
    .split("T")[0];

  const duration = calculateDuration(
    pickupDateStr,
    rentalsInitialData?.pickupDate?.time,
    dropDateStr,
    rentalsInitialData?.dropDate?.time
  );

  const pickuptime = rentalsInitialData?.pickupDate.time;
  const formattedPickupTime = pickuptime
    ? pickuptime.slice(0, -6) + " " + pickuptime.slice(-2)
    : "";
  const droptime = rentalsInitialData?.dropDate.time;
  const formattedDropTime = droptime
    ? droptime.slice(0, -6) + " " + droptime.slice(-2)
    : "";

  // const handleConfirmBooking = async () => {
  //   if (
  //     pickupLocationRef.current?.value === "" ||
  //     (null && dropLocationRef.current?.value) ||
  //     null
  //   )
  //     return setErrMsg("Add Pickup & Drop location");

  //   try {
  //     const bookingDetails = {
  //       rideCategory: "rental",
  //       pickupCity: rentalsInitialData.city,
  //       pickupLocation: locationDetails.pickupLocation,
  //       pickupDate: rentalsInitialData.pickupDate.date,
  //       dropLocation: locationDetails.dropLocation,
  //       dropDate: rentalsInitialData.dropDate.date,
  //       totalDays: duration.days,
  //       fairAmount: payableAmount,
  //       userName: username,
  //       userEmail: userEmail,
  //       passengerId: userId,
  //       carId: carDetails._id,
  //     };
  //     console.log("Booking Details:", bookingDetails);

  //     const response = await axiosInstance.post("/booking", bookingDetails, {
  //       headers: {
  //         Authorization: userloginToken,
  //       },
  //     });

  //     console.log("Booking successful:", response);
  //   } catch (error) {
  //     console.error("Error confirming booking:", error);

  //     setErrMsg(
  //       "An error occurred while confirming the booking. Please try again."
  //     );
  //   }
  // };

  const handleConfirmBooking = async () => {
    try {
      // Validate pickup and drop locations
      if (!locationDetails.pickupLocation || !locationDetails.dropLocation) {
        return setErrMsg("Add Pickup & Drop location");
      }
      console.log("RentalinitialDATA:", rentalsInitialData);
      const bookingDetails = {
        rideCategory: "rental",
        pickupCity: rentalsInitialData.city,
        pickupLocation: locationDetails.pickupLocation,
        pickupDate: rentalsInitialData.pickupDate.date,
        endDate: rentalsInitialData.dropDate.date,
        dropTime: rentalsInitialData.dropDate.time,
        totalDays: duration.days,
        payableAmount: payableAmount,
        passengerId: userId,
        carId: carDetails._id,
      };

      console.log("Booking Details:", bookingDetails);

      const response = await axiosInstance.post("/booking", bookingDetails, {
        headers: {
          Authorization: userloginToken,
        },
      });

      console.log("Booking successful:", response.data);
    } catch (error) {
      console.error("Error confirming booking:", error);

      setErrMsg(
        "An error occurred while confirming the booking. Please try again."
      );
    }
  };

  return (
    <div className="border-2 py-[5rem] px-24">
      <div className="py-5 px-5 grid grid-cols-3 gap-3">
        <div className="col-span-2 h-fit overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition duration-300 ">
          <div className="bg-red-500  text-white text-lg px-4 py-2 ">
            {carDetails?.manufacturer} {carDetails?.model}
          </div>
          <div className="flex p-4">
            <div className="w-1/2 flex">
              <img
                className=" rounded-xl object-cover"
                src={carDetails?.imgUrl}
              ></img>
            </div>
            <div className="w-1/2  pl-4">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold">ECONOMY</h4>
                </div>
                <div className="bg-gray-100 px-4 py-5 mt-2">
                  <h3 className="text-center font-semibold">
                    Location:{" "}
                    <span className="">{rentalsInitialData?.city}</span>
                  </h3>
                  <div className="flex my-3 justify-evenly">
                    <div className="text-center text-sm text-gray-600 font-semibold">
                      <p>
                        {rentalsInitialData?.pickupDate?.date.toLocaleDateString(
                          undefined,
                          {
                            weekday: "short",
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </p>
                      <p>{formattedPickupTime}</p>
                    </div>
                    <div className="text-center">
                      <p className="w-10 h-10 p-2 font-semibold rounded-full bg-red-500 text-white">
                        To
                      </p>
                    </div>
                    <div className="text-center text-sm text-gray-600 font-semibold">
                      <p>
                        {rentalsInitialData?.dropDate?.date.toLocaleDateString(
                          undefined,
                          {
                            weekday: "short",
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </p>
                      <p>{formattedDropTime}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-2 px-6 pb-2 text-sm font-semibold text-center">
                  <p className="pb-2">
                    Duration: {duration?.days} Days and {duration?.hours} hours
                  </p>
                  <span className="w-full h-[1px] bg-gray-300 "></span>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm font-semibold text-gray-400">
                    <p>Package Type</p>
                    <p>Free kms for rental</p>
                    <p>Extra km charges at </p>
                  </div>
                  <div className="text-sm font-semibold">
                    <p>300 kms/day</p>
                    <p>
                      <p>1013kms</p>
                    </p>
                    <p>7/km</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second">
          <div className="rounded-lg shadow-lg bg-white px-4 py-6">
            <section className="space-y-2">
              <label className="text-sm font-semibold">Pickup Loaction</label>
              {isLoaded && (
                <Autocomplete onPlaceChanged={handlePlaceChanged}>
                  <input
                    type="text"
                    ref={(input) => {
                      pickupLocationRef.current = input;
                    }}
                    placeholder="Pickup Location"
                    className="w-full border-[1px] border-red-500 focus:outline-none focus:border-red-400 focus:ring-red-300 focus:ring-2 ring-offset-1 py-2 px-3 italic rounded-xl"
                  />
                </Autocomplete>
              )}
            </section>
            <section className="space-y-2 mt-2">
              <label className="text-sm font-semibold">Drop Loaction</label>
              {isLoaded && (
                <Autocomplete onPlaceChanged={handlePlaceChanged}>
                  <input
                    type="text"
                    ref={(input) => {
                      dropLocationRef.current = input;
                    }}
                    placeholder="Pickup Location"
                    className="w-full border-[1px] border-red-500 focus:outline-none focus:border-red-400 focus:ring-red-300 focus:ring-2 ring-offset-1 py-2 px-3 italic rounded-xl"
                  />
                </Autocomplete>
              )}
            </section>
          </div>
          <section className="rounded-lg overflow-hidden h-auto mt-4 shadow-lg">
            <h1 className="bg-red-500 text-white px-4 py-2">Payment Summary</h1>
            <div className="flex justify-between">
              <div className="font-semibold p-4">
                <p>Rent/day: </p>
                <p>Number of day: </p>
                <h1 className="text-lg">Total Payable amount:</h1>
              </div>
              <div className="p-4 font-semibold">
                <p>{carDetails?.dailyRate}</p>
                <p>7</p>
                <p className="text-lg">{carDetails?.dailyRate * 7}</p>
              </div>
            </div>
          </section>
          {loginToken === "" && username === "" && !loginStatus ? (
            <section className="p-4  my-2">
              <button
                className="bg-red-500 focus:ring-red-300 focus:ring-2 ring-offset-1 px-4 py-2 rounded-lg text-white"
                onClick={() => dispatch(setOtpModal(true))}
              >
                Login
              </button>
            </section>
          ) : null}
          {loginStatus ? (
            <section className="rounded-lg overflow-hidden h-auto mt-4 shadow-lg">
              <h1 className="bg-red-500 text-white px-4 py-2">
                Personal Details
              </h1>
              <div className="flex justify-between">
                <div className="p-4 font-medium">
                  <p>Name :</p>
                  <p>Email :</p>
                </div>
                <div className="p-4 font-medium">
                  <p>{username && username}</p>
                  <p>{userEmail && userEmail}</p>
                </div>
              </div>
            </section>
          ) : null}
          <section className="flex items-center justify-center mt-5">
            <button
              onClick={handlePayment}
              disabled={!loginStatus}
              className="w-3/4 bg-red-500 text-white rounded-lg  focus:ring-red-300 hover:ring-2 hover:ring-red-300 ring-offset-2 px-4 py-1.5  disabled:cursor-not-allowed disabled:bg-gray-200"
            >
              Confirm & Proceed
            </button>
            {errMsg ? <p className="text-red-500 text-sm">{errMsg}</p> : null}
          </section>
          <section className="flex items-center justify-center mt-5">
            <button
              onClick={handleConfirmBooking}
              disabled={!loginStatus}
              className="w-3/4 bg-red-500 text-white rounded-lg  focus:ring-red-300 hover:ring-2 hover:ring-red-300 ring-offset-2 px-4 py-1.5  disabled:cursor-not-allowed disabled:bg-gray-200"
            >
              Confirm booking
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
