import { configureStore } from "@reduxjs/toolkit";
import riderReducer from "../store/riderSlice";
import adminReducer from "../store/adminSlice";

const store = configureStore({
  reducer: {
    rider: riderReducer,
    admin: adminReducer,
  },
});

export default store;
