import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@zio/shared/redux/hooks'
import { Avatar } from '@zio/components'
import { RiSearchLine } from "react-icons/ri"

const SidebarBodyMessageChat = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()  
  const [allChannel,setAllChannel] = useState([])
  const session = useAppSelector(state => state?.session)
  const socketConnection = useAppSelector(state=>state?.session?.socketConnection)

  useEffect(()=>{
    if (socketConnection){
      console.log('session',session)
      socketConnection.emit('sidebar',session._id)
      socketConnection.on('channel-list',(channels)=>{
        setAllChannel(channels)
      })
    }
  },[socketConnection,session])

  const handleChannelClick = (e, channelId) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('/chat/'+channelId)
  }

  return (
    <div className="flex-fill pd-y-20 pd-x-10 bd-t">
      <p className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1 pd-l-10 mg-b-10">최근 대화</p>
      <div id="chatDirectMsg" className="chat-msg-list">
        {
          allChannel.length === 0 && (
            <div className='mt-12'>
              <div className='text-center m-5 tx-color-03'><RiSearchLine size={40}/></div>
              <p className='text-center m-5 tx-color-03'>대화를 시작할 사용자를 탐색하세요.</p>
            </div>
          )
        }
        {/* 방목록 표시 */}
        {
          allChannel.map((channel,index)=>{
            return (
              <div
                  key={channel?._id} 
                  onClick={(e)=>{handleChannelClick(e, channel?._id)}} 
                  className='media'
                >
                  <Avatar
                      imageUrl={channel?.channel_pic}
                      name={channel?.name}
                      width={32}
                      height={32}
                  />
                  
                  <div className="media-body mg-l-10">
                      <h6 className="d-flex mg-b-0">
                        {channel?.name}
                        {
                          Boolean(channel?.unseenMsg) && (
                            <span className="badge text-bg-danger" style={{marginLeft:"auto"}}>5</span>
                          )
                        }                        
                      </h6>
                      <small className="d-block tx-color-04">1 시간 전, {channel?.lastMsgText}</small>
                  </div>
              </div>
            )
          })
        }


      </div>
    </div>
  )
}

export default SidebarBodyMessageChat