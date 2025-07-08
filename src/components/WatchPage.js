import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router';

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
  },[])
 const [searchParam]= useSearchParams();
 console.log(searchParam.get("v"));
 
  const isMenuOpen = useSelector(store =>store.app.isMenuOpen)
  return (

    
      isMenuOpen? <div className='mt-20 ml-64'>
        <iframe width="900" height="500" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>:<div className='mt-20 ml-5 '>
      <iframe width="900" height="500" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    
    
  )
}

export default WatchPage
