// import { FaUser } from "react-icons/fa";

// const ChatMessage = ({ name, message }) => {
//     return (
//         <div className="flex shadow-sm p-2 ">
//             <div className="text-white justify-center items-center pt-3 px-1 rounded-full border border-black w-10 h-10 bg-black ">
//                 <FaUser size={25} />
//             </div>
//             <div className="flex pt-2">
//                 <span className="font-bold px-2">{name}</span>
//                 <span>{message}</span>
//             </div>




//         </div>
//     )
// }
// export default ChatMessage;
import { FaUser } from "react-icons/fa"
const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex shadow-sm p-2 items-center">
            <div className="border border-black w-10 h-10 rounded-full bg-black items-center m-2">
                <FaUser size={25} className="text-white text-center  justify-center mx-1 my-3" />
            </div>
            <div>
                <span className="font-bold px-2 text-2xl">{name}</span>
                <span>{message}</span>
            </div>
        </div>
    )
}
export default ChatMessage;