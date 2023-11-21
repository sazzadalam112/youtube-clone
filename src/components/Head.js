import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col  bg-slate-100 shadow-xl' >
        <div className='flex col-span-1 '>
             <img
             onClick={() => toggleMenuHandler()}
             className='h-10 m-3 cursor-pointer' 
             alt="menu" 
             src='https://s3.amazonaws.com/www-inside-design/uploads/2019/03/hamburgerheader-810x810.jpg'/>
           <a href='/'>
            <img
            className='h-16 mx-10' 
            alt="youtube"
            src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'/></a>
        </div>
        <div className='col-span-10 pl-64 m-5 '>
           <input className='w-3/5 border border-gray-400 p-2 rounded-l-full' type='text' placeholder='Search' />
           <button className='border border-gray-400 px-5 p-2 rounded-r-full  '>🔍</button>
        </div>
        <div className='col-span-1'>
            <img 
            className='h-14'
            alt="usericon"
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTupTdM5CSQaohduuwhA7yNzYlXyfGHec10WyXIGws&s'/>
        </div>
     </div>
  )
}

export default Head
