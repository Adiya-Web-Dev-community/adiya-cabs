import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rentalsInitialData: null, //city, pickdate, end date, no of days
  carDetails: null,
  locationDetails: null,
  loggedInUser: null,
};

const rentalSlice = createSlice({
  name: "rentalSlice",
  initialState: initialState,
  reducers: {
    setInitialData: (state, { payload }) => {
      state.rentalsInitialData = payload;
    },
    setCarDetails: (state, { payload }) => {
      state.carDetails = payload;
    },
    setLocationDetails: (state, { payload }) => {
      state.locationDetails = payload;
    },
    setLoggedInUser: (state, { payload }) => {
      state.loggedInUser = payload;
    },
  },
});

export default rentalSlice.reducer;
export const { setInitialData, setCarDetails, setLocationDetails } =
  rentalSlice.actions;
