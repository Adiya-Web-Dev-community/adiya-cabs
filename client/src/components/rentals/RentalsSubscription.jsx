import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import delhiImg from'../../assets/rentals/frontPageLoaction/india-gate.png'
import bengaluruImg from'../../assets/rentals/frontPageLoaction/bangalore.png'
import mumbaiImg from'../../assets/rentals/frontPageLoaction/mumbai.png'
import PuneImg from'../../assets/rentals/frontPageLoaction/Pune.png'
import jaipurImg from'../../assets/rentals/frontPageLoaction/jaipur.png'
import charminarImg from'../../assets/rentals/frontPageLoaction/charminar.png'


import DatePicker from './DatePicker';
const RentalsSubscription = () => {

const [active,setActive] = useState('') 
const [dateObj,setDateObj] = useState({
   time:new Date().toLocaleTimeString(),
   date:new Date()
})
const [dateObj2,setDateObj2] = useState({
  time:new Date().toLocaleTimeString(),
  date:new Date().setDate(new Date().getDate()+15)
})

const famusCity = [
  {
    icon:delhiImg,
    cityName:'Delhi'
  },
  {
    icon:bengaluruImg,
    cityName:'Bengaluru'
  },
  {
    icon:mumbaiImg,
    cityName:'Mumbai'
  },
  {
    icon:PuneImg,
    cityName:'Pune'
  },
  {
    icon:jaipurImg,
    cityName:'Jaipur'
  },
  {
    icon:charminarImg,
    cityName:'Hyderabad'
  }
]

const handlePickupDate = (value)=>{
  setActive(prev=>prev===value?'':value)
}

  return (
    <section className=' w-[47rem] p-4 self-start   mt-16  ' >
      <div className='bg-white'>
      <nav className='inline-block  '>
       <button className='p-3 px-8 text-white bg-red-500 text-md rounded-tl-xl border border-r-0 border-red-500 '>Daily Rentals</button>
       <button className='p-3 px-8  text-md  rounded-tr-xl border border-l-0 bg-gray-100'>Monthly Subscription</button>
      </nav>
      <div className='w-full shadow-lg flex justify-between relative'>
        <div className='flex py-2 text-start font-semibold  '>
        <div className={`p-3  w-44 mx-2 rounded-lg cursor-pointer border  hover:border-gray-300
        ${active==='Location'?'border-gray-300':'border-transparent'}
        `}
        onClick={()=>handlePickupDate('Location')}
        >
          <h2 className='text-lg flex p-0 text-gray-600'> Location <MdOutlineKeyboardArrowDown className={`cursor-pointer duration-200 mx-2 mt-1 ${active==='Location'?'-rotate-180':''}`} /></h2>
          <p className='text-sm text-gray-400'> Add City</p>
        </div>
        <div className={`p-3  w-44 mx-2 rounded-lg cursor-pointer border  hover:border-gray-300
        ${active==='Pick-Up Date'?'border-gray-300':'border-transparent'}
        `}
        onClick={()=>handlePickupDate('Pick-Up Date')}
        >
          <h2 className='text-lg flex p-0 text-gray-600'> Pick-Up Date <MdOutlineKeyboardArrowDown className={`cursor-pointer duration-200 mx-2 mt-1 ${active==='Pick-Up Date'?'-rotate-180':''}`}/></h2>
          <p className='text-sm text-gray-400'>{new Date(dateObj.date).toDateString()}<br/> {dateObj.time}</p>
        </div>
        <div className={`p-3  w-44 mx-2 rounded-lg cursor-pointer border  hover:border-gray-300
        ${active==='Return Date'?'border-gray-300':'border-transparent'}
        `}
        onClick={()=>handlePickupDate('Return Date')}
        >
          <h2 className='text-lg flex p-0 text-gray-600'> Return Date <MdOutlineKeyboardArrowDown className={`cursor-pointer duration-200 mx-2 mt-1 ${active==='Return Date'?'-rotate-180':''}`}/></h2>
          <p className='text-sm text-gray-400'>{new Date(dateObj2.date).toDateString()}<br/> {dateObj2.time}</p>
        </div>
        </div>

        <div className='h-[inherit] flex py-2 items-center  p-4 '>
          <button className='bg-red-500 p-[6px] px-8 text-md text-white rounded-[40px]'>Search</button>
        </div>

        <div className={`w-full shadow-lg  mt-5 px-8 py-3 absolute z-[2] top-full left-0 bg-white ${active==='Location'?'block':'hidden'}`}>
        <h2 className='mt-2 mb-4 font-semibold text-gray-600'>Popular Cities</h2>
        <div className='flex justify-evenly'>
          
       {
        famusCity.map((el)=>
         <div>
           <div className='h-20 w-20 relative p-2 shadow'>
            <img src={el.icon} className='w-100 h-100 object-cover '/>
            <div className='w-full h-full absolute top-0 left-0 bg-black/5 cursor-pointer'></div>
           </div>
           <div className='text-center text-gray-600'>{el.cityName}</div>
         </div>
        )
       }
        </div>

      </div>
      <div className={`w-full shadow-lg  mt-5 px-3  absolute z-[2] top-full left-0 bg-white ${active==='Pick-Up Date'?'block':'hidden'}`}>
      <DatePicker name={'Pickup'} getDate={setDateObj} dateObj={dateObj} endTo={dateObj2.date}/>
      </div>
      <div className={`w-full shadow-lg  mt-5 px-3  absolute z-[2] top-full left-0 bg-white ${active==='Return Date'?'block':'hidden'}`}>
      <DatePicker name={'Return'} getDate={setDateObj2} dateObj={dateObj2} startTo={dateObj.date} />
      </div>


      </div>

      <h2 className='text-4xl text-gray-600 mt-14 pr-12 font-semibold'>
      Our vehicles are meticulously maintained to guarantee a  comfortable journey, 
      </h2>
      <p className='text-xl mt-6 text-gray-400'>
      Book your rental vehicle  for a seamless travel experience!
      </p>
      </div>
    
      
    </section>
  );
};


export default RentalsSubscription
