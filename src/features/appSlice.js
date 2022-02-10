import {  createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'counter',
  initialState:{
    
    roomId: null,

  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state, action) => {
    
       state.roomId = action.payload.roomId;
    },
   
  },
   
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = state => state.app.roomId;

export default appSlice.reducer;
