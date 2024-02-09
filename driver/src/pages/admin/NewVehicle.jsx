import { useState } from "react";
import { carData } from "../../configs/carData";
import { useNavigate } from "react-router-dom";
import axios from "../../helper/axios";

const NewVehicle = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(carData);
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  //handle image(
  const [imageByteCode, setImageByteCode] = useState("");
  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    // Read the image file as a data URL
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      const imageDataUrl = reader.result;
      setImageByteCode(imageDataUrl);
    };

    reader.onerror = (error) => {
      alert(error);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...formData, imgUrl: imageByteCode };
    try {
      const resp = await axios.post("/admin/cars ", data);
      if (resp.data.success) {
        navigate("/all-vehicles");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-[90vh] bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200">
      <div className="">
        <div className="px-10">
          <h1 className="text-center text-3xl font-mono font-semibold mt-4 underline decoration-dashed underline-offset-2 ">
            ADD NEW VEHICLE
          </h1>
          <form
            className="grid grid-cols-3 py-6 gap-4 "
            onSubmit={handleSubmit}
          >
            <section className="flex flex-col w-full ">
              <label className="text-lg" htmlFor="manufacturer">
                Manufacturer
              </label>
              <input
                id="manufacturer"
                type="text"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleInputs}
                placeholder="ex: TATA, Toyota, Mercedes-Benz"
                className="border-2 border-gray-500 px-3 py-2 rounded-xl hover:ring-2 hover:ring-gray-500 focus:ring-2 ring-offset-1 focus:ring-gray-500"
              />
            </section>
            <section className="flex flex-col w-full ">
              <label className="text-lg" htmlFor="model">
                Model
              </label>
              <input
                id="model"
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputs}
                placeholder="ex: Corolla, Sonata,  E-Class"
                className="border-2 border-gray-500 px-3 py-2 rounded-xl hover:ring-2 hover:ring-gray-500 focus:ring-2 ring-offset-1 focus:ring-gray-500"
              />
            </section>
            <section className="flex flex-col w-full ">
              <label className="text-lg" htmlFor="fuelType">
                Fuel Type
              </label>
              <select
                id="fuelType"
                name="fuelType"
                value={formData.fuelType}
                onChange={handleInputs}
                className="border-2 border-gray-500 px-3 py-3 rounded-xl hover:ring-2 hover:ring-gray-500 focus:ring-2 ring-offset-1 focus:ring-gray-500"
              >
                <option value="">Select</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="CNG">CNG</option>
              </select>
            </section>
            <section className="flex flex-col w-full  ">
              <label className="text-lg" htmlFor="transmissionType">
                Transmission Type
              </label>
              <select
                id="transmissionType"
                name="transmissionType"
                value={formData.transmissionType}
                onChange={handleInputs}
                className="border-2 border-gray-500 px-3 py-3 rounded-xl hover:ring-2 hover:ring-gray-500 focus:ring-2 ring-offset-1 focus:ring-gray-500"
              >
                <option value="">Select</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </section>
            <section className="flex flex-col w-full ">
              <label className="text-lg" htmlFor="carNo">
                Vehicle Registration Number
              </label>
              <input
                id="carNo"
                type="text"
                name="carNo"
                value={formData.carNo}
                onChange={handleInputs}
                placeholder="MH05EV4430"
                className="border-2 border-gray-500 px-3 py-3 rounded-xl hover:ring-2 hover:ring-gray-500 focus:ring-2 ring-offset-1 focus:ring-gray-500"
              />
            </section>
            <section className="flex flex-col w-full row-span-2">
              <label className="text-lg" htmlFor="file_input">
                Upload file
              </label>

              <input
                className="hidden" // Hide the default file input visually
                id="file_input"
                type="file"
                onChange={(e) => handleImageChange(e)}
              />

              <label
                htmlFor="file_input"
                className="cursor-pointer p-2 flex items-center justify-center border-2 border-gray-500  rounded-xl hover:ring-2 hover:ring-gray-500 focus:ring-2 ring-offset-1 focus:ring-gray-500"
              >
                <div className="flex items-center mx-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="ml-4">
                    Drop your files here or click to upload
                  </p>
                </div>
              </label>

              <section className="flex items-center justify-center w-full h-full p-6 border-2 border-gray-500 border-dashed rounded-2xl mt-4">
                {imageByteCode ? (
                  <img
                    className="flex h-36 object-cover"
                    src={imageByteCode}
                    alt="image-loading..."
                  />
                ) : (
                  <div className="text-center">No Image selected</div>
                )}
              </section>
            </section>

            <section className="flex flex-col w-full col-span-2 ">
              <label>Description</label>
              <textarea
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputs}
                placeholder="Brief information abput car ex:dimensions, technology & safety features, interior-exterior color, "
                className="border-2 h-28 border-gray-500 px-3 py-2 rounded-xl hover:ring-2 hover:ring-gray-500 focus:ring-2 ring-offset-1 focus:ring-gray-500"
              />
            </section>
            <section className="flex flex-col w-full ">
              <label className="text-lg" htmlFor="seatingCapacity">
                Seating Capacity
              </label>
              <select
                id="seatingCapacity"
                type="number"
                name="seatingCapacity"
                value={formData.seatingCapacity}
                onChange={handleInputs}
                className="border-2 border-gray-500 px-3 py-3 rounded-xl hover:ring-2 hover:ring-gray-500 focus:ring-2 ring-offset-1 focus:ring-gray-500"
              >
                <option value="">Select</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </section>
            <section className="flex flex-col w-full ">
              <label className="text-lg" htmlFor="luggageCapacity">
                Luggage Capacity
              </label>
              <select
                id="luggageCapacity"
                type="number"
                name="luggageCapacity"
                value={formData.luggageCapacity}
                onChange={handleInputs}
                className="border-2 border-gray-500 px-3 py-3 rounded-xl hover:ring-2 hover:ring-gray-500 focus:ring-2 ring-offset-1 focus:ring-gray-500"
              >
                <option value="">Select</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </section>
            <section className="flex flex-col w-full ">
              <label className="text-lg" htmlFor="dailyRate">
                Daily Rate
              </label>
              <input
                id="dailyRate"
                type="number"
                name="dailyRate"
                value={formData.dailyRate}
                onChange={handleInputs}
                className="border-2 border-gray-500 px-3 py-2 rounded-xl hover:ring-2 hover:ring-gray-500 focus:ring-2 ring-offset-1 focus:ring-gray-500"
              />
            </section>
            <section className="flex flex-col w-full ">
              <label className="text-lg" htmlFor="monthlyRate">
                Monthly Rate
              </label>
              <input
                id="monthlyRate"
                type="number"
                name="monthlyRate"
                value={formData.monthlyRate}
                onChange={handleInputs}
                className="border-2 border-gray-500 px-3 py-2 rounded-xl hover:ring-2 hover:ring-gray-500 focus:ring-2 ring-offset-1 focus:ring-gray-500"
              />
            </section>

            <section className="flex items-center justify-center w-full col-span-2">
              <button
                type="submit"
                className="mt-6 flex items-center justify-center w-full border-2 bg-black text-white border-black px-3 py-2 rounded-xl hover:ring-2 hover:ring-black focus:ring-2 ring-offset-1 focus:ring-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                ADD VEHICLE
              </button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewVehicle;
