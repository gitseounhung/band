import React, {useState} from 'react'
import FeatherIcon from 'feather-icons-react';
import { useAppSelector, useAppDispatch } from '@zio/shared/redux/hooks'
import { toggleRightSidebar } from '@zio/shared/redux/slices/chat-ui'
import { toggleModal } from '@zio/shared/redux/slices/ui'
import ContentHeaderSteps from './contentHeaderSteps';
import ContentHeaderSearch from './contentHeaderSearch';

const ContentHeader = () => {
  const { rightSidebar } = useAppSelector((state)=>state.chatUI)
  const [more, setMore] = useState(false)
  const dispatch = useAppDispatch()
  const handleModal = () => {
    dispatch(toggleModal({modal:"InvitePeople"}))
  }
  const handleSidebar = () => {
    dispatch(toggleRightSidebar())
  }
  const handleMore = () => {
    setMore((prev)=>!prev)
  }

  return (
    <div className="chat-content-header">
          
          <ContentHeaderSteps />
          <div id="directTitle" className="d-none">
            <div className="d-flex align-items-center">
              <div className="avatar avatar-sm avatar-online"><span className="avatar-initial rounded-circle">b</span></div>
              <h6 className="mg-l-10 mg-b-0">@dfbot</h6>
            </div>
          </div>
          <div className="d-flex">
            <nav id="channelNav">
              <a 
                href="#modalInvitePeople" 
                data-bs-toggle="modal"
                onClick={handleModal}
              >
                <span data-bs-toggle="tooltip" title="회원 초대"><FeatherIcon icon="user-plus"/></span>
              </a>
              <a 
                id="showMemberList" 
                href="#" 
                data-bs-toggle="tooltip" 
                title="Member list" 
                className={`d-flex align-items-center ${rightSidebar ? "active" : ""}`}
                onClick={handleSidebar}
              >
                <FeatherIcon icon="users"/>
                <span className="tx-medium mg-l-5">25</span>
              </a>
            </nav>
            <nav id="directNav" className={`${more ? "show" : "d-none"}`}>
              <a href="" data-bs-toggle="tooltip" title="Call User"><FeatherIcon icon="phone"/></a>
              <a href="" data-bs-toggle="tooltip" title="User Details"><FeatherIcon icon="info"/></a>
              <a href="" data-bs-toggle="tooltip" title="Add to Favorites"><FeatherIcon icon="star"/></a>
              <a href="" data-bs-toggle="tooltip" title="Flag User"><FeatherIcon icon="flag"/></a>
            </nav>
            <ContentHeaderSearch/>            
            <nav className="mg-sm-l-10">
              <a href="#" onClick={handleMore} data-bs-toggle="tooltip" title="Channel Settings" data-placement="left"><FeatherIcon icon="more-vertical"/></a>
            </nav>
          </div>
        </div>
  )
}

export default ContentHeader