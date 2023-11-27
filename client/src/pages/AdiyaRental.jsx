import React from 'react'
import RentalsSubscription from '../components/rentals/RentalsSubscription'
import rentalImg from '../assets/rentals/frontPage/rental-image.png'

const AdiyaRental = () => {
  return (
    <main className='h-screen w-full relative  mb pt-6 bg-gray-50 flex items-center  p-14 z-0 '>
       <RentalsSubscription/>
       <img src={rentalImg} className='w-[45rem] absolute right-0 top-0 '/>
    </main>
  )
}

export default AdiyaRental
