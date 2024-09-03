import React from 'react'
import { useAppSelector } from '@zio/shared/redux/hooks'
import SidebarHeaderChat from './sidebarHeaderChat'
import SidebarHeaderDoc from './sidebarHeaderDoc'

const SidebarHeader = () => {
  const { leftSidebar } = useAppSelector((state)=>state.chatUI)

  return (
    <>
      {
        leftSidebar==='chat' && (
          <SidebarHeaderChat />
        )
      }
      {
        leftSidebar==='doc' && (
          <SidebarHeaderDoc />
        )
      }

    </>
  )
}

export default SidebarHeader