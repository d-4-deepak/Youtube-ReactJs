import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const VideoContainer = ()=>{
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)

    const dispatch = useDispatch();

    const searchQuery = useSelector((store)=>store.searchQuery.query);
    const [videos,setVideos] = useState([]);

    const getVideos = async()=>{
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
        setVideos(json.items);
        
    }
   
    

    useEffect(()=>{
        getVideos();
        if(!isMenuOpen){
            dispatch(toggleMenu());
        }
    },[])

  

    const filteredVideos = searchQuery?videos.filter((video)=>video?.snippet?.title?.toLowerCase().includes(searchQuery.toLowerCase())):videos

    
    

    return(
        filteredVideos.length===0?  <div className="text-center text-xl font-semibold text-red-500 w-full mt-10"> no related Video Found!</div>: isMenuOpen? <div className="flex flex-wrap ml-60 ">
            {

        filteredVideos.map((video) => (
                   <Link   to={"/watch?v="+video.id} state={video}  key={video.id}> <VideoCard info={video}/> </Link>

                    ))
            }
           
        </div>:<div className="flex flex-wrap ml-3 ">
            {

        filteredVideos.map((video) => (
                   <Link   to={"/watch?v="+video.id} state={video} key={video.id}> <VideoCard info={video}/> </Link>

                    ))
            }
           
        </div>
    )
}
export default VideoContainer