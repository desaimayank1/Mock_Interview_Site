import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name: 'auth',
  initialState: { user:{}, isLoggedIn:false },
   reducers:{
    setUser:(state,action)=>{
         state.user=action.payload;
         state.isLoggedIn=true;
    },
    clearUser:(state)=>{
          state.user={};
          state.isLoggedIn=false;
    }
   }
})

export const {setUser,clearUser} =authSlice.actions;
export default authSlice.reducer;