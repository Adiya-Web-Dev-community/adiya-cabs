import { useState } from "react";
import { carData } from "../../configs/carData";
import axios from "../../helper/axios";

const NewVehicle = () => {
  const [formData, setFormData] = useState(carData);
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("/admin/cars ", formData);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full mb-10">
      <div className="py-10   w-full">
        <div className="border-[1px] border-gray-300 w-[60%] h-auto p-2 m-auto rounded-md ">
          <h1 className="text-center text-xl font-mono">ADD NEW VEHICLE</h1>
          <form
            className=" py-10 grid grid-cols-2 gap-10 px-5"
            onSubmit={handleSubmit}
          >
            <section className="space-y-2">
              <label>Manufacturer</label>
              <input
                type="text"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleInputs}
                placeholder="ex: TATA, Toyota, Mercedes-Benz"
                className="w-full border-[1px] py-1.5 px-2 placeholder:text-sm placeholder:text-gray-400 rounded-md focus:outline-gray-400"
              />
            </section>
            <section className="space-y-2">
              <label>Model</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputs}
                placeholder="ex: Corolla, Sonata,  E-Class"
                className="w-full border-[1px] py-1.5 px-2 placeholder:text-sm placeholder:text-gray-400 rounded-md focus:outline-gray-400"
              />
            </section>
            <section className="space-y-2">
              <label>Fuel Type</label>
              <select
                name="fuelType"
                value={formData.fuelType}
                onChange={handleInputs}
                className="border-[1px] px-3 w-full py-2 rounded-md"
              >
                <option value="">Select</option>
                <option value="Petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="CNG">CNG</option>
              </select>
            </section>
            <section className="space-y-2">
              <label>Trasmission Type</label>
              <select
                name="transmissionType"
                value={formData.transmissionType}
                onChange={handleInputs}
                className="border-[1px] px-3 w-full py-2 rounded-md"
              >
                <option value="">Select</option>
                <option value="Petrol">Automatic</option>
                <option value="diesel">Manual</option>
              </select>
            </section>
            <section className="col-span-2">
              <label>Vehicle Registartion Number</label>
              <input
                type="text"
                name="carNo"
                value={formData.carNo}
                onChange={handleInputs}
                placeholder="MH05EV4430"
                className="w-full border-[1px] py-1.5 px-2 placeholder:text-sm placeholder:text-gray-400 rounded-md focus:outline-gray-400"
              />
            </section>
            <section className="col-span-2">
              <label>Description</label>
              <textarea
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputs}
                placeholder="Brief information abput car ex:dimensions, technology & safety features, interior-exterior color, "
                className="w-full border-[1px] py-1.5 px-2 placeholder:text-sm placeholder:text-gray-400 rounded-md focus:outline-gray-400 min-h-[7rem]"
              />
            </section>
            <section className="space-y-2">
              <label>Seating Capacity</label>
              <select
                type="number"
                name='seatingCapacity'
                value={formData.seatingCapacity}
                onChange={handleInputs}
                className="border-[1px] px-3 w-full py-2 rounded-md"
              >
                <option value="">Select</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </section>
            <section className="space-y-2">
              <label>Luggage Capacity</label>
              <select
                name="number"
                value={formData.luggageCapacity}
                onChange={handleInputs}
                className="border-[1px] px-3 w-full py-2 rounded-md"
              >
                <option value="">Select</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </section>
            <section className="space-y-2">
              <label>Daily Rate</label>
              <input
                type="number"
                name="dailyRate"
                value={formData.dailyRate}
                onChange={handleInputs}
                className="w-full border-[1px] py-1.5 px-2 placeholder:text-sm placeholder:text-gray-400 rounded-md focus:outline-gray-400"
              />
            </section>
            <section className="space-y-2">
              <label>Monthly Rate</label>
              <input
                type="number"
                name="monthlyRate"
                value={formData.monthlyRate}
                onChange={handleInputs}
                className="w-full border-[1px] py-1.5 px-2 placeholder:text-sm placeholder:text-gray-400 rounded-md focus:outline-gray-400"
              />
            </section>
            <section className="space-y-2 col-span-2">
              <button
                type="submit"
                className="w-full bg-gray-200 rounded-lg text-sm py-2"
              >
                ADD
              </button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewVehicle;
