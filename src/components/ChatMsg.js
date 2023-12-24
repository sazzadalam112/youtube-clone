import { FaUser } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex shadow-sm p-2 ">
            <div className="text-white justify-center items-center pt-3 px-1 rounded-full border border-black w-10 h-10 bg-black ">
                <FaUser size={25} />
            </div>
            <div className="flex pt-2">
                <span className="font-bold px-2">{name}</span>
                <span>{message}</span>
            </div>




        </div>
    )
}
export default ChatMessage;