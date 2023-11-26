import React from 'react'
import { useSelector } from 'react-redux'

function Videocard({info}) {
    const isMenuOpen = useSelector(store=>store.nav.isMenuOpen)
    const cardwithclass=isMenuOpen?("w-72"):("w-80")
    const marginOnNav = isMenuOpen?(""):("m-2")

    if (!info || !info.snippet || !info.statistics) {
        console.log("hey")
        return <div>Error: Video information is missing or invalid.</div>;
      }
      
        const { snippet, statistics } = info;
        const {thumbnails,title,channelTitle } = snippet;
        const {viewCount} = statistics;
        


  return ( 
    <div className={`p-2 ${marginOnNav} ${cardwithclass} shadow-lg`}>
        <img className='rounded' alt='img' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold truncate'>{title}</li>
            <li>{channelTitle}</li>
            <li>{viewCount}</li>
        </ul>
    </div>
  )
}

export default Videocard;