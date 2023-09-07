import { createSlice } from "@reduxjs/toolkit";


const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState: true,
    reducers: {
      LModalOpen: state => true,
      LModalClose: state => false,
    },
  });
  
  export const { LModalOpen, LModalClose } = loginModalSlice.actions;
  export default loginModalSlice.reducer;