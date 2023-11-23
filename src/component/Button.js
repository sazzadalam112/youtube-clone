import React from 'react'

const Button = ({name}) => {
  return (
    <div>
       <button className='bg-gray-700 text-white px-4 py-2 font-bold text-xl  text-left mx-5 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
