const Card = ({ car }) => {
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
    </div>
  );
};

export default Card;
