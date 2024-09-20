import React from 'react'
import { useNavigate } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useAppSelector } from '@zio/shared/redux/hooks'
import { Avatar } from '@zio/components';
import { useParams } from 'react-router-dom'
import { CreateChannel } from '../../methods/swalFunc'
import { Dropdown, DropdownMenu } from '@zio/components'

const SidebarHeaderChat = () => {
  const params = useParams()
  const navigate = useNavigate()
  const channel = useAppSelector(state=>state.channel)
  const sessionId = useAppSelector(state=>state.session?._id)
  const handleCreateChannel = () => {
    CreateChannel(sessionId)
      .then((channelId)=>{
        navigate('/chat/'+channelId)
      })
  }

  return (
    <div className="chat-sidebar-header">
      {
        !params?.channelId && (
          <div className="d-grid pd-15">
            <button id="mailComposeBtn" onClick={handleCreateChannel} class="btn btn-sm btn-primary btn-block">새 채널</button>
          </div>
        )
      }
      {
        params?.channelId && (
          <Dropdown className="dropdown dropdown-channel">
            <a className="dropdown-link">
              <Avatar
                userId={channel?._id}
                name={channel?.name}
                imageUrl={channel?.channel_pic}
                width={32}
                height={32}
              />
              <span className="dropdown-channel-title">{channel?.name}</span>
              <span><FeatherIcon icon="chevron-down"/></span>
            </a>
            <DropdownMenu className="dropdown-menu dropdown-menu-end mg-t-0-f">
              <a href="#" className="dropdown-item"><FeatherIcon icon="user-plus"/> 대화 상대 초대</a>
              <a onClick={handleCreateChannel} className="dropdown-item"><FeatherIcon icon="plus-square"/> 새 채널 만들기</a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item"><FeatherIcon icon="server"/> 채널 설정</a>
              <a href="#" className="dropdown-item"><FeatherIcon icon="bell"/> 알림 설정</a>
              <a href="#" className="dropdown-item"><FeatherIcon icon="zap"/> 개인정보 보호</a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item"><FeatherIcon icon="edit-3"/> 팀원 보기</a>
              <a href="#" className="dropdown-item"><FeatherIcon icon="shield-off"/> 알림 끄기</a>
            </DropdownMenu>
          </Dropdown>
        )
      }
    </div>
  )
}

export default SidebarHeaderChat

