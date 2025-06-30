import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = ()=>{

    const [videos,setVideos] = useState([]);

    const getVideos = async()=>{
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
        setVideos(json.items);
        
    }
   
    

    useEffect(()=>{
        getVideos();
    },[])
    // console.log(videos[0]);
    
  

    return(
        <div className="flex flex-wrap ml-60">
            {
                videos.map(video => <VideoCard key={video.id} info = {video} />)
            }
           
        </div>
    )
}
export default VideoContainer