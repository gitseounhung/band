import React, {Fragment} from 'react'
import { Avatar } from '@zio/components'
import moment from 'moment'

const ContentBodyChatBubble = ({msg,myUser,toUser,isYmd}) => {
  const isMe = myUser?._id === msg?.msgByUserId

  return (
    <Fragment>
      { // 날짜 구분선 추가표시
        isYmd && (
          <div className="chat-group-divider">{moment(msg.createdAt).format('YYYY-MM-DD')}</div>
        )
      }
      <div className={`
        ${
          isMe
          ? "media d-flex flex-row-reverse"
          : "media"
        }
      `}>
        <Avatar
          userId={isMe ? myUser?._id : toUser?._id}
          name={isMe ? myUser?.name : toUser?.name}
          imageUrl={isMe ? myUser?.profile_pic : toUser?.profile_pic}
          width={32}
          height={32}
        />
        <div className="media-body" style={{textAlign: isMe ? "right" : "",marginRight: isMe ? "20px" : ""}}>
          <h6>
            {
              isMe && (
                <small className="mg-r-10">{moment(msg.createdAt).format('hh:mm')}</small>
              )
            }
            {isMe ? myUser?.name : toUser?.name}
            {
              !isMe && (
                <small className="mg-l-10">{moment(msg.createdAt).format('hh:mm')}</small>
              )
            }
          </h6>
          <p>{msg.text}</p>
          {
            msg?.imageUrl && (
              <p><img src={msg?.imageUrl} className="img-fluid wd-50p"/></p>
            )
          }
          {
            msg?.videoUrl && (
              <p><video src={msg?.videoUrl} className="img-fluid wd-50p" controls/></p>
            )
          }
        </div>            
      </div>
    </Fragment>
  )
}

export default ContentBodyChatBubble
