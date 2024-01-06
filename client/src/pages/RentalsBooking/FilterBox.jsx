import { IoFilterOutline } from "react-icons/io5";
const FilterBox = ({ filterInputs, setFilterInputs, handleFetchCarsList }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex justify-between">
        <section className="flex gap-3">
          <IoFilterOutline className="mt-1" />
          <h1 className="text-blue-900">Filter</h1>
        </section>
        <section
          className="cursor-pointer"
          onClick={() => {
            setFilterInputs({fuelType:"", transmissionType:"", seatingCapacity:"", luggageCapacity:""});
            handleFetchCarsList();
          }}
        >
          <p>Clear all</p>
        </section>
      </div>
      {/* fuel type */}
      <section>
        <h1 className="text-lg pb-2 font-bold">Fuel Type</h1>
        <div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              value="Petrol"
              checked={filterInputs.fuelType === "Petrol"}
              onChange={(e) =>
                setFilterInputs((prev) => ({
                  ...prev,
                  fuelType: e.target.value,
                }))
              }
            />
            <label className="text-lg">Petrol</label>
          </div>
          <div className="flex gap-2">
            <input
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
            <label className="text-lg">Diesel</label>
          </div>
          <div className="flex gap-2">
            <input
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
            <label className="text-lg">Electric</label>
          </div>
          <div className="flex gap-2">
            <input
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
            <label className="text-lg">CNG</label>
          </div>
        </div>
      </section>
      {/* transmission type */}
      <section>
        <h1 className="text-lg pb-2 font-bold">Transmission Type</h1>
        <div>
          <div className="flex gap-2">
            <input
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
            <label className="text-lg">Automatic</label>
          </div>
          <div className="flex gap-2">
            <input
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
            <label className="text-lg">Manual</label>
          </div>
        </div>
      </section>
      {/* seating capacity */}
      <section>
        <h1 className="text-lg pb-2 font-bold">Seating Capacity</h1>
        <div>
          <div className="flex gap-2">
            <input
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
            <label className="text-lg">5</label>
          </div>
          <div className="flex gap-2">
            <input
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
            <label className="text-lg">6</label>
          </div>
          <div className="flex gap-2">
            <input
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
            <label className="text-lg">7</label>
          </div>
        </div>
      </section>
      {/*luggage capacity */}
      <section>
        <h1 className="text-lg pb-2 font-bold">Luggage Capacity</h1>
        <div>
          <div className="flex gap-2">
            <input
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
            <label className="text-lg">2</label>
          </div>
          <div className="flex gap-2">
            <input
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
            <label className="text-lg">3</label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterBox;
