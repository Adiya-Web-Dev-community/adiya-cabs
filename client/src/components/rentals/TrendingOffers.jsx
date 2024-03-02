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
 <div className='relative'>
    <div className='relative z-4 px-2'>
    <h1 className='text-center text-1xl md:text-5xl text-black/50 font-montserrat'>
        Trending <span className='text-black/50'>Offers</span>
    </h1>
    <div>
        <div className='flex flex-col mt-3 md:gap-3 '>
            {trendingOffers.buttonName.map((el) => (
                <Button
                    key={el}
                    onClick={() => setSelected(el)}
                    className={`w-full md:w-[10rem] rounded-md border-4 text-black hover:text-white hover:bg-red-500 justify-center ${
                        selected !== el ? 'bg-white' : 'bg-red-500 text-white'
                    }`}
                >
                    {el}
                </Button>
            ))}
        </div>
        <div className='mt-12'>
            <Swiper
                className=" flex flex-wrap justify-evenly"
                loop={true}
                speed={500}
                slidesPerView={1}
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
              <div className='grid grid-cols-1 gap-3 p-1 md:grid-cols-3 justify-evenly lg:gap-26 xl:justify-between'>
                {trendingOffers[selected].map((el, i) => (
                    <div key={i} className='h-full overflow-visible'>
                        <Card
                            imgurl={tajMhalImg}
                            content={`Taj Mahal bound: Enjoy a 20% discount on your cab ride. Book now for a discounted journey to this iconic destination!`}
                            title={'Taj Mahal'}
                        />
                    </div>
                ))}
                </div>   
            </Swiper>
        </div>
    </div>
</div>

<div style={{ background: 'linear-gradient(45deg,rgba(255, 255, 255, 0.754) 50%, white 50%)' }} className='absolute text-1xl w-full top-0 left-0  z-0'></div>
</div>

  )
}

export default TrendingOffers
