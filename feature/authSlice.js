import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "userAuth",
  initialState: false,
  reducers: {
    userIn: (state) => true,
    userOut: (state) => false,
  },
});

export const { userIn, userOut } = authSlice.actions;
export default authSlice.reducer;