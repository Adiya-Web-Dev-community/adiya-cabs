import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onLocationChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onLocationChange(query);
  };

  return (
    <div className="pb-4 px-5 flex ">
      <div className="border-2 rounded-xl w-96 flex border-gray-400">
        <input
          className="w-full  rounded-xl  px-4 py-2 outline-none bg-white "
          placeholder="Enter Location"
          value={searchQuery}
          onChange={handleSearchChange}
          aria-label="Search for a location"
        />
        <div className="pr-2 pt-[11px] text-gray-400">
          <BsSearch size={"20px"} />
        </div>
      </div>
      <button className="bg-red-500 text-white py-1 px-6 rounded-3xl ml-3 cursor-pointer">
        Current Location
      </button>
    </div>
  );
};

export default SearchBar;
