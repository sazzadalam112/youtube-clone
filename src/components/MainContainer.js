import React from 'react'
import ButtonList from './ButtonList'
import Video from './Video'
import VideoCard from './VideoCard'

const MainContainer = () => {
  return (
    <div className='col-span-11'>
      <ButtonList/>
      <Video/>
      <VideoCard />
    </div>
  )
}

export default MainContainer
