import React, {Fragment} from 'react'
import { Avatar } from '@zio/components'
import moment from 'moment'

const ContentBodyChatBubble = ({msg,myUser,toUser,isYmd}) => {
  return (
    <Fragment>
      {
        isYmd && (
          <div className="chat-group-divider">{moment(msg.createdAt).format('YYYY-MM-DD')}</div>
        )
      }
      {
        myUser?._id === msg?.msgByUserId && (
          <div className="media d-flex flex-row-reverse">
            <Avatar
              userId={myUser?._id}
              name={myUser?.name}
              imageUrl={myUser?.profile_pic}
              width={32}
              height={32}
            />
            <div className="media-body" style={{textAlign:"right",marginRight:"20px"}}>
              <h6><small className="mg-r-10">{moment(msg.createdAt).format('hh:mm')}</small>{myUser?.name}</h6>
              <p>{msg.text}</p>
            </div>            
          </div>
        )
      }
      {
        myUser?._id !== msg?.msgByUserId && (
          <div className="media">
            <Avatar
              userId={toUser?._id}
              name={toUser?.name}
              imageUrl={toUser?.profile_pic}
              width={32}
              height={32}
            />
            <div className="media-body">
              <h6>{toUser?.name}<small className="mg-l-10">{moment(msg.createdAt).format('hh:mm')}</small></h6>
              <p>{msg.text}</p>
            </div>            
          </div>
        )
      }
    </Fragment> 
  )
}

export default ContentBodyChatBubble
