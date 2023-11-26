import React from 'react';

const Comments = (item) => {
  

  // const { authorDisplayName, authorProfileImageUrl, likeCount, textDisplay } = data?.info?.items?.[0]?.snippet?.topLevelComment?.snippet || {};
  const { authorDisplayName, authorProfileImageUrl, likeCount, textDisplay } = item?.info?.snippet?.topLevelComment?.snippet || {};


  return (
    <div className='ml-2 p-2 flex mb-2 mt-3 '>
      
      <div className=''>
      <img alt='auth' className="rounded-full" src={authorProfileImageUrl} />
     
      </div>
      <div className='ml-3'>
      <p className='font-bold text-l'> @{authorDisplayName || "No author found"}</p>
      <p> {textDisplay || "No comment text found"}</p>
      <div className='flex'>
      <p>{likeCount === 0 ? "0" : likeCount || "No like count found"}👍</p>
      <span className='m-1'>👎</span>
      </div>
      </div>
      
    </div>
  );
};

export default Comments;



/**
 * 
 *  structure
 * 
 * 
 *  profile picture left side
 *  channel name
 *  comment
 *  like thumb {like counter} dislike  {dislike counter} reply
 *  
 *  expanded replies
 * 
 * 
 * 
 */