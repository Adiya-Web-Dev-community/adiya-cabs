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
      pickupCity:'',
      pickupArea:'',
      destinationCity:'',
      destinationArea:'',
      category:"Outstation Ride",
      bookingDate:date,
      bookingTime:formattedTime,
      mapLanLogArr:[]
    },
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
  addPickupLocationCity :(state,{payload})=>{
    state.bookingRideData.pickupCity = payload.city
  },
  addPickupLocationArea:(state,{payload})=>{
    state.bookingRideData.pickupArea = payload.area
  },
  addDestinationCity :(state,{payload})=>{
    state.bookingRideData.destinationCity = payload.city
  },
  addDestinationArea:(state,{payload})=>{
    state.bookingRideData.destinationArea = payload.area
  },
  changeCategory:(state,{payload})=>{
    state.bookingRideData.category = payload
  },
  handleBookingNavi:(state,{payload})=>{
    const {bookingRideData } = state
    if(!(bookingRideData.destinationCity?.trim() && bookingRideData.destinationArea?.trim())){
      toast.warn('Please Fill all feild of Destination')
    }else if(!(bookingRideData.pickupCity?.trim() &&bookingRideData.pickupArea?.trim())){
      toast.warn('Please Fill all feild of Pickup Location')
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
    if(!state.bookingRideData.mapLanLogArr.some((el)=>el.name === payload.name)){
      state.bookingRideData.mapLanLogArr = [...state.bookingRideData.mapLanLogArr,payload]
    }
  } 
}
})

export const {addPickupLocationCity,addPickupLocationArea,addDestinationCity,handleMapLangLogArr,
  addDestinationArea,changeCategory,handleBookingNavi,handleBookingDate,handleBookingTime} = bookingSlice.actions

export default bookingSlice.reducer