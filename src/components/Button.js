import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-slate-600 p-2 m-3 rounded-xl text-white my-10'>{name}</button>
    </div>
  )
}

export default Button
