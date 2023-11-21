import React from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
   // Early return 
  if(isMenuOpen) return null;
  return (
    <div className='  bg-black text-white text-center shadow-xl col-span-1 w-60'>
         <ul className='pt-5'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <br></br>
        <hr className=''></hr>
     </ul>
        <h1 className='font-bold text-xl pt-5'>You </h1>
     <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Downloads</li>
        <li>Liked video</li>
        <br></br>
        <hr className=''></hr>
     </ul>
     <h1 className='font-bold text-xl pt-5'>Subscriptions</h1>
     <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Wion</li>
        <li>Study Glow</li>
        <br></br>
        <hr className=''></hr>
     </ul>
     <h1 className='font-bold text-xl pt-5'>Explore</h1>
     <ul>
        <li>Tranding</li>
        <li>Movies</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <br></br>
        <hr></hr>
     </ul>
     <h1 className='font-bold text-xl pt-5'>MOre From Youtube</h1>
     <ul>
        <li>Youtube Premium</li>
        <li>Youtube Studio</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
       <li></li>
     </ul>

    </div>
  )
}

export default Sidebar
