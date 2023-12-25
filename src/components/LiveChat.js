import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMsg";
import { useEffect } from "react";
import { addMessages } from "../utils/ChatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {

    const dispatch = useDispatch()
    const ChatMessages = useSelector((store) => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling 
            console.log("API Polling")

            dispatch(addMessages({
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

// import { useEffect } from "react";
// // import ChatMessage from "./ChatMsg";
// import { useDispatch, useSelector } from "react-redux";
// import { addMessages } from "../utils/ChatSlice";
// import ChatMessage from "./ChatMsg";
// import { generateRandomMessage, generateRandomName } from "../utils/helper";



// const LiveChat = () => {

//     const dispatch = useDispatch();

//     const ChatMessages = useSelector((store) => store.chat.messages)

//     useEffect(() => {
//         const i = setInterval(() => {
//             console.log('web-polling')
//             dispatch(addMessages({
//                 name: generateRandomName(),
//                 message: generateRandomMessage(25) + "🚀",
//             })
//             );
//         }, 200);
//         return () => clearTimeout(i)
//     }, [])
//     return (
//         <div className="h-[600px] w-full border border-black bg-slate-100 overflow-y-scroll ml-2 pt-2 flex flex-col-reverse">
//             {ChatMessages.map((c, i) =>
//                 <ChatMessage key={i}
//                     name={c.name}
//                     message={c.message} />)}

//         </div>
//     )
// }
// export default LiveChat;