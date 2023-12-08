import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className=" p-2 px-2 m-2 mx-3 bg-gray-500 text-gray-50 rounded-lg">{name}</button>
    </div>
  )
}

export default Button
