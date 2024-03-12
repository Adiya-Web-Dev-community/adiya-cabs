import Banner from "../components/Ui/Banner";
import Info from "../components/Ui/Info";
import AnimatedTestimonial from "../components/utils/AnimatedTestimonial";
import { useState } from "react";
import { useSelector } from "react-redux";
import MapCotainer from "../components/utils/MapCotainer";
import BokkingCart from "../components/Booking/BokkingCart";
import LocationCart from "../components/Booking/cart/LocationCart";
const Booking = () => {
  const [option, setOption] = useState("outstation");
  const bookingRideData = useSelector((el)=>el.bookingSlice.bookingRideData)
  const {destinationLocation,pickupLocation} = bookingRideData


  return (<section className=" min-h-[fit-content] max-h-max  mb-4  mt-8" >
           <div className=" h-full w-full p-2 mb-[1rem] " >
           
            <div className="flex w-full flex-col md:flex-row my-4 ">

            <div className='col-span-2 shadow-xl b w-2/3 relative border-[0.5rem] outline outline-gray-100 rounded-md border-white'>
            <MapCotainer destinationLocation={destinationLocation.address} pickupLocation={pickupLocation.address}/>
            
            </div>
            <div className=' col-span-2  w-1/3 '>
            <BokkingCart option={option} setOption={setOption} booking />
            </div>
            </div>
             <div className=' col-span-4 min-h-[8rem] w-full  grid grid-cols-1 md:grid-cols-3 gap-3 mb-2 mt-20'>
              <div className="  bg-blue-100  ">
              <LocationCart name={'Current Location'} current />
              </div>
              <div className="  bg-red-100 ">
              <LocationCart name={'Pickup Location'} latitude={pickupLocation.lat} longitude={pickupLocation.lng}/>
              </div>
              <div className="  bg-green-100 "> 
              <LocationCart name={'Destination Location'} latitude={destinationLocation.lat} longitude={destinationLocation.lng}/>
              </div>
            </div>
           </div>
       
    </section>
  );
};

export default Booking;
