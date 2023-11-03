import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    onlyOneInput:{active:false,ignoreInput:['']},
    bookingRideData:{
      pickupCity:'',
      pickupArea:'',
      destinationCity:'',
      destinationArea:'',
      category:'',
    },
    categoryName:{
        outstation:"Outstation Ride",
        airport:"Airport Ride",
        city:"City Ride",
        rentals:"Rental Ride" 
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
}
})

export const {addPickupLocationCity,addPickupLocationArea,addDestinationCity,
  addDestinationArea} = bookingSlice.actions

export default bookingSlice.reducer