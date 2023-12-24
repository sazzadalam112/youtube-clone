import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMsg";
import { useEffect } from "react";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {

    const dispatch = useDispatch()
    const ChatMessages = useSelector((store) => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling 
            console.log("API Polling")

            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomMessage(25) + "🚀",
            }))

        }, 500);
        return () => clearInterval(i);

    }, [])

    return (
        <div className=" border border-black w-full h-[600px] p-2 bg-slate-100 overflow-y-scroll flex flex-col-reverse">

            {ChatMessages.map((c, id) => (
                <ChatMessage key={id} name={c.name} message={c.message} />))}

        </div>

    )

}
export default LiveChat;