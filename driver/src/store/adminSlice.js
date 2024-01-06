import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carData: [],
};

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    getCarData: (state, { payload }) => {
      state.carData = payload;
    },
  },
});

export default adminSlice.reducer;
export const { getCarData } = adminSlice.actions;
