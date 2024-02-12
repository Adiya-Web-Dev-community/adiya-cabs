import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import FilterShimmer from "./FilterShimmer";
import { useSelector } from "react-redux";

// const { carList } = useSelector((state) => state.car);

const FilterBox = ({ filterInputs, setFilterInputs, handleFetchCarsList }) => {
  return (
    <>
      {/* {carList === null ? (
        <FilterShimmer />
      ) : ( */}
      <div className="bg-gray-100 p-6 rounded-md shadow-md border-2 border-red-50 text-red-500 ">
        <div className="flex justify-between items-center">
          <section className="flex gap-3 items-center">
            <IoFilterOutline className="text-2xl text-red-500" />
            <h1 className="text-red-500 text-md font-semibold">Filter</h1>
          </section>
          <section
            className="cursor-pointer text-red-500"
            onClick={() => {
              setFilterInputs({
                fuelType: "",
                transmissionType: "",
                seatingCapacity: "",
                luggageCapacity: "",
              });
              handleFetchCarsList();
            }}
          >
            <p>Clear all</p>
          </section>
        </div>
        {/* fuel type */}
        <section className="mt-4">
          <h1 className="text-md pb-2 font-bold">Fuel Type</h1>
          <div>
            <div className="flex item-center gap-2">
              <input
                id="petrolCheckbox"
                type="checkbox"
                value="Petrol"
                className="appearance-none  w-4 h-4 m-1 p-1 rounded-full border-2 border-red-500 checked:bg-red-500 checked:border-none checked:outline-none cursor-pointer"
                checked={filterInputs.fuelType === "Petrol"}
                onChange={(e) =>
                  setFilterInputs((prev) => ({
                    ...prev,
                    fuelType: e.target.value,
                  }))
                }
              />
              <label
                htmlFor="petrolCheckbox"
                className="cursor-pointer text-md"
              >
                Petrol
              </label>
            </div>
            <div className="flex gap-2">
              <input
                id="dieselCheckbox"
                className="appearance-none w-4 h-4 m-1 rounded-full border-2 border-red-500 checked:bg-red-500 checked:border-none checked:outline-none cursor-pointer"
                type="checkbox"
                value="Diesel"
                checked={filterInputs.fuelType === "Diesel"}
                onChange={(e) =>
                  setFilterInputs((prev) => ({
                    ...prev,
                    fuelType: e.target.value,
                  }))
                }
              />
              <label
                htmlFor="dieselCheckbox"
                className="cursor-pointer text-md"
              >
                Diesel
              </label>
            </div>
            <div className="flex gap-2">
              <input
                id="ElectricCheckbox"
                className="appearance-none  w-4 h-4 m-1 rounded-full border-2 border-red-500 checked:bg-red-500 checked:border-none checked:outline-none cursor-pointer"
                type="checkbox"
                value="Electric"
                checked={filterInputs.fuelType === "Electric"}
                onChange={(e) =>
                  setFilterInputs((prev) => ({
                    ...prev,
                    fuelType: e.target.value,
                  }))
                }
              />
              <label
                htmlFor="ElectricCheckbox"
                className="cursor-pointer text-md"
              >
                Electric
              </label>
            </div>
            <div className="flex gap-2">
              <input
                id="cngCheckbox"
                className="appearance-none w-4 h-4 m-1 rounded-full border-2 border-red-500 checked:bg-red-500 checked:border-none checked:outline-none cursor-pointer"
                type="checkbox"
                value="CNG"
                checked={filterInputs.fuelType === "CNG"}
                onChange={(e) =>
                  setFilterInputs((prev) => ({
                    ...prev,
                    fuelType: e.target.value,
                  }))
                }
              />
              <label htmlFor="cngCheckbox" className="cursor-pointer text-md">
                CNG
              </label>
            </div>
          </div>
        </section>
        {/* transmission type */}
        <section className="mt-4">
          <h1 className="text-md pb-2 font-bold">Transmission Type</h1>
          <div>
            <div className="flex gap-2">
              <input
                id="automaticCheckbox"
                className="appearance-none w-4 h-4 m-1 rounded-full border-2 border-red-500 checked:bg-red-500 checked:border-none checked:outline-none cursor-pointer"
                type="checkbox"
                value="Automatic"
                checked={filterInputs.transmissionType === "Automatic"}
                onChange={(e) =>
                  setFilterInputs((prev) => ({
                    ...prev,
                    transmissionType: e.target.value,
                  }))
                }
              />
              <label
                htmlFor="automaticCheckbox"
                className="cursor-pointer text-md"
              >
                Automatic
              </label>
            </div>
            <div className="flex gap-2">
              <input
                id="ManualCheckbox"
                className="appearance-none w-4 h-4 m-1 rounded-full border-2 border-red-500 checked:bg-red-500 checked:border-none checked:outline-none cursor-pointer"
                type="checkbox"
                value="Manual"
                checked={filterInputs.transmissionType === "Manual"}
                onChange={(e) =>
                  setFilterInputs((prev) => ({
                    ...prev,
                    transmissionType: e.target.value,
                  }))
                }
              />
              <label
                htmlFor="ManualCheckbox"
                className="cursor-pointer text-md"
              >
                Manual
              </label>
            </div>
          </div>
        </section>
        {/* seating capacity */}
        <section className="mt-4">
          <h1 className="text-md pb-2 font-bold">Seating Capacity</h1>
          <div>
            <div className="flex gap-2">
              <input
                id="five"
                className="appearance-none  w-4 h-4 m-1 rounded-full border-2 border-red-500 checked:bg-red-500 checked:border-none checked:outline-none cursor-pointer"
                type="checkbox"
                value="5"
                checked={filterInputs.seatingCapacity === "5"}
                onChange={(e) =>
                  setFilterInputs((prev) => ({
                    ...prev,
                    seatingCapacity: e.target.value,
                  }))
                }
              />
              <label htmlFor="five" className="cursor-pointer text-md">
                5
              </label>
            </div>
            <div className="flex gap-2">
              <input
                id="six"
                className="appearance-none w-4 h-4 m-1 rounded-full border-2 border-red-500 checked:bg-red-500 checked:border-none checked:outline-none cursor-pointer"
                type="checkbox"
                value="6"
                checked={filterInputs.seatingCapacity === "6"}
                onChange={(e) =>
                  setFilterInputs((prev) => ({
                    ...prev,
                    seatingCapacity: e.target.value,
                  }))
                }
              />
              <label htmlFor="six" className="cursor-pointer text-md">
                6
              </label>
            </div>
            <div className="flex gap-2">
              <input
                id="seven"
                className="appearance-none w-4 h-4 m-1 rounded-full border-2 border-red-500 checked:bg-red-500 checked:border-none checked:outline-none cursor-pointer"
                type="checkbox"
                value="7"
                checked={filterInputs.seatingCapacity === "7"}
                onChange={(e) =>
                  setFilterInputs((prev) => ({
                    ...prev,
                    seatingCapacity: e.target.value,
                  }))
                }
              />
              <label htmlFor="seven" className="cursor-pointer text-md">
                7
              </label>
            </div>
          </div>
        </section>
        {/*luggage capacity */}
        <section className="mt-4">
          <h1 className="text-md pb-2 font-bold">Luggage Capacity</h1>
          <div>
            <div className="flex gap-2">
              <input
                id="two"
                className="appearance-none  w-4 h-4 m-1 rounded-full border-2 border-red-500 checked:bg-red-500 checked:border-none checked:outline-none cursor-pointer"
                type="checkbox"
                value="2"
                checked={filterInputs.luggageCapacity === "2"}
                onChange={(e) =>
                  setFilterInputs((prev) => ({
                    ...prev,
                    luggageCapacity: e.target.value,
                  }))
                }
              />
              <label htmlFor="two" className="cursor-pointer text-md">
                2
              </label>
            </div>
            <div className="flex gap-2">
              <input
                id="three"
                className="appearance-none w-4 h-4 m-1 rounded-full border-2 border-red-500 checked:bg-red-500 checked:border-none checked:outline-none cursor-pointer"
                type="checkbox"
                value="3"
                checked={filterInputs.luggageCapacity === "3"}
                onChange={(e) =>
                  setFilterInputs((prev) => ({
                    ...prev,
                    luggageCapacity: e.target.value,
                  }))
                }
              />
              <label htmlFor="three" className="cursor-pointer text-md">
                3
              </label>
            </div>
          </div>
        </section>
      </div>
      {/* )} */}
    </>
  );
};

export default FilterBox;
