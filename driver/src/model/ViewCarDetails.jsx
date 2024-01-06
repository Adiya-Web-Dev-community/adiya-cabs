import { useDispatch, useSelector } from "react-redux";
import { setShowCarDetailsPopup } from "../store/adminSlice";
const ViewCarDetails = () => {
  const dispatch = useDispatch();
  const { carDetails } = useSelector((state) => state.admin);
  return (
    <main className="absolute top-0 w-full h-full bg-black/80 flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[40%]  p-3 rounded-md bg-white ">
          <section className="flex justify-end">
            <p
              className="cursor-pointer"
              onClick={() => dispatch(setShowCarDetailsPopup(false))}
            >
              Close
            </p>
          </section>
          <section className="flex justify-center items-center my-3">
            <img src={carDetails?.imgUrl} className="w-[30rem] h-[20rem]" />
          </section>
          <section className="px-2 w-full">
            <table className="w-[90%] m-auto border-2">
              <tr className="border-2">
                <td className="py-1.5 px-2 border-2 font-bold">Manufacturer</td>
                <td className="py-1.5 px-2 border-2">
                  {carDetails?.manufacturer}
                </td>
              </tr>
              <tr className="border-2">
                <td className="py-1.5 px-2 border-2 font-bold">Model</td>
                <td className="py-1.5 px-2 border-2">{carDetails?.model}</td>
              </tr>
              <tr className="border-2">
                <td className="py-1.5 px-2 border-2 font-bold">Fuel</td>
                <td className="py-1.5 px-2 border-2">{carDetails?.fuelType}</td>
              </tr>
              <tr className="border-2">
                <td className="py-1.5 px-2 border-2 font-bold">Transmission</td>
                <td className="py-1.5 px-2 border-2">
                  {carDetails?.transmissionType}
                </td>
              </tr>
              <tr className="border-2">
                <td className="py-1.5 px-2 border-2 font-bold">Seating</td>
                <td className="py-1.5 px-2 border-2">
                  {carDetails?.seatingCapacity}
                </td>
              </tr>
              <tr className="border-2">
                <td className="py-1.5 px-2 border-2 font-bold">Luggage</td>
                <td className="py-1.5 px-2 border-2">
                  {carDetails?.luggageCapacity}
                </td>
              </tr>
              <tr className="border-2">
                <td className="py-1.5 px-2 border-2 font-bold">Daily Rent</td>
                <td className="py-1.5 px-2 border-2">
                  {carDetails?.dailyRate}
                </td>
              </tr>
              <tr className="border-2">
                <td className="py-1.5 px-2 border-2 font-bold">Monthly Rent</td>
                <td className="py-1.5 px-2 border-2">
                  {carDetails?.monthlyRate}
                </td>
              </tr>
            </table>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ViewCarDetails;
