import { useState } from "react";
import { banner } from "../../configs/banner";
import { useSelector,useDispatch } from "react-redux";
import { changeCategory } from "../../store/bookingSlice"; 

import BokkingCart from "../Booking/BokkingCart";
const Banner = () => {
  const [option, setOption] = useState("outstation");
  const category = useSelector(el=>el.bookingSlice.bookingRideData.category)



  return (
<section
  style={{
    backgroundImage: `url(${banner[category].img})`,
  }}
  className="bg-slate-900 bg-cover bg-center text-slate-700 flex flex-col md:flex-row px-1 py-10"
>
  <section className="w-full">
    <h1 className="text-white/80 text-5xl md:text-7xl font-montserrat font-extralight mb-8 md:my-16">
      <span>Book Meru</span><br/>
      <span>Best for {`${banner[category].name}`} rides</span>
    </h1>
  </section>
  <BokkingCart />
</section>

    
  );
};

export default Banner;




