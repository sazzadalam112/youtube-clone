import React, { useEffect, useState } from 'react'
import { COMMENT_API } from './constant';
import { useSearchParams } from 'react-router-dom';
import Comments from './Comments';


const CommentContainer = () => {
    const [searchParams] = useSearchParams();
    const [codata,setcodata] = useState([]);
    useEffect(()=>{
        getComments();

        
        // eslint-disable-next-line
    },[])
    const getComments = async()=>{
        const data = await fetch(COMMENT_API+searchParams.get("v"))
        const json = await data.json()
        setcodata(json?.items)
        
        // console.log(json.items[1].snippet.topLevelComment.snippet.textDisplay) // comment
        // console.log(json.items[10].snippet.topLevelComment.snippet.authorDisplayName) // author name
        // console.log(json.items[10].snippet.topLevelComment.snippet.authorProfileImageUrl) // author pic
        // console.log(json.items[10].snippet.topLevelComment.snippet.likeCount) // author likes

    }
    

  return (
   
    <div className='w-[45rem] '>
         <h1 className=' ml-2 font-bold text-xl'>Comments:</h1>
        {codata.map((item)=>(
             <Comments key={item.id}  info={item} />

        ))}
        

    </div>
  )
}

export default CommentContainer