import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appslice';

const Head = () => {
  const dispatch = useDispatch()
  const toggleMenuHandler = () => {
   dispatch(toggleMenu());
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
        <input className='w-2/3 h-16 rounded-l-full  bg-slate-200 text-2xl pl-4' 
        type='text' 
        placeholder='search' 
        />
        <button className='bg-slate-200 h-16 rounded-r-full px-8 pt-2'>🔍</button>
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
