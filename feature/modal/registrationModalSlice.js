import { createSlice } from "@reduxjs/toolkit";

const registrationModalSlice = createSlice({
  name: "loginModal",
  initialState: false,
  reducers: {
    RgModalOpen: (state) => true,
    RgModalClose: (state) => false,
  },
});

export const { RgModalOpen, RgModalClose } = registrationModalSlice.actions;
export default registrationModalSlice.reducer;
