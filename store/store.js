import { configureStore } from "@reduxjs/toolkit";
import loginModalSlice from "@/feature/modal/loginModalSlice";
import registrationModalSlice from "@/feature/modal/registrationModalSlice";
import authSlice from "@/feature/authSlice";

const store = configureStore({
  reducer: {
    loginModalSlice: loginModalSlice,
    registrationModalSlice: registrationModalSlice,
    authSlice: authSlice,
  },
});

export default store;
