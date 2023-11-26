import { useDispatch } from "react-redux";
import { hamNAV } from "../utils/NavSlice";
import { useEffect, useState } from "react";
import {  YT_SEARC_API } from "./constant";


function Header() {
    const [queryvalue,setQueryvalue] = useState("")
    const [filteredvalue,setFilteredvalue] = useState("")
    const [searchOpen,setSearchopen]= useState(false)
  
    
    const dispatch = useDispatch(); 
    const collapse=()=>{
        dispatch(hamNAV())
}
useEffect(()=>{
    const timer =setTimeout(()=>apiCall(),200);
   
    return()=>{
        clearTimeout(timer);
    }
    // eslint-disable-next-line 
},[queryvalue])




const apiCall = async()=>{
    const data = await fetch(YT_SEARC_API+ queryvalue)
    
    const json =  await data.json()
    setFilteredvalue(json[1])
   
}
  return (
            <div className="grid grid-flow-col p-3 shadow-lg  w-full">
                <div className="flex col-span-2 ">
                    <img className="h-8   cursor-pointer" src="https://static.thenounproject.com/png/2832810-200.png" alt="icon" onClick={()=>collapse()}/>
                    <a href="/">
                    <img className="h-6 sm:hidden cursor-pointer mt-1 ml-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="Youtube"/>
                    </a>
                </div>

                <div className="col-span-11 sm:ml-9">
                    <input className="border border-gray-400 rounded-l-full p-2  w-1/2 " onFocus={()=>setSearchopen(true)}
                    onBlur={()=>setSearchopen(false)}
                    value={queryvalue} onChange={(e)=>{setQueryvalue(e.target.value)}} type="text"></input>
                

                    <button className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-300">🔍</button>
                {searchOpen &&
                <div className="absolute bg-white w-[30rem] mt-2 " >
                        <ul className="p-2 m-1">
                            {filteredvalue && filteredvalue.map((item)=> <li className="m-1" key={item}>🔍 {item}</li>)}
                        </ul>
                </div>
                } 
                </div>

                <div className="col-span-1">
                    <img className="h-8 "src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="user" />  
                </div>


            </div>
    )
}
export default Header;


/*
When the queryvalue changes, the useEffect is triggered.

It sets a timer with setTimeout to delay the execution of apiCall by 200 milliseconds.

If another queryvalue change occurs before the 200 milliseconds elapse, the useEffect is triggered again.

When the useEffect is triggered again, it returns the cleanup function, which clears the previous timer
using clearTimeout. This effectively cancels the previous delayed apiCall.

So, if a new queryvalue change occurs within the 200-millisecond delay period, the previous apiCall is
canceled, and a new one will be scheduled with the updated queryvalue. This can be helpful in situations
where you want to ensure that only the latest API request is executed and that any intermediate requests
are canceled to avoid unnecessary API calls.

If an API request takes less than 200 milliseconds to complete, it won't be canceled by this mechanism 
because the timer has already completed, and the cleanup function doesn't have any effect. This code 
primarily deals with handling cases where the user types or updates queryvalue rapidly and ensures that
 only the last input change triggers the API call.
 */