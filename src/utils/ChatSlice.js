import { OFFSET_LIVE_CHAT } from "./constants";

const { createSlice } = require("@reduxjs/toolkit");

const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessages: (state, action) => {
            state.messages.splice(OFFSET_LIVE_CHAT, 1)
            state.messages.push(action.payload)
        },
    },
});
export const { addMessages } = ChatSlice.actions
export default ChatSlice.reducer