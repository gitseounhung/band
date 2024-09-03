import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@zio/components'

const ContentRightMembersCard = ({user}) => {
  return (
    <Link to={"/chat/"+user?._id} className="media">
      <Avatar
        userId={user._id}
        name={user.name}
        imageUrl={user.profile_pic}
        width={32}
        height={32}
      />
      <div className="media-body mg-l-10">
          <h6 className="mg-b-0">{user?.name}</h6>
      </div>
    </Link>
  )
}

export default ContentRightMembersCard