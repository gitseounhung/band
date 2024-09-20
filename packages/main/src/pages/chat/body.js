import React, { useEffect } from 'react'
import Navleft from './navleft.js'
import Sidebar from './sidebar.js'
import Content from './content.js';
import { useAppDispatch } from '@zio/shared/redux/hooks.js'
import { setOnlineUser, setSocketConnection } from '@zio/shared/redux/slices/session'
import io from 'socket.io-client'

const BodyChat = () => {
  const dispatch = useAppDispatch()

  /**
   * socket connection
   */
  useEffect(()=>{
    const socketConnection = io(process.env.REACT_APP_BACKEND_URL,{
      auth: {
        token: localStorage.getItem('token')
      },
    })
    socketConnection.on('onlineUser',(data)=>{
      dispatch(setOnlineUser(data))
    })
    dispatch(setSocketConnection(socketConnection))

    return ()=>{ // 리턴의 의미: 다시실행할때 실행되었던 코드가 clean-up하는 의미임 (내부에서 socketConnection 클리어의미)
      socketConnection.disconnect()
    }
  },[]) //최초1번 실행
  
  return (
    <div className="chat-wrapper">
      <Navleft />
      <Sidebar />
      <Content />      
    </div>
  )
}

export default BodyChat