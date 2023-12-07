import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appslice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const dispatch = useDispatch()
  const toggleMenuHandler = () => {
   dispatch(toggleMenu());
  }

  const[searchQuerry,setSearchQuerry] = useState("");
  const[suggestion,setSuggestion] = useState([]);
  const[showSuggestions,setShowSuggestion] = useState(false)
  // console.log(searchQuerry)

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
  
  const timer =  setTimeout(() => {
    if(searchCache[searchQuerry]) {
      setSuggestion(searchCache[searchQuerry]);
    } else{
       getSearchSuggestions()
    }
 
}, 200)


  return () => {
    clearTimeout(timer);
  }
  },[searchQuerry])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuerry);
    const json = await data.json()
    // console.log(json)
    setSuggestion(json[1]);

    dispatch(cacheResults ({
      [searchQuerry] : json[1]
    })
    );
  }
  
  return (
    <div className='grid grid-flow-col justify-between shadow-2xl m-2 p-5 bg-zinc-700 '> 
        <div className='flex col-span-1'>
     <img
     onClick={() => toggleMenuHandler()}
     className='w-20 h-20 my-2 cursor-pointer' 
     alt='menu'
     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOvIaGkcc-iALkAPYRD-SxkqggLTaLMYqqNjsGr8MhCDEaLe-LST3ujdH1xIgumMR4cM&usqp=CAU' 
     />
       <a href='/'>
       <img 
       className='h-20 mx-10 pt-3 '
       alt='youtube'
       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIk8gqfnYPw-3wCPpHhRIO1lNBpKzpJBzD0pWQ9CwI76Ur1jEEJJFlJX4JIFfhgNIpio&usqp=CAU'
       /> </a>
     </div>
     <div className='col-span-10 text-center p-2'>
       <div>
        <input className='w-2/3 h-16 rounded-l-full  bg-slate-200 text-3xl pl-10' 
        type='text' 
        value={searchQuerry} 
        onChange={(e) => setSearchQuerry(e.target.value)}
        onFocus={() => setShowSuggestion(true)}
        onBlur={() => setShowSuggestion(false)}
        />
        <button className='bg-slate-200 h-16 rounded-r-full px-8 pt-3'>🔍</button>
        </div>
        {showSuggestions && ( <div className='fixed bg-gray-400 text-left ml-80 w-[94rem] rounded-2xl shadow-2xl'>
          <ul className='pl-8 pt-4 text-white text-2xl'>
            {suggestion.map(s =>(
            <li key={s} className=' py-2 hover:bg-gray-600'>🔍{s}</li>
            ))}
            </ul>
        </div>
        )}
     </div>
     <div className='col-span-1'>
        <img 
        className='h-16 w-16'
          alt='user'
          src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'/>
     </div>
    </div>
  )
}

export default Head
