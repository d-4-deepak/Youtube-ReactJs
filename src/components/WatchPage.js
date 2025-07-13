import React, { useEffect, useState } from 'react'
import { _NEVER } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice';
import {  useSearchParams } from 'react-router';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { getChannelDetails, YOUTUBE_VIDEOS_API } from '../utils/constant';

const WatchPage = () => {

    const [videos,setVideos] = useState([]);
    const [searchParam]= useSearchParams();
    const videoId = searchParam.get("v");

    const dispatch = useDispatch();
    const isMenuOpen = useSelector(store =>store.app.isMenuOpen)


    const getVideos = async()=>{
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
        setVideos(json.items);
    }
   console.log("videoData", videos);
   
    useEffect(()=>{
        getVideos();
        https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${UCBnxEdpoZwstJqC1yZpOjRA}&key=AIzaSyBhN-_Lb4p4P7YMPimOlWap2DWJVuQazTk

        if(!isMenuOpen){
            dispatch(toggleMenu());
        }
    },[])


  useEffect(()=>{
    dispatch(closeMenu());
  },[])

 
 
  const currentVideo = videos.find((v)=>v.id===videoId);
  console.log("current vide",currentVideo);
  
  const snippet = currentVideo?.snippet
  const statistics = currentVideo?.statistics

  const channelId = snippet?.channelId;

  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    const fetchChannelData = async () => {
      if (!channelId) return; // prevent unnecessary API call
      const url = getChannelDetails(channelId);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      
      setChannelData(data);
 
      
    };
    fetchChannelData();
  }, [channelId]);

  console.log("channel data",channelData);
  const channelSnippet = channelData?.items?.[0]?.snippet;
  const channelStatistics = channelData?.items?.[0]?.statistics;

 
  const rawSubs = channelStatistics?.subscriberCount || "0";
  const formattedSubs = Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short"
  }).format(parseInt(rawSubs));


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

    

  const marginLeft = isMenuOpen? "ml-64":"ml-5"
  return (

    <>
    <div className={`w-full mt-20 ${marginLeft} flex flex-col`}>
      
      <div className='w-full '>
        <div className=' flex'>
        <div  >
       <iframe className=' block align-top' width="900" height="500" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
       <h1 className="mt-2 mb-0 text-xl font-bold">
  {currentVideo?.snippet?.title}
</h1>
<div className='flex justify-between items-center mt-4'>

  {/* Left Side: Channel Info */}
  <div className='flex items-center gap-4'>
    <img className='w-10 h-10 rounded-full' alt="channel-dp"
      src={channelSnippet?.thumbnails?.default?.url || "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"} />

    <div className='flex flex-col leading-tight'>
      <span className='font-semibold'>{channelSnippet?.title || "Channel Name"}</span>
      <span className='text-sm text-gray-500'>
        {formattedSubs} subscribers
      </span>
    </div>

    <button className='ml-4 px-4 py-1 bg-black text-white rounded-full text-sm font-medium hover:opacity-90'>
      Subscribe
    </button>
  </div>

  {/* Right Side: Action Buttons */}
  <div className='flex gap-3 text-gray-700 text-sm'>

    <div className='flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200'>
      <i className="fa-regular fa-thumbs-up"></i>
      <span>Like</span>
    </div>

    <div className='flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200'>
      <i className="fa-regular fa-thumbs-down"></i>
      <span>Dislike</span>
    </div>

    <div className='flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200'>
      <i className="fa-solid fa-share"></i>
      <span>Share</span>
    </div>

    <div className='flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200'>
      <i className="fa-solid fa-download"></i>
      <span>Download</span>
    </div>

  </div>
</div>

       </div>

       <div className='w-full mr-4'>
       <LiveChat/>
       </div>
       </div>
       
        </div>
      
        <CommentsContainer/>

     
      
  
    </div>
    </>
    
    
  )
}

export default WatchPage
