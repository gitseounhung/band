import React, {Fragment} from 'react'
import { Avatar } from '@zio/components'
import { displayFormat, displayCreateAt } from '@zio/shared/methods/utilsDate'

const ContentBodyChatBubble = ({channel,session,msg,isYmd}) => {
  const isMe = session?._id === msg?.writeUser._id // 조인걸었을 때 object덩어리로 변함
  const dispYmd = isYmd 
    ? (`${displayFormat(msg.createdAt,'YYYY-MM-DD')} (${displayCreateAt(msg.createdAt)})`) 
    : ""

  return (
    <Fragment>
      { // 날짜 구분선 추가표시
        isYmd && (
          <div className="chat-group-divider">{dispYmd}</div>
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
          userId={msg?.writeUser?._id}
          name={msg?.writeUser?.name}
          imageUrl={msg?.writeUser?.profile_pic}
          width={32}
          height={32}
        />
        <div className="media-body" style={{textAlign: isMe ? "right" : "",marginRight: isMe ? "20px" : ""}}>
          <h6>
            {
              isMe && (
                <small className="mg-r-10">{displayFormat(msg.createdAt,'hh:mm')}</small>
              )
            }
            {msg?.writeUser?.name}
            {
              !isMe && (
                <small className="mg-l-10">{displayFormat(msg.createdAt,'hh:mm')}</small>
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
