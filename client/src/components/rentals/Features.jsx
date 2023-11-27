import React from 'react'
import { experience, featAndBanifict } from '../../configs/AdiyaRental'
import carviewImg from'../../assets/rentals/Offers/carview.png'
import Card from '../Ui/Card'
import wave from'../../assets/rentals/Offers/wave.svg'

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
         'p-4 rounded-md bg-white border cursor-pointer hover:shadow-md duration-300 hover:bg-red-400
         hover:text-white hover:mt-[-1px] 
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
    </>
  )
}

export default Features


{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff0000" fill-opacity="0.3" d="M0,224L48,213.3C96,203,192,181,288,144C384,107,480,53,576,58.7C672,64,768,128,864,128C960,128,1056,64,1152,69.3C1248,75,1344,149,1392,186.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,144C384,107,480,53,576,58.7C672,64,768,128,864,128C960,128,1056,64,1152,69.3C1248,75,1344,149,1392,186.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}