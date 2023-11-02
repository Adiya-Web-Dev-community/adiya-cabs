import { useRef } from "react";

import { BiSolidStar } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {collaboratewithus,collaborateData} from '../configs/collaboratewithus'
import {BsQuote} from 'react-icons/bs'

const Testimonial = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <section className=" flex items-center justify-center mt-4">

          <div    className="w-4/5">
          <Swiper
            loop={true}
            speed={500}
            slidesPerView={1}
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
             {collaborateData.map((el,i)=>
             <SwiperSlide key={i} className='h-full' >
                                  <div className='h-full w-full  py-2'>                 
                                  <div className="bg-white p-4  rounded-lg  border min-h-[20rem]">
                                      <div >
                                         <div className='flex' >
                                          <img src={el.userImage} alt="User Avatar"  className="w-16 h-16 rounded-full bg-gray-200"  />
                                          <div className=' pl-2'>
                                                  <p className="font-semibold text-gray-800">{el.username}</p>
                                                  <p className="text-gray-600 text-sm">{new Date(el.date).toDateString() +" "+ new Date(el.date).toLocaleTimeString()}</p>
                                                  <p className="flex space-x-1 text-red-400">
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                      </p>
                                         </div>
                                          </div>
                                          <div >                                 
                                              
                                              <p className="mt-2 text-gray-700 flex">
                                                <span><BsQuote size={40}/></span>
                                                <span className='mt-2'>{el.comments}
                                                </span>
                                               </p>
                                          </div>
                                      </div>
                                  </div>
                      </div> 
                      </SwiperSlide >                      
                )}


            <div className="flex items-center justify-center xl:justify-center mt-5 space-x-5">
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
            </div>
          </Swiper>
          </div>
      </section>
    </>
  );
};

export default Testimonial;
