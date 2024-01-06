import { createSlice } from "@reduxjs/toolkit";

const carInputs = {
  carList: [],
};
const carSlice = createSlice({
  name: "carSlice",
  initialState: carInputs,
  reducers: {
    setCarList: (state, action) => {
      state.carList = action.payload;
    },
  },
});

export default carSlice.reducer
export const{setCarList}=carSlice.actions
