import React,{useState} from 'react'
import { rentalVehicleFAQs } from '../../configs/AdiyaRental'
import mobileSms from '../../assets/rentals/Offers/sms.png'
import { Button } from '../form/form'
import { BsChevronDown } from 'react-icons/bs'
const RVFAQs = () => {
    const [activeFAQ,setActiveFaq] = useState('')
  return (
    <div className='my-20'>
           <h2 className='mt-8 font-semibold font-montserrat text-4xl text-gray-600'>FAQs of Our clients</h2>
           <p className='mb-8 font-montserrat text-md'>Frequently Asked Questions Of Our Client's</p>
           <Button classname={'w-[10rem] m-auto shadow-lg bg-blue-400 border text-white hover:bg-blue-500 text-sm'} >View All</Button>

        <div className='flex justify-between'>
        <div className='h-96 w-96 mx-20'>
         <img src={mobileSms} />
        </div>

        <ul className='x-12 w-[40rem]'>
        {rentalVehicleFAQs.map((el)=>
             <li className='duration-200'>       
                <h3 onClick={()=>setActiveFaq(prev=>prev=== el.question?'':el.question)} 
                className='text-lg text-gray-600 mt-4 mb-1 shadow-md p-3 rounded-md border 
                cursor-pointer flex justify-between duration-200 font-semibold  font-montserrat'>{el.question}
                < BsChevronDown className={`${activeFAQ=== el.question?'-rotate-180':''} duration-200`}/>
                </h3> 
                {activeFAQ===el.question?<p className='  duration-200 p-2 text-md text-gray-500 shadow'>"{el.answer}</p>:''}
            </li>
        )}
        </ul>
        </div>
    </div>
  )
}

export default RVFAQs
