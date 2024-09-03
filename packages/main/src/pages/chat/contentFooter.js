import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'
import ContentFooterPlus from './contentFooterPlus'
import toast from 'react-hot-toast'
import { useAppSelector } from '@zio/shared/redux/hooks'

const ContentFooter = () => {
  const params = useParams()
  const session = useAppSelector(state => state?.session)
  const [message, setMessage] = useState({
    text: "",
    imageUrl: "",
    videoUrl: ""
  })
  
  const handleMessageChange = (key,value) => {
    setMessage(preve=>{
      return{
        ...preve,
        imageUrl: key==='imageUrl' ? value: preve.imageUrl,
        vedioUrl: key==='videoUrl' ? value: preve.videoUrl,
        text: key==='text' ? value: preve.text
      }
    })
  }
  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.text || message.imageUrl || message.videoUrl){
      if (params.userId && session.socketConnection){
        session.socketConnection.emit('new message',{
          sender: session?._id,
          receiver: params.userId,
          text: message.text,
          imageUrl: message.imageUrl,
          videoUrl: message.videoUrl,
          msgByUserId: session?._id
        })
        setMessage({
          text: "",
          imageUrl: "",
          videoUrl: ""
        })
        toast.success(`${params.userId}님에게 메세지를 성공적으로 보냈습니다.`,{
          duration: 2000,
          position: 'top-center',
        })
      }
    }
  }

  return (
    <div className="chat-content-footer">

      <ContentFooterPlus />
      <form className="w-100 align-content-center" onSubmit={handleSendMessage}>
        <input 
          type="text" 
          className="form-control align-self-center bd-0" 
          placeholder="새로운 대화를 입력하세요."
          value={message.text}
          onChange={(e)=>handleMessageChange('text',e.target.value)}
        />
      </form>
      <nav>
        <a href="#" onClick={handleSendMessage} data-bs-toggle="tooltip" title="Add GIF"><FeatherIcon icon="send"/></a>
      </nav>
    </div>
  )
}

export default ContentFooter