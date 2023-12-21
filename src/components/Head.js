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

  const [searchQuerry, setSearchQuerry] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false)

  // console.log(searchQuerry)

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {

    const timer = setTimeout(() => {
      if (searchCache[searchQuerry]) {
        setSuggestion(searchCache[searchQuerry]);
      } else {
        getSearchSuggestions()
      }

    }, 200)


    return () => {
      clearTimeout(timer);
    }
  }, [searchQuerry])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuerry);
    const json = await data.json()
    // console.log(json)
    setSuggestion(json[1]);

    dispatch(cacheResults({
      [searchQuerry]: json[1]
    })
    );
  }

  return (

    <div className='grid grid-flow-col justify-between shadow-2xl  p-5 b w-screen w-full bg-white dark:bg-green-400'>
      <div className='flex col-span-1 items-center'>
        <img
          onClick={() => toggleMenuHandler()}
          className='w-10 h-6 pt-2 sm:w-20 sm:h-20 my-2 cursor-pointer'
          alt='menu'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOvIaGkcc-iALkAPYRD-SxkqggLTaLMYqqNjsGr8MhCDEaLe-LST3ujdH1xIgumMR4cM&usqp=CAU'
        />
        <a href='/'>
          <img
            className='h-10 mx-10 pt-3 sm:w-40 sm:h-20'
            alt='youtube'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIk8gqfnYPw-3wCPpHhRIO1lNBpKzpJBzD0pWQ9CwI76Ur1jEEJJFlJX4JIFfhgNIpio&usqp=CAU'
          /> </a>
      </div>
      <div className='col-span-10 text-center  items-center'>
        <div>
          <input className=' w-20 h-8   sm:h-12 sm:w-[64rem] rounded-l-full  bg-slate-200 text-3xl pl-1 my-5 sm:pl-10'
            type='text'
            value={searchQuerry}
            onChange={(e) => setSearchQuerry(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className='bg-red-200 h-7 pt-2  rounded-r-full px-5 sm:h-12 sm:pt-3  m-1'>🔍</button>
        </div>
        {showSuggestions && (<div className='absolute bg-gray-400 text-left mr-[26.5rem] w-50% sm:ml-80 sm:w-[64rem] rounded-2xl shadow-2xl'>
          <ul className='pl-8 pt-4 text-white text-2xl'>
            {suggestion.map(s => (
              <li key={s} className=' py-2 hover:bg-gray-600'>🔍{s}</li>
            ))}
          </ul>
        </div>
        )}
      </div>

      <div className='col-span-1 items-center mt-7 px-4'>
        <img
          className='h-6 w-10  sm:h-20 sm:w-20 '
          alt='user'
          src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg' />
      </div>
    </div>

  )
}

export default Head