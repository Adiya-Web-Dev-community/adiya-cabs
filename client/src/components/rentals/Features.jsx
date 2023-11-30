import React from 'react'
import { experience, featAndBanifict,cityAvailable } from '../../configs/AdiyaRental'
import carviewImg from'../../assets/rentals/Offers/carview.png'
import Testimonial from '../utils/Testimonial'
import RVFAQs from './RVFAQs'


const Features = () => {
  return (
    <>
    <div className='relative ' >

       <div className='relative z-[1] '>
           <h2  className='text-center text-5xl text-black/50 font-montserrat '>Exclusive Features, and Benefits .</h2>
           <p className='text-gray-600 text-md text-center font-montserrat '>Discover the Elegance in Our Features and the Luxury in Your Benefits.</p>

   <div className='flex justify-between items-end'>
      <ul className='grid grid-cols-2 gap-8 py-8 font-montserrat w-[55rem]  '>
       {featAndBanifict.map((el)=>
         <li className=
         'p-4 rounded-md bg-white  cursor-pointer hover:shadow-md duration-300  border
          hover:mt-[-1px] 
         '>{el}</li>
        )}
     </ul>
     <div>
      <img src={carviewImg} className='h-80 w-80'/>
     </div>
   </div>

   


     </div>
     <div style={{background:'linear-gradient(45deg,rgba(255, 255, 255, 0.254) 50%, white 50%)'}} 
     className='absolute h-full w-full top-0 left-0 z-[0]'>     
     </div> 
    </div>


    <div >
    <h2  className='text-center text-5xl text-black/50 font-montserrat mt-8'>Experience Excellence with AdiyaCab.</h2>
    </div>
    {/* after:content:'*' after:h-48 after:w-48 after:absolute after:right-[-5rem] after:top-[-5rem]
    after:bg-red-100 after:rounded-full   hover:after:right-[-4rem] hover:after:top-[-4rem] after:duration-500
     hover:mt-[-1rem] duration-500"  */}
    <div className='w-full h-80 p-12 flex justify-evenly text-center'>
      {experience.map((el)=>
          <div className="border p-4  z-[2] shadow-md relative h-48 w-[22rem] rounded-xl cursor-pointer overflow-hidden 
          after:content:'*' after:h-48 after:w-48 after:absolute after:right-[-5rem] after:top-[-5rem]
          after:bg-red-50 after:rounded-full   hover:after:right-[-4rem] hover:after:top-[-4rem] after:duration-500
           hover:mt-[-1rem] after:z-[0] duration-500"  
         >
       <div className='relative z-[6]  font-montserrat flex flex-col justify-between' >
            <h2 className='text-[1.2rem] p-2'>{el.title}</h2>
           <p className='p-2'>{el.content}</p>
          </div>
        </div>
      )}   
    </div>

    <div>
         <h2  className='text-center text-5xl text-black/50 font-montserrat '>Cities Where Rentals Service Are Available </h2>
         <div className=' p-4 w-full grid grid-cols-4  bg-gray-50'>
         {
          cityAvailable.map((el)=>
          <div className='shadow text-gray-600 p-2 m-2 cursor-pointer bg-white rounded-lg hover:shadow-xl duration-200'>
            <h4 className='font-montserrat font-bold'>{el.cityName}</h4>
            {el.selfDrive?<p className='font-montserrat  text-md'>Self-Drive Available</p>:''}
            {el.subscription?<p className='font-montserrat  text-sm '>Monthly Subscription Available</p>:''}

          </div>
          )
         }
         </div>
    </div>
    <RVFAQs/> 

    <div className='bg-gray-100 p-4 rounded-lg '>
    <h2  className='text-center text-3xl text-gray-600 font-montserrat font-semibold'>
 What customers express about our rental service expertise.
       </h2>
       <div>
     <Testimonial/>

       </div>
    </div>
    </>
  )
}

export default Features


