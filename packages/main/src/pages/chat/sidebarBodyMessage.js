import React from 'react'
import { useAppSelector } from '@zio/shared/redux/hooks'
import SidebarBodyMessageChat from './sidebarBodyMessageChat';
import SidebarBodyMessageDoc from './sidebarBodyMessageDoc';

const SidebarBodyMessage = () => {
  const { leftSidebar } = useAppSelector((state)=>state.chatUI)
  
  return (
    <>    
    {
      leftSidebar!=='doc' && (
        <SidebarBodyMessageChat />        
      )
    }
    {
      leftSidebar==='doc' && (
        <SidebarBodyMessageDoc />
      )
    }    
  </>
  )
}

export default SidebarBodyMessage