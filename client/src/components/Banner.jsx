import { useState } from "react";
import { banner } from "../configs/banner";
import {AiFillCar} from 'react-icons/ai'
import {PiAirplaneTakeoff} from 'react-icons/pi'
import {GiModernCity} from 'react-icons/gi'
import {MdCarRental} from 'react-icons/md'
import {RiMotorbikeFill}  from 'react-icons/ri'

import BokkingCart from "./BokkingCart";
const Banner = () => {
  const [option, setOption] = useState("outstation");




  return (
    <section
      style={{
        backgroundImage: `url(${eval(`banner.${option}.img`)})`,
      }}
      className="bg-slate-900 h-screen  bg-cover bg-center  text-slate-700 flex relative justify-end items-center  min-h-[fit-content]  "
    >
      <section>
        <h1 className="text-white/80 text-7xl hidden xl:flex flex-col font-extralight w-[900px] font-montserrat font-extralight ">
          <span>Book Meru</span>
          <span>Best for {eval(`banner.${option}.option`)} rides</span>
        </h1>
      </section>
      <BokkingCart option={option} setOption={setOption}/>
    </section>
  );
};

export default Banner;




