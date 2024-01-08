import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { setLocationDetails } from "../../store/rental";
import { setOtpModal } from "../../store/appSlice";
import OtpModal from "../../modal/OtpModal";

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

  const { rentalsInitialData, carDetails } = useSelector(
    (state) => state.rental
  );

  // fetch pickup and drop locations
  const pickupLocationRef = useRef();
  const dropLocationRef = useRef();

  //handle proceed
  const handleProceed = () => {
    console.log(pickupLocationRef.current.value, dropLocationRef.current.value);
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
              onClick={handleProceed}
              disabled={!loginStatus}
              className="bg-orange-400 rounded-md px-4 py-1.5 mt-5 disabled:cursor-not-allowed disabled:bg-gray-200"
            >
              Proceed
            </button>
          </section>
        </div>
      </div>
      {otpModal ? <OtpModal setLoginStatus={setLoginStatus} /> : null}
    </div>
  );
};

export default BookingSummary;
