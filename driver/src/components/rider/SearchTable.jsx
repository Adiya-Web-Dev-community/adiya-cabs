// icons
import { MdTripOrigin } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const SearchTable = ({ data, setPassengerRoute }) => {
  return (
    <div className="space-y-6 overflow-y-auto col-span-3">
      {data.map((obj, i) => {
        return (
          <div
            className="border-[1px] m-2 px-1 pb-0 md:px-2 py-2 rounded-md shadow-sm shadow-gray-300"
            key={i}
          >
            <div className="flex justify-between ">
              <div className="relative">
                <p className="flex gap-1">
                  <MdTripOrigin className="text-orange-400 opacity-70" />
                  <span>{obj.pickupLocation}</span>
                </p>
                <p className="flex gap-1 mt-5">
                  <FaLocationDot className="text-red-600 opacity-70" />
                  <span>{obj.destinationLocation}</span>
                </p>
                <div className="">
                  <p className="absolute top-3 left-2 w-[1px] h-[1rem] bg-gray-300 border-l-[1px] border-black"></p>
                  <p className="absolute top-7 left-2 w-[1px] h-[1rem] bg-gray-300 border-l-[1px] border-black "></p>
                </div>
              </div>
              <div className="flex gap-3 flex-col">
                <p>{obj.passengerId.name}</p>
                <p>{obj.passengerId.contact || "123456778"}</p>
              </div>

              <div>
                <button
                  onClick={() => {
                    setPassengerRoute({
                      pickup: obj.pickupLocation,
                      destination: obj.destinationLocation,
                    });
                  }}
                >
                  Show route
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchTable;
