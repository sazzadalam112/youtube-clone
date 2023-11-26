// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link, useLocation } from 'react-router-dom';

// function Sidebar() {
//   const location = useLocation();
//   const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

//   if (!isMenuOpen) return null;

//   if (location.pathname === '/watch') {
//     return (
//       <div className='fixed p-2 top-16 left-0 h-full w-48 bg-white shadow-lg overflow-y-auto z-10 '>
          
//          <ul>
//              <li><Link to="/">Home</Link></li>
//              <li>Shorts</li>
//              <li>Subscription</li>
//          </ul>
//             <h1 className='font-bold pt-2'>You</h1>
//          <ul>
//              <li>Your Channel</li>
//              <li>History</li>
//              <li>Your Videos</li>
//         </ul>
//          <h1 className='font-bold pt-2'>Subscription</h1>
//          <ul>
//              <li>Subscription 1</li>
//              <li>Subscription 2</li>
//              <li>Subscription 3</li>
//         <li>Subscription 4</li>
            
//          </ul>
//        </div>
        
     
//     );
//   } else if (location.pathname === '/') {
//     return (
//       <div className='p-2 shadow-lg w-48 '>
           
//        <ul>
//              <li><Link to="/">Home</Link></li>
//              <li>Shorts</li>
//              <li>Subscription</li>
//          </ul>
//              <h1 className='font-bold pt-2'>You</h1>
//          <ul>
//              <li>Your Channel</li>
//              <li>History</li>
//              <li>Your Videos</li>
//          </ul>
//          <h1 className='font-bold pt-2'>Subscription</h1>
//          <ul>
//              <li>Subscription 1</li>
//              <li>Subscription 2</li>
//              <li>Subscription 3</li>
//             <li>Subscription 4</li>
            
//          </ul>

        
//       </div>
//     );
//   } else {
//     // Handle other routes or provide a default behavior
//     return null;
//   }
// }

// export default Sidebar;
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Sidebar() {
    const isMenuOpen = useSelector(store=>store.nav.isMenuOpen)
    if (!isMenuOpen) return null;
  return (
    <div className='  p-2 w-48 bg-white shadow-lg  sm:absolute sm:z-0 '>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Subscription</li>
        </ul>
            <h1 className='font-bold pt-2'>You</h1>
        <ul>
            <li>Your Channel</li>
            <li>History</li>
            <li>Your Videos</li>
        </ul>
        <h1 className='font-bold pt-2'>Subscription</h1>
        <ul>
            <li>Subscription 1</li>
            <li>Subscription 2</li>
            <li>Subscription 3</li>
            <li>Subscription 4</li>
            
        </ul>
    </div>
  ) 
}

export default Sidebar