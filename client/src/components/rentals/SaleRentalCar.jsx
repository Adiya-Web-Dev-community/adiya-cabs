import { useRef ,useState} from "react";

import { BiSolidStar } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight,BsArrowDown } from "react-icons/bs";
import { FaCar, FaHandPointRight } from "react-icons/fa";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { collaboratewithus, collaborateData } from '../../configs/collaboratewithus'
import { BsQuote,BsFillFuelPumpFill } from 'react-icons/bs'
import { rentalCarsDummy } from "../../configs/AdiyaRental";
import { Button } from "../form/form";
import { MdCarRental,MdEventSeat } from "react-icons/md";
import { GiCarSeat } from "react-icons/gi";
import { SlBag, } from "react-icons/sl";
import {SiCoronaengine}from 'react-icons/si'
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FreeMode, Navigation, Thumbs,Pagination } from 'swiper/modules';
const SaleRentalCar = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    //   font-semibold
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    const [activeSlide,setActiveSlide] = useState(0)

    return (
        <>
           <h1 className='text-center text-5xl font-montserrat mb-20 text-black/50 '
                >Top Rated Best Selling Vehicle Variants
                </h1>
            <div  className="p-5 ">

                <div  className="w-[75rem] bg-white mx-auto" >
                <Swiper
                        thumbs={{ swiper: thumbsSwiper }}
                        loop={true}
                        speed={500}
                        slidesPerView={1}
                        initialSlide={0}
                        spaceBetween={20}
                        modules={[FreeMode, Navigation, Thumbs]}
                        onSlideChange={(e)=>{
                            console.log(e)
                            setActiveSlide(e.realIndex)
                        }}
                    >  
                        {rentalCarsDummy.map((el, i) =>
                            <SwiperSlide key={i} className='h-full mb-2' >
                                <div className='  border  flex-col  overflow-hidden  cursor-pointer  rounded-md '>
                                     <div className="w-full p-4 shadow-lg rounded-t-lg border bg-red-500">
                                     <h2  className=' text-xl font-montserrat flex items-center font-semibold  text-white'>
                                     <MdCarRental className="mx-2"/>   Rent {el.title} for Self Drive
                                     
                                        </h2> 
                                     </div>
                                   <div className="h-[17rem] flex  items-center  ">
                                 
                                   <div className="p-2 w-2/5">
                                 
                                    <img src={el.imgUrl} className="w-full"/>
                                    
                                    </div>
                                    <div className="p-2 relative h-full w-3/5">
                                    <div className="border p-2 bg-white text-red-400 flex w-[fit-content] mb-2 rounded-md">
                                    <h2 className="text-xl font-montserrat"> Monthly Rent  {el.content.rentalInfo.monthly}</h2>
                                      <h2 className="text-xl font-montserrat ml-4"> Daily Rent {el.content.rentalInfo.dailyRate} </h2>
                                    </div >
                                      <p  className="text-sm font-montserrat text-gray-600 p-2 " >{el.content.description}</p>
                                      <h2 className="text-xl p-2 text-red-800  font-montserrat">
                                            Features
                                        </h2>
                                        <div className="flex  border p-2 w-[fit-content]">
                                            {el.content.features.map((el,i)=>{
                                                return   <p className="text-sm flex  font-montserrat  mr-4">
                                                    {el}
                                                </p>
                                            })}
                                        </div>
                                    </div>
                                  
                                    
                                    

                                   </div>

                                   <div className="w-full  flex items-end  p-2 ">
                                 
                                       <div className="flex items-center bg-white   border  shadow-md p-2 rounded-md text-gray-500 w-[fit-content]">
                                      
                                     
                                        <p className="text-md flex">
                                        <BsFillFuelPumpFill size={'20px'} className="ml-6 mr-2 text-red-600 "/> 
                                            {el.fuellType}
                                        </p>

                                          
                                        <p className="text-md flex">
                                        <GiCarSeat size={'20px'} className="ml-6 mr-2 text-red-600 "/> 
                                        {el.content.specifications.transmission}
                                        </p>

                                        <p className="text-md flex">
                                        <MdEventSeat size={'20px'} className="ml-6 mr-2 text-red-600 "/> 
                                        {el.content.specifications.seatingCapacity} Seater
                                        </p>
                                        
                                        <p className="text-md flex">
                                        <SlBag size={'20px'} className="ml-6 mr-2 text-red-600 "/> 
                                        {el.content.specifications.seatingCapacity}
                                        </p>

                                        <p className="text-md flex">
                                        <SiCoronaengine size={'20px'} className="ml-6 mr-2 text-red-600 "/> 
                                        {el.content.specifications.engine} Engine
                                        </p>
                                       </div>
                                       
                                    </div>
                                  

{/* 
                                    <div className="bg-white text-gray-600   rounded-md mt-[-0.2rem] p-2 grid gap-1" style={{ background: '' }}>
                                        <h2 className="text-lg  text-center font-semibold font-montserrat">

                                            
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
                                    </div> */}


                                    
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
                    <div className=" flex  rounded-md pt-4 px-2 border">
                      <div className="flex items-center mr-2 " ref={navigationPrevRef} >
                        <FaAngleDoubleLeft size={'25px'} className="text-red-400 hover:text-red-600 cursor-pointer"/>
                        </div>   
                        <div className="hidden" ref={navigationNextRef}></div>
                        <Swiper
              modules={[FreeMode, Navigation, Thumbs,Pagination]}
              pagination={{ clickable: true }}
              speed={400}
              spaceBetween={6}
              onSwiper={(swiper) => console.log(swiper)}
      
              loop={true}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}

            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            
            onSwiper={setThumbsSwiper}
            freeMode={true}
            watchSlidesProgress={true}
            className="mySwiper "
            initialSlide={0}
           
            slidesPerView={6}
            breakpoints={{
                768: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 6,
                },
                           }}
            >


                        {rentalCarsDummy.map((el, i) =>
                            <SwiperSlide key={i} className='h-full ' >
                                <div   onClick={()=>{setActiveSlide(i)}} className={`border  mb-5 flex-col  overflow-hidden  cursor-pointer  rounded-md shadow-md 
                                 ${activeSlide===i?'bg-red-100':'bg-white'}`}>
                                   <div className="h-24">
                                   <div className="h-full" style={{
                                        background: `url(${ el.imgUrl })`,
                                        backgroundSize: 'cover'
                                    }}>

                                    </div>
                                    
                                   </div>


                                    <div className={ ` rounded-md mt-[-0.2rem] p-2 grid gap-1
                                    ${activeSlide===i?'bg-red-600 text-white':'bg-white text-gray-600'}`
                                    } style={{ background: '' }}>
                                        <p className="text-sm  text-center font-semibold font-montserrat ">

                                            
                                               {el.title}</p>
                                    </div>


                                    
                                </div>
                            </SwiperSlide >
                        )}


                    </Swiper>
                 
                    <div className="flex items-center ml-2" onClick={()=>{navigationNextRef.current.click()}} >
                         <FaAngleDoubleLeft size={'25px'}
                         className="-rotate-180 text-red-400 hover:text-red-600 cursor-pointer"
                         />
                        </div> 
                    </div>
        
    
                </div>
            </div>
        </>
    );
};

export default SaleRentalCar;
