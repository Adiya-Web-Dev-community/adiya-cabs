import React from "react";
import {
  experience,
  featAndBanifict,
  cityAvailable,
} from "../../configs/AdiyaRental";
import carviewImg from "../../assets/rentals/Offers/rules.jpg";
import Testimonial from "../utils/Testimonial";
import RVFAQs from "./RVFAQs";
import Subscribe from "./Subscribe";

const Features = () => {
  return (
    <>
      <div className="relative">
        <div className="relative z-[1] md:flex--roe flex-col">
          <h2 className="text-center  text-1xl md:text-5xl text-black/50 font-montserrat ">
            Exclusive Features, and Benefits .
          </h2>
          <p className="text-gray-600 text-md text-center font-montserrat ">
            Discover the Elegance in Our Features and the Luxury in Your
            Benefits.
          </p>

          <div className="lg:flex justify-between items-end">
            <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 py-8 px-8 font-montserrat w-full bg-gray-50  ">
              {featAndBanifict.map((el) => (
                <li className="shadow text-gray-600  m-2 cursor-pointer rounded-lg  duration-200 p-4  bg-white">
                  {el}
                </li>
              ))}
            </ul>
            <div>
              <img src={carviewImg} className="w-[44rem]" />
            </div>
          </div>
        </div>
        {/* <div style={{background:'linear-gradient(45deg,rgba(255, 255, 255, 0.254) 50%, white 50%)'}} 
     className='absolute h-full w-full top-0 left-0 z-[0]'>     
     </div>  */}
      </div>

      <div>
        <h2 className="text-center  text-1xl md:text-5xl text-black/50 font-montserrat mt-8">
          Experience Excellence with AdiyaCab.
        </h2>
      </div>
      {/* after:content:'*' after:h-48 after:w-48 after:absolute after:right-[-5rem] after:top-[-5rem]
    after:bg-red-100 after:rounded-full   hover:after:right-[-4rem] hover:after:top-[-4rem] after:duration-500
     hover:mt-[-1rem] duration-500"  */}
      
      <div className="w-full lg:gap-24 px-4 lg:p-4 gap-4 xl:justify-evenly justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {experience.map((el, index) => (
          <div
            key={index}
            className="border p-2 z-[2] shadow-md relative h-auto md:h-48 max-w-full rounded-xl cursor-pointer overflow-hidden after:content:'*' after:h-48 after:w-50 after:absolute after:right-[-5rem] after:top-[-5rem] after:bg-red-50 after:rounded-full hover:after:right-[-4rem] hover:after:top-[-4rem] after:duration-500 hover:mt-[-1rem] after:z-[0] duration-500"
          >
            <div className="relative z-[5] font-montserrat flex flex-col h-full">
              <h2 className="text-[1.2rem] p-2">{el.title}</h2>
              <p className="p-2">{el.content}</p>
            </div>
          </div>
        ))}
      </div>

      <Subscribe />

      <div>
        <h2 className="text-center  text-1xl md:text-5xl text-black/50 font-montserrat ">
          Cities Where Rentals Service Are Available{" "}
        </h2>
        <div className="w-full grid lg:grid-cols-4  md:grid-cols-3 grid-cols-1  bg-gray-50">
          {cityAvailable.map((el) => (
            <div className="shadow text-gray-600 p-2 m-4 cursor-pointer bg-white rounded-lg hover:shadow-xl duration-200">
              <h4 className="font-montserrat font-bold">{el.cityName}</h4>
              {el.selfDrive ? (
                <p className="font-montserrat  text-md">Self-Drive Available</p>
              ) : (
                ""
              )}
              {el.subscription ? (
                <p className="font-montserrat  text-sm ">
                  Monthly Subscription Available
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
      <RVFAQs />

      <div className="bg-gray-100 p-4 rounded-lg ">
        <h2 className="text-center text-1xl md:text-3xl text-gray-600 font-montserrat font-semibold">
          What customers express about our rental service expertise.
        </h2>
        <div>
          <Testimonial />
        </div>
      </div>
    </>
  );
};

export default Features;
