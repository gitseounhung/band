import React from 'react'
import SidebarHeader from './sidebarHeader.js'
import SidebarBody from './sidebarBody.js'
import SidebarFooter from './sidebarFooter.js'
import { ScrollBar } from '@zio/components'

const Sidebar = () => {
  return (
    <div className="chat-sidebar">
        <SidebarHeader />
        <ScrollBar bottom="60px">
          <SidebarBody />
        </ScrollBar>
        <SidebarFooter />
    </div>
  )
}

export default Sidebar