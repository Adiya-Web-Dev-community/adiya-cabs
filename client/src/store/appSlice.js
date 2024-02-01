import { createSlice } from "@reduxjs/toolkit";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

console.log(userInfo?.userName);

const initialState = {
  userloginToken: userInfo?.token || "",
  username: userInfo?.userName || "",
  userEmail: userInfo?.email || "",
  aboutQuery: "",
  profileUrl: "",
  userName: "",
  userGmail: "",
  loginToken: "",
  otpModal: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAboutQuery: (state, { payload }) => {
      state.aboutQuery = payload;
    },
    saveTokenToLoacal: (state, { payload }) => {
      state.userloginToken = payload.token;
      state.username = payload.userName;
      state.userEmail = payload.email;
      localStorage.setItem("userInfo", JSON.stringify(payload));
    },
    setLoginToken: (state, { payload }) => {
      state.loginToken = payload;
    },
    setOtpModal: (state, { payload }) => {
      state.otpModal = payload;
    },
  },
});

export default appSlice.reducer;
export const { setAboutQuery, saveTokenToLoacal, setLoginToken, setOtpModal } =
  appSlice.actions;
