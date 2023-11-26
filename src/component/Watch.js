import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/NavSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
import { useSelector } from 'react-redux'

function Watch() {
  const isMenuOpen = useSelector(store=>store.nav.isMenuOpen)
  const marginLiveChat = isMenuOpen? (""):("ml-24")
 
    const [searchParams] = useSearchParams();
    const dispatch  = useDispatch();
    
    useEffect(()=>{
        dispatch(closeMenu())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  return (
 

<div className={`flex flex-col w-full sm:w-1/2  mt-6  ${marginLiveChat} `}>
<div className="px-5 flex w-full ">
  <div className="">
    <iframe className='rounded-xl'
      width="740"
      height="400"
      src={"https://www.youtube.com/embed/" + searchParams.get("v")}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
<div className="w-full">
    <LiveChat />
    
  </div>
</div>
<CommentContainer />
</div>

  )
}

export default Watch;


 // <div className='flex flex-col w-full   ml-10'>
  //      <div className=' ml-2 p-2 w-full flex'>
  //       <div>
  //       <iframe width="740" height="380" src={`https://www.youtube.com/embed/${searchParams.get("v")}`}  
  //         title="YouTube video player" 
  //         frameBorder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //         allowFullScreen>
  //         </iframe>

  //       </div>
          
  //         <div className='w-full'>
  //         <LiveChat />
          
  //       </div>
  //      </div>
       
      
  //       <CommentContainer />
  // </div>