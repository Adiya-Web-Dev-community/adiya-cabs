import React from 'react'
import { adiyaCabRentalBenefits } from '../../configs/AdiyaRental'
const Info = () => {
  return (
    <div>

        <h3  className='text-center md:text-5xl text-1xl text-black/50 font-montserrat '>Why Renting a Vehicle with Adiya Cab </h3>
      
        <div className='grid md:grid-cols-2 grid-cols-1 mt-8'>
         {
            adiyaCabRentalBenefits.map((el)=>
             <div className='p-4'>
                <h4 className='my-2 text-2xl  text-gray-600 font-semibold '>
                    
                    {el.point}
                    </h4>
                <p className='text-md'>{el.description}</p>
             </div>
            )
         }
            
        </div>
    </div>
  )
}

export default Info
