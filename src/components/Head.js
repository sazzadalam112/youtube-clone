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
     className='w-10 h-10 my-2 cursor-pointer' 
     alt='menu'
     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOvIaGkcc-iALkAPYRD-SxkqggLTaLMYqqNjsGr8MhCDEaLe-LST3ujdH1xIgumMR4cM&usqp=CAU' 
     />
       <a href='/'>
       <img 
       className='h-14 mx-10  '
       alt='youtube'
       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIk8gqfnYPw-3wCPpHhRIO1lNBpKzpJBzD0pWQ9CwI76Ur1jEEJJFlJX4JIFfhgNIpio&usqp=CAU'
       /> </a>
     </div>
     <div className='col-span-10 text-center p-2'>
        <input className='w-2/3 h-15 rounded-l-full p-2 bg-slate-200' type='text' placeholder='search' />
        <button className='bg-slate-200 p-2 rounded-r-full px-8'>🔍</button>
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
