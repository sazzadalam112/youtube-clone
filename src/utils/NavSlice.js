import { createSlice } from "@reduxjs/toolkit";

    const navSlice = createSlice(
        {
            name:"nav",
            initialState:{
                isMenuOpen:false
            },
            reducers:{
                hamNAV:(state)=>{state.isMenuOpen = !state.isMenuOpen},
                closeMenu:(state)=> {state.isMenuOpen=false},
            },
            
        }
    );

    export const { hamNAV,closeMenu } = navSlice.actions;
    export default navSlice.reducer;