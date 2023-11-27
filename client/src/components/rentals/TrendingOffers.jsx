import React from 'react'
import charminarImg from'../../assets/rentals/Offers/car.jpg'
import tajMhalImg from'../../assets/rentals/Offers/tajMhal.jpg'

import { trendingOffers } from '../../configs/AdiyaRental'
import { Button } from '../form/form'
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowDown } from "react-icons/bs";
import Card from '../Ui/Card'

const TrendingOffers = () => {
  return (
    <div className='pb-10  relative' >
             <div className=' relative z-[4] px-20 '>
             <h1 className='text-center text-5xl text-black/50    font-montserrat '
             >Trending <sapn className='text-black/50 '>Offers</sapn></h1>
             <div>

            <div>
            <div className='flex justify-evenly mt-8 mx-auto w-[40rem]  '>
                {
                    trendingOffers.buttonName.map((el)=>
                        <Button classname={'w-[10rem] bg-white  rounded-md border text-black hover:text-white hover:bg-red-500'}>{el}</Button>
                    )
                }
             
            </div>
            <div>

            {/* animate-pulse */}
            </div>
                    {/* <div className='shadow h-96 w-80  bg-white rounded-lg group cursor-pointer group box-content mt-8 '>
                      <div className='h-[10rem] ' > 
                            <img src={tajMhalImg} className='w-[20rem] rounded-lg  group-hover:w-[22rem] duration-200 '/>
                      </div>
                      <div className='p-4'>
                        <div className='rounded-md shadow h-60 relative z-[1] bg-white  w-full mt-[-1rem] flex flex-col justify-between p-3 items-center '>
                              <h3 className='text-xl '>Taj Mhal</h3>
                              <p className='p-4'>
                              Taj Mahal bound: Enjoy a 20% discount on your cab ride. Book now for a discounted journey to this iconic destination!
                              </p>
                              <Button classname={'w-[10rem] shadow-lg bg-blue-400 border text-white hover:bg-blue-500 '}>
                                Book Now
                                <BsArrowDown className={`cursor-pointer duration-200 -rotate-90 inline-block`} />
                                </Button>
                        </div>
                      </div>
                    </div> */}
                    <Card imgurl={tajMhalImg} content={
                      `Taj Mahal bound: Enjoy a 20% discount on your cab ride. 
                      Book now for a discounted journey to this iconic destination!`
                    }
                    title={'Taj Mhal'}
                    />
                    
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
