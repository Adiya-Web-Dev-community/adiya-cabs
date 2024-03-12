import React from 'react'
import { useSelector } from 'react-redux'

const DistanceCart = () => {
    const {distance,duration} = useSelector(el => el.bookingSlice.bookingRideData)

  return (
    distance?.trim()&&<div className='h-full w-300px md:w-full pt-4'>
      <ul className={'z-20 bg-white text-center border w-full grid grid-cols-2 md:p-2 p-0 tex-gray-400 text-gray-600 gap-2'}>
        <li><span className='text-md text-blue-900'>DISTANCE</span> <br/></li>
        <li><span className='text-md text-blue-900'>DURATION</span> <br/></li>
        <li><span className='text-md text-blue-900'>{distance}</span> <br/></li>
        <li><span className='text-md text-blue-900'>{duration}</span><br/></li>
      </ul>
    </div>
  )
}

export default DistanceCart
