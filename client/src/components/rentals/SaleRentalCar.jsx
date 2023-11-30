import { useRef } from "react";

import { BiSolidStar } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight,BsArrowDown } from "react-icons/bs";
import { FaCar, FaHandPointRight } from "react-icons/fa";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { collaboratewithus, collaborateData } from '../../configs/collaboratewithus'
import { BsQuote } from 'react-icons/bs'
import { rentalCarsDummy } from "../../configs/AdiyaRental";
import { Button } from "../form/form";
const SaleRentalCar = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    //   font-semibold
    return (
        <>
            <div >

                <h1 className='text-center text-5xl font-montserrat mb-20 text-black/50 '
                >Top Rated Best Selling Vehicle Variants
                </h1>

                <div >
                    <Swiper
                        loop={true}
                        speed={500}
                        slidesPerView={4}
                        initialSlide={0}
                        spaceBetween={20}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                    >
                        {rentalCarsDummy.map((el, i) =>
                            <SwiperSlide key={i} className='h-full' >
                                <div className='  border  flex-col  overflow-hidden  cursor-pointer  rounded-md '>
                                   <div className="h-48">
                                   <div className="h-full" style={{
                                        background: `url(${ el.imgUrl })`,
                                        backgroundSize: 'cover'
                                    }}>

                                    </div>
                                    
                                   </div>
                                    <div className="bg-white text-gray-600   rounded-md mt-[-0.2rem] p-2 grid gap-1" style={{ background: '' }}>
                                        <h2 className="text-lg  text-center font-semibold font-montserrat">

                                            {/* <FaCar className="mx-2" />  */}
                                            
                                               {el.title}</h2>
                                        <p className="flex items-center ">
                                            <FaBuildingCircleArrowRight className="mx-2" />Company Name:- {el.brandName}</p>

                                        <p className="flex"><FaHandPointRight className="mx-2" />Specifications:- {(el.content.specifications.engine + ' ' +
                                            el.content.specifications.transmission + ' ' +
                                            el.content.specifications.seatingCapacity + '').slice(0, 10) + "..."}</p>

                                        <Button  classname={'w-[10rem] m-auto shadow-lg bg-blue-400 border text-white hover:bg-blue-500 text-sm'}>
                                           View More
                                            <BsArrowDown className={`cursor-pointer duration-200 -rotate-90 inline-block`} />
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide >
                        )}


                        {/* <div className="flex items-center justify-center xl:justify-center mt-5 space-x-5">
              <div
                ref={navigationPrevRef}
                className="rounded-full group bg-white hover:bg-slate-100 duration-200 cursor-pointer p-5"
              >
                <BsArrowLeft className="text-xl text-red-500" />
              </div>
              <div
                ref={navigationNextRef}
                className="rounded-full group bg-white hover:bg-slate-100 duration-200 cursor-pointer p-5"
              >
                <BsArrowRight className="text-xl text-red-500" />
              </div>
            </div> */}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default SaleRentalCar;
