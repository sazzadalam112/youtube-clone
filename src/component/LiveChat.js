
import ChatMessage from './ChatMessage'
import { generateRandomName,makeRandomMessage } from '../utils/helper'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AddMessage } from "../utils/LiveSlice"
import { useEffect,useState } from 'react'


const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState("");
  
    useEffect(() => {
      const i = setInterval(() => {
        // API Polling
        dispatch(
          AddMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20) + " 🚀",
          })
        );
      }, 2000);
  
      return () => clearInterval(i);
      // eslint-disable-next-line
    }, []);
  
    const messages = useSelector((store) => store.chat.messages);
  
    return (
      <>
      <div className='w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg flex flex-col-reverse overflow-y-scroll '>
        {messages && messages.map((c, i) => <ChatMessage key={i} name={c.name} message={c.message} />)}
      </div>
      <form onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            AddMessage({
              name: "Ajay pandey",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}>
      <div className='mt-2 ml-2 '>
        <input className='w-[21rem] border border-black rounded-lg  px-3'
         value={liveMessage}
         onChange={(e) => {
           setLiveMessage(e.target.value);
         }}
         >
        </input>
        <button className='px-2 mx-2 bg-green-100'>
          Add
        </button>
      </div>

      </form>
     
      </>

    );
  };
  

export default LiveChat