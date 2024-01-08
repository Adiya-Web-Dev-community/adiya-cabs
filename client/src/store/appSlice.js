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
    setAboutQuery: ({ aboutQuery }, { payload }) => {
      aboutQuery = payload;
    },
    saveTokenToLoacal: ({ userloginToken }, { payload }) => {
      userloginToken = payload;
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
