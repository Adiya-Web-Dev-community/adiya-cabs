import { createSlice} from "@reduxjs/toolkit";

const userInfo = JSON.parse(localStorage.getItem('userInfo'))

const initialState = {
  userloginToken:userInfo?.token||'',
  userName:userInfo?.userName,
  userEmail:userInfo?.email,
  aboutQuery: "",
  profileUrl:"",
  userName:'',
  userGmail:""
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
          localStorage.setItem('userInfo',JSON.stringify(payload))
    }
  },
});

export default appSlice.reducer;
export const { setAboutQuery,saveTokenToLoacal } = appSlice.actions;
