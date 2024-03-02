import React,{useState} from 'react'
import imgmailUrl from '../../assets/rentals/Offers/subscribe-dr-varshali-gynecology-clinic-community.svg'
import { Button } from '../form/form'

const Subscribe = () => {
    const [activeFAQ,setActiveFaq] = useState('')
  return (
    <div className='mt-6 mb-20 p-4  rounded-lg bg-gray-100'>

        <div className=' rounded-lg bg-white flex justify-between flex-wrap md:flex-nowrap'>

           <div className='p-2  w-[38rem] rounded-[7rem] ml-8' >
           <img src={imgmailUrl} />
           </div>
             <div className='p-2 w-[28rem]  self-center   m-2 '>
                      <h2  className='text-center text-3xl text-gray-600 font-montserrat font-semibold w-full my-4' >
                      Subscribe to get lattest offer & Stay Updated
                      </h2>

                <input className='border border-gray-500 py-3 px-4 w-full outline-none rounded-3xl' placeholder='Enter your email address'/>
                <Button classname='w-16 mx-auto block py-3 bg-red-500 text-white rounded-3xl my-8'> Subscribe</Button>
             </div>
        </div>
    </div>
  )
}

export default Subscribe
