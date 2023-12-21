import React from 'react'
import Sidebar from './Sidebar'
// import MainContainer from './MainContainer'
// import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'
// import {BsFillMoonStarsFill} from "react-icons/bs";

const Body = () => {
  return (
    <div className='grid grid-flow-col  w-full md:w-fit '>
      <Sidebar />
     
      <Outlet />
    </div>
  )
}

export default Body
