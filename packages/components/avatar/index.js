import React from 'react'
import { useAppSelector } from '@zio/shared/redux/hooks'

const Avatar = ({userId,name,imageUrl,width,height}) => {
  const onlineUser = useAppSelector(state=>state?.session?.onlineUser)
  let avatarName = ""
  if (name) {
    const splitName = name?.split(" ")
    if(splitName.length > 1){
      avatarName = splitName[0][0]+splitName[1][0]
    }else{
      avatarName = splitName[0][0]
    }
  }
  const isOnline = onlineUser.includes(userId)

  return (
    <div 
      className={`avatar avatar-sm ${isOnline ? "avatar-online" : ""}`} 
      style={{width:width+"px", height:height+"px"}}
    >
      {
        imageUrl ? (
          <img
            src={imageUrl}
            width={width}
            height={height}
            alt={name}
            className='rounded-circle'
          />
        ) : (
          <div 
            style={{width:width+"px", height:height+"px"}}
            className={`avatar-initial rounded-circle`}
          >
            {avatarName}
          </div>
        )
      }
    </div>
  )
}

export default Avatar