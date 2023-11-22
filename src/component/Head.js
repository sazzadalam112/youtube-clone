import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg bg-slate-100 justify-between'>
        <div className='flex col-span-1'>
           <img className='h-20 text-white' 
     alt="Hamburger"
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oSi_YdarakDB25vEvGD4lausLzTojboO0w&usqp=CAU"/>

     <img 
     className='h-10 m-5 mx-12 '
     alt="Youtube"
     src="https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720944_1280.png"/>  
    </div>
     <div className='col-span-10 text-center  '>
        <input className='w-3/5 p-3 mt-3 border border-gray-700 rounded-l-full bg-gray-300 text-white ' type='text'/>
        <button className='border border-gray-700 p-3 px-6 rounded-r-full bg-gray-500'>🔍</button>
    </div>
    <div className='my-4 col-span-1'>
         <img 
         className='h-10 border border-solid '
    alt='icon'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZyMz28b-EQDkUxy9WlAD-PSftm-9g26IuA0i49FsPWTIE5uzw7BmYQwMh8QwW2vM91ww&usqp=CAU'/>
    </div>
   
    </div>
  )
}

export default Head;
