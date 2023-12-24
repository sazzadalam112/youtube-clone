import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appslice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [])

  return (
    <div className='flex-flex-row w-screen px-1'>
      <div className=' flex   md:px-20 pt-10  rounded-2xl ' >
        <div className='' >
          <iframe
            className=' md:h-[600px] w-96 px-4 md:w-[1200px]'
            width="100%"
            height="250"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
        <div className='w-full' >
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  )
}

export default WatchPage;
