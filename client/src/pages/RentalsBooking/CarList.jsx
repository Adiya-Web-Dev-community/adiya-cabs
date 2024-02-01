import Card from "./Card";
import { useSelector } from "react-redux";

const CarList = ({ data }) => {
  const { car } = useSelector((state) => state);
  console.log(car);
  return (
    <div className="w-full space-y-5">
      {car?.carList.length ? (
        car?.carList.map((car, i) => <Card key={i} car={car} />)
      ) : (
        <div className="w-full h-full flex items-center justify-center ">
          <p className="text-center -ml-24 -mt-24 text-4xl font-bold text-red-500">
            No vehicle available at
            <br /> this moment
          </p>
        </div>
      )}
    </div>
  );
};

export default CarList;
