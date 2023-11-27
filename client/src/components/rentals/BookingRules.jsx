import React from 'react'
import rulesImg from'../../assets/rentals/Offers/rules.jpg'
import carImg from'../../assets/rentals/Offers/car.png'
import calenderIcon  from'../../assets/rentals/Offers/schedule.png'
import carCollection  from'../../assets/rentals/Offers/car-collection.png'
import needAssessmentImg  from'../../assets/rentals/Offers/need-assessment.png'
import mailImg  from'../../assets/rentals/Offers/check-mail.png'





const BookingRules = () => {
  return (
    <div className=' bg-white mt-4'>
        <h2  className='text-center text-5xl text-black/50 font-montserrat '>How To Reserve a Car Online </h2>
        <p className='text-gray-600 text-md text-center font-montserrat '>Reserve a car online in India through AdiyaCab with these four easy steps:</p>
      
      <div className=' h-[fit-content] mx-auto flex justify-center mt-5' >
        <div className='w-[30rem]  '>
            <img src={rulesImg}/>

        </div>
         <ul className='text-gray-800 text-md text-start font-montserrat p-4 w-[40rem]'>
     

            <div className="border-[10px] p-2 flex  h-24 w-full  border-r-transparent rounded-3xl bg-white rounded-r-none relative z-[1] border-blue-300
            after:content:'*' after:w-[140px] after:absolute after:border-[10px] after:right-[-10px] after:top-[-15px] after:rounded-full
            ">
            
            <img src={calenderIcon} className='w-12 h-12 inline-block' />          

            <p className='px-2'>Select your preferred dates and times for pickup and drop-off.</p>  
            <img src={carImg} className='absolute top-[-135%] right-0'/>          
            
            </div>
            <div className='border-[10px] flex p-2 pt-1  h-24 w-full border-l-transparent rounded-3xl  rounded-l-none mt-[-14.5px] ml-[2px] border-blue-300'>
            <p>Browse through available car options and choose the one that suits your needs</p>
            <img src={carCollection} className='w-12 h-12 inline-block' />          
            </div>
            <div className='border-[10px] flex  p-2 h-24 w-full border-r-transparent rounded-3xl bg-white rounded-r-none mt-[-14.5px] border-blue-300 relative z-[1]'>
            <img src={needAssessmentImg} className='w-12 h-12 inline-block' />          
            <p>Fill in the necessary personal and payment details.</p>
            </div>
            <div className="border-[10px] relative flex p-2  h-24 w-full border-l-transparent rounded-3xl  ml-[2px]
            rounded-l-none mt-[-14.5px] border-blue-300 after:content:'*' after:absolute after:border-[10px] after:left-[-10px] after:top-[94%] after:rounded-full">
            <p>Confirm your booking and receive a confirmation email with the reservation details.</p>
            <img src={mailImg} className='w-12 h-12 inline-block'/>
            </div>
         </ul>
    </div>   
    </div>
  )
}

export default BookingRules
