import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCarDetails, setPayableAmount } from "../../store/rental";
import { GiGearStickPattern } from "react-icons/gi";
import { LuLuggage } from "react-icons/lu";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import Fuel from "../../assets/fuel.svg?react";
import { useState } from "react";

const Card = ({ car }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(1);

  const handleSelectOption = (index) => {
    setSelectedOption(index);
    // Add logic to handle the selected pricing option (if needed)
  };
  const { locationDetails, rentalsInitialData, carDetails, payableAmount } =
    useSelector((state) => state.rental);
  console.log(locationDetails, rentalsInitialData, carDetails, payableAmount);
  const handleBookNow = () => {
    dispatch(setCarDetails(car));
    dispatch(setPayableAmount(car.dailyRate * 7));
    navigate("/rentals/booking-summary");
  };

  const pricingOptions = [
    {
      distance: "120 kms/day",
      cost: "₹15,293",
      freeKms: "840 Free kms",
    },
    {
      distance: "300 kms/day",
      cost: "₹19,393",
      freeKms: "2100 Free kms",
    },
    {
      distance: "Unlimited",
      cost: "₹26,193",
      freeKms: "Unlimited kms",
    },
  ];

  return (
    <div className="border-[1px] border-red-200 rounded-xl flex flex-col flex-wrap">
      <div className="p-4 border-b-[1px] border-red-200">
        <p className="text-red-500 text-xl font-semibold">
          {car?.manufacturer} {car?.model}
        </p>
      </div>
      <div className="pl-4 pt-4 flex">
        <img
          src={car?.imgUrl}
          alt={`${car.manufacturer}-${car.model}-img`}
          className="w-96 h-52 rounded-lg object-cover shadow-lg"
        />
        <div className="ml-6  text-red-700">
          <h1 className="font-semibold">Economy</h1>
          <div className="pl-4 mt-4 space-y-2 ">
            <div className="flex items-center ">
              <Fuel /> <p className="pl-2">{car?.fuelType}</p>
            </div>

            <div className="flex items-center ">
              <GiGearStickPattern />{" "}
              <p className="pl-2">{car?.transmissionType}</p>
            </div>
            <div className="flex items-center">
              <MdAirlineSeatReclineNormal />
              <p className="pl-2">{car?.seatingCapacity} Seater</p>
            </div>
            <div className="flex items-center">
              <LuLuggage />
              <p className="pl-2">{car?.luggageCapacity} Luggage</p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex justify-center items-center gap-4">
          {pricingOptions.map((option, index) => (
            <div
              className={`flex flex-col space-y-2 items-center justify-center border-[1px] border-red-300 rounded-lg p-6 cursor-pointer  focus:border-red-400  hover:ring-2  hover:ring-red-300  focus:ring-red-300 focus:ring-2 ring-offset-1  ${
                selectedOption === index
                  ? "bg-red-500 text-white shadow-lg  ring-2 ring-red-500 ring-offset-1 "
                  : ""
              }`}
              key={index}
              onClick={() => handleSelectOption(index)}
            >
              <p
                className={`text-xs font-semibold ${
                  selectedOption === index ? "text-white" : "text-gray-500"
                }`}
              >
                {option.distance}
              </p>
              <p
                className={`text-md font-semibold ${
                  selectedOption === index ? "text-white" : ""
                }`}
              >
                {option.cost}
              </p>
              <p
                className={`text-xs font-semibold ${
                  selectedOption === index ? "text-white" : "text-gray-500"
                }`}
              >
                {option.freeKms}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <p>Extra kms will be charged at 7/km</p>
        </div>
        <button
          onClick={() => handleBookNow()}
          className="cursor-pointer font-semibold bg-red-500 px-6  focus:border-red-400  hover:ring-2  hover:ring-red-300  focus:ring-red-300 focus:ring-2 ring-offset-1  text-white py-1.5 rounded-md font-montserrat text-sm"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;
