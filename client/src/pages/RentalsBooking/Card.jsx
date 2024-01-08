import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCarDetails } from "../../store/rental";

const Card = ({ car }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBookNow = () => {
    dispatch(setCarDetails(car));
    navigate("/rentals/booking-summary");
  };
  return (
    <div className="border-2 p-2 rounded-2 flex gap-3 justify-between">
      <div>
        <p>{car.manufacturer}</p>
        <p>{car.model}</p>
        <p>{car.fuelType}</p>
        <p>{car.transmissionType}</p>
        <p>{car.seatingCapacity}</p>
        <p>{car.luggageCapacity}</p>
      </div>
      <img
        src={car?.imgUrl}
        alt="img-loading"
        className="w-[500px] h-[400px]"
      />
      <div className="flex justify-center items-center">
        <button
          onClick={() => handleBookNow()}
          className="cursor-pointer bg-orange-400 px-3  py-1.5 rounded-md font-montserrat text-sm"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;
