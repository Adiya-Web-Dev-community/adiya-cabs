import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    onlyOneInput:{active:false,ignoreInput:['']},
    bookingRideData:{
      pickupLocation:'',
      distination:'',
      category:'Outstation Ride',
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
   addBookingInfo :(state,{payload})=>{
    state.onlyOneInput ={active:true,ignoreInput:state.onlyOneInput.ignoreInput}
    state.bookingRideData={...state.bookingRideData,[payload.name]:payload.value}
    state.bookingRideData.category=state.bookingRideData.category
  },
  findActiveInput :(state,{payload})=>{
    if(payload.insert && !state.onlyOneInput.ignoreInput.includes(payload.ignoreInput)){
      state.onlyOneInput.ignoreInput.push(payload.ignoreInput)
      state.onlyOneInput = {active:false,ignoreInput:[...state.onlyOneInput.ignoreInput]}
    }else{
      state.onlyOneInput = {active:true,
        ignoreInput:state.onlyOneInput.ignoreInput}
    }
  },
  updateCateGory:((state,{payload})=>{
    state.bookingRideData.category=payload
  })
}
})

export const {addBookingInfo,findActiveInput,updateCateGory} = bookingSlice.actions

export default bookingSlice.reducer