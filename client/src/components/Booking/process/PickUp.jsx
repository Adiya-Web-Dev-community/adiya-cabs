import React from 'react'
import { Button,Input } from '../../form/form'
import { handleBookingDate,handleBookingTime} from '../../../store/bookingSlice'
import { useSelector,useDispatch } from 'react-redux'

const PickUp = ({button}) => {
  const {bookingDate,bookingTime} = useSelector(el => el.bookingSlice.bookingRideData)
  const dispacth = useDispatch()


  return (

    button?
    <div className='w-full flex justify-center'>
 <Button >
    Select Current  Location
  </Button>
    </div>
   
  :
    <div className='  rounded-md grid grid-cols-2 gap-2 py-4 bg-gray-100 px-4 border'>
      <div>
      <label>Pickup Date</label>
      <Input type={'date'} animationStop  onChange={(e)=>dispacth(handleBookingDate(e.target.value))}  value={bookingDate}/>
      </div>
      <div>
      <label>Pickup Time</label>
      <Input type={'Time'} animationStop onChange={(e)=>dispacth(handleBookingTime(e.target.value))} value={bookingTime}/>      
      </div>
    </div>
  )
}

export default PickUp
