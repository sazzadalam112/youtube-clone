import React, { useEffect, useState } from 'react'
import {  YT_API } from '../utils/constants';
import VideoCard from './videoCard';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);

  useEffect(() => {
  getvideos();
  },[])

  const getvideos = async () => {
    const data = await fetch(YT_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  }
  return (
    <div className='col-span-11'>
     <VideoCard info = {videos[0]} />
    </div>
  )
}

export default VideoContainer
