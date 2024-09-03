import React from 'react'
import FeatherIcon from 'feather-icons-react';
import { useAppDispatch } from '@zio/shared/redux/hooks'
import { toggleModal } from '@zio/shared/redux/slices/ui'

const SidebarBodyChannelChat = () => {
  const dispatch = useAppDispatch()
  const handleModal = () => {
    dispatch(toggleModal({modal:"CreateChannel"}))
  }

  return (
    <div className="flex-fill pd-y-20 pd-x-10">
      <div className="d-flex align-items-center justify-content-between pd-x-10 mg-b-10">
        <span className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1">All Channels</span>
        <a 
          href="#modalCreateChannel" 
          className="chat-btn-add" 
          data-bs-toggle="modal"
          onClick={handleModal}
        >
          <span data-bs-toggle="tooltip" title="Create Channel"><FeatherIcon icon="plus-circle"/></span>
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