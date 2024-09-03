import React from 'react'
import SidebarBodyChannel from './sidebarBodyChannel'
import SidebarBodyMessage from './sidebarBodyMessage'

const SidebarBody = () => {
  return (
    <div className="chat-sidebar-body">
      <SidebarBodyChannel />
      <SidebarBodyMessage />
    </div>
  )
}

export default SidebarBody