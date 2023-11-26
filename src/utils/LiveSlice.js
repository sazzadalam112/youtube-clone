import { createSlice } from "@reduxjs/toolkit"
import { LIVE_CHAT_COUNT } from "../component/constant";

const liveSlice = createSlice({

    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        AddMessage:(state,action)=>{
            state.messages.splice(LIVE_CHAT_COUNT, 1);
            state.messages.unshift(action.payload)


        },
    },

})


export const {AddMessage} = liveSlice.actions;
export default liveSlice.reducer;



