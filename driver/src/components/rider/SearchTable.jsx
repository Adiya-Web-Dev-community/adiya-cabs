// icons
import { MdTripOrigin } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa";
import { BiSad } from "react-icons/bi";

const SearchTable = ({
  loading,
  data,
  setPassengerRoute,
  setPassengerDetails,
  start,
}) => {
  return (
    <div
      className={`md:w-[30%] md:h-full  md:absolute  top-0 z-20 space-y-6 py-5 px-0.5 overflow-y-auto col-span-3  bg-white ${
        start ? "hidden" : "block"
      }`}
    >
      {loading ? (
        <FaSpinner className="animate-spin text-5xl m-auto mt-6 text-gray-400" />
      ) : null}
      {data.length ? (
        data.map((obj, i) => {
          return (
            <div
              className="border-[1px] m-2 px-1 pb-0 md:px-2 py-4 rounded-md shadow-sm shadow-gray-300"
              key={i}
            >
              <div className="flex justify-between ">
                <div className="relative w-[75%]">
                  <p className="flex gap-1">
                    <MdTripOrigin className="text-orange-400 opacity-70" />
                    <span>{obj.pickupLocation}</span>
                  </p>
                  <p className="flex gap-1 mt-5">
                    <FaLocationDot className="text-red-600 opacity-70 " />
                    <span>{obj.destinationLocation}</span>
                  </p>
                  <div className="">
                    <p className="absolute top-3 left-2 w-[1px] h-[1rem] bg-gray-300 border-l-[1px] border-black"></p>
                    <p className="absolute top-7 left-2 w-[1px] h-[1rem] bg-gray-300 border-l-[1px] border-black "></p>
                  </div>
                  {/* <div className="space-y-3 mt-2 pt-2 pb-3 italic border-t-[1px] border-gray-400">
                    <p>
                      <span>Distance: </span>
                      <span className="text-blue-700 pl-3">{obj.distance}</span>
                    </p>
                    <p>
                      <span>Duration: </span>
                      <span className="text-blue-700 pl-3">{obj.duration}</span>
                    </p>
                  </div> */}
                </div>

                <div className="w-[20%]">
                  <a href="#map">
                    <button
                      className=" text-xs cursor-pointer border-[1px] border-gray-300 rounded-sm px-1 hover:bg-gray-500/30"
                      onClick={() => {
                        setPassengerRoute({
                          pickup: obj.pickupLocation,
                          destination: obj.destinationLocation,
                        });
                        setPassengerDetails(obj);
                      }}
                    >
                      Show route
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="flex gap-2 text-2xl text-center text-gray-300">
          <BiSad />
          <span>Couldn't find any passenger</span>
        </p>
      )}
    </div>
  );
};

export default SearchTable;
