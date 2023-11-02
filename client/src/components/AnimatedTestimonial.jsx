import React, { useState, useEffect, useRef } from 'react';
import { clientTestmonial } from '../configs/clientTestimonial'
import { FaTwitter } from 'react-icons/fa'
import { BiSolidStar } from 'react-icons/bi'

const AnimatedTestimonial = () => {


  const [animationDuration, setAnimationDuration] = useState(15); // Default duration in seconds

 

  return (
    <div className=" p-4 animated-parent h-[30rem] w-full overflow-hidden">
      <div className='grid grid-cols-1 w-[40rem] gap-4 h-[fit-content]' >
        <div  className='h-[fit-content]  animate-text relative grid grid-cols-2   gap-4 ' style={{
          animationDuration: `${ animationDuration }s`,
        }}>
          {clientTestmonial.map((el, i) => {

            const classVal = (i + 1) % 2 === 0 ? 'mt-12' : 'mt-4'


            return <div className={`bg-white  shadow-md rounded-lg overflow-hidden ${ classVal } `}>
              <div className='flex p-2' >
                <img src={el.userImage} alt="User Avatar" className="w-16 h-16 rounded-full bg-gray-200" />
                <div className=' p-2'>
                  <p className="font-semibold text-gray-800">{el.username}</p>
                  <div className="text-xs text-gray-600">{el.heading}</div>
                  <p className="text-gray-600 text-sm">{new Date(el.date).toDateString() + " " + new Date(el.date).toLocaleTimeString()}</p>
                  <p className="flex space-x-1 text-red-400">
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                  </p>
                </div>
              </div>
              <div className="ml-3">
              </div>
              <div className="p-4 ">
                <p className="text-gray-600">
                  {el.comments}
                </p>
              </div>
              <div className="p-4">

              </div>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default AnimatedTestimonial
