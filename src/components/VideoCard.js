import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({info}) => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
    console.log(info);
    if (!info) return null; // ✅ skip rendering if no info

    const { snippet, statistics } = info;
    if (!snippet || !statistics) return null;
    const {channelTitle,thumbnails,title} = snippet;

    const viewCount = statistics?.viewCount || "0";
    const formattedViewCount = Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short"
    }).format(parseInt(viewCount));
    

  return (
    isMenuOpen? <div className='w-96  m-5'>
    <img alt="thumbnail" src={thumbnails.medium.url} className='w-96 rounded-lg'/>
    <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{formattedViewCount} views</li>
    </ul>
  
</div>: <div className='w-83  m-5'>
        <img alt="thumbnail" src={thumbnails.medium.url} className='w-96 rounded-lg'/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{formattedViewCount} views</li>
        </ul>
      
    </div>
    
   
  )
}

// export const AdVideoCard = ({info})=>{
//   return(
//     <div className='relative'>
//       <span className='bg-white text-black font-bold absolute bottom-40 right-7 inline-block w-8 text-center '>Ad</span>
//       <VideoCard info={info}/>
//     </div>
//   )
// }
export default VideoCard
