import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LocationPicker from './LocationPicker';


import DatePicker from './DatePicker';
const RentalsSubscription = () => {

const obj = {
  calender1:{ time:new Date().toLocaleTimeString(),date:new Date()},
  calender2:{time:new Date().toLocaleTimeString(),date:new Date().setDate(new Date().getDate()+15)}
}  


const [active,setActive] = useState('') 
const [typeOfSubscription,setSubscription] = useState('daily')
const [dateObj,setDateObj] = useState(obj.calender1)
const [dateObj2,setDateObj2] = useState(obj.calender2)


const handlePickupDate = (value)=>{
  setActive(prev=>prev===value?'':value)
}

const handleSubsCriptionType = (type)=>{
  setSubscription(type)
  setActive('')
  setDateObj(obj.calender1)
  setDateObj2(obj.calender2)
}


  return (
    <section className=' w-[47rem] p-4 self-start   mt-16  ' >
      <div className='bg-white'>
      <nav className='inline-block  '>
       <button onClick={()=>handleSubsCriptionType('daily')} className={`p-3 px-8  
        text-md rounded-tl-xl border border-r-0 ${typeOfSubscription==='daily'?'bg-red-500 text-white':'hover:bg-red-50'} `}>
          Daily Rentals</button>
       <button onClick={()=>handleSubsCriptionType('monthly')} className={`p-3 px-8  text-md  rounded-tr-xl border 
       border-l-0 bg-gray-100   duration-200 ${typeOfSubscription==='monthly'?'bg-red-500 text-white':'hover:bg-red-50'} `}>Monthly Subscription</button>
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
          <h2 className='text-lg flex p-0 text-gray-600 '> Pick-Up Date <MdOutlineKeyboardArrowDown className={`cursor-pointer duration-200 mx-2 mt-1 ${active==='Pick-Up Date'?'-rotate-180':''}`}/></h2>
          <p className='text-sm text-gray-400 font-montserrat'>{new Date(dateObj.date).toDateString()}<br/> {dateObj.time}</p>
        </div>
        <div className={`p-3 ${typeOfSubscription==='monthly'?'hidden':''}  w-44 mx-2 rounded-lg cursor-pointer border  hover:border-gray-300
        ${active==='Return Date'?'border-gray-300':'border-transparent'}
        `}
        onClick={()=>handlePickupDate('Return Date')}
        >
          <h2 className='text-lg flex p-0 text-gray-600'> Return Date <MdOutlineKeyboardArrowDown className={`cursor-pointer duration-200 mx-2 mt-1 ${active==='Return Date'?'-rotate-180':''}`}/></h2>
          <p className='text-sm text-gray-400 font-montserrat'>{new Date(dateObj2.date).toDateString()}<br/> {dateObj2.time}</p>
        </div>
        </div>

        <div className='h-[inherit] flex py-2 items-center  p-4 '>
          <button className='bg-red-500 p-[6px] px-8 text-md text-white rounded-[40px]  cursor-pointer'>Search</button>
        </div>

        <div className={`w-full shadow-lg  mt-5 px-8 py-3 absolute z-[2] top-full left-0 bg-white ${active==='Location'?'block':'hidden'}`}>
        <LocationPicker/>
        </div>
      <div className={`w-full shadow-lg  mt-5 px-3  absolute z-[2] top-full left-0 bg-white ${active==='Pick-Up Date'?'block':'hidden'}`}>
      <DatePicker name={'Pickup'} getDate={setDateObj} dateObj={dateObj} endTo={typeOfSubscription==='daily'?dateObj2.date:false}/>
      </div>
      <div className={`w-full shadow-lg  mt-5 px-3  absolute z-[2] top-full left-0 bg-white ${active==='Return Date'?'block':'hidden'}`}>
      <DatePicker name={'Return'} getDate={setDateObj2} dateObj={dateObj2} startTo={dateObj.date} />
      </div>


      </div>

      <h2 className='text-5xl text-gray-600 mt-14 pr-12 font-semibold  font-montserrat '>
      Our vehicles are meticulously maintained to guarantee a  comfortable journey, 
      </h2>
      <p className='text-xl mt-6 text-gray-400 font-montserrat'>
      Book your rental vehicle  for a seamless travel experience!
      </p>
      </div>
    
      
    </section>
  );
};


export default RentalsSubscription
