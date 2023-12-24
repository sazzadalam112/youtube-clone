import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
    reducer: {
        app: appslice,
        search: searchSlice,
        chat: ChatSlice
    }

});
export default store;