import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import bookingReducer from "./bookingSlice";
import carReducer from "./carSlice";
import rentalReducer from "./rental";
// import user from "./api";
import thunk from "redux-thunk";
export const store = configureStore({
  reducer: {
    app: appReducer,
    bookingSlice: bookingReducer,
    car: carReducer,
    rental: rentalReducer,
  },
  middleware: [thunk, ...getDefaultMiddleware()],
});
