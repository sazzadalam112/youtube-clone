import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMsg";
import { useEffect, useState } from "react";
import { addMessages } from "../utils/ChatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
    const [liveMsg, setLiveMsg] = useState("")

    const dispatch = useDispatch()
    const ChatMessages = useSelector((store) => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling 

            dispatch(addMessages({
                name: generateRandomName(),
                message: generateRandomMessage(25) + "🚀",
            }))

        }, 5000);
        return () => clearInterval(i);

    }, [])

    return (
        <>
            <div className=" border border-black w-full h-[600px] p-2 bg-slate-100 overflow-y-scroll flex flex-col-reverse">
                <div>
                    {ChatMessages.map((c, id) => (
                        <ChatMessage key={id} name={c.name} message={c.message} />))}
                </div>
            </div>
            <form className="border border-black h-20 w-full bg-slate-100"
                onSubmit={(e) => {
                    e.preventDefault();

                    dispatch(
                        addMessages({
                            name: 'sazzad',
                            message: liveMsg,
                        })
                    );
                    setLiveMsg(' ')
                }}>
                <input
                    className="mx-8 my-3 p-3 w-96 rounded-full bg-gradient-to-r from-cyan-100 to-red-200  text-xl "
                    type="text"
                    placeholder="Chat"
                    value={liveMsg}
                    onChange={(e) => {
                        setLiveMsg(e.target.value)
                    }}
                />
                <button className="p-3 mx-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl ">Send</button>
            </form>
        </>
    )

}
export default LiveChat;

