import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carData: [],
  showCarDetailsPopup: null,
  carDetails: null,
};

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    getCarData: (state, { payload }) => {
      state.carData = payload;
    },
    setShowCarDetailsPopup: (state, { payload }) => {
      state.showCarDetailsPopup = payload;
    },
    setCarDetails: (state, { payload }) => {
      state.carDetails = payload;
    },
  },
});

export default adminSlice.reducer;
export const { getCarData, setShowCarDetailsPopup, setCarDetails } =
  adminSlice.actions;
