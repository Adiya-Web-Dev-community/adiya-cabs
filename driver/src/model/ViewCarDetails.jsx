// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCarDetails, setShowCarDetailsPopup } from "../store/adminSlice";
// import { IoIosCloseCircleOutline } from "react-icons/io";

// const ViewCarDetails = () => {
//   const dispatch = useDispatch();
//   const { carDetails } = useSelector((state) => state.admin);
//   const [isClosed, setIsClosed] = useState(false);

//   const handleClose = () => {
//     dispatch(setShowCarDetailsPopup(false));
//     setIsClosed(true);
//     // dispatch(setCarDetails(null));
//   };

//   return (
//     !isClosed && (
//       <div className="flex justify-center items-center">
//         <main
//           className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80"
//           onClick={handleClose}
//         ></main>
//         <div className="absolute w-4/6 inset-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="relative flex  p-6 rounded-md bg-white">
//             <section className="absolute top-0 right-0 p-4">
//               <button
//                 onClick={handleClose}
//                 className="text-gray-700 hover:text-gray-900 transition duration-300"
//               >
//                 <IoIosCloseCircleOutline className="text-3xl" />
//               </button>
//             </section>
//             <section className="flex w-full ">
//               <img
//                 src={carDetails?.imgUrl}
//                 className="object-cover rounded-lg "
//                 alt="Car"
//               />
//             </section>
//             <section className="px-4 w-full">
//               <table className="w-full table-auto">
//                 <tbody>
//                   <tr className="border-b border-gray-200">
//                     <td className="py-2 px-4 font-bold">Manufacturer</td>
//                     <td className="py-2 px-4">{carDetails?.manufacturer}</td>
//                   </tr>
//                   <tr className="border-b border-gray-200">
//                     <td className="py-2 px-4 font-bold">Model</td>
//                     <td className="py-2 px-4">{carDetails?.model}</td>
//                   </tr>
//                   <tr className="border-b border-gray-200">
//                     <td className="py-2 px-4 font-bold">Fuel</td>
//                     <td className="py-2 px-4">{carDetails?.fuelType}</td>
//                   </tr>
//                   <tr className="border-b border-gray-200">
//                     <td className="py-2 px-4 font-bold">Transmission</td>
//                     <td className="py-2 px-4">
//                       {carDetails?.transmissionType}
//                     </td>
//                   </tr>
//                   <tr className="border-b border-gray-200">
//                     <td className="py-2 px-4 font-bold">Seating</td>
//                     <td className="py-2 px-4">{carDetails?.seatingCapacity}</td>
//                   </tr>
//                   <tr className="border-b border-gray-200">
//                     <td className="py-2 px-4 font-bold">Luggage</td>
//                     <td className="py-2 px-4">{carDetails?.luggageCapacity}</td>
//                   </tr>
//                   <tr className="border-b border-gray-200">
//                     <td className="py-2 px-4 font-bold">Daily Rent</td>
//                     <td className="py-2 px-4">{carDetails?.dailyRate}</td>
//                   </tr>
//                   <tr className="border-b border-gray-200">
//                     <td className="py-2 px-4 font-bold">Monthly Rent</td>
//                     <td className="py-2 px-4">{carDetails?.monthlyRate}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </section>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default ViewCarDetails;
//========================================
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCarDetails, setShowCarDetailsPopup } from "../store/adminSlice";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ViewCarDetails = () => {
  const dispatch = useDispatch();
  const { carDetails } = useSelector((state) => state.admin);
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    dispatch(setShowCarDetailsPopup(false));
    setIsClosed(true);
    // dispatch(setCarDetails(null));
  };

  return (
    !isClosed && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
        <main
          className="w-full h-full bg-gray-900 bg-opacity-80"
          onClick={handleClose}
        ></main>
        <div className="absolute w-4/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex p-6 rounded-md bg-white">
            <section className="absolute top-0 right-0 p-4">
              <button
                onClick={handleClose}
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                <IoIosCloseCircleOutline className="text-3xl" />
              </button>
            </section>
            <section className="flex w-full">
              <img
                src={carDetails?.imgUrl}
                className="object-cover rounded-lg"
                alt="Car"
              />
            </section>
            <section className="px-4 w-full">
              <table className="w-full table-auto">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-bold">Manufacturer</td>
                    <td className="py-2 px-4">{carDetails?.manufacturer}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-bold">Model</td>
                    <td className="py-2 px-4">{carDetails?.model}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-bold">Fuel</td>
                    <td className="py-2 px-4">{carDetails?.fuelType}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-bold">Transmission</td>
                    <td className="py-2 px-4">
                      {carDetails?.transmissionType}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-bold">Seating</td>
                    <td className="py-2 px-4">{carDetails?.seatingCapacity}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-bold">Luggage</td>
                    <td className="py-2 px-4">{carDetails?.luggageCapacity}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-bold">Daily Rent</td>
                    <td className="py-2 px-4">{carDetails?.dailyRate}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-bold">Monthly Rent</td>
                    <td className="py-2 px-4">{carDetails?.monthlyRate}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    )
  );
};

export default ViewCarDetails;
