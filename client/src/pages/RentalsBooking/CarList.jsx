import Card from "./Card";
import { useSelector } from "react-redux";

const CarList = ({ data }) => {
  const { car } = useSelector((state) => state);
  console.log(car);
  return (
    <div className="w-[70%]">
      {car?.carList.length ? (
        car?.carList.map((car, i) => <Card key={i} car={car} />)
      ) : (
        <p>No vehicle availble at this moment</p>
      )}
    </div>
  );
};

export default CarList;
