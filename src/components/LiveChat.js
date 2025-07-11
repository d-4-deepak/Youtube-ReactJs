import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { _NEVER } from "@reduxjs/toolkit/query";
import { addMessages } from '../utils/chatSlice'
import { generateRandomNames, generateRandomString } from '../utils/helper';

const LiveChat = () => {

  const [liveMessage,setLiveMessage] = useState("");
  const chatMessages = useSelector((store)=>store.chat.messages)

  const dispatch =   useDispatch()

    useEffect(()=>{
     const i = setInterval(()=>{
            console.log("app poling");
            dispatch(addMessages({name:generateRandomNames(), message:generateRandomString(10)}))
            
            // dispatch(addMessages({name:"Deepak Gupta", message:"hello bhau"}))
            
        },1500)

        return ()=>clearInterval(i);
    },[])

   

  return (
    <>
    <div className=' flex flex-col-reverse ml-2 border border-black w-full h-[500px] bg-slate-100 rounded-lg overflow-y-scroll'>
     {chatMessages.map((c,index)=> (<ChatMessages key={index} name={c.name} message={c.message}/>))}
    </div>

    <form className='w-full  m-2 border border-black' onSubmit={(e)=>{
      e.preventDefault() 
      dispatch(addMessages({
        name:"Deepak Gupta",
        message:liveMessage
      }))
      setLiveMessage("")
      
    }}>

      <input placeholder='comment...' className='w-[31rem] h-13 pl-2' type='text' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
      <button className='px-2 mx-3 bg-green-200'>send</button>
    </form>

    </>
  )
}

export default LiveChat
