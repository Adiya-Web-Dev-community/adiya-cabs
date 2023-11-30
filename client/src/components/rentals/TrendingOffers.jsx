import React,{useState,useRef} from 'react'
import charminarImg from'../../assets/rentals/Offers/car.jpg'
import tajMhalImg from'../../assets/rentals/Offers/tajMhal.jpg'

import { trendingOffers } from '../../configs/AdiyaRental'
import { Button } from '../form/form'
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowDown } from "react-icons/bs";
import Card from '../Ui/Card'
import { Navigation } from "swiper/modules";

const TrendingOffers = () => {
  
  const [selected,setSelected] = useState(trendingOffers.buttonName[0])
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  //   font-semibold

  return (
    <div className=' relative' >
             <div className=' relative z-[4] px-20 '>
             <h1 className='text-center text-5xl text-black/50    font-montserrat '
             >Trending <sapn className='text-black/50 '>Offers</sapn></h1>
             <div>

            <div>
            <div className='flex justify-evenly mt-8 mx-auto w-[40rem]  '>
                {
                    trendingOffers.buttonName.map((el)=>
                        <Button 
                        onClick={()=>setSelected(el)}
                        classname={selected!==el?
                          'w-[10rem] bg-white  rounded-md border text-black hover:text-white hover:bg-red-500'
                        :'bg-red-500 text-white w-[10rem]'
                        }
                        
                        >{el}</Button>
                    )
                }
             
            </div>
            <div className='mt-12'>

                    <Swiper
                    className='overflow-y-visible'
                        loop={true}
                        speed={500}
                        slidesPerView={3}
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
                        {trendingOffers[selected].map((el, i) =>
            
<SwiperSlide key={i} className='h-full overflow-visible' >
                              
<Card imgurl={tajMhalImg} content={
              `Taj Mahal bound: Enjoy a 20% discount on your cab ride. 
              Book now for a discounted journey to this iconic destination!`
            }
            title={'Taj Mhal'}
            />
</SwiperSlide>
                        )}

                    </Swiper>
                 
                    
            </div>
            </div>

             </div>
            </div>       

     <div style={{background:'linear-gradient(45deg,rgba(255, 255, 255, 0.754) 50%, white 50%)'}} 
     className='absolute h-full w-full top-0 left-0 z-[0]'>     
     </div> 
    </div>
  )
}

export default TrendingOffers
