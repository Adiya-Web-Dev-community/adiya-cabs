import { configureStore } from "@reduxjs/toolkit";
import riderReducer from "../store/riderSlice";

const store = configureStore({
  reducer: {
    rider: riderReducer,
  },
});

export default store;
