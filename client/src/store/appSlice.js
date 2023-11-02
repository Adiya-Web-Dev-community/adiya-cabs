import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  aboutQuery: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAboutQuery: ({ aboutQuery }, { payload }) => {
      aboutQuery = payload;
    },
  },
});

export default appSlice.reducer;
export const { setAboutQuery } = appSlice.actions;
