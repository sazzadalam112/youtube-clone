import React from 'react'

const VideoCard = ({info}) => {
//    console.log(info) 
//    const{snippet , statistics} = info;
//    const{channelTitle, title, thumbnails} = snippet;
if(!info || !info.snippet || !info.statistics) {
    // console.log(info)
    return <div>Error: Video information is missing</div>
}

 const {snippet, statistics} = info;
 const {thumbnails, title, channelTitle} = snippet;
//  const {viewCount} = statistics;
  return (
    <div className=' p-2 m-5 w-[30rem] h-96 shadow-xl bg-black rounded-2xl text-white  '>
    <div className='w-100%'>
    <img className='rounded-lg text-center w-full ' alt='thumbnail' src = {thumbnails.medium.url} />
    <ul>
      <li className='font-bold text-left text-2xl '>{title}</li>
      <li className='font-bold  text-lg text-left'>{channelTitle}</li>
      <li className='font-bold  text-lg text-left'>{statistics.viewCount} views</li>
    </ul>
    </div>
  </div>
  )
};

export const Addvideos = ({info}) => {
  return(
    <div className='p-2 m-5 w-[30rem] h-96 shadow-xl bg-black rounded-2xl text-white'>
      <img className='rounded-lg text-center w-full  ' 
      alt='thumbnail'  
      src='https://www.shutterstock.com/image-photo/digital-marketing-concept-online-advertisement-600nw-1849162366.jpg' />
      <ul>
        <li className='font-bold text-right p-8 text-2xl'>↗Ads</li>
      </ul>
      <VideoCard info={info} />
    </div>
  )
}

export default VideoCard;
