import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className=" py-1 p-4 text-lg text-white rounded-lg bg-gray-600 m-2 whitespace-nowrap">{name}</button>
    </div>
  )
}

export default Button
