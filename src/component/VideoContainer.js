import { useEffect, useState } from "react";
import { YT_API } from "./constant";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";



const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  
  const getVideos = async (setVideos) => {
    const data = await fetch(YT_API);
    const json = await data.json();
    setVideos(json.items);
    
  };
  useEffect(() => {
    getVideos(setVideos);
  }, []);

  return (
    <div className="flex flex-wrap mt-2">
      {videos.map((item)=>
      (<Link to={"/watch?v=" + item.id} key={item.id}> <Videocard  info={item}/></Link> ))}  
    </div>
  );
};

export default VideoContainer;
