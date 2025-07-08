import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    if (!info) return null; // ✅ skip rendering if no info

    const { snippet, statistics } = info;
    if (!snippet || !statistics) return null;
    const {channelTitle,thumbnails,title} = snippet;
  return (
    
    <div className='w-96  m-5'>
        <img alt="thumbnail" src={thumbnails.medium.url} className='w-96 rounded-lg'/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
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
