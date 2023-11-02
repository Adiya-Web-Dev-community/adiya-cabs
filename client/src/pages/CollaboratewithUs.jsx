import React from 'react'
import collaborateImg from '../assets/Collaborate-with-us/collaborate-hand.jpg'
import {collaboratewithus,collaborateData} from '../configs/collaboratewithus'
import {BsQuote} from 'react-icons/bs'
import {BiSolidStar} from 'react-icons/bi'
import Testimonial from '../components/Testimonial'
function CollaboratewithUs() {


    console.log(new Date().toUTCString())
  return (

    <main >
    <section className='  bg-cover mb-12' style={{ backgroundImage: `url(${ collaborateImg })`, }} >
         <div className=' place-items-center min-h-[100vh] 	 px-4 pt-20 grid grid-cols-2    h-full w-full ' >
         

         <div className='h-full pl-8 pt-12  '>
            <h2 className='text-5xl	  text-black/50 lg:text-7xl   font-extralight '>
            Embrace entrepreneurship today.!
            </h2>
            <p className='text-5xl  text-white mt-8  '>
            Launch your business within the very same day!

            </p>
          </div>   
        <div  >

         <form className='bg-white/50  flex-col  rounded  p-2 pl-4 w-[fit-content] lg:w-[23rem]  '>
            <h2 className='text-2xl mb-2'>Establish A Partnership With Us</h2>
          <label>Enter Full Name</label>  
          <input type="text" className='bg-white/70  border-2 py-2 px-2 text-md w-80 mb-4 outline-none
          rounded transition ease-in duration-300 focus:border-gray-500' />
          <label>Enter Mobile No</label>  
          <input type="text" className='bg-white/70  border-2 py-2 px-2 text-md w-80 mb-4  outline-none
          rounded transition ease-in duration-300 focus:border-gray-500' />
          <label>Select City</label>  
          <input type="text" className='bg-white/70  border-2 py-2 px-2 text-md w-80 mb-4 outline-none 
          rounded transition ease-in duration-300 focus:border-gray-500' />


          <button className='py-2 px-4 w-42 text-white text-lg  bg-gray-400 my-2 rounded hover:bg-gray-400 '>Sumbit apllication</button>
        </form>
        </div>

        </div>
    </section>
    <section >
        <h2 className='text-gray-700 text-3xl lg:text-4xl text-center my-8 sm:w-4/5 m-auto '>
            Join 
            <span className='text-red-500'> Meru </span> by
            enlisting  your 
            <span className='text-red-500'> vehicle </span>
             as a partner.
        </h2>
        <div className=' text-md   sm:w-4/5 m-auto border rounded text-center  '>

            <div className=' p-2   cursor-pointer    ' >
               We cordially invite you to explore the outstanding opportunity of becoming a valued partner with Meru.
               By attaching your vehicle to our network,
               you not only enter the realm of entrepreneurship but also open doors to a myriad of benefits and possibilities
            </div >
            <div className=' p-2   cursor-pointer  '>
            Our partnership offers you the chance to leverage your vehicle's potential and transform it into a sustainable source of income. 
            As a part of the Meru family, you gain access to a well-established and trusted platform that connects you with a vast clientele.
            </div>
            <div className=' p-2     cursor-pointer ' >
 We offer comprehensive assistance,
             including driver onboarding, safety training, and 24/7 customer support. 
             Your journey with Meru is backed by our expertise and dedication to making your business thrive.
            </div>
        </div>
    </section>
    <section className=' p-2' >
    <h2 className='text-gray-700 text-3xl lg:text-4xl text-center my-8 sm:w-4/5 m-auto'>
               What Makes Us 
            <span className='text-red-500'> Ideal Choice</span>
    </h2>    
     
     <div className='grid grid-cols-2 gap-4 sm:w-4/5 m-auto '>
                  {collaboratewithus.map((el, i) => {

                      return (
                          <div
                              key={i}
                              className=' cursor-pointer bg-white  rounded-lg p-3 flex border transition ease-in duration-300  items-center hover:shadow-xl'
                          >
                              <img src={el.icons} alt="" width={60}/>
                              <p className='text-xl ml-4 text-gray-700'>{el.title}</p>
                          </div>
                      );
                  })}
     </div>
        
    </section>
    <section className='w-full bg-gray-100'>
           <div className='sm:w-4/5 m-auto mb-12'>
           <h2 className='text-gray-700 text-3xl lg:text-4xl text-center my-8 sm:w-4/5 m-auto'>
                Documents
                 required to become 
                <span className='text-red-500'> Meru  partner </span>
            </h2>

            <div className='  grid grid-cols-3 gap-4 '>
                <div className=' rounded border p-2 bg-white'>
                <h2 className='text-gray-700 text-xl lg:text-2xl  mb-2 text-center '>Owner documents</h2>
                <p >
                   <span className='mr-1'>PAN card,</span> 
                   <span className='mx-1'>Cancelled cheque or Passbook,</span>
                   <span className='mx-1'>Aadhaar card,</span>
                   <span className='mx-1'>Address proof,</span>
                </p>,
                </div>
                <div className=' border rounded p-2 bg-white'>
                <h2 className='text-gray-700 text-xl lg:text-2xl  mb-2 text-center'>Driver documents</h2>
                <p >
                   <span className='mr-1'>Driving license,</span> 
                   <span className='mx-1'>Aadhaar card,</span>
                   <span className='mx-1'>Address proof,</span>
                </p> 
                </div>
                <div className=' border rounded p-2 bg-white'>
                <h2 className='text-gray-700 text-xl lg:text-2xl  mb-2 text-center'>Owner documents</h2>
                <p >
                   <span className='mr-1'>Vehicle RC,</span> 
                   <span className='mx-1'>Vehicle permit,</span>
                   <span className='mx-1'>Vehicle insurance,</span>
                </p>  
                </div>

                
             
            </div>
            <Testimonial/>

           </div>
    </section>
</main>
  )
}

export default CollaboratewithUs
