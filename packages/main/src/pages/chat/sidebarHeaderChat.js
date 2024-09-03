import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react';
import { useAppDispatch } from '@zio/shared/redux/hooks'
import { toggleModal } from '@zio/shared/redux/slices/ui'

const SidebarHeaderChat = () => {
  const [openMenu,setOpenMenu] = useState(false)
  const dispatch = useAppDispatch()
  const handleModal = () => {
    dispatch(toggleModal({modal:"confirm"}))
  }  

  return (
    <div className="chat-sidebar-header">
      <a onClick={()=>setOpenMenu(preve=>!preve)} data-bs-toggle="dropdown" className={`cursor-pointer dropdown-link ${openMenu ? "show" : ""}`}>
        <div className="d-flex align-items-center">
            <div className="avatar avatar-sm mg-r-8"><span className="avatar-initial rounded-circle">T</span></div>
            <span className="tx-color-01 tx-semibold">TeamName</span>
        </div>
        <span><FeatherIcon icon="chevron-down"/></span>
      </a>
      <div 
        className={`dropdown-menu dropdown-menu-end shadow ${openMenu ? "show" : ""}`} 
        style={{
          position:"absolute",
          // inset:"0px 0px auto auto",
          margin:"0px",
          transform:"translate3d(0px,61.8182px,0px)"
        }}
      >
        <a href="#" className="dropdown-item"><FeatherIcon icon="user-plus"/> Invite People</a>
        <a href="#" className="dropdown-item"><FeatherIcon icon="plus-square"/> Create Channel</a>
        <a href="#" className="dropdown-item"><FeatherIcon icon="server"/> Server Settings</a>
        <a href="#" className="dropdown-item"><FeatherIcon icon="bell"/> Notification Settings</a>
        <a href="#" className="dropdown-item"><FeatherIcon icon="zap"/> Privacy Settings</a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item"><FeatherIcon icon="edit-3"/> Edit Team Details</a>
        <a href="#" onClick={handleModal} className="dropdown-item"><FeatherIcon icon="shield-off"/> Hide Muted Channels</a>
      </div>
    </div>
  )
}

export default SidebarHeaderChat

