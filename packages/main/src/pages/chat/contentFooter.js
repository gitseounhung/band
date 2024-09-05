import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'
import ContentFooterPlus from './contentFooterPlus'
import toast from 'react-hot-toast'
import { useAppSelector, useAppDispatch } from '@zio/shared/redux/hooks'
import { setInputMessage } from '../../redux/slices/band'
import uploadFile from '@zio/shared/methods/uploadFile'

const ContentFooter = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const session = useAppSelector(state => state?.session)
  const [input,setInput] = useState({
    text: "",
    imageUrl: "",
    videoUrl: ""
  })

  const handleUploadFile = async(key,e)=>{
    const file = e.target.files[0]
    const response = await uploadFile(file)
    handleMessageChange(key,response.url)
    dispatch(setInputMessage(input))
  }
  const handleMessageChange = (key,value) => {
    setInput(preve=>{
      return {
          ...preve,
          imageUrl: key==='imageUrl' ? value : preve.imageUrl,
          videoUrl: key==='videoUrl' ? value : preve.videoUrl,
          text: key==='text' ? value : preve.text
      }
    }) 
  }
  const handleSendMessage = (e) => {
    e.preventDefault()
    if (input?.text || input?.imageUrl || input?.videoUrl){
      if (params.userId && session.socketConnection){
        session.socketConnection.emit('new message',{
          sender: session?._id,
          receiver: params.userId,
          text: input?.text,
          imageUrl: input?.imageUrl,
          videoUrl: input?.videoUrl,
          msgByUserId: session?._id
        })
        setInput({
          text: "",
          imageUrl: "",
          videoUrl: ""
        })
        dispatch(setInputMessage(null))
        toast.success(`${params.userId}님에게 메세지를 성공적으로 보냈습니다.`,{
          duration: 2000,
          position: 'top-center',
        })
      }
    }
  }

  return (
    <div className="chat-content-footer">
      <ContentFooterPlus handleUploadFile={handleUploadFile}/>
      <form className="w-100 align-content-center" onSubmit={handleSendMessage}>
        <input 
          type="text" 
          className="form-control align-self-center bd-0" 
          placeholder="새로운 대화를 입력하세요."
          value={input?.text}
          onChange={(e)=>handleMessageChange('text',e.target.value)}
        />
      </form>
      <nav>
        <a href="#" onClick={handleSendMessage} data-bs-toggle="tooltip"><FeatherIcon icon="send"/></a>
      </nav>
    </div>
  )
}

export default ContentFooter