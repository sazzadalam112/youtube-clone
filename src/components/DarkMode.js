import React from 'react'
import {BsFillMoonStarsFill} from "react-icons/bs";
import { useState } from "react";

const DarkMode = () => {
    const [darkMode,setDarkMode] = useState(false);
  return (
    <div className='ml-80%'>
      
          <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer ml-[100rem] h-20 w-20"/>
        
    </div>
  )
}

export default DarkMode;
