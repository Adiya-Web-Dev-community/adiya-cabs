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

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span   class="' +
           className+ '"></span>';
        },
      };

    return (
        <>
           <h1 className='text-center md:text-5xl text-lg font-montserrat text-black/50 '
                >Top Rated Best Selling Vehicle Variants
                </h1>
            <div  className="">

                <div  className="w-full bg-white px-5" >
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
                            <SwiperSlide key={i} className='h-fit' >
                                <div className='border  flex-col  cursor-pointer  rounded-md '>
                                     <div className="w-full p-4 shadow-lg rounded-t-lg border bg-red-500">
                                     <h2  className=' text-xl font-montserrat flex items-center font-semibold  text-white'>
                                     <MdCarRental className="mx-2"/>   Rent {el.title} for Self Drive
                                     
                                        </h2> 
                                     </div>
                                   <div className=" flex  items-center flex-wrap md:flex-nowrap ">
                                 
                                   <div className="p-2 w-full">
                                 
                                    <img src={el.imgUrl} className="sm:w-[400px]"/>
                                    
                                    </div>
                                    <div className=" relative">
                                    <div className="border  bg-white text-red-400 flex flex-col md:flex-row  w-full justify-center items-center mb-2 rounded-md">
                                    <h2 className="text-xl font-montserrat"> Monthly Rent  {el.content.rentalInfo.monthly}</h2>
                                      <h2 className="text-xl font-montserrat ml-4"> Daily Rent {el.content.rentalInfo.dailyRate} </h2>
                                    </div >
                                      <p  className="text-sm font-montserrat text-gray-600 p-2 " >{el.content.description}</p>
                                      <h2 className="text-xl p-2 text-red-800  font-montserrat">
                                            Features
                                        </h2>
                                        <div className="flex  border flex-col md:flex-row md:w-full w-full p-4 ">
                                            {el.content.features.map((el,i)=>{
                                                return   <p className="text-sm flex  font-montserrat  mr-4">
                                                    {el}
                                                </p>
                                            })}
                                        </div>
                                    </div>
                                  
                                    
                                    

                                   </div>

                                   <div className="w-full  flex items-end justify-center p-2">
                                 
                                       <div className="flex  flex-col md:flex-row items-center bg-white  border  shadow-md p-2 rounded-md text-gray-500 w-[fit-content]">
                                      
                                     
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
                                  



                                    
                                </div>
                            </SwiperSlide >
                        )}

                    </Swiper>
                    <div className=" flex rounded-md pt-4 px-2 border">
                      <div className="flex items-center mr-2 " ref={navigationPrevRef} >
                        <FaAngleDoubleLeft size={'25px'} className="text-red-400 hover:text-red-600 cursor-pointer"/>
                        </div>   
                        <div className="hidden" ref={navigationNextRef}></div>
                        <Swiper

              modules={[FreeMode, Navigation, Thumbs,Pagination]}
              pagination={pagination}
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
            className="mySwiper"
            initialSlide={0}
           
            slidesPerView={6}
            breakpoints={{
                320:{
                    slidesPerView: 1,
                },
                426 :{
                    slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 6,
                },
                           }}
            >


                        {rentalCarsDummy.map((el, i) =>
                            <SwiperSlide key={i} className='h-full w-full' >
                                <div   onClick={()=>{setActiveSlide(i)}} className={`border  mb-8  cursor-pointer  rounded-md shadow-md 
                                 ${activeSlide===i?'bg-red-100':'bg-white'}`}>
                                   <div className="h-full w-full">
                                   <div className="h-24" style={{
                                        background: `url(${ el.imgUrl })`,
                                        backgroundSize: 'cover'
                                    }}>

                                    </div>
                                    
                                   </div>


                                    <div className={ ` rounded-md mt-[-0.2rem] p-2 grid grid-cols-1 gap-1
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
