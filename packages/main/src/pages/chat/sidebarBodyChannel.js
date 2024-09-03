import React from 'react'
import { useAppSelector } from '@zio/shared/redux/hooks'
import SidebarBodyChannelChat from './sidebarBodyChannelChat';
import SidebarBodyChannelDoc from './sidebarBodyChannelDoc';

const SidebarBodyChannel = () => {
  const { leftSidebar } = useAppSelector((state)=>state.chatUI)

  return (
    <>
      {
        leftSidebar!=='doc' && (
          <SidebarBodyChannelChat />
        )
      }
      {
        leftSidebar==='doc' && (
          <SidebarBodyChannelDoc />
        )
      }

    </>
  )
}

export default SidebarBodyChannel