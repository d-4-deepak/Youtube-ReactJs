import React from 'react'

const ChatMessages = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm  p-1'>
    <img className='w-8 h-8' alt="user-img" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
   
    <p className='font-bold p-2'>{name}</p>
    <p>{message}</p>
    
    
    </div>
  )
}

export default ChatMessages
