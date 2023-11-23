import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
   
    // Early Return 
    if(!isMenuOpen) return null;

  return (
    <div className='bg-black col-span-1  text-white text-center text-xl w-80 '>
        <div className='text-2xl'>
             <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Suscription</li>
        <hr></hr>
       </ul>
        </div>

       <h1 className='font-bold text-xl'>You</h1>
       <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Downloads</li>
        <li>Show more</li>
        <hr></hr>
       </ul>
       <h1 className='font-bold text-xl'>Subscriptions</h1>
       <ul className=''>
        <li>StudyIQ IAS</li>
        <li>English Speeches</li>
        <li>ThePrimeTime</li>
        <li>Firstpost</li>
        <li>ABP NEWS</li>
        <li>WION</li>
        <hr></hr>
       </ul>
       <h1 className='font-bold text-xl'>Explore</h1>
       <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>Learning</li>
        <hr></hr>
       </ul>
       <h1 className='font-bold text-xl'>More from YouTube</h1>
       <ul>
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
        <hr></hr>
       </ul>
       <ul>
        <li>Settings</li>
        <li>Report history</li>
        <li>Help</li>
        <li>Send feedback</li>
        <hr></hr>
       </ul>
       <p >About Press Copyright <br></br>Contact us Creators <br></br> Advertise Developers</p>
    </div>
  )
}

export default Sidebar
