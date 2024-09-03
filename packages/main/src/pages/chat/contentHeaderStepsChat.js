import React from 'react'
import { useParams } from 'react-router-dom'
import { Avatar } from '@zio/components'
import { useAppSelector } from '@zio/shared/redux/hooks'

const ContentHeaderStepsChat = () => {
  const params = useParams()
  const room = useAppSelector(state=>state.room)
  
  return (
    <div className="media align-items-center">
      <Avatar
        userId={room._id}
        name={room.name}
        imageUrl={room.profile_pic}
        width={32}
        height={32}
      />
      <div className="media-body mg-l-10">
        <h6 className="mg-b-0">{room.name}<span className="mg-l-10 tx-color-04">{params.userId}</span></h6>         
      </div>
      
    </div>
  )
}

export default ContentHeaderStepsChat