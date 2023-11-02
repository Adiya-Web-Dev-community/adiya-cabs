import { useState } from "react";
import { banner } from "../configs/banner";
import {AiFillCar} from 'react-icons/ai'
import {PiAirplaneTakeoff} from 'react-icons/pi'
import {GiModernCity} from 'react-icons/gi'
import {MdCarRental} from 'react-icons/md'
import {RiMotorbikeFill}  from 'react-icons/ri'
import CustomSelect from "./form";
import {useDispatch,useSelector} from 'react-redux'
import { addBookingInfo,findActiveInput,updateCateGory } from "../store/bookingSlice";

const Banner = () => {
  const [option, setOption] = useState("outstation");
  const dispatch = useDispatch()
  const bookingInfo = useSelector((el)=>el.bookingSlice)


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e,value)=>{
    dispatch(addBookingInfo({name:e.name,value}))
  }

  const handleToActive = (activeInpuVal) =>{
    dispatch(findActiveInput(activeInpuVal))
  }
   
  const handelChnageCategory = (name)=>{
    dispatch(updateCateGory(name))
  }

  const toCheckOnlyActive = (name)=>{
    // return bookingInfo.onlyOneInput.active?
    // bookingInfo.onlyOneInput.ig
    return true
  }

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
    { value: 'option6', label: 'Option 6' },
    { value: 'option7', label: 'Option 7' },
    { value: 'option8', label: 'Option 8' },
    { value: 'option9', label: 'Option 9' },
  ];   


  return (
    <section
      style={{
        backgroundImage: `url(${eval(`banner.${option}.img`)})`,
      }}
      className="bg-slate-900 h-auto sm:h-[calc(100vh)]  bg-cover bg-center flex items-center justify-center font-montserrat text-slate-700"
    >
      <section>
        <h1 className="text-white/80 text-7xl hidden xl:flex flex-col font-extralight w-[900px]">
          <span>Book Meru</span>
          <span>Best for {eval(`banner.${option}.option`)} rides</span>
        </h1>
      </section>
      <section className="bg-white  rounded-none sm:rounded text-sm w-full sm:w-auto  overflow-hidden">
        <div className="space-x-2.5 flex text-white p-5  ">
          <button
            onClick={() => setOption("outstation")}
            className={` flex items-center flex-col border border-red-500  text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded duration-200 ${
              option === "outstation" ? "bg-red-500 text-white" : ""
            }`}
          >
           <AiFillCar/> Outstation
          </button>
          <button
            onClick={() => setOption("airport")}
            className={`border flex items-center flex-col text-center  border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded duration-200  ${
              option === "airport" ? "bg-red-500 text-white" : ""
            }`}
          >
            <PiAirplaneTakeoff/>
            Airport
          </button>
          <button
            onClick={() => setOption("city")}
            className={`border  flex items-center flex-col border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded duration-200 ${
              option === "city" ? "bg-red-500 text-white" : ""
            }`}
          >
            <GiModernCity/>
            City
          </button>
          <button
            onClick={() => setOption("rentals")}
            className={`border flex items-center flex-col border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded duration-200 ${
              option === "rentals" ? "bg-red-500 text-white" : ""
            }`}
          >
            <MdCarRental/>
            Rentals
          </button>
          <button
            onClick={() => setOption("rentals")}
            className={`border flex items-center flex-col border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded duration-200 ${
              option === "rentals" ? "bg-red-500 text-white" : ""
            }`}
          >
            <RiMotorbikeFill/>
            Bike Ride
          </button>


        </div>
        <form onSubmit={handleSubmit} className="px-5 pb-5 flex flex-col ">

          <h3 className="text-base mb-2">Book ride!</h3>
          <div className="flex flex-col space-y-2.5  h-[12rem]">
                 <CustomSelect  name={'pickupLocation'} options={options}  className={toCheckOnlyActive('pickupLocation')
                 ?'my-2 text-lg':'hidden'}  onActive={handleToActive}
                 label={'Select Pickup Location'}  onSelect={handleChange} />
                 <CustomSelect name={'distination'} options={options} className={toCheckOnlyActive('distination')?'my-2 text-lg':'hidden'}
                  label={'Enter Destination'} onActive={handleToActive}
                   onSelect={handleChange} />
          </div>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 pt-[9px] pb-2.5 rounded-md text-white mt-5 duration-200"
          >
            Book ride
          </button>
        </form>
      </section>
    </section>
  );
};

export default Banner;
