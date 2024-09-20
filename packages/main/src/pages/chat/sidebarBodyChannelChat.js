import React from 'react'
import { useNavigate } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useAppSelector } from '@zio/shared/redux/hooks'
import { CreateChannel } from '../../methods/swalFunc'

const SidebarBodyChannelChat = () => {
  const navigate = useNavigate()
  const sessionId = useAppSelector(state=>state.session?._id)
  const handleCreateChannel = () => {
    CreateChannel(sessionId)
      .then((channelId)=>{
        navigate('/chat/'+channelId)
      })
  }
  
  return (
    <div className="flex-fill pd-y-20 pd-x-10">
      <div className="d-flex align-items-center justify-content-between pd-x-10 mg-b-10">
        <span className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1">All Channels</span>
        <a
          className="chat-btn-add" 
          onClick={handleCreateChannel}
        >
          <span title="Create Channel"><FeatherIcon icon="plus-circle"/></span>
        </a>
      </div>
      <nav id="allChannels" className="nav flex-column nav-chat">
        <a href="#general" className="nav-link active"># general</a>
        <a href="#engineering" className="nav-link"># engineering</a>
        <a href="#products" className="nav-link"># products <span className="badge text-bg-danger">2</span></a>
      </nav>
    </div>    
  )
}

export default SidebarBodyChannelChat