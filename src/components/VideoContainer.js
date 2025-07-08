import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router";

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
        <div className="flex flex-wrap ml-60 ">
            {/* {videos[0]&& <AdVideoCard info={videos[0]}/>} */}
            {

                videos.map((video) => (
                   <Link   to={"/watch?v="+video.id}  key={video.id}> <VideoCard info={video}/> </Link>

                    ))
            }
           
        </div>
    )
}
export default VideoContainer