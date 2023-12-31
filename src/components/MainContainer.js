import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='col-span-11 bg-black-500  w-screen '>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
