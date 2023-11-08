import Banner from "../components/Ui/Banner";
import Info from "../components/Ui/Info";
import AnimatedTestimonial from "../components/utils/AnimatedTestimonial";
import { useState } from "react";
import { useSelector } from "react-redux";
import MapCotainer from "../components/utils/MapCotainer";
import BokkingCart from "../components/Booking/BokkingCart";
import LocationCart from "../components/Booking/LocationCart/LocationCart";

const Booking = () => {
  const [option, setOption] = useState("outstation");
  const bookingRideData = useSelector((el)=>el.bookingSlice.bookingRideData)

  const {pickupCity,destinationCity} = bookingRideData



  return (<section className=" min-h-[fit-content] max-h-max  mb-4  mt-8" >
           <div className=" h-full w-full p-2 mb-[1rem] " >
           
            <div className="flex w-full my-4 ">

            <div className='col-span-2 shadow-xl b w-2/3 relative border-[0.5rem] outline outline-gray-100 rounded-md border-white'>
            <MapCotainer/>
            </div>
            <div className=' col-span-2  w-1/3 '>
            <BokkingCart option={option} setOption={setOption} booking />
            </div>
            </div>
             <div className=' col-span-4 min-h-[8rem] w-full  grid grid-cols-3 gap-3 mb-2'>
              <div className="  bg-blue-100  ">
              <LocationCart name={'Current Location'}/>
              </div>
              <div className="  bg-red-100 ">
              <LocationCart name={'Pickup Location'} cityName={pickupCity}/>
              </div>
              <div className="  bg-green-100 "> 
              <LocationCart name={'Destination Location'} cityName={destinationCity}/>
              </div>
            </div>
           </div>
       
    </section>
  );
};

export default Booking;
