import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";
import LiveSlice from "./LiveSlice";

const store = configureStore(  {
    reducer:{
        nav:NavSlice,
        chat:LiveSlice,
    },

} )
 export default store;