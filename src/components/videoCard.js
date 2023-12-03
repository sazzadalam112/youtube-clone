import React from 'react'

const VideoCard = ({info}) => {
//    console.log(info) 
//    const{snippet , statistics} = info;
//    const{channelTitle, title, thumbnails} = snippet;
if(!info || !info.snippet || !info.statistics) {
    console.log(info)
    return <div>Error: Video information is missing</div>
}

 const {snippet, statistics} = info;
 const {thumbnails, title, channelTitle} = snippet;
//  const {viewCount} = statistics;
  return (
    <div className='p-5 m-2 w-96 shadow-2xl rounded-2xl'>
      <img className='rounded-lg text-center w-full' alt='thumbnail' src = {thumbnails.medium.url} />
      <ul>
        <li className='font-bold text-lg'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  )
}

export default VideoCard;
