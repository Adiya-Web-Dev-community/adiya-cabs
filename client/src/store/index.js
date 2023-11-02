import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import bookingReducer from "./bookingSlice";
// import user from "./api";
import thunk from "redux-thunk";
export const store = configureStore({
  reducer: {
    app: appReducer,
    bookingSlice:bookingReducer
  },
  middleware: [thunk, ...getDefaultMiddleware()],
});

