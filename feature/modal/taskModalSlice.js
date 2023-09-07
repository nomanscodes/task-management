import { createSlice } from "@reduxjs/toolkit";


const taskModalSlice = createSlice({
    name: 'taskModal',
    initialState: false,
    reducers: {
      taskModalOpen: state => true,
      taskModalClose: state => false,
    },
  });
  
  export const { taskModalOpen, taskModalClose } = taskModalSlice.actions;
  export default taskModalSlice.reducer;