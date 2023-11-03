import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  userloginToken:localStorage.getItem('login-token')||'',
  aboutQuery: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAboutQuery: ({ aboutQuery }, { payload }) => {
      aboutQuery = payload;
    },
    saveTokenToLoacal:({userloginToken},{payload})=>{
          userloginToken = payload
          localStorage.setItem('login-token', payload)
    }
  },
});

export default appSlice.reducer;
export const { setAboutQuery,saveTokenToLoacal } = appSlice.actions;
