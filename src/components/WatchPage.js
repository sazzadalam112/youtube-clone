import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from '../utils/appslice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

const WatchPage = () => {
   
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(closeMenu());
    },[])

  return (
    <div className='flex-flex-row'>
    <div className='flex-grow-9 rounded-xl p-1 sm:p-16 sm:pr-2 w-screen md:w-[60rem] m
    ' >
     <iframe 
    className='rounded-2xl'
     width="100%"
      height="450"
       src={"https://www.youtube.com/embed/" + searchParams.get("v") }
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen>
       </iframe>
    </div>
    <CommentsContainer />
    </div>
  )
}

export default WatchPage;
