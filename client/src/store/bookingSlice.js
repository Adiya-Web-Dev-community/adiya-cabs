import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const handleDigit = (num)=>{
  return   ((num+"").length===1 ? ("0"+num):num)
  }

const date = `${new Date().getFullYear()}-${handleDigit(new Date().getMonth())}-${handleDigit(new Date().getDate())}`
const initialTime = new Date();
const formattedTime = `${initialTime.getHours()}:${initialTime.getMinutes()}`;

const userInfo = JSON.parse(localStorage.getItem('userInfo'))

// console.log(userInfo)

const initialState = {
  bookingRideData:{
      name: userInfo?.userName||'',
      email:userInfo?.email||'',
      category:"Outstation Ride",
      bookingDate:date,
      bookingTime:formattedTime,
      pickupPlaceId:'',
      destinationPlaceId:'',
      distance: '',
      duration: '',
      rideCategory: '',
      //   booking details
      pickupLocation: {
        address : '',
        city : '',
        country:'',
        state:'',
        postcode:'',
        lat:'',
        lng:''
      },
      destinationLocation: {
        address : '',
        city : '',
        country:'',
        state:'',
        postcode:'',
        lat:'',
        lng:''
      },
      // distance: { type: String },
      // duration: { type: String },
      // bookingDate: { type: String },
      // bookingTime: { type: String },
      // placeId: { type: String, default: "0000" },
      // bookingStatus
      bookingStatus: { type: String, default: "waiting for pickup" },
      mapLanLogArr:[],
      mapUpdateCount:0
    },
    pickupLocationInputVal:'',
    destinationLocationInputVal:'',
    categoryName:{
        outstation:"Outstation Ride",
        airport:"Airport Ride",
        city:"City Ride",
        rentals:"Rental Ride", 
        bike:"Bike Ride" 
    }
  };
  

const bookingSlice =  createSlice({
name:'booking',
initialState,
reducers:{
  addPickupLocation:(state,{payload})=>{
    const { address,city,country,state1,postcode,lat,lng,inputVal} = payload
    state.bookingRideData.pickupLocation = {address, city ,country,state:state1,postcode,lat,lng}
    state.pickupLocationInputVal = inputVal
  },
  addDestination :(state,{payload})=>{
    const { address,city,country,state1,postcode,lat,lng,inputVal} = payload
    state.bookingRideData.destinationLocation = {address, city ,country,state:state1,postcode,lat,lng} 
    state.destinationLocationInputVal = inputVal
  },
  
  addDistanceDuration:(state,{payload})=>{
    state.bookingRideData.distance = payload.distance
    state.bookingRideData.duration = payload.duration
  },

 
  handleBookingNavi:(state,{payload})=>{
    const {bookingRideData } = state
    if(!(bookingRideData.pickupLocation.city?.trim())){
      toast.warn('Please Fill Pickup Location')
    }else if(!(bookingRideData.destinationLocation.city?.trim())){
      toast.warn('Please Fill  Destination')
    }else {
      payload('/book-ride/in-process')
    } 
  },
  handleBookingDate:(state,{payload})=>{
    state.bookingRideData.bookingDate = payload
  },
  handleBookingTime:(state,{payload})=>{
    state.bookingRideData.bookingTime = payload
  },
  handleMapLangLogArr:(state,{payload})=>{
    state.bookingRideData.mapUpdateCount =  state.bookingRideData.mapUpdateCount+1
      const newArr = state.bookingRideData.mapLanLogArr.filter((el)=>el.name !== payload.name)
      state.bookingRideData.mapLanLogArr = [...newArr,payload]
  }, 
  handlePickupLocation:(state,{payload})=>{
    state.bookingRideData.pickupLocationInputVal=payload
  },
   changeCategory:(state,{payload})=>{
    state.bookingRideData.category = payload
  },
 
}
})

export const {addPickupLocation,addDestination,handleMapLangLogArr,
  changeCategory,handleBookingNavi,handleBookingDate,handleBookingTime,addDistanceDuration} = bookingSlice.actions

export default bookingSlice.reducer