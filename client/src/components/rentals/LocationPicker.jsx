import SearchBar from "./SearchBar";
import delhiImg from "../../assets/rentals/frontPageLoaction/india-gate.png";
import bengaluruImg from "../../assets/rentals/frontPageLoaction/bangalore.png";
import mumbaiImg from "../../assets/rentals/frontPageLoaction/mumbai.png";
import PuneImg from "../../assets/rentals/frontPageLoaction/Pune.png";
import jaipurImg from "../../assets/rentals/frontPageLoaction/jaipur.png";
import charminarImg from "../../assets/rentals/frontPageLoaction/charminar.png";
import { useState } from "react";

const famousCity = [
  {
    icon: delhiImg,
    cityName: "Delhi",
  },
  {
    icon: bengaluruImg,
    cityName: "Bengaluru",
  },
  {
    icon: mumbaiImg,
    cityName: "Mumbai",
  },
  {
    icon: PuneImg,
    cityName: "Pune",
  },
  {
    icon: jaipurImg,
    cityName: "Jaipur",
  },
  {
    icon: charminarImg,
    cityName: "Hyderabad",
  },
];

const otherCities = [
  "Amritsar",
  "Chandigarh",
  "Chennai",
  "Dehradun",
  "Haridwar",
  "Indore",
  "Jodhpur",
  "Kolkata",
  "Lucknow",
  "Rishikesh",
  "Udaipur",
  "Kota",
];

const LocationPicker = ({ onLocationChange }) => {
  const [activeLocation, setActiveLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleLocationClick = (cityName) => {
    onLocationChange(cityName);
    setActiveLocation(cityName);
  };

  const filteredFamousCity = famousCity.filter((el) =>
    el.cityName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredOtherCities = otherCities.filter((el) =>
    el.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h2 className="mt-2 mb-4 font-semibold text-gray-600 font-montserrat">
        Search Location
      </h2>
      <SearchBar onSearchChange={(query) => setSearchTerm(query)} />
      <section>
        {filteredFamousCity.length === 0 &&
          filteredOtherCities.length === 0 && (
            <p className="flex items-center justify-center text-xl text-red-600 mt-4">
              No locations found.
            </p>
          )}
      </section>
      <section>
        <h2
          className={`mt-2 mb-4 font-semibold text-gray-600 font-montserrat ${
            filteredFamousCity.length === 0 ? "hidden" : ""
          }`}
        >
          Popular Cities
        </h2>
        <div
          className={`flex ${
            searchTerm ? "justify-start gap-4 ml-6" : "justify-evenly"
          }`}
        >
          {filteredFamousCity.map((el, idx) => (
            <div
              className={`hover:text-red-500 hover:bg-red-50 group ${
                activeLocation === el.cityName
                  ? "active:text-red-500 group-hover:bg-red-50"
                  : ""
              }`}
              key={idx + 1}
              onClick={() => handleLocationClick(el.cityName)}
            >
              <div
                className={`h-20 w-20 relative p-2 shadow group ${
                  activeLocation === el.cityName ? "bg-red-50" : ""
                } `}
              >
                <img src={el.icon} className="w-100 h-100 object-cover " />
                <div className="w-full h-full absolute top-0 left-0 bg-black/5 cursor-pointer"></div>
              </div>
              <div
                className={`text-center text-gray-600 text-sm group-hover:text-red-500 cursor-pointer font-montserrat ${
                  activeLocation === el.cityName ? "text-red-500" : ""
                }`}
              >
                {el.cityName}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2
          className={`mt-2 mb-4 font-semibold text-gray-600 font-montserrat ${
            filteredOtherCities.length === 0 ? "hidden" : ""
          }`}
        >
          Other Cities
        </h2>

        <ul className="grid grid-cols-6 text-center gap-2 p-4">
          {filteredOtherCities.map((el, idx) => (
            <li
              className={`text-sm hover:text-red-500 ${
                activeLocation === el ? "text-red-500" : ""
              } cursor-pointer font-montserrat`}
              key={idx}
              onClick={() => handleLocationClick(el)}
            >
              {el}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LocationPicker;
