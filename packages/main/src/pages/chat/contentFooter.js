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
  const inputMessage = useAppSelector(state => state?.band?.inputMessage)
  const [input,setInput] = useState({
    text: "",
    imageUrl: "",
    videoUrl: ""
  })

  console.log('input',input)

  const handleUploadFile = async(key,e)=>{
    const file = e.target.files[0]
    dispatch(setInputMessage({
        text: 'loading'
    }))
    const response = await uploadFile(file)
    setInput(preve=>{
      return {
        ...preve,
        imageUrl: key==='imageUrl' ? response.url : preve?.imageUrl,
        videoUrl: key==='videoUrl' ? response.url : preve?.videoUrl
      }
    })
    // dispatch(setInputMessage(input)) 이렇게 전달하면 100% 업데이트된 값이 전달안됨 useState가 비동기임
    dispatch(setInputMessage({
        ...input,
        imageUrl: key==='imageUrl' ? response.url : input?.imageUrl,
        videoUrl: key==='videoUrl' ? response.url : input?.videoUrl
    }))
  }
  const handleTxtChange = (e) => {
    setInput(preve=>{
      return {
        ...preve,
        text: e.target.value
      }
    }) 
  }
  const handleSendMessage = (e) => {
    e.preventDefault()
    if (input?.text || inputMessage?.imageUrl || inputMessage?.videoUrl){
      if (params.channelId && session.socketConnection){
        session.socketConnection.emit('new message',{
          channelId: params.channelId,
          text: input?.text,
          imageUrl: inputMessage?.imageUrl,
          videoUrl: inputMessage?.videoUrl,
          writeUser: session?._id
        })
        setInput({
          text: "",
          imageUrl: "",
          videoUrl: ""
        })
        dispatch(setInputMessage(null))
        toast.success(`${params.channelId}에 메세지를 성공적으로 보냈습니다.`,{
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
          onChange={(e)=>handleTxtChange(e)}
        />
      </form>
      <nav>
        <a href="#" onClick={handleSendMessage} data-bs-toggle="tooltip"><FeatherIcon icon="send"/></a>
      </nav>
    </div>
  )
}

export default ContentFooter