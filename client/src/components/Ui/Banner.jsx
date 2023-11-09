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
      className="bg-slate-900 h-screen  bg-cover bg-center  text-slate-700 flex relative justify-end items-center  min-h-[fit-content]  "
    >
      <section>
        <h1 className="text-white/80 text-7xl hidden xl:flex flex-col  w-[900px] font-montserrat font-extralight ">
          <span>Book Meru</span>
          <span>Best for {`${banner[category].name}`} rides</span>
        </h1>
      </section>
      <BokkingCart />
    </section>
  );
};

export default Banner;




