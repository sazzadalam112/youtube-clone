import React, { useEffect, useState } from 'react'
import {  YT_API } from '../utils/constants';
import VideoCard from './videoCard';
import { Link } from 'react-router-dom';

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
    <div className='flex flex-wrap w-full    '>
      {
        videos.map((video,index) => (
        <Link to={"/watch?v="+ video.id}><VideoCard key={index} info = {video} /></Link>
        ))
      }
    
    </div>
  )
}

export default VideoContainer
