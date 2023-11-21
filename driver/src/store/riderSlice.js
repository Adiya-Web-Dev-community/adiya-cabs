import { createSlice } from "@reduxjs/toolkit";

const riderSlice = createSlice({
  name: "rider",
  initialState: {},
  reducers: {
    setRiderData(state, action) {
      return { ...state, ...action.payload };
    },
    getRiderData(state, action) {
      return state;
    },
  },
});

export default riderSlice.reducer;
export const { setRiderData, getRiderData } = riderSlice.actions;
