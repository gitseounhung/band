import React from 'react'
import { useAppSelector, useAppDispatch } from '@zio/shared/redux/hooks'
import { toggleLeftSidebar } from '@zio/shared/redux/slices/chat-ui'

const SidebarFooter = () => {
  const { leftSidebar } = useAppSelector((state)=>state.chatUI)
  const dispatch = useAppDispatch()
  const handleClick = (mode) => {
    dispatch(toggleLeftSidebar({mode:mode}))
  }

  return (
        <div className="chat-sidebar-footer">
          <ul className="nav nav-pills nav-fill w-100">
            <li className="nav-item">
              <div onClick={()=>handleClick('doc')} className={`nav-link ${leftSidebar==='doc' ? "active" : ""}`}>문서</div>
            </li>
            <li className="nav-item">
              <div onClick={()=>handleClick('chat')} className={`nav-link ${leftSidebar==='chat' ? "active" : ""}`} href="#">채팅</div>
            </li>
          </ul>
        </div>
    
  )
}

export default SidebarFooter