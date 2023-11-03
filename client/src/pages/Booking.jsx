import Banner from "../components/Banner";
import Info from "../components/Info";
import AnimatedTestimonial from "../components/AnimatedTestimonial";
import { useState } from "react";
import { useSelector } from "react-redux";
import MapCotainer from "../components/MapCotainer";
import BokkingCart from "../components/BokkingCart";
const Booking = () => {
  const [option, setOption] = useState("outstation");

  return (<section className="flex relative justify-end items-center bg-gray-100 min-h-[fit-content] h-screen ">
           <MapCotainer/>
           <BokkingCart option={option} setOption={setOption} booking />
    </section>
  );
};

export default Booking;
