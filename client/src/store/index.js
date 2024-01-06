import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import bookingReducer from "./bookingSlice";
import carReducer from "./carSlice";
// import user from "./api";
import thunk from "redux-thunk";
export const store = configureStore({
  reducer: {
    app: appReducer,
    bookingSlice: bookingReducer,
    car: carReducer,
  },
  middleware: [thunk, ...getDefaultMiddleware()],
});
