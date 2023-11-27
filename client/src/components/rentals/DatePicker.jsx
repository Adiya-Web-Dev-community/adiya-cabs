import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsChevronDown, BsArrowDown } from "react-icons/bs";

const DatePicker = ({ name,getDate,dateObj,endTo,startTo }) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [dateArr, setDateArr] = useState([])
  const currentDate = new Date()
  const [calenderMY, setCalenderMy] = useState({
    month: new Date((dateObj?.date||currentDate)).getMonth(),
    year: new Date((dateObj?.date||currentDate)).getFullYear(),
    date:new Date((dateObj?.date||currentDate)).getDate()
  })
  const [activeYear, steActiveYear] = useState(false)
  const timeArr = (dateObj?.time?.split(':')||[])
  const [time, setTime] = useState({
    hours:(timeArr[0]||''),
    minutes:(timeArr[1]||''),
    timeStage:(timeArr[2]?.replace(/[0-9]/g, '').trim()||''),
  })

  function getDaysInMonth(month, year) {
    const week = new Array(new Date(year, month, 1).getDay())

    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return [...week, ...days];
  }

  function formatAMPM(timeobj={hours:''}) {
    const date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    if(timeobj.hours){
      setTime(timeobj)
    }else{
    setTime({
      hours,
      minutes,
      timeStage: ampm
    })
  } 
  }


  useEffect(() => {
    setDateArr(getDaysInMonth(calenderMY.month, calenderMY.year))
  }, [calenderMY.month, calenderMY.year])

  
  useEffect(() => {
    if(dateObj?.time){
      const timeArr = dateObj.time.split(':')
      formatAMPM({
        hours:+timeArr[0],
        minutes:+timeArr[1],
        timeStage:timeArr[2].replace(/[0-9]/g, '').trim(),
      })
    }else{
      // formatAMPM()
    }
  }, [dateObj?.time])

  const handelCalenderDate = (num) => {
    setCalenderMy(prev => {
      if (prev.month + num >= 0 && prev.month + num <= 11) {
        return { ...prev, month: prev.month + num }
      } else {
        const month = prev.month + num < 0 ? 11 : 0
        return { ...prev, year: prev.year + num, month }
      }
    })
  }

  const hnadleYear = (year) => {
    setCalenderMy(prev => ({ ...prev, year }))
    steActiveYear(false)
  }


  const handelCalenderTime = (num, type) => {

    const toGetTimeStage = (num, time, timeStage) => {
      if (num === 1) {
        return num + time === 12 ? (timeStage === 'AM' ? 'PM' : 'AM') : timeStage
      } else if (num === -1) {
        return num + time === 11 ? (timeStage === 'AM' ? 'PM' : 'AM') : timeStage
      }
    }
    setTime(prev => {
      const hoursValid = (prev.hours + num >= 1 && prev.hours + num <= 11)
      const minutesVal = (prev.minutes + num >= 0 && prev.minutes + num <= 59)
      if (hoursValid && type === 'hours') {
        return { ...prev, hours: prev.hours + num, timeStage: toGetTimeStage(num, prev.hours, prev.timeStage) }
      } else if (type === 'hours') {
        const hours = prev.hours === 12 ? 1 : 12
        return { ...prev, hours, timeStage: toGetTimeStage(num, prev.hours, prev.timeStage) }
      }
      if (minutesVal && type === 'minutes') {
        return { ...prev, minutes: prev.minutes + num }
      } else if (type === 'minutes') {
        const minutes = prev.minutes + num <= 0 ? 59 : 0
        const hours = (prev.hours + num <= 12) ? (prev.hours + num === 0 ? 12 : prev.hours + num) : 1
        return { ...prev, minutes, hours, timeStage: toGetTimeStage(num, prev.hours, prev.timeStage) }
      }
    })
  }

  const handleTimeStage = ()=>{
    setTime((prev)=>({...prev,timeStage:prev.timeStage === 'AM' ? 'PM' : 'AM'}))
  }
  const handleSelectDate =(el)=>{
    if(getDate){
      getDate(prev=>({...prev,date:el}))
    }
    setCalenderMy((prev)=>({...prev,date:new Date(el).getDate()}))
  }

const saveTimeFun = (time)=>{
    if(getDate){
      getDate(prev=>({...prev,
        time:time.hours+":"+time.minutes+":" +"00 "+time.timeStage
    }))
    formatAMPM(time)
    }
}
const handleDateVali = (dateObjEl,dateObjEl2)=>{
 return new Date(dateObjEl2).getFullYear() === new Date(dateObjEl).getFullYear()&&
  new Date(dateObjEl2).getDate()===new Date(dateObjEl).getDate() &&
  new Date(dateObjEl2).getMonth()===new Date(dateObjEl).getMonth()
}

const handleDateVali2 = (dateObjEl,dateObjEl2)=>{
  return (
    new Date(dateObjEl2).getTime() > new Date(dateObjEl).getTime()
   ) 
 }


  return (
    <div className='rounded-md p-2 px-1 relative  z-[2] flex overflow-hidden open-calender' >
      <div className={`w-[330px] relative bg-white rounded-md p-4 mx-2 shadow-xl transition-all duration-200 h-[420px]`} >
        <h2 className='text-xl font-montserrat'>{name} Date </h2>
        <div className='flex justify-between items-center relative'>
          <h2 className='p-1 py-4 flex relative' onClick={() => steActiveYear(prev => !prev)}>
            <span>{months[calenderMY.month]} {calenderMY.year}</span>
            <span ><MdOutlineKeyboardArrowDown className={`cursor-pointer duration-200 ${ activeYear ? '-rotate-180' : '' }`} size={'25px'} /></span>
          </h2>
          {<ul className={`duration-200 absolute bg-white ${ activeYear ? ' open-dev-con w-full overflow-y-scroll top-full  max-h-[300px]  grid grid-cols-3 gap-4 ' :
            'hidden' }`}>
            {new Array(80).fill(1)
              .map((_, i) => <li onClick={() => hnadleYear(new Date().getFullYear() + i)}
                className={`cursor-pointer  text-center duration-200  p-1  rounded-full
                          hover:bg-gray-100 active:text-white    active:bg-red-500
                          ${ calenderMY.year === new Date().getFullYear() + i ? 'bg-red-500 text-white hover:bg-red-500 ' : '' }`}>
                {new Date().getFullYear() + i}</li>)}
          </ul>}

          <div className='flex'>
            <span className='cursor-pointer active:text-red-500' onClick={() => (handelCalenderDate(-1))}><BsArrowDown /></span>
            <span className='-rotate-180 cursor-pointer active:text-red-500' onClick={() => (handelCalenderDate(1))}><BsArrowDown /></span>
          </div>

        </div>
        <ul className='grid grid-cols-7 gap-2 ' >
          <li className='h-[35px] cursor-pointer pt-1 text-center  text-red-700'>Sun</li>
          <li className='h-[35px] cursor-pointer pt-1 text-center  text-red-700'>Mon</li>
          <li className='h-[35px] cursor-pointer pt-1 text-center  text-red-700'>Tue</li>
          <li className='h-[35px] cursor-pointer pt-1 text-center  text-red-700'>Wed</li>
          <li className='h-[35px] cursor-pointer pt-1 text-center  text-red-700'>Thu</li>
          <li className='h-[35px] cursor-pointer pt-1 text-center  text-red-700'>Fri</li>
          <li className='h-[35px] cursor-pointer pt-1 text-center  text-red-700'>Sat</li>
          {dateArr.map((el) => <li onClick={()=>{
            if(handleDateVali2(new Date(el),endTo) ||handleDateVali2(startTo,new Date(el))){
                 handleSelectDate(el)
            }
        }}


            className={el ? `h-[35px] ${(endTo?handleDateVali2(new Date(el),endTo):false) ||(startTo?handleDateVali2(startTo,new Date(el)):false)
              ?`cursor-pointer text-gray-800 active:bg-red-500 
              ${handleDateVali(new Date(el),dateObj?.date)?'bg-red-500 text-white':'hover:bg-gray-100'}
               active:border active:text-white`:'text-gray-300 cursor-not-allowed hover:bg-white'} 
                text-center pt-1 rounded-full  duration-200 shadow `: ''}    
                >
            {el ? new Date(el).getDate() : ''}
          </li>)}
        </ul>
      </div>
      <div className=' py-4 pl-4 w-[330px]  rounded border-l-2 h-[400px] '>
        <h2 className='text-xl font-montserrat'>{name} Time</h2>
        <div className='h-full relative  rounded-md w-full   flex items-center justify-end '>
          <div className='h-32  flex  w-64'>
            <div className='flex items-center flex-col'>
              <span className='text-3xl text-red-600 font-bold mt-[50px] mx-3 block w-4  h-[3px] bg-red-500'></span>
            </div>
            <div className='flex items-center flex-col w-10 '>
              <span onClick={() => { handelCalenderTime(1, 'hours') }} className='block -rotate-180 cursor-pointer pt-4'>{<BsChevronDown size={'20px'} />}</span>
              <p className='text-2xl text-red-600 font-semibold'>{time.hours < 10 ? '0' + time.hours : time.hours}</p>
              <span onClick={() => { handelCalenderTime(-1, 'hours') }} className='block cursor-pointer  pt-8'>{<BsChevronDown size={'20px'} />}</span>
            </div>
            <div className='flex items-center flex-col w-4 '>
              <span className='text-3xl text-red-600 font-bold mt-[31px] mx-3'>:</span>
            </div>
            <div className='flex items-center flex-col mr-4 w-10 '>
              <span onClick={() => { handelCalenderTime(1, 'minutes') }} className='block -rotate-180 cursor-pointer  pt-4'>{<BsChevronDown size={'20px'} />}</span>
              <p className='text-2xl text-red-600 font-semibold'>{time.minutes < 10 ? '0' + time.minutes : time.minutes}</p>
              <span onClick={() => { handelCalenderTime(-1, 'minutes') }} className='block cursor-pointer  pt-8'>{<BsChevronDown size={'20px'} />}</span>
            </div>
            <div className='flex items-center flex-col w-10 '>
              <span className='block -rotate-180 cursor-pointer  pt-4' onClick={()=>handleTimeStage()}>{<BsChevronDown size={'20px'} />}</span>
              <p className='text-2xl text-red-600 font-semibold'>{time.timeStage}</p>
              <span className='block cursor-pointer font-light  pt-8' onClick={()=>handleTimeStage()}>{<BsChevronDown size={'20px'} />}</span>
            </div>
            <div className='flex items-center flex-col'>
              <span className='text-3xl text-red-600 font-bold mt-[53px] mx-3 block w-4 h-[3px] bg-red-500'></span>
            </div>
          </div>
          <div className='h-full flex flex-col justify-center'>
            <button className='mt-[-18px]  px-8 py-1 mx-auto bg-red-500 rounded-full text-white' onClick={()=>saveTimeFun(time)}>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DatePicker
