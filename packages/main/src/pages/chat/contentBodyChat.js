import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@zio/shared/redux/hooks'
import { setChannel } from '../../redux/slices/channel'
import { setInputMessage } from '../../redux/slices/band'
import ContentBodyChatBubble from './contentBodyChatBubble'
import moment from 'moment'
import { RiChatVoiceFill, RiUserFollowLine, RiCloseLargeLine } from "react-icons/ri"
import { Spinner } from '@zio/components'
import toast from 'react-hot-toast'

const ContentBodyChat = () => {
  const dispatch = useAppDispatch()
  const leftSidebar = useAppSelector((state)=>state.chatUI.leftSidebar)
  const params = useParams()  
  const paramChannelId = params?.channelId
  const [allMessage,setAllMessage] = useState([])
  const {socketConnection, ...session } = useAppSelector((state)=>state.session)
  const inputMessage = useAppSelector(state=>state.band.inputMessage)
  const channel = useAppSelector((state)=>state.channel)  
  const scrollRef = useRef(null)
  
  useEffect(()=>{
    if (scrollRef.current){
      scrollRef.current?.scrollIntoView({block:'end'}) //behavior:'smooth'는 크롬에서 동작하지 않음
    }
  },[allMessage, inputMessage]) //전체 메세지 변경될때마다

  useEffect(()=>{ // 채널 변경시
    if(socketConnection && paramChannelId){
      // 1. 채널정보 물어보기
      socketConnection.emit('message-page',paramChannelId)
      // 1. 본 대화방 글 읽음여부 처리요청
      socketConnection.emit('seen', paramChannelId, session?._id) // 대화상대가 작성한 글 읽음처리
      // 2. 대화상대 정보 수신
      socketConnection.on('message-channel',(data)=>{
        dispatch(setChannel(data))
      })
      // 3. 초기 대화내용 전체 수신
      socketConnection.on('init messages',(data)=>{ // 이걸 왜 여러번 수신할까?
        console.log('데이타 수신은 중복 수신체크바람',data)
        console.log('paramChannelId 값 없는거 주목',paramChannelId) //이 값이 undefined임 왜그럴까? 이유는 socketConnection 최초1회만 메모리에 떠있기때문
        console.log('dd',Object.keys(data).length)
        if (Object.keys(data).length===0){ // 값이 []일때 == 대화방이 없을 때
          setAllMessage(null)
        } else {
          console.log('신달수 데이타사라짐',data)
          console.log(`들어가기전: ${data._id}, ${paramChannelId}`)
          if (data._id === paramChannelId){
            setAllMessage(data?.messages)
          }
        }
      }) 
      // 재 랜더링 될때 해제시키기
      return () => {
        socketConnection.off("message-channel"); // 미재거시, 소켓수신모듈이 여러개 생김^^
        socketConnection.off("init messages");
      }
    }
  },[
    socketConnection, // 소켓 연결이 될때마다(/chat에 들어와야 소켓연결)
    paramChannelId, // 대화채널이 변경될때 마다
    session?._id // F5로 새로고침 (/chat외에도 유지해야해서)
  ])

  useEffect(()=>{ // 새로운 대화발생 시, 수신
    if(socketConnection){      
      socketConnection.on('new messages',(data)=>{ // 이걸 왜 여러번 수신할까?
        console.log('데이타 수신은 중복 수신체크바람',data)
        console.log('paramChannelId 값 없는거 주목',paramChannelId) //이 값이 undefined임 왜그럴까? 이유는 socketConnection 최초1회만 메모리에 떠있기때문
        console.log('dd',Object.keys(data).length)
        if (Object.keys(data).length===0){ // 값이 []일때 == 대화방이 없을 때
          setAllMessage(null)
        } else {
          console.log('신달수 데이타사라짐',data)
          console.log(`들어가기전: ${data._id}, ${paramChannelId}`)
          if (data._id === paramChannelId){
            setAllMessage(data?.messages)
          }
          const lastMsg = data?.messages.at(-1) // 맨 마지막 1개
          console.log(`lastMsg:${lastMsg.writeUser?._id}, ${session._id}`)
          if (lastMsg.writeUser?._id !== session._id){
            toast.success(`${lastMsg?.writeUser?.name}님의 대화: ${lastMsg?.text}`)
          }
        }
      }) 
      return () => { // 재랜더링 될때 호출됨
        socketConnection.off("new messages");
      }
    }
  },[socketConnection,paramChannelId]) // 소켓은 대화상대랑 상관없이 1번만 맺어지는것임. 메세지 수신은 소켓연결후 1번만 메모리에 위치, 중복호출되면, 소켓수신모듈이 여러개 생김^^

  const handleInputCancel = (key)=>{
    dispatch(setInputMessage({
      ...inputMessage,
      imageUrl: key==='imageUrl' ? "" : inputMessage?.imageUrl,
      videoUrl: key==='videoUrl' ? "" : inputMessage?.videoUrl
    }))
  }

  let isYmd = true, ymd = ""

  return (
    <div 
      className={`chat-group ${leftSidebar==='chat' ? "" : "d-none"}`}
      ref={scrollRef}
    >

      { // 대화상대자를 선택안했을 때
        !paramChannelId && (
          <div className="chat-group-divider"><RiUserFollowLine size={30}/><span className="p-2 fs-5">최근 대화 선택, 또는 새 채널을 만드세요.</span></div>
        )
      }
      { // 대화상대자와 대화가 1건도 없을 때
        paramChannelId && allMessage?.length===0 && (
          <div className="chat-group-divider text-success"><RiChatVoiceFill size={30}/><span className="p-2 fs-5">첫 대화를 시작해 보세요.</span></div>
        )
      }
      { // 그 동안 대화했던 내용 표시
        paramChannelId 
        && allMessage?.map((msg,index)=>{
          isYmd = ymd !== moment(msg.createdAt).format('YYYY-MM-DD')
          ymd = moment(msg.createdAt).format('YYYY-MM-DD')
          return(
            <ContentBodyChatBubble
              channel={channel}
              session={session}
              msg={msg}
              isYmd={isYmd}
            />
          )
        })
      } 
      { // 업로드하려는 이미지/동영상 미리보기
        inputMessage?.txt!=='loading' && inputMessage?.imageUrl && (
          <div className='d-flex w-100 h-100 mg-t-20 p-4 rounded overflow-hidden justify-content-center'>
            <div className='pd-l-20'>
              <img
                src={inputMessage?.imageUrl}
                className='img-thumbnail wd-100p'
              />
            </div>
            <div onClick={()=>handleInputCancel('imageUrl')} className='pd-l-15'>
              <RiCloseLargeLine size={30}/>
            </div>
          </div>
        )
      }
      {
        inputMessage?.text!=='loading' && inputMessage?.videoUrl && (
          <div className='d-flex w-100 h-100 mg-t-20 p-4 rounded overflow-hidden justify-content-center'>
            <div className='pd-l-20'>
              <video
                src={inputMessage?.videoUrl}
                className='img-thumbnail wd-100p'
                controls
                muted
                autoPlay
              />
            </div>
            <div onClick={()=>handleInputCancel('videoUrl')} className='pd-l-15'>
              <RiCloseLargeLine size={30}/>
            </div>
          </div>
        )
      }
      {
        inputMessage?.text==='loading' && (
          <div className='w-100 h-100 text-center'>
            <Spinner/>
          </div>
        )
      }      
    </div>
  )
}

export default ContentBodyChat